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
				@click="resetGold()"
			>
				<AppSvg class="svg-18 svg-main-f" name="return" />
			</div>

    </div>
    <div class="card-main flex-row-c flex-no-grow br-r-12 pd-0 w-96">
      <input
      type="text"
      v-model="inputValue"
      @input="handleInput"
      @blur="normalizeValue"
      placeholder="Введите число от 0 до 9999"
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
      inputValue: '',
      number: 0
    }
  },
  mounted() {
    this.inputValue = this.gold_Equip_All?.toString() ?? '';
    this.number = this.gold_Equip_All ?? 0;
  },
  computed: {
    ...mapState(useEquipStore, [
      "gold_Equip_All",
      "gold_Equip_All_Default",
    ]),
    ...mapState(useMYStore, [
      "MY"
    ]),
    t_Text() {
			return this.T("coin_gold");
		},

    gold_Reset() {
			return this.gold_Equip_All !== this.gold_Equip_All_Default;
		},

  },

    methods: {
    handleInput(e) {
      const raw = e.target.value;
      const numericOnly = raw.replace(/\D/g, '');

      if (numericOnly === '') {
        this.inputValue = '0';
        this.number = 0;
        this.MY.param.user_gold = 0;
        return;
      }

      let num = parseInt(numericOnly, 10);

      if (isNaN(num)) return;
      if (num > 9999999) num = 9999999;

      this.inputValue = num.toString();
      this.number = num;
      this.MY.param.user_gold = num;
    },
    normalizeValue() {
      if (this.inputValue === '') {
        this.number = 0;
        this.inputValue = '0';
        this.MY.param.user_gold = 0;
      }
    },

    resetGold() {
			this.MY.param.user_gold = null;
      this.inputValue = this.gold_Equip_All?.toString() ?? '';
      this.number = this.gold_Equip_All ?? 0;
		},
  }
};
</script>

<style scoped>
input[type="text"] {
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
	opacity: 0;
	transform: rotate(-180deg);
}
</style> 