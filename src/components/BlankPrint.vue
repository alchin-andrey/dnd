<template>
	<!-- <div class="skroll"> -->
	<div class="blank-conteiner int-400-22">
		<section class="blank-head">
			<div class="grid__wrap">
				<BlankTable__MainNames />
				<BlankTable__MainSett />
        <BlankTable__Proficiencies/>
			</div>
			<div class="repres">
				<div class="character_blank">
					<RaceBody body_part="skin" />
					<RaceBody body_part="eyes" />
					<RaceBody body_part="hair" />
					<RaceBody body_part="class" />
				</div>
				<div class="gradient"></div>
			</div>
		</section>
		<section class="blank-bottom"></section>
	</div>
	<!-- </div> -->
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
// import { useAlignmentStore } from "@/stores/modules/AlignmentStore";
import BlankPrintLink from "@/components/blank_print/BlankPrintLink.js";
export default {
	name: "BlankPrint",
	mixins: [BlankPrintLink],
	methods: {},

	computed: {
		...mapState(useMYStore, ["MY"]),
	},
};
</script>

<style>
.skroll {
	width: 100%;
	height: 100%;
	bottom: 0;
	overflow-y: scroll;
	scrollbar-width: none;
}

.skroll::-webkit-scrollbar {
	width: 0;
}

.blank-conteiner {
	width: 100%;
	height: 100%;
	width: 2088px; /* 1588 */
	height: 2952px;
	color: #000000;
	z-index: 10;
	padding: 72px;
	overflow-y: scroll;
	scrollbar-width: none;
	background-color: #ffffff;
	margin-right: -2088px;
}

.blank-head {
	display: flex;
	gap: 72px;
	height: 1404px;
}

.blank-bottom {
	border-top: 1px dashed #333333;
	height: 100%;
}

.blank-conteiner::-webkit-scrollbar {
	width: 0;
}

.grid__wrap {
	min-width: 648px;
	max-width: 648px;
	margin: 1px 1px 0 0;
	/* display: grid; */
	display: flex;
	flex-direction: column;
	gap: 36px;
}

.repres {
	width: 100%;
	/* width: 1223px; */
	height: 1404px;
	overflow: hidden;
	position: relative;
}

.character_blank {
	height: 150%;
	position: relative;
	border-radius: 50px;
}

.character_blank img {
	position: absolute;
	top: 50% !important;
	/* left: 0 !important; */
	left: 50% !important;
	transform: translate(-50%, -50%);
}

.character_blank svg {
	position: absolute;
	bottom: 0;
	right: 50%;
	left: 50%;
}

.gradient {
	height: 300px;
	width: 100%;
	position: absolute;
	bottom: 0;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 0.5130427170868348) 46%,
		rgba(255, 255, 255, 1) 100%
	);
}
</style>
