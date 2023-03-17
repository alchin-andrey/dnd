<template>
	<div class="wrap-cell">
		<section class="title-head jbm-500-22">
			<div class="icon">
				<svg
					class="main_svg"
					viewBox="0 0 18 18"
					xmlns="http://www.w3.org/2000/svg"
					v-html="atribute_icon[title]"
				/>
			</div>
			<div class="cell-item">{{ t_Title }}</div>
		</section>
    <div class="int-600-72 numb" v-if="!title_numb">{{ value_Numb }}</div>
    <div class="flex-vis">
    <div class="hp-text jbm-500-22" v-if="title_numb">{{ t_Temporary }}</div>
      <div class="visual">
      
      <!-- <div class="cube_zero" v-if="hp_Dice" v-for="n in cube_Numb_Zero" :key="n" /> -->
      <div class="int-600-72" v-if="hp_Dice && cube_Numb_Zero == 1000">ထ</div>
      <div class="cube_zero" v-if="hp_Dice && cube_Numb_Zero !== 1000" v-for="n in cube_Numb_Zero" :key="n" />

      </div>
    </div>
	</div>
</template>

<script>
import atribute_icon from "@/assets/catalog/icon/atribute_icon";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
export default {
	name: "AppPrintQualities",
	data() {
		return {
			atribute_icon: atribute_icon,
		};
	},
	props: {
		title: {
			type: String,
			default: null,
		},
		numb: {
			type: Number,
			default: null,
		},
    title_numb: {
      type: Boolean,
			default: false,
    },
	},

	computed: {
    ...mapState(useMYStore, ["MY"]),
		t_Title() {
      const str = this.t(this.title);
      if(this.title_numb) return `${str} ${this.numb}`
			else return str;
		},

    t_Temporary() {
      return `${this.t("temporary")}:`;
    },

    hp_Dice() {
      return this.title == "hp_dice"
    },

    value_Numb() {
      if(this.title == "initiative") return `+${this.numb}`
      if(this.hp_Dice) return `d${this.numb}`
      else return this.numb;
    },

    cube_Numb_Zero() {
      if(this.MY.level > 20 && this.MY.level !== 1000) return 20; //NOTE - DR
      return this.MY.level;
    }
	},
};
</script>

<style scoped>
.wrap-cell {
	height: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
}

.title-head {
  height: 36px;
	display: flex;
  align-items: center;
}

.cell-item {
  height: 100%;
  display: flex;
  align-items: center;
}

.icon {
	width: 36px;
	height: 36px;
	margin-right: 2px;
}

.main_svg {
	width: 36px;
	height: 36px;
  fill: black;
}

.numb {
  text-align: center;
  margin-top: 76px;
}

.flex-vis {
  flex: 1 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 6px;
}

.hp-text {
  flex-grow: 1;
  margin: 0 0 8px 38px;
}

.visual {
	display: flex;
  justify-self: center;
  justify-content: center;
	flex-wrap: wrap-reverse;
	gap: 4px;
}

.cube_zero {
	width: 16px;
	height: 16px;
	border-radius: 4px;
	border: 2px solid #000000;
}
</style>
