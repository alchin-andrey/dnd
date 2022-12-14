<template>
	<!-- <transition name="fade"> -->
		<!-- <div v-if="shown_Stats"> -->
			<div
				class="wrapper"
				:class="{
					gap_6: gap_6,
					gap_8: gap_8,
					gap_16: gap_16,
					gap_26: gap_26,
				}"
			>
				<slot></slot>
			</div>
			<div v-if="hr" class="hr"></div>
		<!-- </div>
	</transition> -->
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/pages/PagesStore";
export default {
	name: "MyWrapper",
	props: {
		gap_6: {
			type: Boolean,
			default: false,
		},
		gap_8: {
			type: Boolean,
			default: false,
		},
		gap_16: {
			type: Boolean,
			default: false,
		},
		gap_26: {
			type: Boolean,
			default: false,
		},
		hr: {
			type: Boolean,
			default: false,
		},
		base_stats: {
			type: Boolean,
			default: false,
		},
    all: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(usePagesStore, ["class_page"]),
    // shown_Stats() {
    //   if (this.base_stats) {
    //     return this.class_page.shown.stats && this.base_stats
    //   } else if (this.all) {
    //     return true
    //   } else {
    //     return !this.class_page.shown.stats
    //   }
    // }
	},
};
</script>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.hr {
	height: 1px;
	margin: 26px 0;
	background: rgba(255, 255, 255, 0.2);
}

.gap_6 {
	gap: 6px;
}

.gap_8 {
	gap: 8px;
}

.gap_16 {
	gap: 16px;
}

.gap_26 {
	gap: 26px;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
