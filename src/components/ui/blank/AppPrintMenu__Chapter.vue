<template>
	<section class="column">
		<div class="column-title jbm-500-22">{{ t_Title }}</div>
		<div class="column-item font-w-600">
			<div class="item-text-wrap" :class="{'h-72': base_Stats}" v-for="elem in render_Chapter">
        <div class="item-text" :class="{'item-text-normal': base_Stats}">
          {{ rend_Elem(elem) }}
        </div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useOverflowStore } from "@/stores/modules/OverflowStore";
export default {
	name: "AppPrintMenu__Chapter",
	props: {
		title: {
			type: String,
			default: null,
		},
		chapter: {
			type: String,
			default: null,
		},
		chapter_arr: {
			type: Array,
			default: [],
		},
		menu: {
			type: Object,
			default: {},
		},
		no_name: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY", "level_Filter_Arr", "str_Upper"]),
		...mapState(useOverflowStore, ["overflow_Item_Menu"]),


    t_Title() {
      return this.t(this.title);
    },


    base_Stats() {
      return this.title == 'stats';
    },

    render_Chapter() {
      if (this.chapter) return [this.chapter];
			if (this.chapter_arr.length !== 0) return this.chapter_arr;
    },

    rend_Elem: (stor) => (elem) => {
			if (stor.title) return stor.str_Upper(stor.t(elem));
		},
	},
};
</script>

<style scoped>
.font-w-600 {
	font-weight: 600;
}
.column {
  width: 100%;
	min-height: 36px;
	display: flex;
	gap: 8px;
}

.column-title {
	width: 240px;
}

.column-item {
  width: 264px;
	overflow: hidden;
}

.item-text-wrap {
  height: 36px;
  display: flex;
  align-items: center;
}

.h-72 {
  height: 72px;
}

.item-text {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}


.item-text-normal {
  white-space: normal;
}
</style>
