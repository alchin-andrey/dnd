<template>
	<div class="column" 
	:class="{ 
		'active-link': active && screen_Max,
		'hover': screen_Max,
		}">
		<div class="column-title jbm-300">{{ t_Title }}</div>
		<div class="column_link int-400" :style="{'width': size_Text}">
			<div>{{ value }} {{ t_Unit }}</div>
			<div class="note">{{ t_Note }}</div>
		</div>
		<AppSvg class="svg-18 svg-main-f" :path="ui_icon.arrow_slider" />
	</div>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
	name: "AppController",
	data() {
		return {
			ui_icon: ui_icon,
		};
	},
	props: {
		modelValue: {
			type: Number,
			default: null,
		},
		title: {
			type: String,
			default: null,
		},
		value: {
			type: Number,
			default: null,
		},
		unit: {
			type: String,
			default: null,
		},
		note: {
			type: String,
			default: null,
		},
		active: {
			type: Boolean,
			default: false,
		},
		age: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		...mapState(usePagesStore, ["screen_Max", "screen_Menu_Num"]),
		t_Title() {
			return this.t(this.title);
		},

		t_Note() {
			return this.T(this.note);
		},

		t_Unit() {
			return this.age ? this.t(this.age_Units) : this.t(this.unit);
		},

		age_Units() {
			let mod10 = Math.abs(this.value % 10);
			let mod100 = Math.abs(this.value % 100);
			if (mod100 > 10 && mod100 < 20) {
				return "years";
			} else if (mod10 >= 2 && mod10 <= 4) {
				return "yeara";
			} else if (mod10 === 1) {
				return "year";
			} else {
				return "years";
			}
		},

		size_Text() {
			if(this.screen_Max) {
				return '114px'
			} else {
				const num = this.screen_Menu_Num - 124 - 20*2 - 16*2 - 18;
				return `${num}px`
			}
		},
	},
};
</script>

<style scoped>
.column {
	display: flex;
	align-items: center;
	position: relative;
	cursor: pointer;
}

@media (max-width: 1279px) {
	.column {
		padding: 16px;
		background: rgba(255, 255, 255, 0.06);
		backdrop-filter: blur(30px);
		-webkit-backdrop-filter: blur(30px);
		border-radius: 12px;
		isolation: isolate;
	}

	.column:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
}

.hover:hover::after {
	content: "";
	position: absolute;
	width: 20px;
	height: 2px;
	left: -40px;
	top: calc(50% - 1px);
	background: #ffffff;
}

.active-link:before {
	content: "";
	position: absolute;
	width: 35px;
	height: 2px;
	left: -39px;
	top: calc(50% - 1px);
	background: #ffffff;
}

.column-title {
	min-width: 120px;
}

.column_link {
	margin-left: 4px;
	position: relative;
	display: flex;
	white-space: nowrap;
}

.note {
	margin-left: 8px;
	color: rgba(255, 255, 255, 0.2);
	white-space: nowrap;
	overflow: hidden; 
	text-overflow: ellipsis;
}
</style>
