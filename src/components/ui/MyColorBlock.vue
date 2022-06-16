<template>
  <div tabindex="0"
    class="color_block"
    :class="{ 
      color_block_active: getActive(), 
      ethnos_dot: ethnos_color,
      ethnos_dot_active: ethnos_color && getActive() ,
      race_dot: race_color && !ethnos_color,
      race_dot_active: race_color && !ethnos_color && getActive()
      }"
  >
    <div
      class="color_block_2"
      :class="{ color_block_2_active: getActive() }"
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
    ethnos_color: {
      type: Boolean,
      default: false,
    },
    race_color: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getActive() {
      return this.active_link === this.select_link;
    },

    getImage(name) {
      return require(`@/assets/img/icon/gender/${name}.svg`);
    },
  },
};
</script>

<style scoped>
.color_block {
  width: 50px;
  height: 100%;
  flex: 1 1 auto;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
}

.ethnos_dot::after {
  content: '';
  width: 6px;
  height: 6px;
  position: absolute;
  right: 4px;
  top: 4px;
  background: #05FF00;
  border: 1px solid #000000;
  border-radius: 50%;
}

.race_dot::after {
  content: '';
  width: 6px;
  height: 6px;
  position: absolute;
  right: 4px;
  top: 4px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 50%;
}

.color_block_2 {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.color_block:hover {
  padding: 5px;
}

.color_block_2:hover {
  border-radius: 1px;
}


.color_block_active {
  border: 2px solid #ffffff;
  padding: 5px;
}


.ethnos_dot_active:after {
  content: '';
  width: 6px;
  height: 6px;
  position: absolute;
  right: 2px;
  top: 2px;
  background: #05FF00;
  border: 1px solid #000000;
  border-radius: 50%;
}

.race_dot_active:after {
  content: '';
  width: 6px;
  height: 6px;
  position: absolute;
  right: 2px;
  top: 2px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 50%;
}

.color_block_2_active {
  border-radius: 1px;
}
</style>