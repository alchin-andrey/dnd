import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import components from "@/components/ui";
import directives from "@/directives";
import VueClipboard from "vue3-clipboard";

import myTranslation from "@/plagins/myTranslation.js";
import EmojiChenge from "@/plagins/EmojiChenge.js";
import { createPinia } from 'pinia';

// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'



const pinia = createPinia();
// pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);

app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
});
app.use(myTranslation);
app.use(EmojiChenge);
app.use(router);

components.forEach(component => {
    app.component(component.name, component);
});

directives.forEach(directive => {
    app.directive(directive.name, directive);
});

app.mount('#app');


