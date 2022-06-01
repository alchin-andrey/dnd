import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MySelection from "@/components/ui/MySelection.vue";
import MyController from "@/components/ui/MyController.vue";
import MySlider from "@/components/ui/MySlider.vue";
import MyButton from "@/components/ui/MyButton.vue";
import MyButtonBack from "@/components/ui/MyButtonBack.vue";
import MyAttribute from "@/components/ui/MyAttribute.vue";
import MyInventory from "@/components/ui/MyInventory.vue";
import MyFines from "@/components/ui/MyFines.vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.component('MySelection', MySelection);
app.component('MyController', MyController);
app.component('MySlider', MySlider);
app.component('MyButton', MyButton);
app.component('MyButtonBack', MyButtonBack);
app.component('MyAttribute', MyAttribute);
app.component('MyInventory', MyInventory);
app.component('MyFines', MyFines);
app.mount('#app');