<template>
	<svg
		:viewBox="view_Box"
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

		box_x: {
			type: String,
			default: '0',
		},

		box_y: {
			type: String,
			default: '0',
		},

		box_size: {
			type: String,
			default: '18',
		},

	},
	computed: {
    svg_Path() {
			return this[this.catalog][this.name]
		},

		view_Box() {
			return `${this.box_x} ${this.box_y} ${this.box_size} ${this.box_size}`
		}
		
  },
};
</script>
