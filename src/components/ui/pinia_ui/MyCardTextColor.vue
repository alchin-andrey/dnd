<template>
	<div>
		<h3 class="int-700 main-text">{{ t_Title }}</h3>
		<p
			class="int-400 white-04 mr-t-4"
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

.ethnos {
	color: #05ff00;
}

.race {
	color: #ffffff;
}
</style>
