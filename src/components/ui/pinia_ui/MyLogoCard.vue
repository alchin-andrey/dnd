<template>
	<div
		class="logo"
		:class="{
			card_active: active,
			logo_hover: !active,
      animation__active: show_Animation,
		}"
	>
		<svg 
      class="logo_svg"
			viewBox="0 0 25 29"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.5 1L24.1913 7.75V21.25L12.5 28L0.808657 21.25V7.75L12.5 1Z"
			/>
			<path d="M12.5 21L6.87084 11.25L18.1292 11.25L12.5 21Z" />
			<path d="M6.875 11.25L0.808594 7.75391" />
			<path
				d="M24.1953 7.75391L18.125 11.2578L12.4961 1L6.875 11.2578L0.8125 21.25L12.4961 20.9922V28"
			/>
			<path d="M18.125 11.2578L24.1875 21.25L12.5039 20.9961" />
		</svg>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
	name: "MyLogoCard",
	props: {
		active: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
    ...mapState(usePagesStore, ["site_settings"]),

    show_Animation() {
      return !this.site_settings.welcome && this.site_settings.logo_anim;
    }
	},
};
</script>

<style scoped>
.logo {
	margin-left: -8px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 41px;
	height: 41px;
	background: transparent;
	border-radius: 100%;
	cursor: pointer;
}

.logo_svg{
  width: 25px;
	height: 28px;
  fill: none;
  stroke: #ffffff;
  stroke-width: 0.75;
	stroke-linejoin: "bevel";
}

.logo_hover {
	transition-property: all;
  transition-duration: 0.5s;
}
.logo_hover:hover {
	background: rgba(255, 255, 255, 0.1);
}

.card_active {
	background: #ffffff;
}
.card_active > svg {
  stroke: #0E1518;
}

.animation__active  {
  animation-name: active_back;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(.04,.85,.35,.51);
  animation-delay: 0.8s;
}

@keyframes active_back{
0%{ background: transparent; }
20%{ background: #ffffff; }
40%{ background: #ffffff; }
100%{ background: transparent; }
}

</style>
