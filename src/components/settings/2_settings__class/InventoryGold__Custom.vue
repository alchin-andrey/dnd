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
    <AppCountInput
      v-model="MY.user_gold"
      :default-value="gold_Equip_All"
      :max-value="9999999"
    />
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useEquipStore } from "@/stores/modules/EquipStore";
import { useMYStore } from "@/stores/user/MYStore";

export default {
  name: "InventoryGold__Custom",

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

  methods: {
    resetGold() {
      this.MY.user_gold = null;
    }
  }
};
</script>

<style scoped>
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