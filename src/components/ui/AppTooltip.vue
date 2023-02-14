<template>
	<div class="relative">
		<div class="h-full" @mouseenter="toggle" @mouseleave="toggle">
			<slot />
		</div>
    <transition name="slide-fade">
		<div class="tooltip-clss int-400" v-show="isShown">
		<!-- <div class="tooltip-clss int-400"> -->
			{{ t_Text }}
		</div>
  </transition>
	</div>
</template>

<script>
export default {
	name: "AppTooltip",
	data() {
		return {
			isShown: false,
		};
	},
	props: {
		text: {
			type: String,
			default: null,
		},
    shown: {
      type: Boolean,
			default: false,
    }
	},

	computed: {
		t_Text() {
			return this.t(this.text);
		},

		// shown_Save() {
		//   return this.save ? this.stats_Saving_Arr.includes(this.icon_Stats) : false;
		// },
	},

  methods: {
    toggle() {
      if(this.shown) {
        this.isShown = !this.isShown
      }
    }
  }
};
</script>

<style scoped>
.relative {
	position: relative;
}

.tooltip-clss {
	position: absolute;
  color: #FFC93D;
	padding: 8px 11px 9px;
  width: 100%;
	max-width: 340px;
	left: 0px;
	top: calc(100% + 8px);

	background: rgba(255, 255, 255, 0.06);
	border: 1px solid #FFC93D;
	backdrop-filter: blur(30px);
	border-radius: 6px;
}

.tooltip-clss::after {
  content: ''; 
  position: absolute; /* Абсолютное позиционирование */
  left: 50%;
  transform: translateX(-50%);
  bottom: 100%; /* Положение треугольника */
  border: 6px solid transparent; /* Прозрачные границы */
  border-bottom: 6px solid #FFC93D; /* Добавляем треугольник */
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .2s ease-in-out;
}
.slide-fade-enter-active {
  transition: all .2s ease-in-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to{
  transform: translateY(5px);
  opacity: 0;
}
</style>
