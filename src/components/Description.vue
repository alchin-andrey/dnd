<template>
  <div class="marg">
  <Welcome />

  <div class="flex">
    <div class="story int-400" v-html="t_Html"></div>

    <my-selection-card passive>
      <my-card-text title="donation_card" />
    </my-selection-card>

    <my-selection-card passive>
      <my-card-text title="donation_btc" />
    </my-selection-card>

    <my-selection-card passive>
      <my-card-text title_html="donation_patreon" />
    </my-selection-card>
  </div>
</div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  components: { Welcome },
  name: "Description",

  computed: {
    t_Html() {
      return this.t("authors");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .title {
  height: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 26px;
}

.title:first-letter {
  text-transform: uppercase;
}

.text {
  color: rgba(255, 255, 255, 0.4);
  text-align: start;
  white-space: pre-line;
}

.text:first-letter,
.text_html:first-letter {
  text-transform: uppercase;
}

.text_html {
  color: rgba(255, 255, 255, 0.2);
  
} */

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