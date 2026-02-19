<template>
	<article @mouseover="stopAnim()">
		<div class="h-100"
		:class="{
			'btm-grey br-12 blur-60 pd-16 hov cur-p': !no_wrapp,
			'animation--vision': !no_wrapp && show_Animation,
			}"
		>
			<AppCharCard welcom_char />
			<div class="int-700 mr-t-16">{{ t_Name }}</div>
			<div class="int-400 mr-t-4 white-04">
				<div>{{ t_Lvl }}</div>
				<div>{{ t_Race_Name }}</div>
				<div v-if="show_Class">{{ t_Class_Name }}</div>
				<div v-if="show_Alignment">{{ t_Alignment_Name }}</div>
			</div>
		</div>
	</article>
</template>
<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";

export default {
	name: "WelcomPage__UserChar",
	props: {
		no_wrapp: {
      type: Boolean,
      default: false,
    },
	},
	computed: {
		...mapState(useMYStore, [
			"MY",
			"arr_Name_Race_Page",
			"arr_Name_Class_Page"
		]),
		...mapState(usePagesStore, ["pages", "site_settings", "welcome_page"]),

		t_Lvl() {
			return `${this.MY.level}${this.t('level_unit')} ${this.t('level')}`
		},

		t_Race_Name() {
			return this.getLine(this.arr_Name_Race_Page);
		},

		t_Class_Name() {
			return this.getLine(this.arr_Name_Class_Page);
		},

		t_Alignment_Name() {
			return this.T(this.MY.alignment);
		},

		show_Class() {
			return this.site_settings.visit_page.class_page
			|| this.pages.class_page
			|| this.pages.alignment_page
		},

		show_Alignment() {
			return this.site_settings.visit_page.alignment_page
			|| this.pages.alignment_page
		},

		t_Name() {
			if (this.show_Alignment) return this.MY.name;
			else return this.T('noname');
		},

		show_Animation() {
      return this.welcome_page.back_anim;
    }
	},

	methods: {
		getLine(arr) {
			return arr.map((el) => this.T(el)).join(", ");
		},

		stopAnim() {
			this.welcome_page.back_anim = false;
		},
	}
};
</script>

<style scoped>
</style>