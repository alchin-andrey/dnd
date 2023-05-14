<template>
	<div
		class="wrapp-head jbm-300"
		:class="{
			'card-active': active,
			'card-hover': !active,
		}"
	>
		<slot class="flex-row-c" />
	</div>
</template>

<script>
export default {
	name: "AppHeaderCard",
	props: {
		active: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style scoped>
.wrapp-head {
	padding: 0 12px 0 12px;
	height: 100%;
	background: rgba(255, 255, 255, 0.06);
	backdrop-filter: blur(60px);
	-webkit-backdrop-filter: blur(60px);
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	gap: 5px;
	text-transform: uppercase;
}

@media (max-width: 1279px) {
	.wrapp-head {
		padding: 0 16px 0 16px;
		min-width: 50px;
	}
}

.card-hover:hover {
	background: rgba(255, 255, 255, 0.1);
	color: #ffffff;
}

.card-active {
	background: #ffffff;
	color: #0e1518;
}
</style>
