<template>
	<section v-for="item in for_Rendering" :key="item" class="column">
		<div class="column-title jbm-600-22">{{ rend_Title(item) }}</div>
		<div class="column-item font-w-600">
			<div class="item-text-wrap" :class="{'h-72': base_Stats}" v-for="elem, i in for_Rendering_Item(item)">
        <div class="item-text" :class="{'item-text-normal': base_Stats}">
          {{ rend_Elem(elem, item) }}<span v-if="for_Rendering_Item(item).length - 1 > i">,</span>
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
	name: "AppPrintMenu",
	props: {
		title: {
			type: String,
			default: null,
		},
		chapter: {
			type: String,
			default: null,
		},
		chapter_arr: {
			type: Array,
			default: [],
		},
		menu: {
			type: Object,
			default: {},
		},
		no_name: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY", "level_Filter_Arr", "str_Upper"]),
		...mapState(useOverflowStore, ["overflow_Item_Menu"]),


    base_Stats() {
      return this.title == 'stats';
    },

		for_Rendering() {
			if (this.title) {
				return 1;
			} else {
				return this.menu;
			}
		},

		rend_Title: (stor) => (item) => {
			if (stor.title) {
				return stor.t(stor.title);
			} else {
				return stor.t_Title(item);
			}
		},

		for_Rendering_Item: (stor) => (item) => {
			if (stor.chapter) return [stor.chapter];
			if (stor.chapter_arr.length !== 0) return stor.chapter_arr;
      if (stor.menu && item.type == "spells") return stor.t_Elem_Spells(item);
      if (stor.menu) return item.select_list; 
		},

    rend_Elem: (stor) => (elem, item) => {
			if (stor.title) return stor.str_Upper(stor.t(elem));
      if (stor.menu && item.type == "spells") return stor.str_Upper(elem);
      if (stor.menu) return stor.t_Menu_Elem(elem, item);
		},

    t_Elem_Spells: (stor) => (item) => {
      const dub_detect = stor.overflow_Item_Menu(item);
			const numb = item.select_numb - item.select_list.length;
			const selected = `${stor.t("spell_selected")} ${item.select_numb}`;
			const left = `${stor.t("spells_left")} ${numb}`;
			const duplicated = `${stor.t("spell_duplicated")}`;
			return numb !== 0 ? [left] : dub_detect ? [duplicated] : [selected];
    },

		uniqu_Name() {
			if (this.menu) {
				const sett_obj = {};
				const all_name = this.menu.reduce((acc, el) => acc.concat(el.name), []);
				const uniqu_name = [...new Set(all_name)];
				uniqu_name.forEach((item_name) => {
					sett_obj[item_name] = this.menu.filter((el) => el.name == item_name);
				});
				return sett_obj;
			} else {
				return [];
			}
		},

		t_Title: (stor) => (item) => {
			const first_name = stor.uniqu_Name[item.name][0];
			if (item == first_name && !stor.no_name) {
				return stor.t(item?.name);
			}
			return null;
		},

    t_Menu_Elem: (stor) => (elem, item) => {
      if (
				item.type == "feats" &&
				(item.id_btn == "stats_2" || item.id_btn == "stats_1_1")
			) {
        const name = elem.stats[0].name;
				const num = elem.stats[0].num;
        return `+${num} ${stor.t(name).toUpperCase().slice(0, 3)}`
			} else {
					if (elem?.name) return stor.str_Upper(stor.t(elem.name));
					if (elem?.name_set) return stor.str_Upper(stor.t(elem.name_set));
			}
    },
	},
};
</script>

<style scoped>
.font-w-600 {
	font-weight: 600;
}
.column {
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

.h-72 {
  height: 72px;
}

.item-text {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}


.item-text-normal {
  white-space: normal;
}
</style>
