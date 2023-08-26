<template>
		<div class="flex-col gap-16-blank">
			<div class="int-600-28-blank">dndme.club</div>
			<div class="w-584">{{ link_Description }}</div>
			<section class="gap-24-blank mr-t-36-blank" :class="style_Qr">
				<qrcode-vue :value="donate_qr" :size="qr_Size" level="L" />
				<div>
					<div class="int-600-28-blank line-size">{{ T('lobby_support_project') }}</div>
					<div class="mr-t-8-blank w-364">{{ T('support_project_link') }}</div>
				</div>
			</section>
		</div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
export default {
	name: "BlankText__Support",
	components: {
		QrcodeVue,
	},
	props: {
    qr_centre: {
      type: Boolean,
      default: false,
    },
		blank_size: {
			type: String,
			default: null,
		}
  },
	data() {
    return {
      donate_qr: 'send.monobank.ua/jar/F8Yfa61mr',
    };
  },
	computed: {
		link_Description() {
			return this.t("link_description");
		},

		qr_Size() {
			if(this.blank_size == 'mini') return 20;
			else return 120;
		},

		style_Qr() {
			if(this.qr_centre) return 'flex-row-jc';
			else return 'flex-row';
		}
	},
};
</script>

<style scoped>
.w-364 {
	width: var(--px-364);
}
.w-584 {
	width: var(--px-584);
}

.line-size {
	line-height: var(--px-28);
}
</style>
