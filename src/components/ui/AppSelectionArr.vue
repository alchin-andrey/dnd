<template>
	<div
		v-for="item in menu"
		:key="item.id_link"
		class="column"
		@click="showSettings(page_Open, item.id_link)"
		:class="{
			active_link: active_Link(item),
			hover: !active_Link(item),
			'lvl-dot': shown_Level_Dot(item.level),
		}"
	>
		<div class="column_title jbm-300">{{ t_Title(item) }}</div>
		<section class="column_link int-400 active">
			<div class="link-text" 
      :class="{ 
        'rare-text': overflow_Item_Menu(item) || sett_Counter(item)}">
				<span class="type-text">{{ t_Type(item) }}</span>
			</div>
			<div class="icon">
				<svg
					class="main_svg"
					viewBox="0 0 18 18"
					xmlns="http://www.w3.org/2000/svg"
					v-html="ui_icon[icon_Image(item)]"
				/>
			</div>
		</section>
	</div>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";

import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useOverflowStore } from "@/stores/modules/OverflowStore";
export default {
	name: "AppSelectionArr",
	data() {
		return {
			ui_icon: ui_icon,
		};
	},
	props: {
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
		...mapState(useMYStore, ["MY", "level_Filter_Arr"]),
		...mapState(usePagesStore, [
			"pages",
			"race_page",
			"class_page",
			"page_Open",
		]),
		...mapState(useOverflowStore, ["overflow_Item_Menu"]),

		active_Link: (stor) => (item) => {
			return stor[stor.page_Open]?.shown[item.id_link];
		},

		icon_Image: (stor) => (item) => {
			return !stor.active_Link(item) ? "arrow_down_small" : "arrow_right_small";
		},

		shown_Level_Dot: (store) => (item_lvl) => {
			let lvl = store.MY.level;
			return item_lvl == lvl && lvl !== 1;
		},

		uniqu_Name() {
			const sett_obj = {};
			const all_name = this.menu.reduce((acc, el) => acc.concat(el.name), []);
			const uniqu_name = [...new Set(all_name)];
			uniqu_name.forEach((item_name) => {
				sett_obj[item_name] = this.menu.filter((el) => el.name == item_name);
			});
			return sett_obj;
		},

		t_Title: (stor) => (item) => {
			const first_name = stor.uniqu_Name[item.name][0];
			if (item == first_name && !stor.no_name) {
				return stor.t(item?.name);
			}
			return null;
		},

    sett_Counter: (stor) => (item) => {
      if (item.type == "spells") {
        const numb = item.select_numb - item.select_list.length;
        return numb !== 0;
      }
    },

		t_Type: (stor) => (item) => {
      if (item.type == "spells") {
        const numb = item.select_numb - item.select_list.length;
        return numb == 0 ? `обрано ${item.select_numb}` : `залишилось ${numb}`;
      }
			if (
				item.type == "feats" &&
				(item.id_btn == "stats_2" || item.id_btn == "stats_1_1")
			) {
				let arr = [];
				item.select_list.forEach((item) => {
					const name = item.stats[0].name;
					const num = item.stats[0].num;
					arr.push(`+${num} ${stor.t(name).slice(0, 3)}`);
				});
				return arr.map((n) => n.replace(n[3], n[3].toUpperCase())).join(", ");
			} else {
				let arr = [];
				item.select_list.forEach((item) => {
					if (item?.name) {
						arr.push(stor.t(item?.name));
					} else if (item?.name_set) {
						arr.push(stor.t(item?.name_set));
					}
				});
				return arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join(", ");
			}
		},
	},
	methods: {
		...mapActions(usePagesStore, ["showSettings"]),
	},
};
</script>

<style scoped>
.column {
	height: 18px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	cursor: pointer;
}

.flex_row {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.hover:hover::before {
	content: "";
	position: absolute;
	width: 20px;
	height: 2px;
	left: -40px;
	top: calc(50% - 1px);
	background: #ffffff;
}

.column_link {
	display: flex;
	gap: 4px;
	position: relative;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: rgba(255, 255, 255, 0.2);
}

.lvl-dot::after {
	content: "";
	position: absolute;
	width: 6px;
	height: 6px;
	right: -15px;
	top: calc(50% - 4px);
	background: #0047ff;
	border-radius: 50%;
}

.active_link:before {
	content: "";
	position: absolute;
	width: 35px;
	height: 2px;
	left: -39px;
	top: calc(50% - 1px);
	background: #ffffff;
}

.column_link span {
	white-space: nowrap; /* Текст не переносится */
	overflow: hidden; /* Обрезаем всё за пределами блока */
	text-overflow: ellipsis;
}

.link-text {
	width: 110px;
	display: flex;
	align-items: center;
	/* height: 18px; */
}
.link-text:first-letter {
	text-transform: uppercase;
}
.type-text:first-letter {
	text-transform: uppercase;
}

.icon {
	width: 18px;
	height: 18px;
}

.main_svg {
	fill: white;
}

.rare-text {
	color: #ffc93d;
}

.active {
	color: #ffffff;
}

.cursor_auto {
	cursor: auto;
}
</style>
