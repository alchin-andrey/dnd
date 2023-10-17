<template>
	<article>
		<div class="jbm-300">{{ t("lobby_menu_char") }}</div>
		<div :class="style_Color" @click="btn()">
			<section class="char-back" v-if="new_user">
				<AppSvg class="svg-54 svg-main-f" name="plus" />
			</section>
			<section v-else>
				<AppCharCard welcom_char />
				<div class="int-700 mr-t-16">{{ t_Name }}</div>
				<div class="int-400 mr-t-4 white-04">
					<div>{{ t_Lvl }}</div>
					<div>{{ t_Race_Name }}</div>
					<div v-if="show_Class">{{ t_Class_Name }}</div>
					<div v-if="show_Alignment">{{ t_Alignment_Name }}</div>
				</div>
			</section>
			<section class="flex-row-sb-c mr-t-18">
				<div :class="style_Edit">{{ t_Edit }}</div>
				<AppSvg class="svg-18 svg-main-f" :name="edit_Icon" />
			</section>
		</div>
	</article>
</template>
<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";

import WelcomPage__CardClub from "@/components/welcom_page/WelcomPage__CardClub.vue";
export default {
	name: "WelcomPage__UserChar",
	emits: ["btnClick"],
	components: {
		WelcomPage__CardClub,
	},
	computed: {
		...mapState(useMYStore, [
			"MY",
			"arr_Name_Race_Page",
			"arr_Name_Class_Page"
		]),
		...mapState(usePagesStore, ["new_user", "pages", "site_settings"]),

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

		t_Edit() {
			if (this.new_user) return this.T('lobby_CTA');
			else return this.T('edit');
		},

		edit_Icon() {
			if (this.new_user) return 'arrow_right_small';
			else return 'link_main'
		},

		style_Edit() {
			if (this.new_user) return 'int-700';
			else return 'int-400';
		},

		style_Color() {
			const main = 'hov br-12 blur-60 cur-p pd-16 mr-t-26 dtm-size'
			if (this.new_user) return `btm-blue ${main}`;
			else return `btm-grey ${main}`;
		}
	},

	methods: {
		getLine(arr) {
			return arr.map((el) => this.T(el)).join(", ");
		},

		btn() {
			this.$emit("btnClick");
		},
	}
};
</script>

<style scoped>

.char-back {
	display: flex;
	align-items: center;
	padding-left: 32px;
	width: 100%;
	min-height: 120px;
	/* background: #0e1518; */
	border-radius: 4px;
	background-image: url('@/assets/img/characters/halfling/ethhnos/image.png');
	border: 2px solid rgba(255, 255, 255, 0.20);
}
.dtm-size {
	width: 444px;
}

@media (max-width: 955px) {
	.dtm-size {
		width: 100%;
	}
}
</style>