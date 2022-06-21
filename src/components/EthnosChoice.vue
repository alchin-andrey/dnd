<template>
  <div class="ethnos_attributes">
    <!-- Этнос_stats + qualities -->
    <my-wrapper v-if="$root.MY.race.stats || $root.MY.race.qualities">
      <my-attribute
        v-for="(val, name) in $root.MY.race.stats"
        :key="name"
        :title="name"
        :type="`${name}_base`"
        plus
        :numb="val"
        :icon="name"
      >
      </my-attribute>
      <my-attribute
        v-for="(val, name) in $root.MY.race.qualities"
        :key="name"
        :title="name"
        :numb="val"
        feet
        :icon="name"
      ></my-attribute>
    </my-wrapper>

    <!-- Этнос_stats + qualities -->

    <!-- Этнос_proficiencies -->
    <my-wrapper v-if="$root.MY.race.proficiencies">
      <my-inventory
        v-for="(val, name) in $root.MY.race.proficiencies"
        :key="name"
        :title="name"
        :item="getProficienciesItem(name)"
      >
      </my-inventory>
    </my-wrapper>
    <!-- Этнос_proficiencies -->

    <!-- Этнос_fines -->
    <my-wrapper v-if="$root.MY.race.fines" gap_8>
      <my-fines
        v-for="item in $root.MY.race.fines"
        :key="item"
        :icon="item.type"
        :title="item.keyword"
        :details="item.details"
      ></my-fines>
    </my-wrapper>
  </div>
  <!-- Этнос_fines -->

  <!-- Этнос_Карточка -->
  <EthnosCard />
  <!-- Этнос_Карточка -->
</template>

<script>
import EthnosCard from "@/components/EthnosCard.vue";

export default {
  name: "EthnosChoice",
  components: {
    EthnosCard,
  },

  methods: {
    getProficienciesItem(name) {
      let arr = [];
      for (let i in this.$root.MY.race.proficiencies[name]) {
        arr.push(this.$root.MY.race.proficiencies[name][i].name);
      }
      return arr;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ethnos_attributes {
  color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin: 0 0 26px 16px;
}

</style>