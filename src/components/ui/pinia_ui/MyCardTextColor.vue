<template>
	<div class="int-400">
		<h3 class="title">{{ t_Title }}</h3>
		<p
			class="text"
			:class="{
				ethnos: ethnos_color,
				race: race_color && !ethnos_color,
			}"
		>
			{{ t_Text }}
		</p>
	</div>
</template>

<script>
export default {
	name: "MyCardTextColor",
	props: {
		title: {
			type: String,
			default: null,
		},
		ethnos_color: {
			type: Boolean,
			default: false,
		},
		race_color: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		t_Title() {
			return this.T(this.title);
		},
		t_Text() {
			if (this.ethnos_color) {
				return `${this.T("characteristic")} ${this.t("for_ethnos")}`;
			} else if (this.race_color) {
				return `${this.T("characteristic")} ${this.t("for_race")}`;
			} else {
				return `${this.T("not_characteristic")} ${this.t("for_race")}`;
			}
		},
	},
};
</script>

<style scoped>
.title {
	font-family: "Inter-700";
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
	margin-bottom: 4px;
}

.text {
	color: rgba(255, 255, 255, 0.4);
	text-align: start;
}

.ethnos {
	color: #05ff00;
}

.race {
	color: #ffffff;
}
</style>
