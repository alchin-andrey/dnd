<template>
	<section class="flex-col">
		<my-card-text
			class="marg-bot"
			v-if="spells_setting.details"
			:text="spells_setting.details"
		/>

		<section class="flex-col gap-34" v-if="numb_Manna_Spell.length !== 0">
			<div v-for="i in numb_Manna_Spell" :key="i">
				<AppSpellsPacks
					class="flex-col gap-34"
					v-if="filter_Spells(i).length !== 0"
					:text="String(i)"
				>
					<section class="flex-col">
						<my-selection-card
							no_blur
							v-for="list_el in filter_Spells(i)"
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
		</section>

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

		numb_Manna_Spell() {
      let res_arr = [];
      this.spells_setting.list.forEach(el => {
        el.spells[0].spell.forEach((item, i) => {
          if(item.name) {
            res_arr.push(i);
          }
        })
      });
      const unique_numb = [...new Set(res_arr)];
      unique_numb.sort((a, b) => a - b);
			return unique_numb;
		},
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
}

.mar-bot-34 {
	margin-bottom: 34px;
}

.gap-34 {
	gap: 34px;
}

.manna-numb {
	margin-left: 16px;
}

.rare-text {
	color: #ffc93d;
}
</style>
