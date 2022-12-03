<template>
	<div class="flex_custom">
		<div class="gap_4">
			<img src="@/assets/img/icon/back_page.svg" alt="custom_setting" />
			<div class="column_link int-400"><p>{{ t_Title }}</p></div>
		</div>
		<img src="@/assets/img/icon/arrow_down_small.svg" alt="arrow_down_small" />
	</div>
</template>

<script>
export default {
	name: "MyBackPage",
	props: {
    text: {
			type: String,
			default: null,
		},
		text_arr: {
			type: Array,
			default: [],
		},
	},

	computed: {
		t_Title() {
      if (this.text) {
				return this.t(this.text);
			} else {
				let arr = [];
				for (let i in this.text_arr) {
					arr.push(this.t(this.text_arr[i]));
				}
				return arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join(", ");
      }
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex_custom {
	height: 18px;
	display: flex;
	align-items: center;
	justify-content: space-between;
  cursor: pointer;
}

.gap_4 {
	display: flex;
	gap: 4px;
}
.column_link {
  display: flex;
  align-items: center;
}

.column_link p {
	max-width: 210px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
