<template>
	<div class="blank-conteiner int-400-22">
		<div class="blank-scroll">

			<main class="print-page" v-if="!PRINT_WORK">
				<section class="blank-head">
					<div class="grid-wrap">
						<BlankTable__MainNames />
						<BlankTable__MainSett />
						<BlankTable__Proficiencies />
					</div>
					<Blank__Avatar /> 
				</section>
				<Blank__SelectMenu />
			</main>

      <main class="print-page" v-if="!PRINT_WORK">
        <section class="wrap-head">
          <BlankTable__QualStats /> 
          <BlankTable__Fines class="marg-top-36"/>
        </section>
        <section class="wrap-bottom">
        <BlankTable__Actions class="marg-top-72"/>
        <BlankTable__Equip class="marg-top-36"/>
        </section>
      </main>

      <main class="print-page" v-if="!PRINT_WORK">
        <section class="col-wrap-spell">
          <BlankTable__List_3 class="main-table mr-min"/>
          <AppSpells
            class="cell-spell mr-min"
            v-for="item in spell_List_3"
						:key="item"
						:spell_obj="item"
            blank_print
					/>
        </section>
			</main>

      <main class="print-page" v-if="!PRINT_WORK" 
        v-for="i in list_Count"
				:key="i">
        <section class="col-wrap-spell">
          <AppSpells
            class="cell-spell mr-min"
            v-for="item in spellsList(i)"
						:key="item"
						:spell_obj="item"
            blank_print
					/>
        </section>
			</main>
      <main class="print-page">
        <BlankText__All/>
			</main>

      <main class="print-page" v-if="!PRINT_WORK" >
        <section class="wrap-head int-600-28">
          <div>{{T('print_biography')}}</div>
        </section>
        <section class="wrap-bottom pad-top-72 int-600-28 flex_row">
          <div>{{T('print_characters')}}</div>
          <div>{{T('print_events')}}</div>
          <div>{{T('print_places')}}</div>
        </section>
			</main>
		</div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
import BlankPrintLink from "@/components/blank_print/BlankPrintLink.js";
export default {
	name: "BlankPrint",
	mixins: [BlankPrintLink],
  data() {
		return {
      PRINT_WORK: false,
      NOT_DEPLOY: true,
      spell_list_1: 7,
      spell_rest: 9,
		};
	},
	computed: {
		...mapState(useMYStore, ["MY", "str_Upper"]),
		...mapState(useSpellsStore, ["spell_RC_Param_Sort_ApAM"]),

    spell_List_3() {
      const num = this.spell_list_1
      return this.spell_RC_Param_Sort_ApAM.slice(0, num);
    },

    spell_Left() {
      const num = this.spell_list_1
      return this.spell_RC_Param_Sort_ApAM.slice(num);
    },

    list_Count() {
      const spells_left = this.spell_Left;
      const num = this.spell_rest
      const list_count = Math.ceil(spells_left.length / num);
      return list_count;
    },

    // spells_List: (stor) => (i) => {
    //   const start = (i - 1) * 10;
    //   const end = 10 + start;
    //   return stor.spell_Left.slice(start, end);
    // },
	},

  methods: {
    spellsList(i) {
      const num = this.spell_rest
      const start = (i - 1) * num;
      const end = num + start;
      return this.spell_Left.slice(start, end);
    },
  }
};
</script>

<style scoped>
.blank-conteiner {
	/* width: 100%; */
	width: 2088px; /* 1588 */
	color: #000000;
	z-index: 10;
	height: 10000%;
	/* padding: 72px; */
	overflow-y: scroll;
	scrollbar-width: none;
	background-color: #ffffff;
	margin-right: -2088px;
}

.blank-scroll {
	height: 10000%;
}

.print-page {
	width: 100%;
	height: 2952px;
	padding: 72px;
}

.blank-conteiner::-webkit-scrollbar {
	width: 0;
}

.blank-head {
	display: flex;
	gap: 72px;
	height: 1403px;
}

.wrap-head {
  height: 1403px;
}

.wrap-bottom {
	border-top: 1px dashed #333333;
	height: 1404px;
}

.grid-wrap {
	min-width: 648px;
	max-width: 648px;
	margin: 1px 1px 0 0;
	display: flex;
	flex-direction: column;
	gap: 36px;
}

.marg-top-36 {
  margin-top: 36px;
}

.marg-top-72 {
  margin-top: 72px;
}

.pad-top-72 {
  padding-top: 72px;
}

.pad-bottom-72 {
  padding-bottom: 72px;
}

.col-wrap-spell {
  width: 648px;
  height: 100%;
  display: flex;
	flex-direction: column;
	flex-wrap: wrap;
}

.cell-spell {
  width: 100%;
  padding: 48px 56px 56px;
  border: 1px solid #828282;
}

.main-table {
  position: relative;
  z-index: 10;
}

.mr-min {
  margin: -1px -1px 0 0;
}

.flex_row {
  display: flex;
}

.flex_row > div {
  width: 648px;
}

</style>
