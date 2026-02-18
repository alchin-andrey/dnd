<template>
	<div class="main-class">
		<Main__MenuBar />
		<Main__SetBar />
		<Main__CharBar v-show="!PRINT_BLANK" />
		<Main__ParamBar v-show="!PRINT_BLANK" />

		<!-- <BlankPrint v-if="PRINT_BLANK" id="element-to-convert"/> -->
	</div>

	<!-- alse -->
	<AppDialog__Main v-model:show="site_settings.print_dialog" finish>
		<WelcomPage__Start />
	</AppDialog__Main>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";
import { useFormStore } from "@/stores/modules/simple/FormStore";
import { useGenderStore } from "@/stores/modules/simple/GenderStore";
import { useFeatsStore } from "@/stores/modules/FeatsStore";

import MainApp from "@/components/main/MainApp.js";
export default {
	name: "Main",
	mixins: [
		MainApp, 
	],
	data() {
		return {
			// PRINT_BLANK: true,
			PRINT_BLANK: false,
		};
	},

	created() {
		this.getCreated();
	},

	computed: {
		//STORES
		...mapState(useMYStore, [
			"MY",
			"MY_Race",
			"MY_Class",
		]),
		...mapState(usePagesStore, [
			"new_user",
			"site_settings",
			"pages",
			"screen_Max",
		]),

		...mapState(useFormStore, [
			"Get_Age",
			"Get_Weight",
			"Get_Height",
		]),

		...mapState(useFeatsStore, [
			"feats_Condition_Pass_Name",
			"feats_Arr_Select_Id",
			"feats_Arr_Free",
		]),

		...mapState(useGenderStore, ["names_Arr"]),
	},
	watch: {
		"MY_Race.name": "getWatch_Race",
		"MY_Class.name": "getWatch_Class",

		names_Arr(val, oldVal) {
			const incl = val.includes(this.MY.name);
			const user_name = this.MY.param.user_name;
			if (!incl && !user_name) this.getRandomName();
		},

		feats_Condition_Pass_Name(val, oldVal) {
			if (oldVal && val.toString() !== oldVal.toString()) {
				this.feats_Arr_Select_Id.forEach((el) => {
					if (el.id_btn == "feats") {
						const obj =
							this.MY._settings_class[this.MY_Class.name][el.id_link];
						const name = obj.feats[0].name;
						const includ = this.feats_Condition_Pass_Name.includes(name);
						const new_el = this.feats_Arr_Free[0];
						if (includ) {
							this.MY._settings_class[this.MY_Class.name][el.id_link] = {
								...obj,
								feats: [new_el],
							};
						}
					}
				});
			}
		},

	},

	methods: {
		...mapActions(useMYStore, ["getCreated"]),
		...mapActions(usePagesStore, [
			"closeEthnos",
			"closeColor",
			"closeCustomSett",
			"showHome",
		]),
		...mapActions(useGenderStore, ["getRandomName"]),

		getWatch_Race() {
			this.closeEthnos();
			this.closeColor("skin");
			this.closeColor("eyes");
			this.closeColor("hair");
			this.closeCustomSett();
			this.MY.height = this.Get_Height;
			this.MY.weight = this.Get_Weight;
			this.MY.age = this.Get_Age;
		},

		getWatch_Class() {
			this.closeCustomSett();
		},
	},
};
</script>

<style>
.main-class {
	display: flex;
	height: 100%;
	width: 100%;
	overflow-x: hidden;
}

.main-class::-webkit-scrollbar {
	width: 0;
}

@media (max-width: 1279px) {
	.main-class {
		display: block;
		max-width: 434px;
		margin: 0 auto;
		height: 100%;
		overflow-y: scroll;
		scrollbar-width: none;
		scroll-behavior: smooth;
	}

	.main-class::-webkit-scrollbar {
		width: 0;
	}
}

/* ---------------------sidebar_right----------------------*/

.story {
	max-width: 362px;
	color: rgba(255, 255, 255, 0.4);
	text-align: start;
}
</style>
