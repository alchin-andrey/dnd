<template>
	<section class="w-100">
			<input
				size="1"
				@keyup="getCustomName()"
				spellcheck="false"
				class="int-700"
				:class="[ 
				style_Pd,
				{ liner: modelValue,}
				]"
				v-model="inputValue"
				type="text"
				maxlength="60"
				:placeholder="t_Placeholder"
				onfocus="this.select()"
			/>
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";

export default {
	name: "AppCustomName",
	data() {
		return {
			inputValue: "",
		};
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

		t_Title() {
			return this.t(this.title);
		},

    t_Placeholder() {
			return this.T("your_option");
		},

		style_Pd() {
			if(this.active_card) return 'pd-rl-14 btm-select'
			else return 'pd-rl-16'
		}

	},
	methods: {
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
		modelValue: {
			handler() {
				this.inputValue = this.modelValue;
			},
			immediate: true,
		},
		inputValue: {
			handler() {
				this.$emit("update:modelValue", this.inputValue);
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
	border-radius: 12px;
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

@media screen and (-webkit-min-device-pixel-ratio: 0) {
select:focus, textarea:focus, input:focus {
        font-size: 16px;
				line-height: 18px;
    }
}

</style>
