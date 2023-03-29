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
		...mapState(useSpellsStore, ["spells", "mods"]),

    spell_Obj() {
      const id_link = this.$route.params.id;
      const query = this.$route.query;
			const spell_arr = this.spells[id_link];

      let spell_obj = { spell: spell_arr, param: query, };
      const mod_id = this.$route.query?.m;
      if (mod_id) {
        const mod = this.mods.m.find(el => el.id == mod_id);
        spell_obj = {...spell_obj, mod: mod}
      }
			return spell_obj;
    },
	},

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spell-wrapp {
	margin: 0 auto;
	padding: 10px;
	/* align-self: center; */
	/* height: max-content; */
}

.spell-baner {
	/* margin: 0 auto; */
	padding: 28px;
	background: #1c2326;
	border-radius: 12px;
	/* max-width: 396px; */
  width: 396px;
	/* cursor: auto; */
	/* align-self: center; */
	overflow-y: scroll;
	scrollbar-width: none;
	/* height: max-content; */
	/* height: 100%; */
  max-height: 100%;
}

.spell-baner::-webkit-scrollbar {
	width: 0;
}
</style>
