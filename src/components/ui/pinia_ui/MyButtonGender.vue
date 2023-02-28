<template>
	<div class="gender_item" :class="{ active: active_link }">
    <svg 
        fill="white"
        width="72" 
        height="72"
        viewBox="0 0 72 72"
        xmlns="http://www.w3.org/2000/svg"
        v-html="gender_icon[img]"
      />
		<!-- <img :src="get_Image" :alt="img" /> -->
	</div>
</template>

<script>
import gender_icon from "@/assets/catalog/icon/gender_icon";
export default {
	name: "MyButtonGender",
  data() {
    return {
      gender_icon: gender_icon,
    }
  },
	props: {
		img: {
			type: String,
			default: null,
		},
		active_link: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
	},
};
</script>

<style scoped>
.gender_item {
  /* padding: 2px; */
	width: 72px;
	height: 72px;
	background: rgba(255, 255, 255, 0.06);
	border-radius: 120px;
  display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.gender_item:hover {
	background: rgba(255, 255, 255, 0.1);
}

.active {
  /* padding: 0px; */
	border: 2px solid #ffffff;
}
</style>
