<template>
	<div class="flex-row gap-2">
		<section class="card-main pos-rel pd-0 flex-row-sb w-100" :class="style_Br">
			<input
			ref="nameInput"
			class="name-item int-700"
			:class="{ liner: inputValue_Name, }"
			size="1"
			spellcheck="false"
			:value="inputValue_Name" 
			type="text"
			maxlength="36"
			:placeholder="t_Placeholder"
			onfocus="this.setSelectionRange(0, this.value.length)"
			@blur="checkEmptyOnBlur"
			@keyup.enter.prevent="enterKey"
			@paste.stop
			@input="handleInput" 
			@keyup="handleInput"
			autocapitalize="sentences"
			/>
			<div
			v-if="!isNew"
			class="del_btm"
			@click="delInventoryItem"
			>
				<AppSvg class="svg-18 svg-main-f" name="delete" />
			</div>
		</section>
		<AppCountInput
		v-if="!isNew"
		v-model="inputValue_Count"
		:default-value="1"
		:min-value="1"
		:max-value="9999"
		@enter="enterKey"
		/>
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";

export default {
	name: "Inventory__Custom",
	emits: ["update:modelValue_Name", "update:modelValue_Count", "delete", "enter", "blur"],
	data() {
		return {
			inputValue_Name: "",
			inputValue_Count: null,
		};
	},
	props: {
		modelValue_Name: {
			type: String,
			default: null,
		},
		modelValue_Count: {
			type: Number,
			default: 1,
		},
		isNew: {
			type: Boolean,
			default: false,
		},
		index: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["screen_Max"]),

		t_Placeholder() {
			return this.T("inventory_custom_placeholder");
		},

		style_Br() {
			return !this.isNew ? 'br-l-12-r-4' : null;
		},

	},

	methods: {
		...mapActions(usePagesStore, ["stopSelectText"]),

		handleInput(event) {
			const newValue = event.target.value;
			if (this.inputValue_Name !== newValue) {
				this.inputValue_Name = newValue;
				this.$emit("update:modelValue_Name", this.inputValue_Name);
			}
		},

		delInventoryItem() {
			this.$emit('delete');
		},

		enterKey() {
			this.$emit('enter', this.index);
		},

		focusInput() {
			const input = this.$refs.nameInput;
			if (input) {
				input.focus();
				input.scrollIntoView({
					behavior: "smooth",
					block: "center",
					inline: "nearest",
				});
			}
		},

		checkEmptyOnBlur() {
			this.stopSelectText();
			this.$emit('blur');
		},
	},

	watch: {
		modelValue_Name: {
			handler(newVal) {
				if (this.inputValue_Name !== newVal) {
					this.inputValue_Name = newVal;
				}
			},
			immediate: true,
		},
		modelValue_Count: {
			handler() {
				this.inputValue_Count = this.modelValue_Count;
			},
			immediate: true,
		},
		inputValue_Count: {
			handler(newVal) {
				this.$emit("update:modelValue_Count", newVal);
			},
		},
	},
};
</script>

<style scoped>
.liner {
	text-decoration-line: underline;
	text-decoration-color: #ffffff;
}

input[type="text"] {
	padding: 16px 0 16px 16px;
	border-radius: 0;
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	-khtml-border-radius: 0;
	background: transparent;
	outline: none;
	color: #ffffff;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	display: flex;
	align-items: center;
	height: 47px;
	appearance: none;
	-webkit-appearance: none;
}

input[type="text"].count-item {
	border-radius: 0 12px 12px 0;
	padding: 16px;
}

::placeholder {
	color: rgba(255, 255, 255, 0.2);
	opacity: 1;
	transition: color 0.4s ease;
}

:not(:focus):hover::placeholder {
	color: #FFFFFF;
}

:-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.2);
}

::-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.2);
}

.del_btm {
	right: 0;
	width: 50px;
	height: 47px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
}
</style>