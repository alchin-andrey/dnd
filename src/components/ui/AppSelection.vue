<template>
	<div
		class="column"
		:class="{
			'active-link': active && screen_Max,
			'hover': !active && !pass_Link && screen_Max,
			'column-hov cur-p': !pass_Link,
		}"
	>
		<div class="column-title jbm-300">{{ t_Title }}</div>
		<section class="column-link int-400">
			<div 
			class="link-text" 
      :class="{
				'rare-text': rare,
				'white-02': pass_Link,
			}"
			:style="{'width': size_Text}"
			>
				<span>{{ t_Type }}</span>
			</div>
			<AppSvg 
			class="svg-18 svg-main-f" 
			:class="{'svg-none-f': pass_Link}" 
			:name="icon_Svg" />
		</section>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
	name: "AppSelection",
	props: {
		title: {
			type: String,
			default: null,
		},
    t_type: {
			type: String,
			default: null,
		},
		type: {
			type: String,
			default: null,
		},
		type_arr: {
			type: Array,
			default: [],
		},
		rare: {
			type: String,
			default: null,
		},
		active: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY", "MY_Race"]),
		...mapState(usePagesStore, ["screen_Max", "screen_Menu_Num"]),
		pass_Link() {
			let skin = this.MY_Race.race_settings.color.skin.length;
			let eyes = this.MY_Race.race_settings.color.eyes.length;
			let hair = this.MY_Race.race_settings.color.hair.length;
			let fact_1 = this.type == "common";
			let fact_2 = this.title == "color_skin" && skin == 0;
			let fact_3 = this.title == "color_eyes" && eyes == 0;
			let fact_4 = this.title == "color_hair" && hair == 0;
			return fact_1 || fact_2 || fact_3 || fact_4;
		},

		t_Title() {
			return this.t(this.title);
		},
		t_Type() {
      if(this.t_type) {
        return this.t_type;
      } else if (this.type) {
				return this.title === "gender" ? this.gender_Name : this.T(this.type);
			} else if (this.type_arr.length === 0) {
				return "—";
			} else {
				let arr = [];
				for (let i in this.type_arr) {
					arr.push(this.T(this.type_arr[i]));
				}
				return arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join(", ");
			}
		},

		gender_Name() {
			let name = this.T(this.type);
			return this.MY.gender.feel === "cisgender" ? name : `${name} *`;
		},

		size_Text() {
			if(this.screen_Max) {
				return '114px'
			} else {
				const num = this.screen_Menu_Num - 124 - 20*2 - 16*2 - 18;
				return `${num}px`
			}
		},

		icon_Svg() {
			return this.active ? 'arrow_right_small' : 'arrow_down_small';
		}
	},
};
</script>

<style scoped>
.column {
	display: flex;
	align-items: center;
	position: relative;
	gap: 4px;
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

.hover:hover::before {
	content: "";
	position: absolute;
	width: 20px;
	height: 2px;
	left: -40px;
	background: #ffffff;
}

.column-link {
	display: flex;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.column-title {
	min-width: 120px;
}

.lvl-dot::after {
	content: "";
	position: absolute;
	width: 6px;
	height: 6px;
	right: -15px;
	top: calc(50% - 4px);
	background: #0047ff;
	border-radius: 50%;
}

.active-link:before {
	content: "";
	position: absolute;
	width: 35px;
	height: 2px;
	left: -39px;
	background: #ffffff;
}

.column-link span {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.link-text {
	display: flex;
	align-items: center;
}
</style>
