<template>
	<div class="wrap-section">
		<section class="wrap-table-equip">
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
			</div>
		</section>
    <section class="wrap-table-weapon-charg">
      <div class="wrap-table-weapon">
        <div class="table-weapon">
          <div class="table-weapon__grid">
            <div class="cell-weapon">{{ T("weapons") }}</div>
            <div class="cell-weapon">{{ T("print_aim_range") }}</div>
            <div class="cell-weapon">{{ T("print_aim_need") }}</div>
            <div class="cell-weapon">{{ T("print_damage") }}</div>
          </div>
          <WeaponEquip class="table-weapon__grid int-600-22"
            v-for="weapon in weapons_Equip_All"
            :key="weapon"
            :weapon="weapon"
            blank_print
          />
        </div>
      </div>
    </section>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useEquipStore } from "@/stores/modules/EquipStore";
import WeaponEquip from "@/components/equipment/WeaponEquip.vue";
export default {
	name: "BlankTable__Equip",
  components: {
		WeaponEquip,
	},
	data() {
		return {
			coins: ["platina", "gold", "silver", "copper"],
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
      "weapons_Equip_All",
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

    t_Aim_Range() {
      const str = this.T("aim_range");
      return str.length >= 5 ? str.slice(0, 5) + "." : str;
    }

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
	grid-template-rows: 538px 72px;
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

.wrap-table-weapon-charg {

}
.wrap-table-weapon{

}

.table-weapon {

}

.table-weapon__grid {
  display: grid;
  grid-template-columns: 300px 121px 68px 160px;
  border-bottom: 1px solid #000000;
}

.table-weapon__grid > * {
  padding: 4px 12px 8px;
}



</style>
