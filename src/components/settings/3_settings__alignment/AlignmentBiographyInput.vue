<template>
	<section class="br-12 pd-16 pd-b-14 cur-text w-100" @click="focusToEnd">
			<textarea 
				ref="textarea"
				rows="1"
				@focus="onFocus"
				@input="autoResize"
				@paste.stop="onPaste"
				spellcheck="false"
				class="int-400-ios mr-b-20"
				v-model="inputValue"
				maxlength="2000"
				:placeholder="t_Placeholder"
			/>
			<div class="int-400 flex-row-sb">
				<div class="w-70"
				:class="[style_Symbols]"
				> {{ num_Symbols }} </div>
				<div 
					v-if="!isAndroid"
					class="cur-p" 
					@pointerdown.prevent
					@click.stop="pasteFromClipboard"
				>
				{{ T('insert') }}
				</div>
				<a target="_blank" :href="biography_Link_GPT">{{ T('use_gpt') }}</a>
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
	data() {
		return {
			inputValue: "",
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
		save_setting: {
			type: String,
			default: null,
		},
		id_link: {
			type: String,
			default: null,
		},
		active_card: {
      type: Boolean,
      default: false,
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

    num_Symbols() {
			let num = this.inputValue.length
			return `${num} / 2000`;
		},

		style_Symbols() {
			let limit = this.inputValue.length == 2000;
			return limit ? 'rare-text' : 'white-04';
		},

		isAndroid() {
			const ua = navigator.userAgent || ""
			const isAndroidUA = /Android/i.test(ua)
			return isAndroidUA
		},
	},
	
	methods: {
		...mapActions(usePagesStore, ["stopSelectText"]),

		async pasteFromClipboard () {
			const el = this.$refs.textarea
			if (!el) return

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

			const text = e.clipboardData?.getData("text") ?? ""
			if (!text) return

			e.preventDefault()
			this.insertTextSmart(el, text)
		},

		insertTextSmart(el, textRaw) {
			const max = 2000
			const value = el.value ?? this.inputValue ?? ""
			const start = el.selectionStart ?? value.length
			const end = el.selectionEnd ?? value.length

			const canAdd = max - (value.length - (end - start))
			if (canAdd <= 0) return

			const text = (textRaw ?? "").slice(0, canAdd)

			el.focus({ preventScroll: true })
			el.setRangeText(text, start, end, "end")

			this.inputValue = el.value
			this.$nextTick(this.autoResize)
		},

		autoResize() {
      const el = this.$refs.textarea
      if (!el) return
      el.style.height = 'auto'
      el.style.height = el.scrollHeight + 'px'
    },

		focusOnly() {
			this.$refs.textarea.focus()
		},

		focusToEnd(e) {
			const el = this.$refs.textarea
			if (!el) return

			if (e?.target === el || el.contains(e?.target)) return

			el.focus()
			const len = el.value?.length ?? 0
			el.setSelectionRange(len, len)
		},

		onFocus() {
			this.$nextTick(this.autoResize)
		},

	},
	watch: {
    inputValue(val) {
			// const clamped = (val ?? "").slice(0, 2000)
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
				// const clamped = (val ?? "").slice(0, 2000)
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
