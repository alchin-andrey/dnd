import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import components from "@/components/ui";
import directives from "@/directives";
import VueClipboard from "vue3-clipboard";

import myTranslation from "@/plagins/myTranslation.js";
import EmojiChenge from "@/plagins/EmojiChenge.js";
import { createPinia } from 'pinia'

// import genders from "@/assets/catalog/base_data/genders.js";


const pinia = createPinia();
// const app = createApp(App).use(createPinia());
const app = createApp(App);

app.use(pinia);

app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
});
app.use(myTranslation);
app.use(EmojiChenge);
app.use(store);
app.use(router);
// app.use(myTranslation);
// app.use(EmojiChenge);

components.forEach(component => {
    app.component(component.name, component);
});

directives.forEach(directive => {
    app.directive(directive.name, directive);
});

app.mount('#app');


