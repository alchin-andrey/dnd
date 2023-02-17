<template>
	<div class="column">
		<div
			class="title jbm-300"
			:class="{
				passive: passive_Link,
				icon: !passive_Link_Full,
			}"
		>
			{{ t_Title }}<span>:</span>
		</div>
		<div class="item int-400" :class="{ passive: passive_Link }">
			<span>{{ t_Item }} </span>
			<span v-if="item.length !== 0 && item_old.length !== 0">, </span>
			<span class="passive">{{ t_Item_Old }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "MyInventory",
	props: {
		title: {
			type: String,
			default: null,
		},
		item: {
			type: Array,
			default: [],
		},
		item_old: {
			type: Array,
			default: [],
		},
	},
	computed: {
		t_Title() {
			return this.t(this.title);
		},

		t_Item_Old() {
			let arr = [];
			for (let i in this.item_old) {
				if (this.t(this.item_old[i])) {
					arr.push(this.t(this.item_old[i]));
				} else {
					arr.push(this.item_old[i]);
				}
			}
			return arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join(", ");
		},

		t_Item() {
			if (this.item.length === 0 && this.item_old.length === 0) {
				return "—";
			} else {
				let arr = [];
				for (let i in this.item) {
					if (this.t(this.item[i])) {
						arr.push(this.t(this.item[i]));
					} else {
						arr.push(this.item[i]);
					}
				}
				return arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join(", ");
			}
		},

		passive_Link() {
			return this.item.length === 0;
		},

    passive_Link_Full() {
			return this.item.length === 0 && this.item_old.length === 0;
		},
	},
};
</script>

<style scoped>
.column {
	display: flex;
	min-height: 18px;
}

.title {
	margin-left: 22px;
}

.title span {
	color: rgba(255, 255, 255, 0.2);
}

.icon {
	position: relative;
}

.icon::before {
	content: url(@/assets/img/icon/check.svg);
	position: absolute;
	left: -22px;
}

/* .icon::before {
	opacity: 0.2;
} */

.item {
	width: 100%;
	min-height: 11px;
	margin-left: 11px;
	padding: 2px 0px 1px;
	text-align: start;
}

.passive {
	color: rgba(255, 255, 255, 0.2);
}

.passive::before {
	opacity: 0.2;
}
</style>
