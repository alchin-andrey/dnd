<template>
<my-selection-card passive>
        <div class="gender_card_title jbm-300">{{ t("phisiological") }}</div>
        <div class="gender__flex">
          <div class="gender__flex-3">
            <template
              v-for="(value, name, index) in $root.genders.phisiological"
              :key="value"
            >
              <my-button-gender
                v-if="index >= 0 && index <= 2"
                :key="value"
                @click="getPhisiologicalName(value)"
                :index="index"
                :img="value"
                :active_link="value"
                :select_link="$root.MY.gender.phisiological"
              >
              </my-button-gender>
            </template>
          </div>

          <div class="gender__flex-2">
            <template
              v-for="(value, name, index) in $root.genders.phisiological"
              :key="value"
            >
              <my-button-gender
                v-if="index >= 3 && index <= 4"
                @click="getPhisiologicalName(value)"
                :index="index"
                :img="value"
                :active_link="value"
                :select_link="$root.MY.gender.phisiological"
              >
              </my-button-gender>
            </template>
          </div>

          <div class="gender__flex-3">
            <template
              v-for="(value, name, index) in $root.genders.phisiological"
              :key="value"
            >
              <my-button-gender
                v-if="index >= 5 && index <= 7"
                @click="getPhisiologicalName(value)"
                :index="index"
                :img="value"
                :active_link="value"
                :select_link="$root.MY.gender.phisiological"
              >
              </my-button-gender>
            </template>
          </div>
        </div>
        <my-card-text
          :title="$root.MY.gender.phisiological"
          :text="t(`${$root.MY.gender.phisiological}_details`)"
        >
        </my-card-text>
      </my-selection-card>
      <my-selection-card passive>
        <div class="gender_card_title jbm-300">{{ t("feel") }}</div>
        <div class="gender__flex">
          <div class="gender__flex-3">
            <template v-for="(value, name, index) in $root.genders.feel" :key="value">
              <my-button-gender
                v-if="index >= 0 && index <= 2"
                @click="getFeelName(value)"
                :index="index"
                :img="value"
                :active_link="value"
                :select_link="$root.MY.gender.feel"
              >
              </my-button-gender>
            </template>
          </div>

          <div class="gender__flex-2">
            <template v-for="(value, name, index) in $root.genders.feel" :key="value">
              <my-button-gender
                v-if="index >= 3 && index <= 4"
                @click="getFeelName(value)"
                :index="index"
                :img="value"
                :active_link="value"
                :select_link="$root.MY.gender.feel"
              >
              </my-button-gender>
            </template>
          </div>

          <div class="gender__flex-1">
            <template v-for="(value, name, index) in $root.genders.feel" :key="value">
              <my-button-gender
                v-if="index >= 5 && index <= 5"
                @click="getFeelName(value)"
                :index="index"
                :img="value"
                :active_link="value"
                :select_link="$root.MY.gender.feel"
              >
              </my-button-gender>
            </template>
          </div>

          <div class="gender__flex-2">
            <template v-for="(value, name, index) in $root.genders.feel" :key="value">
              <my-button-gender
                v-if="index >= 6 && index <= 7"
                @click="getFeelName(value)"
                :index="index"
                :img="value"
                :active_link="value"
                :select_link="$root.MY.gender.feel"
              >
              </my-button-gender>
            </template>
          </div>

          <div class="gender__flex-3">
            <template v-for="(value, name, index) in $root.genders.feel" :key="value">
              <my-button-gender
                v-if="index >= 8 && index <= 10"
                @click="getFeelName(value)"
                :index="index"
                :img="value"
                :active_link="value"
                :select_link="$root.MY.gender.feel"
              >
              </my-button-gender>
            </template>
          </div>
        </div>
        <my-card-text
          :title="$root.MY.gender.feel"
          :text="t(`${$root.MY.gender.feel}_details`)"
        >
        </my-card-text>
      </my-selection-card>
      <my-selection-card
        v-if="$root.MY.gender.feel !== $root.genders.feel.cisgender"
        passive
      >
        <div class="gender_card_title jbm-300">{{t('look')}}</div>
        <div class="gender__flex">
          <div class="gender__flex-3">
            <template v-for="(value, name, index) in $root.genders.look" :key="value">
              <my-button-gender
                @click="getLookName(value)"
                :index="index"
                :img="value"
                :active_link="value"
                :select_link="$root.MY.gender.look"
              >
              </my-button-gender>
            </template>
          </div>
        </div>
        <my-card-text :title="$root.MY.gender.look"
        :text="t(`${$root.MY.gender.look}_details`)">
        </my-card-text>
      </my-selection-card>
</template>

<script>
export default {
  name: "Genders",
  methods: {
    getPhisiologicalName(name) {
      this.$root.MY.gender.phisiological = name;
    },

    changeLookName(name) {
      if (name === this.$root.genders.feel.cisgender) {
        return (this.$root.MY.gender.look = this.$root.genders.look.as_phisiological);
      } else {
        return (this.$root.MY.gender.look = this.$root.MY.gender.look);
      }
    },

    getFeelName(name) {
      this.changeLookName(name);
      this.$root.MY.gender.feel = name;
    },

    getLookName(name) {
      this.$root.MY.gender.look = name;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.gender_card {
  padding: 16px;
  width: 394px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(60px);
  border-radius: 12px;
}

.gender_card_title {
  color: rgba(255, 255, 255, 0.2);
}

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


.gender__flex {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.gender__flex-3 {
  display: flex;
  justify-content: space-between;
}

.gender__flex-2 {
  display: flex;
  justify-content: space-evenly;
}

.gender__flex-1 {
  display: flex;
  justify-content: center;
}

</style>