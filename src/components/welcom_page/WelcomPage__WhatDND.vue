<template>
	<article class="flex-row flex-wrap gap-4 mr-t-108">
		<div class="int-700-20 card-size mr-b-32" v-html="t('lobby_welcome_title')" />

		<div class="int-400-13 card-size">
			<div class="w-362" v-html="t('lobby_what_is_it_details')" />
			<div class="w-362 mr-t-18" v-html="t('lobby_what_is_it_details_2')" />
		</div>
		<a class="what-promo" target="_blank" href="https://www.netflix.com/lv/title/80057281">
			<div class="int-400-13">© Netflix / Stranger Things S4 E1</div>
		</a>
	</article>
</template>
<script>

export default {
	name: "WelcomPage__WhatDND",
};
</script>

<style scoped>

.card-size {
	width: 100%;
	max-width: 394px;
}

.what-promo {
	width: 100%;
	max-width: 792px;
	height: 420px;
	padding: 15px 16px;
	margin-top: 48px;
	background-image: url('@/assets/img/other/what_dnd.png');
	background-position: 100% 100%;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 12px;
	display: flex;
	align-items: flex-end;
	color: rgba(255, 255, 255, 0.40);
}

@media (max-width: 955px) {
	.what-promo {
		height: 362px;
		padding: 11px 12px;
		color: #FFF;
	}
}


</style>