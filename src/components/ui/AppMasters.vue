<template>
	<AppWrapper gap="26" class="int-400" hr>
    <section class="foto-master">
      <img :src="master_Foto" :alt="master_param.name"/>
    </section>
    
    <section class="flex_col gap-4">
      <div class="int-700">{{ t_Name }}</div>
      <div class="white-04" v-html="t_Details"></div>
    </section>

    <section class="flex_col gap-4 white-04">
      <div><span>{{ t_City }}</span> <span>{{ t_Master_City }}</span></div>
      <div><span>{{ t_Format }}</span> <span>{{ t_Master_Format }}</span></div>
      <div><span>{{ t_Telegram }}</span> <span v-html="t_Master_Telegram"/></div>
    </section>
	</AppWrapper>
</template>

<script>
export default {
	name: "AppMasters",
	props: {
    master_param: {
			type: Object,
			default: null,
		},
	},
	computed: {

    joinArr: (stor) => (arr) => {
      return arr.map((n) => `${stor.T(n)[0].toUpperCase()}${stor.T(n).slice(1)}`).join(", ");
    },

    t_Name() {
      return this.t(this.master_param.name);
    },

    t_Details() {
      return this.t(this.master_param.details);
    },

    t_Master_City() {
      return this.joinArr(this.master_param.city);
    },

    t_Master_Format() {
      return this.joinArr(this.master_param.format);
    },

    t_Master_Telegram() {
      return this.t(this.master_param.telegram);
    },

    master_Foto() {
      const name = this.master_param.name;
      return require(`@/assets/img/masters/${name}.avif`);
    },

    t_City() {
      return this.t("city") + ":";
    },

    t_Format() {
      return this.t("format") + ":";
    },

    t_Telegram() {
      return this.t("telegram") + ":";
    },

	},
};
</script>

<style scoped>
.flex_col {
	display: flex;
  flex-direction: column;
}

.gap-4 {
  gap: 4px;
}

.gap-26 {
  gap: 26px;
}

.foto-master > img {
  border-radius: 4px;
  width: 100%;
}
</style>
