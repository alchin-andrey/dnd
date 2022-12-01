<template>
	<div class="column jbm-300">
		<div class="column_value">
			<div class="icon">
				<img :src="icon_Image" :alt="icon" />
			</div>
			<div class="item" :class="{ passive: numb == 0 }">
				{{ t_Title }}<span>{{ t_Type }}</span>
			</div>
			<div class="numb" :class="{ passive: numb == 0 }">
				{{ Prefix }}{{ numb }} {{ Suffix }}
			</div>
		</div>
		<div class="visual">
			<div class="cube" v-for="n in cube_Numb" :key="n"></div>
			<div class="cube_zero" v-for="n in cube_Numb_Zero" :key="n"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MyAttribute",
	props: {
		title: {
			type: String,
			default: null,
		},
		numb: {
			type: Number,
			default: null,
		},
		type: {
			type: String,
			default: null,
		},
		icon: {
			type: String,
			default: null,
		},
		plus: {
			type: Boolean,
			default: false,
		},
		feet: {
			type: Boolean,
			default: false,
		},
		cube_zero: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		t_Title() {
			return this.t(this.title);
		},

		t_Type() {
			return this.t(this.type);
		},

		Prefix() {
			return this.plus ? "+" : "";
		},

		Suffix() {
			return this.feet ? this.t("feet") : "";
		},

		icon_Image() {
			if (this.icon === null) {
				return null;
			} else if (this.numb > 0) {
				return require(`@/assets/img/icon/atribute/${this.icon}_active.svg`);
			} else {
				return require(`@/assets/img/icon/atribute/${this.icon}_passive.svg`);
			}
		},

		cube_Numb() {
			if (this.feet) {
				return Math.ceil(this.numb / 5);
			} else {
				return this.numb;
			}
		},

		cube_Numb_Zero() {
			if (this.cube_zero) {
				return this.numb < 6 ? 6 - this.numb : 0;
			}
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
	display: flex;
	min-height: 18px;
}

.column_value {
	display: flex;
	width: 252px;
}

.icon {
	display: flex;
	width: 18px;
	height: 18px;
}

.item {
	margin-left: 4px;
}

.item span {
	margin-left: 8px;
	color: rgba(255, 255, 255, 0.2);
}

.active {
	color: #ffffff;
}

.passive {
	color: rgba(255, 255, 255, 0.2);
}

.numb {
	flex: 1 1 auto;
	text-align: end;
}

.visual {
	width: 98px;
	display: flex;
	align-items: center;
	margin-left: 12px;
	flex-wrap: wrap;
	padding: 5px 0 5px 0;
	gap: 2px;
}

.cube {
	width: 8px;
	height: 8px;
	background: #ffffff;
	box-shadow: 0px 0px 4px 1px rgba(255, 245, 0, 0.25);
	border-radius: 2px;
}

.cube_zero {
	width: 8px;
	height: 8px;
	border-radius: 2px;
	border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
