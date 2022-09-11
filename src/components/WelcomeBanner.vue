<template>
  <div v-if="shown_welcome" class="wrapp">
    <my-selection-card passive>
      <Welcome />
      <img @click="close()" src="@/assets/img/icon/close.svg"/>
    </my-selection-card>
</div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  components: { Welcome },
  name: "WelcomeBanner",
  data() {
    return {
      shown_welcome: true,
    };
  },
  methods: {
    close() {
        this.shown_welcome = false;
      }
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
  z-index: 100;
}

img {
  position: absolute;
  right: 16px;
  top: 16px;
}
</style>