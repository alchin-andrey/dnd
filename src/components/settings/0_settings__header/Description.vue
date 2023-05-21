<template>
	<div 
  class="h-100 flex-col-sb gap-26"
  :class="{'pd-l-32': screen_Max,}"
  >
    <Donate />
		<section class="flex-col gap-4">
      <Btm__WhatDND />
      <Btm__Reset />
		</section>
	</div>
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
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
  computed: {
    ...mapState(usePagesStore, ["screen_Max"]),
  },
};
</script>

<style scoped>
</style>
