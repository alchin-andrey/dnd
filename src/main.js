import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from "@/components/ui";

import myTranslation from "@/plagins/myTranslation.js";

import genders from "@/assets/catalog/base_data/genders.js";





// function getDefault (path, clear, add) {

//     }



const app = createApp(App);
app.use(store);
app.use(router);
app.use(myTranslation);
app.config.globalProperties.$http = () => {genders}
components.forEach(component => {
    app.component(component.name, component);
});

app.mount('#app');
