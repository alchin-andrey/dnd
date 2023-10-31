<template>
	<div class="blank-conteiner int-400-22">
		<div class="blank-scroll">

    <Blank__Page_1 id="print-page-1" :blank_print="MY.param.blank_print" blank_size="print" v-if="PRINT_WORK"/>

    <Blank__Page_2 class="print-page int-400-22 var-blank--print" id="print-page-2" :blank_print="MY.param.blank_print" v-if="PRINT_WORK"/>

      <main class="print-page int-400-22" id="print-page-3">
        <section class="col-wrap-spell">
          <BlankTable__List_3 id="table_list_3" class="main-table mr-min var-blank--print"/>
          <AppSpells
            class="cell-spell mr-min"
            v-for="item in spell_List_3"
						:key="item"
						:spell_obj="item"
            blank_print
					/>
        </section>
			</main>

      <main class="print-page" 
        v-for="arr, i in list_Spell_Left_Arr"
				:key="arr"
        :id="`print-page-4.${i+1}`"
        >
        <section class="col-wrap-spell">
          <AppSpells
            class="cell-spell mr-min"
            v-for="item in arr"
						:key="item"
						:spell_obj="item"
            blank_print
					/>
        </section>
			</main>

      <main class="print-page int-400-22" 
        v-for="arr, i in list_Main_Spells_Arr"
				:key="arr"
        :id="`print-page-4.${i+1}`"
        >
        <section class="col-wrap-spell">
          <BlankTable__List_3 id="table_list_3" class="main-table mr-min var-blank--print" v-if="i == 0"/>
          <AppSpells
            class="cell-spell mr-min"
            v-for="item in arr"
						:key="item"
						:spell_obj="item"
            blank_print
					/>
        </section>
			</main>

      <main class="print-page int-400-22" id="print-page-5">
        <section class="col-wrap-spell">
          <BlankTable__SpellBookTitle id="table_spellbook" class="main-table mr-min var-blank--print"/>
        </section>
			</main>

      <main class="print-page" id="print-page-6">
        <BlankText__All/>
			</main>

      <main class="print-page" v-if="!oldSchool_Blank" id="print-page-7">
        <BlankText__Biography class="wrap-head" />
        <section class="wrap-bottom int-600-28 flex_row">
          <div>{{T('print_characters')}}</div>
          <div>{{T('print_events')}}</div>
          <div>{{T('print_places')}}</div>
        </section>
			</main>


      <main class="col-wrap-spell" v-if="ALL_SPELL">
        <AppSpells
            class="cell-spell mr-min"
            v-for="item, i in spells_Arr"
						:key="item"
            :id="`spell_${i}`"
						:spell_obj="{spell: item}"
            blank_print
					/>
      </main>
		</div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useDicStore } from "@/stores/general/DicStore";
import { useMYStore } from "@/stores/user/MYStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
import BlankPrintLink from "@/components/blank_print/BlankPrintLink.js";
export default {
	name: "BlankPrint",
	mixins: [BlankPrintLink],
  data() {
		return {
      PRINT_WORK: true,
      ALL_SPELL: false,
      
      h_list: null,
      h_table_spells_list: null,
      h_table_spellbook_list: null,
		};
	},

  mounted(el, binding) {
    if(this.ALL_SPELL) {
      this.spells_Arr.forEach((el, i) => {
        const id = `spell_${i}`
        const name = el.find(item => item.name).name
        const h = document.getElementById(id).offsetHeight;
        // console.log('name:', name);
        // console.log('h:', {ua: h, ru: 123, });
        // console.log('-------------------');
      });
    }
    this.h_table_spells_list = document.getElementById("table_list_3").offsetHeight;
    this.h_table_spellbook_list = document.getElementById("table_spellbook").offsetHeight;
    this.h_list = document.querySelector(".col-wrap-spell").offsetHeight;
    // const list = document.querySelector(".print-page");
    // const h_list = list.offsetHeight;
    // const h_pad_top = parseFloat(window.getComputedStyle(list).paddingTop);
    // const h_pad_bottom = parseFloat(window.getComputedStyle(list).paddingBottom);
    // this.h_list = h_list - h_pad_top - h_pad_bottom;
  },

	computed: {
		...mapState(useMYStore, ["MY", "str_Upper"]),
    ...mapState(useDicStore, ["select_lang"]),
		...mapState(useSpellsStore, ["spell_RC_Param_Sort_ApAM", "spells_Arr"]),

    oldSchool_Blank() {
      return this.MY.param.blank_print == 'oldschool';
    },

    // spell_List_3() {
    //   const spell_arr = this.spell_RC_Param_Sort_ApAM;
    //   const lang = this.select_lang;

    //   let count_column = 1;
    //   let h_column = this.h_list - this.h_title_main_spells_list;

    //   let arr = [];
    //   for (let i = 0; i < spell_arr.length; i++) {
    //     const h_spell = spell_arr[i].spell.find(el => el.name).h[lang];
    //     h_column -= h_spell;

    //     if (h_column < 0) {
    //       if(count_column == 3) {
    //         break;
    //       } else {
    //       h_column = this.h_list - h_spell;
    //       count_column++;
    //       }
    //     }
    //     arr.push(spell_arr[i])
    //   }
    //   return arr;
    // },

    spell_List_3() {
      return this.spellTitleList(this.spell_RC_Param_Sort_ApAM, this.h_table_spells_list);
    },

    spell_Left() {
      const num = this.spell_List_3.length
      return this.spell_RC_Param_Sort_ApAM.slice(num);
    },

    list_Spell_Left_Arr() {
      const spell_arr = this.spell_Left;
      const lang = this.select_lang;

      let count_column = 1;
      let h_column = this.h_list;
      let res_arr = [];
      let arr = [];
      for (let i = 0; i < spell_arr.length; i++) {
        const h_spell = spell_arr[i].spell.find(el => el.name).h[lang];
        h_column -= h_spell;

        if (h_column < 0) {
          if(count_column == 3) {
            res_arr.push(arr);
            h_column = this.h_list - h_spell;
            count_column = 1;
            arr = [];
          } else {
          h_column = this.h_list - h_spell;
          count_column++;
          }
        }
        arr.push(spell_arr[i])
        if(i == spell_arr.length - 1) {
            res_arr.push(arr);
          }
      }
      return res_arr;
    },

    list_Main_Spells_Arr() {
      const spell_arr = this.spell_RC_Param_Sort_ApAM;
      const lang = this.select_lang;

      let count_column = 1;
      // let h_column = this.h_list;
      let h_column = this.h_list - this.h_table_spells_list;

      let res_arr = [];
      let arr = [];
      for (let i = 0; i < spell_arr.length; i++) {
        const h_spell = spell_arr[i].spell.find(el => el.name).h[lang];
        h_column -= h_spell;

        if (h_column < 0) {
          if(count_column == 3) {
            res_arr.push(arr);
            h_column = this.h_list - h_spell;
            count_column = 1;
            arr = [];
          } else {
          h_column = this.h_list - h_spell;
          count_column++;
          }
        }
        arr.push(spell_arr[i])
        if(i == spell_arr.length - 1) {
            res_arr.push(arr);
          }
      }
      return res_arr;
    },
	},

  

  methods: {
    spellTitleList(spell_arr, h_table) {
      // const spell_arr = this.spell_RC_Param_Sort_ApAM;
      const lang = this.select_lang;

      let count_column = 1;
      let h_column = this.h_list - h_table;

      let arr = [];
      for (let i = 0; i < spell_arr.length; i++) {
        const h_spell = spell_arr[i].spell.find(el => el.name).h[lang];
        h_column -= h_spell;

        if (h_column < 0) {
          if(count_column == 3) {
            break;
          } else {
          h_column = this.h_list - h_spell;
          count_column++;
          }
        }
        arr.push(spell_arr[i])
      }
      return arr;
    },

  },
};
</script>

<style scoped>
.blank-conteiner {
	/* width: 100%; */
	width: 2088px; /* 1588 */
	/* color: #000000; */
	z-index: 10;
	/* height: 10000%; */
	/* padding: 72px; */
	overflow-y: scroll;
	scrollbar-width: none;
	/* background-color: #ffffff; */
	margin-right: -2088px;
}

.blank-conteiner::-webkit-scrollbar {
	width: 0;
}

.avatar-print-standard {
	width: 100%;
	height: 1404px;
	position: relative;
	display: flex;
	justify-content: space-between;
}

.blank-scroll {
	height: 10000%;
}

.print-page {
	/* width: 100%; */
  width: 2088px;
	height: 2952px;
	padding: 72px;
  color: #000000;
  background-color: #ffffff;
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
  padding-top: 72px;
}

.grid-wrap {
	min-width: 648px;
	max-width: 648px;
	display: flex;
	flex-direction: column;
	gap: 36px;
}

.mr-top-10 {
  margin-top: 10px;
}

.mr-top-72 {
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
