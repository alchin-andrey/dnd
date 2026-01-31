<template>
  <div :class="[style_Grid, style_Grid_Cell]">
    <div class="grid-title int-600-48-blank" v-if="show_Name">
      <div class="text-item">{{ MY.name }}</div>
    </div>
    <AppMainCell class="cell br-left" title="race" :content="MY_Race.name" v-if="show_Part_1"/>
    <AppMainCell class="cell" title="ethnos" :content="MY_Ethnos.name" v-if="show_Part_1"/>

    <AppMainCell class="cell br-left" title="class" :content="MY_Class.name" v-if="show_Part_1"/>
    <AppMainCell class="cell" title="subclass" :content="MY_Subclass?.name" v-if="show_Part_1"/>

    <AppMainCell class="cell grid-span-2" title="past" :content="MY_Backstory.name" v-if="show_Part_2"/>

    <AppMainCell class="cell br-left" title="alignment" :content="MY.alignment" v-if="show_Part_2"/>
    <AppMainCell class="cell" title="main_feature" :content="empty_Сell(MY_Main_Feature_Name)" v-if="show_Part_2"/>

    <AppMainCell class="cell br-left" title="ideals" :content="empty_Сell(MY_Ideals_Name)" v-if="show_Part_3"/>
    <AppMainCell class="cell" title="commitment" :content="empty_Сell(MY_Commitment_Name)" v-if="show_Part_3"/>

    <AppMainCell class="cell br-left" title="secret" :content="empty_Сell(MY_Secret_Name)" v-if="show_Part_3"/>
    <AppMainCell class="cell" title="weakness" :content="empty_Сell(MY_Weakness_Name)" v-if="show_Part_3"/>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useAlignmentStore } from "@/stores/modules/AlignmentStore";
export default {
  name: "BlankTable__MainNames",
  props: {
    type: {
      type: String,
      default: 'full',
    },
    part: {
      type: Number,
      default: null,
    },
  },

  computed: {
    ...mapState(useMYStore, [
      "MY",
      "str_Upper",
      "MY_Race",
      "MY_Ethnos",
      "MY_Backstory",
      "MY_Class",
      "MY_Subclass",
    ]),
    ...mapState(useAlignmentStore, [
      "MY_Main_Feature_Name",
      "MY_Ideals_Name",
      "MY_Commitment_Name",
      "MY_Secret_Name",
      "MY_Weakness_Name",
    ]),

    empty_Сell: (stor) => (item) => {
        return item !== 'your_option' ? item : '';
    },

    full_Type() {
      return this.type == 'full'
    },

    name_Type() {
      return this.type == 'name'
    },

    part_Type() {
      return this.type == 'part'
    },

    show_Name() {
      return !this.part_Type;
    },

    show_Part_1() {
      return !this.name_Type && this.part == 1 || this.full_Type;
    },

    show_Part_2() {
      return !this.name_Type && this.part == 2 || this.full_Type;
    },

    show_Part_3() {
      return !this.name_Type && this.part == 3 || this.full_Type;
    },

    style_Grid() {
      if (this.full_Type) return 'grid-body--full';
      if (this.name_Type) return 'grid-body--name';
      if (this.part_Type) return 'grid-body--part';
    },

    style_Grid_Cell() {
      if (this.name_Type) return 'cell-body--full';
      if (this.part == 2) return 'cell-body cell-body--top';
      if (this.part == 1 || this.part == 3) return 'cell-body cell-body--simple';
      else return 'cell-body--top cell-body';
    },
  },
};
</script>

<style scoped>
.grid-body--name {
  display: grid;
  grid-template-rows: var(--px-144);
  grid-template-columns: 100%;
}


.grid-body--full {
  display: grid;
  grid-template-rows: var(--px-144) repeat(6, var(--px-72));
  grid-template-columns: repeat(2, 50%);
}

.grid-body--part {
  display: grid;
  grid-template-rows: repeat(2, var(--px-72));
  grid-template-columns: repeat(2, 50%);
}

.grid-title {
  grid-column: span 2;

  padding: 0 var(--px-24);
  display: flex;
  align-items: center;
  justify-content: center;

  border: var(--border-blank);
  overflow: hidden;
}

.text-item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.grid-span-2 {
  grid-column: span 2;
  border-left: var(--border-blank);
}

.cell {
  padding: 0 var(--px-12);
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-right: var(--border-blank);
  border-bottom: var(--border-blank);
}

.br-left {
  border-left: var(--border-blank);
}
.cell-body--full> :first-child {
  border-radius: var(--cell-rad);
}

.cell-body--top> :first-child {
  border-top-left-radius: var(--cell-rad);
  border-top-right-radius: var(--cell-rad);
  border-top: var(--border-blank);
}
.cell-body--simple> :first-child {
  border-top-left-radius: var(--cell-rad);
  border-top: var(--border-blank);
}

.cell-body--simple> :nth-child(2) {
  border-top-right-radius: var(--cell-rad);
  border-top: var(--border-blank);
}

.cell-body> :last-child {
  border-bottom-right-radius: var(--cell-rad);
}

.cell-body> :nth-last-child(2) {
  border-bottom-left-radius: var(--cell-rad);
}
</style>
