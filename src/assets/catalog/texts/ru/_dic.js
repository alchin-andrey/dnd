import * as races from './races.js';
import * as spells from './spells.js';
import * as classes from './classes.js';
import { langs } from './languages.js';
import { weapons } from './weapons.js';
import { tools } from './tools.js';
import { armor } from './armor.js';

export default {
    
    //Стартовое
            welcome_title: "Создай своего персонажа для D&D",
            welcome_message: 'Чтобы полноценно играть в D&D, достаточно придумать персонажа нужного уровня, а остальное устроит ваш Мастер. Этот сайт поможет вам создать персонажа за 3 простых шага:\nРаса, Класс и Типаж.\n\nЛучший подход для первого раза — расслабиться и выбирать по зову сердца. Здесь нет неправильных решений. В финале вы получите лист персонажа, с которым вы сможете начать игру!',
            welcome_disclaimer: '<br /><p>Материалы на этом сайте не заменяют необходимость приобретения официальных материалов. Система Dungeons & Dragons является собственностью Wizards of the Coast, графические материалы созданы с помощью <a target="_blank" href="https://www.heroforge.com">Hero Forge ↗</a></p>',

            authors: 
            '<p><a target="_blank" href="https://t.me/dimalagoda">@ Dima Lagoda, Product Designer</a> — идея, дизайн, контент</p>' +
            '<p><a target="_blank" href="https://t.me/Ki3iL">@ Andrii Alchin, Frontend Developer</a> — код</p>' +
            '<p><a target="_blank" href="https://t.me/godblessdnd">@ Andrii Pavlov, Лучший Мастер Киева</a> — переводы, валидация</p>' +
            '<p>По любым темам об этом сайте, пишите Диме.</p>' +
            '<br /><p>Если у вас есть желание задонатить, будем очень благодарны. Безжалостное и жестокое вторжение ₚосии в Украину продолжается, поэтому 80% донатов мы отправляем в фонд "<a target="_blank" href="https://savelife.in.ua">Повернись Живим</a>".</p>',

    //Общее        
    
            name:"имя",

            race:"раса",
            ethnos:"этнос",
            class:"класс",
            subclass:"специализация",
            past:"предистория",
            level:"уровень",
                level_unit:"й",
                lvl:"LVL",

    //Stats

    stats:"характеристики",
    stats_base_details: 'Базовые значения характеристик помогают получить значения Модификаторов характеристик и Навыков. Они используются в игре гораздо чаще и будут высчитаны на следующем шаге, при выборе Класса.',

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
    '• Скрытность\n'+
    '• Броня',

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
            androgin_details: "ваш персонаж ощущает себя чем-то средним между своим физиологическим и другим гендером.",
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

    hp_max:"max HP",
    hp_dice:"реген",

    proficiency:"мастерство",
    initiative:"инициатива",
    armor_class:"броня",

    speed:"скорость",
        feet: "футов",
        miles: "миль",
        milei: "мили",
        milea: "миля",
    vision_day:"зрение",
    vision_night:"темное зрение",
    hp_bonus: "здоровье",

// Навыки

    skills:"навыки",
    skills_details:'Значения Навыков — основные показатели, использующиеся в игре. Итоговые значения будут высчитаны после выбора Класса на шаге 2 и Типажа на шаге 3.',
        
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
        '• Прыгнуть на большое расстояние\n' +
        '• Плыть или оставаться на плаву\n\n' +
        '• Выломать запертую дверь\n' +
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
        'Способность определить скрытые намерения существа. Например попытка:\n\n' +
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

            armor_heavy: armor.heavy,
            armor_heavy_details: armor.heavy_details,

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

        tools:"инструменты",

            tool_blacksmith: tools.blacksmith,
            tool_brewer: tools.brewer,
            tool_mason: tools.mason,
            tool_thief: tools.thief,
            tool_alchemists_supplies: tools.alchemists_supplies,
            tool_potters_tools: tools.potters_tools,
            tool_tinkers_tools: tools.tinkers_tools,
            tool_calligraphers_supplies: tools.calligraphers_supplies,
            tool_cartographers_tools: tools.cartographers_tools,
            tool_leatherworkers_tools: tools.leatherworkers_tools,
            tool_navigators_tools: tools.navigators_tools,
            tool_carpenters_tools: tools.carpenters_tools,
            tool_cooks_tools: tools.cooks_tools,
            tool_woodcarvers_tools: tools.woodcarvers_tools,
            tool_cobblers_tools: tools.cobblers_tools,
            tool_glassblowers_tools: tools.glassblowers_tools,
            tool_weavers_tools: tools.weavers_tools,
            tool_painters_supplies: tools.painters_supplies,
            tool_jewelers_tools: tools.jewelers_tools,
            tool_music_drums: tools.music_drums,
            tool_music_viol: tools.music_viol,
            tool_music_bagpipes: tools.music_bagpipes,
            tool_music_lyre: tools.music_lyre,
            tool_music_lute: tools.music_lute,
            tool_music_horn: tools.music_horn,
            tool_music_pan_flute: tools.music_pan_flute,
            tool_music_flute: tools.music_flute,
            tool_music_dulcimer: tools.music_dulcimer,
            tool_music_shawm: tools.music_shawm,


        languages:"языки",
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
        electricity_w:"⚡ Электричеством",
        acid_damage:"урону ⚗️ Кислотой",
        acid_w:"⚗️ Кислотой",
        thunder_w: "🔊 Звуком",
        radiant_w: "✨ Светом",
        force_w: "🌈 Cиловым полем",

        piercing_w: "🗡️ колющий",
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
        magic_sleep_against:"к магическому 🥱 Усыплению",
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
        weight_capacity: "включая максимальный вес нагрузки и подъема",
        str_check_on_move: "на Испытания Силы при передвижении / разрушении предметов",
        to_see: "зоркость",
        one_mile_100f_details: "до 1 мили, а на 100ф до мельчайших деталей",
        on_perception_in_lowlight: "на Внимательность при тусклом свете",
        double_speed: "2× Скорость",
        travel_elk: "путешествия для вас и 10 ваших спутников в пределах 60ф",
        on_dodging_in_rage_bear: "на уворот союзников рядом от атак врагов, видящих вас, при Ярости",
        flight: "полет",
        as_walking_speed_in_rage: "по скорости равный скорости передвижения, при Ярости",
        on_thieves_tools: "к использованию воровских инструментов",

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

    terami:"терами",
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
    Brown: "коричневый",

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
    Lazulite: "лазуритовый",
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
    action: "основное действие",
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
    till_dissipate: "пока не рассеется",

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

    saving_target: "испытание",
    aim_bonus: "меткость",
    aim_range: "дальность",

    additional_m: "дополнительно",
    
    spell_thaumaturgy: spells.thaumaturgy,
    spell_thaumaturgy_details: spells.thaumaturgy_details,
    spell_thaumaturgy_expanded: spells.thaumaturgy_expanded,

    spell_hellish_rebuke: spells.hellish_rebuke,
    spell_hellish_rebuke_details: spells.hellish_rebuke_details,
    spell_hellish_rebuke_expanded: spells.hellish_rebuke_expanded,
    spell_hellish_rebuke_tiefling: spells.hellish_rebuke_tiefling,
    spell_hellish_rebuke_tiefling_details: spells.hellish_rebuke_tiefling_details,
    spell_hellish_rebuke_tiefling_expanded: spells.hellish_rebuke_tiefling_expanded,

    spell_darkness: spells.darkness,
    spell_darkness_tiefling: spells.darkness_tiefling,
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

    spell_enlargement_self: spells.enlargement_self,
    spell_enlargement_self_details: spells.enlargement_self_details,
    spell_enlargement_self_expanded: spells.enlargement_self_expanded,

    spell_invisibility_self: spells.invisibility_self,
    spell_invisibility_self_details: spells.invisibility_self_details,
    spell_invisibility_self_expanded: spells.invisibility_self_expanded,

    spell_dancing_lights: spells.dancing_lights,
    spell_dancing_lights_details: spells.dancing_lights_details,
    spell_dancing_lights_expanded: spells.dancing_lights_expanded,

    spell_faerie_fire: spells.faerie_fire,
    spell_faerie_fire_1: spells.faerie_fire_1,
    spell_faerie_fire_details: spells.faerie_fire_details,
    spell_faerie_fire_expanded: spells.faerie_fire_expanded,

    spell_poison_breath: spells.poison_breath,
    spell_acid_breath: spells.acid_breath,
    spell_electricity_breath: spells.electricity_breath,
    spell_cold_breath: spells.cold_breath,
    spell_fire_breath: spells.fire_breath,
    spell_fire_breath_cone: spells.fire_breath_cone,
    spell_fire_breath_line: spells.fire_breath_line,
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
    spell_speak_with_animals_ritual: spells.speak_with_animals_ritual,
    spell_speak_with_animals_details: spells.speak_with_animals_details,
    spell_speak_with_animals_expanded: spells.speak_with_animals_expanded,

    spell_commune_with_nature: spells.commune_with_nature,
    spell_commune_with_nature_ritual: spells.commune_with_nature_ritual,
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
    backpack_details: "Вместимость: 1 кубический фут / 15 кг. Вы также можете привязывать такие предметы как спальники и веревки снаружи рюкзака.",

    bedroll: "спальник",
    bedroll_details: "Используется для длительного и короткого отдыха.",

    mess_kit: "столовый набор",
    mess_kit_details: "В этой небольшой коробке находится чашка и простые столовые приборы. Коробка раскрывается, и одна сторона может использоваться как сковорода, а другая — как тарелка или неглубокая миска.",

    tinderbox: "трутница",
    tinderbox_details: "В этом небольшом контейнере находится кремень, кресало и трут (обычно это сухая тряпка, вымоченная в масле), используемые для разжигания огня. Использование его для разжигания факела — или чего-нибудь другого, легковоспламеняющегося — требует одного действия. Разжигание другого огня требует 1 минуты.",

    torch: "факел",
    torch_details: "Факел горит 1 час, испуская яркий свет в пределах 20 футов и тусклый свет в пределах еще 20 футов. Если вы совершаете рукопашную атаку горящим факелом и попадаете, он причиняет урон огнем 1.",

    ration: "дневной рацион",
    ration_details: "Рационы состоят из обезвоженной пищи, подходящей для путешествий, включая вяленое мясо, сухофрукты, галеты и орехи.",

    waterskin: "бурдюк",
    waterskin_details: "Вместимость: 2 литра",

    hempen_rope: "пеньковая веревка 50ф",
    hempen_rope_details: "сделана из пеньки или шелка. У нее 2 HP, и ее можно порвать Испытанием Силы сложностью 17.",

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

    // 19 Oct

    on_choice: "на выбор",

    feat_actor: "Артистичный",
    feat_actor_details: "Вы научились театральному искусству и подражанию.",

    performace_deception_acting: "на Выступление и Обман, когда вы пытаетесь выдать себя за кого-то другого",
    mimicing: "подражание",
    other_creature_sound_1min: "речи и звукам, издаваемым другими существами, услышанными не менее 1 минуты",

    feat_example: "пример",
    feat_example_details: "примерный пример",

    equipment: "снаряжение",
    
    ranged_fight: "дальний бой",
    melee_fight: "ближний бой",

    quiver: "колчан",
    quiver_details: "контейнер для стрел. Помещается 20 стрел.",

    arrow_details: "снаряд для лука",

    burglars_pack: "набор взломщика",
    burglars_pack_details: "В наборе взломщика содержится множество важных профессиональных инструментов для взлома замков и предупреждения о патруле.",

    metal_ball_1000: "шарики × 1000",
    metal_ball_1000_details: "вы можете действием рассыпать из мешкочка крохотные металлические шарики, покрыв площадь 10 × 10 футов. Существа, перемещающиеся по этой области, должны преуспеть в Испытании Ловкости со Сложностью 10, иначе они падают ничком. Существо, перемещающееся по этой области с уменьшенной вдвое скоростью, не обязано совершать спасбросок.",

    fishing_line: "леска 10ф",
    fishing_line_details: "шелковая леска",

    bell: "колокольчик",
    bell_details: "небольшой и звонкий колокольчик с колечком вверху",

    candle: "свеча",
    candle_details: "В течение 1 часа свеча испускает яркий свет в пределах радиуса 5 футов и тусклый свет в пределах еще 5 футов.",

    crowbar: "ломик",
    crowbar_details: "использование ломика позволяет совершать проверки Силы с преимуществом, если рычаг должен помочь.",

    item_hammer: "молоток",
    item_hammer_details: "ну молоток обычный",

    item_piton: "колышек",
    item_piton_details: "может быть использован для расклинивания чего-либо.",

    hooded_lantern: "закрытый фонарь",
    hooded_lantern_details: "Испускает яркий свет в пределах 30 футов и тусклый свет в пределах еще 30 футов. Зажженный фонарь горит 6 часов от одной фляги (1 пинта [0,5 литра]) масла. Вы можете действием опустить козырек, уменьшив освещение до тусклого света в пределах 5 футов.",
    
    oil_flask: "Фляга с маслом",
    oil_flask_details: 'Обычно масло продается в глиняных флягах по 1 пинте (0,5 литра). Вы можете действием облить маслом из фляги существо, находящееся в пределах 5 футов, или кинуть ее на 20 футов, ломая при ударе.\n\n'+

    'Совершите дальнобойную атаку по целевому существу или предмету, считая масло импровизированным оружием. При попадании цель покрывается маслом. Если цель получает урон огнем, пока масло не высохло (1 минута), она получает дополнительный урон огнем 5 от горящего масла.\n\n'+
    
    'Вы можете также вылить фляжку масла на землю, покрыв площадь 5 × 5 футов, при условии, что пол ровный. Если теперь масло поджечь, оно горит 2 раунда и причиняет урон огнем 5 всем существам, входящим в эту область или оканчивающим в ней ход. Существо может получить этот урон только один раз за ход.',

    dungeoneers_pack: "набор исследователя подземелий",
    dungeoneers_pack_details: "Cодержит основное снаряжение для погружения в темноту в поисках сокровищ.",

    armor_leather: "кожаный доспех",
    armor_leather_details: "Нагрудник и плечи этого доспеха изготовлены из кожи, вываренной в масле. Остальные части доспеха сделаны из более мягких и гибких материалов.",

    small_rasp: "небольшой напильник",
    small_rasp_details: "",

    lockpick_set: "набор отмычек",
    lockpick_set_details: "",

    small_mirror: "зеркальце на ручке",
    small_mirror_details: "",

    scissors: "ножницы",
    scissors_details: "",

    tweezers: "щипчики",
    tweezers_details: "",

    thieves_pack: "воровские инструменты",
    thieves_pack_details: "Владение этими инструментами позволяет добавлять бонус мастерства ко всем проверкам характеристик, сделанным для отключения ловушек и взлома замков.",

    spell_sneaky_attack: spells.sneaky_attack,
    spell_sneaky_attack_details: spells.sneaky_attack_details,
    spell_sneaky_attack_expanded: spells.sneaky_attack_expanded,

    spell_cunning_action: spells.cunning_action,
    spell_cunning_action_details: spells.cunning_action_details,
    spell_cunning_action_expanded: spells.cunning_action_expanded,

    spell_steady_aim: spells.steady_aim,
    spell_steady_aim_details: spells.steady_aim_details,
    spell_steady_aim_expanded: spells.steady_aim_expanded,

    spell_uncanny_dodge: spells.uncanny_dodge,
    spell_uncanny_dodge_details: spells.uncanny_dodge_details,
    spell_uncanny_dodge_expanded: spells.uncanny_dodge_expanded,

    spell_fast_hands: spells.fast_hands,
    spell_fast_hands_details: spells.fast_hands_details,
    spell_fast_hands_expanded: spells.fast_hands_expanded,

    spell_fake_identity: spells.fake_identity,
    spell_fake_identity_details: spells.fake_identity_details,
    spell_fake_identity_expanded: spells.fake_identity_expanded,

    spell_fake_presence: spells.fake_presence,
    spell_fake_presence_details: spells.fake_presence_details,
    spell_fake_presence_expanded: spells.fake_presence_expanded,

    fine_dodge: "увертливость",
    from_aoe_effects: "от зональных эффектов с Испытанием Ловкости",

    min_10: "Минимум 10",
    on_dice_mastery_skill: "на d20 при проверке навыков и характеристик с мастерством",

    always_hear: "всегда слышно",
    invisible_creatures_10f: "всех скрытых и невидимых существ в пределах 10ф от себя",

    no_advantage: "нет преимущества",
    on_attacks_on_you: "на любые атаки по вам, если вы дееспособны",

    min_20: "Минимум 20",
    on_dice_d20: "на d20, но без крита если это бросок атаки. Один раз. Восстанавливается после короткого отдыха",

    thief: classes.thief,
    thief_details: classes.thief_details,
    assasin: classes.assasin,
    assasin_details: classes.assasin_details,

    climbing: "лазание",
    without_speed_fee: "без штрафа скорости",

    dex_bonus: "бонус Ловкости",
    on_size_jumps: "на прыжки с разбега",

    an_ability: "способность",
    to_use_magic_items: "использовать любые магические предметы и свитки",

    bonus_move: "Бонусный полный ход",
    in_first_round: "на первом раунде боя (с -10 Инициативы)",

    tool_disguise: "гримировальные",
    tool_poisoner: "отравителя",

    on_not_moved: "на атаки по существам, еще не сделавшим ход в этом раунде",

    double_damage: "2× урон",
    on_sudden_attack: "по существам, захваченным врасплох, и не ходившим в текущем бою",
    on_sudden_attack_extra: "по существам, захваченным врасплох, если они провалили Испытание Телосложения",

    days: "дней",
    hours: "часов",

    gold_25: "25 🟡",

    spell_acid_splash: spells.acid_splash,
    spell_acid_splash_details: spells.acid_splash_details,
    spell_acid_splash_expanded: spells.acid_splash_expanded,

    spell_mage_hand: spells.mage_hand,
    spell_mage_hand_details: spells.mage_hand_details,
    spell_mage_hand_expanded: spells.mage_hand_expanded,

    spell_friends: spells.friends,
    spell_friends_details: spells.friends_details,
    spell_friends_expanded: spells.friends_expanded,

    spell_shillelagh: spells.shillelagh,
    spell_shillelagh_details: spells.shillelagh_details,
    spell_shillelagh_expanded: spells.shillelagh_expanded,

    material_shillelagh: "дубинка или посох",
    new_w: "новый",

    spell_blade_ward: spells.blade_ward,
    spell_blade_ward_details: spells.blade_ward_details,
    spell_blade_ward_expanded: spells.blade_ward_expanded,

    spell_vicious_mockery: spells.vicious_mockery,
    spell_vicious_mockery_details: spells.vicious_mockery_details,
    spell_vicious_mockery_expanded: spells.vicious_mockery_expanded,

    spell_druidcraft: spells.druidcraft,
    spell_druidcraft_details: spells.druidcraft_details,
    spell_druidcraft_expanded: spells.druidcraft_expanded,

    spell_chill_touch: spells.chill_touch,
    spell_chill_touch_details: spells.chill_touch_details,
    spell_chill_touch_expanded: spells.chill_touch_expanded,

    spell_ray_of_frost: spells.ray_of_frost,
    spell_ray_of_frost_details: spells.ray_of_frost_details,
    spell_ray_of_frost_expanded: spells.ray_of_frost_expanded,

    spell_true_strike: spells.true_strike,
    spell_true_strike_details: spells.true_strike_details,
    spell_true_strike_expanded: spells.true_strike_expanded,

    rounda: "раунда",

    spell_eldritch_blast: spells.eldritch_blast,
    spell_eldritch_blast_details: spells.eldritch_blast_details,
    spell_eldritch_blast_expanded: spells.eldritch_blast_expanded,

    spell_fire_bolt: spells.fire_bolt,
    spell_fire_bolt_details: spells.fire_bolt_details,
    spell_fire_bolt_expanded: spells.fire_bolt_expanded,

    spell_mending: spells.mending,
    spell_mending_details: spells.mending_details,
    spell_mending_expanded: spells.mending_expanded,

    spell_light: spells.light,
    spell_light_details: spells.light_details,
    spell_light_expanded: spells.light_expanded,

    spell_sacred_flame: spells.sacred_flame,
    spell_sacred_flame_details: spells.sacred_flame_details,
    spell_sacred_flame_expanded: spells.sacred_flame_expanded,

    spell_message: spells.message,
    spell_message_details: spells.message_details,
    spell_message_expanded: spells.message_expanded,

    spell_resistance: spells.resistance,
    spell_resistance_details: spells.resistance_details,
    spell_resistance_expanded: spells.resistance_expanded,

    dice_throw: "бросок",

    spell_produce_flame: spells.produce_flame,
    spell_produce_flame_details: spells.produce_flame_details,
    spell_produce_flame_expanded: spells.produce_flame_expanded,

    spell_thorn_whip: spells.thorn_whip,
    spell_thorn_whip_details: spells.thorn_whip_details,
    spell_thorn_whip_expanded: spells.thorn_whip_expanded,

    spell_guidance: spells.guidance,
    spell_guidance_details: spells.guidance_details,
    spell_guidance_expanded: spells.guidance_expanded,

    spell_spare_the_dying: spells.spare_the_dying,
    spell_spare_the_dying_details: spells.spare_the_dying_details,
    spell_spare_the_dying_expanded: spells.spare_the_dying_expanded,

    spell_prestidigitation: spells.prestidigitation,
    spell_prestidigitation_details: spells.prestidigitation_details,
    spell_prestidigitation_expanded: spells.prestidigitation_expanded,

    spell_shocking_grasp: spells.shocking_grasp,
    spell_shocking_grasp_details: spells.shocking_grasp_details,
    spell_shocking_grasp_expanded: spells.shocking_grasp_expanded,

    spell_poison_spray: spells.poison_spray,
    spell_poison_spray_details: spells.poison_spray_details,
    spell_poison_spray_expanded: spells.poison_spray_expanded,

    spell_silent_image: spells.silent_image,
    spell_silent_image_details: spells.silent_image_details,
    spell_silent_image_expanded: spells.silent_image_expanded,

    spell_bless: spells.bless,
    spell_bless_details: spells.bless_details,
    spell_bless_expanded: spells.bless_expanded,

    spell_divine_favor: spells.divine_favor,
    spell_divine_favor_details: spells.divine_favor_details,
    spell_divine_favor_expanded: spells.divine_favor_expanded,

    spell_witch_bolt: spells.witch_bolt,
    spell_witch_bolt_details: spells.witch_bolt_details,
    spell_witch_bolt_expanded: spells.witch_bolt_expanded,

    spell_thunderwave: spells.thunderwave,
    spell_thunderwave_details: spells.thunderwave_details,
    spell_thunderwave_expanded: spells.thunderwave_expanded,

    spell_magic_missile: spells.magic_missile,
    spell_magic_missile_details: spells.magic_missile_details,
    spell_magic_missile_expanded: spells.magic_missile_expanded,

    spell_compelled_duel: spells.compelled_duel,
    spell_compelled_duel_details: spells.compelled_duel_details,
    spell_compelled_duel_expanded: spells.compelled_duel_expanded,

    temporary: "временное",

    spell_heroism: spells.heroism,
    spell_heroism_details: spells.heroism_details,
    spell_heroism_expanded: spells.heroism_expanded,

    spell_wrathful_smite: spells.wrathful_smite,
    spell_wrathful_smite_details: spells.wrathful_smite_details,
    spell_wrathful_smite_expanded: spells.wrathful_smite_expanded,

    spell_hail_of_thorns: spells.hail_of_thorns,
    spell_hail_of_thorns_details: spells.hail_of_thorns_details,
    spell_hail_of_thorns_expanded: spells.hail_of_thorns_expanded,

    spell_thunderous_smite: spells.thunderous_smite,
    spell_thunderous_smite_details: spells.thunderous_smite_details,
    spell_thunderous_smite_expanded: spells.thunderous_smite_expanded,

    spell_dissonant_whispers: spells.dissonant_whispers,
    spell_dissonant_whispers_details: spells.dissonant_whispers_details,
    spell_dissonant_whispers_expanded: spells.dissonant_whispers_expanded,

    spell_armor_of_agathys: spells.armor_of_agathys,
    spell_armor_of_agathys_details: spells.armor_of_agathys_details,
    spell_armor_of_agathys_expanded: spells.armor_of_agathys_expanded,

    spell_mage_armor: spells.mage_armor,
    spell_mage_armor_details: spells.mage_armor_details,
    spell_mage_armor_expanded: spells.mage_armor_expanded,

    spell_animal_friendship: spells.animal_friendship,
    spell_animal_friendship_details: spells.animal_friendship_details,
    spell_animal_friendship_expanded: spells.animal_friendship_expanded,

    targets_number: "целей",

    spell_protection_from_evil_and_good: spells.protection_from_evil_and_good,
    spell_protection_from_evil_and_good_details: spells.protection_from_evil_and_good_details,
    spell_protection_from_evil_and_good_expanded: spells.protection_from_evil_and_good_expanded,

    spell_healing_word: spells.healing_word,
    spell_healing_word_details: spells.healing_word_details,
    spell_healing_word_expanded: spells.healing_word_expanded,

    spell_cure_wounds: spells.cure_wounds,
    spell_cure_wounds_details: spells.cure_wounds_details,
    spell_cure_wounds_expanded: spells.cure_wounds_expanded,

    spell_ray_of_sickness: spells.ray_of_sickness,
    spell_ray_of_sickness_details: spells.ray_of_sickness_details,
    spell_ray_of_sickness_expanded: spells.ray_of_sickness_expanded,

    spell_disguise_self: spells.disguise_self,
    spell_disguise_self_details: spells.disguise_self_details,
    spell_disguise_self_expanded: spells.disguise_self_expanded,

    spell_hunters_mark: spells.hunters_mark,
    spell_hunters_mark_details: spells.hunters_mark_details,
    spell_hunters_mark_expanded: spells.hunters_mark_expanded,

    spell_inflict_wounds: spells.inflict_wounds,
    spell_inflict_wounds_details: spells.inflict_wounds_details,
    spell_inflict_wounds_expanded: spells.inflict_wounds_expanded,

    spell_guiding_bolt: spells.guiding_bolt,
    spell_guiding_bolt_details: spells.guiding_bolt_details,
    spell_guiding_bolt_expanded: spells.guiding_bolt_expanded,

    material_ink_10gold: "чернила за минимум 10 🟡",

    spell_illusory_script: spells.illusory_script,
    spell_illusory_script_details: spells.illusory_script_details,
    spell_illusory_script_expanded: spells.illusory_script_expanded,

    spell_unseen_servant: spells.unseen_servant,
    spell_unseen_servant_details: spells.unseen_servant_details,
    spell_unseen_servant_expanded: spells.unseen_servant_expanded,

    spell_detect_poison_and_disease: spells.detect_poison_and_disease,
    spell_detect_poison_and_disease_details: spells.detect_poison_and_disease_details,
    spell_detect_poison_and_disease_expanded: spells.detect_poison_and_disease_expanded,

    spell_detect_evil_and_good: spells.detect_evil_and_good,
    spell_detect_evil_and_good_details: spells.detect_evil_and_good_details,
    spell_detect_evil_and_good_expanded: spells.detect_evil_and_good_expanded,

    spell_detect_magic: spells.detect_magic,
    spell_detect_magic_details: spells.detect_magic_details,
    spell_detect_magic_expanded: spells.detect_magic_expanded,

    material_pearl_100gold: "жемчужина за минимум 100 🟡",

    spell_burning_hands: spells.burning_hands,
    spell_burning_hands_details: spells.burning_hands_details,
    spell_burning_hands_expanded: spells.burning_hands_expanded,

    spell_identify: spells.identify,
    spell_identify_details: spells.identify_details,
    spell_identify_expanded: spells.identify_expanded,

    square: "квадрат",

    spell_entangle: spells.entangle,
    spell_entangle_details: spells.entangle_details,
    spell_entangle_expanded: spells.entangle_expanded,

    spell_ensnaring_strike: spells.ensnaring_strike,
    spell_ensnaring_strike_details: spells.ensnaring_strike_details,
    spell_ensnaring_strike_expanded: spells.ensnaring_strike_expanded,

    spell_charm_person: spells.charm_person,
    spell_charm_person_details: spells.charm_person_details,
    spell_charm_person_expanded: spells.charm_person_expanded,

    spell_purify_food_and_drink: spells.purify_food_and_drink,
    spell_purify_food_and_drink_details: spells.purify_food_and_drink_details,
    spell_purify_food_and_drink_expanded: spells.purify_food_and_drink_expanded,

    spell_feather_fell: spells.feather_fell,
    spell_feather_fell_details: spells.feather_fell_details,
    spell_feather_fell_expanded: spells.feather_fell_expanded,

    spell_searing_smite: spells.searing_smite,
    spell_searing_smite_details: spells.searing_smite_details,
    spell_searing_smite_expanded: spells.searing_smite_expanded,

    material_familiar_10gold:"уголь + благовония + жаровня за 10 🟡",

    spell_find_familiar: spells.find_familiar,
    spell_find_familiar_details: spells.find_familiar_details,
    spell_find_familiar_expanded: spells.find_familiar_expanded,

    spell_comprehend_languages: spells.comprehend_languages,
    spell_comprehend_languages_details: spells.comprehend_languages_details,
    spell_comprehend_languages_expanded: spells.comprehend_languages_expanded,

    spell_bane: spells.bane,
    spell_bane_details: spells.bane_details,
    spell_bane_expanded: spells.bane_expanded,

    spell_expeditious_retreat: spells.expeditious_retreat,
    spell_expeditious_retreat_details: spells.expeditious_retreat_details,
    spell_expeditious_retreat_expanded: spells.expeditious_retreat_expanded,

    spell_command: spells.command,
    spell_command_details: spells.command_details,
    spell_command_expanded: spells.command_expanded,

    spell_jump: spells.jump,
    spell_jump_details: spells.jump_details,
    spell_jump_expanded: spells.jump_expanded,

    spell_false_life: spells.false_life,
    spell_false_life_details: spells.false_life_details,
    spell_false_life_expanded: spells.false_life_expanded,

    spell_arms_of_hadar: spells.arms_of_hadar,
    spell_arms_of_hadar_details: spells.arms_of_hadar_details,
    spell_arms_of_hadar_expanded: spells.arms_of_hadar_expanded,

    sum_w:"суммарное",

    spell_color_spray: spells.color_spray,
    spell_color_spray_details: spells.color_spray_details,
    spell_color_spray_expanded: spells.color_spray_expanded,

    spell_hex: spells.hex,
    spell_hex_details: spells.hex_details,
    spell_hex_expanded: spells.hex_expanded,

    spell_alarm: spells.alarm,
    spell_alarm_details: spells.alarm_details,
    spell_alarm_expanded: spells.alarm_expanded,

    spell_grease: spells.grease,
    spell_grease_details: spells.grease_details,
    spell_grease_expanded: spells.grease_expanded,

    liters_number:"литров воды",

    spell_tensers_floating_disk: spells.tensers_floating_disk,
    spell_tensers_floating_disk_details: spells.tensers_floating_disk_details,
    spell_tensers_floating_disk_expanded: spells.tensers_floating_disk_expanded,

    spell_fog_cloud: spells.fog_cloud,
    spell_fog_cloud_details: spells.fog_cloud_details,
    spell_fog_cloud_expanded: spells.fog_cloud_expanded,

    spell_sanctuary: spells.sanctuary,
    spell_sanctuary_details: spells.sanctuary_details,
    spell_sanctuary_expanded: spells.sanctuary_expanded,

    spell_sleep: spells.sleep,
    spell_sleep_details: spells.sleep_details,
    spell_sleep_expanded: spells.sleep_expanded,

    material_diamond_50gold:"алмаз за минимум 50 🟡",

    spell_chromatic_orb: spells.chromatic_orb,
    spell_chromatic_orb_details: spells.chromatic_orb_details,
    spell_chromatic_orb_expanded: spells.chromatic_orb_expanded,

    spell_goodberry: spells.goodberry,
    spell_goodberry_details: spells.goodberry_details,
    spell_goodberry_expanded: spells.goodberry_expanded,

    spell_shield: spells.shield,
    spell_shield_details: spells.shield_details,
    spell_shield_expanded: spells.shield_expanded,

    spell_shield_of_faith: spells.shield_of_faith,
    spell_shield_of_faith_details: spells.shield_of_faith_details,
    spell_shield_of_faith_expanded: spells.shield_of_faith_expanded,

    spell_pass_without_trace: spells.pass_without_trace,
    spell_pass_without_trace_details: spells.pass_without_trace_details,
    spell_pass_without_trace_expanded: spells.pass_without_trace_expanded,

    spell_spiritual_weapon: spells.spiritual_weapon,
    spell_spiritual_weapon_details: spells.spiritual_weapon_details,
    spell_spiritual_weapon_expanded: spells.spiritual_weapon_expanded,

    material_flave_ruby_50gold: "порошок рубина за 50 🟡 ( расходуемый заклинанием )",

    spell_continual_flame: spells.continual_flame,
    spell_continual_flame_details: spells.continual_flame_details,
    spell_continual_flame_expanded: spells.continual_flame_expanded,

    spell_see_invisibility: spells.see_invisibility,
    spell_see_invisibility_details: spells.see_invisibility_details,
    spell_see_invisibility_expanded: spells.see_invisibility_expanded,

    spell_suggestion: spells.suggestion,
    spell_suggestion_details: spells.suggestion_details,
    spell_suggestion_expanded: spells.suggestion_expanded,

    material_magic_mouth_50gold: "Кусочек медовых сот и порошок нефрита за минимум 10 🟡 (расходуемые заклинанием)",

    spell_magic_mouth: spells.magic_mouth,
    spell_magic_mouth_details: spells.magic_mouth_details,
    spell_magic_mouth_expanded: spells.magic_mouth_expanded,

    material_golden_dust_25gold: "Золотая пыль за минимум 25 🟡 (расходуемая заклинанием)",

    spell_arcane_lock: spells.arcane_lock,
    spell_arcane_lock_details: spells.arcane_lock_details,
    spell_arcane_lock_expanded: spells.arcane_lock_expanded,

    spell_phantasmal_force: spells.phantasmal_force,
    spell_phantasmal_force_details: spells.phantasmal_force_details,
    spell_phantasmal_force_expanded: spells.phantasmal_force_expanded,

    material_augury_25gold: "Особые палочки, костяшки или фигурки с отметинами за минимум 25 🟡",

    spell_augury: spells.augury,
    spell_augury_details: spells.augury_details,
    spell_augury_expanded: spells.augury_expanded,

    spell_blindness_deafness: spells.blindness_deafness,
    spell_blindness_deafness_details: spells.blindness_deafness_details,
    spell_blindness_deafness_expanded: spells.blindness_deafness_expanded,

    spell_flame_blade: spells.flame_blade,
    spell_flame_blade_details: spells.flame_blade_details,
    spell_flame_blade_expanded: spells.flame_blade_expanded,

    spell_shatter: spells.shatter,
    spell_shatter_details: spells.shatter_details,
    spell_shatter_expanded: spells.shatter_expanded,

    spell_barkskin: spells.barkskin,
    spell_barkskin_details: spells.barkskin_details,
    spell_barkskin_expanded: spells.barkskin_expanded,

    bullets: "снаряды",

    spell_cordon_of_arrows: spells.cordon_of_arrows,
    spell_cordon_of_arrows_details: spells.cordon_of_arrows_details,
    spell_cordon_of_arrows_expanded: spells.cordon_of_arrows_expanded,

    spell_protection_from_poison: spells.protection_from_poison,
    spell_protection_from_poison_details: spells.protection_from_poison_details,
    spell_protection_from_poison_expanded: spells.protection_from_poison_expanded,

    spell_branding_smite: spells.branding_smite,
    spell_branding_smite_details: spells.branding_smite_details,
    spell_branding_smite_expanded: spells.branding_smite_expanded,

    spell_levitate: spells.levitate,
    spell_levitate_details: spells.levitate_details,
    spell_levitate_expanded: spells.levitate_expanded,

    spell_moonbeam: spells.moonbeam,
    spell_moonbeam_details: spells.moonbeam_details,
    spell_moonbeam_expanded: spells.moonbeam_expanded,

    spell_ray_of_enfeeblement: spells.ray_of_enfeeblement,
    spell_ray_of_enfeeblement_details: spells.ray_of_enfeeblement_details,
    spell_ray_of_enfeeblement_expanded: spells.ray_of_enfeeblement_expanded,

    spell_magic_weapon: spells.magic_weapon,
    spell_magic_weapon_details: spells.magic_weapon_details,
    spell_magic_weapon_expanded: spells.magic_weapon_expanded,

    spell_lesser_restoration: spells.lesser_restoration,
    spell_lesser_restoration_details: spells.lesser_restoration_details,
    spell_lesser_restoration_expanded: spells.lesser_restoration_expanded,

    spell_melfs_acid_arrow: spells.melfs_acid_arrow,
    spell_melfs_acid_arrow_details: spells.melfs_acid_arrow_details,
    spell_melfs_acid_arrow_expanded: spells.melfs_acid_arrow_expanded,

    spell_prayer_of_healing: spells.prayer_of_healing,
    spell_prayer_of_healing_details: spells.prayer_of_healing_details,
    spell_prayer_of_healing_expanded: spells.prayer_of_healing_expanded,

    spell_invisibility: spells.invisibility,
    spell_invisibility_details: spells.invisibility_details,
    spell_invisibility_expanded: spells.invisibility_expanded,

    spell_gentle_repose: spells.gentle_repose,
    spell_gentle_repose_details: spells.gentle_repose_details,
    spell_gentle_repose_expanded: spells.gentle_repose_expanded,

    spell_nystuls_magic_aura: spells.nystuls_magic_aura,
    spell_nystuls_magic_aura_details: spells.nystuls_magic_aura_details,
    spell_nystuls_magic_aura_expanded: spells.nystuls_magic_aura_expanded,

    spell_cloud_of_daggers: spells.cloud_of_daggers,
    spell_cloud_of_daggers_details: spells.cloud_of_daggers_details,
    spell_cloud_of_daggers_expanded: spells.cloud_of_daggers_expanded,

    spell_zone_of_truth: spells.zone_of_truth,
    spell_zone_of_truth_details: spells.zone_of_truth_details,
    spell_zone_of_truth_expanded: spells.zone_of_truth_expanded,

    spell_detect_thoughts: spells.detect_thoughts,
    spell_detect_thoughts_details: spells.detect_thoughts_details,
    spell_detect_thoughts_expanded: spells.detect_thoughts_expanded,

    spell_knock: spells.knock,
    spell_knock_details: spells.knock_details,
    spell_knock_expanded: spells.knock_expanded,

    spell_mirror_image: spells.mirror_image,
    spell_mirror_image_details: spells.mirror_image_details,
    spell_mirror_image_expanded: spells.mirror_image_expanded,

    material_warding_bond_50gold: "Пара платиновых колец за минимум 50 🟡",
    bonus: "бонус",

    spell_warding_bond: spells.warding_bond,
    spell_warding_bond_details: spells.warding_bond_details,
    spell_warding_bond_expanded: spells.warding_bond_expanded,

    spell_scorching_ray: spells.scorching_ray,
    spell_scorching_ray_details: spells.scorching_ray_details,
    spell_scorching_ray_expanded: spells.scorching_ray_expanded,

    spell_spider_climb: spells.spider_climb,
    spell_spider_climb_details: spells.spider_climb_details,
    spell_spider_climb_expanded: spells.spider_climb_expanded,

    spell_web: spells.web,
    spell_web_details: spells.web_details,
    spell_web_expanded: spells.web_expanded,

    spell_aid: spells.aid,
    spell_aid_details: spells.aid_details,
    spell_aid_expanded: spells.aid_expanded,

    spell_locate_animals_or_plants: spells.locate_animals_or_plants,
    spell_locate_animals_or_plants_details: spells.locate_animals_or_plants_details,
    spell_locate_animals_or_plants_expanded: spells.locate_animals_or_plants_expanded,

    spell_find_traps: spells.find_traps,
    spell_find_traps_details: spells.find_traps_details,
    spell_find_traps_expanded: spells.find_traps_expanded,

    spell_locate_object: spells.locate_object,
    spell_locate_object_details: spells.locate_object_details,
    spell_locate_object_expanded: spells.locate_object_expanded,

    spell_find_steed: spells.find_steed,
    spell_find_steed_details: spells.find_steed_details,
    spell_find_steed_expanded: spells.find_steed_expanded,

    spell_gust_of_wind: spells.gust_of_wind,
    spell_gust_of_wind_details: spells.gust_of_wind_details,
    spell_gust_of_wind_expanded: spells.gust_of_wind_expanded,

    spell_animal_messenger: spells.animal_messenger,
    spell_animal_messenger_details: spells.animal_messenger_details,
    spell_animal_messenger_expanded: spells.animal_messenger_expanded,

    spell_flaming_sphere: spells.flaming_sphere,
    spell_flaming_sphere_details: spells.flaming_sphere_details,
    spell_flaming_sphere_expanded: spells.flaming_sphere_expanded,

    spell_blur: spells.blur,
    spell_blur_details: spells.blur_details,
    spell_blur_expanded: spells.blur_expanded,

    spell_heat_metal: spells.heat_metal,
    spell_heat_metal_details: spells.heat_metal_details,
    spell_heat_metal_expanded: spells.heat_metal_expanded,

    spell_enthrall: spells.enthrall,
    spell_enthrall_details: spells.enthrall_details,
    spell_enthrall_expanded: spells.enthrall_expanded,

    spell_alter_self: spells.alter_self,
    spell_alter_self_details: spells.alter_self_details,
    spell_alter_self_expanded: spells.alter_self_expanded,

    spell_darkvision: spells.darkvision,
    spell_darkvision_details: spells.darkvision_details,
    spell_darkvision_expanded: spells.darkvision_expanded,

    spell_rope_trick: spells.rope_trick,
    spell_rope_trick_details: spells.rope_trick_details,
    spell_rope_trick_expanded: spells.rope_trick_expanded,

    spell_misty_step: spells.misty_step,
    spell_misty_step_details: spells.misty_step_details,
    spell_misty_step_expanded: spells.misty_step_expanded,

    spell_darkness_details: spells.darkness_details,
    spell_darkness_expanded: spells.darkness_expanded,

    spell_enlarge: spells.enlarge,
    spell_enlarge_details: spells.enlarge_details,
    spell_enlarge_expanded: spells.enlarge_expanded,

    spell_hold_person: spells.hold_person,
    spell_hold_person_details: spells.hold_person_details,
    spell_hold_person_expanded: spells.hold_person_expanded,

    spell_enhance_ability: spells.enhance_ability,
    spell_enhance_ability_details: spells.enhance_ability_details,
    spell_enhance_ability_expanded: spells.enhance_ability_expanded,

    spell_calm_emotions: spells.calm_emotions,
    spell_calm_emotions_details: spells.calm_emotions_details,
    spell_calm_emotions_expanded: spells.calm_emotions_expanded,

    spell_spike_growth: spells.spike_growth,
    spell_spike_growth_details: spells.spike_growth_details,
    spell_spike_growth_expanded: spells.spike_growth_expanded,

    rogue: classes.rogue,
    rogue_details: classes.rogue_details,

    paladin: classes.paladin,
    paladin_details: classes.paladin_details,

    oath_of_devotion: classes.oath_of_devotion,
    oath_of_devotion_details: classes.oath_of_devotion_details,

    oath_of_antients: classes.oath_of_antients,
    oath_of_antients_details: classes.oath_of_antients_details,

    oath_of_vengence: classes.oath_of_vengence,
    oath_of_vengence_details: classes.oath_of_vengence_details,

    holy_symbol: "священный символ",
    holy_symbol_details: "Может быть использован как Фокус для заклинаний.",

    priests_pack: "набор священника",
    priests_pack_details: "-",

    armor_shield: "щит",
    armor_shield_details: "Щит изготавливается из дерева или металла, и несется одной рукой. Использование щита увеличивает КД на 2. Вы получаете преимущество только от одного щита одновременно.",

    blanket: "одеяло",
    blanket_details: "-",

    donation_box: "коробка для пожертвований",
    donation_box_details: "-",

    incense: "благовония",
    incense_details: "-",

    censer: "кадило",
    censer_details: "-",

    vestment: "облачение",
    vestment_details: "-",

    spell_divine_sense: spells.divine_sense,
    spell_divine_sense_details: spells.divine_sense_details,
    spell_divine_sense_expanded: spells.divine_sense_expanded,

    stock: "запас",

    spell_lay_on_hands: spells.lay_on_hands,
    spell_lay_on_hands_details: spells.lay_on_hands_details,
    spell_lay_on_hands_expanded: spells.lay_on_hands_expanded,

    battle_style: "боевой стиль",

    style_dueling: "дуэлянт",
    style_protection: "защита",
    style_defence: "оборона",
    style_great_weapon: "большое оружие",
    style_double_weapon: "два оружия",
    style_archery: "стрельба",

    on_attack_signle_one_handed: "+2 на урон ближних атак одной рукой",

    spell_side_pary: spells.side_pary,
    spell_side_pary_details: spells.side_pary_details,
    spell_side_pary_expanded: spells.side_pary_expanded,

    on_armor_if_armor: "+1 на броню при одетых доспехах",

    if_1_or_2_on_two_handed_weapon: "урона двуручного оружия, если выпало 1 или 2",

    on_sick: "к болезням",

    spell_divine_channel_devotion_1: spells.divine_channel_devotion_1,
    spell_divine_channel_devotion_1_details: spells.divine_channel_devotion_1_details,
    spell_divine_channel_devotion_1_expanded: spells.divine_channel_devotion_1_expanded,

    spell_divine_channel_devotion_2: spells.divine_channel_devotion_2,
    spell_divine_channel_devotion_2_details: spells.divine_channel_devotion_2_details,
    spell_divine_channel_devotion_2_expanded: spells.divine_channel_devotion_2_expanded,

    spell_divine_channel_mana: spells.divine_channel_mana,
    spell_divine_channel_mana_details: spells.divine_channel_mana_details,
    spell_divine_channel_mana_expanded: spells.divine_channel_mana_expanded,

    spell_divine_channel_antients_1: spells.divine_channel_antients_1,
    spell_divine_channel_antients_1_details: spells.divine_channel_antients_1_details,
    spell_divine_channel_antients_1_expanded: spells.divine_channel_antients_1_expanded,

    spell_divine_channel_antients_2: spells.divine_channel_antients_2,
    spell_divine_channel_antients_2_details: spells.divine_channel_antients_2_details,
    spell_divine_channel_antients_2_expanded: spells.divine_channel_antients_2_expanded,

    spell_divine_channel_vengence_1: spells.divine_channel_vengence_1,
    spell_divine_channel_vengence_1_details: spells.divine_channel_vengence_1_details,
    spell_divine_channel_vengence_1_expanded: spells.divine_channel_vengence_1_expanded,

    spell_divine_channel_vengence_2: spells.divine_channel_vengence_2,
    spell_divine_channel_vengence_2_details: spells.divine_channel_vengence_2_details,
    spell_divine_channel_vengence_2_expanded: spells.divine_channel_vengence_2_expanded,

    push: "толчок",

    spell_create_or_destroy_water: spells.create_or_destroy_water,
    spell_create_or_destroy_water_details: spells.create_or_destroy_water_details,
    spell_create_or_destroy_water_expanded: spells.create_or_destroy_water_expanded,

    short_run: "короткий разбег",

    feat_athlete: "Атлет",
    feat_athlete_details: "Вы прошли интенсивную физическую подготовку.",

    quicko: "быстрое",
    getting_up: "вставание на ноги",

    feat_alert: "Бдительный",
    feat_alert_details: "Вы всегда готовы к опасностям.",

    on_sudden: "к заставанию врасплох",

    on_stealth: "на атаки из скрытности по вам",

    feat_war_caster: "Боевой заклинатель",
    feat_war_caster_details: "Вы научились накладывать заклинания в пылу сражения и узнали магические техники.",

    on_con_save_while_concentrating: "на Испытания Телосложения при концентрации",

    use_somatic: "Использование Жестов",
    in_taken_hands: "занятыми руками",

    cast_reaction: "Реакция как Каст",
    for_spells_action: "для заклинаний с Кастом Бонусное или Основное действие",

    feat_grappler: "Борец",
    feat_grappler_details: "Вы развили навыки, нужные для тесного захвата противников.",

    on_attack_grapple: "на атаки цели, которую вы держите в захвате",

    restrain: "Опутывание",
    creature_on_addititonal_grapple: "сущетсва при дополнительном захвате",

    feat_lucky: "Везунчик",
    feat_lucky_details: "Вам непонятным образом везет как раз тогда, когда это нужно.",

    advantage_x3: "3 преимущества в день",
    on_any_d20: "на любой бросок d20, даже на вражеский бросок атаки по вам. Использует 1× Ячейку удачи.",

    feat_mounted_combatant: "Верховой боец",
    feat_mounted_combatant_details: "Вы — опасный враг, когда вы верхом на скакуне.",

    on_mounted_attack: "на верховые атаки по существам не верхом и меньше вашего скакуна.",

    redirect_attack: "перенаправить атаку",
    from_mount_on_self: "со скакуна на себя",

    reduce_damage: "уменьшение урона",
    on_mount_save_dex: "скакуну при Испытаниях Ловкости",

    feat_observant: "Внимательный",
    feat_observant_details: "Вы быстро улавливаете мелкие подробности.",

    lips_read: "чтение по губам",
    on_known_languages: "на выученных языках",

    feat_martial_adept: "Воинский адепт",
    feat_martial_adept_details: "Вы прошли военную подготовку, позволяющую совершать особые боевые приемы. Если у вас уже есть Маневры, вы получаете еще один (d8). В противном случае вы получаете один Маневр (d6).",

    plus_1: "+1",

    if_succeed: "при успехе",

    superiority_dice_slots: "Маневры",
    superiority_dice_slots_feat: "Маневры / Воинский адепт",
    superiority_dice_slot: "1× Маневр",
    maneuvers: "маневры",
    maneuver: "маневр",

    divine_sense_slots: "Божественное чувство",
    divine_sense_slot: "1× Божественное чувство",

    divine_channel_slots: "Божественный канал",
    divine_channel_slot: "1× Божественный канал",

    rage_slots: "Ячейки Ярости",
    rage_slot: "1× Ячейка Ярости",

    spell_slots: "Ячейки маны",
    spell_slot: "1× Ячейка маны",

    movement: "перемещение",

    spell_maneuver_ambush: spells.maneuver_ambush,
    spell_maneuver_ambush_details: spells.maneuver_ambush_details,
    spell_maneuver_ambush_expanded: spells.maneuver_ambush_expanded,

    spell_maneuver_evasive_footwork: spells.maneuver_evasive_footwork,
    spell_maneuver_evasive_footwork_details: spells.maneuver_evasive_footwork_details,
    spell_maneuver_evasive_footwork_expanded: spells.maneuver_evasive_footwork_expanded,

    bonus_w_fem: "бонусная",

    spell_maneuver_lunging_attack: spells.maneuver_lunging_attack,
    spell_maneuver_lunging_attack_details: spells.maneuver_lunging_attack_details,
    spell_maneuver_lunging_attack_expanded: spells.maneuver_lunging_attack_expanded,

    spell_maneuver_maneuvering_attack: spells.maneuver_maneuvering_attack,
    spell_maneuver_maneuvering_attack_details: spells.maneuver_maneuvering_attack_details,
    spell_maneuver_maneuvering_attack_expanded: spells.maneuver_maneuvering_attack_expanded,

    spell_maneuver_menacing_attack: spells.maneuver_menacing_attack,
    spell_maneuver_menacing_attack_details: spells.maneuver_menacing_attack_details,
    spell_maneuver_menacing_attack_expanded: spells.maneuver_menacing_attack_expanded,

    spell_maneuver_feinting_attack: spells.maneuver_feinting_attack,
    spell_maneuver_feinting_attack_details: spells.maneuver_feinting_attack_details,
    spell_maneuver_feinting_attack_expanded: spells.maneuver_feinting_attack_expanded,

    spell_maneuver_disarming_attack: spells.maneuver_disarming_attack,
    spell_maneuver_disarming_attack_details: spells.maneuver_disarming_attack_details,
    spell_maneuver_disarming_attack_expanded: spells.maneuver_disarming_attack_expanded,

    spell_maneuver_trip_attack: spells.maneuver_trip_attack,
    spell_maneuver_trip_attack_details: spells.maneuver_trip_attack_details,
    spell_maneuver_trip_attack_expanded: spells.maneuver_trip_attack_expanded,

    spell_maneuver_riposte: spells.maneuver_riposte,
    spell_maneuver_riposte_details: spells.maneuver_riposte_details,
    spell_maneuver_riposte_expanded: spells.maneuver_riposte_expanded,

    reduction_w: "снижение",

    spell_maneuver_parry: spells.maneuver_parry,
    spell_maneuver_parry_details: spells.maneuver_parry_details,
    spell_maneuver_parry_expanded: spells.maneuver_parry_expanded,

    spell_maneuver_goading_attack: spells.maneuver_goading_attack,
    spell_maneuver_goading_attack_details: spells.maneuver_goading_attack_details,
    spell_maneuver_goading_attack_expanded: spells.maneuver_goading_attack_expanded,

    spell_maneuver_rally: spells.maneuver_rally,
    spell_maneuver_rally_details: spells.maneuver_rally_details,
    spell_maneuver_rally_expanded: spells.maneuver_rally_expanded,

    spell_maneuver_pushing_attack: spells.maneuver_pushing_attack,
    spell_maneuver_pushing_attack_details: spells.maneuver_pushing_attack_details,
    spell_maneuver_pushing_attack_expanded: spells.maneuver_pushing_attack_expanded,

    spell_maneuver_precision_attack: spells.maneuver_precision_attack,
    spell_maneuver_precision_attack_details: spells.maneuver_precision_attack_details,
    spell_maneuver_precision_attack_expanded: spells.maneuver_precision_attack_expanded,

    spell_maneuver_commanders_strike: spells.maneuver_commanders_strike,
    spell_maneuver_commanders_strike_details: spells.maneuver_commanders_strike_details,
    spell_maneuver_commanders_strike_expanded: spells.maneuver_commanders_strike_expanded,

    spell_maneuver_sweeping_attack: spells.maneuver_sweeping_attack,
    spell_maneuver_sweeping_attack_details: spells.maneuver_sweeping_attack_details,
    spell_maneuver_sweeping_attack_expanded: spells.maneuver_sweeping_attack_expanded,

    spell_inspiration: spells.inspiration,
    spell_inspiration_details: spells.inspiration_details,
    spell_inspiration_expanded: spells.inspiration_expanded,

    feat_inspiring_leader: "Воодушевляющий лидер",
    feat_inspiring_leader_details: "Вы можете воодушевить спутников, укрепив их решимость.",

    savage_attacker: "Дикий атакующий",
    savage_attacker_details: "Ваши атаки наносят больше урона.",

    of_damage_dice_once_per_move: "урона атаки один раз в ход",

    weapons_improvised: weapons.improvised,
    weapons_improvised_details: weapons.improvised_details,

    spell_grapple: spells.grapple,
    spell_grapple_details: spells.grapple_details,
    spell_grapple_expanded: spells.grapple_expanded,

    feat_lightly_armored: "Знаток легких доспехов",
    feat_lightly_armored_details: "Вы обучились ношению легких доспехов.",

    feat_moderately_armored: "Знаток средних доспехов",
    feat_moderately_armored_details: "Вы обучились ношению средних доспехов.",

    feat_heavily_armored: "Знаток тяжелых доспехов",
    feat_heavily_armored_details: "Вы обучились ношению тяжелых доспехов.",

    feat_dual_wielder: "Боец двумя оружиями",
    feat_dual_wielder_details: "Вы знаете как использовать сразу два оружия.",

    on_armor_if_two_weapons: "+1 к броне при двух ближних оружиях",

    use_of_two_weapons: "Использование двух оружий",
    heavier_than_light: "тяжелее чем легкое",

    quick_take: "Быстроe вынимание",
    of_two_weapons: "и убирание двух оружий одновременно",

    feat_dungeon_delver: "Искатель подземелий",
    feat_dungeon_delver_details: "Вы научилить искать скрытые ловушки и потайные двери в подземельях.",

    on_hidden_doors: "на поиск тайных дверей",
    on_trap_evasion: "на избегание ловушек и эффектов от них",
    on_trap_damage: "урону от ловушек",
    on_passive_perception_on_quick_move: "на пассивную Внимательность при быстром перемещении",

    feat_tough: "Крепкий",
    feat_tough_details: "Вы чувствуете в себе больше жизненных сил c каждым уровнем.",

    feat_healer: "Лекарь",
    feat_healer_details: "Вы способный медик, что позволяет быстро залечивать раны и возвращать союзников в строй.",

    plus_1_to_hp: "Восстановление 1 HP",
    on_use_of_medical_tools: "при исползовании комплекта целителя для стабилизации умирающего",

    spell_healer_tooling: spells.healer_tooling,
    spell_healer_tooling_details: spells.healer_tooling_details,
    spell_healer_tooling_expanded: spells.healer_tooling_expanded,

    healers_tool_slot: "1× Комплект целителя",
    healers_tool: "Комплект целителя",

    feat_great_weapon_master: "Мастер большого оружия",
    feat_great_weapon_master_details: "Вы научились использовать вес своего оружия, позволяя инерции усиливать ваши атаки.",

    feat_polearm_master: "Мастер древкового оружия",
    feat_polearm_master_details: "Вы можете сдерживать врагов оружием со свойством «досягаемость».",

    spell_extra_strike: spells.extra_strike,
    spell_extra_strike_details: spells.extra_strike_details,
    spell_extra_strike_expanded: spells.extra_strike_expanded,

    spell_heavy_strike: spells.heavy_strike,
    spell_heavy_strike_details: spells.heavy_strike_details,
    spell_heavy_strike_expanded: spells.heavy_strike_expanded,

    spell_polearm_strike: spells.polearm_strike,
    spell_polearm_strike_details: spells.polearm_strike_details,
    spell_polearm_strike_expanded: spells.polearm_strike_expanded,

    provoked_attack: "Провоцированная атака",
    on_polearm_reach: "в пределах досягаемости древка",

    feat_weapon_master: "Мастер оружия",
    feat_weapon_master_details: "Вы знаете как пользоваться множеством видов оружия.",

    on_stealth_in_medium_armor: "на Скрытность при надетых средних доспехах",
    on_medium_armor: "+1 на Броню средних доспехов, при Базовой Ловкости 16+",

    feat_medium_armor_master: "Мастер средних доспехов",
    feat_medium_armor_master_details: "Вы привыкли к перемещению в средних доспехах.",

    feat_heavy_armor_master: "Мастер тяжелых доспехов",
    feat_heavy_armor_master_details: "Вы можете своим доспехом отклонять удары, которые других убили бы.",

    damage_reduction: "Снижение механического урона",
    on_3_in_heavy_armor: "на 3 в тяжелых доспехах",

    feat_shield_master: "Мастер щитов",
    feat_shield_master_details: "Вы используете щиты не только для обороны, но и для нападения.",

    spell_shield_push: spells.shield_push,
    spell_shield_push_details: spells.shield_push_details,
    spell_shield_push_expanded: spells.shield_push_expanded,

    on_dex_check_in_shield: "+2 от щита при Испытаниях Ловкости от эффектов, нацеленных только на вас",

    feat_spell_sniper: "Меткий заклинатель",
    feat_spell_sniper_details: "Вы узнали технику, улучшающую атаку некоторыми видами заклинаний.",

    double_range: "2× дальность",
    on_spells_with_aim: "для заклинаний с прицеливанием",

    ignoring: "Игнорирование",
    on_covers_spells: "укрытий на половину и на 3/4, при использовании заклинаний c прицеливанием",

    feat_sharpshooter: "Меткий стрелок",
    feat_sharpshooter_details: "Вы овладели дальнобойным оружием и можете совершать выстрелы, которые другие считали невозможными.",

    on_shots_in_max_distance: "на выстрелы с максимальной дистанции",
    on_covers: "укрытий на половину и на 3/4, при дальнобойных атаках",

    spell_charge_attack: spells.charge_attack,
    spell_charge_attack_details: spells.charge_attack_details,
    spell_charge_attack_expanded: spells.charge_attack_expanded,

    spell_charge_push: spells.charge_push,
    spell_charge_push_details: spells.charge_push_details,
    spell_charge_push_expanded: spells.charge_push_expanded,

    spell_heavy_shot: spells.heavy_shot,
    spell_heavy_shot_details: spells.heavy_shot_details,
    spell_heavy_shot_expanded: spells.heavy_shot_expanded,

    feat_charger: "Налетчик",
    feat_charger_details: "Вы много двигаетесь в бою.",

    mastery_bonus: "Бонуc мастерства",
    on_armor_finesse: "к Броне при Реакции на атаку, если у вас фехтовальное оружие",

    feat_defensive_duelist: "Оборонительный дуэлянт",
    feat_defensive_duelist_details: "Вы мастерски обороняетесь фехтовальным оружием.",

    feat_keen_mind: "Отличная память",
    feat_keen_mind_details: "Вы с невероятной точностью можете отслеживать время, направление и подробности.",

    always: "всегда",
    know_north: "известна сторона света",
    know_time: "известно время рассвета/заката",
    clear_memory: "точные воспоминания",
    about_xp_1month: "о всем прожитом за последний месяц",

    feat_mobile: "Подвижный",
    feat_mobile_details: "Вы невероятно быстры и ловки.",

    on_hard_area_dash: "на Рывок в труднопроходимой местности",

    no_provocation: "нет провокации",
    in_this_move_after_attack: "от существа, которого вы попытались атаковать в этом ходу, ближним оружием",

    feat_magic_initiate_cleric: "Посвящённый в магию жреца",
    feat_magic_initiate_details_cleric: "Вы узнаёте два заклинания жреца, не требующие маны, и одно заклинание, требующее 1 ману (его вы можете использовать без маны, но накладывать его на минимально возможном уровне, и один раз между продолжительными отдыхами).",

    feat_magic_initiate_druid: "Посвящённый в магию друида",
    feat_magic_initiate_details_druid: "Вы узнаёте два заклинания друида, не требующие маны, и одно заклинание, требующее 1 ману (его вы можете использовать без маны, но накладывать его на минимально возможном уровне, и один раз между продолжительными отдыхами).",

    feat_magic_initiate_warlock: "Посвящённый в магию колдуна",
    feat_magic_initiate_details_warlock: "Вы узнаёте два заклинания колдуна, не требующие маны, и одно заклинание, требующее 1 ману (его вы можете использовать без маны, но накладывать его на минимально возможном уровне, и один раз между продолжительными отдыхами).",

    feat_magic_initiate_sorcerer: "Посвящённый в магию чародея",
    feat_magic_initiate_details_sorcerer: "Вы узнаёте два заклинания чародея, не требующие маны, и одно заклинание, требующее 1 ману (его вы можете использовать без маны, но накладывать его на минимально возможном уровне, и один раз между продолжительными отдыхами).",

    feat_magic_initiate_wizard: "Посвящённый в магию волшебника",
    feat_magic_initiate_details_wizard: "Вы узнаёте два заклинания волшебника, не требующие маны, и одно заклинание, требующее 1 ману (его вы можете использовать без маны, но накладывать его на минимально возможном уровне, и один раз между продолжительными отдыхами).",

    feat_magic_initiate_bard: "Посвящённый в магию барда",
    feat_magic_initiate_details_bard: "Вы узнаёте два заклинания барда, не требующие маны, и одно заклинание, требующее 1 ману (его вы можете использовать без маны, но накладывать его на минимально возможном уровне, и один раз между продолжительными отдыхами).",

    spells_0: "заклинания [0]",
    spells_1: "заклинания [1]",

    no_mana_but_once_a_day: "Вы сможете использовать выбранное заклинание без маны, но накладывать его на минимально возможном уровне, и один раз между продолжительными отдыхами.",

    use_no_mana: "использование без маны",
    one_spell_cleric: "одного заклинания жреца (один раз в день)",
    one_spell_druid: "одного заклинания друида (один раз в день)",
    one_spell_warlock: "одного заклинания колдуна (один раз в день)",
    one_spell_sorcerer: "одного заклинания чародея (один раз в день)",
    one_spell_wizard: "одного заклинания волшебника (один раз в день)",
    one_spell_bard: "одного заклинания барда (один раз в день)",

    feat_skulker: "Проныра",
    feat_skulker_details: "Вы знаете, как сливаться с тенями.",

    ability_to_hide: "возможность спрятаться",
    if_small_cover: "даже если слабо заслонены",
    no_reveal: "сохранение скрытности",
    if_missed: "при промахе дальней атакой",
    on_perception_sight: "на Внимательность, основанной на зрении",

    no_mana_but_ritual: "Вы сможете использовать выбранное заклинание без маны, но накладывать его на 10 минут дольше, и держа в руке свою ритуальную книгу.",

    ritual_book: "ритуальная книга",
    ritual_book_details: "",

    spell_learn_ritual: spells.learn_ritual,
    spell_learn_ritual_details: spells.learn_ritual_details,
    spell_learn_ritual_expanded: spells.learn_ritual_expanded,

    spell_learn_spell: spells.learn_spell,
    spell_learn_spell_details: spells.learn_spell_details,
    spell_learn_spell_expanded: spells.learn_spell_expanded,

    hour_per_lvl: "ч / ур",
    gold50_per_lvl: "чернила и др за 50 🟡 / ур",

    feat_ritual_caster_cleric: "Ритуальный заклинатель: жрец",
    feat_ritual_caster_details_cleric: "Вы узнаёте два ритуала жреца. Вы сможете использовать их без маны, но накладывать его на 10 минут дольше, и держа в руке свою ритуальную книгу. Также вы можете изучать другие найденные ритуальные заклинания жреца.",

    feat_ritual_caster_druid: "Ритуальный заклинатель: друид",
    feat_ritual_caster_details_druid: "Вы узнаёте два ритуала друида. Вы сможете использовать их без маны, но накладывать его на 10 минут дольше, и держа в руке свою ритуальную книгу. Также вы можете изучать другие найденные ритуальные заклинания друида.",

    feat_ritual_caster_warlock: "Ритуальный заклинатель: колдун",
    feat_ritual_caster_details_warlock: "Вы узнаёте два ритуала колдуна. Вы сможете использовать их без маны, но накладывать его на 10 минут дольше, и держа в руке свою ритуальную книгу. Также вы можете изучать другие найденные ритуальные заклинания колдуна.",

    feat_ritual_caster_sorcerer: "Ритуальный заклинатель: чародей",
    feat_ritual_caster_details_sorcerer: "Вы узнаёте два ритуала чародея. Вы сможете использовать их без маны, но накладывать его на 10 минут дольше, и держа в руке свою ритуальную книгу. Также вы можете изучать другие найденные ритуальные заклинания чародея.",

    feat_ritual_caster_wizard: "Ритуальный заклинатель: волшебник",
    feat_ritual_caster_details_wizard: "Вы узнаёте два ритуала волшебника. Вы сможете использовать их без маны, но накладывать его на 10 минут дольше, и держа в руке свою ритуальную книгу. Также вы можете изучать другие найденные ритуальные заклинания волшебника.",

    feat_ritual_caster_bard: "Ритуальный заклинатель: бард",
    feat_ritual_caster_details_bard: "Вы узнаёте два ритуала барда. Вы сможете использовать их без маны, но накладывать его на 10 минут дольше, и держа в руке свою ритуальную книгу. Также вы можете изучать другие найденные ритуальные заклинания барда.",

    feat_elemental_adept_sound: "Стихийный адепт 🔊 Звука",
    feat_elemental_adept_sound_details: "Вы уверенно пользуетесь заклинанием определенной стихии.", 
    of_resistanse_sound: "сопротивлению урону 🔊 Звуком",
    two_min: "2 как минимальный результат",
    on_damage_dice_of_sound: "на каждом кубике урона 🔊 Звуком",

    feat_elemental_adept_acid: "Стихийный адепт ⚗️ Кислоты",
    feat_elemental_adept_acid_details: "Вы уверенно пользуетесь заклинанием определенной стихии.", 
    of_resistanse_acid: "сопротивлению урону ⚗️ Кислотой",
    on_damage_dice_of_acid: "на каждом кубике урона ⚗️ Кислотой",

    feat_elemental_adept_fire: "Стихийный адепт 🔥 Огня",
    feat_elemental_adept_fire_details: "Вы уверенно пользуетесь заклинанием определенной стихии.", 
    of_resistanse_fire: "сопротивлению урону 🔥 Огнем",
    on_damage_dice_of_fire: "на каждом кубике урона 🔥 Огнем",

    feat_elemental_adept_cold: "Стихийный адепт ❄️ Холода",
    feat_elemental_adept_cold_details: "Вы уверенно пользуетесь заклинанием определенной стихии.", 
    of_resistanse_cold: "сопротивлению урону ❄️ Холодом",
    on_damage_dice_of_cold: "на каждом кубике урона ❄️ Холодом",

    feat_elemental_adept_electricity: "Стихийный адепт ⚡ Электричества",
    feat_elemental_adept_electricity_details: "Вы уверенно пользуетесь заклинанием определенной стихии.", 
    of_resistanse_electricity: "сопротивлению урону ⚡ Электричеством",
    on_damage_dice_of_electricity: "на каждом кубике урона ⚡ Электричеством",

    double_CON: "2× Телосложение",
    on_regen_min_2: "при регене (минимум 2)",

    feat_durable: "Стойкий",
    feat_durable_details: "Вы очень живучий.",
    
    feat_sentinel: "Страж",
    feat_sentinel_details: "Вы овладели техникой, позволяющей пользоваться всеми брешами в обороне противника.",

    provocation: "Провокация",
    on_disengage: "при выходе из вашей досягаемости, даже при Отходе",
    on_ally_attack: "если атакуют другого рядом с вами",

    stopka: "Остановка",
    creature_affected_provoked_attack: "существа при попадании провоцированной атакой",

    feat_mage_slayer: "Убийца магов",
    feat_mage_slayer_details: "Вы разработали техники, полезные в рукопашном сражении с заклинателями.",

    on_save_spells_near: "на Испытания от заклинаний, наложенных рядом",
    on_concentration_to_attacked_creature: "на концентрацию существа, пораженного вашей атака",
    on_casting_near: "на создающего рядом заклинание",

    feat_resilient_strength: "Устойчивый: Сила",
    feat_resilient_strength_details: "",

    feat_resilient_dexterity: "Устойчивый: Ловкость",
    feat_resilient_dexterity_details: "",

    feat_resilient_constitution: "Устойчивый: Телосложение",
    feat_resilient_constitution_details: "",

    feat_resilient_intelligence: "Устойчивый: Интеллект",
    feat_resilient_intelligence_details: "",

    feat_resilient_wisdom: "Устойчивый: Мудрость",
    feat_resilient_wisdom_details: "",

    feat_resilient_charisma: "Устойчивый: Харизма",
    feat_resilient_charisma_details: "",

    feat_crossbow_expert: "Эксперт в арбалетах",
    feat_crossbow_expert_details: "Вы обладаете обширной практикой с арбалетом.",

    recharge_on_arbalets: "перезарядки на арбалете",
    near_target_arbalet: "на ближнюю цель арбалета",

    spell_crossbow_shot: spells.crossbow_shot,
    spell_crossbow_shot_details: spells.crossbow_shot_details,
    spell_crossbow_shot_expanded: spells.crossbow_shot_expanded,

    feat_linguist: "Языковед",
    feat_linguist_details: "Вы изучали языки и способы кодирования текстов.",

    spell_create_crypt: spells.create_crypt,
    spell_create_crypt_details: spells.create_crypt_details,
    spell_create_crypt_expanded: spells.create_crypt_expanded,

    packs: "наборы",

    chest: "Сундук",
    chest_details: "Контейнер вместимостью 340 л.",

    scroll_tube: "Тубус",
    scroll_tube_details: "Контейнер для свитков или карт.",

    fine_clothes: "Дорогая одежда",
    fine_clothes_details: "Изысканный наряд из дорогих материалов, который даже может быть украшен шёлковыми нитями и драгоценными камнями. Надейвайте её, когда вам нужно произвести впечатление на дворян, участвовать в дипломатии или запугать бедных людей. Не надевайте её, когда отправляетесь в приключение — модные ткани слишком тонки для опасностей подземелий, а всякие побрякушки могут привлечь неприятных существ!",

    ink: "Чернила",
    ink_details: "Бутылочка чернил",

    ink_pen: "Перо",
    ink_pen_details: "Перо для использования чернил.",

    lamp: "Масляная лампа",
    lamp_details: "испускает яркий свет в пределах 15 фт и тусклый свет в пределах ещё 30 фт. Горит 6 ч от одной фляги масла.",

    perfume: "Духи",
    perfume_details: "Флакон ароматных духов.",

    paper: "Бумага",
    paper_details: "Лист бумаги.",

    sealing_wax: "Красный воск",
    sealing_wax_details: "Воск для опечатывания.",

    soap: "Мыло",
    soap_details: "Кусочек ароматного мыла.",

    costume: "Сценический костюм",
    costume_details: "Вещь, в которую могут одеваться персонажи.",

    disguise_kit: "Набор для грима",
    disguise_kit_details: "Косметика и бутафория, позволяющая менять облик и преуспевать в Обмане / Запугивании / Выступлении / Убеждении, а также скрыть травмы или распознать чужой грим.<br/><br/>Как часть длинного отдыха Вы можете создать обличье для маскировки. На надевание обличья после его создания требуется 1 минута. Вы можете одновременно иметь при себе только одно такое обличье, не привлекая ненужного внимания, если только у вас нет Сумки хранения (Bag of holding) или другого подобного способа оставить их незамеченными. Каждое такое обличье весит 1 фунт. В других случаях требуется 10 минут на создание обличья, которое немного изменяет вашу внешность и 30 минут, если требуются более обширные изменения.",

    item_music_drums: "барабан",
    item_music_viol: "виола",
    item_music_bagpipes: "волынка",
    item_music_lyre: "лира",
    item_music_lute: "лютня",
    item_music_horn: "рожок",
    item_music_pan_flute: "свирель",
    item_music_flute: "флейта",
    item_music_dulcimer: "цимбалы",
    item_music_shawm: "шалмей",

    item_music_drums_details: "",
    item_music_viol_details: "",
    item_music_bagpipes_details: "",
    item_music_lyre_details: "",
    item_music_lute_details: "",
    item_music_horn_details: "",
    item_music_pan_flute_details: "",
    item_music_flute_details: "",
    item_music_dulcimer_details: "",
    item_music_shawm_details: "",
 
    bard: classes.bard,
    bard_details: classes.bard_details,

    bardic_inspiration_slots: "Ячейки вдохновения",
    bardic_inspiration_slot: "Ячейка вдохновения",

    dice: "кубик",

    spell_bardic_inspiration: spells.bardic_inspiration,
    spell_bardic_inspiration_details: spells.bardic_inspiration_details,
    spell_bardic_inspiration_expanded: spells.bardic_inspiration_expanded,

    spell_focus: "Фокус заклинаний",
    as_musical_instrument: "в виде музыкального инструмента",

    bonus_o_w: "бонусное",

    spell_song_of_rest: spells.song_of_rest,
    spell_song_of_rest_details: spells.song_of_rest_details,
    spell_song_of_rest_expanded: spells.song_of_rest_expanded,

    restoring: "Восстановление",
    of_inspiration_slots_on_short_rest: "Ячеек Вдохновения чисто за короткий отдых",

    college_valor: classes.college_valor,
    college_valor_details: classes.college_valor_details,

    on_damage_and_ac: "можно использовать для урона и брони",

    spell_cutting_word: spells.cutting_word,
    spell_cutting_word_details: spells.cutting_word_details,
    spell_cutting_word_expanded: spells.cutting_word_expanded,

    fighter: classes.fighter,
    fighter_details: classes.fighter_details,

    armor_chainmail:"кольчуга",
    armor_chainmail_details: "",

    on_damage_second_attack:"к урону и от второй атаки в ходу",
    plus_2_on_ranged: "+2 на дальнобойные атаки",

    spell_second_wind: spells.second_wind,
    spell_second_wind_details: spells.second_wind_details,
    spell_second_wind_expanded: spells.second_wind_expanded,

    second_wind_slots: "Вторые дыхания",
    second_wind_slot: "Второе дыхание",

    spell_action_surge: spells.action_surge,
    spell_action_surge_details: spells.action_surge_details,
    spell_action_surge_expanded: spells.action_surge_expanded,

    action_surge_slots: "Всплески действий",
    action_surge_slot: "Всплеск действий",

    battle_master: classes.battle_master,
    battle_master_details: classes.battle_master_details,

    spell_weapon_bond: spells.weapon_bond,
    spell_weapon_bond_details: spells.weapon_bond_details,
    spell_weapon_bond_expanded: spells.weapon_bond_expanded,

    spell_call_bonbed_weapon: spells.call_bonbed_weapon,
    spell_call_bonbed_weapon_details: spells.call_bonbed_weapon_details,
    spell_call_bonbed_weapon_expanded: spells.call_bonbed_weapon_expanded,

    eldritch_knight: classes.eldritch_knight,
    eldritch_knight_details: classes.eldritch_knight_details,

    champion: classes.champion,
    champion_details: classes.champion_details,

    ctit_damage: "Двойной урон",
    on_dice_19_20: "не только при 20, но и при 19",

    command_back: "назад",
    choose_variant: "вариант",
    choose_varianta: "варианта",
    choose_variants: "вариантов",

    step_background: "типаж",

    modifier: "модификатор",

    slot_lvl: "уровень ячейки",

    wizard: classes.wizard,
    wizard_details: classes.wizard_details,

    weapons_daggers: weapons.daggers,
    weapons_daggers_details: weapons.daggers_details,

    weapons_darts: weapons.darts,
    weapons_darts_details: weapons.darts_details,

    weapons_slings: weapons.slings,
    weapons_slings_details: weapons.slings_details,

    weapons_quarterstaffs: weapons.quarterstaffs,
    weapons_quarterstaffs_details: weapons.quarterstaffs_details,

    weapons_light_arbalets: weapons.light_arbalets,
    weapons_light_arbalets_details: weapons.light_arbalets_details,

    restoring: "восстановление",
    mana_slots_short_rest_lvl_05: "уровень/2 ячеек маны при коротком отдыхе",

    component_pouch: "мешочек с компонентами",
    component_pouch_details: "Маленький водонепроницаемый кожаный поясной кошель с отделениями для хранения материальных компонентов и других особых предметов, нужных для накладывания заклинаний вместо Фокуса, если только у этих компонентов не указана стоимость (смотрите описание заклинания).",

    focus: "фокус",
    focus_details: "Особый предмет — сфера, кристалл, жезл, особый посох, короткая деревянная палочка или похожий предмет — созданный для создания заклинаний, частью которых является Фокус.",

    science_book: "научная книга",
    science_book_details: "",

    sand_pouch: "сумочка с песком",
    sand_pouch_details: "",

    knife: "небольшой нож",
    knife_details: "",

    spell_book: "книга заклинаний",
    spell_book_details: "",

    school_of_evocation:classes.school_of_evocation,
    school_of_evocation_details:classes.school_of_evocation_details,

    twice_less:"Вдвое меньше",
    gold_and_time_evocation:"золота и времени на Изучение найденного заклинания Воплощения",

    save_ally:"Создать безопасные участки",
    one_plus_lvl_from_spell_evocation:"внутри области своего заклинания Воплощения",

    school_of_conjuration:classes.school_of_conjuration,
    school_of_conjuration_details:classes.school_of_conjuration_details,

    twice_less:"Вдвое меньше",
    gold_and_time_conjuration:"золота и времени на Изучение найденного заклинания Вызова",

    spell_small_conjuration: spells.small_conjuration,
    spell_small_conjuration_details: spells.small_conjuration_details,
    spell_small_conjuration_expanded: spells.small_conjuration_expanded,

    school_of_illusion:classes.school_of_illusion,
    school_of_illusion_details:classes.school_of_illusion_details,

    twice_less:"Вдвое меньше",
    gold_and_time_illusion:"золота и времени на Изучение найденного заклинания Иллюзии",

    school_of_necromancy:classes.school_of_necromancy,
    school_of_necromancy_details:classes.school_of_necromancy_details,

    twice_less:"Вдвое меньше",
    gold_and_time_necromancy:"золота и времени на Изучение найденного заклинания Некромантии",

    school_of_abjuration:classes.school_of_abjuration,
    school_of_abjuration_details:classes.school_of_abjuration_details,

    twice_less:"Вдвое меньше",
    gold_and_time_abjuration:"золота и времени на Изучение найденного заклинания Ограждения",

    spell_magical_protection: spells.magical_protection,
    spell_magical_protection_details: spells.magical_protection_details,
    spell_magical_protection_expanded: spells.magical_protection_expanded,

    school_of_enchantment:classes.school_of_enchantment,
    school_of_enchantment_details:classes.school_of_enchantment_details,

    twice_less:"Вдвое меньше",
    gold_and_time_enchantment:"золота и времени на Изучение найденного заклинания Чар",

    school_of_transmutation:classes.school_of_transmutation,
    school_of_transmutation_details:classes.school_of_transmutation_details,

    twice_less:"Вдвое меньше",
    gold_and_time_transmutation:"золота и времени на Изучение найденного заклинания Преобразования",

    school_of_divination:classes.school_of_divination,
    school_of_divination_details:classes.school_of_divination_details,

    twice_less:"Вдвое меньше",
    gold_and_time_divination:"золота и времени на Изучение найденного заклинания Прорицания",

    from_spell_kill_necromancy:"на 2× уровень заклинания, от убийства заклинаниями. 3× если Некромантия",

    magical_protection: "Магическая защита",

    end_of_the_day: "до окончания продолжительного отдыха",

    look: "взгляд",

    spell_hypnotic_look: spells.hypnotic_look,
    spell_hypnotic_look_details: spells.hypnotic_look_details,
    spell_hypnotic_look_expanded: spells.hypnotic_look_expanded,

    spell_small_alchemy: spells.small_alchemy,
    spell_small_alchemy_details: spells.small_alchemy_details,
    spell_small_alchemy_expanded: spells.small_alchemy_expanded,

    spell_portent: spells.portent,
    spell_portent_details: spells.portent_details,
    spell_portent_expanded: spells.portent_expanded,

    use_wo_mana: "использование без маны",
    two_spells_1_and_2: "одного заклинания[1] и одного заклинания[2]",
    two_spells_3: "двух заклинаний[3]. Один раз. Восстанавливается после короткого отдыха",

    min_half_damage: "минимум половина урона",
    from_cantrips: "от заклинаний[0]",

    plus_INT: "+ модификатор Интеллекта",
    to_damage_evocation: "к урону всех заклинаний Воплощения",

    spell_overload: spells.overload,
    spell_overload_details: spells.overload_details,
    spell_overload_expanded: spells.overload_expanded,

    inf: "бесконечно",

    weapons_maces: weapons.maces,
    weapons_maces_details: weapons.maces_details,

    weapons_clubs: weapons.clubs,
    weapons_clubs_details: weapons.clubs_details,

    unability: "неспособность",
    to_wear_metal_armor: "носить металлическую броню или щит"
}
