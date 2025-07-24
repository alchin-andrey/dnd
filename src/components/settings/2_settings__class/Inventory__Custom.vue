<template>
	<div class="flex-row gap-2 int-700">
		<section class="card-main pd-0 pd-r-16 flex-row-sb w-100" :class="style_Br">
			<input 
			class="name-item" 
			:class="{ liner: inputValue_Name, }" 
			size="1" 
			spellcheck="false" 
			v-model="inputValue_Name" 
			type="text"
			maxlength="36" 
			:placeholder="t_Placeholder" 
			onfocus="this.setSelectionRange(0, this.value.length)"
			@blur="stopSelectTexe()" 
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
		:min-value="minValue" 
		:max-value="maxValue" 
		/>
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";

export default {
	name: "Inventory__Custom",
	emits: ["update:modelValue_Name", "update:modelValue_Count", "delete"],
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

		minValue() {
			return this.inputValue_Name ? 1 : 0;
		},

		maxValue() {
			return this.inputValue_Name ? 9999 : 0;
		},

	},

	methods: {
		...mapActions(usePagesStore, ["stopSelectTexe"]),

		delInventoryItem() {
			this.$emit('delete');
		}
	},

	watch: {
		modelValue_Name: {
			handler() {
				this.inputValue_Name = this.modelValue_Name;
			},
			immediate: true,
		},
		modelValue_Count: {
			handler() {
				this.inputValue_Count = this.modelValue_Count;
			},
			immediate: true,
		},
		inputValue_Name: {
			handler() {
				this.$emit("update:modelValue_Name", this.inputValue_Name);
			},
		},
		inputValue_Count: {
			handler() {
				this.$emit("update:modelValue_Count", this.inputValue_Count);
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
}

/* .name-item {
	border-radius: 12px;
} */

input[type="text"].count-item {
	border-radius: 0 12px 12px 0;
	padding: 16px;
}

::placeholder {
	color: rgba(255, 255, 255, 0.2);
	opacity: 1;
	transition: color 0.4s ease;
}

:hover::placeholder {
	color: #FFFFFF;
}

:-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.2);
}

::-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.2);
}

.main-icon {
	width: 18px;
	height: 18px;
	cursor: pointer;
	margin-bottom: 3px;
}

.del_btm {
	/* position: absolute;
	right: 16px;
	top: calc(50% - 9px); */
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}


/* @media screen and (-webkit-min-device-pixel-ratio: 0) {
select:focus, textarea:focus, input:focus {
        font-size: 16px;
				line-height: 18px;
    }
} */
</style>
