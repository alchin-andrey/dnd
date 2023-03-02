<template>
	<div class="grid-cell">
		<div class="int-400">{{t_Title}}</div>
		<div class="int-400 font-w-600">{{t_Content}}</div>
	</div>
</template>

<script>
export default {
	name: "AppMainCell",
	props: {
		title: {
			type: String,
			default: null,
		},
		content: {
			type: String,
			default: null,
		},
		content_arr: {
			type: Array,
			default: [],
		},
	},

	computed: {
		t_Title() {
      const t_str = this.t(this.title);
      return `${t_str[0].toUpperCase()}${t_str.slice(1)}`;
		},

		t_Content() {
      const t_str = this.t(this.content);
      return `${t_str[0].toUpperCase()}${t_str.slice(1)}`;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.grid-cell {
  display: grid;
}

.font-w-600 {
  font-weight: 600;
}

/* .flex_custom {
	height: 18px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.gap_4 {
	display: flex;
	gap: 4px;
} */
</style>
