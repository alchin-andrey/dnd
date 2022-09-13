<template>
  <div class="int-400">
    <div class="title">{{ title }}</div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "LangCard",
  props: {
    title: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.title {
  height: 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 4px;
}

.text {
  height: 15px;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
}
</style>