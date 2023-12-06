<template>
	<article>
		<emoji
			:data="emojiIndex"
			emoji="🎉"
			:set="set_emoji"
			:size="24"
		/>
		<div class="int-700-20" v-html="T_Title" />
			<div class="card-wrapp mr-t-26">
				<AppLoadBtm class="card-size" full/>
				<AppBtmLink
					class="btm-white-dlack card-size" 
					pos="02"
					name="support_project" 
					icon="donate"
					text="support_project_details"
					link="https://cutt.ly/lwkDE0Yn"
				/>
				<AppBtm 
					class="card-size" 
					pos="03"
					name="select_master" 
					text="select_master_details_short"
					@click="goHomePage('masters_part')"
				/>
			</div>
	</article>
</template>
<script>
import { mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";

export default {
	name: "WelcomPage__Start",
	computed: {
		T_Title() {
			return this.t("finish_title");
		},
	},
	methods: {
		...mapActions(usePagesStore, ["goHomePage"]),
	},
};
</script>

<style scoped>
.card-wrapp {
	display: flex;
	gap: 4px;
	height: 280px;
}

.card-size {
	width: 256px;
	height: 100%;
}

@media (max-width: 1279px) {
	.card-wrapp {
		flex-direction: column;
		height: auto;
	}
	.card-size {
		width: 100%;
	}
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 2px;
}
</style>
