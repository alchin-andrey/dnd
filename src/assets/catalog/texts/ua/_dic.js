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

    HP_max:"max HP",
    HP_dice:"реген",

    proficiency:"майстерність",
    initiative:"ініціатива",
    armor_class:"броня",

    speed:"швидкість",
        feet: "футів",
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

            ammunition:"боєприпаси",
            bolt:"болт",
            arrow:"стріла",
            bullet:"снаряд",

            damage_1_hand:"однією рукою",
            damage_2_hand:"двома руками",

            cost:"ціна",
            coin_gold:"золотих монет",
            coin_silver:"срібних монет",
            сoin_copper:"мідних монет",

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
        force_w: "🌈 Cиловим полем",

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
        armor_constitution: "— броня за рахунок Статури",
        saving_dex_visible: "на Випробування Спритності від видимих ефектів",
        charmed_while_raging: "проти 😍 Зачарування при Люті",
        frightened_while_raging: "проти 😱 Переляку при Люті",
        on_initiative: "на ініціативу",
        extra_movement: "додаткове пересування",
        rage_half_speed: "на половину швидкості, як частина впадання в Лють",
        rage_persistence: "люта стійкість",
        rage_persistence_details: "— коли при Люті Здоровʼя опускається до 0 і ви при цьому не вбиті, воно стає = 1, при успішному Випробуванні Сили зі складністю 10 (+5 за кожний наступний раз до тривалого відпочинку)",
        saving_strength: "результат Випробування Сили",
        min_base_strengt: "дорівнює мінімум базовій Силі",
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

    hill:"холмовий",
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

    halruanian:"халруанин",
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
    illusion: "іллюзія", //
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
    up_to: "до",
    sec: "сек",
    round: "раунд",
    min: "мін",
    hour: "г",
    day: "дн",


    mana:"мана",

    //parts
    parts: "части",
    verbal:"слово",
    somatic:"жест",
    touch:"дотик ціли",
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

    saving_target: "випробування цілі",
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

    hempen_rope: "прядив'яна мотузка 50ф",
    hempen_rope_details: "зроблена з пеньки або шовку. Вона має 2 HP, і її можна порвати Випробуванням Сили складністю 17.",

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

    armor_leather: "шкіряний обладунок",
    armor_leather_details: "Нагрудник та плечі цього обладунку виготовлені зі шкіри, вивареної в олії. Інші частини обладунку виготовлені з більш м'яких і гнучких матеріалів.",

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

    bonus_move: "Бонусний повний хід",
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

    material_ink_10gold: "чорнило за мінімум 10 🟡",

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

    material_pearl_100gold: "перлина за мінімум 10 🟡",

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

    material_diamond_50gold:"діамант за мінімум 50 🟡",

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

    material_magic_mouth_50gold: "Шматочок медових сот і порошок нефриту за мінімум 10 🟡 ( витрачаються )",

    spell_magic_mouth: spells.magic_mouth,
    spell_magic_mouth_details: spells.magic_mouth_details,
    spell_magic_mouth_expanded: spells.magic_mouth_expanded,

    material_golden_dust_25gold: "Золотий пил за мінімум 25 🟡 ( витрачається ).",

    spell_arcane_lock: spells.arcane_lock,
    spell_arcane_lock_details: spells.arcane_lock_details,
    spell_arcane_lock_expanded: spells.arcane_lock_expanded,

    spell_phantasmal_force: spells.phantasmal_force,
    spell_phantasmal_force_details: spells.phantasmal_force_details,
    spell_phantasmal_force_expanded: spells.phantasmal_force_expanded,

    material_augury_25gold: "Особливі палички, кісточки або фігурки з мітками за мінімум 25 🟡",

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

    material_warding_bond_50gold: "Пара платинових кілець за мінімум 50 🟡",
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

    rage_slots: "Слот Люті",
    rage_slot: "1× Слот Люті",

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

    //NOTE - зупинився тута

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
    feat_magic_initiate_details_cleric: "Вы узнаёте два заклинания жреца, не требующие маны, и одно заклинание, требующее 1 ману (его вы можете использовать без маны, но накладывать его на минимально возможном уровне, и один раз мажду продолжительными отдыхами).",

    feat_magic_initiate_druid: "Посвящённый в магию друида",
    feat_magic_initiate_details_druid: "Вы узнаёте два заклинания друида, не требующие маны, и одно заклинание, требующее 1 ману (его вы можете использовать без маны, но накладывать его на минимально возможном уровне, и один раз мажду продолжительными отдыхами).",

    feat_magic_initiate_warlock: "Посвящённый в магию колдуна",
    feat_magic_initiate_details_warlock: "Вы узнаёте два заклинания колдуна, не требующие маны, и одно заклинание, требующее 1 ману (его вы можете использовать без маны, но накладывать его на минимально возможном уровне, и один раз мажду продолжительными отдыхами).",

    feat_magic_initiate_sorcerer: "Посвящённый в магию чародея",
    feat_magic_initiate_details_sorcerer: "Вы узнаёте два заклинания чародея, не требующие маны, и одно заклинание, требующее 1 ману (его вы можете использовать без маны, но накладывать его на минимально возможном уровне, и один раз мажду продолжительными отдыхами).",

    feat_magic_initiate_wizard: "Посвящённый в магию волшебника",
    feat_magic_initiate_details_wizard: "Вы узнаёте два заклинания волшебника, не требующие маны, и одно заклинание, требующее 1 ману (его вы можете использовать без маны, но накладывать его на минимально возможном уровне, и один раз мажду продолжительными отдыхами).",

    feat_magic_initiate_bard: "Посвящённый в магию барда",
    feat_magic_initiate_details_bard: "Вы узнаёте два заклинания барда, не требующие маны, и одно заклинание, требующее 1 ману (его вы можете использовать без маны, но накладывать его на минимально возможном уровне, и один раз мажду продолжительными отдыхами).",

    spells_0: "заклинания [0]",
    spells_1: "заклинания [1]",

    no_mana_but_once_a_day: "Вы сможете использовать выбранное заклинание без маны, но накладывать его на минимально возможном уровне, и один раз мажду продолжительными отдыхами.",

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
}
