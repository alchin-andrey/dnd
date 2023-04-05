<template>
  <section class="scroll-content">
    <!-- <div class="jbm-300" 
    @click="toggleSrd()"
    :class="{'rare-text': !srd}"
    >{{ t_Base }}
    </div> -->
    <div class="jbm-300">{{ t_Base }}</div>
    <div class="flex_row gap-64 mr-top-54">
      
      <main>
        <section class="col-base">
          <div class="int-700-20">{{ t_What }}</div>
          <!-- <div class="int-400 text-base grey-4-main" v-html="t_What_Details"/> -->
          <div class="int-400 text-base grey-4-main">
          <span v-html="t_What_Details_1_1"></span>
          <span @click="toggleSrd()" v-html="t_What_Details_1_2"></span>
          <span v-html="t_What_Details_1_3"></span>
          </div>
        </section>
      </main>

      <main class="mr-centr">
        <section class="col-base">
          <div class="int-700-20">{{ t_How }}</div>
          <div class="int-400 text-base flex_col gap-15 dot-text">
            <div>
              <span v-html="t_How_Details_1" />
              <span class="grey-4-main" v-html="t_How_Details_1_1" />
            </div>
            <div class="grey-4-main" v-html="t_How_Details_2" />
            <div v-html="t_How_Details_3" />
            <div class="grey-4-main" v-html="t_How_Details_4" />
            <div class="grey-4-main" v-html="t_How_Details_5" />
            <div v-html="t_How_Details_6" />
            <div class="grey-4-main" v-html="t_How_Details_7" />
          </div>
        </section>
      </main>

    </div>
  </section>
</template>

<script>
import { mapWritableState } from "pinia";
import { useMainStore } from "@/stores/general/MainStore";
export default {
	name: "WhatDND",
	computed: {
    ...mapWritableState(useMainStore, ["srd"]),

    t_Base() {
			return this.t("lobby_base");
		},

    t_What() {
			return this.t("lobby_what_is_it");
		},

    t_What_Details() {
			return this.t("lobby_what_is_it_details");
		},

    t_What_Details_1_1: (stor) => stor.t("lobby_what_is_it_details_1_1"),
    t_What_Details_1_2() {
      const str = this.t("lobby_what_is_it_details_1_2");
      return this.srd ? str.toLowerCase() : str;
    },
    t_What_Details_1_3: (stor) => stor.t("lobby_what_is_it_details_1_3"),



    t_How() {
			return this.t("lobby_how_it_works");
		},

    t_How_Details_1: (stor) => stor.t("lobby_how_it_works_details_1"),
    t_How_Details_1_1: (stor) => stor.t("lobby_how_it_works_details_1_1"),
    t_How_Details_2: (stor) => stor.t("lobby_how_it_works_details_2"),
    t_How_Details_3: (stor) => stor.t("lobby_how_it_works_details_3"),
    t_How_Details_4: (stor) => stor.t("lobby_how_it_works_details_4"),
    t_How_Details_5: (stor) => stor.t("lobby_how_it_works_details_5"),
    t_How_Details_6: (stor) => stor.t("lobby_how_it_works_details_6"),
    t_How_Details_7: (stor) => stor.t("lobby_how_it_works_details_7"),

	},

  methods: {
    toggleSrd() {
      this.srd = !this.srd;
    }
  }
};
</script>

<style scoped>

.scroll-content {
  width: 100%;
	overflow-y: scroll;
	scrollbar-width: none;
}

.scroll-content::-webkit-scrollbar {
	width: 0;
}
.flex_row {
  display: flex;
}

.flex_col {
  display: flex;
  flex-direction: column;
}

.mr-centr {
  margin: 0 auto;
}

.col-base {
  max-width: 362px;
}

.col-center {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gap-15 {
  gap: 15px;
}
.gap-64 {
  gap: 64px;
}

.mr-top-54 {
  margin-top: 54px;
}

.text-base {
	margin-top: 69px;
}

.dot-text > div {
  position: relative;
}
.dot-text > div::before {
  content: '•';
  position: absolute;
  top: 0;
  left: -12px;
}
</style>
