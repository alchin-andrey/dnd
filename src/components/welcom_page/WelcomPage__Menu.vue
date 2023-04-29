<template>
	<div class="pd-rl-32">
		<section class="jbm-300 flex-col gap-18">
			<a href="#welcome-to-dnd#welcom-part1">{{ t("lobby_menu_1") }}</a>
			<a href="#welcome-to-dnd#welcom-part2">{{ t("lobby_menu_2") }}</a>
			<a href="#welcome-to-dnd#welcom-part3">{{ t("lobby_menu_3") }}</a>
			<a href="#welcome-to-dnd#welcom-part4">{{ t("lobby_menu_4") }}</a>
		</section>
		<section class="int-700 flex-col gap-4 mr-t-54">
			<my-selection-card @click="goTo('/')" blue_btn route> {{ t_Btn_Dndme }} </my-selection-card>
			<my-selection-card link>
				<a class="pd-16" target="_blank" href="https://www.buymeacoffee.com/dndme">{{ t_Donat }}</a>
			</my-selection-card>
		</section>
	</div>
</template>
<script>

export default {
	name: "WelcomPage__Menu",
	computed: {
		t_Btn_Dndme() {
			return this.T("how_to_start_2_title");
		},

		t_Donat() {
			return this.T("lobby_support_project");
		},
	},

	methods: {
		goTo(route) {
        this.$router.push(route);
      },
	},
};
</script>
