<template>
	<div class="grid-cell">
		<div class="cell-item">{{t_Title}}</div>
		<div class="cell-item font-w-600">{{t_Content}}</div>
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
      if(this.content) {
        const t_str = this.t(this.content);
        return `${t_str[0].toUpperCase()}${t_str.slice(1)}`;
      } else {
        return "—"
      }
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.grid-cell {
  display: grid;
}

.cell-item {
  white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.font-w-600 {
  font-weight: 600;
}
</style>
