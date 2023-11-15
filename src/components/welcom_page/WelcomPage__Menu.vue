<template>
	<div class="h-100 flex-col-sb mr-t-40 pd-rlb-32">
		<section class="int-700 flex-col gap-4">
			<AppBtmLink
			class="btm-blue"
			name="lobby_menu_char"
			link="#welcom-part1"
			link_self
			/>
			<AppBtmLink 
			name="lobby_menu_3" 
			icon="arrow_down_small" 
			link="#welcom-part5"
			link_self 
			/>
		</section>

		<section>
			<div class="jbm-300 flex-col gap-18">
				<a href="#welcom-part2">{{ t("lobby_menu_1") }}</a>
				<a href="#welcom-part3">{{ t("lobby_menu_4") }}</a>
				<a href="#welcom-part4">{{ t("lobby_menu_2") }}</a>
			</div>
			<AppBtmLink
			class="int-700 btm-white mr-t-36"
			name="lobby_support_project" 
			icon="donate" 
			link="#welcom-part6"
			link_self
			/>
		</section>
	</div>
</template>
<script>

export default {
	name: "WelcomPage__Menu"
};
</script>
