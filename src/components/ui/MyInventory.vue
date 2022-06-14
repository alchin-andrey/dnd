<template>
  <div v-if="!ethnos || item" class="column">
    <div
      class="title jbm-300"
      :class="{
        passive: getPassive(item),
        icon: getIcon(item),
      }"
    >
      {{ t(title) }}<span>:</span>
    </div>
    <div class="item int-400" :class="{ passive: getPassive(item) }">
      {{ getItem(item) }}
    </div>
  </div>

</template>

<script>
export default {
  name: "MyInventory",
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    item: {
      type: Array,
      default: null,
    },
    ethnos: {
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
  methods: {
    getItem(item) {
      if (item.length === 0) {
        return "—";
      } else {
        let arr = []
        for (let i in item) {
          arr.push(this.t(item[i]))
        }
        return arr.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', ');
      }
    },

    getPassive(item) {
      return item.length !== 0 ? false : true;
    },

    getIcon(item) {
      return item.length !== 0 ? true : false;
    },
  },
};
</script>

<style scoped>
.column {
  display: flex;
  min-height: 18px;
}

.title {
  margin-left: 22px;
}

.title span {
  color: rgba(255, 255, 255, 0.2);
}

.icon {
  position: relative;
}

.icon::before {
  content: url(@/assets/img/icon/check.svg);
  position: absolute;
  left: -22px;
}

.item {
  width: 100%;
  min-height: 11px;
  margin-left: 11px;
  padding: 2px 0px 1px;
  text-align: start;
}

.passive {
  color: rgba(255, 255, 255, 0.2);
}
</style>