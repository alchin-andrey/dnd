<template>
  <div class="btm-close" @click="btmClick()">
    <AppSvg class="svg-18 svg-main-f" name="close" />
  </div>
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
  name: "AppBtmCloseMob",
  emits: ["btmGo"],
  computed: {
    ...mapState(usePagesStore, ["screen_Max"]),
  },
  methods: {
    btmClick() {
      this.$emit("btmGo");
    },
  },
};
</script>

<style scoped>
.btm-close {
  min-height: 48px;
  min-width: 48px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1000;
  cursor: pointer;
}

.btm-close:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
