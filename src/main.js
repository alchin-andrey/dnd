import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from "@/components/ui";

import myTranslation from "@/plagins/myTranslation.js";


import races from "@/assets/catalog/base_data/races.js";



const app = createApp(App);
app.use(store);
app.use(router);
app.use(myTranslation);

components.forEach(component => {
    app.component(component.name, component);
});

app.mount('#app');
