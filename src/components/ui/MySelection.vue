<template>
  <div class="column" :class="{ active_link: active}">
    <div class="column_title jbm-300" @click.stop>
      <div class="cursor_pointer">{{ title }}</div>
    </div>
    <div 
    class="column_link int-400" 
    :class="{ 
      rare: rare,
      passive: type === 'Обычный',
      icon: type !== 'Обычный' || !active,
      cursor_pointer: type !== 'Обычный',
      hover: type !== 'Обычный',
      icon_active: active,
      }">
      <div>{{ type }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySelection",
  data() {
    return {
      inputValue: '',
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
    shown: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    modelValue: {
      handler() {
        this.inputValue = this.modelValue;
      },
      immediate: true,
    },
    inputValue: {
      handler() {
        this.$emit("update:modelValue", this.inputValue);
      },
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

.hover:hover::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  left: -165px;
  top: calc(50% - 1px);
  background: #FFFFFF;
}

.active_link:before {
  content: '';
  position: absolute;
  width: 35px;
  height: 2px;
  left: -39px;
  top: calc(50% - 1px);
  background: #FFFFFF;
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
  color: #FFC93D;
}

.passive {
  color: rgba(255, 255, 255, 0.4);
}

.cursor_pointer {
  cursor: pointer;
}

</style>