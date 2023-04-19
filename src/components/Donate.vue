<template>
	<div class="grid gap-26">
		<div class="int-700-20" v-html="t_Title" />

		<section class="grid gap-15 int-400">
		<div class="white-04" v-html="t_Authors" />
		<div v-html="t_Thanks" />
		<div class="rare-text" v-html="t_Benefaction" />
		</section>

		<section class="grid gap-4 int-700">
			<my-selection-card link white_btn>
				<a 
				class="link-pad color-blue" 
				target="_blank" 
				href="https://www.buymeacoffee.com/dndme/membership"
				>{{ t_Donat }}</a>
			</my-selection-card>

			<AppLoadBtm v-if="finish" @click="btnClick()" :text="t_Pdf" :progress="progress" />
		</section>
	</div>
</template>

<script>
import { copyText } from "vue3-clipboard";
export default {
	name: "Donate",
	emits: ["getPdf"],
	props: {
		finish: {
			type: Boolean,
			default: false,
		},
		progress: {
			type: Number,
			default: 100,
		},
	},
	data() {
		return {
			uan: "UAH",
			uan_text: "5375 4112 0415 1513",
			uan_numb: 5375411204151513,
			uan_copied: false,
			btc_numb: "1LnEyvMisSyUvdbJQUmAyaiHEeALQd793F",
			btc_copied: false,
			char_numb: "скоро 😘",
			char_copied: false,
		};
	},

	setup() {
		const doCopy = (copied) => {
			copyText(copied, undefined, (error, event) => {
				if (error) {
					alert("Error");
					console.log(error);
				} else {
					console.log(event);
				}
			});
		};
		return { doCopy };
	},

	methods: {
		copiedLink(name) {
			this[name] = true;
			setTimeout(() => (this[name] = false), 2000);
		},

		btnClick() {
			this.$emit("getPdf");
		},
	},

	computed: {
		t_Title() {
			return this.t("support_project");
		},

		t_Authors() {
			return this.t("authors");
		},

		t_Thanks() {
			return this.t("thank_you");
		},

		t_Benefaction() {
			return this.t("benefaction");
		},

		t_Donat() {
			return this.T("view_benefits");
		},

		t_Pdf() {
			return this.t("download_pdf");
		},

		// t_Card() {
		// 	return this.t("donation_card");
		// },
		
		// t_Btc() {
		// 	return this.t("donation_btc");
		// },

		// t_Copy() {
		// 	return this.t("copy_link_character");
		// },


		// t_Soon() {
		// 	return this.t("coming_soon");
		// },

	},
};
</script>

<style scoped>
.cursor {
	cursor: pointer;
}

.marg {
	margin-left: 32px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.grid {
	display: grid;
}

.gap-4 {
	gap: 4px;
}

.gap-26 {
	gap: 26px;
}

.flex {
	display: flex;
}

.story-dev {
	color: rgba(255, 255, 255, 0.4);
	text-align: start;
	/* margin-bottom: 22px; */
}

.soon-class {
	color: #05ff00;
}

.text {
	width: 300px;
	white-space: pre;
	overflow: hidden;
	/* Обрезаем всё за пределами блока */
	text-overflow: ellipsis;
}

.text-finish {
	width: 320px;
}

.text:first-letter {
	text-transform: uppercase;
}

.link-pad {
	padding: 16px;
}
</style>
