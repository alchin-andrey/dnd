<template>
	<div class="mg-18">
		<div class="numb jbm-300">
			<div>{{ numb }}</div>
		</div>
		<div class="name jbm-300">
			<div>{{ t_Name }}</div>
		</div>
		<div class="main">
			<transition mode="out-in" name="type">
				<div :key="t_Type">{{ t_Type }}</div>
			</transition>
		</div>
		<div class="arrows">
			<div ref="back" class="arrow_left" @click="getSlideBack()">
				<img alt="arrow_left" src="@/assets/img/icon/arrow_left.svg" />
			</div>
			<div ref="next" class="arrow_right" @click="getSlideNext()">
				<img alt="arrow_right" src="@/assets/img/icon/arrow_right.svg" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useMainStore } from "@/stores/general/MainStore";

export default {
	name: "AppSliderName",
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
			return this.t(this.name);
		},

		t_Type() {
			return this.t(this.key_Slider[this.kay_Numb]);
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
.numb {
	height: 18px;
}

.name {
	height: 18px;
	margin-top: 36px;
}

.main {
	height: 24px;
	margin-top: 4px;
	font-family: "Inter-700";
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;
	letter-spacing: 0.02em;
	color: #ffffff;
	text-transform: capitalize;
}

.arrows {
	margin-top: 18px;
	width: 52px;
	height: 18px;
	display: flex;
	justify-content: space-between;
}

.arrows div {
	height: 32px;
	width: 32px;
	cursor: pointer;
}

.arrow_left {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: -7px;
}

.arrow_right {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: -7px;
}

.arrows img {
	height: 18px;
	width: 18px;
	cursor: pointer;
}

.arrow_left:active img {
	width: 15px;
}

.arrow_right:active img {
	width: 15px;
}

.push img {
	width: 15px;
}

.delimiter {
	height: 1px;
	margin: 40px 0 0 0;
	background: rgba(255, 255, 255, 0.2);
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
