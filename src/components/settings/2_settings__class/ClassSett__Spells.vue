<template>
	<section class="flex-col">
		<my-card-text
			class="marg-bot"
			v-if="spells_setting.details"
			:text="spells_setting.details"
		/>

		<div v-for="i in 10" :key="i">
			<AppSpellsPacks v-if="filter_Spells(i - 1).length !== 0" :numb="i - 1">
				<section class="flex-col">
					<my-selection-card
						no_blur
						v-for="list_el in filter_Spells(i - 1)"
						:key="list_el"
					>
						<AppSpells
							v-for="item in list_el.spells"
							:key="item"
							:spell_obj="item"
							:active_card="false"
						/>
					</my-selection-card>
				</section>
			</AppSpellsPacks>
		</div>

		<!-- <div class="flex-col gap-26">
			<div class="jbm-300 manna-numb">{{ t("spells")}} [0]</div>
			<section class="flex-col">
			  <my-selection-card
  				no_blur
  				v-for="list_el in spells_setting.list"
  				:key="list_el"
  			>
  				<AppSpells
  					v-for="item in list_el.spells"
  					:key="item"
  					:spell_obj="item"
  					:active_card="false"
  				/>
  			</my-selection-card>
			</section>
		</div> -->

		<!-- <AppCusstomCard
			v-for="list_el in custom.list"
			:key="list_el"
      :setting_name="custom.name"
			:custom="list_el"
			@click="getCustomSelect(list_el)"
			:active_boll_link="getActive(list_el)"
      @clickOneMore="getCustomSelect"
		/> -->
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export default {
	name: "ClassSett__Spells",
	props: {
		spells_setting: {
			type: Object,
			default: null,
		},
	},
	computed: {
		// STORE
		...mapState(useMYStore, [
			"MY",
			"Mastery",
			"Mastery_x2",
			"level_Filter_Arr",
		]),

		filter_Spells: (stor) => (numb) => {
			const res = stor.spells_setting.list.filter(
				(el) => el.spells[0].spell[numb]?.name
			);
			return res;
		},

		// filter_Spell: (stor) => (list_el) => {
		//   console.log('stor.level_Filter_Arr(list_el.spells):', stor.level_Filter_Arr(list_el.spells))
		//   return stor.level_Filter_Arr(list_el.spells);
		// }
	},
};
</script>

<style scoped>
.marg-bot {
	margin-bottom: 16px;
}

.flex-col {
	display: flex;
	flex-direction: column;
	gap: 8px;
	/* margin: 0 0 26px 16px; */
}

.gap-26 {
	gap: 26px;
}

.manna-numb {
	margin-left: 16px;
}

.rare-text {
	color: #ffc93d;
}
</style>
