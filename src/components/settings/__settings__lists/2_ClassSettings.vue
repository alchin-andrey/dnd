<template>
	<!-- Специализация -->
	<my-selection-box :shown="class_page.shown.subclass">
		<ClassSett__Subclass />
	</my-selection-box>
	<!-- Специализация -->
	<!-- Характеристики -->
	<my-selection-box :shown="class_page.shown.stats">
		<ClassSett__BaseStats />
	</my-selection-box>
	<!-- Характеристики -->
	<!-- <section>
		<my-selection-box
			v-for="(сustomm, key) in сustomm_Settings_0"
			:key="сustomm[0].name"
			:shown="active_Link(сustomm)"
		>
			<my-wrapper v-for="item in сustomm_Settings_0_All(key)" :key="item" gap_8>
				<my-wrapper v-for="list in item.list" :key="list">
					<Card__CusstomClass :customm="list" />
				</my-wrapper>
			</my-wrapper>
		</my-selection-box>
	</section> -->

	<!-- <my-selection-box
		v-for="(сustomm, key) in сustomm_Settings_100"
		:key="сustomm[0].name"
	>
		<my-wrapper
			v-for="item in сustomm"
			:key="item.id_link"
			:shown="active_Link(item.id_link)"
			gap_8
		>
			<my-wrapper v-for="list in item.list" :key="list">
				<Card__CusstomClass :customm="list" />
			</my-wrapper>
		</my-wrapper>
	</my-selection-box> -->

	<section v-for="сustomm in customm_Settings_All" :key="сustomm[0].name">
		<my-selection-box
			v-for="item in сustomm"
			:key="item.id_link"
			:shown="class_page.shown[item.id_link]"
		>
			<!-- <my-wrapper gap_8> -->
			<!-- <my-wrapper v-for="list in item.list" :key="list"> -->
			<Card__CusstomClass
				v-for="list_el in item.list"
				:key="list_el"
				:customm="list_el"
        @click="getCustomSelect(item, list_el, сustomm)"
        :active_boll_link="item.select_list.includes(list_el)"
			/>
			<!-- </my-wrapper> -->
			<!-- </my-wrapper> -->
		</my-selection-box>
	</section>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import ClassSett from "@/components/settings/2_settings__class/ClassSetting.js";
export default {
	name: "ClassSettings",
	mixins: [ClassSett],
	computed: {
		// STORE
		...mapState(usePagesStore, ["class_page"]),
		...mapState(useMYStore, [
			"MY",
			// "сustomm_Settings_0",
			"сustomm_Settings_100",
      "customm_Settings_All",
		]),

		// active_Link: (store) => (item) => {
		// 	// console.log("item:", item);
		// 	// let key = store.var_Name(item);
		// 	return store.class_page.shown[item];
		// },

		// var_Name: (store) => (item) => {
		// 	// console.log("item:", item[0]);
		// 	return `${item.type}_${item.name}_0`;
		// 	// return `${item[0].type}_${item[0].name}_0`;
		// },

		// ttt: (store) => (item, key) => {
		// 	console.log(
		// 		"store.сustomm_Settings_0_All(key):",
		// 		store.сustomm_Settings_0_All(key)
		// 	);
		// 	console.log("item:", item.list);
		// },
	},

  methods: {
		getCustomSelect(item, list_el, сustomm) {
    const active = item.select_list.includes(list_el);
    
    if (active) {
				return null;
			} else {
				let arr = item.select_list.slice(0);
				arr.splice(0, 1);
				arr.push(list_el);  

        const arr_obj = сustomm.map(obj=> obj.id_link == item.id_link ? ({...obj, select_list: arr}) : {...obj} );

        if(!this.MY._settings_class[this.MY.class.name]) {
          this.MY._settings_class[this.MY.class.name] = {};
        }
        this.MY._settings_class[this.MY.class.name][item.id_link] = arr;

			}

      
    }
	},
};
</script>

<style scoped>
/* .flex_options {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 8px;
} */
</style>
