import ua_dic from './ua/_dic.js';
import ru_dic from './ru/_dic.js';


export default {

    ua: ua_dic,
    ru: ru_dic,

    lang: [
        {
            mark: "ua",
            icon: ["🇺🇦"],
            name: "Українська",
        },
        {
            mark: "ru",
            icon: ["🇷🇺", "🛳️", "🖕"],
            name: "русский",
        },
    ],

    select_lang: "ua",
};
