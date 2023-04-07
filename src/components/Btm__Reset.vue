<template>
  <my-selection-card
    reset
    @click="resetState()"
  >
    <div class="int-700">{{ t_Reset }}</div>
  </my-selection-card>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useFormStore } from "@/stores/modules/simple/FormStore";
import { useMainStore } from "@/stores/general/MainStore";
export default {
	name: "Btm__Reset",
	computed: {
    ...mapWritableState(useMYStore, ["MY","MY_def"]),
    ...mapWritableState(usePagesStore, ["site_settings", 'pages', "showHome"]),
    ...mapWritableState(useFormStore, ["form_kof"]),
    ...mapWritableState(useMainStore, ["srd"]),

    t_Reset() {
			return this.T("start_over");
		},
	},

  methods: {
    ...mapActions(useMYStore, ["getCreated"]),

    resetState() {
      this.MY = JSON.parse(JSON.stringify(this.MY_def));
      
      this.srd = true,
      
      this.site_settings.welcome = true;
      
      this.form_kof = {
        height: 0.5,
        weight: 0.5,
        age: 0.5,
      };
      
      this.pages = {
        race_page: true,
        class_page: false,
        alignment_page: false,
        master_page: false,
      };
      this.showHome();
      this.getCreated();
    },

  }
};
</script>
