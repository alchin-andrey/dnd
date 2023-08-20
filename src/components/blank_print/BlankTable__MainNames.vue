<template>
  <div :class="[style_Grid, style_Grid_Cell]">
    <div class="grid-title int-600-48" v-if="show_Name">
      <div class="text-item">{{ MY.name }}</div>
    </div>
    <AppMainCell class="cell br-left" title="race" :content="MY_Race.name" v-if="show_Part_1"/>
    <AppMainCell class="cell" title="ethnos" :content="MY_Ethnos.name" v-if="show_Part_1"/>

    <AppMainCell class="cell br-left" title="class" :content="MY_Class.name" v-if="show_Part_1"/>
    <AppMainCell class="cell" title="subclass" :content="MY_Subclass?.name" v-if="show_Part_1"/>

    <AppMainCell class="cell grid__full " title="past" :content="MY_Backstory.name" v-if="show_Part_2"/>

    <AppMainCell class="cell br-left" title="alignment" :content="MY.alignment" v-if="show_Part_2"/>
    <AppMainCell class="cell" title="main_feature" :content="MY_Main_Feature_Name" v-if="show_Part_2"/>

    <AppMainCell class="cell br-left" title="ideals" :content="MY_Ideals_Name" v-if="show_Part_3"/>
    <AppMainCell class="cell" title="commitment" :content="MY_Commitment_Name" v-if="show_Part_3"/>

    <AppMainCell class="cell br-left" title="secret" :content="MY_Secret_Name" v-if="show_Part_3"/>
    <AppMainCell class="cell" title="weakness" :content="MY_Weakness_Name" v-if="show_Part_3"/>
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

    full_Type() {
      return this.type == 'full'
    },

    name_Type() {
      return this.type == 'name'
    },

    part_Type() {
      return this.type == 'part'
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
  },
};
</script>

<style scoped>
.grid-body--name {
  display: grid;
  grid-template-rows: 144px;
  grid-template-columns: 100%;
}

.grid-body--full {
  display: grid;
  grid-template-rows: 144px repeat(6, 72px);
  grid-template-columns: repeat(2, 50%);
}

.grid-body--part {
  display: grid;
  grid-template-rows: repeat(2, 72px);
  grid-template-columns: repeat(2, 50%);
}

.grid-title {
  grid-column: span 2;

  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #000;
  overflow: hidden;
}

.text-item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.grid__full {
  grid-column: span 2;
  border-left: 1px solid #000000;
}

.cell {
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
}

.br-left {
  border-left: 1px solid #000000;
}
.cell-body--full> :first-child {
  border-radius: 6px;
}

.cell-body--top> :first-child {
  border-radius: 6px 6px 0 0;
  border-top: 1px solid #000000;
}
.cell-body--simple> :first-child {
  border-radius: 6px 0 0 0;
  border-top: 1px solid #000000;
}

.cell-body--simple> :nth-child(2) {
  border-radius: 0 6px 0 0;
  border-top: 1px solid #000000;
}

.cell-body> :last-child {
  border-radius: 0 0 6px 0;
}

.cell-body> :nth-last-child(2) {
  border-radius: 0 0 0 6px;
}
</style>
