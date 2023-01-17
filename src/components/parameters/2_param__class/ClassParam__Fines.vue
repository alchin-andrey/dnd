<template>
	<my-wrapper
				v-if="shown_Fines_ClassParam"
				gap_8
				:hr="hr"
			>
				<!-- RACE -->
        <RaceParam__Fines class="passive" />
				<BaseFines
					v-for="item in fines_Race_Param"
					:key="item"
					:fines="item"
          passive
				/>
				<my-fines
					v-for="item in fines_Race_Param"
					:key="item"
					:icon="item.type"
					:title="item.keyword"
					:details="item.details"
					passive
				/>
				<!-- RACE -->
				<!-- CLASS -->
        <BaseFines
					v-for="item in fines_Class_Param"
					:key="item"
					:fines="item"
				/>
				<my-fines
					v-for="item in fines_Class_Param"
					:key="item"
					:icon="item.type"
					:title="item.keyword"
					:details="item.details"
				></my-fines>
				<!-- CLASS -->
			</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
// import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
import RaceParam__Fines from "@/components/parameters/1_param__race/RaceParam__Fines.vue";
export default {
	name: "ClassParam__Fines",
  components: {
		RaceParam__Fines,
	},
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
    ...mapState(useMYStore, ["MY", "MY_Subclass", "level_Filter_Arr"]),
		// ...mapState(useProficienciesStore, [
		// 	"proficiencies",
		// 	"proficiencies_Race_Params_Any",
		// 	"proficiencies_Arr_Class",
		// ]),

    fines_Race_Lvl() {
			return this.level_Filter_Arr(this.MY.race?.fines);
		},

    fines_Ethnos_Lvl() {
			return this.level_Filter_Arr(this.MY.ethnos?.fines);
		},

    fines_Race_Param() {
      const race_fines = this.fines_Race_Lvl;
      const ethnos_fines = this.fines_Ethnos_Lvl;
			return race_fines.concat(ethnos_fines);
		},

    fines_Class_Lvl() {
			return this.level_Filter_Arr(this.MY.class?.fines);
		},

    fines_Subclass_Lvl() {
			return this.level_Filter_Arr(this.MY_Subclass?.fines);
		},

    fines_Class_Param() {
      const class_fines = this.fines_Class_Lvl;
      const subclass_fines = this.fines_Subclass_Lvl;
			return class_fines.concat(subclass_fines);
		},

    shown_Fines_ClassParam() {
			return (
				this.fines_Race_Param.length !== 0 ||
				this.fines_Class_Param.length !== 0
			);
		},

    
	},
};
</script>

<style scoped>
.passive {
  opacity: 0.2;
}
</style>
