<template>
	<div class="spell-wrapp int-400">
		<AppSpells
			:spell_obj="spell_obj"
			qr_form
		/>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
export default {
	name: "SpellForm",
	data() {
		return {
			spell_obj: null,
		};
	},
	computed: {
		...mapState(useSpellsStore, ["spells"]),

    count() {
            return this.spells.length;
        },
	},

	watch: {
		count: {
			handler() {
				const id_link = this.$route.params.id;
				const spell_arr = this.spells[id_link];
				this.spell_obj = {spell: spell_arr};
			},
			immediate: true,
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spell-wrapp {
	margin: 0 auto;
	padding: 28px;
	background: #1c2326;
	border-radius: 12px;
	max-width: 396px;
	cursor: auto;
  align-self: center;
	/* overflow-y: scroll; */
	/* scrollbar-width: none; */
	height: max-content;
}
</style>
