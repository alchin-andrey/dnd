<template>
	<div class="btm-grey hov br-12 blur-60 cur-p dtm-size">
		<a target="_blank" :href="club_param.link">
			<div class="flex-col-sb gap-18 pd-16 h-100">
				<section>
				<img class="w-100 br-4" :src="Club_Img" :alt="club_param.link_name">
					<div class="int-700 mr-t-16">{{ t(club_param.name) }}</div>
					<div class="int-400 mr-t-4 white-04" v-html="t(club_param.details)" />
				</section>
				<section class="flex-row-sb-c int-400">
				<div>{{ club_param.link_name }}</div>
				<AppSvg class="svg-18 svg-main-f" :path="ui_icon.link_main"/>
				</section>
			</div>
		</a>
	</div>
</template>
<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";

export default {
	name: "WelcomPage__CardClub",
	data: () => ({
		ui_icon,
	}),
	props: {
		club_param: {
			type: Object,
			default: {},
		},
	},
	computed: {
		Club_Img() {
			return require(`@/assets/img/clubs/${this.club_param.id}.png`);
		},
	},
};
</script>

<style scoped>
.dtm-size {
	width: 220px;
	height: 266px;
}

@media (max-width: 480px) {
	.dtm-size {
		width: 100%;
		height: 356px;
	}
}
</style>