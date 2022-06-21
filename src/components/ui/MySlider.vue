<template>
  <div class="numb jbm-300">
    <div>{{ numb }}</div>
  </div>
  <div class="title jbm-300">
    <div>{{ t_Title }}</div>
  </div>
  <div class="main">
    <transition mode="out-in" name="type">
      <div :key="type">{{ t_Type }}</div>
    </transition>
  </div>
  <div class="arrows">
    <div>
      <img
        @click="getNameBack(arr, type)"
        alt="arrow_left"
        src="@/assets/img/icon/arrow_left.svg"
      />
    </div>
    <div>
      <img
        @click="getNameForward(arr, type)"
        alt="arrow_right"
        src="@/assets/img/icon/arrow_right.svg"
      />
    </div>
  </div>

  <div class="delimiter"></div>
</template>

<script>
export default {
  name: "MySlider",
  props: {
    numb: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    type: {
      type: Object,
      default: {},
    },
    arr: {
      type: Array,
      default: [],
    },
  },

  computed: {
    t_Title() {
      return this.t(this.title);
    },
    t_Type() {
      return this.t(this.type.name);
    },
  },
  methods: {

    getNameBack(arr, i) {
      let j = arr.indexOf(i);
      if (j === 0) {
        this.$root.MY.race = arr[arr.length - 1];
      } else {
        this.$root.MY.race = arr[j - 1];
      }
    },
    getNameForward(arr, i) {
      let j = arr.indexOf(i);
      if (j === arr.length - 1) {
        this.$root.MY.race = arr[0];
      } else {
        this.$root.MY.race = arr[j + 1];
      }
    },
  },
};
</script>

<style scoped>
.numb {
  height: 18px;
}

.title {
  height: 18px;
  margin-top: 36px;
}

.main {
  height: 24px;
  margin-top: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-transform: capitalize;
}

.arrows {
  margin-top: 18px;
  width: 52px;
  height: 18px;
  display: flex;
  justify-content: space-between;
}
.arrows img {
  cursor: pointer;
}

.delimiter {
  width: 256px;
  height: 1px;
  margin: 40px 0;
  background: rgba(255, 255, 255, 0.2);
}

.type-enter-active,
.type-leave-active {
  transition: opacity 0.3s;
}

.type-enter-from,
.type-leave-to {
  opacity: 0;
}
</style>