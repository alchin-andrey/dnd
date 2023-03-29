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
	computed: {
		...mapState(useSpellsStore, ["spells"]),

    spell_Obj() {
      // console.log('this.$route.:', this.$route)
      // console.log('this.$route.:', this.$route.query)
      const id_link = this.$route.params.id;
      const param = this.$route.query;
			const spell_arr = this.spells[id_link];
			return { spell: spell_arr, param: param, };
    },
	},

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
