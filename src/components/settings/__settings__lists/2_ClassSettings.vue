<template>
	<!-- Характеристики -->
	<my-selection-box :shown="class_page.shown.stats">
		<ClassSett__BaseStats />
	</my-selection-box>
	<!-- customm_Settings -->
	<section v-for="сustomm in customm_Settings_Class_Obj" :key="сustomm[0].name">
		<my-selection-box
			v-for="item in сustomm"
			:key="item.id_link"
			:shown="class_page.shown[item.id_link]"
		>
			<Card__CusstomClass
				v-for="list_el in item.list"
				:key="list_el"
				:customm="list_el"
        @click="getCustomSelect(item, list_el)"
        :active_boll_link="item.select_list.includes(list_el)"
			/>
		</my-selection-box>
	</section>
  <!-- customm_Settings -->
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
      "customm_Settings_Class_Obj",
		]),
	},

  methods: {
		getCustomSelect(item, list_el) {
    const active = item.select_list.includes(list_el);
    
    if (active) {
				return null;
			} else {
				let arr = item.select_list.slice(0);
				arr.splice(0, 1);
				arr.push(list_el);  

        // const arr_obj = сustomm.map(obj=> obj.id_link == item.id_link ? ({...obj, select_list: arr}) : {...obj} );

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
