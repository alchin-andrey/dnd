<template>
	<div class="jbm-300">{{ t_Master }}</div>
	<div class="mr-top-48">
		<AppMasters
			v-for="master in masters"
			:key="master.id"
			:master_param="master"
		/>
	</div>

	<my-selection-card class="int-700 marg-top-4" link plus>
		<a class="link-pad" target="_blank" href="https://t.me/dimalagoda">
			{{ t_Master_Btm }}
		</a>
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

.link-pad {
	padding: 16px;
}
</style>
