<template>
		<div class="flex-col gap-16">
			<div class="int-600-28">dndme.club</div>
			<div class="w-584">{{ link_Description }}</div>
			<section class="gap-24 mr-t-36" :class="style_Qr">
				<qrcode-vue :value="donate_qr" :size="size_qr" level="L" />
				<div>
					<div class="int-600-28">{{ T('lobby_support_project') }}</div>
					<div class="w-364">{{ T('support_project_link') }}</div>
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
  },
	data() {
    return {
      donate_qr: 'send.monobank.ua/jar/F8Yfa61mr',
      size_qr: 120,
    };
  },
	computed: {
		link_Description() {
			return this.t("link_description");
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
	width: 364px;
}
.w-584 {
	width: 584px;
}
</style>
