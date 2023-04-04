<template>
	<div class="marg">
		<Welcome reset/>
		<Donate />
	</div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import Donate from "@/components/Donate.vue";
export default {
	components: { 
    Welcome,
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
</style>
