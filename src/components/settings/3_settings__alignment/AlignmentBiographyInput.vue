<template>
	<section class="br-12 pd-16 pd-b-14 cur-text w-100" @pointerdown.capture="onSectionPointerDown">
			<textarea 
				ref="textarea"
				rows="1"
				@pointerdown="onTextareaPointerDown"
				@keydown="onTextareaKeydown"
				@focus="onFocus"
				@input="onInput"
				@paste.stop="onPaste"
				spellcheck="false"
				:class="[style_Font, 'mr-b-20']"
				v-model="inputValue"
				maxlength="5750"
				:placeholder="t_Placeholder"
			/>
			<div class="int-400 flex-row-sb">
				<div class="w-70"
				:class="[style_Symbols]"
				> {{ num_Symbols }} </div>
				<div 
					v-if="!isAndroid || inputValue"
					class="cur-p" 
					@pointerdown.prevent.stop
					@click.stop="pasteFromClipboard"
				>
				{{ t_Btm }}
				</div>
				<a
					class="color-lightblue"
					target="_blank"
					rel="noopener" 
					:href="biography_Link_GPT"
					@pointerdown.stop
					@click.stop="onUseGPT"
				>{{ T('use_gpt') }}
				</a>
			</div>
	</section>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useAlignmentStore } from "@/stores/modules/AlignmentStore";

export default {
	name: "AlignmentBiographyInput",
	emits: ['show-donate'],
	data() {
		return {
			inputValue: "",
			_skipFocusToEndOnce: false,
		};
	},
	mounted() {
    this.autoResize()
  },
	props: {
		modelValue: {
			type: String,
			default: null,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["screen_Max"]),
		...mapState(useAlignmentStore, ["biography_Link_GPT"]),

		t_Title() {
			return this.t(this.title);
		},

    t_Placeholder() {
			return `${this.MY.name} ${this.t("your_biography")}`;
		},

		t_Btm(){
			return this.inputValue ? this.T('clear') : this.T('insert');
		},

    num_Symbols() {
			let num = this.inputValue.length
			return `${num} / 5750`;
		},

		style_Symbols() {
			let limit = this.inputValue.length == 5750;
			return limit ? 'rare-text' : 'white-04';
		},

		isAndroid() {
			const ua = navigator.userAgent || ""
			const isAndroidUA = /Android/i.test(ua)
			return isAndroidUA
		},

		isIOS() {
			const ua = navigator.userAgent || navigator.vendor || window.opera

			if (/iPad|iPhone|iPod/.test(ua)) return true

			if (
				ua.includes("Mac") &&
				"ontouchend" in document
			) return true

			return false
		},

		style_Font() {
			return this.isIOS ? 'int-400-16' : 'int-400';
		}
	},

	methods: {
		...mapActions(usePagesStore, ["stopSelectText"]),

		onUseGPT() {
      this.$emit('show-donate');
    },

		getScrollParents(el) {
			const parents = []
			let node = el?.parentElement
			while (node && node !== document.body) {
				const style = window.getComputedStyle(node)
				const overflowY = style.overflowY
				const canScroll = (overflowY === "auto" || overflowY === "scroll") && node.scrollHeight > node.clientHeight
				if (canScroll) parents.push(node)
				node = node.parentElement
			}
			return parents
		},
		saveScrollState(el) {
			const parents = this.getScrollParents(el)
			return {
				windowY: window.scrollY,
				parents: parents.map(p => ({ el: p, top: p.scrollTop })),
			}
		},
		restoreScrollState(state) {
			if (!state) return
			try { window.scrollTo({ top: state.windowY, left: window.scrollX, behavior: "instant" }) } catch(e) { window.scrollTo(window.scrollX, state.windowY) }
			for (const p of state.parents) {
				p.el.scrollTop = p.top
			}
		},
		withScrollLock(el, fn) {
			const state = this.saveScrollState(el)
			fn?.()
			requestAnimationFrame(() => {
				this.restoreScrollState(state)
				requestAnimationFrame(() => this.restoreScrollState(state))
			})
		},

		onSectionPointerDown(e) {
			const el = this.$refs.textarea
			if (!el) return

			if (e.target === el || el.contains(e.target)) return

			const interactive = e.target?.closest?.('a, button, input, textarea, select, option, [role="button"], .cur-p')
			if (interactive) return

			const wasFocused = (document.activeElement === el)

			e.preventDefault()

			if (wasFocused) return

			this.withScrollLock(el, () => {
				el.focus({ preventScroll: true })
				const len = el.value?.length ?? 0
				el.setSelectionRange(len, len)
			})
		},

		onTextareaPointerDown() {
			const el = this.$refs.textarea
			if (!el) return
			const state = this.saveScrollState(el)
			requestAnimationFrame(() => this.restoreScrollState(state))
			requestAnimationFrame(() => this.restoreScrollState(state))
		},
		
		onTextareaKeydown(e) {
			const el = this.$refs.textarea
			if (!el) return
			const isMod = e.ctrlKey || e.metaKey
			if (!isMod) return
			const key = (e.key || "").toLowerCase()
			if (!["v","z","x"].includes(key)) return
			const state = this.saveScrollState(el)
			requestAnimationFrame(() => this.restoreScrollState(state))
			requestAnimationFrame(() => this.restoreScrollState(state))
		},


		async pasteFromClipboard () {
			const el = this.$refs.textarea
			if (!el) return

			if (this.inputValue) {
				this.clearWithUndo(el)
				return
			}


			let clipTextRaw = ""
			try {
				if (navigator.clipboard?.readText) {
					clipTextRaw = await navigator.clipboard.readText()
				}
			} catch (e) {
				clipTextRaw = ""
			}

			if (!clipTextRaw) {
				el.focus({ preventScroll: true })
				return
			}

			this.insertTextSmart(el, clipTextRaw)
		},

		onPaste(e) {
			const el = this.$refs.textarea
			if (!el) return

			const text = e.clipboardData?.getData("text/plain") ?? ""
			if (!text) return

			e.preventDefault()
			this.insertTextSmart(el, text)
		},

		insertTextSmart(el, textRaw) {
			const max = 5750

			const normalizedRaw = (textRaw ?? "").replace(/\r\n?/g, "\n")

			const value = el.value ?? this.inputValue ?? ""
			const start = el.selectionStart ?? value.length
			const end = el.selectionEnd ?? value.length

			const canAdd = max - (value.length - (end - start))
			if (canAdd <= 0) return

			const text = normalizedRaw.slice(0, canAdd)

			this.withScrollLock(el, () => {
				el.focus({ preventScroll: true })
				el.setRangeText(text, start, end, "end")
			})

			this.inputValue = el.value
			this.$nextTick(this.autoResize)
		},

		onInput(e) {
			const el = this.$refs.textarea
			if (!el) return

			const max = 5750
			const type = e?.inputType || ""

			this.$nextTick(this.autoResize)

			if (type === "historyUndo" || type === "historyRedo") {
				if (el.value.length > max) {
					const pos = Math.min(el.selectionStart ?? max, max)

					this.withScrollLock(el, () => {
						el.value = el.value.slice(0, max)
						el.setSelectionRange(pos, pos)
						el.dispatchEvent(new Event("input", { bubbles: true }))
					})
				}
			}
		},

		autoResize() {
			const el = this.$refs.textarea
			if (!el) return
			const state = this.saveScrollState(el)
			el.style.height = "auto"
			el.style.height = el.scrollHeight + "px"

			this.restoreScrollState(state)
			requestAnimationFrame(() => this.restoreScrollState(state))
		},

		focusOnly() {
			const el = this.$refs.textarea
			if (!el) return
			this.withScrollLock(el, () => el.focus({ preventScroll: true }))
		},

		onFocus() {
			this.$nextTick(this.autoResize)
		},

		clearWithUndo(el) {
			if (!el) return

			this.withScrollLock(el, () => {
				el.focus({ preventScroll: true })

				el.setSelectionRange(0, el.value.length)

				let ok = false
				try {
					ok = typeof document.execCommand === "function"
						&& document.execCommand("insertText", false, "")
				} catch (e) {}

				if (!ok) {
					el.setRangeText("", 0, el.value.length, "end")
					el.dispatchEvent(new Event("input", { bubbles: true }))
				}
			})

			this.$nextTick(this.autoResize)
		},

	},
	watch: {
    inputValue(val) {
			// const clamped = (val ?? "").slice(0, 5750)
			// if (clamped !== val) {
			// 	this.inputValue = clamped
			// 	return
			// }
      this.$emit('update:modelValue', this.inputValue)
      this.$nextTick(this.autoResize)
    },

    modelValue: {
      immediate: true,
      handler(val) {
				// const clamped = (val ?? "").slice(0, 5750)
				// if (clamped === this.inputValue) return
				// this.inputValue = clamped
				// this.$nextTick(this.autoResize)
        if (val === this.inputValue) return
        this.inputValue = val ?? ''
        this.$nextTick(this.autoResize)
      }
    }
	},
};
</script>

<style scoped>
textarea {
	border-radius: 0;
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	-khtml-border-radius: 0;
	background: transparent;
	outline: none;
  color: #ffffff;
	width: 100%;
	resize: none;
	overflow: hidden;
	appearance: none;
	-webkit-appearance: none;
}

::placeholder {
	color: rgba(255, 255, 255, 0.2);
	opacity: 1;
}

:-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.2);
}

::-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.2);
}

</style>
