<template>
  <div class="ethnos_cards_menu">
    <my-selection-card
      v-for="ethnos in $root.All_Ethnos_Obj"
      :key="ethnos"
      @click="ethnosName(ethnos)"
      :class="{ selection_card_active: $root.MY.ethnos.name === ethnos.name }"
    >
      <div
        class="ethnos_char_back"
        :style="{
          'background-image': `url(${require('@/assets/img/characters/halfling/ethhnos/image.png')})`,
        }"
      >
        <race-body body_part="skin" :ethnos_name="ethnos.name"></race-body>

        <race-body body_part="hair" :ethnos_name="ethnos.name"></race-body>

        <race-body body_part="eyes" :ethnos_name="ethnos.name"></race-body>
      </div>

      <!-- Этнос_Карточка_stats + qualities -->
      <my-wrapper v-if="ethnos.stats || ethnos.qualities">
        <my-attribute
          v-for="(val, name) in ethnos.stats"
          :key="name"
          :title="name"
          :type="`${name}_base`"
          plus
          :numb="val"
          :icon="name"
        >
        </my-attribute>
        <my-attribute
          v-for="(val, name) in ethnos.qualities"
          :key="name"
          :title="name"
          :type="`${name}_base`"
          feet
          :numb="val"
          :icon="name"
        >
        </my-attribute>
      </my-wrapper>
      <!-- Этнос_Карточка_stats + qualities-->

      <!-- Этнос_Карточка_proficiencies -->
      <my-wrapper v-if="ethnos.proficiencies">
        <my-inventory
          v-for="(val, name) in ethnos.proficiencies"
          :key="name"
          :title="name"
          :item="getProfObjItem(ethnos, name)"
        >
        </my-inventory>
      </my-wrapper>
      <!-- Этнос_proficiencies -->

      <!-- Этнос_Карточка_fines -->
      <my-wrapper v-if="ethnos.fines" gap_8>
        <my-fines
          v-for="item in ethnos.fines"
          :key="item"
          :icon="item.type"
          :title="item.keyword"
          :details="item.details"
        ></my-fines>
      </my-wrapper>
      <!-- Этнос_Карточка_fines -->

      <my-card-text
        :title="ethnos.name"
        :text="ethnos.details"
        :rare="ethnos.rare"
      >
      </my-card-text>
    </my-selection-card>
    <!-- Этнос_Карточка -->
  </div>
</template>

<script>
export default {
  name: "EthnosCard",
  methods: {
    getProfObjItem(obj, kay) {
      let arr = [];
      if ((obj.proficiencies || {})[kay]) {
        for (let i in obj.proficiencies[kay]) {
          arr.push(obj.proficiencies[kay][i]);
        }
      }
      return arr;
    },

    ethnosName(obj) {
      this.$root.MY.ethnos = obj;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ethnos_cards_menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ethnos_char_back {
  width: 100%;
  height: 120px;
  background: #0e1518;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.ethnos_char_back img {
  /* height: 390px; */
  position: absolute;
  top: 16px;
}

.ethnos_char_back svg {
  height: 300px;
  position: absolute;
  top: 16px;
  left: 0;
}
</style>