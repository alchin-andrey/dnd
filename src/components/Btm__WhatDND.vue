<template>
  <AppBtmLink
    v-if="show_Master_Page"
    @click="getPage()"
    name="lobby_button" 
  />
</template>

<script>
import { mapState, mapWritableState, mapActions } from "pinia";
import { useDicStore } from "@/stores/general/DicStore";
import { usePagesStore } from "@/stores/user/PagesStore";

export default {
  name: "Btm__WhatDND",
  computed: {
		...mapState(usePagesStore, ["site_settings", "page_setting_open"]),
    ...mapWritableState(usePagesStore, ["new_user"]),
    ...mapState(useDicStore, ["select_lang"]),

    show_Master_Page() {
      return this.select_lang !== 'ru'
    }
  },
  methods: {
    ...mapActions(usePagesStore, ["showHome"]),

    getPage() {
      this.showHome();
      this.new_user = false;
      this.$router.push('/welcome-to-dnd');
    },
  },
};
</script>