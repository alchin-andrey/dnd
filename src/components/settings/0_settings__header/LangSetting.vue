<template>
			<my-selection-card
				v-for="item in dic.lang"
				:key="item"
				@click="getLangSite(item.mark, item.icon)"
				:select_link="item.mark"
				:active_link="dic.select_lang"
			>
				<LangCard :title="item.icon" :text="item.name" :mark="item.mark" />
			</my-selection-card>
</template>

<script>
import LangCard from "@/components/settings/0_settings__header/LangCard.vue";
import { mapState, mapActions } from "pinia";
import { useDicStore } from "@/stores/general/DicStore";
export default {
	name: "LangSetting",
  components: { LangCard, },
	computed: {
    ...mapState(useDicStore, ["dic"]),
  },

	methods: {
    ...mapActions(useDicStore, ["getLangSite"]),
	},
};
</script>

<style scoped>
</style>
