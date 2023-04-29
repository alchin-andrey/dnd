<template>
	<div class="h-100 flex-col-sb gap-26 pd-l-32">
    <Donate />
		<section class="flex-col gap-4">
      <Btm__WhatDND />
      <Btm__Reset />
		</section>
	</div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import Btm__WhatDND from "@/components/Btm__WhatDND.vue";
import Btm__Reset from "@/components/Btm__Reset.vue";
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
</style>
