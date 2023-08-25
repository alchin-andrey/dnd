<template>
	<div class="grid-cell">
		<div class="cell-item">{{t_Title}}</div>
		<div 
    class="cell-item int-600-22"
    :class="{wrap_arr: content_arr.length !== 0}"
    >{{t_Content}}</div>
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
      } else if(this.content_arr.length !== 0) {
				return this.content_arr.map((n) => `${this.t(n)[0].toUpperCase()}${this.t(n).slice(1)}`).join(", ");
      } else {
        return "—"
      }
		},
	},
};
</script>


<style scoped>
.grid-cell {
  overflow: hidden;
}

.cell-item {
  white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.wrap_arr {
  white-space: normal;
}
</style>
