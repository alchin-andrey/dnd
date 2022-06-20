<template>
  <div
    class="column"
    :class="{
      active_link: active,
      cursor_pointer: type !== 'common',
      hover: type !== 'common',
    }"
  >
    <div class="column_title jbm-300">
      <div>{{ t_Title }}</div>
    </div>
    <div
      class="column_link int-400"
      :class="{
        rare: rare,
        passive: type === 'common',
        icon: type !== 'common' || active,
        icon_active: active,
      }"
    >
      <div>{{ t_Type }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySelection",
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    rare: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    t_Title() {
      return this.t(this.title);
    },
    t_Type() {
      return this.title === 'gender' ? this.getGenderName() : this.t(this.type);
    },
  },
  methods: {
    getGenderName() {
      if (this.$root.MY.gender.feel === this.$root.genders.feel.cisgender) {
        return this.t(this.$root.MY.gender.phisiological);
      } else {
        return `${this.t(this.$root.MY.gender.phisiological)} *`;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
  height: 18px;
  display: flex;
  align-items: center;
  position: relative;
}

.hover:hover::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 2px;
  left: -40px;
  top: calc(50% - 1px);
  background: #ffffff;
}

.active_link:before {
  content: "";
  position: absolute;
  width: 35px;
  height: 2px;
  left: -39px;
  top: calc(50% - 1px);
  background: #ffffff;
}

.column_title {
  width: 120px;
}

.column_title div {
  display: inline;
}

.column_link {
  width: 132px;
  margin-left: 4px;
  position: relative;
}

.column_link:first-letter {
  text-transform: uppercase;
}

.icon::after {
  content: url(@/assets/img/icon/arrow_down_small.svg);
  position: absolute;
  right: 0px;
  top: -2px;
}

.icon_active::after {
  content: url(@/assets/img/icon/arrow_right_small.svg);
  position: absolute;
  right: 0px;
  top: -2px;
}

.rare {
  color: #ffc93d;
}

.passive {
  color: rgba(255, 255, 255, 0.2);
}

.cursor_pointer {
  cursor: pointer;
}
</style>