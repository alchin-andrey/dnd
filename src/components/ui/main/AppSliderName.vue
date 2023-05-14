<template>
	<div class="mg-18">
		<div class="jbm-300 mr-b-36" v-if="screen_Max">{{ numb }}</div>
		<div class="flex-row gap-14">
			<div class="stripe-item--slider" v-if="!screen_Max" />
			<div :class="[stule_Mob]">
				<section>
					<div class="jbm-300">{{ t_Name }}</div>
					<transition mode="out-in" name="type">
						<div class="int-700-20 mr-t-4" :key="t_Type">{{ t_Type }}</div>
					</transition>
				</section>
				<section class="arrows-wrapp">
					<div ref="back" class="arrow-left" @click="getSlideBack()">
						<AppSvg class="svg-main-f" :path="ui_icon.arrow_left"/>
					</div>
					<div ref="next" class="arrow-right" @click="getSlideNext()">
						<AppSvg class="svg-main-f" :path="ui_icon.arrow_right"/>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMainStore } from "@/stores/general/MainStore";

export default {
	name: "AppSliderName",
	data() {
		return {
			ui_icon: ui_icon,
		};
	},
	props: {
		numb: {
			type: String,
			default: null,
		},
		name: {
			type: String,
			default: null,
		},
		slides: {
			type: String,
			default: null,
		},
	},

	mounted() {
		document.addEventListener("keydown", this.listenerDown);
		document.addEventListener("keyup", this.listenerUp);
	},

	beforeUnmount() {
		document.removeEventListener("keydown", this.listenerDown);
		document.removeEventListener("keyup", this.listenerUp);
	},
	computed: {
		...mapState(usePagesStore, ["screen_Max"]),
		...mapState(useMYStore, [
      "MY",
      "MY_Race",
      "MY_Class",
    ]),
    ...mapState(useMainStore, [
      "race_Key",
      "class_Key",
    ]),

		t_Name() {
			return this.T(this.name);
		},

		t_Type() {
			return this.T(this.key_Slider[this.kay_Numb]);
		},

		key_Slider() {
      if(this.name == "race") return this.race_Key
      if(this.name == "class") return this.class_Key
		},

    slide_Name() {
      if(this.name == "race") return this.MY_Race.name;
      if(this.name == "class") return this.MY_Class.name;
    },

		kay_Numb() {
			return this.key_Slider.indexOf(this.slide_Name);
		},

		stule_Mob() {
			if(this.screen_Max) return 'flex-col gap-4'
			if(!this.screen_Max) return 'flex-row-sb w-100'
		},
	},
	methods: {
		listenerDown(event) {
			if (event.code == "ArrowRight") {
				this.$refs.next.classList.add("push");
			}
			if (event.code == "ArrowLeft") {
				this.$refs.back.classList.add("push");
			}
		},

		listenerUp(event) {
			if (event.code == "ArrowRight") {
				this.getSlideNext();
				this.$refs.next.classList.remove("push");
			}
			if (event.code == "ArrowLeft") {
				this.getSlideBack();
				this.$refs.back.classList.remove("push");
			}
		},

		getSlideNext() {
			let i = this.kay_Numb;
			let arr = this.key_Slider;
			i++;
			i == arr.length ? (i = 0) : null;
      this.getName(arr[i]);
		},

		getSlideBack() {
			let i = this.kay_Numb;
			let arr = this.key_Slider;
			i--;
			i == -1 ? (i = arr.length - 1) : null;
			this.getName(arr[i]);
		},

    getName(name) {
      if(this.name == "race") {
        this.MY.race_name = name;
      } else if(this.name == "class") {
        this.MY.class_name = name;
      }
    }
	},
};
</script>

<style scoped>
.mg-18 {
	margin-bottom: 18px;
}

.arrows-wrapp {
	width: 52px;
	display: flex;
	justify-content: space-between;
}

.arrows-wrapp > div {
	height: 32px;
	width: 25px;
	cursor: pointer;
}

.arrow-left {
	display: flex;
	align-items: center;
}

.arrow-right {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.arrows-wrapp svg {
	height: 18px;
	width: 18px;
	cursor: pointer;
}

.arrow-left:active svg,
.arrow-right:active svg,
.push svg {
	width: 15px;
}

@media (max-width: 1279px) {
	.arrows-wrapp {
		width: 100px;
		display: flex;
		justify-content: space-between;
	}
	.arrows-wrapp > div {
		height: 48px;
		width: 48px;
		background: rgba(255, 255, 255, 0.06);
		border-radius: 32px;
	}

	.arrows-wrapp > div:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.arrow-left {
		padding-left: 18px;
	}

	.arrow-right {
		padding-right: 18px;
	}

}

.type-enter-active,
.type-leave-active {
	transition: opacity 0.3s;
}

.type-enter-from,
.type-leave-to {
	opacity: 0;
}
</style>
