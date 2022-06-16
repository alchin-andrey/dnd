import * as races from './races.js';
import * as spells from './spells.js';
import { langs } from './languages.js';

export default {

    //Общее        
    
            name:"имя",

            race:"раса",
            ethnos:"этнос",
            class:"класс",
            subclass:"специализация",
            past:"предистория",
            level:"уровень",

    //Stats

            stats:"характеристики",

            strength:"сила",
            strength_base:"базовая",

            dexterity:"ловкость",
            dexterity_base:"базовая",

            constitution:"телосложение",
            constitution_base:"базовое",

            intelligence:"интеллект",
            intelligence_base:"базовый",  
            
            wisdom:"мудрость",
            wisdom_base:"базовая",

            charisma:"харизма",
            charisma_base:"базовая",


    //Genders

            gender:"гендер",
                phisiological: "физиологический",
                    male: "мужчина",
                    male_details: "ваш персонаж обладает исключительно мужскими половыми признаками.",
                    intersex: "интерсекс",
                    intersex_details: "ваш персонаж обладает как мужскими, так и женскими половыми признаками. а возможно и еще какими-то.",
                    female: "женщина",
                    female_details: "ваш персонаж обладает исключительно женскими половыми признаками.",
                    demiboy: "демимальчик",
                    demiboy_details: "мужские половые признаки преобладают в вашем персонаже, но присутствуют и другие.",
                    demigirl: "демидевочка",
                    demigirl_details: "женские половые признаки преобладают в вашем персонаже, но присутствуют и другие.",
                    neutral_gender: "бесполое",
                    neutral_gender_details: "у вашего персонажа нет признаков, которые можно было бы назвать присущими какому-то полу.",
                    unstable: "нестабильный пол",
                    unstable_details: "пол вашего персонажа может меняться.",
                    other_gender: "другой пол",
                    other_gender_details: "ваш персонаж обладает признаками пола, отличного от мужского или женского.",
                feel:"самоощущение",
                    pangender:"пангендер",
                    pangender_details: "ваш персонаж ощущает себя носителем всех гендеров сразу.",
                    undecided:"неопределенный",
                    undecided_details: "ваш персонаж не определился, каким гендером он себя ощущает.",
                    gender_fluid:"флюид",
                    gender_fluid_details: "ощущение гендера вашего персонажа может меняться.",
                    androgin:"андрогин",
                    androgin_details: "ваш персонаж ощущает себя чем-то средним между своим физиологическим и другим гендером",
                    cisgender:"цисгендер",
                    cisgender_details: "cамоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
                    transsexual:"транссексуал",
                    transsexual_details: "cамоощущение вашего персонажа отличается от физиологического гендера, и он стремится привести физиологический пол в соответствие своему ощущению.",
                    demigender:"демигендер",
                    demigender_details: "cамоощущение вашего персонажа соответствует его физиологическому гендеру, но не полностью.",
                    queer:"квир",
                    queer_details: "ощущение гендера вашего персонажа соответствует его физиологическому гендеру, но не соответствует набору признаков єтого гендера.",
                    bigender: "бигендер",
                    bigender_details: "гендер, которым ощущает себя ваш персонаж, объединяет в себе признаки его физиологического пола, а так же противоположного.",
                look: "внешний вид",
                    as_phisiological: "соответствует физиологическому полу",
                    as_feel: "соответствует самоощущению",
                    as_other_gender: "другое",
                    as_other_gender_details: "Это очень интересно! обязательно расскажите об этом в деталях при заполнении Предистории вашего персонажа.",
                attraction: "влечение",
        
    //Предистория
            faith:"вера",
            alignment:"мировоззрение",
            personality:"характер",
            ideals:"приоритеты",
            bonds:"привязанности",
            flaws:"слабости",
            appearance:"внешность",
            story:"прошлое",

            age:"возраст",
            maturity:"зрелость",
                year: "год",
                years: "лет",
                yeara: "года",
                baby: "ребенок",
                young: "молодой",
                mature: "взрослый",
                old: "пожилой",
                oldest: "престарелый",


            weight:"вес",
                kg: "кг",
                skinny: "худощавый",
                fat: "полный",

            height:"рост",
                cm: "см",

            size:"размер",

                size_small:"маленький",
                size_medium:"средний",
                size_big:"большой",

            HP_max:"max HP",
            HP_dice:"кости хитов",

            proficiency:"мастерство",
            initiative:"инициатива",
            armor_class:"броня",

            speed:"скорость",
            vision_day:"зрение",
            vision_night:"темное зрение",

            skills:"навыки",
                
                acrobatics:"акробатика",
                animal_hanging:"уход за животными",
                arcana:"магия",
                athletics:"атлетика",
                deception:"обман",
                history:"история",
                insight:"проницательность",
                intimidation:"запугивание",
                investigation:"анализ",
                medicine:"медицина",
                nature:"природа",
                perception:"внимательность",
                performance:"выступление",
                persuasion:"убеждение",
                religion:"религия",
                sleight_of_hand:"ловкость рук",
                stealth:"скрытность",
                survival:"выживание",
            
            proficiencies:"владения",

                armor:"доспехи",
                weapons:"оружие",
                tools:"инструменты",
                languages:"языки",
                
                    lang_common: langs.common,
                    lang_common_details: langs.common_details,

                    lang_halfling: langs.halfling,
                    lang_halfling_details: langs.halfling_details,

                    lang_gnome: langs.gnome,
                    lang_gnome_details: langs.gnome_details,

                    lang_dwarf: langs.dwarf,
                    lang_dwarf_details: langs.dwarf_details,

                    lang_tiefling: langs.tiefling,
                    lang_tiefling_details: langs.tiefling_details,

                    lang_elf: langs.elf,
                    lang_elf_details: langs.elf_details,

                    lang_orc: langs.orc,
                    lang_orc_details: langs.orc_details,

                    lang_dragon: langs.dragon,
                    lang_dragon_details: langs.dragon_details,

                    lang_giant: langs.giant,
                    lang_giant_details: langs.giant_details,

                    lang_goblin: langs.goblin,
                    lang_goblin_details: langs.goblin_details,

                    lang_undercommon: langs.undercommon,
                    lang_undercommon_details: langs.undercommon_details,

                    lang_sylvan: langs.sylvan,
                    lang_sylvan_details: langs.sylvan_details,

                    lang_animal: langs.animal,
                    lang_animal_details: langs.animal_details,

                    lang_druid: langs.druid,
                    lang_druid_details: langs.druid_details,

                    lang_primordial: langs.primordial,
                    lang_primordial_details: langs.primordial_details,

                    lang_sky: langs.sky,
                    lang_sky_details: langs.sky_details,

                    lang_demonic: langs.demonic,
                    lang_demonic_details: langs.demonic_details,

                    lang_thieves: langs.thieves,
                    lang_thieves_details: langs.thieves_details,

            //Особенности - пассивньіе умения
            fines:"особенности",

                //Ключевые слова
                advantage:"преимущество",
                rethrow:"переброс",
                resistance:"сопротивление",
                telepathy:"телепатия",
                proficiency_bonus:"2× Мастерства",
                slippage: "проскальзывание",
                disadvantage: "уязвимость",

                any_dice_1:"любого кубика при “1”",
                behind_bigger_than_mid:"за существом выше среднего",
                among_bigger_than_mid:"среди существ выше среднего",
                fear_against:"против 😱 Испуга",
                poison_against:"против 🧪 Яда",
                poison_damage:"урону 🧪 Ядом",
                known_languages:"на известных языках",
                fire_against:"против 🔥 Огня",
                history_check_rock_gnome:"к проверке Истории к магическому, алхимическому или технологическому предмету",

            //Умения - активньіе умения без урона
            abilities:"умения",

            //Заклинания - активньіе умения с уроном
            spells:"заклинания",

            inventory:"снаряжение",
            
                shield:"щит",

            wallet:"кошель",
                
                tripple_platina:"триждыплатиновых",
                platina:"серебрянных",
                gold:"золотых",
                silver:"серебрянных",
                copper:"медных",


    //Ethnos
            
            common:"обычный",

    //Races
            
            //Halfling
            
            halfling:"полурослик",                   
            halfling_details: races.halfling,

            stout:"коренастый",
            stout_halfling_details: races.stout_halfling,

            lightfoot:"легконогий",
            lightfoot_halfling_details: races.lightfoot_halfling,
            
            ghost:"призрачный",
            ghost_halfling_details: races.ghost_halfling,

            rare:"редкий этнос",        
            rare_details:races.rare,

            //Gnome

            gnome:"гном",
            gnome_details: races.gnome,

            rock:"скальный",
            rock_gnome_details: races.rock_gnome,

            deep:"глубинный",
            deep_gnome_details: races.deep_gnome,

            forest:"лесной",
            forest_gnome_details: races.forest_gnome,


            //Human
            
            human:"человек",

            //Halfelf
            
            halfelf:"полуэльф",

            //Tiefling
            
            tiefling:"тифлинг",

    //Colors

            color:"цвет",
            color_skin: "цвет кожи",
            color_eyes: "цвет глаз",
            color_hair: "цвет волос",

            characteristic: "характерный",
            not_characteristic: "нехарактерный",
            for_race: "для этой расы",
            for_ethnos: "для этого этноса",
            
            White: "белый",
            Smoke: "дымчатый",
            Steel: "стальной",
            Grey: "серый",
            Ash: "пепельный",
            Iron: "железный",
            Black: "черный",

            Blush: "румяный",
            Reddish: "красноватый",
            Red: "красный",
            Bright_Red: "ярко-красный",
            Ruby: "рубиновый",
            Blood: "кровавый",
            Maroon: "багряный",

            Pale: "светлый",
            Sand: "песочный",
            Peach: "персиковый",
            Orange: "оранжевый",
            Hazel: "ореховый",
            Bronze: "бронзовый",
            Brown: "коричевый",

            Ivory: "слоновой кости",
            Straw: "соломы",
            Dandelion: "одуванчиковый",
            Yellow: "желтый",
            Sulfur: "серный",
            Golden: "золотой",
            Olive: "оливковый",
            Tea: "чайный",
            Pistachio: "фисташковый",
            Apple: "яблочный",
            Acid: "кислотный",
            Avocado: "авокадовый",
            Grass: "травяной",
            Swamp: "болотный",
            Greenish: "зеленоватый",
            Light_Green: "светло-зеленый",
            Green: "зеленый",
            Bright_Green: "ярко-зеленый",
            Lime: "лаймовый",
            Foliage: "листвы",
            Emerald: "изумрудный",
            Aquamarine: "аквамарин",
            Eucalyptus: "эвкалиптовый",
            Menthol: "ментоловый",
            Seafoam: "морской пены",
            Jade: "нефритовый",
            Mint: "мятный",
            Pine: "еловый",
            Pearl: "жемчужный",
            Ice: "ледяной",
            Lightning: "молниевый",
            Cyan: "голубой",
            Turquoise: "бирюзовый",
            Teal: "чирок",
            Malachite: "малахитовый",
            Silver: "серебряный",
            Sky: "небесный",
            Topaz: "топазовый",
            Azure: "лазурный",
            Cobalt: "кобальтовый",
            Lazulite: "лазулитовый",
            Blueberry: "черничный",
            Mauve: "лиловый",
            Lavender: "лавандовый",
            Cornflower: "васильковый",
            Ultramarine: "ультрамарин",
            Blue: "синий",
            Sapphire: "сапфировый",
            Night: "ночной",
            Thistle: "Чертополоховый",
            Wisteria: "глициниевый",
            Lilac: "сиреневый",
            Purple: "пурпурный",
            Violet: "фиолетовый",
            Amethyst: "аметистовый",
            Indigo: "индиго",
            Pinkish: "розоватый",
            Heliotrope: "гелиотроп",
            Pink: "розовый",
            Magenta: "маджента",
            Fuchsia: "фуксия",
            Orchid: "орхидеевый",
            Plum: "сливовый",
            Beige: "бежевый",
            Bubblegum: "баблгам",
            Watermelon: "арбузный",
            Carmine: "кармин",
            Raspberry: "малиновый",
            Cerise: "вишневый",
            Burgundy: "бордовый",

    //spells

            //schools
            cantrip:"заговор",
            evocation:"воплощение",

            //components
            verbal:"вербальный",
            somatic:"соматический",
            
            thaumaturgy: spells.thaumaturgy,
            thaumaturgy_details: spells.thaumaturgy_details,

            hellish_rebuke: spells.hellish_rebuke,
            hellish_rebuke_details: spells.hellish_rebuke_details,

            darkness: spells.darkness,
            darkness_details: spells.darkness_details,

            spell_toy: spells.toy,
            spell_toy_details: spells.toy_details

}