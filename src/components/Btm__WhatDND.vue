<template>
    <my-selection-card
    v-if="show_Master_Page" 
    arrow
    @click="getPage()"
    >
      <div class="int-700"> {{ T("lobby_button") }}</div>
    </my-selection-card>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useDicStore } from "@/stores/general/DicStore";
import { usePagesStore } from "@/stores/user/PagesStore";

export default {
  name: "Btm__WhatDND",
  computed: {
		...mapState(usePagesStore, ["site_settings", "page_setting_open"]),
    ...mapState(useDicStore, ["select_lang"]),

    show_Master_Page() {
      return this.select_lang !== 'ru'
    }
  },
  methods: {
    ...mapActions(usePagesStore, ["showHome"]),

    getPage() {
      this.showHome();
      this.$router.push('/masters');
      // if(this.page_setting_open == 'main_page') {
      //   this.showHome();
      //   setTimeout(() => this.$router.push('/masters'), 500);
      // } else {
      //   this.showHome();
      //   this.$router.push('/masters');
      // }
    },
  },
};
</script>