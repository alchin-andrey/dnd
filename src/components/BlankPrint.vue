<template>
	<div class="grid gap-26">
		<div class="story-dev int-400" v-html="t_Html"></div>
		<div class="grid gap-26 int-700">
		</div>
	</div>
</template>

<script>
export default {
	name: "BlankPrint",
	methods: {
	},

	computed: {
		t_Html() {
			return this.t("authors");
		},
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

.grid {
  display: grid;
}

.gap-4 {
	gap: 4px;
}

.gap-26 {
	gap: 26px;
}

.flex {
	display: flex;
}

.story-dev {
	color: rgba(255, 255, 255, 0.4);
	text-align: start;
	/* margin-bottom: 22px; */
}

.soon-class {
	color: #05ff00;
}

.text {
	width: 300px;
	white-space: pre;
	overflow: hidden; /* Обрезаем всё за пределами блока */
	text-overflow: ellipsis;
}

.text-finish {
	width: 320px;
}

.text:first-letter {
	text-transform: uppercase;
}

.link-pad {
	padding: 16px;
}
</style>
