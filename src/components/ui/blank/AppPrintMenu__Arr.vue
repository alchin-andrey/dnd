<template>
	<section v-for="name in uniqu_Name" :key="name" class="column">
		<div class="column-title jbm-500-22">{{ t_Title(name) }}</div>
		<div class="column-item int-600-22">
			<div class="item-text-wrap" v-for="elem in for_Rendering_Arr(name)">
				<div class="item-text">
					{{ elem }}
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useOverflowStore } from "@/stores/modules/OverflowStore";
export default {
	name: "AppPrintMenu__Arr",
	props: {
		menu: {
			type: Array,
			default: [],
		},
		no_name: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY", "level_Filter_Arr", "str_Upper"]),
		...mapState(useOverflowStore, ["overflow_Item_Menu"]),

		uniqu_Name() {
			const all_name = this.menu.reduce((acc, el) => acc.concat(el.name), []);
			return [...new Set(all_name)];
		},

		t_Title: (stor) => (name) => {
			if (!stor.no_name) return stor.t(name);
		},

		for_Rendering_Arr: (stor) => (name) => {
			const name_filter = stor.menu.filter((el) => el.name == name);
			let arr = [];
			name_filter.forEach((item) => {
        if(item.type == "spells") {
          arr.push(stor.str_Upper(stor.t_Elem_Spells(item)));
        } else {
          item.select_list.forEach((elem) => {
            arr.push(stor.t_Menu_Elem(elem, item));
          });
        }
			});
			return arr;
		},

		t_Elem_Spells: (stor) => (item) => {
			const dub_detect = stor.overflow_Item_Menu(item);
			const numb = item.select_numb - item.select_list.length;
			const selected = `${stor.t("spell_selected")} ${item.select_numb}`;
			const left = `${stor.t("spells_left")} ${numb}`;
			const duplicated = `${stor.t("spell_duplicated")}`;
			return numb !== 0 ? left : dub_detect ? duplicated : selected;
		},

		t_Menu_Elem: (stor) => (elem, item) => {
			if (
				item.type == "feats" &&
				(item.id_btn == "stats_2" || item.id_btn == "stats_1_1")
			) {
				const name = elem.stats[0].name;
				const num = elem.stats[0].num;
				return `+${num} ${stor.T(name).slice(0, 3)}`;
			} else {
				if (elem?.name) {
					return stor.T(elem.name);
				} else if (elem.hasOwnProperty('name_custom')) {
					return elem.name_custom ? elem.name_custom : stor.T(elem.name_set);
				} else if (elem?.name_set) {
					return stor.T(elem.name_set);
				} 
			}
		},
	},
};
</script>

<style scoped>

.column {
  width: 100%;
	min-height: 36px;
	display: flex;
	gap: 8px;
}

.column-title {
	width: 240px;
}

.column-item {
	width: 264px;
	overflow: hidden;
}

.item-text-wrap {
	height: 36px;
	display: flex;
	align-items: center;
}

.item-text {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
