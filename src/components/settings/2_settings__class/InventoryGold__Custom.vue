<template>
  <div class="flex-row gap-2 int-700">
    <div class="card-main flex-row-sb br-l-12 w-100">
      <div class="flex-row-c gap-8">
        <div class="flex-row-c">
          <emoji :data="emojiIndex" emoji="🟡" :set="set_emoji" :size="14" />
        </div>
        <div>{{ t_Text }}</div>
      </div>

      <div
        class="reset_btm"
        :class="{ reset_btm_custom: !gold_Reset }"
        @click="resetGold"
      >
        <AppSvg class="svg-18 svg-main-f" name="return" />
      </div>
    </div>

    <div class="card-main flex-row-c flex-no-grow br-r-12 pd-0 w-96">
      <input
        type="text"
        v-model="inputValue"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useEquipStore } from "@/stores/modules/EquipStore";
import { useMYStore } from "@/stores/user/MYStore";

export default {
  name: "InventoryGold__Custom",

  data() {
    return {
      inputValue: ''
    };
  },

  computed: {
    ...mapState(useEquipStore, [
      "gold_Equip_All",
      "gold_Equip_All_Default",
    ]),
    ...mapState(useMYStore, ["MY"]),

    t_Text() {
      return this.T("coin_gold");
    },

    gold_Reset() {
      return this.gold_Equip_All !== this.gold_Equip_All_Default;
    }
  },

  watch: {
    inputValue(val) {
      const numeric = val.replace(/\D/g, '');
      let num = parseInt(numeric, 10);

      if (isNaN(num) || numeric === '') {
        num = 0;
      } else if (num > 9999999) {
        num = 9999999;
      }

      this.MY.user_gold = num;

      const corrected = num.toString();
      if (this.inputValue !== corrected) {
        this.inputValue = corrected;
      }
    },

    'MY.user_gold': {
      immediate: true,
      handler(newVal) {
        const value = newVal ?? this.gold_Equip_All ?? 0;
        this.inputValue = value.toString();
      }
    }
  },

  methods: {
    resetGold() {
      this.MY.user_gold = null;
    }
  }
};
</script>

<style scoped>
input[type="text"] {
  border-radius: 0;
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	-khtml-border-radius: 0;
  padding: 16px;
	background: transparent;
	outline: none;
  color: #ffffff;
	width: 100%;
  white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	display: flex;
	align-items: center;
	height: 47px;
  border-radius: 0 12px 12px 0;
  text-decoration-line: underline;
	text-decoration-color: #ffffff;
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 0px;
}

.reset_btm {
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.5s ease;
}

.reset_btm_custom {
  cursor:  auto;
	opacity: 0;
	transform: rotate(-180deg);
}
</style> 