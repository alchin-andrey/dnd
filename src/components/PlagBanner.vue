<template>
	<div class="plug-wrap flex-row-c int-700-20">
		<div class="plag-scroll">
			<div class="plag-promo-wrap">
				<div class="plag-promo"></div>

				<section class="plag-absolute flex-col gap-4">
					<div class="plug-dialog">
						<div class="emog">
							<span class="buff">dndme.club</span>
							{{ em_Before }}
							<emoji v-if="em_Upd" :data="emojiIndex" :emoji="em_Upd" :set="set_emoji" :size="21" />
							{{ em_After }}
						</div>
					</div>

					<AppBtmLink
						class="btm-blue"
						name="accelerate_development"
						icon="donate"
						link="https://send.monobank.ua/jar/F8Yfa61mr"
						btm_x2
					/>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PlagBanner",
	computed: {
		t_Details() {
			return this.t("responsive_bottom");
		},

		t_Donat() {
			return this.T("accelerate_development");
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
}

.plag-scroll {
	margin: 0 auto;
	overflow-y: scroll;
	scrollbar-width: none;
	max-height: 100%;
}

.plag-scroll::-webkit-scrollbar {
	width: 0;
	display: none;
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
	opacity: 0.6;
}

.plug-dialog {
	width: 320px;
	background: rgba(255, 255, 255, 0.06);
	border-radius: 12px;
	padding: 24px 28px 28px;
	backdrop-filter: blur(30px);
	-webkit-backdrop-filter: blur(30px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 72px;

}

.plag-absolute {
	position: absolute;
	top: 240px;
	left: calc(50% - 160px);
	z-index: 10;
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 4px;
}

.pd-20-28 {
	padding: 20px 28px;
}
</style>