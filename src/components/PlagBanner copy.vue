<template>
	<div class="plug-wrap flex-row-c int-700-20">
		<div class="plug-scroll-wrap">
		<div class="plag-scroll">
			<div class="plag-promo-wrap">
				<div class="plag-promo">
				</div>
				<div class="plug-dialog">
					<div class="emog">
						{{ em_Before }}
						<emoji v-if="em_Upd" :data="emojiIndex" :emoji="em_Upd" :set="set_emoji" :size="21" />
						{{ em_After }}
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
// import { mapState } from "pinia";
// import { usePagesStore } from "@/stores/user/PagesStore";
// import Welcome from "@/components/Welcome.vue";
// import Btm__WhatDND from "@/components/Btm__WhatDND.vue";

export default {
	components: {
	},
	name: "PlagBanner",
	computed: {
		t_Details() {
			return this.t("responsive_bottom");
		},

		em_Upd() {
			return this.updEmoji(this.t_Details);
		},

		em_Before() {
			return this.beforeEmoji(this.t_Details);
		},

		em_After() {
			return this.afterEmoji(this.t_Details);
		},
	},
	methods: {
	},
};
</script>

<style scoped>
.plug-wrap {
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: #0e1518;
	position: fixed;
	z-index: 10;
	color: #ffffff;
	/* padding: 20px; */
	/* display: flex;
	justify-content: center;
	align-items: center; */
	/* align-content: center; */
	/* gap: 26px; */
	/* scrollbar-width: none; */
	/* width: 100%; */
	/* height: 100%; */
}

.plug-scroll-wrap {
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
}

.plag-scroll {
	/* margin: 0 auto; */
	padding: 20px 0;
	overflow-y: scroll;
	max-height: 100%;
	/* align-content: center; */
}

.plag-promo-wrap {
	width: 375px;
	height: 760px;
	border: 2px solid rgba(255, 255, 255, 0.2);
	border-radius: 24px;
	overflow: hidden;
	position: relative;
}

.plag-promo {
	width: 100%;
	height: 100%;
	background: url('@/assets/img/other/plag_promo.png') 0 0/cover no-repeat;
	filter: blur(2px);
}

.plug-dialog {
	width: 320px;
	background: rgba(255, 255, 255, 0.06);
	border-radius: 12px;
	padding: 28px;
	backdrop-filter: blur(30px);
	display: flex;
	flex-direction: column;
	gap: 72px;
	z-index: 10;
	position: absolute;
	top: 240px;
	left: calc(50% - 160px);

}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 4px;
}
</style>