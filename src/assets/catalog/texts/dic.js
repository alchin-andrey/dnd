import ua_dic from './ua/_dic.js';
import en_dic from './en/_dic.js';
import ru_dic from './ru/_dic.js';


export default {

    ua: ua_dic,
    ua_icon: "🇺🇦",
    ua_name: "Українська",

    en: en_dic,
    en_icon: "🇬🇧",
    en_name: "English",

    ru: ru_dic,
    ru_icon: "🇷🇺 🛳 🖕",
    ru_name: "русский",
    
    lang: [
        {
            mark: "ua",
            icon: "🇺🇦",
            name: "Українська",
        },
        {
            mark: "en",
            icon: "🇬🇧",
            name: "English",
        },
        {
            mark: "ru",
            icon: "🇷🇺 🛳 🖕",
            name: "русский",
        },
    ],

    select_lang: "ua",
}