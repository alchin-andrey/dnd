<template>
	<my-selection-card passive>
		<div class="gender_card_title jbm-300">{{ t_Title }}</div>
		<div class="gender__flex">
			<my-button-gender
				v-for="item in arr"
				:key="item.name"
				@mouseover="hover(item)"
				@mouseleave="hoverStop()"
				@click="getAlignment(item.name)"
				:img="item.name"
				:active_link="genderSelect === item.name"
			>
			</my-button-gender>
		</div>
		<my-card-text
			:title="hower_link ? hower_link.name : MY.alignment"
			:text="hower_link ? hower_link.details : `${MY.alignment}_details`"
		>
		</my-card-text>
	</my-selection-card>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
export default {
	name: "AlignmentCard",
	data() {
		return {
			hower_link: null,
		};
	},
	props: {
		title: {
			type: String,
			default: null,
		},
		arr: {
			type: Array,
			default: [],
		},
	},

	computed: {
		...mapState(useMYStore, ["MY"]),

		t_Title() {
			return this.t(this.title);
		},

		genderSelect() {
			return this.MY.alignment;
		},
	},

	methods: {
		getAlignment(name) {
			this.MY.alignment = name;
		},

		hover(name) {
			this.hower_link = name;
		},

		hoverStop() {
			this.hower_link = null;
		},
	},
};
</script>

<style scoped>
.gender_card {
	padding: 16px;
	width: 394px;
	background: rgba(255, 255, 255, 0.06);
	backdrop-filter: blur(60px);
	border-radius: 12px;
}

.gender_card_title {
	color: rgba(255, 255, 255, 0.2);
}

.gender__flex {
	display: flex;
	gap: 72px;
	flex-wrap: wrap;
}

</style>
