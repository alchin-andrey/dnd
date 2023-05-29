<template>
  <section 
  class="int-400 flex-col gap-15"
  :class="{'pd-rl-16': !screen_Max}"
  v-if="show_Disclaimer || text"
  >
    <div v-if="show_Disclaimer">
      <span class="white-04" v-html="t_Disclaimer_1" />
      <span class="pointer" @click="toggleSrd()" v-html="t_Disclaimer_2" />
      <span class="white-04" v-html="t_Disclaimer_3" />
    </div>
    <div class="white-04" v-if="text">{{ t_Text }}</div>
  </section>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import { useMainStore } from "@/stores/general/MainStore";
import { usePagesStore } from "@/stores/user/PagesStore";
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
    ...mapWritableState(useMainStore, ["srd", "can_show_phb"]),
    ...mapState(usePagesStore, ["screen_Max"]),
    t_Disclaimer_1: (stor) => stor.t("phb_disclaimer_1") + ' ',
    t_Disclaimer_2: (stor) => stor.t("phb_disclaimer_2") + ' ',
    t_Disclaimer_3: (stor) => stor.t("phb_disclaimer_3"),

    t_Text() {
      return this.t(this.text)
    },

    show_Disclaimer() {
      return this.srd && this.disclaimer && this.can_show_phb;
    }
	},

  methods: {
    toggleSrd() {
      // this.srd = !this.srd;
      this.srd = false;
    }
  }
};
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
