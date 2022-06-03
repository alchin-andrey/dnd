import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MySelection from "@/components/ui/MySelection.vue";
import MyController from "@/components/ui/MyController.vue";
import MySlider from "@/components/ui/MySlider.vue";
import MyButton from "@/components/ui/MyButton.vue";
import MyButtonBack from "@/components/ui/MyButtonBack.vue";
import MyButtonGender from "@/components/ui/MyButtonGender.vue";
import MyAttribute from "@/components/ui/MyAttribute.vue";
import MyInventory from "@/components/ui/MyInventory.vue";
import MyFines from "@/components/ui/MyFines.vue";
import MySelectionBox from "@/components/ui/MySelectionBox.vue";
import MySelectionCard from "@/components/ui/MySelectionCard.vue";
import MyCardText from "@/components/ui/MyCardText.vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.component('MySelection', MySelection);
app.component('MyController', MyController);
app.component('MySlider', MySlider);
app.component('MyButton', MyButton);
app.component('MyButtonBack', MyButtonBack);
app.component('MyButtonGender', MyButtonGender);
app.component('MyAttribute', MyAttribute);
app.component('MyInventory', MyInventory);
app.component('MyFines', MyFines);
app.component('MySelectionBox', MySelectionBox);
app.component('MySelectionCard', MySelectionCard);
app.component('MyCardText', MyCardText);
app.mount('#app');