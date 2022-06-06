<template>
<div class="int-400">
            <h3 class="title">{{ title }}</h3>
            <p class="text">
              {{ text }}
              <br v-if="rare" />
              <br v-if="rare" />
              <span v-if="rare">{{ rare }}</span>
            </p>
          </div>
</template>

<script>
export default {
  name: "MyCardText",
  props: {
    title: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    rare: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 4px;
}


.title:first-letter {
  text-transform: uppercase;
}



.text {
  color: rgba(255, 255, 255, 0.4);
  text-align: start;

}

.text:first-letter {
  text-transform: uppercase;
}

.text span {
  color: #ffc93d;
  margin-top: 20px;
}

.text span:first-letter {
  text-transform: uppercase;
}

</style>