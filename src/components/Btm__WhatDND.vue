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
		...mapState(usePagesStore, ["site_settings", "page_Open", "showHome"]),
    ...mapState(useDicStore, ["select_lang"]),

    show_Master_Page() {
      return this.select_lang !== 'ru'
    }
  },
  methods: {
    ...mapActions(usePagesStore, ["goPage"]),

    getPage() {
      this.site_settings.old_page = this.page_Open;
      this.goPage('master_page');
      this.showHome();
    },
  },
};
</script>