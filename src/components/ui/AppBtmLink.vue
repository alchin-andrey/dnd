<template>
	<div class="btm-grey br-12 blur-60 hov cur-p pos-rel">
		<a :target="target_Link" :href="link">
			<div class="int-700 flex-row-c pd-rl-16 h-47 ">
				<div>
					{{ em_Before }}
					<emoji
					v-if="em_Upd"
					:data="emojiIndex"
					:emoji="em_Upd"
					:set="set_emoji"
					:size="14"
					/>{{ em_After }}
				</div>
			</div>
			<AppSvg 
				class="svg-18 svg-main-f icon-pos"
				:name="icon"
			/>
		</a>
	</div>
</template>

<script>
export default {
	name: "AppBtmLink",
	props: {
		name: {
			type: String,
			default: '',
		},
		icon: {
			type: String,
			default: "arrow_right_small", // return, plus, donate;
		},
		link: {
			type: String,
			default: null,
		},
		link_self: {
      type: Boolean,
      default: false,
    },
	},
	computed: {
		T_Btm_Name() {
			return this.t(this.name)
		},

		em_Upd() {
			return this.updEmoji(this.T_Btm_Name);
		},

		em_Before() {
			return this.beforeEmoji(this.T_Btm_Name);
		},

		em_After() {
			return this.afterEmoji(this.T_Btm_Name);
		},

		target_Link() {
			return this.link_self ? '_self' : '_blank';
		},
	},
};
</script>

<style scoped>

.icon-pos {
	position: absolute;
	right: 12px;
	top: 50%;
	-webkit-transform: translate(0%, -50%);
	-ms-transform: translate(0%, -50%);
	transform: translate(0%, -50%);
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 2px;
}

.h-47 {
	height: 47px;
}
</style>
