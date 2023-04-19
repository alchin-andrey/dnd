<template>
	<div class="wrap-table">
		<!-- <div>{{ t_Fines_Title }}</div> -->
		<div class="flax-col-wrap">
			<div class="column-content">
				<main class="main-fines">
					<section class="row-36">
						<div class="icon">
							<svg
								class="main_svg"
								viewBox="0 0 18 18"
								xmlns="http://www.w3.org/2000/svg"
								v-html="atribute_icon.vision_night"
							></svg>
						</div>
						<div class="int-500-22">{{ t_Vision_Night }}</div>
					</section>

					<section
						class="row-36"
						v-for="skill_pass in skills_passive"
						:key="skill_pass.name"
					>
						<div class="icon">
							<svg
								class="stats_svg"
								:class="{ save_svg: save_Icon(skill_pass.mod) }"
								viewBox="0 0 18 18"
								xmlns="http://www.w3.org/2000/svg"
								v-html="stats_icon[skill_pass.mod]" 
								></svg>
						</div>
						<div class="int-500-22">
							{{ t_Skills_Passive(skill_pass.name) }}
						</div>
					</section>

					<section class="row-36" v-if="show_Spells_Saving">
						<div class="icon">
							<svg
								class="stats_svg"
								:class="{ save_svg: save_Icon(MY_Class.spell_attribute) }"
								viewBox="0 0 18 18"
								xmlns="http://www.w3.org/2000/svg"
								v-html="stats_icon[MY_Class.spell_attribute]"
							></svg>
						</div>
						<div class="int-500-22">{{ t_Spells_Saving }}</div>
					</section>
				</main>

				<section
					class="row-finse"
					v-for="fines in fines_All_Param"
					:key="fines.name"
				>
					<div class="icon">
						<svg
							class="main_svg"
							viewBox="0 0 18 18"
							xmlns="http://www.w3.org/2000/svg"
							v-html="fines_icon[fines.type]"
						></svg>
					</div>
					<!-- <div class="int-500-22 fines-text">{{ t_Fines(fines) }}</div> -->
					<div class="int-500-22 fines-text">
            {{ em_Before(t_Fines(fines)) }}
			<emoji
				v-if="em_Upd(t_Fines(fines))"
				:data="emojiIndex"
				:emoji="em_Upd(t_Fines(fines))"
				:set="set_emoji"
				:size="22"
			/>{{ em_After(t_Fines(fines)) }}
          </div>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
import atribute_icon from "@/assets/catalog/icon/atribute_icon";
import stats_icon from "@/assets/catalog/icon/stats_icon";
import fines_icon from "@/assets/catalog/icon/fines_icon";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
import { useFinesStore } from "@/stores/modules/FinesStore";
export default {
	name: "BlankTable__Fines",
	data() {
		return {
			atribute_icon: atribute_icon,
			stats_icon: stats_icon,
			fines_icon: fines_icon,
		};
	},
	computed: {
		...mapState(useMYStore, [
      "MY",
      "str_Upper",
      "MY_Class",
    ]),
		...mapState(useStatsStore, ["stats_Saving_Arr"]),
		...mapState(useQualitiesStore, ["vision_night_Numb_Class"]),
		...mapState(useSkillsStore, [
			"skills_passive",
			"skills_passive_Print_All_Numb",
		]),
		...mapState(useSpellsStore, [
			"spells_Saving_Numb", 
			"spells_RC_Param",
		]),
		...mapState(useFinesStore, ["fines_All_Param"]),

		t_Fines_Title() {
			return this.str_Upper(this.t("fines"));
		},

		t_Vision_Night() {
			const str = this.str_Upper(this.t("vision_night"));
			const num = this.vision_night_Numb_Class;
			const unit = this.t("f");
			return `${str} ${num + unit}`;
		},

		save_Icon: (stor) => (name) => {
			return stor.stats_Saving_Arr.includes(name);
		},

		t_Skills_Passive: (stor) => (name) => {
			const str_name = stor.t(name);
			const str = str_name.split(" ");
			const str_1 = stor.str_Upper(str[0]);
			const str_2 = stor.str_Upper(str[1]);
			const num = stor.skills_passive_Print_All_Numb(name);
			return `${str_1} ${str_2}: ${num}`;
		},

		show_Spells_Saving() {
			const not_ability_arr = this.spells_RC_Param.filter((el) => el.spell.find((item) => item.name).type !== "ability");
			return not_ability_arr.length !== 0;
		},

		t_Spells_Saving() {
			const spell_attribute = this.MY_Class.spell_attribute;
			const t_title = this.str_Upper(this.t("spell_difficulty"));
			const numb = this.spells_Saving_Numb(spell_attribute);
			const t_attribute = this.str_Upper(this.t(spell_attribute));
			return `${t_title}: ${numb} (${t_attribute})`;
		},

		t_Fines: (stor) => (obj) => {
			const str_1 = stor.str_Upper(stor.t(obj.keyword));
			const str_2 = stor.t(obj.details);
			return `${str_1} ${str_2}`;
		},

    em_Upd: (stor) => (name) => {
			return stor.updEmoji(name);
		},

		em_Before: (stor) => (name) => {
			return stor.beforeEmoji(name);
		},

		em_After: (stor) => (name) => {
			return stor.afterEmoji(name);
		},
	},
};
</script>

<style scoped>
.wrap-table {
	padding: 12px 12px;
	width: 1944px;
	height: 648px;
	border: 1px solid #000000;
	border-radius: 6px;
}

.flax-col-wrap {
	width: 100%;
	/* margin-top: 14px; */
	/* height: 580px; */
	height: 624px;
}

.row-36 {
	display: flex;
	width: 100%;
	height: 36px;
	align-items: center;
}

.row-finse {
	display: flex;
	width: 100%;
	min-height: 36px;
	/* align-items: flex-start; */
}

.fines-text {
	width: 540px;
	padding-top: 2px;
}
.column-content {
	width: 636px;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 16px 12px;
}

.main-fines {
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 18px;
}

.icon {
	width: 36px;
	height: 36px;
	margin-right: 2px;
}

.main_svg {
	width: 36px;
	height: 36px;
	fill: black;
}
.stats_svg {
	width: 36px;
	height: 36px;
	fill: none;
	stroke: black;
	stroke-width: 1px;
}

.save_svg {
	fill: black;
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 2px;
}
</style>
