<template>
	<span class="relative">
		<span class="full" @mouseenter="toggle" @mouseleave="toggle">
			<slot />
		</span>
		<transition name="slide-fade">
			<div
				class="tooltip-clss int-400"
				:class="{
					'tooltip-clss--warn': warn,
				}"
				v-show="shown_Tooltip"
			>
				{{ t_Text }}
			</div>
		</transition>
	</span>
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
		},
		warn: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		t_Text() {
			return this.t(this.text);
		},

		shown_Tooltip() {
			return this.shown && this.isShown;
		},
	},

	methods: {
		toggle() {
			this.isShown = !this.isShown;
		},
	},
};
</script>

<style scoped>
.relative {
	position: relative;
}

/* .full {
  width: 100%;
} */

.tooltip-clss {
	position: absolute;
	color: #ffffff;
	padding: 8px 11px 9px;
	width: 100%;
	/* min-width: min-content; */
	min-width: 150px;
	max-width: 340px;
  text-align: center;
	left: 50%;
  transform:translateX(-50%);
	z-index: 10;
	top: calc(100% + 8px);

	background: rgba(255, 255, 255, 0.06);
	border: 1px solid #ffffff;
	backdrop-filter: blur(30px);
	border-radius: 6px;
}


.tooltip-clss::after {
	content: "";
	position: absolute; /* Абсолютное позиционирование */
	left: 50%;
	transform: translateX(-50%);
	bottom: 100%; /* Положение треугольника */
	border: 6px solid transparent; /* Прозрачные границы */
	border-bottom: 6px solid #ffffff; /* Добавляем треугольник */
}

.tooltip-clss--warn {
	border-color: #ffc93d;
	color: #ffc93d;
}
.tooltip-clss--warn:after {
	border-bottom-color: #ffc93d;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition-property: top, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
}
.slide-fade-enter-active {
  transition-property: top, opacity;
  transition-duration: 0.3s;
  transition-delay: 0.2s;
  transition-timing-function: ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  top: 30px;
	opacity: 0;
}
</style>
