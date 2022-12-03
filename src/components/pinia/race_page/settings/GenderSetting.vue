<template>

<GenderCard title="phisiological" :arr="phisiological_Arr"/>
<GenderCard 
v-vpshow="shown_Look" title="feel" :arr="feel_Arr"/>
<transition name="scroll-fade">
<GenderCard v-if="shown_Look" title="look" :arr="look_Arr"/>
</transition>
</template>

<script>
import GenderCard from "@/components/pinia/race_page/settings/GenderCard.vue";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
import { useGenderStore } from "@/stores/modules/GenderStore";
export default {
  name: "GenderChoiceStore",
  components: { GenderCard, },
  computed: {
    ...mapState(useMYStore, ["MY"]),

    ...mapState(useGenderStore, [
      "phisiological_Arr",
      "feel_Arr",
      "look_Arr",
    ]),

    shown_Look() {
      return this.MY.gender.feel !== 'cisgender'
    }
  },

  methods: {
  },
};
</script>

<style scoped>

</style>