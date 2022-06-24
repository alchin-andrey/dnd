<template>
  <div class="skale">
    <div class="skale_numb_top" 
    :class="{
      skale_numb_down: numb === 0,
      }">{{ numb }}</div>
    <div 
    v-if="division"
    class="division"
    :class="{
      off: numb > main_numb && !active_size,
      fill_back: active_size
      }"
    >
      <div class="fill_front"
      :style="{ 
          height: get_height,
          }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySkale",
  props: {
    numb: {
      type: Number,
      default: null,
    },
    main_numb: {
      type: Number,
      default: null,
    },
    division: {
      type: Boolean,
      default: false,
    },
    zero: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    active_size() {
      return this.numb - 30 < this.main_numb && this.main_numb <= this.numb;
    },

    get_height() {
      if(this.active_size) {
        let divisor = this.numb - this.main_numb;
        return `calc(100% / 30 * (30 - ${divisor}))`;
      }
    },
  },
};
</script>

<style scoped>
.skale {
  height: 100%;
  display: flex;
  gap: 0 12px;
}

.skale_numb_top {
  margin-top: -4px;
  align-self: flex-start;
  flex: 1 1 auto;
}
.skale_numb_down {
  margin-bottom: -4px;
  align-self: flex-end;
  flex: 1 1 auto;
}

.division {
  width: 1px;
  /* min-height: 96px; */
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: #ffffff;
}

.off {
  background: rgba(255, 255, 255, 0.2);
  opacity: 0.3;
}

.fill_back {
  background: rgba(255, 255, 255, 0.4);
}

.fill_front {
  background: #ffffff;
  /* height: calc(100% / 30 * 10); */
}

.size {
  font-size: 11.45px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  height: 100%;
  padding-top: 4px;
  position: relative;
}

.size::after {
  content: '';
  position: absolute;
  top: -32px;
  width: 1px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  opacity: 0.3;
}

.size_growth {
  font-size: 11.45px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  height: 100%;
  padding-top: 4px;
  position: relative;
}
</style>