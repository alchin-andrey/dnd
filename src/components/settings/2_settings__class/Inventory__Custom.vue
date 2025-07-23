<template>
	<div class="flex-row gap-2 int-700">
			<section class="card-main pd-0 flex-row-sb br-l-12 w-100 pos-rel">
				<input
					class="name-item"
					:class="[
					style_Pd,
					{ liner: modelValue,}
					]"
					size="1"
					@keyup="getCustomName()"
					spellcheck="false"
					v-model="inputValue_Name"
					type="text"
					maxlength="36"
					:placeholder="t_Placeholder"
					onfocus="this.setSelectionRange(0, this.value.length)"
					@blur="stopSelectTexe()"
				/>
				<div
        class="del_btm"
        @click="delInventoryItem"
				>
					<AppSvg class="svg-18 svg-main-f" name="delete" />
				</div>
			</section>
		<AppCountInput
      v-model="inputValue_Count"
      :default-value="1"
			:max-value="9999"
    />
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";

export default {
	name: "Inventory__Custom",
	data() {
		return {
			inputValue_Name: "",
			inputValue_Count: "",
		};
	},
	props: {
		modelValue_Name: {
			type: String,
			default: null,
		},
		modelValue_Count: {
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

		// t_Title() {
		// 	return this.t(this.title);
		// },

    t_Placeholder() {
			return this.T("inventory_custom_placeholder");
		},

		style_Pd() {
			if(this.active_card) return 'pd-rl-14 btm-select'
			else return 'pd-rl-16'
		}

	},
	methods: {
		...mapActions(usePagesStore, ["stopSelectTexe"]),

		getCustomName() {
			const arr = this.MY[this.save_setting][this.id_link];
			this.MY._settings_custom_name[this.id_link] = this.inputValue;
			arr.map(n => {
				if(n.hasOwnProperty('name_custom')) {
					return n.name_custom = this.inputValue;
				}
			});
		},
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
	position: absolute;
	right: 16px;
	top: calc(50% - 9px);
	cursor: pointer;
}


/* @media screen and (-webkit-min-device-pixel-ratio: 0) {
select:focus, textarea:focus, input:focus {
        font-size: 16px;
				line-height: 18px;
    }
} */

</style>
