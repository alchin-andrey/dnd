import ua_dic from './ua/_dic.js';
import ua_inrium_dic from './ua_inrium/_dic.js';
import ru_dic from './ru/_dic.js';
import en_dic from './en/_dic.js';


export default {

    ua: ua_dic,
    ua_inrium: ua_inrium_dic,
    ru: ru_dic,
    en: en_dic,

    lang: [
        {
            mark: "ua",
            icon: ["🇺🇦"],
            name: "Українська — Чіллаут",
        },
        {
            mark: "ua_inrium",
            icon: ["🔱"],
            name: "Українська — 5esrd.kyiv.ua з доповненями",
        },
        // {
        //     mark: "ru",
        //     icon: ["🇷🇺", "🛳️", "🖕"],
        //     name: "русский",
        // },
        // {
        //     mark: "en",
        //     icon: ["🇬🇧"],
        //     name: "English",
        // },
    ],
};
