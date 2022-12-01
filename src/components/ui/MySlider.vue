<template>
	<div class="numb jbm-300">
		<div>{{ numb }}</div>
	</div>
	<div class="name jbm-300">
		<div>{{ t_name }}</div>
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

	<div class="delimiter"></div>
</template>

<script>
import race from "@/assets/catalog/base_data/step1_races.js";

import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
import { usePagesStore } from "@/stores/pages/PagesStore";

export default {
	name: "MySlider",
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

	data() {
		return {
			race: race,
		};
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
		...mapState(useMYStore, ["MY"]),
    ...mapState(usePagesStore, ["pages"]),

		t_name() {
			return this.t(this.name);
		},

		t_Type() {
			return this.t(this.kay_Slider[this.kay_Numb]);
		},

		kay_Slider() {
			return Object.keys(this[this.name]);
		},

		kay_Numb() {
			return this.kay_Slider.indexOf(this.slides);
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
			let arr = this.kay_Slider;
			i++;
			i == this.kay_Slider.length ? (i = 0) : null;
			this.MY[this.name] = this[this.name][arr[i]];

      
		},

		getSlideBack() {
			let i = this.kay_Numb;
			let arr = this.kay_Slider;
			i--;
			i == -1 ? (i = arr.length - 1) : null;
			this.MY[this.name] = this[this.name][arr[i]];
		},
	},
};
</script>

<style scoped>
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
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
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
	/* margin: 22px; */
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

/* .arrow_left img:hover {
  width: 15px;
} */

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

.arrows img:active {
	width: 15px;
}

.push img {
  width: 15px;
}

.delimiter {
	/*width: 256px;*/
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
