<template>
	<div class="flex-col-sb gap-26 pd-l-32">
		<section class="flex-col gap-26">
      <Welcome/>
      <div class="flex-col gap-4">
        <Btm__WhatDND />
        <Btm__Reset />
      </div>
		</section>
		<Donate />
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
