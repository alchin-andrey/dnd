<template>
	<transition name="mode-fade" mode="out-in">
		<!-- //NOTE - Main -->
		<section v-if="shown_Main_Paramm">
			<ClassParam__Stats hr />
			<ClassParam__Skills hr />
			<ClassParam__SkillsPassive hr />
			<ClassParam__Qualities hr />
			<ClassParam__Charges hr />
			<ClassParam__Proficiencies hr />
			<ClassParam__Fines hr />
			<ClassParam__Spells hr />
			<ClassParam__Weapons hr />
			<ClassParam__EquipKit hr />
			<ClassParam__Text />
		</section>

		<!-- //NOTE - Stats -->
		<section v-else-if="shown_Stats_Param">
			<TransitionGroup tag="ul" name="fade-slide" class="container">
				<ClassParam__Stats key="stats" v-if="shown_Feats" hr />
				<ClassParam__Qualities
					key="qualities"
					v-if="shown_Feats || shown_Stats"
					hr
				/>
				<ClassParam__SkillsAll key="skillsAll" hr />
				<ClassParam__SkillsPassive key="skillsPassive" all />
			</TransitionGroup>
		</section>

		<section v-else-if="shown_Many_Spells" key="many_spells">
			<ClassParamSett__Spells
				v-for="item in spells_Settings_Class_Arr"
				:key="item.id_link"
				:shown="class_page.shown[item.id_link]"
				:spells_setting="item"
			/>
		</section>
	</transition>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";
import BackgroundParam from "@/components/parameters/3_param__background/BackgroundParam.js";
export default {
	name: "BackgroundParameters",
	mixins: [BackgroundParam],
	computed: {
		...mapState(usePagesStore, ["class_page", "setting_open"]),
		...mapState(useMYStore, ["spells_Settings_Class_Arr"]),

		shown_Feats() {
			const feats = this.setting_open?.slice(0, 5) == "feats";
			return feats;
		},

		shown_Skills() {
			const skills = this.setting_open?.includes("skills");
			return skills;
		},

		shown_Stats() {
			const stats = this.setting_open?.includes("stats");
			return stats;
		},

		shown_Many_Spells() {
			const many_spells = this.setting_open?.includes("many_spells");
			return many_spells;
		},

		shown_Stats_Param() {
			return this.shown_Stats || this.shown_Feats || this.shown_Skills;
		},

		shown_Main_Paramm() {
			return !this.shown_Stats_Param && !this.shown_Many_Spells;
		},
	},
};
</script>

<style scoped>
.mode-fade-enter-active,
.mode-fade-leave-active {
	transition: opacity 0.2s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
	opacity: 0;
}

.container {
	position: relative;
	padding: 0;
}

.fade-slide-move,
.fade-slide-enter-active,
.fade-slide-leave-active {
	transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
	opacity: 0;
	/* transform: scaleY(0.01) translate(30px, 0); */
	transform: translateY(-170px);
}

.fade-slide-leave-active {
	position: absolute;
	width: 100%;
}

/* .fade-move, */
.fade-enter-active,
.fade-leave-active {
	transition: all 0.6s ease-out;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	/* transform: scaleY(0.01) translate(30px, 0); */
	/* transform: translateY(-170px); */
}

.fade-leave-active {
	opacity: 0;
	/* position: absolute;
	width: 100%; */
}
</style>
