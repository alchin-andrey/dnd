<template>
	<div class="column" 				
  :class="{
    'rare-text': any_Name && !param,
		}">
		<div class="icon">
			<svg
				class="icon_svg"
				:class="{
					'icon-passive': passive_Link,
					'icon-null': passive_Link_Full,
				}"
				viewBox="0 0 18 18"
				xmlns="http://www.w3.org/2000/svg"
				v-html="ui_icon.check"
			/>
		</div>
		<AppTooltip text="hint_over_limit" :shown="any_Name" warn>
			<div
				class="title jbm-300"
				:class="{
					passive: passive_Link,
				}"
			>
				{{ t_Title
				}}<span
					class="grey-2"
					>:</span
				>
			</div>
		</AppTooltip>
		<div class="item int-400" :class="{ passive: passive_Link }">
			<div class="flex-col" v-if="unique_Names.length == 0">—</div>
			<AppTooltip
				text="hint_over_limit"
				v-for="(name, i) in unique_Names"
				:key="name"
				:shown="overflow_Save(name)"
				warn
				:class="{ passive: arr_name_old.includes(name) }"
			>
				<div class="flex-col">
					<div :class="{ 'rare-text': overflow_Save(name) }">
						{{ t_Name(name, i) }}
					</div>
					<div v-if="unique_Names.length - 1 > i">,</div>
				</div>
			</AppTooltip>
		</div>
	</div>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
import { mapState } from "pinia";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
import { useOverflowStore } from "@/stores/modules/OverflowStore";
export default {
	name: "AppProficiencies",
	data() {
		return {
			ui_icon: ui_icon,
		};
	},
	props: {
		title: {
			type: String,
			default: null,
		},
		arr_name: {
			type: Array,
			default: [],
		},
		arr_name_old: {
			type: Array,
			default: [],
		},
		active_card: {
			type: Boolean,
			default: false,
		},
		param: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useProficienciesStore, []),

    ...mapState(useOverflowStore, [
      "overflow_Prof",
      "overflow_Prof_Any_Name",
		]),

		t_Title() {
			return this.t(this.title);
		},

		all_Names() {
			return [...this.arr_name, ...this.arr_name_old];
		},

		unique_Names() {
			const unique_arr_name_old = [...new Set(this.arr_name_old)];
			const unique_arr_name = [...new Set(this.arr_name)];
			const unique_arr_name_includ = unique_arr_name.filter(
				(i) => !unique_arr_name_old.includes(i)
			);
			return [...unique_arr_name_includ, ...unique_arr_name_old];
		},

		overflow_Save: (stor) => (name) => {
      if(stor.param) {
        return false;
      } else {
        return stor.overflow_Prof(stor.title, name, stor.active_card)
      }
		},

		any_Name() {
      return this.overflow_Prof_Any_Name(this.title)
		},

		t_Name: (stor) => (name) => {
			const t_name = stor.t(name);
			return `${t_name[0].toUpperCase()}${t_name.slice(1)}`;
		},

		passive_Link() {
			return this.arr_name.length === 0;
		},

		passive_Link_Full() {
			return this.all_Names.length === 0;
		},
	},
};
</script>

<style scoped>
.column {
	display: flex;
	min-height: 18px;
	position: relative;
}

.flex-col {
	display: flex;
	align-items: center;
	height: 18px;
	/* min-height: 18px; */
}

.title {
	margin-left: 4px;
}

.grey-2 {
	color: rgba(255, 255, 255, 0.2);
}

.icon {
	/* position: absolute; */
	width: 18px;
	height: 18px;
}

.icon_svg {
	width: 18px;
	height: 18px;
	fill: #05ff00;
}
.icon-full {
	fill: #ffc93d;
}
.icon-passive {
	opacity: 0.2;
}

.item {
	width: 100%;
	min-height: 18px;
	margin-left: 11px;
	/* padding: 2px 0px 1px; */
	text-align: start;
	display: flex;
	flex-wrap: wrap;
	gap: 0 3px;
	/* align-self: start; */
}

.passive {
	color: rgba(255, 255, 255, 0.2);
}


.rare-text,
.rare-text span, 
.rare-text div {
	color: #ffc93d;
}

.rare-text svg {
	fill: #ffc93d;
}


.icon-null {
	opacity: 0;
}
</style>
