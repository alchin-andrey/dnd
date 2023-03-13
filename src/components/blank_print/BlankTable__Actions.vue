<template>
	<div class="wrap-section">
		<div class="wrap-table-left">
			<section class="table-col-1">
				<div class="cell-1-1 row-flex int-500-22">
					<div class="int-600-28">{{ t_Free_Action }}</div>
					<div>• {{ T("action_short_phrase") }}</div>
					<div>• {{ T("action_with_backpack") }}</div>
					<div>• {{ T("actions_with_door") }}</div>
					<div>• {{ T("action_button_click") }}</div>
					<div>• {{ T("action_other") }}</div>
				</div>
				<div class="cell-1-2">
          <div class="int-600-28">{{ T("movement") }}</div>
          <div class="move-numb int-600-72">
          {{ speed_Numb }} <span class="print-grey">{{speed_Pref}}</span>
          </div>
        </div>
			</section>

			<section class="table-col-2"></section>

			<section class="table-col-1">
				<div class="cell-3-1"></div>
				<div class="cell-3-2"></div>
			</section>
		</div>
		<div class="wrap-table-right"></div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
export default {
	name: "BlankTable__Actions",
	computed: {
		...mapState(useMYStore, ["MY", "str_Upper"]),
		...mapState(useQualitiesStore, ["speed_Numb_Class"]),
		...mapState(useSpellsStore, ["spells_Saving_Numb"]),

		t_Free_Action() {
			const str = this.T("free_action");
			return `1 × ${str}`;
		},

    speed_Numb() {
      return this.speed_Numb_Class / 5
    },

    speed_Pref() {
      return `× 5${this.t("f")}`
    }

		// t_Fines_Title() {
		// 	return this.str_Upper(this.t("fines"));
		// },

		// t_Fines: (stor) => (obj) => {
		// 	const str_1 = stor.str_Upper(stor.t(obj.keyword));
		// 	const str_2 = stor.t(obj.details);
		// 	return `${str_1} ${str_2}`;
		// },

		// em_Upd: (stor) => (name) => {
		// 	return stor.updEmoji(name);
		// },

		// em_Before: (stor) => (name) => {
		// 	return stor.beforeEmoji(name);
		// },

		// em_After: (stor) => (name) => {
		// 	return stor.afterEmoji(name);
		// },
	},
};
</script>

<style scoped>
.print-grey {
  color: #828282;
}
.wrap-section {
	display: flex;
	justify-content: space-between;
}

.wrap-table-left {
	/* padding: 12px 12px; */
	display: flex;
	width: 1528px;
	height: 684px;
	border: 1px solid #000000;
	border-radius: 6px;
}
.wrap-table-right {
	/* padding: 12px 12px; */
	width: 382px;
	height: 684px;
	border: 1px solid #000000;
	border-radius: 6px;
}

.table-col-1 {
	width: 382px;
}

.cell-1-1 {
	height: 468px;
	padding: 4px 12px 8px;
}

.cell-1-2 {
	padding: 4px 12px 8px;
	flex: 1 auto;
	border-top: 1px solid #000000;
}
.cell-3-1 {
	height: 342px;
}

.cell-3-2 {
	flex: 1 auto;
	border-top: 1px solid #000000;
}

.table-col-2 {
	width: 764px;
	border-right: 1px solid #000000;
	border-left: 1px solid #000000;
}

.row-flex {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.move-numb {
  margin-top: 32px;
  text-align: center;
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

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 2px;
}
</style>
