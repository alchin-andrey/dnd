<template>
	<div class="mg-18">
		<div class="numb jbm-300">
			<div>{{ numb }}</div>
		</div>
		<div class="name jbm-300">
			<div>{{ t_Title }}</div>
		</div>
  <main class="flex-row-sb-c gap-4 mr-top-4">
    <section class="wrap-input">
        <input
          size="1"
          @keyup="getName()"
          spellcheck="false"
          class="int-700-20"
          :class="{ liner: inputValue !== '' }"
          v-model="inputValue"
          type="text"
          maxlength="20"
          :placeholder="t_Placeholder"
        />
    </section>
    <section class="main_icon" @click="getRandomName()">
      <svg
        class="main_svg"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
        v-html="ui_icon.return"
      ></svg>
    </section>
  </main>
	</div>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useGenderStore } from "@/stores/modules/simple/GenderStore";
// import { usePagesStore } from "@/stores/user/PagesStore";
// import { useMainStore } from "@/stores/general/MainStore";

export default {
	name: "AppName",
  data() {
		return {
			ui_icon: ui_icon,
		};
	},
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

		t_Title() {
			return this.t(this.title);
		},

    t_Placeholder() {
			return this.t("name_placeholder");
		},
	},
	methods: {
    ...mapActions(useGenderStore, ["getRandomName"]),

		getName() {
			this.MY.name = this.inputValue;
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
.mg-18 {
	margin-bottom: 18px;
	display: grid;
}
.numb {
	height: 18px;
}

.name {
	height: 18px;
	margin-top: 36px;
}

.mr-top-4 {
	margin-top: 4px;
}

.wrap-input {
  width: 100%;
}

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
.main_icon {
	width: 18px;
	height: 18px;
	fill: white;
  cursor: pointer;
}

.main_svg {
	width: 18px;
	height: 18px;
	fill: white;
}
</style>
