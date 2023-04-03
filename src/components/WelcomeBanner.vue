<template>
  <div v-if="site_settings.welcome" class="wrapp">
    <my-selection-card passive>
      <Welcome />
      <div class="icone_del"><img @click="close()" src="@/assets/img/icon/close.svg"/></div>
    </my-selection-card>
</div>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import Welcome from "@/components/Welcome.vue";

export default {
  components: { Welcome },
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
</style>