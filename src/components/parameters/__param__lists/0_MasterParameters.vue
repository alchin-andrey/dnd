<template>
  <div class="jbm-300">{{ t_Master }}</div>
  <my-wrapper hr>
    <AppMasters
    class="mr-top-48"
    v-for="master in masters"
    :key="master.id"
    :master_param="master" />
  </my-wrapper>

  <my-selection-card class="marg-top-4" plus>
    <div class="int-700"> {{ t_Master_Btm }}</div>
  </my-selection-card>
</template>

<script>
import { mapState } from "pinia";
import { useMastersStore } from "@/stores/general/MastersStore";
export default {
	name: "MasterParameters",
	computed: {
		...mapState(useMastersStore, ["masters"]),

		t_Master() {
			return this.t("lobby_masters");
		},

		t_Master_Btm() {
			return this.t("lobby_master_button");
		},
	},
};
</script>

<style scoped>

.mr-top-48 {
  margin-top: 48px;
}
</style>
