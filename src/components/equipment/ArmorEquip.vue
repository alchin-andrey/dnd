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
					<div class="title h_18">{{ t_Title }} {{ armor_Numb }}</div>
					<img
						class="icon"
						src="@/assets/img/icon/arrow_right_small.svg"
						alt="arrow"
						@mouseover="hoverIn_Select()"
						@mouseleave="hoverOut()"
						@click="showDialog_Select()"
					/>
				</div>
			</div>
      <my-attribute v-if="Armor.armor_bonus"
				title="armor_class"
				:numb="Armor.armor_bonus"
        plus
        no_icon
			/>
      <my-attribute v-if="Armor.armor_class"
				title="armor_class"
				:numb="Armor.armor_class"
        no_icon
			/>
		</div>
	</div>
	<my-dialog-spell v-model:show="dialogVisible">
    <div class="title h_18">{{ t_Title }} {{ armor_Numb }}</div>
    <my-attribute v-if="Armor.armor_bonus"
				title="armor_class"
				:numb="Armor.armor_bonus"
        plus
        no_icon
			/>
      <my-attribute v-if="Armor.armor_class"
				title="armor_class"
				:numb="Armor.armor_class"
        no_icon
			/>
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

    t_Title() {
      let str = this.t(this.Armor.name)
      return str[0].toUpperCase() + str.slice(1);
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
	gap: 12px 0;
	/*flex: 1 1 auto;*/
}

.flex_title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 4px;
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

.manna_bubble {
	padding: 5px 12px;
	min-width: 31px;
	height: 28px;
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.manna_bubble_choice {
	background: rgba(255, 255, 255, 0.06);
	color: #ffffff;
}

.manna_bubble_hover:hover {
	background: rgba(255, 255, 255, 0.1);
}

.manna_bubble_active {
	background: #00e0ff;
	color: #0e1518;
}

.manna_bubble_passive {
	background: transparent;
	border: 1px solid rgba(255, 255, 255, 0.06);
	color: rgba(255, 255, 255, 0.2);
	cursor: auto;
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
  /* cursor: auto; */
}
</style>
