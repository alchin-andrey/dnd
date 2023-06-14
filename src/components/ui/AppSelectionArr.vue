<template>
	<div
		v-for="item in menu"
		:key="item.id_link"
		class="column"
		@click="showSettings(page_Open, item.id_link)"
		:class="{
			'active-link': active_Link(item) && screen_Max,
			'hover': !active_Link(item) && screen_Max,
			'lvl-dot': shown_Level_Dot(item),
		}"
	>
		<div class="column-title jbm-300">{{ t_Title(item) }}</div>
		<section class="column-link int-400">
			<div 
			class="link-text" 
      :class="{'rare-text': overflow_Item(item) || sett_Counter(item)}"
			:style="{'width': size_Text}"
			>
				<span class="type-text">{{ t_Type(item) }}</span>
			</div>
			<AppSvg class="svg-18 svg-main-f" :name="icon_Image(item)" />
		</section>
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useOverflowStore } from "@/stores/modules/OverflowStore";
export default {
	name: "AppSelectionArr",
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
      "alignment_page",
			"page_Open",
			"screen_Max", 
			"screen_Menu_Num",
		]),
		...mapState(useOverflowStore, ["overflow_Item_Menu"]),

		active_Link: (stor) => (item) => {
			return stor[stor.page_Open]?.shown[item.id_link];
		},

		icon_Image: (stor) => (item) => {
			return !stor.active_Link(item) ? "arrow_down_small" : "arrow_right_small";
		},

		shown_Level_Dot: (store) => (item) => {
			let lvl = store.MY.level;
			return item.level == lvl && lvl !== 1;
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
			} else if(!stor.screen_Max) {
				return '\\';
			}
			return null;
		},

		overflow_Item: (stor) => (item) => {
			if(item.name == "skills" && item?.filter == 'only_mastery') {
				return false;
			} else {
				return stor.overflow_Item_Menu(item);
			}
		},

    sett_Counter: (stor) => (item) => {
      if (item.type == "spells") {
        const numb = item.select_numb - item.select_list.length;
        return numb !== 0;
      }
    },

		t_Type: (stor) => (item) => {
      if (item.type == "spells") {
        const dub_detect = stor.overflow_Item_Menu(item);
        const numb = item.select_numb - item.select_list.length;
        const selected = `${stor.T("spell_selected")} ${item.select_numb}`;
        const left = `${stor.T("spells_left")} ${numb}`;
        const duplicated = `${stor.T("spell_duplicated")}`;
        return numb !== 0 ? left : dub_detect ? duplicated : selected;
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
						arr.push(stor.T(item?.name));
					} else if(item.hasOwnProperty('name_custom')) {
						arr.push(item.name_custom ? item.name_custom : stor.T(item.name_set));
					} else if (item?.name_set) {
						arr.push(stor.T(item?.name_set));
					}
				});
				return arr.join(", ");
			}
		},

		size_Text() {
			if(this.screen_Max) {
				return '114px'
			} else {
				const num = this.screen_Menu_Num - 124 - 20*2 - 16*2 - 18;
				return `${num}px`
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
	display: flex;
	align-items: center;
	position: relative;
	cursor: pointer;
	gap: 4px;
}

@media (max-width: 1279px) {
	.column {
		padding: 16px;
		background: rgba(255, 255, 255, 0.06);
		backdrop-filter: blur(30px);
		-webkit-backdrop-filter: blur(30px);
		border-radius: 12px;
		isolation: isolate;
	}

	.column:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
}

.hover:hover::before {
	content: "";
	position: absolute;
	width: 20px;
	height: 2px;
	left: -40px;
	/* left: 0; */
	/* top: calc(50% - 1px); */
	background: #ffffff;
}

.column-link {
	display: flex;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.column-title {
	min-width: 120px;
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

.active-link:before {
	content: "";
	position: absolute;
	width: 35px;
	height: 2px;
	left: -39px;
	background: #ffffff;
}

.column-link span {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.link-text {
	display: flex;
	align-items: center;
}
</style>
