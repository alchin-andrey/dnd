<template>
  <AppBtmLink
    class="btm-red"
    icon="return"
    @click="resetState()"
    name="start_over" 
  />
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
	},

  methods: {
    ...mapActions(useMYStore, ["getCreated"]),

    resetState() {
      this.MY = JSON.parse(JSON.stringify(this.MY_def));
      
      this.srd = true,

      this.site_settings = {
        save: {},
        welcome: true,
        logo_anim: false,
        print_dialog: false,
        // old_page: null,
        name_user: false,
        photo_user: false,
        photo_sett: {
          size: 'cover',
          pos_rl: 50,
          pos_tb: 50,
        }
      },
      
      this.form_kof = {
        height: 0.5,
        weight: 0.5,
        age: 0.5,
      };
      
      this.pages = {
        race_page: true,
        class_page: false,
        alignment_page: false,
        // master_page: false,
      };
      this.getCreated();
      this.showHome();
      // setTimeout(() => this.showHome(), 500);
    },

  }
};
</script>
