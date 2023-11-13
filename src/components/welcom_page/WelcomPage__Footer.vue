<template>
	<article class="card-flex">
		<section class="card-size">
			<div class="flex-col-sb h-100 w-362">
				<div>
					<div class="int-700-20" v-html="t('join_us')" />
					<div class="int-400 white-04 mr-t-24" v-html="t('join_us_details')"> </div>
					<!-- <div class="int-400 white-04 mr-t-24">
						{{ em_Before }}
						<emoji 
						v-if="em_Upd" 
						:data="emojiIndex" 
						:emoji="em_Upd" 
						:set="set_emoji" 
						:size="14" />
						{{ em_After }}
					</div> -->
					<AppBtmLink class="mr-t-28" :name="t_me_link_name" :link="t_me_link" icon="link" />
				</div>
				<div class="mr-t-108">
					<AppDisclaimer />
					<div class="int-400 white-04 mr-t-15" v-html="t('lobby_footer')" />
				</div>
			</div>
		</section>

		<section class="card-size">
			<section class="flex-col btm-grey br-12 blur-60 h-100 hid">
			<img src="@/assets/img/promo/1.png" alt="donate">
			<Donate class="card-wrapp"/>
		</section>
		</section>
	</article>
</template>
<script>
import Donate from "@/components/Donate.vue";
export default {
	name: "WelcomPage__Footer",
	components: {
		Donate,
	},
	data: () => ({
		t_me_link: 'https://t.me/dndme_club',
		t_me_link_name: 't.me/dndme_club',
	}),

	computed: {
		// t_Join() {
		// 	return this.t('join_us_details')
		// },

		// em_Upd() {
		// 	return this.updEmoji(this.t_Join);
		// },

		// em_Before() {
		// 	return this.beforeEmoji(this.t_Join);
		// },

		// em_After() {
		// 	return this.afterEmoji(this.t_Join);
		// },
	}
};
</script>

<style scoped>
.card-flex {
	display: flex;
	gap: 4px;
	flex-wrap: wrap-reverse;
}
.card-size {
	width: 444px;
	
}

.hid {
	overflow: hidden;
}
.card-wrapp {
	padding: 32px;
}

@media (max-width: 955px) {
	.card-flex {
		gap: 108px;
	}
	.card-wrapp {
		padding: 20px;
	}

	.card-size {
		width: 362px;
	}

	img {
		display: none;
	}
}
</style>