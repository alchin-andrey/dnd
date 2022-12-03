<template>
	<div class="column">
		<div
			class="title jbm-300"
			:class="{
				passive: passive_Link,
				icon: !passive_Link,
			}"
		>
			{{ t_Title }}<span>:</span>
		</div>
		<div class="item int-400" :class="{ passive: passive_Link }">
			{{ t_Item }}
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
			default: null,
		},
	},
	computed: {
		t_Title() {
			return this.t(this.title);
		},

		t_Item() {
			if (this.item.length === 0) {
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
</style>
