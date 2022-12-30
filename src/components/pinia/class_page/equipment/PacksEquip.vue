<template>
	<div
		class="flex_packs"
		@mouseover="hoverIn_Full()"
		@mouseout="hoverOut()"
		@click="showDialog_Full()"
	>
		<div ref="stripe" class="side_stripe"></div>
		<div class="int-400 gap_col" :class="{ passive: passive }">
			<div class="flex_title">
				<div class="title_packs">{{ t_Packs_Name }}</div>
				<img
					class="icon"
					:src="img_Icon"
					alt="arrow"
					@click.stop
					@mouseover.stop
					@click="shownScroll()"
				/>
			</div>

			<transition name="scroll-packs">
				<section class="items_packs" v-if="packs_scroll">
					<div class="item_packs" v-for="items in packs[0].items" :key="items">
						• {{ t_Equip_Name(items) }}
					</div>
				</section>
			</transition>
		</div>
	</div>
	<my-dialog-spell v-model:show="dialogVisible" class="dialog">
		<my-wrapper>
			<div class="int-700">{{ t_Packs_Name }}</div>
			<div class="text gray_4">{{ packs_Details }}</div>
		</my-wrapper>

		<section class="items_packs">
			<div class="item_packs" v-for="items in packs[0].items" :key="items">
				• {{ t_Equip_Name(items) }}
			</div>
		</section>

		<my-wrapper>
			<my-attribute title="cost" :price="packs[0].cost" dot />
			<my-attribute title="weight" :numb="packs[0].weight" unit="kg" dot />
		</my-wrapper>
	</my-dialog-spell>
</template>

<script>
export default {
	name: "PacksEquip",
	data() {
		return {
			dialogVisible: false,
			packs_scroll: false,
		};
	},
	props: {
		packs: {
			type: Array,
			default: null,
		},
		packs_name: {
			type: String,
			default: null,
		},
		select: {
			type: Boolean,
			default: false,
		},
		passive: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		Packs() {
			return this.packs[0];
		},

		t_Equip_Name: (state) => (inv) => {
			const name = state.t(inv[0].name);
			const namb = inv[1];
			let str = namb > 1 ? `${name} x ${namb}` : name;
			return str[0].toUpperCase() + str.slice(1);
		},

		t_Packs_Name() {
			return this.t_Equip_Name(this.packs);
		},

		packs_Details() {
			return this.t(this.packs[0].details);
		},

		img_Icon() {
			let icon = this.packs_scroll ? "top" : "down";
			return require(`@/assets/img/icon/arrow_${icon}_small.svg`);
		},
	},

	watch: {
		dialogVisible(val) {
			if (val === false) {
				this.$refs.stripe.classList.remove("active");
			}
		},
	},
	methods: {
		shownScroll() {
			this.packs_scroll = !this.packs_scroll;
		},

		hoverOut() {
			if (!this.dialogVisible) {
				this.$refs.stripe.classList.remove("active");
			}
		},
		hoverIn_Full() {
			if (!this.select) {
				this.$refs.stripe.classList.add("active");
			}
		},
		showDialog_Full() {
			if (!this.select) {
				this.dialogVisible = true;
			}
		},
	},
};
</script>

<style scoped>
/* .skroll_list_closed::after {
	position: absolute;
	content: url(@/assets/img/icon/arrow_down_small.svg);
	top: 0;
	right: 16px;
}

.skroll_list_open::after {
	position: absolute;
	content: url(@/assets/img/icon/arrow_top_small.svg);
	top: 0;
	right: 16px;
} */

.gap_col {
	display: grid;
	gap: 15px;
	width: 100%;
}

.title_packs:first-letter {
	text-transform: uppercase;
}

.items_packs {
	padding-left: 10px;
}

.item_packs {
	text-indent: -10px;
}

.flex_packs {
	display: flex;
	gap: 0 18px;
	height: 100%;
	width: 100%;
	cursor: pointer;
}

.gray_2 {
	color: rgba(255, 255, 255, 0.2);
}

.flex_title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}

.side_stripe {
	min-width: 4px;
	min-height: 100%;
	background: rgba(255, 255, 255, 0.2);
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
}

.active {
	background: #ffffff;
}

.manna_flex {
	display: flex;
	gap: 3px;
}

.h_18 {
	height: 18px;
}

.title {
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
	display: flex;
	align-items: center;
	white-space: pre;
}

.title::first-letter {
	text-transform: uppercase;
	font-size: 130%;
}

.gray_2 {
	color: rgba(255, 255, 255, 0.2);
}

.gray_4 {
	color: rgba(255, 255, 255, 0.4);
}

.hr {
	height: 1px;
	background: rgba(255, 255, 255, 0.2);
}

.passive {
	opacity: 0.2;
}

.scroll-packs-enter-active {
	transition: all 0.4s ease-out;
}

.scroll-packs-leave-active {
	transition: all 0.4s cubic-bezier(1, 0.8, 0.8, 1);
}

.scroll-packs-enter-from,
.scroll-packs-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}

.icon:hover {
	position: relative;
	animation-name: arrow;
	animation-duration: 0.5s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}

@keyframes arrow{
0%{
top: 0%;
}
100%{
  top: 20%;
}
}
</style>
