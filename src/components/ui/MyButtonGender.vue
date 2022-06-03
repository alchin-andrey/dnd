<template>
  <div class="gender_item" :class="{active: active_link === select_link}">
    <img :src="getImage(img)" :alt="img" />
  </div>
</template>

<script>
export default {
  name: "MyButtonGender",
  props: {
    img: {
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
.gender_item {
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.gender_item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.active {
  border: 2px solid #ffffff;
}
</style>