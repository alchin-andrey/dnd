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
            welcome_message: 'Щоб повноцінно грати в D&D, достатньо придумати персонажа потрібного рівня, а решту влаштує ваш Майстер. Цей чарівний сайт допоможе вам створити персонажа за 3 простих кроки:\nРаса, Клас та Типаж.\n\nНайкращий підхід для першого разу — розслабитися і вибирати за покликом серця. Тут немає неправильних рішень. У фіналі ви отримаєте аркуш персонажа, з яким ви зможете розпочати гру!',
            welcome_disclaimer: '<br /><p>Матеріали на цьому сайті не змінюють необхідності придбання офіційних матеріалів. Cистема Dungeons & Dragons є власністю корпорації Wizards of the Coast, графічні матеріали створені за допомогою <a target="_blank" href="https://www.heroforge.com">Hero Forge ↗</a></p>',

            authors: 
            '<p><a target="_blank" href="https://t.me/dimalagoda">@ Dima Lagoda, Product Designer</a> — ідея, дизайн, контент</p>' +
            '<p><a target="_blank" href="https://t.me/Ki3iL">@ Andrii Alchin, Frontend Developer</a> — код</p>' +
            '<p><a target="_blank" href="https://t.me/godblessdnd">@ Andrii Pavlov, Найкращий Майстер Києва</a> — валідація.</p>' +
            '<p>З будь яких тем по цьому сайту, пишіть Дімі.</p>' +
            '<br /><p>Якщо у вас є бажання задонатити, будемо дуже вдячні. Безжальне та жорстоке вторгнення ₚосії в Україну триває, тому 80% донатів ми відправляємо у фонд "<a target="_blank" href="https://savelife.in.ua">Повернись Живим</a>".</p>',

    //Общее        
    
            name:"імʼя",

            race:"раса",
            ethnos:"етнос",
            class:"клас",
            subclass:"специализація",
            past:"типаж",
            level:"рівень",
                level_unit:"й",
                lvl:"LVL",

    //Stats

    stats:"здібності",
    stats_base_details: 'Базові значення Здібностей допомагають отримати значення Модифікаторів Здібностей та Навичок. Вони використовуються в грі набагато частіше і будуть вираховані на наступному кроці при виборі Класу.',

    strength:"сила",
    strength_base:"базова",
    strength_details: 
    'Фізична міць та тренування. Впливає на Навички:\n' +
    '• Атлетика',

    dexterity:"спритність",
    dexterity_base:"базова",
    dexterity_details: 
    'Вправність, реакція, рівновага. Впливає на навички:\n' +
    '• Акробатика\n' +
    '• Спритність рук\n' +
    '• Непомітність\n'+
    '• Броня',

    constitution:"статура",
    constitution_base:"базова",
    constitution_details: 'Витривалість, життєві резерви. Впливає на навички:\n' +
    '• Здоровʼя (HP)',

    intelligence:"інтелект",
    intelligence_base:"базовий",
    intelligence_details: 'Точність спогадів, міркувань. Впливає на навички:\n' +
    '• Розслідування\n' +
    '• Історія\n' +
    '• Релігія\n' +
    '• Магія\n' +
    '• Природа\n', 
    
    wisdom:"мудрість",
    wisdom_base:"базова",
    wisdom_details: 'Сприйняття навколишнього світу. Впливає на навички:\n' +
    '• Виживання\n' +
    '• Уважність\n' +
    '• Інтуїція\n' +
    '• Медицина\n' +
    '• Фауна\n', 

    charisma:"харизма",
    charisma_base:"базова",
    charisma_details: 'Здатність впливати. Впливає на навички:\n' +
    '• Артистичність\n' +
    '• Переконливість\n' +
    '• Обман\n' +
    '• Залякування',

    saving: "випробування",

//Genders

    gender:"гендер",
        phisiological: "фізіологічний",
            male: "чоловік",
            male_details: "ваш персонаж має суто чоловічі статеві ознаки.\n\n",
            intersex: "інтерсекс",
            intersex_details: "ваш персонаж має як чоловічі, так і жіночі статеві ознаки. а можливо, і ще якісь.",
            female: "жінка",
            female_details: "ваш персонаж має суто жіночі статеві ознаки.\n\n",
            demiboy: "деміхлопчик",
            demiboy_details: "чоловічі статеві ознаки переважають у вашому персонажі, але є й інші.",
            demigirl: "демідівчинка",
            demigirl_details: "жіночі статеві ознаки переважають у вашому персонажі, але є й інші.",
            neutral_gender: "безстатеве",
            neutral_gender_details: "у вашого персонажа немає ознак, які можна було б назвати властивими якійсь статі.",
            unstable: "нестабільна стать",
            unstable_details: "статеві ознаки вашого персонажа можуть змінюватися, з якихось причин або без причин.",
            other_gender: "інша стать",
            other_gender_details: "ваш персонаж має ознаки статі, відмінної від чоловічої чи жіночої.",
        feel:"самосприйняття",
            pangender:"пангендер",
            pangender_details: "ваш персонаж сприймає себе носієм усіх можливих гендерів відразу.",
            undecided:"невизначений",
            undecided_details: "ваш персонаж не визначився, яким гендером він себе сприймає.",
            gender_fluid:"флюїд",
            gender_fluid_details: "сприйняття гендера вашого персонажа може змінюватися, з якихось причин або без причин.",
            androgin:"андрогін",
            androgin_details: "ваш персонаж сприймає себе чимось середнім між своїм фізіологічним та іншим гендером.",
            cisgender:"цисгендер",
            cisgender_details: "самосприйняття вашого персонажа повністю відповідає його фізіологічному гендеру.",
            transsexual:"транссексуал",
            transsexual_details: "ваш персонаж прагне привести гендер у відповідність до свого сприйняття, що відрізняється від фізіологічного.",
            transvestit:"трансвестит",
            transvestit_details: "самосприйняття вашого персонажа не відповідає його фізіологічному гендеру.",
            demigender:"демігендер",
            demigender_details: "самосприйняття вашого персонажа відповідає його фізіологічному гендеру, але не повністю.",
            demitrans:"демітранс",
            demitrans_details: "самосприйняття вашого персонажа не відповідає його фізіологічному гендеру, але не повністю.",
            queer:"квір",
            queer_details: "сприйняття гендера вашого персонажа відповідає фізіологічному, але не набору ознак цього гендера.",
            bigender: "бігендер",
            bigender_details: "гендер, яким почувається ваш персонаж, поєднує ознаки його фізіологічної та протилежної статі.",
        look: "зовнішній вигляд",
            as_phisiological: "відповідає фізіологічній статі.",
            as_phisiological_details: "самосприйняття залишається внутрішнім станом.",
            as_feel: "відповідає самосприйняттю",
            as_feel_details: "фізіологічна стать залишається за лаштунками.",
            as_other_gender: "інше",
            as_other_gender_details: "розкрийте деталі пізніше в Передісторії вашого персонажа.",
        attraction: "тяжіння",

//Предистория

    faith:"вірування",
    alignment:"світогляд",
    personality:"характер",
    ideals:"пріоритети",
    bonds:"прихильності",
    flaws:"слабкості",
    appearance:"зовнішність",
    story:"минуле",

// Тело

    age:"вік",
    maturity:"зрілість",
        year: "рік",
        years: "років",
        yeara: "роки",
        baby: "дитина",
        young: "молодий",
        mature: "дорослий",
        old: "літній",
        oldest: "старий",

    weight:"вага",
        kg: "кг",
        skinny: "худорлявий",
        fat: "повний",

    height:"зріст",
        cm: "см",

    size:"розмір",

        size_small:"маленький",
        size_medium:"середній",
        size_big:"великий",

    hp_max:"max HP",
    hp_dice:"реген",

    proficiency:"майстерність",
    initiative:"ініціатива",
    armor_class:"броня",

    speed:"швидкість",
        feet: "футів",
        f: "ф",
        miles: "миль",
        milei: "милі",
        milea: "миля",
    vision_day:"зір",
    vision_night:"темний зір",
    hp_bonus: "здоровʼя",

// Навыки

    skills:"навички",
    skills_details:'Значення Навичок — основні показники, що використовуються в грі. Підсумкові значення будуть вираховані після вибору Класу на кроці 2 та Типажу на кроці 3.',
        
        acrobatics:"акробатика",
        acrobatics_details: 
        'Здатність встояти на ногах. Наприклад спроба:\n\n' +
        '• Пробігтися льодом\n' +
        '• Балансувати на натягнутому канаті\n' +
        '• Встояти на палубі у шторм\n' +
        '• Вибратися з пут',

        animal_hanging:"фауна",
        animal_hanging_details:
        'Здатність ладнати з тваринами. Наприклад спроба:\n\n' +
        '• Заспокоїти одомашнену тварину\n' +
        '• Утримати скакуна від паніки\n' +
        '• Відчути наміри тварини\n' +
        '• Зробити небезпечний маневр на коні',

        arcana:"магія",
        arcana_details:
        'Здатність згадати знання про заклинання, магічні предмети, містичні символи, магічні традиції, плани існування, мешканців цих планів і т.д. А також спроба поспілкуватись із істотою без використання слів.',

        athletics:"атлетика",
        athletics_details:
        'Здатність лазити, стрибати чи плавати. Наприклад спроба:\n\n' +
        '• Лізти по крутій скелю\n' +
        '• Втриматись за гілку\n' +
        '• Стрибнути на велику відстань\n' +
        '• Плити чи залишатися на плаву\n\n' +
        '• Виломати замкнені двері\n' +
        '• Вирватися з кайданів\n' +
        '• Перекинути статую\n' +
        '• Утримати валун від падіння',

        deception:"обман",
        deception_details:
        'Здатність приховати правду. Наприклад спроба:\n\n' +
        '• Заплутати сліди\n' +
        '• Відволікти охоронців\n' +
        '• Обдурити торговця\n' +
        '• Відвести від себе підозри',

        history:"історія",
        history_details:
        'Здатність згадати знання про історичні події, легендарних особистостей, древні королівства, колишні суперечки, недавні війни, втрачені цивілізації, а також ремесло, торгівлю тощо.',

        insight:"інтуїція",
        insight_details:
        'Здатність визначити приховані наміри істоти. Наприклад спроба:\n\n' +
        '• Виявити брехню\n' +
        '• Передбачити чийсь наступний крок',

        intimidation:"залякування",
        intimidation_details:
        'Здатність, власне, залякати. Наприклад спроба:\n\n' +
        '• Витягнути інформацію з бранця\n' +
        '• Уникнути бійки демонстрацією власної небезпеки',

        investigation:"розслідування",
        investigation_details: 
        'Пошук підказок та правильні висновки на їх основі. Наприклад спроба:\n\n' +
        '• Визначити місце розташування захованого предмета\n' +
        '• Зрозуміти по вигляду рани, якою зброєю вона нанесена\n' +
        '• Визначити точку обвалення тунелю\n' +
        '• Пошук таємного знання у сувої\n' +
        '• Підробка документа\n' +
        '• Оцінити вартість предмета\n' +
        '• Обіграти пекельного вартового в шахи',

        medicine:"медицина",
        medicine_details:
        'Здатність надати медичну допомогу. Наприклад спроба:\n\n' +
        '• Стабілізувати вмираючого\n' +
        '• Діагностувати хворобу',

        nature:"природа",
        nature_details:
        'Здатність згадати знання про місцевість, рослин і тварин, погоду і т.д.',

        perception:"уважність",
        perception_details:
        'Здатність виявити присутність чогось. Наприклад спроба:\n\n' +
        '• Підслухати розмову за дверима\n' +
        '• Підглянути у вікно\n' +
        '• Почути чудовиськ, що крадуться.\n' +
        '• Помітити щось приховане',

        performance:"артистичність",
        performance_details:
        'Здатність справити враження. Наприклад спроба:\n\n' +
        '• Розповісти історію\n' +
        '• Станцювати\n' +
        '• Зіграти або заспівати пісню\n' +
        '• Спародувати бургмейстра',
        

        persuasion:"переконливість",
        persuasion_details:
        'Здатність вплинути на рішення. Наприклад спроба:\n\n' +
        '• Потоваришувати з місцевою чаклункою\n' +
        '• Переконати дворецького пропустити до короля\n' +
        '• Залагодити конфлікт\n' +
        '• Надихнути натовп',

        religion:"релігія",
        religion_details:
        'Здатність згадати знання про божества, ритуали і молитви, релігійні ієрархії, священні символи, практики таємних культів і т.д.',

        sleight_of_hand:"спритність рук",
        sleight_of_hand_details:
        'Мікромоторика. Наприклад спроба:\n\n' +
        '• Жонглювати\n' +
        '• Зробити спритний трюк\n' +
        '• Зрізати гаманець\n' +
        '• Знешкодити пастку\n' +
        '• Підкинути щось іншому в кишеню\n\n' +
        '• Відкрити замок\n' +
        '• Сховати щось\n' +
        '• Звʼязати бранця\n' +
        '• Зіграти на новому інструменті\n' +
        '• Створити дрібний предмет',

        stealth:"непомітність",
        stealth_details:
        'Здатність залишитися непоміченою. Наприклад спроба:\n\n' +
        '• Сховатися від ворогів\n' +
        '• Непомітно пробратися до брами\n' +
        '• Нечутно наблизитися до герцогині',

        survival:"виживання",
        survival_details:
        'Здатність орієнтуватись у дикій місцевості. Наприклад спроба:\n\n' +
        '• Вистежити ворога\n' +
        '• Знайти дорогу\n' +
        '• Уникнути сипучих пісків\n' +
        '• Вполювати тетерева\n' +
        '• Помітити ознаки проживання рідкісної тварини\n' +
        '• Спрогнозувати погоду',
    
// Владения

    proficiencies:"володіння",

        armor:"обладунки",

            armor_light: armor.light,
            armor_light_details: armor.light_details,

            armor_medium: armor.medium,
            armor_medium_details: armor.medium_details,

            armor_heavy: armor.heavy,
            armor_heavy_details: armor.heavy_details,

            armor_shields: armor.shields,
            armor_shields_details: armor.shields_details,
            // добавить описания

        weapons:"зброя",

            melee:"ближня",
            ranged:"далекобійна",
            throwing:"метальна",

            loading:weapons.loading,
            weapon_light:weapons.light,
            weapon_heavy:weapons.heavy,
            loading_details:weapons.loading_details,
            weapon_light_details:weapons.light_details,
            weapon_heavy_details:weapons.heavy_details,
            weapon_finesse: "фехтувальна",

            ammunition:"боєприпас",
            bolt:"болт",
            arrow:"стріла",
            bullet:"снаряд",
            bullet_details:"",

            damage_1_hand:"однією рукою",
            damage_2_hand:"двома руками",

            cost:"ціна",
            coin_gold:"золотих монет",
            coin_gold_short: "🟡",
            coin_silver:"срібних монет",
            coin_silver_short: "⚪",
            сoin_copper:"мідних монет",
            coin_copper_short: "🟠",

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
            tool_herbalists_tools: tools.herbalists_tools,
            tool_shoemaker_tools: tools.shoemaker_tools,


        languages:"мови",
        languages_human:"мови етносів людей",
        
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

    fines:"особливості",

        //Ключевые слова
        advantage:"перевага",
        no_disadvantage: "немає перешкоди",
        rethrow:"перекид куба",
        resistance:"стійкість",
        immunity:"імунітет",
        telepathy:"телепатія",
        proficiency_bonus:"2× Майстерності",
        slippage: "прослизання",
        disadvantage: "перешкода",
        plus_1_to_maxhp: "+1 до Max HP",
        trans: "транс",
        stealth_in_wild: "маскування в дикій місцевості",
        knowledge: "знання",
        extra_dice_damage:"+1 куб пошкодження",
        persistence: "витривалість",

        //Обьект особенности
        any_dice_1:"будь-якого куба d20 при “1”",
        behind_bigger_than_mid:"за істотою, що вища за середній розмір",
        among_bigger_than_mid:"серед істот, що вищі за середній розмір",
        fear_against:"проти 😱 Переляку",
        poison_against:"проти 🧪 Отрути",
        poison_damage:"до пошкодження 🧪 Отрутою",
        poison_w:"🧪 Отрутою",
        known_languages:"відомими мовами",
        fire_against:"проти 🔥 Вогню",
        fire_damage:"до ушкодження 🔥 Вогнем",
        fire_w:"🔥 Вогнем",
        cold_damage:"до ушкодження ❄️ Холодом",
        cold_w:"❄️ Холодом",
        electricity_damage:"до пошкодження ⚡️ Струмом",
        electricity_w:"⚡ Струмом",
        acid_damage:"до пошкодження ⚗️ Кислотою",
        acid_w:"⚗️ Кислотою",
        thunder_w: "🔊 Звуком",
        radiant_w: "✨ Світлом",
        force_w: "🌈 Силою",

        piercing_w: "🗡️ колоте",
        slashing_w: "🪓 рубане",
        bludgeoning_w: "🔨 дробильне",
        
        necrotic_w: "💀 Некротичне",
        psychic_w: "🧠 Психічне",

        history_check_rock_gnome:"до перевірки Історії магічного, алхімічного чи технологічного предмета",
        stealth_in_stones: "при Непомітності в кам'янистій місцевості",
        magic_against_int_wis_cha: "проти Магії з Випробуванням  на Інтелект, Мудрість, Харизму",
        stone_history:"до перевірки Історії пов'язаної з каменем",
        perception_under_sun:"на сприйняття під прямим сонячним світлом",
        attack_under_sun:"на атаку під прямим сонячним світлом",
        for_each_lvl_incl_1:"за кожен рівень, включно з першим",
        charm_against: "проти 😍 Зачарування",
        magic_sleep_against:"до магічного 🥱 Сну",
        trans_details: "— глибока медитація замість сну, до 4 годин",
        stealth_in_wild_details:"— навіть якщо слабо закриті листям / дощем / снігопадом / туманом.",
        any_cantrip_wizard: "1 будь-якого закляття[0] Чарівника",
        crit_hand_weapon: "при криті ближньою зброєю",
        persistence_details: "— коли Здоровʼя опускається до 0 і ви при цьому не вбиті, воно стає = 1",

        no_armor_protection: "захист без обладунків",
        armor_constitution: "— броня за рахунок Статури (застосовано)",
        saving_dex_visible: "на Випробування Спритності від видимих ефектів",
        charmed_while_raging: "проти 😍 Зачарування при Люті",
        frightened_while_raging: "проти 😱 Переляку при Люті",
        on_initiative: "на ініціативу",
        extra_movement: "додаткове пересування",
        rage_half_speed: "на половину швидкості, як частина впадання в Лють",
        rage_persistence: "люта стійкість",
        rage_persistence_details: "— коли при Люті Здоровʼя опускається до 0 і ви при цьому не вбиті, воно стає = 1, при успішному Випробуванні Сили зі складністю 10 (+5 за кожний наступний раз до тривалого відпочинку)",
        saving_strength: "результат Випробування Сили",
        rage_sustainability: "Лють не припиняється достроково",
        only_if_uncontious: "крім втрати свідомості",
        near_friends_attack_in_rage: "на ближні атаки союзників поруч, при Люті",
        any_damage_but_psy: "до будь-якого пошкодження крім 🧠 Психічного, при Люті",
        on_dodging_in_rage: "на ухилення від провокованих атак, при Люті",
        rush: "ривок",
        as_bonus_action: "бонусною дією, при Люті",
        long_jumps: "стрибки +10ф у довжину та +3ф у висоту",
        in_rage: "при Люті",
        fast_tempo: "швидкий темп",
        while_following_prints: "при русі по сліду",
        normal_tempo: "нормальный темп",
        in_stealth: "при русі в Непомітності",
        double_weight: "2× Вантажопідйомність",
        weight_capacity: "включно з максимальною вагою навантаження та підйому",
        str_check_on_move: "на Випробування Сили під час пересування / руйнування предметів",
        to_see: "Зір",
        one_mile_100f_details: "до 1 милі, а на 100ф до найдрібніших деталей",
        on_perception_in_lowlight: "на Уважність при тьмяному світлі",
        double_speed: "2× Швидкість",
        travel_elk: "подорожі для вас і 10 ваших супутників в межах 60ф",
        on_dodging_in_rage_bear: "на ухилення союзників поруч від атак ворогів, що бачать вас, при Люті",
        flight: "політ",
        as_walking_speed_in_rage: "за швидкістю рівний швидкості пересування, при Люті",
        as_walking_speed: "за швидкістю рівний швидкості пересування",
        on_thieves_tools: "до використання крадійських інструментів",

//Умения - активные умения без урона

    abilities:"особливості",

    inventory:"спорядження",                
    
        shield:"щит",

    wallet:"кошель",
        
        tripple_platina:"тричіплатинових",
        platina:"платинових",
        gold:"золотих",
        silver:"срібних",
        copper:"мідних",


//Ethnos
    
    common:"звичайний",

//Races
    
    //Halfling
    
    halfling:"хафлінг",                   
    halfling_details: races.halfling,

    stout:"жилавий",
    stout_halfling_details: races.stout_halfling,

    lightfoot:"прудконогий",
    lightfoot_halfling_details: races.lightfoot_halfling,
    
    ghost:"примарний",
    ghost_halfling_details: races.ghost_halfling,

    rare:"рідкісний етнос",        
    rare_details:races.rare,

    //Gnome

    gnome:"гном",
    gnome_details: races.gnome,

    rock:"скельний",
    rock_gnome_details: races.rock_gnome,

    deep:"глибинний",
    deep_gnome_details: races.deep_gnome,

    forest:"лісовий",
    forest_gnome_details: races.forest_gnome,

    //Dwarf

    dwarf:"дворф",
    dwarf_details: races.dwarf,

    mountain:"гірський",
    mountain_dwarf_details: races.mountain_dwarf,

    grey:"сірий",
    grey_dwarf_details: races.grey_dwarf,

    hill:"пагорбовий",
    hill_dwarf_details: races.hill_dwarf,

    //Human
    
    human:"людина",
    human_details: races.human,

    arkayun:"аркаюн",
    arkayun_details: races.arkayun_human,
    
    bedin:"бедін",
    bedin_details: races.bedin_human,

    gur:"гур",
    gur_details: races.gur_human,

    damarian:"дамарець",
    damarian_details: races.damarian_human,

    illuskian:"іллюскіанець",
    illuskian_details: races.illuskian_human,

    imaskari:"імаскарі",
    imaskari_details: races.imaskari_human,

    kalishit:"калишит",
    kalishit_details: races.kalishit_human,

    mulan:"мулан",
    mulan_details: races.mulan_human,

    nar:"нар",
    nar_details: races.nar_human,

    rashemi:"рашемі",
    rashemi_details: races.rashemi_human,

    tetirian:"тетірець",
    tetirian_details: races.tetirian_human,

    tuigan:"туйган",
    tuigan_details: races.tuigan_human,

    terami:"терамі",
    terami_details: races.terami_human,

    ulutiune:"улутіун",
    ulutiune_details: races.ulutiune_human,

    ffolk:"ффолк",
    ffolk_details: races.ffolk_human,

    halruanian:"халруанець",
    halruanian_details: races.halruanian_human,

    chondatan:"чондатанець",
    chondatan_details: races.chondatan_human,

    chult:"чульт",
    chult_details: races.chult_human,

    shaarian:"шаарець",
    shaarian_details: races.shaarian_human,

    shu:"шу",
    shu_details: races.shu_human,

    //Halfelf
    
    halfelf:"напівельф",
    halfelf_details: races.halfelf,

    //Tiefling
    
    tiefling:"тіфлинґ",
    tiefling_details: races.tiefling,

    // Elf

    elf: "ельф",
    elf_details: races.elf,

    forest_elf_details: races.forest_elf,

    high_elf: "вищий",
    high_elf_details: races.high_elf,

    dark: "темний",
    dark_elf_details: races.dark_elf,

    // Halforc

    halforc: "напіворк",
    halforc_details: races.halforc,

    // Dragonborn

    dragonborn: "драконороджений",
    dragonborn_details: races.dragonborn,

    red_dragonborn: "червоний",
    red_dragonborn_details: races.red_dragonborn,

    brass_dragonborn: "латунний",
    brass_dragonborn_details: races.brass_dragonborn,

    golden_dragonborn: "золотий",
    golden_dragonborn_details: races.golden_dragonborn,

    silver_dragonborn: "срібний",
    silver_dragonborn_details: races.silver_dragonborn,

    white_dragonborn: "білий",
    white_dragonborn_details: races.white_dragonborn,

    blue_dragonborn: "синій",
    blue_dragonborn_details: races.blue_dragonborn,

    bronze_dragonborn: "бронзовий",
    bronze_dragonborn_details: races.bronze_dragonborn,

    copper_dragonborn: "мідний",
    copper_dragonborn_details: races.copper_dragonborn,

    black_dragonborn: "чорний",
    black_dragonborn_details: races.black_dragonborn,

    green_dragonborn: "зелений",
    green_dragonborn_details: races.green_dragonborn,

//Colors

    color:"колір",
    color_skin: "колір шкіри",
    color_eyes: "колір очей",
    color_hair: "колір волосся",

    characteristic: "властивий",
    not_characteristic: "не властивий",
    for_race: "для цієї раси",
    for_ethnos: "для цього етносу",
    
    White: "білий",
    Smoke: "димчастий",
    Steel: "сталевий",
    Grey: "сірий",
    Ash: "попелястий",
    Iron: "залізний",
    Black: "чорний",

    Blush: "румʼяний",
    Reddish: "джеральдін",
    Red: "червоний",
    Bright_Red: "яскраво-червоний",
    Ruby: "рубіновий",
    Blood: "кривавий",
    Maroon: "багряний",

    Pale: "світлий",
    Sand: "пісочний",
    Peach: "персиковий",
    Orange: "помаранчевий",
    Hazel: "горіховий",
    Bronze: "бронзовий",
    Brown: "коричневий",

    Ivory: "слонової кістки",
    Straw: "соломи",
    Dandelion: "кульбабовий",
    Yellow: "жовтий",
    Sulfur: "сірчаний",
    Golden: "золотий",
    Olive: "оливковий",
    Tea: "чайний",
    Pistachio: "фісташковий",
    Apple: "яблучний",
    Acid: "кислотний",
    Avocado: "авокадовий",
    Grass: "трав'яний",
    Swamp: "болотний",
    Greenish: "зеленуватий",
    Light_Green: "салатовий",
    Green: "зелений",
    Bright_Green: "яскраво-зелений",
    Lime: "лаймовий",
    Foliage: "листя",
    Emerald: "смарагдовий",
    Aquamarine: "аквамарин",
    Eucalyptus: "евкаліптовий",
    Menthol: "ментоловий",
    Seafoam: "морської піни",
    Jade: "нефритовий",
    Mint: "м'ятний",
    Pine: "ялиновий",
    Pearl: "перлинний",
    Ice: "крижаний",
    Lightning: "блискавковий",
    Cyan: "блакитний",
    Turquoise: "бірюзовий",
    Teal: "чірок",
    Malachite: "малахітовий",
    Silver: "срібний",
    Sky: "небесний",
    Topaz: "топазовий",
    Azure: "лазурний",
    Cobalt: "кобальтовий",
    Lazulite: "лазурітовий",
    Blueberry: "чорничний",
    Mauve: "лиловий",
    Lavender: "лавандовий",
    Cornflower: "волошковий",
    Ultramarine: "ультрамарин",
    Blue: "синій",
    Sapphire: "сапфіровий",
    Night: "нічний",
    Thistle: "чортополоховий",
    Wisteria: "гліцинієвий",
    Lilac: "бузковий",
    Purple: "пурпурний",
    Violet: "фіолетовий",
    Amethyst: "аметистовий",
    Indigo: "індіго",
    Pinkish: "розуватий",
    Heliotrope: "геліотроп",
    Pink: "рожевий",
    Magenta: "маджента",
    Fuchsia: "фуксія",
    Orchid: "орхідеєвий",
    Plum: "сливовий",
    Beige: "бежевий",
    Bubblegum: "жуйковий",
    Watermelon: "кавуновий",
    Carmine: "кармін",
    Raspberry: "малиновий",
    Cerise: "вишневий",
    Burgundy: "бордовий",

//Заклинания - активные умения с уроном

    spells:"закляття",

    //schools
    cantrip:"заговір",

    abjuration: "огородження", //
    conjuration: "виклик", //
    divination: "віщування", //
    enchantment: "чари", //
    evocation: "втілення", //
    illusion: "ілюзія", //
    necromancy: "некромантія", //
    transmutation: "перетворення", //
    ability: "вміння",
    other: "інше",

    //cast time
    cast_time: "каст",
    reaction: "реакція",
    bonus_action: "бонусна дія",
    action: "основна дія",
    ritual: "ритуал",
    from: "від",
    up_to: "до",
    sec: "сек",
    round: "раунд",
    min: "хв",
    hour: "г",
    day: "дн",


    mana:"мана",

    //parts
    parts: "умови",
    verbal:"слово",
    somatic:"жест",
    touch:"дотик цілі",
    focus: "фокус",
    material_10gold: "матеріали на суму в 10 🟡",
    hit: "влучення",
    none: "не потрібно",

    //aim
    aim_target: "ціль",
    self: "на себе",
    creature: "істота",
    object: "обʼєкт",
    point: "точка",

    near: "поблизу",
    in_distance: "на відстані",

    //duration
    time: "час",
    instant: "миттєво",
    concentration: "концентрація",
    till_dissipate: "поки не розсіється",

    //impact
    damage: "пошкодження",
    heal: "зцілення",
    bonus_w:"бонусне",

    //area
    aim_aoe: "область",
    line: "лінія",
    cone: "конус",
    cube: "куб",
    cilinder: "циліндр",
    sphere: "сфера",

    saving_target: "випробування",
    aim_bonus: "влучність",
    aim_range: "дальність",

    additional_m: "додатково",
    
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

    explorers_pack: "набір мандрівника",
    explorers_pack_details: "Будь-який шукач пригод може бути покликаний пройти довгий шлях, виконуючи завдання, але ті, хто вибрав життя дослідника, особливо добре підготовлені до подорожі.",

    backpack: "рюкзак",
    backpack_details: "Місткість: 1 кубічний фут/15 кг. Ви також можете прив'язувати такі предмети, як спальники та мотузки зовні рюкзака.",

    bedroll: "спальник",
    bedroll_details: "Використовується для тривалого та короткого відпочинку.",

    mess_kit: "столовий набір",
    mess_kit_details: "У цій невеликій коробці знаходиться чашка та прості столові прилади. Коробка розкривається, і одна сторона може використовуватися як сковорода, а інша як тарілка або неглибока миска.",

    tinderbox: "трутниця",
    tinderbox_details: "У цьому невеликому контейнері знаходиться кремінь, кресало і трут (зазвичай суха ганчірка, вимочена в маслі), що використовуються для розпалювання вогню. Використання його для розпалювання смолоскипа — або чогось іншого, легкозаймистого — вимагає однієї дії. Розпалювання іншого вогню потребує 1 хвилини.",

    torch: "смолоскип",
    torch_details: "Смолоскип горить 1 годину, випромінюючи яскраве світло в межах 20 футів і тьмяне світло в межах ще 20 футів. Якщо ви робите ближню атаку палаючим смолоскипом і влучаєте, він завдає пошкодження 🔥 Вогнем 1.",

    ration: "денний раціон",
    ration_details: "Раціони складаються з зневодненої їжі, що підходить для подорожей, і включає в'ялене м'ясо, сухофрукти, галети та горіхи.",

    waterskin: "бурдюк",
    waterskin_details: "Місткість: 2 літри",

    hempen_rope: "мотузка 50ф",
    hempen_rope_details: "зроблена з пеньки або шовку. Вона має 2 здоровʼя, і її можна порвати Випробуванням Сили складністю 17.",

    barbarian: classes.barbarian,
    barbarian_details: classes.barbarian_details,

    totem_warrior: classes.totem_warrior,
    totem_warrior_details: classes.totem_warrior_details,

    totem_spirit: classes.totem_spirit,
    totem_spirit_details: classes.totem_spirit_details,
    totem_harmony: classes.totem_harmony,

    totem: "тотем",
    totem_details: "амулет або схожа прикраса, що містить хутро або шкіру, пір'я, пазурі, зуби або кістки тотемної тварини.",

    wolf: "вовк",
    bear: "ведмідь",
    eagle: "орел",
    elk: "лось",
    tiger: "тигр",

    // 19 Oct

    on_choice: "на вибір",

    feat_actor: "Артистичний",
    feat_actor_details: "Ви навчилися театрального мистецтва та наслідування.",

    performace_deception_acting: "на Артистичність та Обман, коли ви намагаєтеся видати себе за когось іншого",
    mimicing: "імітація",
    other_creature_sound_1min: "мови та звуків інших істот, почутими не менше 1 хвилини",

    feat_example: "приклад",
    feat_example_details: "приблизний приклад",

    equipment: "спорядження",
    
    ranged_fight: "дальній бій",
    melee_fight: "ближній бій",

    quiver: "сагайдак",
    quiver_details: "контейнер для стріл. Вміщується 20 стріл.",

    arrow_details: "снаряд для лука",

    burglars_pack: "набір зломщика",
    burglars_pack_details: "У наборі зломщика міститься безліч важливих професійних інструментів для злому замків та попередження про патруль.",

    metal_ball_1000: "металеві кульки × 1000",
    metal_ball_1000_details: "ви можете розсипати дією з мішочка крихітні металеві кульки, покривши площу 10 × 10 футів. Істоти, що переміщаються по цій площі, повинні досягти успіху у Випробуванні Спритності зі складністю 10, інакше вони падають ниць. Істота, що переміщується цією областю із зменшеною удвічі швидкістю, не повинна робити Випробування.",

    fishing_line: "волосінь 10ф",
    fishing_line_details: "шовкова волосінь",

    bell: "дзвіночок",
    bell_details: "невеликий і дзвінкий дзвіночок з кілечком зверху",

    candle: "свічка",
    candle_details: "Протягом 1 години свічка випромінює яскраве світло в межах радіусу 5 футів і тьмяне світло в межах ще 5 футів.",

    crowbar: "ломик",
    crowbar_details: "використання ломика дозволяє здійснювати перевірки Сили з перевагою, якщо важіль має допомогти.",

    item_hammer: "молоток",
    item_hammer_details: "ну звичайний собі молоток",

    item_piton: "кілочок",
    item_piton_details: "може бути використаний для розклинювання чогось.",

    hooded_lantern: "закритий ліхтар",
    hooded_lantern_details: "Випускає яскраве світло в межах 30 футів і тьмяне світло в межах ще 30 футів. Запалений ліхтар горить 6 годин від однієї фляги олії. Ви можете основною дією опустити козирок, зменшивши освітлення до тьмяного світла в межах 5 футів.",
    
    oil_flask: "Фляга з олією",
    oil_flask_details: 'Зазвичай олія продається у глиняних флягах по 1 пінті (0,5 літра). Ви можете облити маслом з фляги істоту, що знаходиться в межах 5 футів, або кинути її на 20 футів, ламаючи при ударі.\n\n'+

    'Здійсніть далекобійну атаку по істоті або предмету, вважаючи олію імпровізованою зброєю. При влучанні ціль покривається олією. Якщо ціль отримує шкоду вогнем, поки масло не висохло (1 хвилина), вона отримує додаткову шкоду вогнем 5 від олії, що горить.\n\n'+
    
    'Ви можете також вилити фляжку олії на землю, покривши площу 5 × 5 футів, за умови, що підлога рівна. Якщо тепер масло підпалити, воно горить 2 раунди і завдає 5 пошкодження 🔥 Вогнем всім істотам, що входять в цю область або хід, що закінчує в ній. Істота може отримати це пошкодження лише один раз за хід.',

    dungeoneers_pack: "набір дослідника підземель",
    dungeoneers_pack_details: "Містить основне спорядження для занурення у темряву у пошуках скарбів.",

    armor_leather: "шкіряна",
    armor_leather_details: "Нагрудник та плечі цього обладунку виготовлені зі шкіри, вивареної в олії. Інші частини обладунку виготовлені з більш м'яких і гнучких матеріалів.",

    armor_scalemail: "луската",
    armor_scalemail_details: "Цей обладунок складається зі шкіряних куртки і поножів (а також, можливо, окремої спідниці), покритих шматочками металу, що перекриваються, схожими на рибну луску. У комплект входять рукавиці.",

    small_rasp: "невеликий напилок",
    small_rasp_details: "",

    lockpick_set: "набір відмичок",
    lockpick_set_details: "",

    small_mirror: "дзеркальце на ручці",
    small_mirror_details: "",

    scissors: "ножиці",
    scissors_details: "",

    tweezers: "щипчики",
    tweezers_details: "",

    thieves_pack: "крадійські інструменти",
    thieves_pack_details: "Володіння цими інструментами дозволяє додавати бонус майстерності до всіх перевірок здібностей, зроблених для відключення пасток та злому замків.",

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

    fine_dodge: "увертливість",
    from_aoe_effects: "від зональних ефектів з Випробуванням Спритності",

    min_10: "Мінімум 10",
    on_dice_mastery_skill: "на d20 під час перевірки навичок та здібностей з майстерністю",

    always_hear: "завжди чути",
    invisible_creatures_10f: "всіх прихованих та невидимих істот у межах 10ф від себе",

    no_advantage: "немає переваги",
    on_attacks_on_you: "на будь-які атаки по вас",

    min_20: "Мінімум 20",
    on_dice_d20: "на d20, але без крита, якщо це кидок атаки. Відновлюється після короткого відпочинку",

    thief: classes.thief,
    thief_details: classes.thief_details,
    assasin: classes.assasin,
    assasin_details: classes.assasin_details,

    climbing: "лазіння",
    without_speed_fee: "без штрафу швидкості",

    dex_bonus: "бонус Спритності",
    on_size_jumps: "на стрибки з розбігу",

    an_ability: "здатність",
    to_use_magic_items: "використовувати будь-які магічні предмети та сувої",

    bonus_move: "Додатковий повний хід",
    in_first_round: "на першому раунді бою (з -10 Ініціативи)",

    tool_disguise: "гримувальні",
    tool_poisoner: "отруйника",

    on_not_moved: "на атаки по істотах, які ще не зробили хід у цьому раунді",

    double_damage: "2× пошкодження",
    on_sudden_attack: "по істотах, захоплених зненацька, і не ходили в поточному бою",
    on_sudden_attack_extra: "по істотах, захоплених зненацька, якщо вони провалили Випробування Статури",

    days: "днів",
    hours: "годин",

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

    material_shillelagh: "дубинка або посох",
    new_w: "нове",

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

    dice_throw: "кидок",

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

    temporary: "тимчасове",

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

    targets_number: "цілей",

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

    material_ink_10gold: "чорнило за 10 🟡",

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

    material_pearl_100gold: "перлина за 10 🟡",

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

    material_familiar_10gold:"вугілля + пахощі + жаровня за 10 🟡",

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

    sum_w:"сумарне",

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

    liters_number:"літрів води",

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

    material_diamond_50gold:"діамант за 50 🟡",

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

    material_flave_ruby_50gold: "порошок рубіну за 50 🟡 ( витрачається )",

    spell_continual_flame: spells.continual_flame,
    spell_continual_flame_details: spells.continual_flame_details,
    spell_continual_flame_expanded: spells.continual_flame_expanded,

    spell_see_invisibility: spells.see_invisibility,
    spell_see_invisibility_details: spells.see_invisibility_details,
    spell_see_invisibility_expanded: spells.see_invisibility_expanded,

    spell_suggestion: spells.suggestion,
    spell_suggestion_details: spells.suggestion_details,
    spell_suggestion_expanded: spells.suggestion_expanded,

    material_magic_mouth_50gold: "Шматочок медових сот і порошок нефриту за 10 🟡 ( витрачаються )",

    spell_magic_mouth: spells.magic_mouth,
    spell_magic_mouth_details: spells.magic_mouth_details,
    spell_magic_mouth_expanded: spells.magic_mouth_expanded,

    material_golden_dust_25gold: "Золотий пил за 25 🟡 ( витрачається ).",

    spell_arcane_lock: spells.arcane_lock,
    spell_arcane_lock_details: spells.arcane_lock_details,
    spell_arcane_lock_expanded: spells.arcane_lock_expanded,

    spell_phantasmal_force: spells.phantasmal_force,
    spell_phantasmal_force_details: spells.phantasmal_force_details,
    spell_phantasmal_force_expanded: spells.phantasmal_force_expanded,

    material_augury_25gold: "Особливі палички, кісточки або фігурки з мітками за 25 🟡",

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

    bullets: "снаряди",

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

    material_warding_bond_50gold: "Пара платинових кілець за 50 🟡",
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

    holy_symbol: "священний символ",
    holy_symbol_details: "Може бути використаний як фокус для заклять.",

    priests_pack: "набір священика",
    priests_pack_details: "-",

    armor_shield: "щит",
    armor_shield_details: "Щит виготовляється з дерева чи металу, і використовується однією рукою. Збільшує Броню на 2. Ви отримуєте перевагу лише від одного щита одночасно.",

    blanket: "ковдра",
    blanket_details: "-",

    donation_box: "коробка для пожертв",
    donation_box_details: "-",

    incense: "пахощі",
    incense_details: "-",

    censer: "кадило",
    censer_details: "-",

    vestment: "вбрання",
    vestment_details: "-",

    spell_divine_sense: spells.divine_sense,
    spell_divine_sense_details: spells.divine_sense_details,
    spell_divine_sense_expanded: spells.divine_sense_expanded,

    spell_paladin_divine_smite: spells.paladin_divine_smite,
    spell_paladin_divine_smite_details: spells.paladin_divine_smite_details,
    spell_paladin_divine_smite_expanded: spells.paladin_divine_smite_expanded,

    stock: "запас",

    spell_lay_on_hands: spells.lay_on_hands,
    spell_lay_on_hands_details: spells.lay_on_hands_details,
    spell_lay_on_hands_expanded: spells.lay_on_hands_expanded,

    battle_style: "бойовий стиль",

    style_dueling: "дуелянт",
    style_protection: "захист",
    style_defence: "оборона",
    style_great_weapon: "велика збооя",
    style_double_weapon: "дві зброї",
    style_archery: "стрільба",

    on_attack_signle_one_handed: "+2 на пошкодження від ближніх атак однією рукою",

    spell_side_pary: spells.side_pary,
    spell_side_pary_details: spells.side_pary_details,
    spell_side_pary_expanded: spells.side_pary_expanded,

    on_armor_if_armor: "+1 на Броню при одягнених обладунках",

    if_1_or_2_on_two_handed_weapon: "пошкодження дворучної зброї, якщо випало 1 або 2",

    on_sick: "до хвороб",

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

    push: "поштовх",

    spell_create_or_destroy_water: spells.create_or_destroy_water,
    spell_create_or_destroy_water_details: spells.create_or_destroy_water_details,
    spell_create_or_destroy_water_expanded: spells.create_or_destroy_water_expanded,

    short_run: "короткий розбіг",

    feat_athlete: "Атлет",
    feat_athlete_details: "Ви пройшли інтенсивну фізичну підготовку.",

    quicko: "швидке",
    getting_up: "встання на ноги",

    feat_alert: "Пильний",
    feat_alert_details: "Ви завжди готові до небезпек.",

    on_sudden: "до застання зненацька",

    on_stealth: "на атаки по вас із непомітності",

    feat_war_caster: "Бойовий заклинач",
    feat_war_caster_details: "Ви вивчили магічні техніки, і навчилися накладати закляття в запалі битви.",

    on_con_save_while_concentrating: "на Випробування Статури при концентрації",

    use_somatic: "Використання Жестів",
    in_taken_hands: "зайнятими руками",

    cast_reaction: "Реакція як Каст",
    for_spells_action: "для заклять з Кастом Основна або Бонусна дія",

    feat_grappler: "Борець",
    feat_grappler_details: "Ви розвинули навички, потрібні для міцного cхоплення супротивників.",

    on_attack_grapple: "на атаки цілі, яку ви тримаєте у cхопленні",

    restrain: "Обплутування",
    creature_on_addititonal_grapple: "істоти при додатковому схопленні",

    feat_lucky: "Щасливчик",
    feat_lucky_details: "Вам якимось чином щастить саме тоді, коли це потрібно.",

    on_any_d20: "на будь-який кидок d20, навіть на ворожий кидок атаки на вас. Використовує 1× Слот удачі.",

    feat_mounted_combatant: "Верховий боєць",
    feat_mounted_combatant_details: "Ви небезпечний ворог, коли ви верхи на скакуні.",

    on_mounted_attack: "на верхові атаки по істотах не верхи і менших за вашого скакуна.",

    redirect_attack: "переспрямувати атаку",
    from_mount_on_self: "зі скакуна на себе",

    reduce_damage: "зменшення пошкодження",
    on_mount_save_dex: "по скакуну при Випробуваннях Спритності",

    feat_observant: "Уважний",
    feat_observant_details: "Ви швидко вловлюєте дрібні подробиці.",

    lips_read: "читання по губах",

    feat_martial_adept: "Військовий адепт",
    feat_martial_adept_details: "Ви пройшли військову підготовку, що дозволяє здійснювати спеціальні бойові прийоми. Якщо у вас є Маневри, ви отримуєте ще один (d8). В іншому випадку ви отримуєте один слабший Маневр (d6).",

    plus_1: "+1",

    if_succeed: "при успіху",

    superiority_dice_slots: "Маневри",
    superiority_dice_slots_feat: "Маневри / Військовий адепт",
    superiority_dice_slot: "1× Маневр",
    maneuvers: "маневри",
    maneuver: "маневр",

    divine_sense_slots: "Божественне відчуття",
    divine_sense_slot: "1× Божественне відчуття",

    divine_channel_slots: "Божественний канал",
    divine_channel_slot: "1× Божественний канал",

    rage_slots: "Слоти Люті",
    rage_slot: "1× Слот Люті",

    spell_slots: "Слоти мани",
    spell_slot: "1× Слот мани",

    movement: "пересування",

    spell_maneuver_ambush: spells.maneuver_ambush,
    spell_maneuver_ambush_details: spells.maneuver_ambush_details,
    spell_maneuver_ambush_expanded: spells.maneuver_ambush_expanded,

    spell_maneuver_evasive_footwork: spells.maneuver_evasive_footwork,
    spell_maneuver_evasive_footwork_details: spells.maneuver_evasive_footwork_details,
    spell_maneuver_evasive_footwork_expanded: spells.maneuver_evasive_footwork_expanded,

    bonus_w_fem: "бонусна",

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

    reduction_w: "зменшення",

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

    feat_inspiring_leader: "Надихаючий лідер",
    feat_inspiring_leader_details: "Ви можете додати наснаги супутникам, зміцнивши їхню рішучість.",

    savage_attacker: "Дикий атакуючий",
    savage_attacker_details: "Ваші атаки завдають більше пошкодження.",

    of_damage_dice_once_per_move: "пошкодження від атаки один раз на хід",

    weapons_improvised: weapons.improvised,
    weapons_improvised_details: weapons.improvised_details,

    spell_grapple: spells.grapple,
    spell_grapple_details: spells.grapple_details,
    spell_grapple_expanded: spells.grapple_expanded,

    feat_lightly_armored: "Знавець легких обладунків",
    feat_lightly_armored_details: "Ви навчилися носити легкі обладунки.",

    feat_moderately_armored: "Знавець середніх обладунків",
    feat_moderately_armored_details: "Ви навчилися носити середні обладунки.",

    feat_heavily_armored: "Знавець важких обладунків",
    feat_heavily_armored_details: "Ви навчилися носити важкі обладунки.",

    feat_dual_wielder: "Боєць двома зброями",
    feat_dual_wielder_details: "Ви знаєте, як використовувати відразу дві зброї.",

    on_armor_if_two_weapons: "+1 до Броні при використання двох зброй",

    use_of_two_weapons: "Використання двох зброй,",
    heavier_than_light: "що важчі ніж легкі",

    quick_take: "Швидке озброєння",
    of_two_weapons: "та прибирання двох зброй одночасно",

    feat_dungeon_delver: "Шукач підземель",
    feat_dungeon_delver_details: "Ви навчити шукати приховані пастки та потаємні двері у підземеллях.",

    on_hidden_doors: "на пошук таємних дверей",
    on_trap_evasion: "на уникнення пасток та ефектів від них",
    on_trap_damage: "до пошкодження від пасток",
    on_passive_perception_on_quick_move: "на пасивну Уважність при швидкому переміщенні",

    feat_tough: "Міцний",
    feat_tough_details: "Ви відчуваєте більше життєвих сил з кожним рівнем.",

    feat_healer: "Лікар",
    feat_healer_details: "Ви здібний медик, що дозволяє швидко заліковувати рани та повертати союзників до ладу.",

    plus_1_to_hp: "Відновлення 1 HP",
    on_use_of_medical_tools: "при використанні набору цілителя для стабілізації вмираючого",

    spell_healer_tooling: spells.healer_tooling,
    spell_healer_tooling_details: spells.healer_tooling_details,
    spell_healer_tooling_expanded: spells.healer_tooling_expanded,

    healers_tool_slot: "1× Набір цілителя",
    healers_tool: "Набір цілителя",

    feat_great_weapon_master: "Майстер великої зброї",
    feat_great_weapon_master_details: "Ви навчилися використовувати вагу своєї зброї, дозволяючи інерції посилювати ваші атаки.",

    feat_polearm_master: "Майстер держакової зброї",
    feat_polearm_master_details: "Ви можете стримувати ворогів зброєю із властивістю «досяжність».",

    spell_extra_strike: spells.extra_strike,
    spell_extra_strike_details: spells.extra_strike_details,
    spell_extra_strike_expanded: spells.extra_strike_expanded,

    spell_heavy_strike: spells.heavy_strike,
    spell_heavy_strike_details: spells.heavy_strike_details,
    spell_heavy_strike_expanded: spells.heavy_strike_expanded,

    spell_polearm_strike: spells.polearm_strike,
    spell_polearm_strike_details: spells.polearm_strike_details,
    spell_polearm_strike_expanded: spells.polearm_strike_expanded,

    provoked_attack: "Провокована атака",
    on_polearm_reach: "в межах досяжності древка",

    feat_weapon_master: "Майстер зброї",
    feat_weapon_master_details: "Ви знаєте, як користуватися безліччю видів зброї.",

    on_stealth_in_medium_armor: "на Непомітність у одягнених середніх обладунках",
    on_medium_armor: "+1 на Броню середніх обладунків, при Базовій Спритності 16+",

    feat_medium_armor_master: "Майстер середніх обладунків",
    feat_medium_armor_master_details: "Ви звикли до переміщення в середніх обладунках.",

    feat_heavy_armor_master: "Майстер важких обладунків",
    feat_heavy_armor_master_details: "Ви можете своїм обладунком відхиляти удари, які б інших вбили.",

    damage_reduction: "Зниження механічних пошкоджень",
    on_3_in_heavy_armor: "на -3, у важких обладунках",

    feat_shield_master: "Майстер щитів",
    feat_shield_master_details: "Ви використовуєте щити не лише для захисту, а й для нападу.",

    spell_shield_push: spells.shield_push,
    spell_shield_push_details: spells.shield_push_details,
    spell_shield_push_expanded: spells.shield_push_expanded,

    on_dex_check_in_shield: "+2 від щита, при Випробуваннях Спритності від ефектів, націлених тільки на вас",

    feat_spell_sniper: "Влучний заклинач",
    feat_spell_sniper_details: "Ви отримали знання про техніку, яка покращує атаку деякими видами заклять.",

    double_range: "2× дальність",
    on_spells_with_aim: "для заклять із прицілюванням",

    ignoring: "Ігнорування",
    on_covers_spells: "укриттів на 1/2 і на 3/4, при використанні заклять із прицілюванням",

    feat_sharpshooter: "Влучний стрілець",
    feat_sharpshooter_details: "Ви опанували далекобійну зброю і можете робити постріли, які інші вважали неможливими.",

    on_shots_in_max_distance: "на постріли з максимальної дистанції зброї",
    on_covers: "укриттів на 1/2 і на 3/4, при далекобійних атаках",

    spell_charge_attack: spells.charge_attack,
    spell_charge_attack_details: spells.charge_attack_details,
    spell_charge_attack_expanded: spells.charge_attack_expanded,

    spell_charge_push: spells.charge_push,
    spell_charge_push_details: spells.charge_push_details,
    spell_charge_push_expanded: spells.charge_push_expanded,

    spell_heavy_shot: spells.heavy_shot,
    spell_heavy_shot_details: spells.heavy_shot_details,
    spell_heavy_shot_expanded: spells.heavy_shot_expanded,

    feat_charger: "Нападник",
    feat_charger_details: "Ви багато рухаєтеся у бою.",

    mastery_bonus: "Бонус Майстерності",
    on_armor_finesse: "до Броні, при Реакції на атаку, якщо у вас фехтувальна зброя",

    feat_defensive_duelist: "Оборонний дуелянт",
    feat_defensive_duelist_details: "Ви майстерно захищаєтесь фехтувальною зброєю.",

    feat_keen_mind: "Чудова пам'ять",
    feat_keen_mind_details: "Ви з неймовірною точністю можете відстежувати час, напрямок та деталі минулого.",

    always: "завжди",
    know_north: "відома сторона світу",
    know_time: "відомий час світанку/заходу сонця",
    clear_memory: "точні спогади",
    about_xp_1month: "про все прожите за останній місяць",

    feat_mobile: "Рухливий",
    feat_mobile_details: "Ви неймовірно швидкі та спритні.",

    on_hard_area_dash: "на Ривок у важкопрохідній місцевості",

    no_provocation: "немає провокації",
    in_this_move_after_attack: "від істоти, яку ви спробували атакувати в цьому ходу, ближньою зброєю",

    feat_magic_initiate_cleric: "Посвячений у магію жреця",
    feat_magic_initiate_details_cleric: "Ви знаєте два закляття жреця, що не потребують мани, і одне заклинання, що вимагає 1 ману (його ви можете використовувати без мани, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками).",

    feat_magic_initiate_druid: "Посвячений у магію друїда",
    feat_magic_initiate_details_druid: "Ви знаєте два заклинання друїда, що не вимагають мани, і одне заклинання, що вимагає 1 ману (його ви можете використовувати без мани, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками).",

    feat_magic_initiate_warlock: "Посвячений у магію чаклуна",
    feat_magic_initiate_details_warlock: "Ви знаєте два закляття чаклуна, що не потребують мани, і одне заклинання, що вимагає 1 ману (його ви можете використовувати без мани, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками).",

    feat_magic_initiate_sorcerer: "Посвячений у магію чародія",
    feat_magic_initiate_details_sorcerer: "Ви знаєте два закляття чародія, що не потребують мани, і одне заклинання, що вимагає 1 ману (його ви можете використовувати без мани, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками).",

    feat_magic_initiate_wizard: "Посвячений у магію чарівника",
    feat_magic_initiate_details_wizard: "Ви знаєте два закляття чарівника, що не потребують мани, і одне заклинання, що вимагає 1 ману (його ви можете використовувати без мани, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками).",

    feat_magic_initiate_bard: "Посвячений у магію барда",
    feat_magic_initiate_details_bard: "Ви знаєте два закляття барда, що не потребують мани, і одне заклинання, що вимагає 1 ману (його ви можете використовувати без мани, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками).",

    spells_0: "закляття [0]",
    spells_1: "закляття [1]",

    no_mana_but_once_a_day: "Ви зможете використовувати обране закляття без мани, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками.",

    use_no_mana: "використання без мани",
    one_spell_cleric: "одного закляття жреця (один раз на день)",
    one_spell_druid: "одного закляття друїда (один раз на день)",
    one_spell_warlock: "одного закляття чаклуна (один раз на день)",
    one_spell_sorcerer: "одного закляття чародія (один раз на день)",
    one_spell_wizard: "одного закляття чарівника (один раз на день)",
    one_spell_bard: "одного закляття барда (один раз на день)",

    feat_skulker: "Пронира",
    feat_skulker_details: "Ви знаєте, як зливатися із тінями.",

    ability_to_hide: "можливість сховатися",
    if_small_cover: "навіть якщо слабо заслонені",
    no_reveal: "збереження Непомітності",
    if_missed: "при промаху далекобійною атакою",
    on_perception_sight: "на Уважність, повʼязану з зором",

    no_mana_but_ritual: "Ви зможете використовувати обране закляття без мани, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу.",

    ritual_book: "ритуальна книга",
    ritual_book_details: "",

    spell_learn_ritual: spells.learn_ritual,
    spell_learn_ritual_details: spells.learn_ritual_details,
    spell_learn_ritual_expanded: spells.learn_ritual_expanded,

    spell_learn_spell: spells.learn_spell,
    spell_learn_spell_details: spells.learn_spell_details,
    spell_learn_spell_expanded: spells.learn_spell_expanded,

    hour_per_lvl: "г / рів",
    gold50_per_lvl: "чорнила та ін. за 50 🟡 / рів",

    feat_ritual_caster_cleric: "Ритуальний заклинач: жрець",
    feat_ritual_caster_details_cleric: "Ви дізнаєтесь два ритуали жреця. Ви зможете використовувати їх без мани, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. Також ви можете вивчати інші знайдені ритуальні закляття жреця.",

    feat_ritual_caster_druid: "Ритуальний заклинач: друїд",
    feat_ritual_caster_details_druid: "Ви дізнаєтесь два ритуали друїда. Ви зможете використовувати їх без мани, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. Також ви можете вивчати інші знайдені ритуальні закляття друїда.",

    feat_ritual_caster_warlock: "Ритуальний заклинач: чаклун",
    feat_ritual_caster_details_warlock: "Ви дізнаєтесь два ритуали чаклуна. Ви зможете використовувати їх без мани, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. Також ви можете вивчати інші знайдені ритуальні закляття чаклуна.",

    feat_ritual_caster_sorcerer: "Ритуальний заклинач: чародій",
    feat_ritual_caster_details_sorcerer: "Ви дізнаєтесь два ритуали чародія. Ви зможете використовувати їх без мани, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. Також ви можете вивчати інші знайдені ритуальні закляття чародія.",

    feat_ritual_caster_wizard: "Ритуальний заклинач: чарівник",
    feat_ritual_caster_details_wizard: "Ви дізнаєтесь два ритуали чарівника. Ви зможете використовувати їх без мани, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. Також ви можете вивчати інші знайдені ритуальні закляття чарівника.",

    feat_ritual_caster_bard: "Ритуальний заклинач: бард",
    feat_ritual_caster_details_bard: "Ви дізнаєтесь два ритуали барда. Ви зможете використовувати їх без мани, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. Також ви можете вивчати інші знайдені ритуальні закляття барда.",

    feat_elemental_adept_sound: "Стихійний адепт 🔊 Звуку",
    feat_elemental_adept_sound_details: "Ви впевнено користуєтесь закляттями певної стихії.", 
    of_resistanse_sound: "стійкості до пошкоджень 🔊 Звуком",
    two_min: "2 як мінімальний результат",
    on_damage_dice_of_sound: "на кожному кубі пошкоджень 🔊 Звуком",

    feat_elemental_adept_acid: "Стихійний адепт ⚗️ Кислоти",
    feat_elemental_adept_acid_details: "Ви впевнено користуєтесь закляттями певної стихії.", 
    of_resistanse_acid: "стійкості до пошкоджень ⚗️ Кислотою",
    on_damage_dice_of_acid: "на кожному кубі пошкоджень ⚗️ Кислотой",

    feat_elemental_adept_fire: "Стихійний адепт 🔥 Вогню",
    feat_elemental_adept_fire_details: "Ви впевнено користуєтесь закляттями певної стихії.", 
    of_resistanse_fire: "стійкості до пошкоджень 🔥 Вогнем",
    on_damage_dice_of_fire: "на кожному кубі пошкоджень 🔥 Вогнем",

    feat_elemental_adept_cold: "Стихійний адепт ❄️ Холоду",
    feat_elemental_adept_cold_details: "Ви впевнено користуєтесь закляттями певної стихії.", 
    of_resistanse_cold: "стійкості до пошкоджень ❄️ Холодом",
    on_damage_dice_of_cold: "на кожному кубі пошкоджень ❄️ Холодом",

    feat_elemental_adept_electricity: "Стихійний адепт ⚡ Струму",
    feat_elemental_adept_electricity_details: "Ви впевнено користуєтесь закляттями певної стихії.", 
    of_resistanse_electricity: "стійкості до пошкоджень ⚡ Струмом",
    on_damage_dice_of_electricity: "на кожному кубі пошкоджень ⚡ Струмом",

    double_CON: "2× Статура",
    on_regen_min_2: "при регені (мінімум 2)",

    feat_durable: "Витривалий",
    feat_durable_details: "Ви дуже живучий.",
    
    feat_sentinel: "Страж",
    feat_sentinel_details: "Ви опанували техніку, що дозволяє користуватися всіма прогалинами в обороні супротивника.",

    provocation: "Провокація",
    on_disengage: "при виході з вашої досяжності, навіть при Відході",
    on_ally_attack: "якщо атакують іншого поряд з вами",

    stopka: "Зупинка",
    creature_affected_provoked_attack: "істоти при влучанні провокованої атаки",

    feat_mage_slayer: "Вбивця магів",
    feat_mage_slayer_details: "Ви розробили техніки, корисні у рукопашній битві із заклиначами.",

    on_save_spells_near: "на Випробування від заклять, накладених поруч",
    on_concentration_to_attacked_creature: "на концентрацію істоти, ураженої вашою атакою",
    on_casting_near: "на творця закляття поруч",

    feat_resilient_strength: "Стійкий: Сила",
    feat_resilient_strength_details: "",

    feat_resilient_dexterity: "Стійкий: Спритність",
    feat_resilient_dexterity_details: "",

    feat_resilient_constitution: "Стійкий: Статура",
    feat_resilient_constitution_details: "",

    feat_resilient_intelligence: "Стійкий: Інтелект",
    feat_resilient_intelligence_details: "",

    feat_resilient_wisdom: "Стійкий: Мудрість",
    feat_resilient_wisdom_details: "",

    feat_resilient_charisma: "Стійкий: Харизма",
    feat_resilient_charisma_details: "",

    feat_crossbow_expert: "Експерт в арбалетах",
    feat_crossbow_expert_details: "Ви маєте велику практику з арбалетом.",

    recharge_on_arbalets: "перезарядки на арбалеті",
    near_target_arbalet: "на ближню ціль арбалета",

    spell_crossbow_shot: spells.crossbow_shot,
    spell_crossbow_shot_details: spells.crossbow_shot_details,
    spell_crossbow_shot_expanded: spells.crossbow_shot_expanded,

    feat_linguist: "Мовник",
    feat_linguist_details: "Ви вивчали мови та способи кодування текстів.",

    spell_create_crypt: spells.create_crypt,
    spell_create_crypt_details: spells.create_crypt_details,
    spell_create_crypt_expanded: spells.create_crypt_expanded,

    packs: "набори",

    chest: "Скриня",
    chest_details: "Контейнер місткістю 340 л.",

    scroll_tube: "Тубус",
    scroll_tube_details: "Контейнер для сувоїв або карт.",

    fine_clothes: "Дорогий одяг",
    fine_clothes_details: "Вишукане вбрання з дорогих матеріалів, яке навіть може бути прикрашене шовковими нитками та дорогоцінним камінням. Одягайте його, коли вам потрібно справити враження на панів, брати участь у дипломатії або залякати бідних людей. Не одягайте його, коли вирушаєте в пригоду - модні тканини надто тонкі для небезпек підземель, а всякі брязкальця можуть привернути увагу неприємних істот!",

    ink: "Чорнило",
    ink_details: "Пляшечка чорнила",

    ink_pen: "Перо",
    ink_pen_details: "Перо для використання чорнила.",

    lamp: "Олійна лампа",
    lamp_details: "Випромінює яскраве світло в межах 15 ф і тьмяне світло в межах ще 30 ф. Горить 6 годин від однієї фляги олії.",

    perfume: "Парфуми",
    perfume_details: "Флакон запашних парфумів.",

    paper: "Папір",
    paper_details: "Аркуш паперу.",

    sealing_wax: "Червоний віск",
    sealing_wax_details: "Віск для опечатування.",

    soap: "Мило",
    soap_details: "Шматок ароматного мила.",

    costume: "Сценічний костюм",
    costume_details: "Річ, у яку можуть одягатися персонажі вистави.",

    disguise_kit: "Набір для гриму",
    disguise_kit_details: "Косметика та бутафорія, що дозволяє змінювати вигляд і успішно використовувати Обман / Залякування / Артистичність / Переконливість, а також приховати травми або розпізнати чужий грим.<br/><br/>Ви можете створити обличчя для маскування під час довгого відпочинку. На надягання подоби після його створення потрібна 1 хвилина. Ви можете одночасно мати при собі тільки одну таку подобу, не привертаючи непотрібної уваги, якщо тільки у вас немає Сумки зберігання або іншого подібного способу залишити їх непоміченими. Кожна така подоба важить 1 фунт. В інших випадках потрібно 10 хвилин на створення подоби, яке трохи змінює вашу зовнішність і 30 хвилин, якщо потрібні більші зміни.",

    item_music_drums: "барабан",
    item_music_viol: "віола",
    item_music_bagpipes: "волинка",
    item_music_lyre: "ліра",
    item_music_lute: "лютня",
    item_music_horn: "ріжок",
    item_music_pan_flute: "сопілка",
    item_music_flute: "флейта",
    item_music_dulcimer: "цимбали",
    item_music_shawm: "шалмій",

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

    bardic_inspiration_slots: "Слоти Натхнення",
    bardic_inspiration_slot: "Слот Натхнення",

    dice: "куб",

    spell_bardic_inspiration: spells.bardic_inspiration,
    spell_bardic_inspiration_details: spells.bardic_inspiration_details,
    spell_bardic_inspiration_expanded: spells.bardic_inspiration_expanded,

    spell_focus: "Фокус заклять",
    as_musical_instrument: "у вигляді музичного інструмента",

    bonus_o_w: "бонусне",

    spell_song_of_rest: spells.song_of_rest,
    spell_song_of_rest_details: spells.song_of_rest_details,
    spell_song_of_rest_expanded: spells.song_of_rest_expanded,

    restoring: "Відновлення",
    of_inspiration_slots_on_short_rest: "Слотів Натхнення навіть за короткий відпочинок",

    college_valor: classes.college_valor,
    college_valor_details: classes.college_valor_details,

    on_damage_and_ac: "можна використовувати для пошкодження або броні",

    spell_cutting_word: spells.cutting_word,
    spell_cutting_word_details: spells.cutting_word_details,
    spell_cutting_word_expanded: spells.cutting_word_expanded,

    fighter: classes.fighter,
    fighter_details: classes.fighter_details,

    armor_chainmail:"кольчуга",
    armor_chainmail_details: "",

    on_damage_second_attack:"на пошкодження і від другої атаки в ході",
    plus_2_on_ranged: "+2 на далекобійні атаки",

    spell_second_wind: spells.second_wind,
    spell_second_wind_details: spells.second_wind_details,
    spell_second_wind_expanded: spells.second_wind_expanded,

    second_wind_slots: "Другі дихання",
    second_wind_slot: "Друге дихання",

    spell_action_surge: spells.action_surge,
    spell_action_surge_details: spells.action_surge_details,
    spell_action_surge_expanded: spells.action_surge_expanded,

    action_surge_slots: "Сплески дій",
    action_surge_slot: "Сплеск дій",

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

    ctit_damage: "Подвійне пошкодження",
    on_dice_19_20: "не тільки при 20, а й при 19",

    command_back: "назад",
    choose_variant: "варіант",
    choose_varianta: "варианти",
    choose_variants: "варіантів",

    step_background: "типаж",

    modifier: "модифікатор",

    min_base_strength: "дорівнює мінімум базовій Силі",
    speed_plus_10:"+10 Швидкість",
    if_no_heavy_armor_applied:"якшо не в важких обладунках (застосовано)",

    slot_lvl: "рівень слоту",

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

    restoring: "відновлення",
    mana_slots_short_rest_lvl_05: "рівень/2 слотів мани при короткому відпочинку",
    mana_slots_short_rest_lvl_05_up_to_5: "рівень/2 слотів мани при короткому відпочинку, не більше [5]",

    component_pouch: "мішечок с компонентами",
    component_pouch_details: "Маленький водонепроникний шкіряний поясний гаманець із відділеннями для зберігання матеріальних компонентів та інших спеціальних предметів, необхідних для накладання заклять замість Фокусу, якщо тільки у цих компонентів не вказана вартість (дивіться опис закляття).",

    focus: "фокус",
    focus_details: "Особливий предмет — сфера, кристал, жезл, особливий посох, коротка дерев'яна паличка або схожий предмет — створений для створення заклять, умовою яких є Фокус.",

    science_book: "наукова книга",
    science_book_details: "",

    sand_pouch: "сумочка з піском",
    sand_pouch_details: "",

    knife: "невеликий ніж",
    knife_details: "",

    spell_book: "книга заклять",
    spell_book_details: "",

    school_of_evocation:classes.school_of_evocation,
    school_of_evocation_details:classes.school_of_evocation_details,

    twice_less:"Вдвічі менше",
    gold_and_time_evocation:"золота та часу на Вивчення знайденого закляття Втілення",

    save_ally:"Створити безпечні ділянки",
    one_plus_lvl_from_spell_evocation:"всередині області свого закляття Втілення",

    school_of_conjuration:classes.school_of_conjuration,
    school_of_conjuration_details:classes.school_of_conjuration_details,

    twice_less:"Вдвічі менше",
    gold_and_time_conjuration:"золота та часу на Вивчення знайденого закляття Виклику",

    spell_small_conjuration: spells.small_conjuration,
    spell_small_conjuration_details: spells.small_conjuration_details,
    spell_small_conjuration_expanded: spells.small_conjuration_expanded,

    school_of_illusion:classes.school_of_illusion,
    school_of_illusion_details:classes.school_of_illusion_details,

    twice_less:"Вдвічі менше",
    gold_and_time_illusion:"золота та часу на Вивчення знайденого закляття Ілюзіїї",

    school_of_necromancy:classes.school_of_necromancy,
    school_of_necromancy_details:classes.school_of_necromancy_details,

    twice_less:"Вдвічі менше",
    gold_and_time_necromancy:"золота та часу на Вивчення знайденого закляття Некромантії",

    school_of_abjuration:classes.school_of_abjuration,
    school_of_abjuration_details:classes.school_of_abjuration_details,

    twice_less:"Вдвічі менше",
    gold_and_time_abjuration:"золота та часу на Вивчення знайденого закляття Огородження",

    spell_magical_protection: spells.magical_protection,
    spell_magical_protection_details: spells.magical_protection_details,
    spell_magical_protection_expanded: spells.magical_protection_expanded,

    school_of_enchantment:classes.school_of_enchantment,
    school_of_enchantment_details:classes.school_of_enchantment_details,

    twice_less:"Вдвічі менше",
    gold_and_time_enchantment:"золота та часу на Вивчення знайденого закляття Чарів",

    school_of_transmutation:classes.school_of_transmutation,
    school_of_transmutation_details:classes.school_of_transmutation_details,

    twice_less:"Вдвічі менше",
    gold_and_time_transmutation:"золота та часу на Вивчення знайденого закляття Перетворення",

    school_of_divination:classes.school_of_divination,
    school_of_divination_details:classes.school_of_divination_details,

    twice_less:"Вдвічі менше",
    gold_and_time_divination:"золота та часу на Вивчення знайденого закляття Віщування",

    from_spell_kill_necromancy:"на 2× рівень закляття, від вбивства закляттями. 3× якщо Некромантія",

    magical_protection: "Магічний захист",

    end_of_the_day: "до закінчення тривалого відпочинку",

    look: "погляд",

    spell_hypnotic_look: spells.hypnotic_look,
    spell_hypnotic_look_details: spells.hypnotic_look_details,
    spell_hypnotic_look_expanded: spells.hypnotic_look_expanded,

    spell_small_alchemy: spells.small_alchemy,
    spell_small_alchemy_details: spells.small_alchemy_details,
    spell_small_alchemy_expanded: spells.small_alchemy_expanded,

    spell_portent: spells.portent,
    spell_portent_details: spells.portent_details,
    spell_portent_expanded: spells.portent_expanded,

    use_wo_mana:"використання без мани",
    two_spells_1_and_2: "одного закляття[1] і одного закляття[2]",
    two_spells_3: "двох заклять[3]. Один раз. Відновлюється після короткого відпочинку",

    min_half_damage: "мінімум половина пошкодження",
    from_cantrips: "від заклять[0]",

    plus_INT: "+ модифікатор Інтелекту",
    to_damage_evocation: "до пошкодження усіх заклять Втілення",

    spell_overload: spells.overload,
    spell_overload_details: spells.overload_details,
    spell_overload_expanded: spells.overload_expanded,

    druid: classes.druid,
    druid_details: classes.druid_details,

    inf: "безкінечно",

    weapons_maces: weapons.maces,
    weapons_maces_details: weapons.maces_details,

    weapons_clubs: weapons.clubs,
    weapons_clubs_details: weapons.clubs_details,

    unability: "неспроможність",
    to_wear_metal_armor: "носити металеву броню або щит",

    weapons_spears: weapons.spears,
    weapons_spears_details: weapons.spears_details,

    weapons_javelins: weapons.javelins,
    weapons_javelins_details: weapons.javelins_details,

    weapons_sickles: weapons.sickles,
    weapons_sickles_details: weapons.sickles_details,

    weapons_scimitars: weapons.scimitars,
    weapons_scimitars_details: weapons.scimitars_details,

    spell_druid_message: spells.druid_message,
    spell_druid_message_details: spells.druid_message_details,
    spell_druid_message_expanded: spells.druid_message_expanded,

    spell_wild_shape: spells.wild_shape,
    spell_wild_shape_details_2: spells.wild_shape_details_2,
    spell_wild_shape_details_4: spells.wild_shape_details_4,
    spell_wild_shape_details_8: spells.wild_shape_details_8,
    spell_wild_shape_expanded: spells.wild_shape_expanded,

    wild_shape_slots: "Слоти дикої форми",
    wild_shape_slot: "1× Слот дикої форми",

    dangerness: "небезпечність",

    animal_025: "Вовк",
    animal_05: "Крокодил",
    animal_1: "Тигр",

    spell_find_familiar_druid: spells.find_familiar_druid,
    spell_find_familiar_druid_details: spells.find_familiar_druid_details,
    spell_find_familiar_druid_expanded: spells.find_familiar_druid_expanded,

    aging_slow: "Уповільнення старіння",
    ten_times: "у 10 разів",
    free_spell_parts_in_wildshape: "умов заклять без ціни, при Дикій формі",

    spell_wild_shape_combat: spells.wild_shape_combat,
    spell_wild_shape_combat_details_2: spells.wild_shape_combat_details_2,
    spell_wild_shape_combat_details_4: spells.wild_shape_combat_details_4,
    spell_wild_shape_combat_details_8: spells.wild_shape_combat_details_8,
    spell_wild_shape_combat_details_9: spells.wild_shape_combat_details_9,
    spell_wild_shape_combat_details_10: spells.wild_shape_combat_details_10,
    spell_wild_shape_combat_details_12: spells.wild_shape_combat_details_12,
    spell_wild_shape_combat_details_15: spells.wild_shape_combat_details_15,
    spell_wild_shape_combat_details_18: spells.wild_shape_combat_details_18,
    spell_wild_shape_combat_expanded: spells.wild_shape_combat_expanded,

    circle_of_the_land_arctic: classes.circle_of_the_land_arctic,
    circle_of_the_land_coast: classes.circle_of_the_land_coast,
    circle_of_the_land_desert: classes.circle_of_the_land_desert,
    circle_of_the_land_forest: classes.circle_of_the_land_forest,
    circle_of_the_land_grassland: classes.circle_of_the_land_grassland,
    circle_of_the_land_mountain: classes.circle_of_the_land_mountain,
    circle_of_the_land_swamp: classes.circle_of_the_land_swamp,
    circle_of_the_land_underdark: classes.circle_of_the_land_underdark,
    circle_of_the_moon: classes.circle_of_the_moon,

    circle_of_the_land_arctic_details: classes.circle_of_the_land_arctic_details,
    circle_of_the_land_coast_details: classes.circle_of_the_land_coast_details,
    circle_of_the_land_desert_details: classes.circle_of_the_land_desert_details,
    circle_of_the_land_forest_details: classes.circle_of_the_land_forest_details,
    circle_of_the_land_grassland_details: classes.circle_of_the_land_grassland_details,
    circle_of_the_land_mountain_details: classes.circle_of_the_land_mountain_details,
    circle_of_the_land_swamp_details: classes.circle_of_the_land_swamp_details,
    circle_of_the_land_underdark_details: classes.circle_of_the_land_underdark_details,
    circle_of_the_moon_details: classes.circle_of_the_moon_details,

    spell_wild_shape_heal: spells.wild_shape_heal,
    spell_wild_shape_heal_details: spells.wild_shape_heal_details,
    spell_wild_shape_heal_expanded: spells.wild_shape_heal_expanded,

    on_saving_from_plants: "на Випробування проти магічних рослин",
    no_speed_fee: "Немає штрафу швидкості",
    on_nonmagic_hard_area: "у немагічній важкопрохідній місцевості",
    on_enchantment_from_fey_elemental: "проти 😍 Зачарування феями чи елементалями",
    on_enchantment_from_fey_elemental: "проти 😱 Переляку феями чи елементалями",

    saving_wisdom: "Випробування Мудрості",
    on_any_animal_or_plant_attack: "для будь-якого звіра чи рослини, що намагається вас атакувати",

    spell_alter_self_druid: spells.alter_self_druid,

    of_nonmagic_damage_immunity_wild_shape: "імунітету цілі до немагічних атак та пошкоджень, при Дикій формі",

    cleric: classes.cleric,
    cleric_details: classes.cleric_details,

    refresh_to_recommended: "Повернути рекомендований розподіл",

    spell_prepare_shield: spells.prepare_shield,
    spell_prepare_shield_details: spells.prepare_shield_details,
    spell_prepare_shield_expanded: spells.prepare_shield_expanded,

    spell_divine_channel_undead: spells.divine_channel_undead,
    spell_divine_channel_undead_details: spells.divine_channel_undead_details,
    spell_divine_channel_undead_details_5: spells.divine_channel_undead_details_5,
    spell_divine_channel_undead_details_8: spells.divine_channel_undead_details_8,
    spell_divine_channel_undead_details_11: spells.divine_channel_undead_details_11,
    spell_divine_channel_undead_details_14: spells.divine_channel_undead_details_14,
    spell_divine_channel_undead_details_17: spells.divine_channel_undead_details_17,
    spell_divine_channel_undead_expanded: spells.divine_channel_undead_expanded,

    spell_divine_intervention: spells.divine_intervention,
    spell_divine_intervention_details: spells.divine_intervention_details,
    spell_divine_intervention_details_20: spells.divine_intervention_details_20,
    spell_divine_intervention_expanded: spells.divine_intervention_expanded,

    divine_intervention_slots: "Божественне втручання",
    divine_intervention_slot: "1× Божественне втручання",

    domain_thunder: classes.domain_thunder,
    domain_thunder_details: classes.domain_thunder_details,

    domain_war: classes.domain_war,
    domain_war_details: classes.domain_war_details,

    domain_life: classes.domain_life,
    domain_life_details: classes.domain_life_details,

    domain_knowledge: classes.domain_knowledge,
    domain_knowledge_details: classes.domain_knowledge_details,

    domain_trickery: classes.domain_trickery,
    domain_trickery_details: classes.domain_trickery_details,

    domain_nature: classes.domain_nature,
    domain_nature_details: classes.domain_nature_details,

    domain_light: classes.domain_light,
    domain_light_details: classes.domain_light_details,

    spell_thunder_wrath: spells.thunder_wrath,
    spell_thunder_wrath_details: spells.thunder_wrath_details,
    spell_thunder_wrath_expanded: spells.thunder_wrath_expanded,

    thunder_wrath_slots: "Гніви Бурі",
    thunder_wrath_slot: "1× Гнів Бурі",

    spell_divine_channel_wrath: spells.divine_channel_wrath,
    spell_divine_channel_wrath_details: spells.divine_channel_wrath_details,
    spell_divine_channel_wrath_expanded: spells.divine_channel_wrath_expanded,

    spell_divine_channel_directed_strike: spells.divine_channel_directed_strike,
    spell_divine_channel_directed_strike_details: spells.divine_channel_directed_strike_details,
    spell_divine_channel_directed_strike_expanded: spells.divine_channel_directed_strike_expanded,

    spell_divine_channel_war_god_bless: spells.divine_channel_war_god_bless,
    spell_divine_channel_war_god_bless_details: spells.divine_channel_war_god_bless_details,
    spell_divine_channel_war_god_bless_expanded: spells.divine_channel_war_god_bless_expanded,

    spell_thunder_strike: spells.thunder_strike,
    spell_thunder_strike_details: spells.thunder_strike_details,
    spell_thunder_strike_expanded: spells.thunder_strike_expanded,

    spell_divine_strike_sound: spells.divine_strike_sound,
    spell_divine_strike_weapon: spells.divine_strike_weapon,
    spell_divine_strike_radiant: spells.divine_strike_radiant,
    spell_divine_strike_poison: spells.divine_strike_poison,
    spell_divine_strike_nature: spells.divine_strike_nature,
    spell_divine_strike_details: spells.divine_strike_details,
    spell_divine_strike_nature_details: spells.divine_strike_nature_details,
    spell_divine_strike_expanded: spells.divine_strike_expanded,

    inspired_attack_slots: "Слоти Наснаги",
    inspired_attack_slot: "1× Слот Наснаги",

    to_no_magic_weapon: "пошкодженню від немагічної зброї",

    extra_healing: "додаткове зцілення",
    two_plus_spell_level: "2 + [рівень] закляття, для [1+] заклять",
    self_two_plus_spell_level: "і себе на 2 + [рівень] закляття, для [1+] заклять",

    spell_divine_channel_save_life: spells.divine_channel_save_life,
    spell_divine_channel_save_life_details: spells.divine_channel_save_life_details,
    spell_divine_channel_save_life_expanded: spells.divine_channel_save_life_expanded,

    always_max_heal: "завжди максимальне зцілення",
    from_spells: "від заклять",

    spell_divine_channel_learn_tool: spells.divine_channel_learn_tool,
    spell_divine_channel_learn_tool_details: spells.divine_channel_learn_tool_details,
    spell_divine_channel_learn_tool_expanded: spells.divine_channel_learn_tool_expanded,

    spell_divine_channel_read_thoughts: spells.divine_channel_read_thoughts,
    spell_divine_channel_read_thoughts_details: spells.divine_channel_read_thoughts_details,
    spell_divine_channel_read_thoughts_expanded: spells.divine_channel_read_thoughts_expanded,

    spell_divine_channel_mirror_image: spells.divine_channel_mirror_image,
    spell_divine_channel_mirror_image_details: spells.divine_channel_mirror_image_details,
    spell_divine_channel_mirror_image_details_17: spells.divine_channel_mirror_image_details_17,
    spell_divine_channel_mirror_image_expanded: spells.divine_channel_mirror_image_expanded,

    spell_divine_channel_cloak_of_shadows: spells.divine_channel_cloak_of_shadows,
    spell_divine_channel_cloak_of_shadows_details: spells.divine_channel_cloak_of_shadows_details,
    spell_divine_channel_cloak_of_shadows_expanded: spells.divine_channel_cloak_of_shadows_expanded,

    spell_divine_channel_charm_alimal_plant: spells.divine_channel_charm_alimal_plant,
    spell_divine_channel_charm_alimal_plant_details: spells.divine_channel_charm_alimal_plant_details,
    spell_divine_channel_charm_alimal_plant_details_17: spells.divine_channel_charm_alimal_plant_details_17,
    spell_divine_channel_charm_alimal_plant_expanded: spells.divine_channel_charm_alimal_plant_expanded,

    spell_cleric_extra_damage: spells.cleric_extra_damage,
    spell_cleric_extra_damage_details: spells.cleric_extra_damage_details,
    spell_cleric_extra_damage_expanded: spells.cleric_extra_damage_expanded,

    spell_cleric_see_past: spells.cleric_see_past,
    spell_cleric_see_past_details: spells.cleric_see_past_details,
    spell_cleric_see_past_expanded: spells.cleric_see_past_expanded,

    cleric_see_past_slots: "Слоти видінь",
    cleric_see_past_slot: "1× Слот видінь",

    spell_tricker_bless: spells.tricker_bless,
    spell_tricker_bless_details: spells.tricker_bless_details,
    spell_tricker_bless_expanded: spells.tricker_bless_expanded,

    spell_dampen_elements: spells.dampen_elements,
    spell_dampen_elements_details: spells.dampen_elements_details,
    spell_dampen_elements_expanded: spells.dampen_elements_expanded,

    warding_flare_slots: "Захисні спалахи",
    warding_flare_slot: "1× Захисний спалах",

    spell_divine_channel_radiance_dawn: spells.divine_channel_radiance_dawn,
    spell_divine_channel_radiance_dawn_details: spells.divine_channel_radiance_dawn_details,
    spell_divine_channel_radiance_dawn_expanded: spells.divine_channel_radiance_dawn_expanded,

    spell_crown_of_light: spells.crown_of_light,
    spell_crown_of_light_details: spells.crown_of_light_details,
    spell_crown_of_light_expanded: spells.crown_of_light_expanded,

    warlock: classes.warlock,
    warlock_details: classes.warlock_details,

    warlock_protector: "покровитель",

    archifey: classes.archifey,
    archifey_details: classes.archifey_details,

    fiend: classes.fiend,
    fiend_details: classes.fiend_details,

    great_old_one: classes.great_old_one,
    great_old_one_details: classes.great_old_one_details,

    pact_of_the_tome: "Гримуара",
    pact_of_the_tome_details: "Ваш покровитель дарує вам гримуар, що зветься «Книга тіней».",

    book_of_shadows:"Книга Тіней",
    book_of_shadows_details:"Гримуар, який вам дарував ваш покровитель. У ньому записані 3 ваші закляття. Якщо ви втрачаєте книгу, вам потрібно провести ритуал тривалістю 1 годину, щоб отримати нову від свого покровителя. Ви можете провести цей ритуал під час короткого чи тривалого відпочинку. Попередня книга при цьому знищується. Книга перетворюється у попіл при вашій смерті.",

    pact_of_the_blade: "Клинка",
    pact_of_the_blade_details: "Ваш покровитель дарує вам зброю договору.",

    spell_create_weapon: spells.create_weapon,
    spell_create_weapon_details: spells.create_weapon_details,
    spell_create_weapon_expanded: spells.create_weapon_expanded,

    spell_convert_weapon: spells.convert_weapon,
    spell_convert_weapon_details: spells.convert_weapon_details,
    spell_convert_weapon_expanded: spells.convert_weapon_expanded,

    pact_of_the_blade: "Ланцюга",
    pact_of_the_blade_details: "Ваш покровитель дарує вам потойбіччого помічника. Ви можете вибрати одну з особливих форм фаміліара: біс, квазит, псевдодракон або спрайт.",

    spell_find_familiar_warlock: spells.find_familiar_warlock,
    spell_find_familiar_warlock_details: spells.find_familiar_warlock_details,
    spell_find_familiar_warlock_expanded: spells.find_familiar_warlock_expanded,

    pact_of_the_blade: "Талісману",
    pact_of_the_blade_details: "Ваш покровитель дає вам талісман, який може допомогти вам пройти перевірку здібності.",

    talisman: "Талісман",
    talisman_details: "Коли власник провалює перевірку здібності, він може додати до кидка d4, потенційно перетворивши кидок на успіх. Цю перевагу можна використовувати кількість разів, що дорівнює вашому бонусу майстерності, і всі використані використання відновлюються, коли ви закінчуєте тривалий відпочинок. Якщо ви втратите талісман, ви можете провести церемонію тривалістю в годину, щоб отримати заміну від свого покровителя. Цей обряд можна проводити під час короткого чи тривалого відпочинку, і він руйнує попередній амулет. Коли ви вмираєте, талісман перетворюється на попіл.",
    talisman_slots: "Допомога талісмана",

    fey_presence_slots: "Фейська зовнішність",
    fey_presence_slot: "1× Фейська зовнішність",

    invocations: "заклики",

    spell_fey_presence: spells.fey_presence,
    spell_fey_presence_details: spells.fey_presence_details,
    spell_fey_presence_expanded: spells.fey_presence_expanded,

    aspect_of_the_moon: "Аспект місяця",
    to_sleep: "спати",

    gaze_of_two_minds: "Погляд двох умів",

    spell_gaze_of_two_minds: spells.gaze_of_two_minds,
    spell_gaze_of_two_minds_details: spells.gaze_of_two_minds_details,
    spell_gaze_of_two_minds_expanded: spells.gaze_of_two_minds_expanded,

    thief_of_five_fates: "Крадій п'яти доль",
    thief_of_five_fates_details: "Ви можете один раз створити закляття Пристріт, використовуючи слот мани. Ви не можете зробити це повторно, доки не закінчите тривалий відпочинок.",

    //NOTE - зупинився тут

    eyes_of_the_rune_keeper: "Очі зберігача рун",
    able_to_read: "Здатність прочитати",
    any_texts: "будь-які письмена",

    voice_of_the_chain_master: "Голос господаря",
    able_to_speak: "Здатність говорити",
    through_familiar: "через фамільяра",

    gift_of_the_ever_living_ones: "Дар вічноживих",
    if_familiar_is_in_100f: "при фамільярі в межах 100ф",

    investment_of_the_chain_master: "Внесок господаря",
    familiar: "фамільяр",

    spell_investment_of_the_chain_master: spells.investment_of_the_chain_master,
    spell_investment_of_the_chain_master_details: spells.investment_of_the_chain_master_details,
    spell_investment_of_the_chain_master_expanded: spells.investment_of_the_chain_master_expanded,

    armor_of_shadows: "Обладунок тіней",

    spell_mage_armor_shadow: spells.mage_armor_shadow,

    devils_sight: "Диявольський зір",

    able_to_see: "Здатність бачити",
    in_magic_darkness: "у магічній темряві",

    spell_speak_with_animals_warlock: spells.speak_with_animals_warlock,

    book_of_antient_secrets: "Книга стародавніх секретів",

    lance_of_lethargy: "Спис втоми",

    slowing: "уповільнення",

    spell_eldritch_blast_slow: spells.eldritch_blast_slow,
    spell_eldritch_blast_slow_details: spells.eldritch_blast_slow_details,
    spell_eldritch_blast_slow_expanded: spells.eldritch_blast_slow_expanded,

    mask_of_many_faces: "Маска багатьох облич",

    spell_disguise_self_warlock: spells.disguise_self_warlock,

    eldritch_mind: "Таємничий розум",

    on_concentration: "на підтримку концентрації заклинання",

    eldritch_spear: "Містичний спис",

    spell_eldritch_blast_distant: spells.eldritch_blast_distant,
    spell_eldritch_blast_distant_details: spells.eldritch_blast_distant_details,
    spell_eldritch_blast_distant_expanded: spells.eldritch_blast_distant_expanded,

    fiendish_vigor: "Потужність породження",

    spell_false_life_warlock: spells.false_life_warlock,
    spell_false_life_warlock_expanded: spells.false_life_warlock_expanded,

    agonizing_blast: "Болісний заряд",

    spell_eldritch_blast_damage: spells.eldritch_blast_damage,
    spell_eldritch_blast_damage_details: spells.eldritch_blast_damage_details,
    spell_eldritch_blast_damage_expanded: spells.eldritch_blast_damage_expanded,

    beguiling_influence: "Чаруючий вплив",

    repelling_blast: "Відштовхуючий заряд",

    spell_eldritch_blast_push: spells.eldritch_blast_push,
    spell_eldritch_blast_push_details: spells.eldritch_blast_push_details,
    spell_eldritch_blast_push_expanded: spells.eldritch_blast_push_expanded,

    rebuke_of_the_talisman: "Мстивий талісман",

    spell_rebuke_of_the_talisman: spells.rebuke_of_the_talisman,
    spell_rebuke_of_the_talisman_details: spells.rebuke_of_the_talisman_details,
    spell_rebuke_of_the_talisman_expanded: spells.rebuke_of_the_talisman_expanded,

    eldritch_sight: "Чаклунський погляд",

    spell_detect_magic_warlock: spells.detect_magic_warlock,

    misty_visions: "Туманні видіння",

    spell_silent_image_warlock: spells.silent_image_warlock,

    improved_pact_weapon:"Покращена зброя договору",

    arcanum_slots: "Аркануми",

    inner_reserve_slots: "Внутрішній резерв",
    inner_reserve_slot: "1× Внутрішній резерв",

    spell_restore_mana_warlock: spells.restore_mana_warlock,
    spell_restore_mana_warlock_details: spells.restore_mana_warlock_details,
    spell_restore_mana_warlock_expanded: spells.restore_mana_warlock_expanded,

    slot_need: "Для відновлення цих слотів потрібно:",
    short_rest: "Короткий відпочинок (від 1 години)",
    long_rest: "Тривалий відпочинок (від 8 годин)",

    short_rest_details: "Короткий відпочинок це період довжиною щонайменше 1 годину, під час якого персонаж не робить нічого напруженого крім поглинання їжі, пиття, читання та обробки ран.",

    long_rest_details: "Тривалий відпочинок це довгий період тривалістю щонайменше 8 годин, під час якого персонаж як мінімум 6 годин спить, і не більше 2 годин займається легкою діяльністю: читає, розмовляє, їсть та стоїть на варті. Якщо відпочинок переривається напруженою активністю (щонайменше 1 година ходьби, битви, накладення заклинання або інша подібна діяльність), персонажі повинні почати відпочинок спочатку, щоб отримати від нього переваги.<br/><br/>"+
    "Персонаж не може отримати переваги від другого тривалого відпочинку за 24-годинний період, і у персонажа має бути хоча б 1 пункт здоров'я на початку відпочинку, щоб отримати від нього переваги.",

    ///

    spell_misty_escape: spells.misty_escape,
    spell_misty_escape_details: spells.misty_escape_details,
    spell_misty_escape_expanded: spells.misty_escape_expanded,

    misty_escape_slots: "Туманне зникнення",
    misty_escape_slot: "1× Туманне зникнення",

    spell_beguiling_defenses: spells.beguiling_defenses,
    spell_beguiling_defenses_details: spells.beguiling_defenses_details,
    spell_beguiling_defenses_expanded: spells.beguiling_defenses_expanded,

    spell_dark_delirium: spells.dark_delirium,
    spell_dark_delirium_details: spells.dark_delirium_details,
    spell_dark_delirium_expanded: spells.dark_delirium_expanded,

    dark_delirium_slots: "Темне марення",
    dark_delirium_slot: "1× Темне марення",

    spell_dark_ones_blessing: spells.dark_ones_blessing,
    spell_dark_ones_blessing_details: spells.dark_ones_blessing_details,
    spell_dark_ones_blessing_expanded: spells.dark_ones_blessing_expanded,

    spell_dark_ones_own_luck: spells.dark_ones_own_luck,
    spell_dark_ones_own_luck_details: spells.dark_ones_own_luck_details,
    spell_dark_ones_own_luck_expanded: spells.dark_ones_own_luck_expanded,

    dark_ones_own_luck_slots: "Талан Темного",
    dark_ones_own_luck_slot: "1× Талан Темного",

    one_choose_every_short_rest: "проти одного виду пошкодження (крім магічної та срібної зброї) раз на короткий відпочинок",

    spell_hurl_through_hell: spells.hurl_through_hell,
    spell_hurl_through_hell_details: spells.hurl_through_hell_details,
    spell_hurl_through_hell_expanded: spells.hurl_through_hell_expanded,

    hurl_through_hell_slots: "Кидок крізь пекло",
    hurl_through_hell_slot: "1× Кидок крізь пекло",

    telepatic_30f: "телепатично з будь-якою істотою, навіть без спільної мови",

    spell_entropic_ward: spells.entropic_ward,
    spell_entropic_ward_details: spells.entropic_ward_details,
    spell_entropic_ward_expanded: spells.entropic_ward_expanded,

    to_read_thoughts: "проти читання думок",
    psychic_damage_against: "проти 🧠 Психічного пошкодження",

    damage_back: "Пошкодження у відповідь",

    spell_create_thrall: spells.create_thrall,
    spell_create_thrall_details: spells.create_thrall_details,
    spell_create_thrall_expanded: spells.create_thrall_expanded,

    armor_wisdom: "— броня за рахунок Мудрості (застосовано)",

    monk_weapons: "Деякі монастирі використовують особливі види монаської зброї. Наприклад, ви можете використовувати дубинку у вигляді двох дерев'яних брусків, з'єднаних коротким ланцюгом (така зброя називається нунчаками), або серп з більш коротким і прямим лезом (називається камою).",

    monk: classes.monk,
    monk_details: classes.monk_details,

    way_of_the_open_hand: classes.way_of_the_open_hand,
    way_of_the_open_hand_details: classes.way_of_the_open_hand_details,

    way_of_the_shadow: classes.way_of_the_shadow,
    way_of_the_shadow_details: classes.way_of_the_shadow_details,

    way_of_the_four_elements: classes.way_of_the_four_elements,
    way_of_the_four_elements_details: classes.way_of_the_four_elements_details,

    unarmed: weapons.unarmed,
    unarmed_details: weapons.unarmed_details,

    weapons_dimple: "Кулаки",
    weapons_dimple_details: "",

    to_damage_fist_and_weapon: "до пошкодження кулаком та зброєю (застосовано)",

    spell_unarmed_strike_bonus: spells.unarmed_strike_bonus,
    spell_unarmed_strike_bonus_details: spells.unarmed_strike_bonus_details,
    spell_unarmed_strike_bonus_expanded: spells.unarmed_strike_bonus_expanded,

    chi_slots: "Слоти Чі",
    chi_slot: "1× Чі",

    spell_step_of_the_wind: spells.step_of_the_wind,
    spell_step_of_the_wind_details: spells.step_of_the_wind_details,
    spell_step_of_the_wind_expanded: spells.step_of_the_wind_expanded,

    spell_patient_defense: spells.patient_defense,
    spell_patient_defense_details: spells.patient_defense_details,
    spell_patient_defense_expanded: spells.patient_defense_expanded,

    spell_flurry_of_blows: spells.flurry_of_blows,
    spell_flurry_of_blows_details: spells.flurry_of_blows_details,
    spell_flurry_of_blows_expanded: spells.flurry_of_blows_expanded,

    speed_plus_5:"+5 Швидкість",

    able_to_walk: "Здатність ходити",
    on_walls_and_water: "по стінах і воді",

    spell_dedicated_weapon: spells.dedicated_weapon,
    spell_dedicated_weapon_details: spells.dedicated_weapon_details,
    spell_dedicated_weapon_expanded: spells.dedicated_weapon_expanded,

    spell_deflect_missiles: spells.deflect_missiles,
    spell_deflect_missiles_details: spells.deflect_missiles_details,
    spell_deflect_missiles_expanded: spells.deflect_missiles_expanded,

    spell_weapon_strike_bonus: spells.weapon_strike_bonus,
    spell_weapon_strike_bonus_details: spells.weapon_strike_bonus_details,
    spell_weapon_strike_bonus_expanded: spells.weapon_strike_bonus_expanded,

    spell_slow_fall: spells.slow_fall,
    spell_slow_fall_details: spells.slow_fall_details,
    spell_slow_fall_expanded: spells.slow_fall_expanded,

    spell_quickened_healing: spells.quickened_healing,
    spell_quickened_healing_details: spells.quickened_healing_details,
    spell_quickened_healing_expanded: spells.quickened_healing_expanded,

    spell_extra_strike_monk: spells.extra_strike_monk,
    spell_extra_strike_monk_details: spells.extra_strike_monk_details,
    spell_extra_strike_monk_expanded: spells.extra_strike_monk_expanded,

    magical_unarmed_strike: "Магічні беззбройні удари",
    on_immunity_cheks: "— долають стійкість до немагічного пошкодження",

    any: "усі",

    on_hunger_and_thirst: "проти голоду та спраги",

    aging_against: "проти природного та магічного старіння тіла. Померти від старості все ще можливо",

    plus_4_chi: "+4 слоту Чі",
    on_initiative: "при кидку Ініціативи",

    spell_stunning_strike: spells.stunning_strike,
    spell_stunning_strike_details: spells.stunning_strike_details,
    spell_stunning_strike_expanded: spells.stunning_strike_expanded,

    spell_diamond_soul: spells.diamond_soul,
    spell_diamond_soul_details: spells.diamond_soul_details,
    spell_diamond_soul_expanded: spells.diamond_soul_expanded,

    spell_focused_aim: spells.focused_aim,
    spell_focused_aim_details: spells.focused_aim_details,
    spell_focused_aim_expanded: spells.focused_aim_expanded,

    spell_stillness_of_mind: spells.stillness_of_mind,
    spell_stillness_of_mind_details: spells.stillness_of_mind_details,
    spell_stillness_of_mind_expanded: spells.stillness_of_mind_expanded,

    chi_slot_4: "4× Чі",

    spell_empty_body: spells.empty_body,
    spell_empty_body_details: spells.empty_body_details,
    spell_empty_body_expanded: spells.empty_body_expanded,

    spell_open_hand_tech_knock: spells.open_hand_tech_knock,
    spell_open_hand_tech_knock_details: spells.open_hand_tech_knock_details,

    spell_open_hand_tech_push: spells.open_hand_tech_push,
    spell_open_hand_tech_push_details: spells.open_hand_tech_push_details,

    spell_open_hand_tech_confuse: spells.open_hand_tech_confuse,
    spell_open_hand_tech_confuse_details: spells.open_hand_tech_confuse_details,

    spell_open_hand_tech_expanded: spells.open_hand_tech_expanded,

    spell_wholeness_of_body: spells.wholeness_of_body,
    spell_wholeness_of_body_details: spells.wholeness_of_body_details,
    spell_wholeness_of_body_expanded: spells.wholeness_of_body_expanded,

    wholeness_body_slots: "Зцілення",
    wholeness_body_slot: "1× Зцілення",

    spell_sanctuary_monk: spells.sanctuary_monk,
    spell_sanctuary_monk_details: spells.sanctuary_monk_details,
    spell_sanctuary_monk_expanded: spells.sanctuary_monk_expanded,

    chi_slot_3: "3× Чі",

    spell_quivering_palm: spells.quivering_palm,
    spell_quivering_palm_details: spells.quivering_palm_details,
    spell_quivering_palm_expanded: spells.quivering_palm_expanded,

    spell_pass_without_trace_monk: spells.pass_without_trace_monk,
    spell_pass_without_trace_monk_expanded: spells.pass_without_trace_monk_expanded,

    spell_darkvision_monk: spells.darkvision_monk,
    spell_darkvision_monk_expanded: spells.darkvision_monk_expanded,

    spell_silence_monk: spells.silence_monk,

    spell_darkness_monk: spells.darkness_monk,

    spell_shadow_step: spells.shadow_step,
    spell_shadow_step_details: spells.shadow_step_details,
    spell_shadow_step_expanded: spells.shadow_step_expanded,

    spell_cloak_of_shadows_monk: spells.cloak_of_shadows_monk,
    spell_cloak_of_shadows_monk_details: spells.cloak_of_shadows_monk_details,
    spell_cloak_of_shadows_monk_expanded: spells.cloak_of_shadows_monk_expanded,

    spell_opportunist: spells.opportunist,
    spell_opportunist_details: spells.opportunist_details,
    spell_opportunist_expanded: spells.opportunist_expanded,

    spell_water_whip: spells.water_whip,
    spell_water_whip_details: spells.water_whip_details,
    spell_water_whip_details_5: spells.water_whip_details_5,
    spell_water_whip_details_9: spells.water_whip_details_9,
    spell_water_whip_details_13: spells.water_whip_details_13,
    spell_water_whip_details_17: spells.water_whip_details_17,
    spell_water_whip_expanded: spells.water_whip_expanded,

    spell_shatter_monk: spells.shatter_monk,
    spell_shatter_monk_details: spells.shatter_monk_details,
    spell_shatter_monk_details_5: spells.shatter_monk_details_5,
    spell_shatter_monk_details_9: spells.shatter_monk_details_9,
    spell_shatter_monk_details_13: spells.shatter_monk_details_13,
    spell_shatter_monk_details_17: spells.shatter_monk_details_17,
    spell_shatter_monk_expanded: spells.shatter_monk_expanded,

    spell_fire_snake_teeth: spells.fire_snake_teeth,
    spell_fire_snake_teeth_details: spells.fire_snake_teeth_details,
    spell_fire_snake_teeth_details_5: spells.fire_snake_teeth_details_5,
    spell_fire_snake_teeth_details_9: spells.fire_snake_teeth_details_9,
    spell_fire_snake_teeth_details_13: spells.fire_snake_teeth_details_13,
    spell_fire_snake_teeth_details_17: spells.fire_snake_teeth_details_17,
    spell_fire_snake_teeth_expanded: spells.fire_snake_teeth_expanded,

    spell_ashing_strike: spells.ashing_strike,
    spell_ashing_strike_details: spells.ashing_strike_details,
    spell_ashing_strike_details_5: spells.ashing_strike_details_5,
    spell_ashing_strike_details_9: spells.ashing_strike_details_9,
    spell_ashing_strike_details_13: spells.ashing_strike_details_13,
    spell_ashing_strike_details_17: spells.ashing_strike_details_17,
    spell_ashing_strike_expanded: spells.ashing_strike_expanded,

    spell_four_thunder_fist: spells.four_thunder_fist,
    spell_four_thunder_fist_details: spells.four_thunder_fist_details,
    spell_four_thunder_fist_details_5: spells.four_thunder_fist_details_5,
    spell_four_thunder_fist_details_9: spells.four_thunder_fist_details_9,
    spell_four_thunder_fist_details_13: spells.four_thunder_fist_details_13,
    spell_four_thunder_fist_details_17: spells.four_thunder_fist_details_17,
    spell_four_thunder_fist_expanded: spells.four_thunder_fist_expanded,

    spell_gust_of_wind_monk: spells.gust_of_wind_monk,
    spell_gust_of_wind_monk_details: spells.gust_of_wind_monk_details,
    spell_gust_of_wind_monk_expanded: spells.gust_of_wind_monk_expanded,

    spell_air_fist: spells.air_fist,
    spell_air_fist_details: spells.air_fist_details,
    spell_air_fist_details_5: spells.air_fist_details_5,
    spell_air_fist_details_9: spells.air_fist_details_9,
    spell_air_fist_details_13: spells.air_fist_details_13,
    spell_air_fist_details_17: spells.air_fist_details_17,
    spell_air_fist_expanded: spells.air_fist_expanded,

    spell_element_bond: spells.element_bond,
    spell_element_bond_details: spells.element_bond_details,
    spell_element_bond_expanded: spells.element_bond_expanded,

    on_saving_against_your_spells: "на Випробування проти ваших заклять з непомітності",

    arcane_trickster: classes.arcane_trickster,
    arcane_trickster_details: classes.arcane_trickster_details,

    spell_mage_hand_rogue: spells.mage_hand_rogue,
    spell_mage_hand_rogue_details: spells.mage_hand_rogue_details,
    spell_mage_hand_rogue_details_13: spells.mage_hand_rogue_details_13,
    spell_mage_hand_rogue_expanded: spells.mage_hand_rogue_expanded,

    base_with: "базове",

    spell_steal_slots: "Крадіжка заклять",
    spell_steal_slot: "1× Крадіжка заклять",

    spell_steal_spell: spells.steal_spell,
    spell_steal_spell_details: spells.steal_spell_details,
    spell_steal_spell_expanded: spells.steal_spell_expanded,

    on_stealth: "на Непомітність",

    favored_enemy:"вибраний ворог",

    aberrations: "аберації",
    beasts:"звірі", 
    celestials:"небожителі", 
    constructs:"конструкти", 
    dragons:"дракони", 
    elementals:"элементалі", 
    feys:"фейрі", 
    fiends:"породження", 
    giants:"велетні", 
    monstrosities:"монстри", 
    oozes:"слиз", 
    plants:"рослини", 
    undeads:"немертві",
    two_other_races:"дві інші гуманоїдні раси",

    aberrations_details: "Абсолютно чужорідні істоти. Багато хто з них має вроджені магічні здібності, проте обумовлені вони їх чужорідним розумом, а не містичними силами світу.",
    beasts_details:"Негуманоїдні істоти, що є фауною світу фентезі. Деякі з них мають магічні сили, але більшість нерозумна, не володіє мовами і не має жодного суспільного устрою. Звірі включають все різноманіття тварин, динозаврів і гігантських версій тварин.", 
    celestials_details:"Істоти з Верхніх Планів. Багато хто з них є слугами божеств, і виконують роль посланців та агентів у світі смертних та інших планах. Небожителі добрі від природи, тому небожитель, що збився зі шляху добра, це неймовірна рідкість. До небожителів відносяться ангели, коатлі та пегаси.", 
    constructs_details:"Створюються, а не народжуються. Деякі запрограмовані творцем слідувати простому набору інструкцій, інші мають зачатки розуму і здатні до самостійного мислення. Големи — це класичні конструкти. Багато істот родом із зовнішнього плану Механус, такі як модрон, є конструктами, створеними з матерії цього плану волею могутніх істот.", 
    dragons_details:"Великі рептилійні істоти стародавнього походження і величезної сили. Справжні дракони, у тому числі і добрі металеві дракони, і злі кольорові дракони, дуже розумні і мають вроджену магію. Також до цієї категорії належать істоти, віддалено пов'язані з істинними драконами, менш сильні та не наділені магією, такі як віверні та псевдодракони.", 
    elementals_details:"Істоти зі стихійних планів. Деякі істоти цього виду є просто живою масою відповідної стихії, у тому числі й істоти, яких називають «елементалями». В інших є біологічні тіла, наповнені стихійною енергією. Раси геніїв, що включають джинів та іфритів, формують найважливіші цивілізації на стихійних планах. До інших стихійних істот можна віднести ейзерів, невидимих мисливців та водних аномалій.", 
    feys_details:"Магічні істоти, що тісно пов'язані з силами природи. Вони живуть у сутінкових гаях та туманних лісах. У деяких світах вони тісно пов'язані з Країною Фей, яку називають Планом Фей. До фей відносяться дріади, піксі та сатири.", 
    fiends_details:"Злісні істоти, що мешкають на Нижніх Планах. Деякі з них служить богам, але багато хто в підпорядкуванні у архідияволів і демонічних повелителів. Злі жерці й маги іноді закликають породження у матеріальний світ, щоб ті виконали їхні бажання. Зустріти добре породження практично неможливо. До породження відносяться демони, дияволи, пекельні гончі, ракшаси та юголоти.", 
    giants_details:"Височать над людьми та подібними до них. Тілом вони схожі на людей, хоча деякі можуть мати потворність або кілька голів. Існує шість різновидів справжніх велетнів: пагорбові, кам'яні, крижані, вогняні, хмарні та штормові. Також до цього виду належать огри та тролі.", 
    monstrosities_details:"Чудовиська в абсолютному сенсі цього слова. Це страшні потвори, зазвичай з неприродним походженням, і геть-чисто позбавлені милосердя. Деякі — результат магічних експериментів, які пішли не так, як задумано (наприклад, совомеди), інші — породження страшних прокльонів (наприклад, мінотаври чи юань-ти). Будь-яка така істота складно класифікувати, і, певною мірою, це універсальна категорія для істот, які не вписуються в будь-який інший вид.", 
    oozes_details:"Студенисті істоти, які рідко мають фіксовану форму. Здебільшого, вони живуть у підземеллях чи печерах, харчуючись падаллю чи істотами, які попалися їм на шляху. Чорний слиз і драглисті куби - найвідоміші слизи.", 
    plants_details:"Рослинні створіння, а не звичайна флора. Більшість з них рухливі, а деякі і м'ясоїдні. Типові рослини — це насипи, що повзають, і тренти. Грибкові істоти, такі як газові спори чи міконіди, також входять до цієї категорії.", 
    undeads_details:"Колишні живі істоти, які прийняли такий стан чи то через магію некромантії, чи то через безбожне прокляття. До немертвих відносяться, наприклад, вампіри та зомбі, а також безтільні духи, наприклад, привиди та спектри.",
    two_other_races_details:"Гуманоїди – це всі основні народи світу D&D, і цивілізовані та дикі, дуже різноманітні за видами. Вони мають мову і культуру, деякі мають вроджені магічні здібності (хоча більшість гуманоїдів може навчитися накладення заклинань). Вони двоногі. Найбільш поширені гуманоїдні раси доступні гравцеві при створенні персонажа: це гноми, хафлінги, дворфи, люди, напівельфи, ельфи, тифлінґи, напіворки, драконороджені. Майже такі ж численні, але набагато дикіші і жорстокіші, і зліші, це раса гобліноїдів, орки, гноли, людиноящури і кобольди.",

    wisdom_aberrations_against: "на перевірки Виживання для пошуку аберрацій",
    wisdom_beasts_against:"на перевірки Виживання для пошуку звірів", 
    wisdom_celestials_against:"на перевірки Виживання для пошуку небожителів", 
    wisdom_constructs_against:"на перевірки Виживання для пошуку конструктів", 
    wisdom_dragons_against:"на перевірки Виживання для пошуку драконів", 
    wisdom_elementals_against:"на перевірки Виживання для пошуку елементалів", 
    wisdom_feys_against:"на перевірки Виживання для пошуку фей", 
    wisdom_fiends_against:"на перевірки Виживання для пошуку породжень", 
    wisdom_giants_against:"на перевірки Виживання для пошуку велетнів", 
    wisdom_monstrosities_against:"на перевірки Виживання для пошуку монстрів", 
    wisdom_oozes_against:"на перевірки Виживання для пошуку слизу", 
    wisdom_plants_against:"на перевірки Виживання для пошуку рослин", 
    wisdom_undeads_against:"на перевірки Виживання для пошуку немертвих",
    wisdom_two_other_races_against:"на перевірки Виживання для пошуку рас-ворогів",

    intelligence_aberrations_against: "на перевірки Інтелекту, пов'язані з аберрациями",
    intelligence_beasts_against:"на перевірки Інтелекту, пов'язані з звірями", 
    intelligence_celestials_against:"на перевірки Інтелекту, пов'язані з небожителями", 
    intelligence_constructs_against:"на перевірки Інтелекту, пов'язані з конструктами", 
    intelligence_dragons_against:"на перевірки Інтелекту, пов'язані з драконами", 
    intelligence_elementals_against:"на перевірки Інтелекту, пов'язані з елементалями", 
    intelligence_feys_against:"на перевірки Інтелекту, пов'язані з феями", 
    intelligence_fiends_against:"на перевірки Інтелекту, пов'язані з породженнями", 
    intelligence_giants_against:"на перевірки Інтелекту, пов'язані з велетнями", 
    intelligence_monstrosities_against:"на перевірки Інтелекту, пов'язані з монстрами", 
    intelligence_oozes_against:"на перевірки Інтелекту, пов'язані з слизом", 
    intelligence_plants_against:"на перевірки Інтелекту, пов'язані з рослинами", 
    intelligence_undeads_against:"на перевірки Інтелекту, пов'язані з немертвими",
    intelligence_two_other_races_against:"на перевірки Інтелекту, пов'язані з расами-ворогами",

    favored_enemy_details: "У вас є значний досвід вивчення, відстеження, полювання і навіть спілкування з певним видом ворогів (аберації, велетні, дракони, звірі, породження, конструкти, монстри, небожителі, немертві, рослини, слиз, феї або елементалі. В якості альтернативи ви можете вибрати як обраних ворогів дві гуманоїдні раси — наприклад, гноллів і орків). Ви здійснюєте з перевагою перевірки Виживання для відстеження вибраних ворогів, а також перевірки Інтелекту для згадування інформації про них. Ви також навчаєтесь однією з мов, якою говорить ваш обраний ворог, якщо він взагалі вміє говорити. Ви додатково вибираєте по одному обраному ворогові на 6 та 14 рівнях.",

    lang_deep: langs.deep,
    lang_deep_details: langs.deep_details,

    favor: "фавор",

    ranger: classes.ranger,
    ranger_details: classes.ranger_details,

    hunter: classes.hunter,
    hunter_details: classes.hunter_details,

    beastmaster: classes.beastmaster,
    beastmaster_details: classes.beastmaster_details,
}
