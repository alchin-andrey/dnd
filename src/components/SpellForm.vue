<template>
	<div class="spell-wrapp">
		<div>
      <div class="spell-baner int-400">
        <AppSpells :spell_obj="spell_Obj" qr_form />
      </div>
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

<style scoped>
.spell-wrapp {
  width: 100%;
  display: flex;
  justify-content: center;
	padding: 10px;
}

.spell-baner {
	padding: 28px;
	background: #1c2326;
	border-radius: 12px;
  width: 396px;
	overflow-y: scroll;
	scrollbar-width: none;
  max-height: 100%;
}

.spell-baner::-webkit-scrollbar {
	width: 0;
}
</style>
