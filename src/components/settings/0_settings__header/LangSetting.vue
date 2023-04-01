<template>
			<my-selection-card
				v-for="item in dic.lang"
				:key="item"
				@click="getLangSite(item.mark)"
				:select_link="item.mark"
				:active_link="select_lang"
			>
				<LangCard :title="item.icon" :text="item.name" :mark="item.mark" />
			</my-selection-card>
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

<style scoped>
</style>
