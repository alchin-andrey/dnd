<template>
  <div v-if="site_settings.welcome" class="wrapp">
    <my-selection-card passive>
      <Welcome />
      <div class="icone_del"><img @click="close()" src="@/assets/img/icon/close.svg"/></div>
    </my-selection-card>
    <my-selection-card
    v-if="show_Master_Page" 
    class="marg-top-4" 
    arrow
    @click="getPage()"
    >
      <div class="int-700"> {{ T("lobby_button") }}</div>
    </my-selection-card>
</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useDicStore } from "@/stores/general/DicStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import Welcome from "@/components/Welcome.vue";

export default {
  components: { Welcome },
  name: "WelcomeBanner",
  computed: {
		...mapState(usePagesStore, ["site_settings", "page_Open"]),
    ...mapState(useDicStore, ["select_lang"]),

    show_Master_Page() {
      return this.select_lang !== 'ru'
    }
  },
  methods: {
    ...mapActions(usePagesStore, [
			"goPage",
		]),

    getPage() {
      this.site_settings.old_page = this.page_Open;
      this.goPage('master_page')
    },

    close() {
        this.site_settings.welcome = false;
      },
  },
};
</script>

<style scoped>
.wrapp {
  width: 394px;
  position: absolute;
  right: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  z-index: 500;
}

.icone_del {
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
}

.marg-top-4 {
  margin-top: 4px;
}
</style>