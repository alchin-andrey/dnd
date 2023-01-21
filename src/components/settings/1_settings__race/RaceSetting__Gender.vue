<template>

<GenderCard title="phisiological" :arr="phisiological_Arr"/>
<GenderCard 
v-vpshow="shown_Look" title="feel" :arr="feel_Arr"/>
<transition name="scroll-fade">
<GenderCard v-if="shown_Look" title="look" :arr="look_Arr"/>
</transition>
<GenderCard title="attraction" :arr="attraction_Arr"/>
</template>

<script>
import GenderCard from "@/components/settings/1_settings__race/GenderCard.vue";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useGenderStore } from "@/stores/modules/simple/GenderStore";
export default {
  name: "RaceSetting__Gender",
  components: { GenderCard, },
  computed: {
    ...mapState(useMYStore, ["MY"]),

    ...mapState(useGenderStore, [
      "phisiological_Arr",
      "feel_Arr",
      "look_Arr",
      "attraction_Arr",
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