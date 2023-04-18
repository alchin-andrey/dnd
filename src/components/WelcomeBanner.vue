<template>
  <Transition name="slide-fade-left">
    <div @click.stop v-if="site_settings.welcome" class="wrapp-baner">
      <my-selection-card passive>
        <Welcome />
        <div class="icone_del"><img @click="close()" src="@/assets/img/icon/close.svg"/></div>
      </my-selection-card>
      <Btm__WhatDND class="mr-t-4" />
    </div>
  </Transition>
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
		...mapState(usePagesStore, ["site_settings", "setting_open"]),
  },
  methods: {
    close() {
        this.site_settings.welcome = false;
        if(this.setting_open !== 'logo') {
          this.site_settings.logo_anim = true;
        }
      },
  },
};
</script>

<style scoped>
.wrapp-baner {
  width: 394px;
  position: absolute;
  left:50%; 
  margin-left: calc(-394px/2);
  z-index: 500;
}

.icone_del {
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
}


.slide-fade-left-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-left-leave-active {
  /* transition: all 0.8s cubic-bezier(.48,-0.25,.74,.83); */
  transition: all 0.8s cubic-bezier(.7,0,.74,.83);
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  transform: translateX(-500px);
  opacity: 0;
}
</style>