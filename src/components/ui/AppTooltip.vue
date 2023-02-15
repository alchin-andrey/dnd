<template>
	<div class="h-100">
			<div class="flex"
				@mouseenter="toggle"
				@mouseleave="toggle"
			>
				<slot />
        <transition name="slide-fade">
        <div 
        v-show="shown_Tooltip"
        class="tooltip-pointer" 				
        :class="{
          'tooltip-pointer--warn': warn,
				}" />
    </transition>
			</div>
		<transition name="slide-fade">
			<div v-show="shown_Tooltip"
				class="tooltip-clss int-400"
				:class="{
					'tooltip-clss--warn': warn,
				}"
			>
				{{ t_Text }}
			</div>
		</transition>
	</div>

	<!-- <span class="h-100">
			<span
				:class="{
					'tooltip-pointer': shown_Tooltip,
          'tooltip-pointer--warn': warn,
          'tooltip-inline': inline,
				}"
				@mouseenter="toggle"
				@mouseleave="toggle"
			>
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
	</span> -->

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

.flex {
  display: flex;
  flex-direction: column;
}

.tooltip-clss {
	position: absolute;
	color: #ffffff;
	padding: 8px 11px 9px;
	/* width: 100%; */
	/* min-width: min-content; */
	/* min-width: 340px; */
	width: 340px;
	left: 0;
	z-index: 10;
	top: 100%;
	top: calc(100% + 8px);
	background: rgba(255, 255, 255, 0.06);
	border: 1px solid #ffffff;
	backdrop-filter: blur(30px);
	border-radius: 6px;
}

/* .tooltip-clss::after {
	content: "";
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 100%; 
	border: 6px solid transparent; 
	border-bottom: 6px solid #ffffff; 
} */

.tooltip-pointer {
	position: relative;
}


.tooltip-pointer::after {
	content: "";
	position: absolute; 
	top: calc(100% - 4px);
	left: 50%;
	transform: translateX(-50%);
	border: 6px solid transparent;
	border-bottom: 6px solid #ffffff; 
}

.tooltip-clss--warn {
	border-color: #ffc93d;
	color: #ffc93d;
}
.tooltip-clss--warn:after {
	border-bottom-color: #ffc93d;
}
.tooltip-pointer--warn:after {
	border-bottom-color: #ffc93d;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
	transition-property: all;
	transition-duration: 0.3s;
	transition-timing-function: ease-in;
}
.slide-fade-enter-active {
	transition-property: all;
	transition-duration: 0.3s;
	transition-delay: 0.3s;
	transition-timing-function: ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(10px);
	opacity: 0;
}
</style>
