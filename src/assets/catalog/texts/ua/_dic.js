import * as races from './races.js';
import * as spells from './spells.js';
import * as classes from './classes.js';
import { langs } from './languages.js';
import { weapons } from './weapons.js';
import { tools } from './tools.js';
import { armor } from './armor.js';

export default {
    
    //Стартовое
            welcome_title: "Створи свого персонажа для D&D",
            welcome_message: 'Щоб повноцінно грати в D&D, достатньо придумати персонажа потрібного рівня, а решту влаштує ваш Майстер. Цей чарівний сайт допоможе вам створити персонажа за 5 простих кроків: Раса, Клас, Типаж, Характеристики, Біографія.\n\nНайкращий підхід для першого разу — розслабитися і вибирати за покликом серця. Тут немає неправильних рішень. У фіналі ви отримаєте аркуш персонажа, з яким ви зможете розпочати гру!',
            welcome_disclaimer: '<br /><p>Матеріали на цьому сайті не змінюють необхідності придбання офіційних матеріалів. Cистема Dungeons & Dragons є власністю корпорації Wizards of the Coast, графічні матеріали створені за допомогою <a target="_blank" href="https://www.heroforge.com">Hero Forge ↗</a></p>',

            authors: 
            '<p><a target="_blank" href="https://t.me/dimalagoda">@ Dima Lagoda, Product Designer</a> — ідея, дизайн, контент,</p>' +
            '<p><a target="_blank" href="https://t.me/Ki3iL">@ Andrii Alchin, Frontend Developer</a> — код,</p>' +
            '<p><a target="_blank" href="https://t.me/godblessdnd">@ Andrii Pavlov, Найкращий Майстер</a> - переклади, валідація.</p>' +
            '<p>З будь яких тем по цьому сайту, пишіть Дімі.</p>' +
            '<br /><p>Якщо у вас є бажання задонатити, будемо дуже вдячні. Безжальне та жорстоке вторгнення ₚосії в Україну триває, тому 80% донатів ми відправляємо у фонд "<a target="_blank" href="https://savelife.in.ua">Повернись Живим</a>".</p>',

    //Общее        
    
            name:"имя",
            race:"раса",
            ethnos:"етнос",
            class:"класс",
            subclass:"специализация",
            past:"предистория",           
            level:"рівень",
                level_unit:"й",
                lvl:"LVL",

    //Stats

            stats:"характеристики",
            stats_base_details: 'Базовые значения характеристик помогают получить значения Модификаторов характеристик и Навыков. Они используются в игре гораздо чаще и будут высчитаны после выбора Класса, Типажа и Распределения характеристик.',

            strength:"сила",
            strength_base:"базовая",
            strength_details: 
            'Физическая мощь и тренировки. Влияет на навыки:\n' +
            '• Атлетика',

            dexterity:"ловкость",
            dexterity_base:"базовая",
            dexterity_details: 
            'Проворство, реакция, равновесие. Влияет на навыки:\n' +
            '• Акробатика\n' +
            '• Ловкость рук\n' +
            '• Скрытность',

            constitution:"телосложение",
            constitution_base:"базовое",
            constitution_details: 'Выносливость, жизненные резервы. Влияет на навыки:\n' +
            '• Здоровье (HP)',

            intelligence:"интеллект",
            intelligence_base:"базовый",
            intelligence_details: 'Точность воспоминаний, рассуждений. Влияет на навыки:\n' +
            '• Анализ\n' +
            '• История\n' +
            '• Религия\n' +
            '• Магия\n' +
            '• Природа\n', 
            
            wisdom:"мудрость",
            wisdom_base:"базовая",
            wisdom_details: 'Восприятие окружающего мира, интуиция. Влияет на навыки:\n' +
            '• Выживание\n' +
            '• Внимательность\n' +
            '• Проницательность\n' +
            '• Медицина\n' +
            '• Уход за животными\n', 

            charisma:"харизма",
            charisma_base:"базовая",
            charisma_details: 'Способность оказывать влияние. Влияет на навыки:\n' +
            '• Выступление\n' +
            '• Убеждение\n' +
            '• Обман\n' +
            '• Запугивание',

            saving: "испытание",

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
                    unstable_details: "половые признаки вашего персонажа могут меняться по каким-то причинам, или без причин.",
                    other_gender: "другой пол",
                    other_gender_details: "ваш персонаж обладает признаками пола, отличного от мужского или женского.",
                feel:"самоощущение",
                    pangender:"пангендер",
                    pangender_details: "ваш персонаж ощущает себя носителем всех возможных гендеров сразу.",
                    undecided:"неопределенный",
                    undecided_details: "ваш персонаж не определился, каким гендером он себя ощущает.",
                    gender_fluid:"флюид",
                    gender_fluid_details: "ощущение гендера вашего персонажа может меняться по каким-то причинам, или без причин.",
                    androgin:"андрогин",
                    androgin_details: "ваш персонаж ощущает себя чем-то средним между своим физиологическим и другим гендером",
                    cisgender:"цисгендер",
                    cisgender_details: "cамоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
                    transsexual:"транссексуал",
                    transsexual_details: "ваш персонаж стремится привести гендер в соответствие своему ощущению, отличающемуся от физиологического.",
                    transvestit:"трансвестит",
                    transvestit_details: "cамоощущение вашего персонажа не соответствует его физиологическому гендеру.",
                    demigender:"демигендер",
                    demigender_details: "cамоощущение вашего персонажа соответствует его физиологическому гендеру, но не полностью.",
                    demitrans:"демитранс",
                    demitrans_details: "cамоощущение вашего персонажа не соответствует его физиологическому гендеру, но не полностью.",
                    queer:"квир",
                    queer_details: "ощущение гендера вашего персонажа соответствует физиологическому, но не набору признаков єтого гендера.",
                    bigender: "бигендер",
                    bigender_details: "гендер, которым ощущает себя ваш персонаж, объединяет признаки его физиологического и противоположного пола.",
                look: "внешний вид",
                    as_phisiological: "соответствует физиологическому полу",
                    as_phisiological_details: "самоощущение остается внутренним состоянием.",
                    as_feel: "соответствует самоощущению",
                    as_feel_details: "физиологический пол остается за кулисами.",
                    as_other_gender: "другое",
                    as_other_gender_details: "раскройте детали позже в Предистории вашего персонажа.",
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

    // Тело

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
                feet: "футов",
                miles: "миль",
            vision_day:"зрение",
            vision_night:"темное зрение",
            hp_bonus: "здоровье",

    // Навыки

            skills:"навыки",
            skills_details:'Значения Навыков — основные показатели, использующиеся в игре. Итоговые значения будут высчитаны после выбора класса на шаге 2 и распределения характеристик на шаге 3.',
                
                acrobatics:"акробатика",
                acrobatics_details: 
                'Способность устоять на ногах. Например попытка:\n\n' +
                '• Пробежаться по льду\n' +
                '• Балансировать на натянутом канате\n' +
                '• Устоять на палубе в шторм\n' +
                '• Выбраться из пут',

                animal_hanging:"уход за животными",
                animal_hanging_details:
                'Способность ладить с животными. Например попытка:\n\n' +
                '• Успокоить одомашненное животное\n' +
                '• Удержать скакуна от паники\n' +
                '• Почувствовать намерения животного\n' +
                '• Совершенить опасный маневр на коне',

                arcana:"магия",
                arcana_details:
                'Способность вспомнить знания о заклинаниях, магических предметах, мистических символах, магических традициях, планах существования, обитателях этих планов и тд. А также попытка пообщаться с существом без использования слов.',

                athletics:"атлетика",
                athletics_details:
                'Способность лазать, прыгать или плавать. Например попытка:\n\n' +
                '• Взобраться на крутой утес\n' +
                '• Удержаться за ветку\n' +
                '• Прыгнуть на больше расстояние\n' +
                '• Плыть или оставаться на плаву\n\n' +
                '• Открыть запертую дверь\n' +
                '• Вырваться из оков\n' +
                '• Опрокинуть статую\n' +
                '• Удержать валун от падения',

                deception:"обман",
                deception_details:
                'Спопобность утаить правду. Например попытка:\n\n' +
                '• Запутать следы\n' +
                '• Отвлечь стражников\n' +
                '• Обмануть торговца\n' +
                '• Отвести от себя подозрения',

                history:"история",
                history_details:
                'Способность вспомнить знания об исторических событиях, легендарных личностях, древних королевствах, былых спорах, недавних войнах, потерянных цивилизациях, а так же ремесле, торговле и тд.',

                insight:"проницательность",
                insight_details:
                'Способность определить искренние намерения существа. Например попытка:\n\n' +
                '• Распознать ложь\n' +
                '• Предсказать чей-то следующий шаг',

                intimidation:"запугивание",
                intimidation_details:
                'Способность, собственно, запугать. Например попытка:\n\n' +
                '• Добыть информацию из пленника\n' +
                '• Предотвратить драку демострацией собственной опасности',

                investigation:"анализ",
                investigation_details: 
                'Поиск подсказок и правильные выводы на их основе. Например попытка:\n\n' +
                '• Вычислить местоположение спрятанного предмета\n' +
                '• Понять по виду раны, каким оружием она нанесена\n' +
                '• Определить точку обрушения тоннеля\n' +
                '• Поиск тайного знания в свитке\n' +
                '• Подделка документа\n' +
                '• Оценить стоимость предмета\n' +
                '• Обыграть кого-то',

                medicine:"медицина",
                medicine_details:
                'Способность оказать медицинскую помощь. Например попытка:\n\n' +
                '• Стабилизировать умирающего\n' +
                '• Диагностировать болезнь',

                nature:"природа",
                nature_details:
                'Способность вспомнить знания о местности, растениях и животных, погоде и тд.',

                perception:"внимательность",
                perception_details:
                'Способность обнаружить присутствие чего либо. Например попытка:\n\n' +
                '• Подслушать разговор за дверью\n' +
                '• Подсмотреть в окно\n' +
                '• Услышать крадущихся чудовищ\n' +
                '• Заметить что-то скрытое',

                performance:"выступление",
                performance_details:
                'Способность произвести впечатление. Например попытка:\n\n' +
                '• Рассказать историю\n' +
                '• Станцевать\n' +
                '• Сыграть\n' +
                '• Спародировать',
                

                persuasion:"убеждение",
                persuasion_details:
                'Способность повлиять на решение. Например попытка:\n\n' +
                '• Подружиться с кем-то\n' +
                '• Убедить дворецкого пропустить к королю\n' +
                '• Уладить конфликт\n' +
                '• Воодушевление толпы',

                religion:"религия",
                religion_details:
                'Способность вспомнить знания о божествах, ритуалах и молитвах, религиозных иерархиях, священных символах, практиках тайных культов и тд.',

                sleight_of_hand:"ловкость рук",
                sleight_of_hand_details:
                'Микромоторика. Например попытка:\n\n' +
                '• Жонглировать\n' +
                '• Сделать ловкий трюк\n' +
                '• Срезать кошелек\n' +
                '• Обезвредить ловушку\n' +
                '• Подбросить что-то другому в карман\n\n' +
                '• Вскрыть замок\n' +
                '• Спрятать что-то\n' +
                '• Связать пленника\n' +
                '• Сыграть на новом инструменте\n' +
                '• Создать мелкий предмет',

                stealth:"скрытность",
                stealth_details:
                'Способность остаться незамеченным. Например попытка:\n\n' +
                '• Скрыться от врагов\n' +
                '• Незаметно пробраться\n' +
                '• Неслышно приблизиться',

                survival:"выживание",
                survival_details:
                'Способность ориентироваться в дикой местности. Например попытка:\n\n' +
                '• Выследить врага\n' +
                '• Найти дорогу\n' +
                '• Избежать зыбучих песков\n' +
                '• Поохотиться\n' +
                '• Заметить признаки обитания редкого животного\n' +
                '• Спрогнозировать погоду',
            
    // Владения

            proficiencies:"владения",

                armor:"доспехи",

                    armor_light: armor.light,
                    armor_light_details: armor.light_details,

                    armor_medium: armor.medium,
                    armor_medium_details: armor.medium_details,

                    armor_shields: armor.shields,
                    armor_shields_details: armor.shields_details,
                    // добавить описания

                weapons:"оружие",

                    melee:"ближнее",
                    ranged:"дальнобойное",
                    throwing:"метательное",

                    loading:weapons.loading,
                    weapon_light:weapons.light,
                    weapon_heavy:weapons.heavy,
                    loading_details:weapons.loading_details,
                    weapon_light_details:weapons.light_details,
                    weapon_heavy_details:weapons.heavy_details,

                    ammunition:"боеприпасы",
                    bolt:"болт",
                    arrow:"стрела",
                    bullet:"снаряд",

                    damage_1_hand:"одной рукой",
                    damage_2_hand:"двумя руками",

                    cost:"цена",
                    coin_gold:"золотых монет",
                    coin_silver:"серебряных монет",
                    сoin_copper:"медных монет",

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

                    weapons_simple: weapons.simple,
                    weapons_simple_details: weapons.simple_details,

                    weapons_military: weapons.military,
                    weapons_military_details: weapons.military_details,

                    quarterstaff:weapons.quarterstaff,
                    quarterstaff_details:weapons.quarterstaff_details,

                    mace:weapons.mace,
                    mace_details:weapons.mace_details,

                    club:weapons.club,
                    club_details:weapons.club_details,

                    dagger:weapons.dagger,
                    dagger_details:weapons.dagger_details,

                    spear:weapons.spear,
                    spear_details:weapons.spear_details,

                    light_hammer:weapons.light_hammer,
                    light_hammer_details:weapons.light_hammer_details,
                    
                    javelin:weapons.javelin,
                    javelin_details:weapons.javelin_details,

                    greatclub:weapons.greatclub,
                    greatclub_details:weapons.greatclub_details,

                    handaxe:weapons.handaxe,
                    handaxe_details:weapons.handaxe_details,

                    sickle:weapons.sickle,
                    sickle_details:weapons.sickle_details,

                    light_crossbow:weapons.light_crossbow,
                    light_crossbow_details:weapons.light_crossbow_details,

                    dart:weapons.dart,
                    dart_details:weapons.dart_details,

                    shortbow:weapons.shortbow,
                    shortbow_details:weapons.shortbow_details,

                    sling:weapons.sling,
                    sling_details:weapons.sling_details,

                    halberd:weapons.halberd,
                    halberd_details:weapons.halberd_details,

                    war_pick:weapons.war_pick,
                    war_pick_details:weapons.war_pick_details,

                    warhammer:weapons.warhammer,
                    warhammer_details:weapons.warhammer_details,

                    battleaxe:weapons.battleaxe,
                    battleaxe_details:weapons.battleaxe_details,

                    glaive:weapons.glaive,
                    glaive_details:weapons.glaive_details,

                    greatsword:weapons.greatsword,
                    greatsword_details:weapons.greatsword_details,

                    lance:weapons.lance,
                    lance_details:weapons.lance_details,

                    longsword:weapons.longsword,
                    longsword_details:weapons.longsword_details,

                    whip:weapons.whip,
                    whip_details:weapons.whip_details,

                    shortsword:weapons.shortsword,
                    shortsword_details:weapons.shortsword_details,

                    maul:weapons.maul,
                    maul_details:weapons.maul_details,

                    morningstar:weapons.morningstar,
                    morningstar_details:weapons.morningstar_details,

                    pike:weapons.pike,
                    pike_details:weapons.pike_details,

                    rapier:weapons.rapier,
                    rapier_details:weapons.rapier_details,

                    greataxe:weapons.greataxe,
                    greataxe_details:weapons.greataxe_details,

                    scimitar:weapons.scimitar,
                    scimitar_details:weapons.scimitar_details,

                    trident:weapons.trident,
                    trident_details:weapons.trident_details,

                    flail:weapons.flail,
                    flail_details:weapons.flail_details,

                    hand_crossbow:weapons.hand_crossbow,
                    hand_crossbow_details:weapons.hand_crossbow_details,

                    heavy_crossbow:weapons.heavy_crossbow,
                    heavy_crossbow_details:weapons.heavy_crossbow_details,

                    longbow:weapons.longbow,
                    longbow_details:weapons.longbow_details,

                    blowgun:weapons.blowgun,
                    blowgun_details:weapons.blowgun_details,

                    net:weapons.net,
                    net_details:weapons.net_details,

                tools:"інструменти",

                    tool_blacksmith: tools.blacksmith,
                    tool_brewer: tools.brewer,
                    tool_mason: tools.mason,
                    tool_thief: tools.thief,

                languages:"мови",
                languages_human:"языки этносов людей",
                
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


    //Особенности - пассивные умения

            fines:"особенности",

                //Ключевые слова
                advantage:"преимущество",
                no_disadvantage: "нет помехи",
                rethrow:"переброс",
                resistance:"сопротивление",
                immunity:"иммунитет",
                telepathy:"телепатия",
                proficiency_bonus:"2× Мастерства",
                slippage: "проскальзывание",
                disadvantage: "помеха",
                plus_1_to_maxhp: "+1 к Max HP",
                trans: "транс",
                stealth_in_wild: "маскировка в дикой местности",
                knowledge: "знание",
                extra_dice_damage:"+1 Кость урона",
                persistence: "стойкость",

                //Обьект особенности
                any_dice_1:"любого кубика d20 при “1”",
                behind_bigger_than_mid:"за существом выше среднего",
                among_bigger_than_mid:"среди существ выше среднего",
                fear_against:"против 😱 Испуга",
                poison_against:"против 🧪 Яда",
                poison_damage:"урону 🧪 Ядом",
                poison_w:"🧪 Ядом",
                known_languages:"на известных языках",
                fire_against:"против 🔥 Огня",
                fire_damage:"урону 🔥 Огнем",
                fire_w:"🔥 Огнем",
                cold_damage:"урону ❄️ Холодом",
                cold_w:"❄️ Холодом",
                electricity_damage:"урону ⚡️ Электричеством",
                electricity_w:"⚡️ Электричеством",
                acid_damage:"урону ⚗️ Кислотой",
                acid_w:"⚗️ Кислотой",
                thunder_w: "🔊 Звуком",
                radiant_w: "✨ Светом",
                force_w: "🌈 Cиловым полем",
    
                piercing_w: "🗡 колющий",
                slashing_w: "🪓 рубящий",
                bludgeoning_w: "🔨 дробящий",
                
                necrotic_w: "💀 Некротический",
                psychic_w: "🧠 Психический",

                history_check_rock_gnome:"к проверке Истории к магическому, алхимическому или технологическому предмету",
                stealth_in_stones: "при Скрытности в каменистой местности",
                magic_against_int_wis_cha: "против Магии: Интеллект, Мудрость, Харизма",
                stone_history:"к проверке Истории связанной с камнем",
                perception_under_sun:"на восприятие под прямым солнечным светом",
                attack_under_sun:"на атаку под прямым солнечным светом",
                for_each_lvl_incl_1:"за каждый уровень включая первый",
                charm_against: "против 😍 Очарования",
                magic_sleep_against:"магическому 🥱 Усыплению",
                trans_details: "— глубокая медитация вместо сна, до 4 часов",
                stealth_in_wild_details:"— даже если слабо заслонены листвой / дождем / снегопадом / туманом...",
                any_cantrip_wizard: "1 любого заговора Волшебника",
                crit_hand_weapon: "при крите рукопашным оружием",
                persistence_details: "— когда HP опускается до 0 и вы при этом не убиты, оно становится = 1",

                no_armor_protection: "защита без доспехов",
                armor_constitution: "— броня за счет Телосложения",
                saving_dex_visible: "на испытания Ловкости от видимых эффектов",
                charmed_while_raging: "против 😍 Очарования при Ярости",
                frightened_while_raging: "против 😱 Испуга при Ярости",
                on_initiative: "на инициативу",
                extra_movement: "доролнительное движение",
                rage_half_speed: "на половину скорости, как часть впадания в Ярость",
                rage_persistence: "яростная стойкость",
                rage_persistence_details: "— когда во время Ярости HP опускается до 0, оно становится = 1 при успешном Испытании Силы со сложностью 10 (+5 за каждый следующий раз до долгого отдыха)",
                saving_strength: "испытание Силы",
                min_base_strengt: "минимум равно базовой Силе",
                rage_sustainability: "Ярость не прекращается досрочно",
                only_if_uncontious: "кроме потери сознания",
                near_friends_attack_in_rage: "на рукопашные атаки союзников рядом, при Ярости",
                any_damage_but_psy: "любому урону кроме 🧠 Психического, при Ярости",
                on_dodging_in_rage: "на уворот от провоцированных атак, при Ярости",
                rush: "рывок",
                as_bonus_action: "бонусным действием, при Ярости",
                long_jumps: "прыжки +10ф в длину и +3ф в высоту",
                in_rage: "при Ярости",
                fast_tempo: "быстрый темп",
                while_following_prints: "при движении по следу",
                normal_tempo: "нормальный темп",
                in_stealth: "при движении в скрытности",
                double_weight: "2× Грузоподьемность",
                weight_capacity: "включая максимальный вес нагрузки и подъёма",
                str_check_on_move: "на Испытания Силы при передвижении / разрушении предметов",
                to_see: "зоркость",
                one_mile_100f_details: "до 1 мили, а на 100ф до мельчайших деталей",
                on_perception_in_lowlight: "на Внимательность при тусклом свете",
                double_speed: "2× Скорость",
                travel_elk: "путешествия для вас и 10 ваших спутников в пределах 60ф",
                on_dodging_in_rage_bear: "на уворот союзников рядом от атак врагов, видящих вас, при Ярости",
                flight: "полет",
                as_walking_speed_in_rage: "по скорости равный скорости передвижения, при Ярости",

    //Умения - активные умения без урона

            abilities:"умения",

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
            
            halfling:"хафлинг",                   
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

            // Dragonborn

            dragonborn: "драконорожденный",
            dragonborn_details: races.dragonborn,

            red_dragonborn: "красный",
            red_dragonborn_details: races.red_dragonborn,

            brass_dragonborn: "латунный",
            brass_dragonborn_details: races.brass_dragonborn,

            golden_dragonborn: "золотой",
            golden_dragonborn_details: races.golden_dragonborn,

            silver_dragonborn: "серебряный",
            silver_dragonborn_details: races.silver_dragonborn,

            white_dragonborn: "белый",
            white_dragonborn_details: races.white_dragonborn,

            blue_dragonborn: "синий",
            blue_dragonborn_details: races.blue_dragonborn,

            bronze_dragonborn: "бронзовый",
            bronze_dragonborn_details: races.bronze_dragonborn,

            copper_dragonborn: "медный",
            copper_dragonborn_details: races.copper_dragonborn,

            black_dragonborn: "черный",
            black_dragonborn_details: races.black_dragonborn,

            green_dragonborn: "зеленый",
            green_dragonborn_details: races.green_dragonborn,

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

    //Заклинания - активные умения с уроном

            spells:"заклинания",

            //schools
            cantrip:"заговор",

            abjuration: "ограждение", //
            conjuration: "вызов", //
            divination: "прорицание", //
            enchantment: "чары", //
            evocation: "воплощение", //
            illusion: "иллюзия", //
            necromancy: "некромантия", //
            transmutation: "преобразование", //
            ability: "умение",
            other: "другое",

            //cast time
            cast_time: "каст",
            reaction: "реакция",
            bonus_action: "бонусное действие",
            action: "действие",
            ritual: "ритуал",
            up_to: "до",
            sec: "сек",
            round: "раунд",
            min: "мин",
            hour: "ч",
            day: "дн",


            mana:"мана",

            //parts
            parts: "части",
            verbal:"слово",
            somatic:"жест",
            touch:"касание цели",
            focus: "фокус",
            material_10gold: "материалы на сумму в 10 🟡",
            hit: "попадание",
            none: "не требуется",

            //aim
            aim_target: "цель",
            self: "на себя",
            creature: "cущество",
            object: "объект",
            point: "точка",

            near: "вблизи",
            in_distance: "на расстоянии",

            //duration
            time: "время",
            instant: "мгновенно",
            concentration: "концентрация",
            till_dissipate: "пока не рассеится",

            //impact
            damage: "урон",
            heal: "лечение",
            bonus_w:"бонусный",

            //area
            aim_aoe: "область",
            line: "линия",
            cone: "конус",
            cube: "куб",
            cilinder: "цилиндр",
            sphere: "сфера",

            saving_target: "испытание цели",
            aim_bonus: "меткость",
            aim_range: "дальность",

            additional_m: "дополнительно",
            
            spell_thaumaturgy: spells.thaumaturgy,
            spell_thaumaturgy_details: spells.thaumaturgy_details,
            spell_thaumaturgy_expanded: spells.thaumaturgy_expanded,

            spell_hellish_rebuke: spells.hellish_rebuke,
            spell_hellish_rebuke_details: spells.hellish_rebuke_details,
            spell_hellish_rebuke_expanded: spells.hellish_rebuke_expanded,
            spell_hellish_rebuke_tiefling_details: spells.hellish_rebuke_tiefling_details,
            spell_hellish_rebuke_tiefling_expanded: spells.hellish_rebuke_tiefling_expanded,

            spell_darkness: spells.darkness,
            spell_darkness_tiefling_details: spells.darkness_tiefling_details,
            spell_darkness_tiefling_expanded: spells.darkness_tiefling_expanded,

            spell_toy: spells.toy,
            spell_toy_details: spells.toy_details,
            spell_toy_expanded: spells.toy_expanded,

            spell_lighter: spells.lighter,
            spell_lighter_details: spells.lighter_details,
            spell_lighter_expanded: spells.lighter_expanded,

            spell_music_box: spells.music_box,
            spell_music_box_details: spells.music_box_details,
            spell_music_box_expanded: spells.music_box_expanded,

            spell_small_illusion: spells.small_illusion,
            spell_small_illusion_details: spells.small_illusion_details,
            spell_small_illusion_expanded: spells.small_illusion_expanded,

            spell_enlargement: spells.enlargement,
            spell_enlargement_details: spells.enlargement_details,
            spell_enlargement_expanded: spells.enlargement_expanded,

            spell_invisibility_self: spells.invisibility_self,
            spell_invisibility_self_details: spells.invisibility_self_details,
            spell_invisibility_self_expanded: spells.invisibility_self_expanded,

            spell_dancing_lights: spells.dancing_lights,
            spell_dancing_lights_details: spells.dancing_lights_details,
            spell_dancing_lights_expanded: spells.dancing_lights_expanded,

            spell_faerie_fire: spells.faerie_fire,
            spell_faerie_fire_details: spells.faerie_fire_details,
            spell_faerie_fire_expanded: spells.faerie_fire_expanded,

            spell_poison_breath: spells.poison_breath,
            spell_acid_breath: spells.acid_breath,
            spell_electricity_breath: spells.electricity_breath,
            spell_cold_breath: spells.cold_breath,
            spell_fire_breath: spells.fire_breath,
            spell_breath_details: spells.breath_details,
            spell_breath_expanded: spells.breath_expanded,

            spell_rage: spells.rage,
            spell_rage_details: spells.rage_details,
            spell_rage_expanded: spells.rage_expanded,

            spell_reckless_attack: spells.reckless_attack,
            spell_reckless_attack_details: spells.reckless_attack_details,
            spell_reckless_attack_expanded: spells.reckless_attack_expanded,

            spell_frenzy: spells.frenzy,
            spell_frenzy_details: spells.frenzy_details,
            spell_frenzy_expanded: spells.frenzy_expanded,

            spell_intimidating_presence: spells.intimidating_presence,
            spell_intimidating_presence_details: spells.intimidating_presence_details,
            spell_intimidating_presence_expanded: spells.intimidating_presence_expanded,

            spell_retaliation: spells.retaliation,
            spell_retaliation_details: spells.retaliation_details,
            spell_retaliation_expanded: spells.retaliation_expanded,

            spell_beast_sense: spells.beast_sense,
            spell_beast_sense_details: spells.beast_sense_details,
            spell_beast_sense_expanded: spells.beast_sense_expanded,

            spell_speak_with_animals: spells.speak_with_animals,
            spell_speak_with_animals_details: spells.speak_with_animals_details,
            spell_speak_with_animals_expanded: spells.speak_with_animals_expanded,

            spell_commune_with_nature: spells.commune_with_nature,
            spell_commune_with_nature_details: spells.commune_with_nature_details,
            spell_commune_with_nature_expanded: spells.commune_with_nature_expanded,

            spell_wolf_knock: spells.wolf_knock,
            spell_wolf_knock_details: spells.wolf_knock_details,

            spell_elk_knock: spells.elk_knock,
            spell_elk_knock_details: spells.elk_knock_details,
            spell_elk_knock_expanded: spells.elk_knock_expanded,

            spell_tiger_strike: spells.tiger_strike,
            spell_tiger_strike_details: spells.tiger_strike_details,
            spell_tiger_strike_expanded: spells.tiger_strike_expanded,

            //14 Oct

            explorers_pack: "набор путещественника",
            explorers_pack_details: "Любой искатель приключений может быть призван пройти долгий путь, выполняя задание, но те, кто выбрал жизнь исследователя, особенно хорошо подготовлены к путешествию.",

            backpack: "рюкзак",
            backpack_details: "Вместимость: 1 кубический фут / 15 кг. Вы также можете привязывать такие предметы как спальники и верёвки снаружи рюкзака.",

            bedroll: "спальник",
            bedroll_details: "Используется для длительного и короткого отдыха.",

            mess_kit: "столовый набор",
            mess_kit_details: "В этой небольшой коробке находится чашка и простые столовые приборы. Коробка раскрывается, и одна сторона может использоваться как сковорода, а другая — как тарелка или неглубокая миска.",

            tinderbox: "трутница",
            tinderbox_details: "В этом небольшом контейнере находится кремень, кресало и трут (обычно это сухая тряпка, вымоченная в масле), используемые для разжигания огня. Использование его для разжигания факела — или чего-нибудь другого, легковоспламеняющегося — требует одного действия. Разжигание другого огня требует 1 минуты.",

            torch: "факел",
            torch_details: "Факел горит 1 час, испуская яркий свет в пределах 20 футов и тусклый свет в пределах ещё 20 футов. Если вы совершаете рукопашную атаку горящим факелом и попадаете, он причиняет урон огнём 1.",

            ration: "дневной рацион",
            ration_details: "Рационы состоят из обезвоженной пищи, подходящей для путешествий, включая вяленое мясо, сухофрукты, галеты и орехи.",

            waterskin: "бурдюк",
            waterskin_details: "Вместимость: 2 литра",

            hempen_rope: "пеньковая веревка 50ф",
            hempen_rope_details: "сделана из пеньки или шёлка. У неё 2 HP, и её можно порвать Испытанием Силы сложностью 17.",

            barbarian: classes.barbarian,
            barbarian_details: classes.barbarian_details,

            totem_warrior: classes.totem_warrior,
            totem_warrior_details: classes.totem_warrior_details,

            totem_spirit: classes.totem_spirit,
            totem_spirit_details: classes.totem_spirit_details,
            totem_harmony: classes.totem_harmony,

            totem: "тотем",
            totem_details: "амулет или похожее украшение, содержащий мех или кожу, перья, когти, зубы или кости тотемного животного.",

            wolf: "волк",
            bear: "медведь",
            eagle: "орел",
            elk: "лось",
            tiger: "тигр",

}