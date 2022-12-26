<template>
	<div class="column jbm-300">
			<div class="title">
				{{ t_Title }}
			</div>
			<div class="items">
				<section v-for="item in list_Filter_Arr" :key="item" class="column_vis">
					<div class="small">{{ Str(item) }}</div>
					<div class="visual">
						<div class="cube cube_charge" v-for="n in cube_Numb(item)" :key="n"></div>
					</div>
          <div class="charge" v-if="Inf(item)">{{ Inf(item) }}</div>
				</section>
			</div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "MyCharges",
	props: {
    charge: {
      type: Object,
			default: null,
    },
	},

	computed: {
    // STORES
		...mapState(useMYStore, ["MY"]),
    ...mapState(useStatsStore, ["stats_Mod"]),

		t_Title() {
			return this.t(this.charge.name);
		},

    Str: (state) => (item) => {
      let name = item[0]
      let str_foo = state.Value_Foo("Str");
      if (name) {
        return `${name} :`;
      } else if(str_foo) {
        return `${str_foo} :`;
      } else {
        return null;
      }
		},

    list_Filter_Arr() {
      let lvl = this.MY.level;
      let numb_foo = this.Value_Foo("Num");
      return this.charge.list.filter(el => (el[lvl] + numb_foo) !== 0);
    },

		cube_Numb: (state) => (item) => {
      let lvl = state.MY.level;
      let numb = item[lvl];
      let numb_foo = state.Value_Foo("Num");
			return !isNaN(numb) ? numb + numb_foo : null
		},

    Inf: (state) => (item) => {
      let lvl = state.MY.level;
      let numb = item[lvl];
			return typeof numb === "string" ? state.t(numb) : null
    },

    Value_Foo: (state) => (Val) => {
			let foo = state.charge.foo;
      let numb = null;
			if (foo) {
        let str = foo.split("__");
				for (let i in str) {
          str[i].substr(0, 3) === Val ? numb = state[str[i]] : null;
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

    Num_CHA_Min0 () {
      let mod = this.stats_Mod("charisma");
			return mod < 0 ? 0 : mod;
    },
    
    Num_CHA_Min1() {
      let mod = this.stats_Mod("charisma");
      return mod <= 0 ? 1 : mod;
    },
	},
};
</script>

<style scoped>
.column {
	display: flex;
  justify-content: space-between;
	min-height: 18px;
}

.column_vis {
	display: flex;
}

.title {
	margin-left: 22px;
  position: relative;
}

.title::before {
  content: '';
  width: 4px;
  height: 4px;
  background: #ffffff;
  position: absolute;
  top: 0;
  left: calc(-18px/2 - 4px/2 - 4px);
  top: calc(18px/2 - 4px/2);
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

.cube {
	width: 8px;
	height: 8px;
	box-shadow: 0px 0px 4px 1px rgba(255, 245, 0, 0.25);
	border-radius: 2px;
}
.cube_charge {
	background: #00e0ff;
}
.charge {
  color: #00e0ff;
}

.small {
	text-transform: lowercase;
}
</style>
