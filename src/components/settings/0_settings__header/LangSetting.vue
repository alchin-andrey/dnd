<template>
	<LangCard
		v-for="item in dic.lang"
		:key="item"
		@click="getLangSite(item.mark)"
		:title="item.icon" 
		:text="item.name" 
		:active_card="item.mark == select_lang"
	/>
</template>

<script>
import LangCard from "@/components/settings/0_settings__header/LangCard.vue";
import { mapWritableState } from "pinia";
import { useDicStore } from "@/stores/general/DicStore";
export default {
	name: "LangSetting",
  components: { LangCard, },
	computed: {
    ...mapWritableState(useDicStore, ["dic", "select_lang"]),
  },

	methods: {
    getLangSite(name) {
			this.select_lang = name;
		},
	},
};
</script>
