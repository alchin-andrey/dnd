<template>
	<div class="marg gap-26">
		<section class="flex-col gap-26">
      <Welcome/>
      <div class="flex-col gap-4">
        <Btm__Reset />
        <Btm__WhatDND />
      </div>
		</section>
		<Donate />
	</div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import Btm__Reset from "@/components/Btm__Reset.vue";
import Btm__WhatDND from "@/components/Btm__WhatDND.vue";
import Donate from "@/components/Donate.vue";
export default {
	components: { 
    Welcome,
    Btm__WhatDND,
    Btm__Reset,
    Donate,
  },
	name: "Description",
};
</script>

<style scoped>
.marg {
	margin-left: 32px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.flex-col {
	display: flex;
	flex-direction: column;
}

.gap-26 {
	gap: 26px;
}

.gap-4 {
	gap: 4px;
}
</style>
