<template>
  <!-- <div class="int-400" v-if="srd"> -->
  <div class="int-400">
    <span class="white-04" v-html="t_Disclaimer_1" />
    <span class="pointer" @click="toggleSrd()" v-html="t_Disclaimer_2" />
    <span class="white-04" v-html="t_Disclaimer_3" />
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useMainStore } from "@/stores/general/MainStore";
export default {
	name: "AppSrdDisclaimer",
	computed: {
    ...mapWritableState(useMainStore, ["srd"]),
    t_Disclaimer_1: (stor) => stor.t("phb_disclaimer_1") + ' ',
    t_Disclaimer_2: (stor) => stor.t("phb_disclaimer_2") + ' ',
    t_Disclaimer_3: (stor) => stor.t("phb_disclaimer_3"),
	},

  methods: {
    toggleSrd() {
      this.srd = !this.srd;
    }
  }
};
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
