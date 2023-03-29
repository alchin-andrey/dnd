<template>
	<div class="spell-wrapp">
		<div class="spell-baner int-400">
			<AppSpells :spell_obj="spell_Obj" qr_form />
		</div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
export default {
	name: "SpellForm",
	// data() {
	// 	return {
	// 		spell_obj: null,
	// 	};
	// },
	computed: {
		...mapState(useSpellsStore, ["spells"]),

    spell_Obj() {
      const id_link = this.$route.params.id;
			const spell_arr = this.spells[id_link];
			return { spell: spell_arr };
    },

	// 	count() {
  //     const id_link = this.$route.params.id;
  //     console.log('id_link:', id_link)
	// 		return this.spells.length;
	// 	},
	},

	// watch: {
	// 	count: {
	// 		handler() {
	// 			const id_link = this.$route.params.id;
	// 			console.log("id_link:", id_link, this.$route);
	// 			const spell_arr = this.spells[id_link];
	// 			this.spell_obj = { spell: spell_arr };
	// 		},
	// 		immediate: true,
	// 	},
	// },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spell-wrapp {
	margin: 0 auto;
	padding: 10px;
	align-self: center;
	/* height: max-content; */
}

.spell-baner {
	/* margin: 0 auto; */
	padding: 28px;
	background: #1c2326;
	border-radius: 12px;
	max-width: 396px;
	/* cursor: auto; */
	/* align-self: center; */
	/* overflow-y: scroll; */
	/* scrollbar-width: none; */
	height: max-content;
}
</style>
