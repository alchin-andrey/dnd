<template>
		<div v-for="item in menu" :key="item.id"
			class="column hover"
      @click="showSettings__Class(item.id)"
			:class="{
				active_link: class_page.shown[item.id],
			}"
		>
			<div class="column_title jbm-300">{{ t_Title(item) }}</div>
			<div
				class="column_link int-400 active"
				:class="{
					icon: !class_page.shown[item.id],
					icon_active: class_page.shown[item.id],
				}"
			>
				{{ t_Type(item) }}
			</div>
		</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
	name: "AppSelectionArr",
	props: {
		menu: {
			type: Object,
			default: {},
		},
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
    ...mapState(usePagesStore, ["class_page", "showSettings__Class"]),

		t_Title: (store) => (item) => {
      if (item == store.menu[0]) {
        return store.t(item?.name)
      }
			return null;
		},

		t_Type: (store) => (item) => {
			let arr = [];
			item.select_list.forEach((item) => {
				if (item?.name) {
					arr.push(store.t(item?.name));
				} else if (item?.name_set) {
					arr.push(store.t(item?.name_set));
				}
			});
			return arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join(", ");
		},

	},
};
</script>

<style scoped>
.column {
	/* height: 18px; */
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: relative;
	cursor: pointer;
}

.flex_row {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.hover:hover::after {
	content: "";
	position: absolute;
	width: 20px;
	height: 2px;
	left: -40px;
	top: calc(50% - 1px);
	background: #ffffff;
}

.column_title {
	width: 120px;
	height: 18px;
}

/* .column_title div {
	display: inline;
} */

.column_link {
	width: 132px;
	height: 18px;
	padding-right: 16px;
	margin-left: 4px;
	position: relative;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: rgba(255, 255, 255, 0.2);
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

.column_link div {
	white-space: nowrap; /* Текст не переносится */
	overflow: hidden; /* Обрезаем всё за пределами блока */
	text-overflow: ellipsis;
}

.column_link:first-letter {
	text-transform: uppercase;
}

.icon::after {
	content: url(@/assets/img/icon/arrow_down_small.svg);
	position: absolute;
	right: 0px;
	top: -2px;
}

.icon_active::after {
	content: url(@/assets/img/icon/arrow_right_small.svg);
	position: absolute;
	right: 0px;
	top: -2px;
}

.rare {
	color: #ffc93d;
}

.active {
	color: #ffffff;
}

.cursor_auto {
	cursor: auto;
}
</style>
