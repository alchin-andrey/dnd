<template>
  <div
    class="color_block"
    :class="{ color_block_active: active_link === select_link }"
  >
    <div
      class="color_block_2"
      :class="{ color_block_2_active: active_link === select_link }"
      :style="{ backgroundColor: color }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "MyColorBlock",
  props: {
    color: {
      type: String,
      default: null,
    },
    active_link: {
      type: String,
      default: null,
    },
    select_link: {
      type: String,
      default: null,
    },
  },
  methods: {
    getImage(name) {
      return require(`@/assets/img/icon/gender/${name}.svg`);
    },
  },
};
</script>

<style scoped>
.color_block {
  width: 50px;
  height: 50px;
  border-radius: 4px;
}

.color_block_2 {
  width: 100%;
  height: 100%;
  max-height: 50px;
  border-radius: 4px;
}

.color_block_active {
  border: 2px solid #ffffff;
  padding: 5px;
}

.color_block_2_active {
  border-radius: 1px;
}
</style>