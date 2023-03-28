<template>
	<!-- <section v-if="blank_print" class="print-row int-600-22" >
    <div class="print-icon">
				<svg
					class="print_svg"
					viewBox="0 0 18 18"
					xmlns="http://www.w3.org/2000/svg"
					v-html="atribute_icon[icon_Image]"
				/>
			</div>
    <div class="print-title">{{ t_Title }}</div>
  </section> -->
  
  
  
  
  <section class="column" :class="{ 
    passive: passive,
    'jbm-300': !blank_print,
    'int-600-22': blank_print,
    'print-row': blank_print,
    }">
		<div class="flex_row">
			<div class="icon" :class="{'print-icon': blank_print,}">
				<svg
					class="main_svg"
          :class="{'print_svg': blank_print,}"
					viewBox="0 0 18 18"
					xmlns="http://www.w3.org/2000/svg"
					v-html="atribute_icon[icon_Image]"
				/>
			</div>
			<div class="title" :class="{'print-title': blank_print,}">
				{{ t_Title }}
			</div>
		</div>
		<div class="items" :class="{'print-items': blank_print,} ">
			<section v-for="item in list_Filter_Arr" :key="item" class="column_vis" 
      :class="{'print-column_vis': blank_print,} "
      >
				<div class="small" 
        :class="{'int-700-18': blank_print,}">
					<span class="passive" v-if="spell_count">{{
						numb_Spells(item)
					}}</span>
					<span>{{ Str(item) }}</span>
				</div>
				<div 
        :class="{
          'charge_text': !blank_print,
          'print-charge_text': blank_print,
          'int-700-18': blank_print,
          } "
        v-if="Inf(item)">{{ Inf(item) }}</div>
				<div v-else
        :class="{
          visual: !blank_print,
          'print-visual': blank_print,
          } ">
					<div
            :class="{
              cube_charge: !blank_print, 
              'print-cube_zero': blank_print,
              } "
						v-for="n in cube_Numb(item)"
						:key="n"
					></div>
				</div>
			</section>
		</div>
	</section>
</template>

<script>
import atribute_icon from "@/assets/catalog/icon/atribute_icon";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
export default {
	name: "AppCharges",
	data() {
		return {
			atribute_icon: atribute_icon,
		};
	},
	props: {
		charge: {
			type: Object,
			default: null,
		},
		passive: {
			type: Boolean,
			default: false,
		},
		spell_count: {
			type: Boolean,
			default: false,
		},
    blank_print: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		// STORES
		...mapState(useMYStore, ["MY", "Mastery"]),
		...mapState(useStatsStore, ["stats_Mod"]),
		...mapState(useSpellsStore, ["spells_RC_Param_Manna"]),

		t_Title() {
			return this.T(this.charge.name);
		},

		numb_Spells: (stor) => (item) => {
			const numb = item[0][1];
			const res = stor.spells_RC_Param_Manna.reduce(
				(acc, el) => (el.spell[numb]?.name ? (acc += 1) : acc),
				0
			);
			return `${res}× `;
		},

		icon_Image() {
			let type_foo = this.Value_Foo("Typ");
			return type_foo ? type_foo : this.charge.type;
		},

		Str: (stor) => (item) => {
			let name = item[0];
			let str_foo = stor.Value_Foo("Str");
      const res = name ? name : str_foo;
      const print = stor.blank_print;

      if (res) {
        if(print) {
          const print_str = res.replace(/[^a-zа-яё0-9\s]/gi, ' ');
          return print_str;
        }
        return `${res} :`
      };
			// if (name) {
			// 	return dot ? name : `${name} :`;
			// } else if (str_foo) {
			// 	return dot ? str_foo : `${str_foo} :`;
			// } else {
			// 	return null;
			// }
		},

		list_Filter_Arr() {
			let lvl = this.MY.level;
			let numb_foo = this.Value_Foo("Num");
			return this.charge.list.filter((el) => el[lvl] + numb_foo !== 0);
		},

		cube_Numb: (state) => (item) => {
			let lvl = state.MY.level;
			let numb = item[lvl];
			let numb_foo = state.Value_Foo("Num");
			return !isNaN(numb) ? numb + numb_foo : null;
		},

		Inf: (state) => (item) => {
			let lvl = state.MY.level;
			let numb = item[lvl];
			return typeof numb === "string" ? state.t(numb) : null;
		},

		Value_Foo: (state) => (Val) => {
			let foo = state.charge.foo;
			let numb = null;
			if (foo) {
				let str = foo.split("__");
				for (let i in str) {
					str[i].substr(0, 3) === Val ? (numb = state[str[i]]) : null;
				}
			}
			return numb;
		},

		Str_Level_5_10_15() {
			let lvl = this.MY.level;
			let kof = null;
			if (lvl < 5) {
				kof = 6;
			} else if (lvl < 10) {
				kof = 8;
			} else if (lvl < 15) {
				kof = 10;
			} else {
				kof = 12;
			}
			return `d${kof}`;
		},

		Str_Level_10_18() {
			let lvl = this.MY.level;
			let kof = null;
			if (lvl < 10) {
				kof = 8;
			} else if (lvl < 18) {
				kof = 10;
			} else {
				kof = 12;
			}
			return `d${kof}`;
		},

		Num_CHA_Min0() {
			let mod = this.stats_Mod("charisma");
			return mod < 0 ? 0 : mod;
		},

		Num_CHA_Min1() {
			let mod = this.stats_Mod("charisma");
			return mod <= 0 ? 1 : mod;
		},

		Num_WIS_Min1() {
			let mod = this.stats_Mod("wisdom");
			return mod <= 0 ? 1 : mod;
		},

		Num_Mastery() {
			return this.Mastery;
		},

		Typ_5_Lvl() {
			let lvl = this.MY.level;
			let type = this.charge.type;
			return lvl >= 5 ? "short_rest" : type;
		},
	},
};
</script>

<style scoped>
.flex_row {
	display: flex;
}

.icon {
	width: 18px;
	height: 18px;
	margin-right: 4px;
}

.main_svg {
	width: 18px;
	height: 18px;
	fill: white;
}

.column {
	display: flex;
	justify-content: space-between;
	min-height: 18px;
}

.column_vis {
	display: flex;
	justify-content: flex-end;
}

.items {
	text-align: end;
}

.visual {
	width: 98px;
	display: flex;
	align-items: center;
	margin-left: 12px;
	flex-wrap: wrap;
	padding: 5px 0 5px 0;
	gap: 2px;
}

/* .cube {
	width: 8px;
	height: 8px;
	border-radius: 2px;
} */
.cube_charge {
  width: 8px;
	height: 8px;
	border-radius: 2px;
	background: #00e0ff;
  box-shadow: 0px 0px 4px 1px rgba(255, 245, 0, 0.25);
}
.charge_text {
	width: 98px;
	margin-left: 12px;
	color: #00e0ff;
	text-align: start;
}

.small {
	text-transform: lowercase;
  display: flex;
  align-items: center;

}

.passive {
	opacity: 0.2;
}

.print-row {
  position: relative;
  max-height: 72px;
}

.print-title {
  margin-left: 28px;
}

.print-icon {
  position: absolute;
  width: 36px;
	height: 36px;
  top: 2px;
  left: 2px;
}

.print_svg {
	width: 36px;
	height: 36px;
	fill: black;
}

.print-column_vis {
  min-height: 30px;
}

.print-items {
  max-width: 425px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 3px;
  gap: 0 8px;
  flex-wrap: wrap;

}

.print-visual {
	display: flex;
	align-items: center;
	margin-left: 4px;
	gap: 4px;
}

.print-charge_text {
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

.print-cube_zero {
  margin-top: 1px;
	width: 16px;
	height: 16px;
	border-radius: 4px;
	border: 2px solid #000000;
  background: none;
}
</style>
