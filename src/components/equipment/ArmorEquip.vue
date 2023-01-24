<template>
	<div
		class="flex_weapon"
		@mouseover="hoverIn_Full()"
		@mouseleave="hoverOut()"
		@click="showDialog_Full()"
	>
		<div ref="stripe" class="side_stripe"></div>
		<div class="int-400 flex_col" :class="{ passive: passive }">
			<div>
				<div class="flex_title">
					<div class="title int-700 h_18">{{ t_Armor_Name }}</div>
					<img
						class="icon"
						src="@/assets/img/icon/arrow_right_small.svg"
						alt="arrow"
						@mouseover="hoverIn_Select()"
						@mouseleave="hoverOut()"
						@click="showDialog_Select()"
					/>
				</div>
        <div class="text gray_2" v-html="t_Armor_Type"></div>
			</div>
      <my-attribute v-if="Armor.armor_bonus"
				title="armor_class"
				:numb="Armor.armor_bonus"
        type="bonus"
        plus
        no_icon
			/>
      <my-attribute v-if="Armor.armor_class"
				title="armor_class"
				:numb="Armor.armor_class"
        type="armor_full"
        no_icon
			/>
		</div>
	</div>
	<my-dialog-spell v-model:show="dialogVisible">

      <my-wrapper>
			<div class="int-700">{{ t_Armor_Name }}</div>
			<div class="text gray_4">{{ t_Armor_Details }}</div>
      <div class="type gray_4">{{ t_Armor_Type }}</div>
		</my-wrapper>

		<my-wrapper>
      <my-attribute v-if="Armor.armor_bonus"
				title="armor_class"
				:numb="Armor.armor_bonus"
        type="bonus"
        plus
        no_icon
        dot
			/>
      <my-attribute v-if="Armor.armor_class"
				title="armor_class"
				:numb="Armor.armor_class"
        type="armor_full"
        no_icon
        dot
			/>
		</my-wrapper>

		<my-wrapper v-if="Armor.cost || Armor.weight">
			<my-attribute
				v-if="Armor.cost"
				title="cost"
				:price="Armor.cost"
				dot
			/>
			<my-attribute
				v-if="Armor.weight"
				title="weight"
				:numb="Armor.weight"
				unit="kg"
				dot
			/>
		</my-wrapper>
	</my-dialog-spell>
</template>

<script>
export default {
	name: "ArmorEquip",
	data() {
		return {
			dialogVisible: false,
		};
	},
	props: {
		armor: {
			type: Array,
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
    Armor() {
      return this.armor[0];
    },

    t_Equip_Name: (state) => (item) => {
			const name = state.t(item[0].name);
			const namb = item[1];
			let str = namb > 1 ? `${name} x ${namb}` : name;
			return str[0].toUpperCase() + str.slice(1);
		},

    t_Armor_Name() {
			return this.t_Equip_Name(this.armor);
		},

    t_Armor_Details() {
      return this.t(this.Armor.details)
    },

    t_Armor_Type() {
      return this.t(this.Armor.type[0].name);
    },

    armor_Numb() {
      let numb = this.armor[1]
      return numb > 1 ? `× ${numb}`: null;
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
		hoverIn_Select() {
			if (this.select) {
				this.$refs.stripe.classList.add("active");
			}
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

		showDialog_Select() {
			this.dialogVisible = true;
		},
	},
};
</script>

<style scoped>
.flex_weapon {
	display: flex;
	gap: 0 18px;
	height: 100%;
	width: 100%;
	cursor: pointer;
	/* cursor: url('@/assets/img/icon/cursor_magic.png'), pointer; */
}

.flex_col {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px 0;
	/*flex: 1 1 auto;*/
}

.flex_title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 4px;
}
.type {
	margin-top: 12px;
}

.type::first-letter {
	text-transform: uppercase;
}
.text {
	text-align: start;
}

.text::first-letter {
	text-transform: uppercase;
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

.h_18 {
	height: 18px;
}

.title {
	display: flex;
	align-items: center;
	white-space: pre;
}

.title::first-letter {
	text-transform: uppercase;
}

.gray_2 {
	color: rgba(255, 255, 255, 0.2);
}

.gray_4 {
	color: rgba(255, 255, 255, 0.4);
}

.passive {
  opacity: 0.2;
}
</style>
