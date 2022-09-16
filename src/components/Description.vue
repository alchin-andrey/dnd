<template>
  <div class="marg">
    <Welcome />

    <div class="flex">
      <div class="story int-400" v-html="t_Html"></div>

      <my-selection-card passive>
        <my-card-text
          class="cursor"
          @click="doCopy(t_Card)"
          title="donation_card"
        />
      </my-selection-card>

      <my-selection-card passive>
        <my-card-text
          class="cursor"
          @click="doCopy(t_Btc)"
          title="donation_btc"
        />
      </my-selection-card>

      <my-selection-card passive>
        <my-card-text title_html="donation_patreon" />
      </my-selection-card>
    </div>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import { copyText } from "vue3-clipboard";

export default {
  components: { Welcome },
  name: "Description",

  setup() {
    const doCopy = (name) => {
      copyText(name, undefined, (error, event) => {
        if (error) {
          alert("Can not copy");
          console.log(error);
        } else {
          alert("Copied: " + name);
          console.log(event, name);
        }
      });
    };
    return { doCopy };
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.flex {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.story {
  color: rgba(255, 255, 255, 0.4);
  text-align: start;
  margin-bottom: 22px;
}
</style>