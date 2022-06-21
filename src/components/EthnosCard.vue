<template>
  <div class="ethnos_cards_menu">
        <my-selection-card
          v-for="(val, ethnos) in All_Ethnos_Obj"
          :key="ethnos"
          @click="ethnosName(val)"
          :class="{ selection_card_active: $root.MY.ethnos.name === val.name }"
        >
          <div
            class="char_back"
            :style="{
              'background-image': `url(${require('@/assets/img/characters/halfling/ethhnos/image.png')})`,
            }"
          >
            <race-body body_part="skin" :ethnos_name="ethnos"></race-body>

            <race-body body_part="hair" :ethnos_name="ethnos"></race-body>

            <race-body body_part="eyes" :ethnos_name="ethnos"></race-body>
          </div>

          <!-- Этнос_Карточка_stats + qualities -->
          <my-wrapper
            v-if="
              All_Ethnos_Obj[ethnos].stats || All_Ethnos_Obj[ethnos].qualities
            "
          >
            <my-attribute
              v-for="(val, name) in All_Ethnos_Obj[ethnos].stats"
              :key="name"
              :title="name"
              :type="`${name}_base`"
              plus
              :numb="val"
              :icon="name"
            >
            </my-attribute>
            <my-attribute
              v-for="(val, name) in All_Ethnos_Obj[ethnos].qualities"
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
          <my-wrapper v-if="All_Ethnos_Obj[ethnos].proficiencies">
            <my-inventory
              v-for="(val, name) in All_Ethnos_Obj[ethnos].proficiencies"
              :key="name"
              :title="name"
              :item="getProf_Obj_Item(All_Ethnos_Obj[ethnos], name)"
            >
            </my-inventory>
          </my-wrapper>
          <!-- Этнос_proficiencies -->

          <!-- Этнос_Карточка_fines -->
          <my-wrapper v-if="All_Ethnos_Obj[ethnos].fines" gap_8>
            <my-fines
              v-for="item in All_Ethnos_Obj[ethnos].fines"
              :key="item"
              :icon="item.type"
              :title="item.keyword"
              :details="item.details"
            ></my-fines>
          </my-wrapper>
          <!-- Этнос_Карточка_fines -->

          <my-card-text
            :title="All_Ethnos_Obj[ethnos].name"
            :text="All_Ethnos_Obj[ethnos].details"
            :rare="All_Ethnos_Obj[ethnos].rare"
          >
          </my-card-text>
        </my-selection-card>
        <!-- Этнос_Карточка -->
      </div>
</template>

<script>
export default {
  name: "EthnosCard",
  computed: {
    All_Ethnos_Obj() {
      return this.$root.MY.race.settings.ethnos;
    },

  },

  methods: {
    getProf_Obj_Item(obj, kay) {
      let arr = [];
      if (obj.proficiencies === undefined) {
        return arr;
      }
      for (let i in obj.proficiencies[kay]) {
        arr.push(obj.proficiencies[kay][i].name);
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
<style scoped>
.ethnos_cards_menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

</style>