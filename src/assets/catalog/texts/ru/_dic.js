import * as races from './races.js';
import * as spells from './spells.js';
import { langs } from './languages.js';
import { weapons } from './weapons.js';
import { tools } from './tools.js';
import { armor } from './armor.js';

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
            strength_details: 
            'Атрибут физической мощи и выносливости. Базовое значение является вспомогательным для получения главного — Модификатора. От него зависит HP и навык:\n\n' +
            '• Атлетика',

            dexterity:"ловкость",
            dexterity_base:"базовая",
            dexterity_details: 
            'Атрибут координации, проворства, скорости реакции, рефлексов и чувства равновесия. Базовое значение является вспомогательным для получения главного — Модификатора. От него зависят навыки:\n\n' +
            '• Акробатика\n' +
            '• Ловкость рук\n' +
            '• Скрытность',

            constitution:"телосложение",
            constitution_base:"базовое",
            constitution_details: "—", // доработать

            intelligence:"интеллект",
            intelligence_base:"базовый",
            intelligence_details: "—", // доработать  
            
            wisdom:"мудрость",
            wisdom_base:"базовая",
            wisdom_details: "—", // доработать

            charisma:"харизма",
            charisma_base:"базовая",
            charisma_details: "—", // доработать


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
                acrobatics_details: "—", // доработать

                animal_hanging:"уход за животными",
                animal_hanging_details: "—", // доработать

                arcana:"магия",
                arcana_details: "—", // доработать

                athletics:"атлетика",
                athletics_details: "—", // доработать

                deception:"обман",
                deception_details: "—", // доработать

                history:"история",
                history_details: "—", // доработать

                insight:"проницательность",
                insight_details: "—", // доработать

                intimidation:"запугивание",
                intimidation_details: "—", // доработать

                investigation:"анализ",
                investigation_details: "—", // доработать

                medicine:"медицина",
                medicine_details: "—", // доработать

                nature:"природа",
                nature_details: "—", // доработать

                perception:"внимательность",
                perception_details: "—", // доработать

                performance:"выступление",
                performance_details: "—", // доработать

                persuasion:"убеждение",
                persuasion_details: "—", // доработать

                religion:"религия",
                religion_details: "—", // доработать

                sleight_of_hand:"ловкость рук",
                sleight_of_hand_details: "—", // доработать

                stealth:"скрытность",
                stealth_details: "—", // доработать

                survival:"выживание",
                survival_details: "—", // доработать
            
            proficiencies:"владения",

                armor:"доспехи",

                    armor_light: armor.light,
                    armor_medium: armor.medium,
                    // добавить описания

                weapons:"оружие",

                    weapons_battle_axes: weapons.battle_axes,
                    weapons_battle_axes_details: weapons.battle_axes_details,

                    weapons_hand_axes: weapons.hand_axes,
                    weapons_hand_axes_details: weapons.hand_axes_details,

                    weapons_battle_hammers: weapons.battle_hammers,
                    weapons_battle_hammers_details: weapons.battle_hammers_details,

                    weapons_light_hammers: weapons.light_hammers,
                    weapons_light_hammers_details: weapons.light_hammers_details,

                    weapons_long_swords: weapons.long_swords,
                    weapons_long_swords_details: weapons.long_swords_details,

                    weapons_short_swords: weapons.short_swords,
                    weapons_short_swords_details: weapons.short_swords_details,

                    weapons_long_bows: weapons.long_bows,
                    weapons_long_bows_details: weapons.long_bows_details,

                    weapons_short_bows: weapons.short_bows,
                    weapons_short_bows_details: weapons.short_bows_details,

                    weapons_rapires: weapons.rapires,
                    weapons_rapires_details: weapons.rapires_details,

                    weapons_hand_arbalets: weapons.hand_arbalets,
                    weapons_hand_arbalets_details: weapons.hand_arbalets_details,

                tools:"инструменты",

                    tool_blacksmith: tools.blacksmith,
                    tool_brewer: tools.brewer,
                    tool_mason: tools.mason,

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

                    lang_dambratan: langs.dambratan,
                    lang_dambratan_details: langs.dambratan_details,

                    lang_midani: langs.midani,
                    lang_midani_details: langs.midani_details,

                    lang_guran: langs.guran,
                    lang_guran_details: langs.guran_details,

                    lang_damarian: langs.damarian,
                    lang_damarian_details: langs.damarian_details,

                    lang_illuskian: langs.illuskian,
                    lang_illuskian_details: langs.illuskian_details,

                    lang_rushum: langs.rushum,
                    lang_rushum_details: langs.rushum_details,

                    lang_alzhedo: langs.alzhedo,
                    lang_alzhedo_details: langs.alzhedo_details,

                    lang_chessent: langs.chessent,
                    lang_chessent_details: langs.chessent_details,

                    lang_rashemian: langs.rashemian,
                    lang_rashemian_details: langs.rashemian_details,

                    lang_chondatanian: langs.chondatanian,
                    lang_chondatanian_details: langs.chondatanian_details,

                    lang_tuiganian: langs.tuiganian,
                    lang_tuiganian_details: langs.tuiganian_details,

                    lang_teramian: langs.teramian,
                    lang_teramian_details: langs.teramian_details,

                    lang_uluik: langs.uluik,
                    lang_uluik_details: langs.uluik_details,

                    lang_vaelan: langs.vaelan,
                    lang_vaelan_details: langs.vaelan_details,

                    lang_halruanian: langs.halruanian,
                    lang_halruanian_details: langs.halruanian_details,

                    lang_chult: langs.chult,
                    lang_chult_details: langs.chult_details,

                    lang_shaarian: langs.shaarian,
                    lang_shaarian_details: langs.shaarian_details,

                    lang_shu: langs.shu,
                    lang_shu_details: langs.shu_details,


            //Особенности - пассивньіе умения
            fines:"особенности",

                //Ключевые слова
                advantage:"преимущество",
                rethrow:"переброс",
                resistance:"сопротивление",
                telepathy:"телепатия",
                proficiency_bonus:"2× Мастерства",
                slippage: "проскальзывание",
                disadvantage: "помеха",
                plus_1_to_maxhp: "+1 к Max HP",
                trans: "транс",
                stealth_in_wild: "маскировка в дикой местности",
                knowledge: "знание",
                double_dice_damage:"2× Кость урона",
                persistence: "стойкость",

                any_dice_1:"любого кубика при “1”",
                behind_bigger_than_mid:"за существом выше среднего",
                among_bigger_than_mid:"среди существ выше среднего",
                fear_against:"против 😱 Испуга",
                poison_against:"против 🧪 Яда",
                poison_damage:"урону 🧪 Ядом",
                known_languages:"на известных языках",
                fire_against:"против 🔥 Огня",
                fire_damage:"урону 🔥 Огнем",
                history_check_rock_gnome:"к проверке Истории к магическому, алхимическому или технологическому предмету",
                stealth_in_stones: "при Скрытности в каменистой местности",
                magic_against_int_wis_cha: "против Магии: Интеллект, Мудрость, Харизма",
                stone_history:"к проверке Истории связанной с камнем",
                perception_under_sun:"на восприятие под прямым солнечным светом",
                attack_under_sun:"на атаку под прямым солнечным светом",
                for_each_lvl_incl_1:"за каждый уровень включая первый",
                charm_against: "против Очарования",
                magic_sleep_against:"магическому Усыплению",
                trans_details: "— глубокая медитация вместо сна, до 4 часов",
                stealth_in_wild_details:"— даже если слабо заслонены листвой / дождем / снегопадом / туманом...",
                any_cantrip_wizard: "1 любого заговора Волшебника",
                crit_hand_weapon: "при крите рукопашным оружием",
                persistence_details:"— когда HP опускается до 0 и вы при этом не убиты, оно становится = 1",

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

            //Dwarf

            dwarf:"дварф",
            dwarf_details: races.dwarf,

            mountain:"горный",
            mountain_dwarf_details: races.mountain_dwarf,

            grey:"серый",
            grey_dwarf_details: races.grey_dwarf,

            hill:"холмовой",
            hill_dwarf_details: races.hill_dwarf,

            //Human
            
            human:"человек",
            human_details: races.human,

            arkayun:"аркаюн",
            arkayun_details: races.arkayun_human,
            
            bedin:"бедин",
            bedin_details: races.bedin_human,

            gur:"гур",
            gur_details: races.gur_human,

            damarian:"дамарец",
            damarian_details: races.damarian_human,

            illuskian:"иллюскианец",
            illuskian_details: races.illuskian_human,

            imaskari:"имаскари",
            imaskari_details: races.imaskari_human,

            kalishit:"калишит",
            kalishit_details: races.kalishit_human,

            mulan:"мулан",
            mulan_details: races.mulan_human,

            nar:"нар",
            nar_details: races.nar_human,

            rashemi:"рашеми",
            rashemi_details: races.rashemi_human,

            tetirian:"тетирец",
            tetirian_details: races.tetirian_human,

            tuigan:"туйган",
            tuigan_details: races.tuigan_human,

            terami:"тёрами",
            terami_details: races.terami_human,

            ulutiune:"улутиун",
            ulutiune_details: races.ulutiune_human,

            ffolk:"ффолк",
            ffolk_details: races.ffolk_human,

            halruanian:"халруанин",
            halruanian_details: races.halruanian_human,

            chondatan:"чондатанец",
            chondatan_details: races.chondatan_human,

            chult:"чульт",
            chult_details: races.chult_human,

            shaarian:"шаарец",
            shaarian_details: races.shaarian_human,

            shu:"шу",
            shu_details: races.shu_human,

            //Halfelf
            
            halfelf:"полуэльф",
            halfelf_details: races.halfelf,

            //Tiefling
            
            tiefling:"тифлинг",
            tiefling_details: races.tiefling,

            // Elf

            elf: "эльф",
            elf_details: races.elf,

            forest_elf_details: races.forest_elf,

            high_elf: "высший",
            high_elf_details: races.high_elf,

            dark: "темный",
            dark_elf_details: races.dark_elf,

            // Halforc

            halforc: "полуорк",
            halforc_details: races.halforc,

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
            illusion:"иллюзия",

            //components
            verbal:"слово",
            somatic:"жест",

            //more
            damage: "урон",
            additional: "дополнительный",
            
            thaumaturgy: spells.thaumaturgy,
            thaumaturgy_details: spells.thaumaturgy_details,

            hellish_rebuke: spells.hellish_rebuke,
            hellish_rebuke_details: spells.hellish_rebuke_details,

            darkness: spells.darkness,
            darkness_details: spells.darkness_details,

            spell_toy: spells.toy,
            spell_toy_details: spells.toy_details,

            spell_lighter: spells.lighter,
            spell_lighter_details: spells.lighter_details,

            spell_music_box: spells.music_box,
            spell_music_box_details: spells.music_box_details,

            spell_small_illusion: spells.small_illusion,
            spell_small_illusion_details: spells.small_illusion_details,

            spell_enlargement: spells.enlargement,
            spell_enlargement_details: spells.enlargement_details,

            spell_invisibility: spells.invisibility,
            spell_invisibility_details: spells.invisibility_details,

            spell_dancing_lights: spells.dancing_lights,
            spell_dancing_lights_details: spells.dancing_lights_details,

            spell_faerie_fire: spells.faerie_fire,
            spell_faerie_fire_details: spells.faerie_fire_details,

}