<template>
	<div class="flex-col int-600-72">
    <textarea v-model="description" placeholder="Введіть опис зображення..."></textarea>
    <button class="button-gpt" @click="generateImage()">Згенерувати зображення</button>
    <img class="size" v-if="imageUrl" :src="imageUrl" alt="Згенероване зображення">
  </div>
</template>

<script>
export default {
	name: "AppGpt",
	data() {
    return {
      description: '',
      imageUrl: ''
    };
  },

	methods: {

    async generateImage() {
      const API_URL = "https://api.openai.com/v1/dalle-3/generate";
      const API_KEY = "API";

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompts: [this.description],
            size: "1024x1024"
          })
        });

        const data = await response.json();
        this.imageUrl = data.data[0];

      } catch (error) {
        console.error("Помилка при генерації зображення:", error);
      }
    }
  }

};
</script>

<style scoped>
.button-gpt {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.size {
	width: 500px;
	height: 500px;
}
</style>
