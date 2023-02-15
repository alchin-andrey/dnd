<template>
<AppTooltip text="hint_over_limit" :shown="any_Name" warn>
	<div class="column">
    <div class="icon" v-if="!passive_Link_Full">
						<svg
							class="icon_svg"
							:class="{
                'icon-passive': passive_Link,
                'icon-full': any_Name,
              }"
							viewBox="0 0 18 18"
							xmlns="http://www.w3.org/2000/svg"
							v-html="ui_icon.check"
						/>
					</div>
		<div
			class="title jbm-300"
			:class="{
				passive: passive_Link,
        'rare-text': any_Name,
			}"
		>
			{{ t_Title }}<span 
      class="grey-2"
			:class="{
        'rare-text': any_Name,
			}"
      >:</span>
		</div>
		<div class="item int-400" :class="{ passive: passive_Link }">
			<span v-if="unique_Names.length == 0">—</span>
			<AppTooltip
				text="hint_over_limit"
				v-for="(name, i) in unique_Names"
				:key="name"
				:shown="overflow_Save(name) && !any_Name"
				warn
				:class="{ passive: arr_name_old.includes(name) }"
			>
				<span :class="{ 'rare-text': overflow_Save(name) }">
					{{ t_Name(name, i) }}
				</span>
				<span v-if="unique_Names.length - 1 > i">, </span>
			</AppTooltip>
		</div>
	</div>
</AppTooltip>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
import { mapState } from "pinia";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
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
		...mapState(useProficienciesStore, ["proficiencies_Arr_All"]),

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
			const name_times = stor
				.proficiencies_Arr_All(stor.title)
				.reduce((acc, el) => (el == name ? acc + 1 : acc), 0);
			if (stor.any_Name) {
				return true;
			} else if (stor.active_card && name_times <= 1 || stor.param) {
				return false;
			} else {
				return name_times >= 1;
			}
		},

		any_Name() {
			return this.proficiencies_Arr_All(this.title).includes("any");
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

.title {
	margin-left: 22px;
}

.grey-2 {
	color: rgba(255, 255, 255, 0.2);
}

.icon {
	position: absolute;
}

.icon_svg {
	width: 18px;
	height: 18px;
	fill: #05FF00;
}
.icon-full {
	fill: #ffc93d;
}
.icon-passive {
	opacity: 0.2;
}

.item {
	width: 100%;
	min-height: 11px;
	margin-left: 11px;
	padding: 2px 0px 1px;
	text-align: start;
}

.passive {
	color: rgba(255, 255, 255, 0.2);
}

.rare-text {
	color: #ffc93d;
}
</style>
