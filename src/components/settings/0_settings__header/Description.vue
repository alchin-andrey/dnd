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

	methods: {
	},

	computed: {
	},
};
</script>

<style scoped>
.cursor {
	cursor: pointer;
}

.marg {
	margin-left: 32px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.flex_col {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.flex {
	display: flex;
}

.story {
	color: rgba(255, 255, 255, 0.4);
	text-align: start;
	margin-bottom: 22px;
}

.title {
	font-family: "Inter-700";
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
}

.text {
	width: 300px;
	white-space: pre;
	overflow: hidden; /* Обрезаем всё за пределами блока */
	text-overflow: ellipsis;
}

.title:first-letter {
	text-transform: uppercase;
}

.link {
	padding: 16px;
}
</style>
