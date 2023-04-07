<template>
  <div v-if="site_settings.welcome" class="wrapp-baner">
    <my-selection-card passive>
      <Welcome />
      <div class="icone_del"><img @click="close()" src="@/assets/img/icon/close.svg"/></div>
    </my-selection-card>
    <Btm__WhatDND class="marg-top-4" />
</div>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import Welcome from "@/components/Welcome.vue";
import Btm__WhatDND from "@/components/Btm__WhatDND.vue";

export default {
  components: { 
    Welcome, 
    Btm__WhatDND,
  },
  name: "WelcomeBanner",
  computed: {
		...mapState(usePagesStore, ["site_settings"]),
  },
  methods: {
    close() {
        this.site_settings.welcome = false;
      },
  },
};
</script>

<style scoped>
.wrapp-baner {
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