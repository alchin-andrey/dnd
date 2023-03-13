<template>
	<div class="wrap-table">
		<div>{{ t_Fines }}</div>
    <div class="flax-col-wrap">
      <div class="column-content">

      <section class="row-36">
        <div class="icon">
				<svg
					class="quql_svg"
					viewBox="0 0 36 36"
					xmlns="http://www.w3.org/2000/svg"
					v-html="print_atribute_icon.vision_night"
				/>
			</div>
			<div class="int-600-22">{{ t_Vision_Night }}</div>
      </section>

      <section class="row-36" 
      v-for="skill_pass in skills_passive" 
      :key="skill_pass.name">
        <div class="icon">
				<svg
					class="stats_svg"
          :class="{ save_svg: save_Icon(skill_pass.mod) }"
					viewBox="0 0 36 36"
					xmlns="http://www.w3.org/2000/svg"
					v-html="print_stats_icon[skill_pass.mod]"
				/>
			</div>
			<div class="int-600-22">{{ t_Skills_Passive(skill_pass.name) }}</div>
      </section>

      <section class="row-36">
        <div class="icon">
				<svg
					class="stats_svg"
          :class="{ save_svg: save_Icon(MY.class.spell_attribute) }"
					viewBox="0 0 36 36"
					xmlns="http://www.w3.org/2000/svg"
					v-html="print_stats_icon[MY.class.spell_attribute]"
				/>
			</div>
			<div class="int-600-22">{{ t_Spells_Saving }}</div>
      </section>


    </div>
    </div>
	</div>
</template>

<script>
import print_atribute_icon from "@/assets/catalog/icon/print_atribute_icon";
import print_stats_icon from "@/assets/catalog/icon/print_stats_icon";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
export default {
	name: "BlankTable__Fines",
	data() {
		return {
			print_atribute_icon: print_atribute_icon,
      print_stats_icon: print_stats_icon,
		};
	},
	computed: {
		...mapState(useMYStore, ["MY", "str_Upper"]),
		...mapState(useStatsStore, ["stats_Saving_Arr"]),
		...mapState(useQualitiesStore, ["vision_night_Numb_Class"]),
    ...mapState(useSkillsStore, [
			"skills_passive",
			"skills_passive_Print_All_Numb",
		]),
    ...mapState(useSpellsStore, ["spells_Saving_Numb"]),

    t_Fines() {
      return this.str_Upper(this.t("fines"))
    },

    t_Vision_Night() {
      const str = this.str_Upper(this.t("vision_night"));
      const num = this.vision_night_Numb_Class;
      const unit = this.t("f")
      return `${str} ${num + unit}`
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
			return `${str_1} ${str_2}: ${num}`
		},

    t_Spells_Saving() {
      const spell_attribute = this.MY.class.spell_attribute;
      const t_title = this.str_Upper(this.t("spell_difficulty"));
      const numb = this.spells_Saving_Numb(spell_attribute);
      const t_attribute = this.str_Upper(this.t(spell_attribute));
      return `${t_title}: ${numb} (${t_attribute})`;
    },

	},
};
</script>

<style scoped>
.wrap-table {
padding: 4px 12px;
width: 1944px;
height: 648px;
border: 1px solid #000000;
border-radius: 6px;
}

.flax-col-wrap {
  width: 100%;
  margin-top: 14px;
  height: 580px;
}

.row-36 {
  display: flex;
  width: 100%;
  height: 36px;
  align-items: center;
}
.column-content {
  width: 636px;
  height: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 16px 12px;
}

.icon {
	width: 36px;
	height: 36px;
	margin-right: 2px;
}

.quql_svg {
	width: 36px;
	height: 36px;
	fill: none;
}
.stats_svg {
	width: 36px;
	height: 36px;
	fill: none;
	stroke: black;
	stroke-width: 2px;
}

.save_svg {
	fill: black;
}
</style>
