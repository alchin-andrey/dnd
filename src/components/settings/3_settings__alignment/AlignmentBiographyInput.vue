<template>
	<section class="int-400-ios br-12 pd-16 pd-b-14 cur-text w-100" @click="focusToEnd">
			<textarea 
				ref="textarea"
				rows="1"
				@input="autoResize"
				spellcheck="false"
				class="int-400 mr-b-20"
				v-model="inputValue"
				maxlength="5000"
				:placeholder="t_Placeholder"
				@paste.stop
			/>
			<div class="int-400 flex-row-sb">
				<div class="w-70"
				:class="[style_Symbols]"
				> {{ num_Symbols }} </div>
				<div class="cur-p" 
				@mousedown.prevent 
				@click="pasteFromClipboard"
				>{{ T('insert') }}</div>
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
			return `${num} / 5000`;
		},

		style_Symbols() {
			let limit = this.inputValue.length == 5000;
			return limit ? 'rare-text' : 'white-04';
		},

	},
	methods: {
		...mapActions(usePagesStore, ["stopSelectText"]),

	async pasteFromClipboard () {
		const el = this.$refs.textarea
		if (!el) return

		try {
			const clipTextRaw = await navigator.clipboard.readText()
			if (!clipTextRaw) return

			const max = 5000
			const isFocused = document.activeElement === el

			if (!isFocused) {
				const next = clipTextRaw.slice(0, max)

				el.focus()
				el.setRangeText(next, 0, (el.value ?? "").length, "end")

				this.inputValue = el.value
				this.$nextTick(this.autoResize)
				return
			}

			const value = el.value ?? this.inputValue ?? ""
			const start = el.selectionStart ?? value.length
			const end = el.selectionEnd ?? value.length

			const canAdd = max - (value.length - (end - start))
			if (canAdd <= 0) return

			const clipText = clipTextRaw.slice(0, canAdd)

			el.setRangeText(clipText, start, end, "end")
			this.inputValue = el.value
			this.$nextTick(this.autoResize)
		} catch (e) {
			console.warn("Clipboard read failed:", e)
		}
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

	},
	watch: {
    inputValue(val) {
			// const clamped = (val ?? "").slice(0, 5000)
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
				// const clamped = (val ?? "").slice(0, 5000)
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
