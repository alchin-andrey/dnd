<template>
	<div class="wrap-section">
		<div class="wrap-table-equip">
			<div class="table-equip">
				<div class="cell-invent">
					<div>{{ t_Equipment }}</div>

          <div class="column-content">
            <template
            v-for="pack, i in packs_Equip_All" 
            :key="pack"
            >
            <div :class="{'marg-t-30': i > 0}"/>
              <div class="int-500-22">{{ t_Equip_Name(pack) }}:</div>
              <div v-for="inv in pack[0].items" :key="inv">
                <div class="int-500-22">• {{ t_Equip_Name(inv) }}</div>
              </div>
            </template>
  
            <template v-for="inv, i in inventory_Equip_Print" :key="inv">
              <!-- <div :class="{'marg-t-30': i == 0}"/> -->
              <div class="marg-t-30" v-if="i == 0"/>
              <div class="int-500-22">• {{ t_Equip_Name(inv) }}</div>
            </template>

          </div>
        </div>

        
				<div class="cell-equip" v-for="coin in coins" :key="coin">
					<div>{{ T(coin) }}</div>
					<div class="int-600-22 print-grey" v-if="coin == 'gold'">
						{{ gold_Equip_All }}
					</div>
				</div>

				<div class="cell-equip">
					<div>{{ T("armor") }}</div>
					<div class="int-600-22">{{ t_Armor_Name }}</div>
				</div>

				<div class="cell-equip">
					<div>{{ T("bullets") }}</div>
					<div class="int-600-22">
          {{ t_Ammunition_Name }} 
          <span class="print-grey">{{ t_Ammunition_Numb }}</span>
          </div>
				</div>

	


				<!-- <section class="cell-equip" v-for="item, i in equip" :key="item.name">
					<div>{{ T(item.name) }}</div>
					<div class="int-600-22"
          :class="{'print-grey': i < 4,}"
          v-if="item.value">
						{{ t_Item(item.value) }}
					</div>
				</section> -->
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useEquipStore } from "@/stores/modules/EquipStore";
export default {
	name: "BlankTable__Equip",
	data() {
		return {
			coins: ["platina", "gold", "silver", "copper"],
			// equip: [
      //     { name: "platina", value: null,},
      //     { name: "gold", value: "gold_Equip_All", },
      //     { name: "silver", value: null, },
      //     { name: "copper", value: null, },
      //     { name: "armor", value: "armor_Name_Class_Param", },
      //     { name: "bullets", value: "t_Ammunition", },
      //   ],

			action_main_numb: 31,
		};
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useQualitiesStore, ["armor_Name_Class_Param"]),
		...mapState(useEquipStore, [
      "gold_Equip_All",
      "packs_Equip_All",
      "inventory_Equip_All",
      "inventory_Equip_Print",
      "ammunition_Equip_Print",
    ]),

		t_Equipment() {
			return this.T("equipment");
		},

    t_Item: (stor) => (item) => {
      const value = stor[item]
      if(value) return stor.T(String(value));
    },

    t_Equip_Name: (state) => (inv) => {
			const name = state.T(inv[0].name);
			const namb = inv[1];
			return namb > 1 ? `${name} x ${namb}` : name;
		},

    t_Armor_Name() {
      const name = this.armor_Name_Class_Param
      if(name) return this.T(name)
    },

    t_Ammunition_Name() {
      const ammunition = this.ammunition_Equip_Print
      if(ammunition) return this.T(ammunition[0].name)
    },

    t_Ammunition_Numb() {
      const ammunition = this.ammunition_Equip_Print
      if(ammunition) return `x${ammunition[1]}`
    },

	},
};
</script>

<style scoped>
.wrap-section {
	display: flex;
	height: 612px;
	border: 1px solid #000000;
	border-radius: 6px;
}

.title-marg {
	margin: 4px 0 0 12px;
}

.wrap-table-equip {
	width: 1296px;
	height: 100%;
  border-right: 1px solid #000000;
}

.table-equip {
	display: grid;
	grid-template-rows: 536px 72px;
	grid-template-columns: repeat(4, 1fr) repeat(2, 2fr);
}

.cell-invent {
	padding: 4px 12px;
	border-bottom: 1px solid #000000;
	grid-column: span 6;
}

.cell-equip {
	padding: 4px 12px 8px;
}

.cell-equip:nth-child(n + 3) {
	border-left: 1px solid #000000;
}
.print-grey {
	color: #828282;
}

.column-content {
  margin-top: 24px;
	width: max-content;
	/* width: calc(25% - 22.25px); */
	height: 450px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 0 35px;
}

.column-content > div {
	width: 100%;
}

.marg-t-30 {
	margin-top: 30px;
}
</style>
