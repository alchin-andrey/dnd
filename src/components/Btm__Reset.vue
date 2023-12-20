<template>
  <div>
    <div @click="showDialog()">
      <div class="btm-grey br-12 blur-60 hov cur-p flex-row-c-jc h-47" v-if="short">
        <AppSvg class="svg-18" name="delete" />
      </div>
      <AppBtm class="btm-red" icon="return" name="start_over" v-else/>

    </div>
    <AppMainDialog v-model:show="dialogVisible" >
      <div class="int-700-20" v-html="t_Title" />
      <WelcomPage__UserChar no_wrapp/>
      <section class="dialog-size">
        <div class="grid-body">
          <AppBtm class="btm-red" icon="close" name="delete" @click="resetState()"/>
          <AppBtm class="btm-white-dlack" icon="check" name="relinquish" @click="showDialog()"/>
        </div>
      </section>
    </AppMainDialog>
  </div>
</template>

<script>
import WelcomPage__UserChar from "@/components/welcom_page/WelcomPage__UserChar.vue";

import { mapWritableState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useFormStore } from "@/stores/modules/simple/FormStore";
import { useMainStore } from "@/stores/general/MainStore";
export default {
  name: "Btm__Reset",
  components: {
		WelcomPage__UserChar,
	},
  data() {
    return {
      dialogVisible: false,
    };
  },
  props: {
		short: {
      type: Boolean,
      default: false,
    },
	},
  computed: {
    ...mapWritableState(useMYStore, ["MY", "MY_def"]),
    ...mapWritableState(usePagesStore, [
      "site_settings", 
      'pages', 
      "new_user"
    ]),
    ...mapWritableState(useFormStore, ["form_kof"]),
    ...mapWritableState(useMainStore, ["srd"]),

    t_Title() {
      return this.T('delete_character')
    },
  },

  methods: {
    ...mapActions(useMYStore, ["getCreated"]),
    ...mapActions(usePagesStore, ["showHome", "goToChar"]),

    showDialog() {
      this.dialogVisible = !this.dialogVisible;
    },

    resetState() {
      this.showDialog();
      this.MY = JSON.parse(JSON.stringify(this.MY_def));
      this.form_kof = {
        height: 0.5,
        weight: 0.5,
        age: 0.5,
      };
      this.srd = true,

      this.new_user = true,

      this.site_settings = {
        save: {},
        visit_page: {
          class_page: false,
          alignment_page: false,
        },
        welcome: true,
        logo_anim: false,
        print_dialog: false,
      },

        this.pages = {
          race_page: true,
          class_page: false,
          alignment_page: false,
        };
      this.getCreated();
      this.showHome();
    },

  }
};
</script>


<style scoped>
.h-47 {
	height: 47px;
}

.dialog-size {
  width: 380px;
}

.grid-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
}

@media (max-width: 955px) {
	.dialog-size {
		width: 330px;
	}
}

</style>
