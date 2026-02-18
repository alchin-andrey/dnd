<template>
  <div class="blank-conteiner int-400-22">
    <div class="blank-scroll">

      <Blank__Page_1 id="print-page-1" :blank_print="MY.param.blank_print" blank_size="print" v-if="PRINT_WORK" />

      <Blank__Page_2 class="print-page var-blank--print" id="print-page-2" :blank_print="MY.param.blank_print"
        v-if="PRINT_WORK" />
        
    <template v-if="list_Main_Spells_Arr.length !== 0">
      <main class="print-page" v-for="arr, i in list_Main_Spells_Arr" :key="arr" :id="`print-page-3.${i + 1}`">
        <section class="col-wrap-spell">
          <BlankTable__List_3 id="table_list_3" class="main-table mr-min var-blank--print" v-if="i == 0" />
          <AppSpells class="cell-spell mr-min" v-for="item in arr" :key="item" :spell_obj="item" blank_print />
        </section>
      </main>
    </template>

      <main class="print-page" v-if="list_Main_Spells_Arr.length == 0" id="print-page-3.1">
        <section class="col-wrap-spell">
          <BlankTable__List_3 id="table_list_3" class="main-table mr-min var-blank--print" />
        </section>
      </main>

      <template v-if="show_Spellbook">
        <main class="print-page" v-for="arr, i in list_Main_Spells_Arr__Book" :key="arr"
          :id="`print-page-4.${i + 1}`">
          <section class="col-wrap-spell">
            <BlankTable__SpellBookTitle id="table_spellbook" class="main-table mr-min var-blank--print" v-if="i == 0" />
            <template v-for="item in arr" :key="item">
              <div v-if="item == 'hr'" class="hr-select cell-hr mr-min">
                <div class="book-hr"></div>
              </div>
              <AppSpells v-else class="cell-spell mr-min" :spell_obj="item" blank_print book/>
            </template>
          </section>
        </main>
      </template>

      <main class="print-page" id="print-page-5">
        <BlankText__All />
      </main>

      <main class="print-page" id="print-page-6">
        <BlankText__Biography class="wrap-head" />
        <section class="wrap-bottom int-600-28 flex_row">
          <div>{{ T('print_characters') }}</div>
          <div>{{ T('print_events') }}</div>
          <div>{{ T('print_places') }}</div>
        </section>
      </main>


      <main class="col-wrap-spell" v-if="ALL_SPELL">
        <AppSpells class="cell-spell mr-min" v-for="item, i in spells_Arr" :key="item" :id="`spell_${i}`"
          :spell_obj="{ spell: item }" blank_print />
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

      // h_table_spells_list: 1324,
      // h_table_spellbook_list: 1344,
    };
  },

  mounted(el, binding) {
    if (this.ALL_SPELL) {
      this.spells_Arr.forEach((el, i) => {
        const id = `spell_${i}`
        const name = el.find(item => item.name).name
        const h = document.getElementById(id).offsetHeight;
        // console.log('name:', name);
        // console.log('h:', {ua: h, ru: 123, });
        // console.log('-------------------');
      });
    }

    // this.h_table_spells_list = document.getElementById("table_list_3").offsetHeight;
    // this.h_list_spells_main = document.querySelector(".col-wrap-spell").offsetHeight;

    // if (this.show_Spellbook) {
    //   this.h_table_spellbook_list = document.getElementById("table_spellbook").offsetHeight;
    //   this.h_list_spells_book = document.querySelector(".col-wrap-spell").offsetHeight;
    // }

  },

  computed: {
    ...mapState(useMYStore, ["MY", "spells_Setting_Class_Arr_Book"]),
    ...mapState(useDicStore, ["select_lang"]),
    ...mapState(useSpellsStore, [
      // "spell_RC_Param_Sort_ApAM",
      "spell_RC_Param_Sort_ApAM__Main",
      "spell_RC_Param_Sort_ApAM__Book_All",
      "spells_Arr",
    ]),

    oldSchool_Blank() {
      return this.MY.param.blank_print == 'oldschool';
    },

    show_Spellbook() {
      return this.spells_Setting_Class_Arr_Book.length !== 0
    },

    list_Main_Spells_Arr() {
      const spell_arr = this.spell_RC_Param_Sort_ApAM__Main;
      const h_table_main = 1324;
      return this.spellTitleList(spell_arr, h_table_main);
    },

    list_Main_Spells_Arr__Book() {
      const spell_arr = this.spell_RC_Param_Sort_ApAM__Book_All;
      const h_table_book = 1344;
      return this.spellTitleList(spell_arr, h_table_book);
    },

  },

  methods: {
    spellTitleList(spell_arr, h_table) {
      const lang = this.select_lang;

      let count_column = 1;
      const h_list = 2808;
      let h_column = h_list - h_table;

      let res_arr = [];
      let arr = [];
      for (let i = 0; i < spell_arr.length; i++) {
        let h_spell = null;
        if(spell_arr[i] == 'hr') {
          h_spell = 98
        } else {
          h_spell = spell_arr[i].spell.find(el => el.name).h[lang];
        }

        h_column -= h_spell;

        if (h_column < 0) {
          if (count_column == 3) {
            res_arr.push(arr);
            h_column = h_list - h_spell;
            count_column = 1;
            arr = [];
          } else {
            h_column = h_list - h_spell;
            count_column++;
          }
        }
        arr.push(spell_arr[i])
        if (i == spell_arr.length - 1) {
          res_arr.push(arr);
        }
      }
      return res_arr;
    },

  },
};
</script>

<style scoped>
.blank-conteiner {
  /* width: 100%; */
  width: 2088px;
  /* 1588 */
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

.flex_row>div {
  width: 648px;
}

.hr-select {
  height: 98px;
}

.cell-hr {
  width: 100%;
  padding: 48px 56px;
  border: 1px solid #828282;
}

.book-hr {
  width: 100%;
	height: 2px;
	background: #0E1518;
}
</style>
