<template>
	<svg
		viewBox="0 0 18 18"
		xmlns="http://www.w3.org/2000/svg"
		v-html="svg_Path"
	></svg>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
export default {
	name: "AppSvg",
	data() {
    return {
      ui_icon: ui_icon,
    };
  },
	props: {
		catalog: {
			type: String,
			default: 'ui_icon',
		},
		name: {
			type: String,
			default: 'close',
		},
	},
	computed: {
    svg_Path() {
			return this[this.catalog][this.name]
		}
  },
};
</script>
