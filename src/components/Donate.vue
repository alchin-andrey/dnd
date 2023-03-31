<template>
	<div class="grid gap-26">
		<div class="story-dev int-400" v-html="t_Html"></div>
		<div class="grid gap-26 int-700">
			<section class="grid gap-4">
				<my-selection-card
					@click="doCopy(uan_numb), copiedLink('uan_copied')"
					copy
					:copied="uan_copied"
				>
					<div class="text">{{ `UAH  ${uan_text}` }}</div>
				</my-selection-card>

				<my-selection-card
					@click="doCopy(btc_numb), copiedLink('btc_copied')"
					copy
					:copied="btc_copied"
				>
					<div class="text" :class="{'text-finish': finish}">
						{{ `BTC  ${btc_numb}` }}
					</div>
				</my-selection-card>

				<my-selection-card link>
					<a
						class="link-pad"
						target="_blank"
						href="https://www.patreon.com/dndme"
					>
						Patreon ↗
					</a>
				</my-selection-card>
			</section>

			<section class="grid gap-4" v-if="finish">
				<!-- <my-selection-card
					@click="doCopy(char_numb), copiedLink('char_copied')"
					copy
					:copied="char_copied"
				>
					<div class="text">{{ t_Copy }}</div>
				</my-selection-card> -->
				<my-selection-card download @click="btnClick()">
					<div class="text" >
						{{ t_Pdf }} 
            <!-- <span class="soon-class">({{ t_Soon }})</span> -->
					</div>
				</my-selection-card>
			</section>
		</div>
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
		t_Card() {
			return this.t("donation_card");
		},
		t_Btc() {
			return this.t("donation_btc");
		},
		t_Html() {
			return this.t("authors");
		},

		t_Copy() {
			return this.t("copy_link_character");
		},

		t_Pdf() {
			return this.t("download_pdf");
		},

		t_Soon() {
			return this.t("coming_soon");
		},
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
	overflow: hidden; /* Обрезаем всё за пределами блока */
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
