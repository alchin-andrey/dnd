<template>
	<div class="mr-b-18 h-100">
	<div class="jbm-300 mr-b-36" v-if="screen_Max">{{ numb }}</div>
  <main class="flex-row gap-14">
		<div class="stripe-item--slider" v-if="!screen_Max" />
    <div class="flex-row-end-sb gap-4 w-100">
			<section class="w-100">
					<div class="jbm-300">{{ t_Title }}</div>
					<input
						size="1"
						@keyup="getName()"
						spellcheck="false"
						class="int-700-20 mr-t-4"
						:class="{ liner: inputValue !== '' }"
						v-model="inputValue"
						type="text"
						maxlength="20"
						:placeholder="t_Placeholder"
					/>
			</section>
			<section class="main-icon" @click="randomName()">
				<AppSvg class="svg-18 svg-main-f" name="return"/>
			</section>
		</div>
  </main>
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useGenderStore } from "@/stores/modules/simple/GenderStore";
import { usePagesStore } from "@/stores/user/PagesStore";

export default {
	name: "AppName",
	props: {
		modelValue: {
			type: String,
			default: null,
		},
		numb: {
			type: String,
			default: null,
		},
		title: {
			type: String,
			default: null,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["screen_Max"]),

		t_Title() {
			return this.t(this.title);
		},

    t_Placeholder() {
			return this.t("name_placeholder");
		},
	},
	methods: {
    ...mapActions(useGenderStore, ["getRandomName"]),

		randomName() {
			this.getRandomName();
			this.site_settings.name_user = true;
		},

		getName() {
			this.MY.name = this.inputValue;
			this.site_settings.name_user = true;
		},
	},
	watch: {
		modelValue: {
			handler() {
				this.inputValue = this.modelValue;
			},
			immediate: true,
		},
		inputValue: {
			handler() {
				this.$emit("update:modelValue", this.inputValue);
			},
		},
	},
};
</script>

<style scoped>
.liner {
	text-decoration-line: underline;
	text-decoration-color: #ffffff;
}

input[type="text"] {
	border-radius: 0;
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	-khtml-border-radius: 0;
	background: #0e1518 !important;
	outline: none;
  color: #ffffff;
	width: 100%;
  white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

::placeholder {
	color: #ffc93d;
	opacity: 1;
}

:-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.2);
}

::-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.2);
}
.main-icon {
	width: 18px;
	height: 18px;
  cursor: pointer;
	margin-bottom: 3px;
}

@media (max-width: 1279px) {
	.main-icon {
		margin-bottom: 0;
		height: 48px;
		min-width: 48px;
		background: rgba(255, 255, 255, 0.06);
		border-radius: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
