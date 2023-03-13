<template>
	<div class="wrap-table">
		<div>{{ t_Fines }}</div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
export default {
	name: "BlankTable__Fines",

	computed: {
		...mapState(useMYStore, ["MY", "str_Upper"]),
		...mapState(useStatsStore, ["stats_Keys"]),
		...mapState(useSkillsStore, [
			"skills_RC_All_Numb",
			"skills_Keys",
		]),
		...mapState(useQualitiesStore, [
			"hp_Max_Class_Param",
			"armor_Numb_Class_Param",
			"initiative_Numb_Class",
			"speed_Numb_Class",
			"vision_night_Numb_Class",
		]),

    t_Fines() {
      return this.str_Upper(this.t("fines"))
    },

		t_skill_Arr() {
			let arr = [];
			this.skills_Keys.forEach((el) => {
				const t_name = this.t(el);
				const numb = this.skills_RC_All_Numb(el);
				arr.push({ t_name: t_name, numb: numb });
			});
      arr.sort((a, b) => {
				if (a.t_name > b.t_name) {
					return 1;
				}
				if (a.t_name < b.t_name) {
					return -1;
				}
				return 0;
			});
			return arr;
		},

		skill_Numb: (stor) => (numb) => {
			return numb > 0 ? `+${numb}` : numb;
		},

	},
};
</script>

<style scoped>
.wrap-table {
	/* display: flex;
flex-direction: column;
align-items: flex-start; */
padding: 4px 12px 18px;
width: 1944px;
height: 648px;
border: 1px solid #000000;
border-radius: 6px;
}

.column-content {
  width: 584px;
  height: 100%;
	/* height: 1310px; */
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 16px 64px;
}
</style>
