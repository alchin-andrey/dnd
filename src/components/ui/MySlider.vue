<template>
  <div class="numb jbm-300">
    <div>{{ numb }}</div>
  </div>
  <div class="title jbm-300">
    <div>{{ t(title) }}</div>
  </div>
  <div class="main">
    <transition mode="out-in" name="type">
    <div :key="type">{{ t(type) }}</div>
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
</template>

<script>
export default {
  name: "MySlider",
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    numb: {
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
    arr: {
      type: Array,
      default: [],
    },
  },
  methods: {
    getNewEthnos() {
      this.$root.MY.ethnos = Object.keys(this.$root.race[this.$root.MY.race].settings.ethnos)[0]
    },
    closeEthnos() {
      if (this.$root.shown_ethnos === true && this.$root.MY.ethnos === "common") {
          this.$root.shown_ethnos = false;
          this.$root.shown_home = true;
        } else {
          this.$root.shown_ethnos === true;
        }
    },

    closePar(name_1, name_2) {
      console.log(this.$root.getRaceObj().settings[name_2])
      if (this.$root[name_1] === true && this.$root.getRaceObj().settings[name_2] === undefined) {
          this.$root[name_1] = false;
          this.$root.shown_home = true;
        } else {
          this.$root[name_1] === true;
        }
    },

    getFunction() {
      this.getNewEthnos()
      this.closeEthnos()
      this.closePar('shown_characteristics', 'custom_stats')
      this.closePar('shown_skills', 'custom_skills')
      this.closePar('shown_languages', 'custom_language')
    },


    getNameBack(arr, i) {
      let j = arr.indexOf(i);
      console.log(this.type);
      if (j === 0) {
        this.$root.MY.race = arr[arr.length - 1];
      } else {
        this.$root.MY.race = arr[j - 1];
      }
    this.getFunction()
    },
    getNameForward(arr, i) {
      let j = arr.indexOf(i);
      console.log(this.type);
      if (j === arr.length - 1) {
        this.$root.MY.race = arr[0];
      } else {
        this.$root.MY.race = arr[j + 1];
      }
      this.getFunction()
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


/* .type-enter-active,
.type-leave-active {
  transition: opacity 0.5s ease;
}

.type-enter,
.type-leave-to {
  opacity: 0;
} */



.type-enter-active, 
.type-leave-active {
  transition: opacity .3s
}

.type-enter-from, 
.type-leave-to {
  opacity: 0
}



</style>