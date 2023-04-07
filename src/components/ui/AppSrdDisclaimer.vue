<template>
  <section class="int-400 flex-col gap-15" v-if="show_Disclaimer || text">
    <div v-if="show_Disclaimer">
      <span class="white-04" v-html="t_Disclaimer_1" />
      <span class="pointer" @click="toggleSrd()" v-html="t_Disclaimer_2" />
      <span class="white-04" v-html="t_Disclaimer_3" />
    </div>
    <div class="white-04" v-if="text">{{ t_Text }}</div>
  </section>
</template>

<script>
import { mapWritableState } from "pinia";
import { useMainStore } from "@/stores/general/MainStore";
export default {
	name: "AppSrdDisclaimer",
  props: {
    disclaimer: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      default: null,
    },
  },
	computed: {
    ...mapWritableState(useMainStore, ["srd"]),
    t_Disclaimer_1: (stor) => stor.t("phb_disclaimer_1") + ' ',
    t_Disclaimer_2: (stor) => stor.t("phb_disclaimer_2") + ' ',
    t_Disclaimer_3: (stor) => stor.t("phb_disclaimer_3"),

    t_Text() {
      return this.t(this.text)
    },

    show_Disclaimer() {
      console.log(this.disclaimer);
      return this.srd && this.disclaimer;
    }
	},

  methods: {
    toggleSrd() {
      this.srd = false;
      // this.srd = !this.srd;
    }
  }
};
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
