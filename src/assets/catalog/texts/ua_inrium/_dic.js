import * as races from "./races.js";
import * as spells from "./spells.js";
import * as classes from "./classes.js";
import { langs } from "./languages.js";
import { weapons } from "./weapons.js";
import { tools } from "./tools.js";
import { armor } from "./armor.js";
import masters from "@/assets/catalog/texts/masters.js";

export default {
  //Стартовое
  welcome_title: "Поринь у D&D без читання правил!",
  welcome_message:
    "Щоб почати грати в D&D, достатньо придумати персонажа потрібного рівня, а решту влаштує ваш Майстер. Цей чарівний сайт допоможе вам створити персонажа за 3 простих кроки: Раса, Клас та Світогляд. Всі налаштування — ліворуч.<br /><br />Найкращий підхід для першого разу — розслабитися і вибирати за покликом серця. Тут немає неправильних рішень. У фіналі ви отримаєте аркуш персонажа, з яким ви зможете розпочати гру!",
  welcome_disclaimer:
    '<p>Матеріали на цьому сайті не змінюють необхідності придбання офіційних матеріалів. Cистема Dungeons & Dragons є власністю Wizards of the Coast. Графічні матеріали є власністю Sky Castle Studios та створені за допомогою <a target="_blank" href="https://www.heroforge.com">Hero Forge ↗</a><br /><br />This site is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC</p>',

  authors:
    '<p>Наша команда:</p>' +
    '<p><a target="_blank" href="https://t.me/dimalagoda">@ Dima Lagoda, Product Designer</a> — ідея, дизайн, контент</p>' +
    '<p><a target="_blank" href="https://t.me/Ki3iL">@ Andrii Alchin, Frontend Developer</a> — код</p>' +
    '<p><a target="_blank" href="https://t.me/godblessdnd">@ Andrii Pavlov, Найкращий Майстер Києва</a> — валідація</p>' +
    '<p><a target="_blank" href="https://t.me/kjnchka">@ Evgenia Lagoda</a> — позаштатний радник ❤️.</p>',

    thank_you: 'На отримані кошти ми будемо додавати функції та розширювати довідники. Вторгнення ₚосії в Україну триває, тому 50% донатів ми відправляємо у фонд "<a target="_blank" href="https://savelife.in.ua">Повернись Живим</a>".',

    benefaction: 'Безжальне та жорстоке вторгнення ₚосії в Україну триває, тому 50% донатів ми відправляємо у фонд "<a target="_blank" href="https://savelife.in.ua">Повернись Живим</a>".',

    view_benefits: '🫙 send.monobank.ua',

  phb_disclaimer_1:
    'Інші варіанти обмежені для використання тут ліцензією Open Gaming Licence від власників системи Dungeons & Dragons — Wizards of the Coast LLC. Якщо ви вже маєте придбаний офіційний примірник <a target="_blank" href="https://dnd.wizards.com/products/rpg_playershandbook">Player`s Handbook</a>, ви можете',

  phb_disclaimer_2: 'додати варіанти', 
  
  phb_disclaimer_3: 'з нього для більш зручного та автоматизованного користування.',
  //Общее

  name: "імʼя",

  race: "раса",
  ethnos: "етнос",
  class: "клас",
  subclass: "спеціализація",
  past: "передісторія",
  level: "рівень",
  level_unit: "й",
  lvl: "LVL",

  //Stats

  stats: "здібності",
  stats_base_details_race:
    "Базові значення Здібностей допомагають отримати значення Модифікаторів Здібностей та Навичок. Вони використовуються в грі набагато частіше і будуть вираховані на наступному кроці при виборі Класу.",

    stats_base_details_class:
    "Базові значення Здібностей допомагають отримати значення Модифікаторів Здібностей та Навичок. Вони використовуються в грі набагато частіше.",

  strength: "сила",
  strength_base: "базова",
  strength_details:
    "Фізична міць та тренування. Впливає на Навички:\n" + "• Атлетика",

  dexterity: "спритність",
  dexterity_base: "базова",
  dexterity_details:
    "Вправність, реакція, рівновага. Впливає на навички:\n" +
    "• Акробатика\n" +
    "• Спритність рук\n" +
    "• Непомітність\n" +
    "• Броня",

  constitution: "статура",
  constitution_base: "базова",
  constitution_details:
    "Витривалість, життєві резерви. Впливає на навички:\n" + "• Здоровʼя (HP)",

  intelligence: "інтелект",
  intelligence_base: "базовий",
  intelligence_details:
    "Точність спогадів, міркувань. Впливає на навички:\n" +
    "• Розслідування\n" +
    "• Історія\n" +
    "• Релігія\n" +
    "• Аркана\n" +
    "• Природа\n",

  wisdom: "мудрість",
  wisdom_base: "базова",
  wisdom_details:
    "Сприйняття навколишнього світу. Впливає на навички:\n" +
    "• Виживання\n" +
    "• Сприйняття\n" +
    "• Здогадливість\n" +
    "• Медицина\n" +
    "• Фауна\n",

  charisma: "харизма",
  charisma_base: "базова",
  charisma_details:
    "Здатність впливати. Впливає на навички:\n" +
    "• Артистичність\n" +
    "• Переконливість\n" +
    "• Обман\n" +
    "• Залякування",

  saving: "випробування",

  //Genders

  gender: "гендер",
  phisiological: "фізіологічний",
  male: "чоловік",
  male_details: "ваш персонаж має суто чоловічі статеві ознаки.\n\n",
  intersex: "інтерсекс",
  intersex_details:
    "ваш персонаж має як чоловічі, так і жіночі статеві ознаки. а можливо, і ще якісь.",
  female: "жінка",
  female_details: "ваш персонаж має суто жіночі статеві ознаки.\n\n",
  demiboy: "деміхлопчик",
  demiboy_details:
    "чоловічі статеві ознаки переважають у вашому персонажі, але є й інші.",
  demigirl: "демідівчинка",
  demigirl_details:
    "жіночі статеві ознаки переважають у вашому персонажі, але є й інші.",
  neutral_gender: "безстатеве",
  neutral_gender_details:
    "у вашого персонажа немає ознак, які можна було б назвати властивими якійсь статі.",
  unstable: "нестабільна стать",
  unstable_details:
    "статеві ознаки вашого персонажа можуть змінюватися, з якихось причин або без причин.",
  other_gender: "інша стать",
  other_gender_details:
    "ваш персонаж має ознаки статі, відмінної від чоловічої чи жіночої.",
  feel: "самосприйняття",
  pangender: "пангендер",
  pangender_details:
    "ваш персонаж сприймає себе носієм усіх можливих гендерів відразу.",
  undecided: "невизначений",
  undecided_details:
    "ваш персонаж не визначився, яким гендером він себе сприймає.",
  gender_fluid: "флюїд",
  gender_fluid_details:
    "сприйняття гендера вашого персонажа може змінюватися, з якихось причин або без причин.",
  androgin: "андрогін",
  androgin_details:
    "ваш персонаж сприймає себе чимось середнім між своїм фізіологічним та іншим гендером.",
  cisgender: "цисгендер",
  cisgender_details:
    "самосприйняття вашого персонажа повністю відповідає його фізіологічному гендеру.",
  transsexual: "транссексуал",
  transsexual_details:
    "ваш персонаж прагне привести гендер у відповідність до свого сприйняття, що відрізняється від фізіологічного.",
  transvestit: "трансвестит",
  transvestit_details:
    "самосприйняття вашого персонажа не відповідає його фізіологічному гендеру.",
  demigender: "демігендер",
  demigender_details:
    "самосприйняття вашого персонажа відповідає його фізіологічному гендеру, але не повністю.",
  demitrans: "демітранс",
  demitrans_details:
    "самосприйняття вашого персонажа не відповідає його фізіологічному гендеру, але не повністю.",
  queer: "квір",
  queer_details:
    "сприйняття гендера вашого персонажа відповідає фізіологічному, але не набору ознак цього гендера.",
  bigender: "бігендер",
  bigender_details:
    "гендер, яким почувається ваш персонаж, поєднує ознаки його фізіологічної та протилежної статі.",
  look: "зовнішній вигляд",
  as_phisiological: "відповідає фізіологічній статі",
  as_phisiological_details: "самосприйняття залишається внутрішнім станом.",
  as_feel: "відповідає самосприйняттю",
  as_feel_details: "фізіологічна стать залишається за лаштунками.",
  as_other_gender: "інше",
  as_other_gender_details:
    "розкрийте деталі пізніше в Передісторії вашого персонажа.",
  attraction: "тяжіння",

  //Предистория

  faith: "віра",
  alignment: "світогляд",
  personality: "характер",
  appearance: "зовнішність",
  story: "минуле",

  // Тело

  age: "вік",
  maturity: "зрілість",
  year: "рік",
  years: "років",
  yeara: "роки",
  baby: "дитина",
  young: "молодий",
  mature: "дорослий",
  old: "літній",
  oldest: "старий",

  weight: "вага",
  kg: "кг",
  skinny: "худорлявий",
  fat: "повний",

  height: "зріст",
  cm: "см",

  size: "розмір",

  size_small: "маленький",
  size_medium: "середній",
  size_big: "великий",

  hp_max: "max HP",
  hp_dice: "реген",

  proficiency: "майстерність",
  initiative: "ініціатива",
  armor_class: "броня",

  speed: "швидкість",
  feet: "футів",
  f: "ф",
  miles: "миль",
  milei: "милі",
  milea: "миля",
  vision_day: "зір",
  vision_night: "темний зір",
  hp_bonus: "здоровʼя",

  // Навьіки

  skills: "навички",
  skills_details:
    "Значення Навичок — основні показники, що використовуються в грі. Підсумкові значення будуть вираховані після вибору Класу на кроці 2.",

  acrobatics: "акробатика",
  acrobatics_details:
    "Здатність встояти на ногах. Наприклад спроба:\n\n" +
    "• Пробігтися льодом\n" +
    "• Балансувати на натягнутому канаті\n" +
    "• Встояти на палубі у шторм\n" +
    "• Вибратися з пут",

  animal_handling: "фауна",
  animal_handling_details:
    "Здатність ладнати з тваринами. Наприклад спроба:\n\n" +
    "• Заспокоїти одомашнену тварину\n" +
    "• Утримати скакуна від паніки\n" +
    "• Відчути наміри тварини\n" +
    "• Зробити небезпечний маневр на коні",

  arcana: "аркана",
  arcana_details:
    "Здатність згадати знання про заклинання, магічні предмети, містичні символи, магічні традиції, плани існування, мешканців цих планів і т.д. А також спроба поспілкуватись із істотою без використання слів.",

  athletics: "атлетика",
  athletics_details:
    "Здатність лазити, стрибати чи плавати. Наприклад спроба:\n\n" +
    "• Лізти по крутій скелю\n" +
    "• Втриматись за гілку\n" +
    "• Стрибнути на велику відстань\n" +
    "• Плити чи залишатися на плаву\n\n" +
    "• Виломати замкнені двері\n" +
    "• Вирватися з кайданів\n" +
    "• Перекинути статую\n" +
    "• Утримати валун від падіння",

  deception: "обман",
  deception_details:
    "Здатність приховати правду. Наприклад спроба:\n\n" +
    "• Заплутати сліди\n" +
    "• Відволікти охоронців\n" +
    "• Обдурити торговця\n" +
    "• Відвести від себе підозри",

  history: "історія",
  history_details:
    "Здатність згадати знання про історичні події, легендарних особистостей, древні королівства, колишні суперечки, недавні війни, втрачені цивілізації, а також ремесло, торгівлю тощо.",

  insight: "Здогадливість",
  insight_details:
    "Здатність визначити приховані наміри істоти. Наприклад спроба:\n\n" +
    "• Виявити брехню\n" +
    "• Передбачити чийсь наступний крок",

  intimidation: "залякування",
  intimidation_details:
    "Здатність, власне, залякати. Наприклад спроба:\n\n" +
    "• Витягнути інформацію з бранця\n" +
    "• Уникнути бійки демонстрацією власної небезпеки",

  investigation: "розслідування",
  investigation_details:
    "Пошук підказок та правильні висновки на їх основі. Наприклад спроба:\n\n" +
    "• Визначити місце розташування захованого предмета\n" +
    "• Зрозуміти по вигляду рани, якою зброєю вона нанесена\n" +
    "• Визначити точку обвалення тунелю\n" +
    "• Пошук таємного знання у сувої\n" +
    "• Підробка документа\n" +
    "• Оцінити вартість предмета\n" +
    "• Обіграти пекельного вартового в шахи",

  medicine: "медицина",
  medicine_details:
    "Здатність надати медичну допомогу. Наприклад спроба:\n\n" +
    "• Стабілізувати вмираючого\n" +
    "• Діагностувати хворобу",

  nature: "природа",
  nature_details:
    "Здатність згадати знання про місцевість, рослин і тварин, погоду і т.д.",

  perception: "Сприйняття",
  perception_details:
    "Здатність виявити присутність чогось. Наприклад спроба:\n\n" +
    "• Підслухати розмову за дверима\n" +
    "• Підглянути у вікно\n" +
    "• Почути чудовиськ, що крадуться.\n" +
    "• Помітити щось приховане",

  performance: "артистичність",
  performance_details:
    "Здатність справити враження. Наприклад спроба:\n\n" +
    "• Розповісти історію\n" +
    "• Станцювати\n" +
    "• Зіграти або заспівати пісню\n" +
    "• Спародувати бургмейстра",

  persuasion: "переконливість",
  persuasion_details:
    "Здатність вплинути на рішення. Наприклад спроба:\n\n" +
    "• Потоваришувати з місцевою чаклункою\n" +
    "• Переконати дворецького пропустити до короля\n" +
    "• Залагодити конфлікт\n" +
    "• Надихнути натовп",

  religion: "релігія",
  religion_details:
    "Здатність згадати знання про божества, ритуали і молитви, релігійні ієрархії, священні символи, практики таємних культів і т.д.",

  sleight_of_hand: "спритність рук",
  sleight_of_hand_details:
    "Мікромоторика. Наприклад спроба:\n\n" +
    "• Жонглювати\n" +
    "• Зробити спритний трюк\n" +
    "• Зрізати гаманець\n" +
    "• Знешкодити пастку\n" +
    "• Підкинути щось іншому в кишеню\n\n" +
    "• Відкрити замок\n" +
    "• Сховати щось\n" +
    "• Звʼязати бранця\n" +
    "• Зіграти на новому інструменті\n" +
    "• Створити дрібний предмет",

  stealth: "непомітність",
  stealth_details:
    "Здатність залишитися непоміченою. Наприклад спроба:\n\n" +
    "• Сховатися від ворогів\n" +
    "• Непомітно пробратися до брами\n" +
    "• Нечутно наблизитися до герцогині",

  survival: "виживання",
  survival_details:
    "Здатність орієнтуватись у дикій місцевості. Наприклад спроба:\n\n" +
    "• Вистежити ворога\n" +
    "• Знайти дорогу\n" +
    "• Уникнути сипучих пісків\n" +
    "• Вполювати тетерева\n" +
    "• Помітити ознаки проживання рідкісної тварини\n" +
    "• Спрогнозувати погоду",

  // Владения

  proficiencies: "володіння",

  armor: "обладунки",

  armor_light: armor.light,
  armor_light_details: armor.light_details,

  armor_medium: armor.medium,
  armor_medium_details: armor.medium_details,

  armor_heavy: armor.heavy,
  armor_heavy_details: armor.heavy_details,

  armor_shields: armor.shields,
  armor_shields_details: armor.shields_details,
  // добавить описания

  weapons: "зброя",

  melee: "ближня",
  ranged: "далекобійна",
  throwing: "метальна",

  loading: weapons.loading,
  weapon_light: weapons.light,
  weapon_heavy: weapons.heavy,
  loading_details: weapons.loading_details,
  weapon_light_details: weapons.light_details,
  weapon_heavy_details: weapons.heavy_details,
  weapon_finesse: "фехтувальна",

  ammunition: "боєприпас",
  bolt: "болт",
  arrow: "стріла",
  bullet: "снаряд",
  bullet_details: "",

  damage_1_hand: "однією рукою",
  damage_2_hand: "двома руками",

  cost: "ціна",
  coin_gold: "золотих монет",
  coin_gold_short: "зм",
  coin_silver: "срібних монет",
  coin_silver_short: "см",
  сoin_copper: "мідних монет",
  coin_copper_short: "мм",

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

  quarterstaff: weapons.quarterstaff,
  quarterstaff_details: weapons.quarterstaff_details,

  mace: weapons.mace,
  mace_details: weapons.mace_details,

  club: weapons.club,
  club_details: weapons.club_details,

  dagger: weapons.dagger,
  dagger_details: weapons.dagger_details,

  spear: weapons.spear,
  spear_details: weapons.spear_details,

  light_hammer: weapons.light_hammer,
  light_hammer_details: weapons.light_hammer_details,

  javelin: weapons.javelin,
  javelin_details: weapons.javelin_details,

  greatclub: weapons.greatclub,
  greatclub_details: weapons.greatclub_details,

  handaxe: weapons.handaxe,
  handaxe_details: weapons.handaxe_details,

  sickle: weapons.sickle,
  sickle_details: weapons.sickle_details,

  light_crossbow: weapons.light_crossbow,
  light_crossbow_details: weapons.light_crossbow_details,

  dart: weapons.dart,
  dart_details: weapons.dart_details,

  shortbow: weapons.shortbow,
  shortbow_details: weapons.shortbow_details,

  sling: weapons.sling,
  sling_details: weapons.sling_details,

  halberd: weapons.halberd,
  halberd_details: weapons.halberd_details,

  war_pick: weapons.war_pick,
  war_pick_details: weapons.war_pick_details,

  warhammer: weapons.warhammer,
  warhammer_details: weapons.warhammer_details,

  battleaxe: weapons.battleaxe,
  battleaxe_details: weapons.battleaxe_details,

  glaive: weapons.glaive,
  glaive_details: weapons.glaive_details,

  greatsword: weapons.greatsword,
  greatsword_details: weapons.greatsword_details,

  lance: weapons.lance,
  lance_details: weapons.lance_details,

  longsword: weapons.longsword,
  longsword_details: weapons.longsword_details,

  whip: weapons.whip,
  whip_details: weapons.whip_details,

  shortsword: weapons.shortsword,
  shortsword_details: weapons.shortsword_details,

  maul: weapons.maul,
  maul_details: weapons.maul_details,

  morningstar: weapons.morningstar,
  morningstar_details: weapons.morningstar_details,

  pike: weapons.pike,
  pike_details: weapons.pike_details,

  rapier: weapons.rapier,
  rapier_details: weapons.rapier_details,

  greataxe: weapons.greataxe,
  greataxe_details: weapons.greataxe_details,

  scimitar: weapons.scimitar,
  scimitar_details: weapons.scimitar_details,

  trident: weapons.trident,
  trident_details: weapons.trident_details,

  flail: weapons.flail,
  flail_details: weapons.flail_details,

  hand_crossbow: weapons.hand_crossbow,
  hand_crossbow_details: weapons.hand_crossbow_details,

  heavy_crossbow: weapons.heavy_crossbow,
  heavy_crossbow_details: weapons.heavy_crossbow_details,

  longbow: weapons.longbow,
  longbow_details: weapons.longbow_details,

  blowgun: weapons.blowgun,
  blowgun_details: weapons.blowgun_details,

  net: weapons.net,
  net_details: weapons.net_details,

  tools: "інструменти",

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

  languages: "мови",
  languages_human: "мови етносів людей",

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

  //Особенности — пассивньіе умения

  fines: "особливості",

  //Ключевьіе слова
  advantage: "перевага",
  no_disadvantage: "немає перешкоди",
  rethrow: "перекид",
  resistance: "стійкість",
  immunity: "імунітет",
  telepathy: "телепатія",
  proficiency_bonus: "2× Майстерності",
  slippage: "прослизання",
  disadvantage: "перешкода",
  plus_1_to_maxhp: "+1 до Max HP",
  trans: "транс",
  stealth_in_wild: "маскування в дикій місцевості",
  knowledge: "знання",
  extra_dice_damage: "+1 куб пошкодження",
  persistence: "витривалість",

  //Обьект особенности
  any_dice_1: "будь-якого вашого кидка d20 при “1”",
  behind_bigger_than_mid: "за істотою, що вища за середній розмір",
  among_bigger_than_mid: "серед істот, що вищі за середній розмір",
  fear_against: "проти 😱 Переляку",
  poison_against: "проти 🧪 Отрути",
  poison_damage: "до пошкодження 🧪 Отрутою",
  poison_w: "🧪 Отрутою",
  known_languages: "відомими мовами",
  fire_against: "проти 🔥 Вогню",
  fire_damage: "до ушкодження 🔥 Вогнем",
  fire_w: "🔥 Вогнем",
  cold_damage: "до ушкодження ❄️ Холодом",
  cold_w: "❄️ Холодом",
  electricity_damage: "до пошкодження ⚡️ Струмом",
  electricity_w: "⚡ Струмом",
  acid_damage: "до пошкодження ⚗️ Кислотою",
  acid_w: "⚗️ Кислотою",
  thunder_w: "🔊 Звуком",
  radiant_w: "✨ Світлом",
  force_w: "🌈 Силою",

  piercing_w: "🗡️ колоте",
  slashing_w: "🪓 рубане",
  bludgeoning_w: "🔨 дробильне",

  necrotic_w: "💀 Некротичне",
  psychic_w: "🧠 Психічне",

  history_check_rock_gnome:
    "до перевірки Історії магічного, алхімічного чи технологічного предмета",
  stealth_in_stones: "при Непомітності в кам'янистій місцевості",
  magic_against_int_wis_cha:
    "проти Магії з Випробуванням  на Інтелект, Мудрість, Харизму",
  stone_history: "до перевірки Історії пов'язаної з каменем",
  perception_under_sun: "на сприйняття під прямим сонячним світлом",
  attack_under_sun: "на атаку під прямим сонячним світлом",
  for_each_lvl_incl_1: "за кожен рівень, включно з першим",
  charm_against: "проти 😍 Зачарування",
  magic_sleep_against: "до магічного 🥱 Сну",
  trans_details: "— глибока медитація замість сну, до 4 годин",
  stealth_in_wild_details:
    "— навіть якщо слабо закриті листям / дощем / снігопадом / туманом.",
  any_cantrip_wizard: "1 будь-якого заклину мага",
  crit_hand_weapon: "при криті ближньою зброєю",
  persistence_details:
    "— коли Здоровʼя опускається до 0 і ви при цьому не вбиті, воно стає = 1",

  no_armor_protection: "захист без обладунків",
  armor_constitution: "— броня за рахунок Статури (застосовано)",
  saving_dex_visible: "на Випробування Спритності від видимих ефектів",
  charmed_while_raging: "проти 😍 Зачарування при Люті",
  frightened_while_raging: "проти 😱 Переляку при Люті",
  on_initiative: "на ініціативу",
  extra_movement: "додаткове пересування",
  rage_half_speed: "на половину швидкості, як частина впадання в Лють",
  rage_persistence: "люта стійкість",
  rage_persistence_details:
    "— коли при Люті Здоровʼя опускається до 0 і ви при цьому не вбиті, воно стає = 1, при успішному Випробуванні Сили зі складністю 10 (+5 за кожний наступний раз до тривалого відпочинку)",
  saving_strength: "результат Випробування Сили",
  rage_sustainability: "Лють не припиняється достроково",
  only_if_uncontious: "крім втрати свідомості",
  near_friends_attack_in_rage: "на ближні атаки союзників поруч, при Люті",
  any_damage_but_psy: "до будь-якого пошкодження крім 🧠 Психічного, при Люті",
  on_dodging_in_rage:
    "на ухилення від провокованих атак, при Люті і без важких обладунків",
  rush: "ривок",
  as_bonus_action: "бонусною дією, при Люті",
  long_jumps: "стрибки +10ф у довжину та +3ф у висоту",
  in_rage: "при Люті",
  fast_tempo: "швидкий темп",
  while_following_prints: "при русі по сліду",
  normal_tempo: "нормальньій темп",
  in_stealth: "при русі в Непомітності",
  double_weight: "2× Вантажопідйомність",
  weight_capacity: "включно з максимальною вагою навантаження та підйому",
  str_check_on_move:
    "на Випробування Сили під час пересування / руйнування предметів",
  to_see: "Зір",
  one_mile_100f_details: "до 1 милі, а на 100ф до найдрібніших деталей",
  on_perception_in_lowlight: "на Сприйняття при тьмяному світлі",
  double_speed: "2× Швидкість",
  travel_elk: "подорожі для вас і 10 ваших супутників в межах 60ф",
  on_dodging_in_rage_bear:
    "на ухилення союзників поруч від атак ворогів, що бачать вас, при Люті",
  flight: "політ",
  as_walking_speed_in_rage:
    "за швидкістю рівний швидкості пересування, при Люті",
  as_walking_speed: "за швидкістю рівний швидкості пересування",
  on_thieves_tools: "до використання крадійських інструментів",

  //Умения — активньіе умения без урона

  abilities: "особливості",

  inventory: "спорядження",

  shield: "щит",

  wallet: "кошель",

  tripple_platina: "тричіплатинових",
  platina: "платинових",
  gold: "золотих",
  silver: "срібних",
  copper: "мідних",

  //Ethnos

  common: "звичайний",

  //Races

  //Halfling

  halfling: "напіврослик",
  halfling_details: races.halfling,

  stout: "жилавий",
  stout_halfling_details: races.stout_halfling,

  lightfoot: "прудконогий",
  lightfoot_halfling_details: races.lightfoot_halfling,

  ghost: "примарний",
  ghost_halfling_details: races.ghost_halfling,

  rare: "рідкісний етнос",
  rare_details: races.rare,

  //Gnome

  gnome: "гном",
  gnome_details: races.gnome,

  rock: "скельний",
  rock_gnome_details: races.rock_gnome,

  deep: "глибинний",
  deep_gnome_details: races.deep_gnome,

  forest: "лісовий",
  forest_gnome_details: races.forest_gnome,

  //Dwarf

  dwarf: "дворф",
  dwarf_details: races.dwarf,

  mountain: "гірський",
  mountain_dwarf_details: races.mountain_dwarf,

  grey: "сірий",
  grey_dwarf_details: races.grey_dwarf,

  hill: "пагорбний",
  hill_dwarf_details: races.hill_dwarf,

  //Human

  human: "людина",
  human_details: races.human,

  arkayun: "аркаюн",
  arkayun_details: races.arkayun_human,

  bedin: "бедін",
  bedin_details: races.bedin_human,

  gur: "гур",
  gur_details: races.gur_human,

  damarian: "дамарець",
  damarian_details: races.damarian_human,

  illuskian: "іллюскіанець",
  illuskian_details: races.illuskian_human,

  imaskari: "імаскарі",
  imaskari_details: races.imaskari_human,

  kalishit: "калишит",
  kalishit_details: races.kalishit_human,

  mulan: "мулан",
  mulan_details: races.mulan_human,

  nar: "нар",
  nar_details: races.nar_human,

  rashemi: "рашемі",
  rashemi_details: races.rashemi_human,

  tetirian: "тетірець",
  tetirian_details: races.tetirian_human,

  tuigan: "туйган",
  tuigan_details: races.tuigan_human,

  terami: "терамі",
  terami_details: races.terami_human,

  ulutiune: "улутіун",
  ulutiune_details: races.ulutiune_human,

  ffolk: "ффолк",
  ffolk_details: races.ffolk_human,

  halruanian: "халруанець",
  halruanian_details: races.halruanian_human,

  chondatan: "чондатанець",
  chondatan_details: races.chondatan_human,

  chult: "чульт",
  chult_details: races.chult_human,

  shaarian: "шаарець",
  shaarian_details: races.shaarian_human,

  shu: "шу",
  shu_details: races.shu_human,

  //Halfelf

  halfelf: "напівельф",
  halfelf_details: races.halfelf,

  //Tiefling

  tiefling: "Тифлін",
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

  dragonborn: "драконородний",
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

  color: "колір",
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

  //Заклинания — активньіе умения с уроном

  spells: "чари",

  //schools
  cantrip: "заговір",

  abjuration: "Перешкоджання", //
  conjuration: "зʼявлення", //
  divination: "віщування", //
  enchantment: "Зачаровування", //
  evocation: "втілення", //
  illusion: "ілюзія", //
  necromancy: "некромантія", //
  transmutation: "перетворення", //
  ability: "вміння",
  other: "інше",

  //cast time
  cast_time: "час касту",
  reaction: "Реакція",
  bonus_action: "Бонусна дія",
  action: "Основна дія",
  ritual: "Ритуал",
  starting_from: "від",
  up_to: "до",
  sec: "сек",
  round: "раунд",
  min: "хв",
  hour: "г",
  day: "дн",

  mana: "чарунки",

  //parts
  parts: "умови",
  verbal: "слово",
  somatic: "жест",
  touch: "дотик цілі",
  focus: "фокус",
  material_10gold: "матеріали на суму в 10 зм",
  hit: "влучення",
  none: "—",

  //aim
  aim_target: "ціль",
  self: "на себе",
  creature: "істота",
  object: "обʼєкт",
  point: "точка",

  near: "поблизу",
  in_distance: "на відстані",

  //duration
  time: "Тривалість",
  instant: "миттєво",
  concentration: "концентрація",
  till_dissipate: "поки не розсіється",

  //impact
  damage: "пошкодження",
  heal: "зцілення",
  bonus_w: "бонусне",

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
  spell_hellish_rebuke_tiefling_expanded:
    spells.hellish_rebuke_tiefling_expanded,

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

  spell_minor_illusion: spells.minor_illusion,
  spell_minor_illusion_gnome: spells.minor_illusion_gnome,
  spell_minor_illusion_details: spells.minor_illusion_details,
  spell_minor_illusion_expanded: spells.minor_illusion_expanded,

  spell_enlargement_self: spells.enlargement_self,
  spell_enlargement_self_details: spells.enlargement_self_details,
  spell_enlargement_self_expanded: spells.enlargement_self_expanded,

  spell_invisibility_self: spells.invisibility_self,
  spell_invisibility_self_details: spells.invisibility_self_details,
  spell_invisibility_self_expanded: spells.invisibility_self_expanded,

  spell_dancing_lights: spells.dancing_lights,
  spell_dancing_lights_details: spells.dancing_lights_details,
  spell_dancing_lights_expanded: spells.dancing_lights_expanded,

  spell_faerie_fire_0: spells.faerie_fire_0,
  spell_faerie_fire: spells.faerie_fire,
  spell_faerie_fire_0_details: spells.faerie_fire_0_details,
  spell_faerie_fire_0_expanded: spells.faerie_fire_0_expanded,

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
  spell_speak_with_animals_ritual_details: spells.speak_with_animals_ritual_details,
  spell_speak_with_animals_ritual_expanded: spells.speak_with_animals_ritual_expanded,
  spell_speak_with_animals_details: spells.speak_with_animals_details,
  spell_speak_with_animals_expanded: spells.speak_with_animals_expanded,

  spell_commune_with_nature: spells.commune_with_nature,
  spell_commune_with_nature_ritual: spells.commune_with_nature_ritual,
  spell_commune_with_nature_ritual_details: spells.commune_with_nature_ritual_details,
  spell_commune_with_nature_ritual_expanded: spells.commune_with_nature_ritual_expanded,
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
  explorers_pack_details:
    "Будь-який шукач пригод може бути покликаний пройти довгий шлях, виконуючи завдання, але ті, хто вибрав життя дослідника, особливо добре підготовлені до подорожі.",

  backpack: "рюкзак",
  backpack_details:
    "Місткість: 1 кубічний фут/15 кг. Ви також можете прив'язувати такі предмети, як спальники та мотузки зовні рюкзака.",

  bedroll: "спальник",
  bedroll_details: "Використовується для тривалого та короткого відпочинку.",

  mess_kit: "столовий набір",
  mess_kit_details:
    "У цій невеликій коробці знаходиться чашка та прості столові прилади. Коробка розкривається, і одна сторона може використовуватися як сковорода, а інша як тарілка або неглибока миска.",

  tinderbox: "трутниця",
  tinderbox_details:
    "У цьому невеликому контейнері знаходиться кремінь, кресало і трут (зазвичай суха ганчірка, вимочена в маслі), що використовуються для розпалювання вогню. Використання його для розпалювання смолоскипа — або чогось іншого, легкозаймистого — вимагає однієї дії. Розпалювання іншого вогню потребує 1 хвилини.",

  torch: "смолоскип",
  torch_details:
    "Смолоскип горить 1 годину, випромінюючи яскраве світло в межах 20 футів і тьмяне світло в межах ще 20 футів. Якщо ви робите ближню атаку палаючим смолоскипом і влучаєте, він завдає пошкодження 🔥 Вогнем 1.",

  ration: "денний раціон",
  ration_details:
    "Раціони складаються з зневодненої їжі, що підходить для подорожей, і включає в'ялене м'ясо, сухофрукти, галети та горіхи.",

  waterskin: "бурдюк",
  waterskin_details: "Місткість: 2 літри",

  hempen_rope: "мотузка 50ф",
  hempen_rope_details:
    "зроблена з пеньки або шовку. Вона має 2 здоровʼя, і її можна порвати Випробуванням Сили складністю 17.",

  barbarian: classes.barbarian,
  barbarian_details: classes.barbarian_details,

  totem_warrior: classes.totem_warrior,
  totem_warrior_details: classes.totem_warrior_details,

  totem_spirit: classes.totem_spirit,
  totem_spirit_details: classes.totem_spirit_details,
  totem_harmony: classes.totem_harmony,

  totem: "тотем",
  totem_details:
    "амулет або схожа прикраса, що містить хутро або шкіру, пір'я, пазурі, зуби або кістки тотемної тварини.",

  wolf: "вовк",
  bear: "ведмідь",
  eagle: "орел",
  elk: "лось",
  tiger: "тигр",

  // 19 Oct

  on_choice: "на вибір",

  feat_actor: "Артистичний",
  feat_actor_details: "Ви навчилися театрального мистецтва та імітації.",

  performace_deception_acting:
    "на Артистичність та Обман, коли ви намагаєтеся видати себе за когось іншого",
  mimicing: "імітація",
  other_creature_sound_1min:
    "мови та звуків інших істот, після 1 хвилини слухання",

  feat_example: "приклад",
  feat_example_details: "приблизний приклад",

  equipment: "спорядження",

  ranged_fight: "дальній бій",
  melee_fight: "ближній бій",

  quiver: "сагайдак",
  quiver_details: "контейнер для стріл. Вміщується 20 стріл.",

  arrow_details: "снаряд для лука",

  burglars_pack: "набір зломщика",
  burglars_pack_details:
    "У наборі зломщика міститься безліч важливих професійних інструментів для злому замків та попередження про патруль.",

  metal_ball_1000: "металеві кульки × 1000",
  metal_ball_1000_details:
    "ви можете розсипати дією з мішочка крихітні металеві кульки, покривши площу 10 × 10 футів. Істоти, що переміщаються по цій площі, повинні досягти успіху у Випробуванні Спритності зі складністю 10, інакше вони падають ниць. Істота, що переміщується цією областю із зменшеною удвічі швидкістю, не повинна робити Випробування.",

  fishing_line: "волосінь 10ф",
  fishing_line_details: "шовкова волосінь",

  bell: "дзвіночок",
  bell_details: "невеликий і дзвінкий дзвіночок з кілечком зверху",

  candle: "свічка",
  candle_details:
    "Протягом 1 години свічка випромінює яскраве світло в межах радіусу 5 футів і тьмяне світло в межах ще 5 футів.",

  crowbar: "ломик",
  crowbar_details:
    "використання ломика дозволяє здійснювати перевірки Сили з перевагою, якщо важіль має допомогти.",

  item_hammer: "молоток",
  item_hammer_details: "ну звичайний собі молоток",

  item_piton: "кілочок",
  item_piton_details: "може бути використаний для розклинювання чогось.",

  hooded_lantern: "закритий ліхтар",
  hooded_lantern_details:
    "Випускає яскраве світло в межах 30 футів і тьмяне світло в межах ще 30 футів. Запалений ліхтар горить 6 годин від однієї фляги олії. Ви можете основною дією опустити козирок, зменшивши освітлення до тьмяного світла в межах 5 футів.",

  oil_flask: "Фляга з олією",
  oil_flask_details:
    "Зазвичай олія продається у глиняних флягах по 1 пінті (0,5 літра). Ви можете облити маслом з фляги істоту, що знаходиться в межах 5 футів, або кинути її на 20 футів, ламаючи при ударі.\n\n" +
    "Здійсніть далекобійну атаку по істоті або предмету, вважаючи олію імпровізованою зброєю. При влучанні ціль покривається олією. Якщо ціль отримує шкоду вогнем, поки масло не висохло (1 хвилина), вона отримує додаткову шкоду вогнем 5 від олії, що горить.\n\n" +
    "Ви можете також вилити фляжку олії на землю, покривши площу 5 × 5 футів, за умови, що підлога рівна. Якщо тепер масло підпалити, воно горить 2 раунди і завдає 5 пошкодження 🔥 Вогнем всім істотам, що входять в цю область або хід, що закінчує в ній. Істота може отримати це пошкодження лише один раз за хід.",

  dungeoneers_pack: "набір дослідника підземель",
  dungeoneers_pack_details:
    "Містить основне спорядження для занурення у темряву у пошуках скарбів.",

  armor_leather: "шкіряна",
  armor_leather_details:
    "Нагрудник та плечі цього обладунку виготовлені зі шкіри, вивареної в олії. Інші частини обладунку виготовлені з більш м'яких і гнучких матеріалів.",

  armor_scalemail: "луската",
  armor_scalemail_details:
    "Цей обладунок складається зі шкіряних куртки і поножів (а також, можливо, окремої спідниці), покритих шматочками металу, що перекриваються, схожими на рибну луску. У комплект входять рукавиці.",

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
  thieves_pack_details:
    "Володіння цими інструментами дозволяє додавати Бонус Досвіду до всіх перевірок здібностей, зроблених для відключення пасток та злому замків.",

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
  on_dice_mastery_skill:
    "на d20 під час перевірки навичок та здібностей з майстерністю",

  always_hear: "завжди чути",
  invisible_creatures_10f:
    "всіх прихованих та невидимих істот у межах 10ф від себе",

  no_advantage: "немає переваги",
  on_attacks_on_you: "на будь-які атаки по вас",

  min_20: "Мінімум 20",
  on_dice_d20:
    "на d20, але без крита, якщо це кидок атаки. Відновлюється після короткого відпочинку",

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

  on_not_moved: "на атаки по істотах, які ще не зробили хід у цьому бою",

  double_damage: "2× пошкодження",
  double_damage_more: "ще 2× пошкодження",
  on_sudden_attack:
    "по істотах, захоплених зненацька, які не ходили в поточному бою",
  on_sudden_attack_extra:
    "по істотах, захоплених зненацька, якщо вони провалили Випробування Статури",

  days: "днів",
  hours: "годин",

  gold_25: "25 зм",

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
  spell_protection_from_evil_and_good_details:
    spells.protection_from_evil_and_good_details,
  spell_protection_from_evil_and_good_expanded:
    spells.protection_from_evil_and_good_expanded,

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

  material_ink_10gold: "чорнило за 10 зм",

  spell_illusory_script: spells.illusory_script,
  spell_illusory_script_details: spells.illusory_script_details,
  spell_illusory_script_expanded: spells.illusory_script_expanded,

  spell_unseen_servant: spells.unseen_servant,
  spell_unseen_servant_details: spells.unseen_servant_details,
  spell_unseen_servant_expanded: spells.unseen_servant_expanded,

  spell_detect_poison_and_disease: spells.detect_poison_and_disease,
  spell_detect_poison_and_disease_details:
    spells.detect_poison_and_disease_details,
  spell_detect_poison_and_disease_expanded:
    spells.detect_poison_and_disease_expanded,

  spell_detect_evil_and_good: spells.detect_evil_and_good,
  spell_detect_evil_and_good_details: spells.detect_evil_and_good_details,
  spell_detect_evil_and_good_expanded: spells.detect_evil_and_good_expanded,

  spell_detect_magic: spells.detect_magic,
  spell_detect_magic_details: spells.detect_magic_details,
  spell_detect_magic_expanded: spells.detect_magic_expanded,

  material_pearl_100gold: "перлина за 100+ зм",

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

  spell_feather_fall: spells.feather_fall,
  spell_feather_fall_details: spells.feather_fall_details,
  spell_feather_fall_expanded: spells.feather_fall_expanded,

  spell_searing_smite: spells.searing_smite,
  spell_searing_smite_details: spells.searing_smite_details,
  spell_searing_smite_expanded: spells.searing_smite_expanded,

  material_familiar_10gold: "вугілля+пахощі+жаровня за 10 зм",

  spell_find_familiar: spells.find_familiar,
  spell_find_familiar_details: spells.find_familiar_details,
  spell_find_familiar_expanded: spells.find_familiar_expanded,

  spell_comprehend_languages: spells.comprehend_languages,
  spell_comprehend_languages_details: spells.comprehend_languages_details,
  spell_comprehend_languages_expanded: spells.comprehend_languages_expanded,

  spell_bane: spells.bane,
  spell_bane_details: spells.bane_details,
  spell_bane_expanded: spells.bane_expanded,

  spell_bane_warlock: spells.bane_warlock,
  spell_bane_warlock_details: spells.bane_warlock_details,
  spell_bane_warlock_expanded: spells.bane_warlock_expanded,

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

  sum_w: "сумарно",

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

  liters_number: "літрів води",

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

  material_diamond_50gold: "діамант за 50 зм",

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

  material_flave_ruby_50gold: "порошок рубіну за 50 зм (витрачається)",

  spell_continual_flame: spells.continual_flame,
  spell_continual_flame_details: spells.continual_flame_details,
  spell_continual_flame_expanded: spells.continual_flame_expanded,

  spell_see_invisibility: spells.see_invisibility,
  spell_see_invisibility_details: spells.see_invisibility_details,
  spell_see_invisibility_expanded: spells.see_invisibility_expanded,

  spell_suggestion: spells.suggestion,
  spell_suggestion_details: spells.suggestion_details,
  spell_suggestion_expanded: spells.suggestion_expanded,

  material_magic_mouth_50gold:
    "Шматочок медових сот і порошок нефриту за 10 зм ( витрачаються )",

  spell_magic_mouth: spells.magic_mouth,
  spell_magic_mouth_details: spells.magic_mouth_details,
  spell_magic_mouth_expanded: spells.magic_mouth_expanded,

  material_golden_dust_25gold: "Золотий пил за 25 зм (витрачається).",

  spell_arcane_lock: spells.arcane_lock,
  spell_arcane_lock_details: spells.arcane_lock_details,
  spell_arcane_lock_expanded: spells.arcane_lock_expanded,

  spell_phantasmal_force: spells.phantasmal_force,
  spell_phantasmal_force_details: spells.phantasmal_force_details,
  spell_phantasmal_force_expanded: spells.phantasmal_force_expanded,

  material_augury_25gold:
    "Особливі палички, кісточки або фігурки з мітками за 25 зм",

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

  material_warding_bond_50gold: "Пара платинових кілець за 50 зм",
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
  spell_locate_animals_or_plants_details:
    spells.locate_animals_or_plants_details,
  spell_locate_animals_or_plants_expanded:
    spells.locate_animals_or_plants_expanded,

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

  spell_hold_person_monk: spells.hold_person_monk,
  spell_hold_person_monk_details: spells.hold_person_monk_details,
  spell_hold_person_monk_details_5: spells.hold_person_monk_details_5,
  spell_hold_person_monk_details_9: spells.hold_person_monk_details_9,
  spell_hold_person_monk_details_13: spells.hold_person_monk_details_13,
  spell_hold_person_monk_details_17: spells.hold_person_monk_details_17,
  spell_hold_person_monk_expanded: spells.hold_person_monk_expanded,

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
  armor_shield_details:
    "Щит виготовляється з дерева чи металу, і використовується однією рукою. Збільшує Броню на 2. Ви отримуєте перевагу лише від одного щита одночасно.",

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
  style_great_weapon: "велика зброя",
  style_double_weapon: "дві зброї",
  style_archery: "стрільба",

  on_attack_signle_one_handed:
    "+2 на пошкодження від ближніх атак однією рукою",

  spell_side_pary: spells.side_pary,
  spell_side_pary_details: spells.side_pary_details,
  spell_side_pary_expanded: spells.side_pary_expanded,

  on_armor_if_armor: "+1 на Броню при одягнених обладунках (застосовано)",

  if_1_or_2_on_two_handed_weapon:
    "кубів пошкодження дворучної зброї, якщо випало 1 або 2",

  on_sick: "до хвороб",

  spell_divine_channel_devotion_1: spells.divine_channel_devotion_1,
  spell_divine_channel_devotion_1_details:
    spells.divine_channel_devotion_1_details,
  spell_divine_channel_devotion_1_expanded:
    spells.divine_channel_devotion_1_expanded,

  spell_divine_channel_devotion_2: spells.divine_channel_devotion_2,
  spell_divine_channel_devotion_2_details:
    spells.divine_channel_devotion_2_details,
  spell_divine_channel_devotion_2_expanded:
    spells.divine_channel_devotion_2_expanded,

  spell_divine_channel_mana: spells.divine_channel_mana,
  spell_divine_channel_mana_details: spells.divine_channel_mana_details,
  spell_divine_channel_mana_expanded: spells.divine_channel_mana_expanded,

  spell_divine_channel_antients_1: spells.divine_channel_antients_1,
  spell_divine_channel_antients_1_details:
    spells.divine_channel_antients_1_details,
  spell_divine_channel_antients_1_expanded:
    spells.divine_channel_antients_1_expanded,

  spell_divine_channel_antients_2: spells.divine_channel_antients_2,
  spell_divine_channel_antients_2_details:
    spells.divine_channel_antients_2_details,
  spell_divine_channel_antients_2_expanded:
    spells.divine_channel_antients_2_expanded,

  spell_divine_channel_vengence_1: spells.divine_channel_vengence_1,
  spell_divine_channel_vengence_1_details:
    spells.divine_channel_vengence_1_details,
  spell_divine_channel_vengence_1_expanded:
    spells.divine_channel_vengence_1_expanded,

  spell_divine_channel_vengence_2: spells.divine_channel_vengence_2,
  spell_divine_channel_vengence_2_details:
    spells.divine_channel_vengence_2_details,
  spell_divine_channel_vengence_2_expanded:
    spells.divine_channel_vengence_2_expanded,

  push: "поштовх",

  spell_create_or_destroy_water: spells.create_or_destroy_water,
  spell_create_or_destroy_water_details: spells.create_or_destroy_water_details,
  spell_create_or_destroy_water_expanded:
    spells.create_or_destroy_water_expanded,

  short_run: "короткий розбіг",

  feat_athlete: "Атлет",
  feat_athlete_details: "Ви пройшли інтенсивну фізичну підготовку.",

  quicko: "швидке",
  getting_up: "встання на ноги",

  feat_alert: "Пильний",
  feat_alert_details: "Ви завжди готові до небезпек.",

  on_sudden: "до застання зненацька",

  on_stealth_attacks: "на атаки по вас із непомітності",

  feat_war_caster: "Бойовий чаклун",
  feat_war_caster_details:
    "Ви вивчили магічні техніки, і навчилися накладати чари в запалі битви.",

  on_con_save_while_concentrating: "на Випробування Статури при концентрації",

  use_somatic: "Використання Жестів",
  in_taken_hands: "зайнятими руками",

  cast_reaction: "Реакція як Каст",
  for_spells_action: "для заклять з Кастом Основна | Бонусна дія",

  feat_grappler: "Борець",
  feat_grappler_details:
    "Ви розвинули навички, потрібні для міцного cхоплення супротивників.",

  on_attack_grapple: "на атаки цілі, яку ви тримаєте у cхопленні",

  restrain: "Обплутування",
  creature_on_addititonal_grapple: "істоти при додатковому схопленні",

  feat_lucky: "Щасливчик",
  feat_lucky_details: "Вам якимось чином щастить саме тоді, коли це потрібно.",

  on_any_d20:
    "на будь-який кидок d20, навіть на ворожий кидок атаки на вас. Використовує 1× Слот удачі.",

  feat_mounted_combatant: "Верховий боєць",
  feat_mounted_combatant_details:
    "Ви небезпечний ворог, коли ви верхи на скакуні.",

  on_mounted_attack:
    "на верхові атаки по істотах не верхи і менших за вашого скакуна.",

  redirect_attack: "переспрямувати атаку",
  from_mount_on_self: "зі скакуна на себе",

  reduce_damage: "зменшення пошкодження",
  on_mount_save_dex: "по скакуну при Випробуваннях Спритності",

  feat_observant: "Уважний",
  feat_observant_details: "Ви швидко вловлюєте дрібні подробиці.",

  lips_read: "читання по губах",

  feat_martial_adept: "Військовий адепт",
  feat_martial_adept_details:
    "Ви пройшли військову підготовку, що дозволяє здійснювати спеціальні бойові прийоми. Якщо у вас є Маневри, ви отримуєте ще один (d8). В іншому випадку ви отримуєте один слабший Маневр (d6).",

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

  spell_slots: "чарунки",
  spell_slot: "1× Чарунка",

  movement: "пересування",

  spell_maneuver_ambush: spells.maneuver_ambush,
  spell_maneuver_ambush_details: spells.maneuver_ambush_details,
  spell_maneuver_ambush_expanded: spells.maneuver_ambush_expanded,

  spell_maneuver_evasive_footwork: spells.maneuver_evasive_footwork,
  spell_maneuver_evasive_footwork_details:
    spells.maneuver_evasive_footwork_details,
  spell_maneuver_evasive_footwork_expanded:
    spells.maneuver_evasive_footwork_expanded,

  bonus_w_fem: "бонусна",

  spell_maneuver_lunging_attack: spells.maneuver_lunging_attack,
  spell_maneuver_lunging_attack_details: spells.maneuver_lunging_attack_details,
  spell_maneuver_lunging_attack_expanded:
    spells.maneuver_lunging_attack_expanded,

  spell_maneuver_maneuvering_attack: spells.maneuver_maneuvering_attack,
  spell_maneuver_maneuvering_attack_details:
    spells.maneuver_maneuvering_attack_details,
  spell_maneuver_maneuvering_attack_expanded:
    spells.maneuver_maneuvering_attack_expanded,

  spell_maneuver_menacing_attack: spells.maneuver_menacing_attack,
  spell_maneuver_menacing_attack_details:
    spells.maneuver_menacing_attack_details,
  spell_maneuver_menacing_attack_expanded:
    spells.maneuver_menacing_attack_expanded,

  spell_maneuver_feinting_attack: spells.maneuver_feinting_attack,
  spell_maneuver_feinting_attack_details:
    spells.maneuver_feinting_attack_details,
  spell_maneuver_feinting_attack_expanded:
    spells.maneuver_feinting_attack_expanded,

  spell_maneuver_disarming_attack: spells.maneuver_disarming_attack,
  spell_maneuver_disarming_attack_details:
    spells.maneuver_disarming_attack_details,
  spell_maneuver_disarming_attack_expanded:
    spells.maneuver_disarming_attack_expanded,

  spell_maneuver_trip_attack: spells.maneuver_trip_attack,
  spell_maneuver_trip_attack_details: spells.maneuver_trip_attack_details,
  spell_maneuver_trip_attack_expanded: spells.maneuver_trip_attack_expanded,

  spell_maneuver_riposte: spells.maneuver_riposte,
  spell_maneuver_riposte_details: spells.maneuver_riposte_details,
  spell_maneuver_riposte_expanded: spells.maneuver_riposte_expanded,

  spell_maneuver_distracting_strike: spells.maneuver_distracting_strike,
  spell_maneuver_distracting_strike_details:
    spells.maneuver_distracting_strike_details,
  spell_maneuver_distracting_strike_expanded:
    spells.maneuver_distracting_strike_expanded,

  reduction_w: "зменшення",

  spell_maneuver_parry: spells.maneuver_parry,
  spell_maneuver_parry_details: spells.maneuver_parry_details,
  spell_maneuver_parry_expanded: spells.maneuver_parry_expanded,

  spell_maneuver_goading_attack: spells.maneuver_goading_attack,
  spell_maneuver_goading_attack_details: spells.maneuver_goading_attack_details,
  spell_maneuver_goading_attack_expanded:
    spells.maneuver_goading_attack_expanded,

  spell_maneuver_rally: spells.maneuver_rally,
  spell_maneuver_rally_details: spells.maneuver_rally_details,
  spell_maneuver_rally_expanded: spells.maneuver_rally_expanded,

  spell_maneuver_pushing_attack: spells.maneuver_pushing_attack,
  spell_maneuver_pushing_attack_details: spells.maneuver_pushing_attack_details,
  spell_maneuver_pushing_attack_expanded:
    spells.maneuver_pushing_attack_expanded,

  spell_maneuver_precision_attack: spells.maneuver_precision_attack,
  spell_maneuver_precision_attack_details:
    spells.maneuver_precision_attack_details,
  spell_maneuver_precision_attack_expanded:
    spells.maneuver_precision_attack_expanded,

  spell_maneuver_commanders_strike: spells.maneuver_commanders_strike,
  spell_maneuver_commanders_strike_details:
    spells.maneuver_commanders_strike_details,
  spell_maneuver_commanders_strike_expanded:
    spells.maneuver_commanders_strike_expanded,

  spell_maneuver_sweeping_attack: spells.maneuver_sweeping_attack,
  spell_maneuver_sweeping_attack_details:
    spells.maneuver_sweeping_attack_details,
  spell_maneuver_sweeping_attack_expanded:
    spells.maneuver_sweeping_attack_expanded,

  spell_inspiration: spells.inspiration,
  spell_inspiration_details: spells.inspiration_details,
  spell_inspiration_expanded: spells.inspiration_expanded,

  feat_inspiring_leader: "Надихаючий лідер",
  feat_inspiring_leader_details:
    "Ви можете додати наснаги супутникам, зміцнивши їхню рішучість.",

  of_damage_dice_once_per_move: "на пошкодження від атаки ближньою зброєю один раз на хід",

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
  feat_dungeon_delver_details:
    "Ви навчити шукати приховані пастки та потаємні двері у підземеллях.",

  on_hidden_doors: "на пошук таємних дверей",
  on_trap_evasion: "на уникнення пасток та ефектів від них",
  on_trap_damage: "до пошкодження від пасток",
  on_passive_perception_on_quick_move:
    "на пасивну Сприйняття при швидкому переміщенні",

  feat_tough: "Міцний",
  feat_tough_details: "Ви відчуваєте більше життєвих сил з кожним рівнем.",

  feat_healer: "Лікар",
  feat_healer_details:
    "Ви здібний медик, що дозволяє швидко заліковувати рани та повертати союзників до ладу.",

  plus_1_to_hp: "Відновлення 1 HP",
  on_use_of_medical_tools:
    "при використанні набору цілителя для стабілізації вмираючого",

  spell_healer_tooling: spells.healer_tooling,
  spell_healer_tooling_details: spells.healer_tooling_details,
  spell_healer_tooling_expanded: spells.healer_tooling_expanded,

  healers_tool_slot: "1× Набір цілителя",
  healers_tool: "Набір цілителя",

  feat_great_weapon_master: "Майстер великої зброї",
  feat_great_weapon_master_details:
    "Ви навчилися використовувати вагу своєї зброї, дозволяючи інерції посилювати ваші атаки.",

  feat_polearm_master: "Майстер держакової зброї",
  feat_polearm_master_details:
    "Ви можете стримувати ворогів зброєю із властивістю «досяжність».",

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
  feat_weapon_master_details:
    "Ви знаєте, як користуватися безліччю видів зброї.",

  on_stealth_in_medium_armor: "на Непомітність у одягнених середніх обладунках",
  on_medium_armor:
    "+1 на Броню середніх обладунків, при Базовій Спритності 16+",

  feat_medium_armor_master: "Майстер середніх обладунків",
  feat_medium_armor_master_details:
    "Ви звикли до переміщення в середніх обладунках.",

  feat_heavy_armor_master: "Майстер важких обладунків",
  feat_heavy_armor_master_details:
    "Ви можете своїм обладунком відхиляти удари, які б інших вбили.",

  damage_reduction: "Зниження механічних пошкоджень",
  on_3_in_heavy_armor: "на -3, у важких обладунках",

  feat_shield_master: "Майстер щитів",
  feat_shield_master_details:
    "Ви використовуєте щити не лише для захисту, а й для нападу.",

  spell_shield_push: spells.shield_push,
  spell_shield_push_details: spells.shield_push_details,
  spell_shield_push_expanded: spells.shield_push_expanded,

  on_dex_check_in_shield:
    "+2 від щита, при Випробуваннях Спритності від ефектів, націлених тільки на вас",

  feat_spell_sniper: "Влучний чаклун",
  feat_spell_sniper_details:
    "Ви отримали знання про техніку, яка покращує атаку деякими видами заклять.",

  double_range: "2× дальність",
  on_spells_with_aim: "для заклять із прицілюванням",

  ignoring: "Ігнорування",
  on_covers_spells:
    "укриттів на 1/2 і на 3/4, при використанні заклять із прицілюванням",

  feat_sharpshooter: "Влучний стрілець",
  feat_sharpshooter_details:
    "Ви опанували далекобійну зброю і можете робити постріли, які інші вважали неможливими.",

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

  feat_charger: "Нальотчик",
  feat_charger_details: "Ви багато рухаєтеся у бою.",

  mastery_bonus: "Бонус Досвіду",
  on_armor_finesse:
    "до Броні, при Реакції на атаку, якщо у вас фехтувальна зброя",

  feat_defensive_duelist: "Оборонний дуелянт",
  feat_defensive_duelist_details:
    "Ви майстерно захищаєтесь фехтувальною зброєю.",

  feat_keen_mind: "Чудова пам'ять",
  feat_keen_mind_details:
    "Ви з неймовірною точністю можете відстежувати час, напрямок та деталі минулого.",

  always: "завжди",
  know_north: "відома сторона світу",
  know_time: "відомий час світанку/заходу сонця",
  clear_memory: "точні спогади",
  about_xp_1month: "про все прожите за останній місяць",

  feat_mobile: "Рухливий",
  feat_mobile_details: "Ви неймовірно швидкі та спритні.",

  on_hard_area_dash: "на Ривок у важкопрохідній місцевості",

  no_provocation: "немає провокації",
  in_this_move_after_attack:
    "від істоти, яку ви спробували атакувати в цьому ходу, ближньою зброєю",

  feat_magic_initiate_cleric: "Магія клірика",
  feat_magic_initiate_details_cleric:
    "Ви знаєте двоє чарів клірика, що не потребують чарунку, і одне заклинання, що вимагає 1 чарунку (його ви можете використовувати без чарунки, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками).",

  feat_magic_initiate_druid: "Магія друїда",
  feat_magic_initiate_details_druid:
    "Ви знаєте два заклинання друїда, що не вимагають чарунку, і одне заклинання, що вимагає 1 чарунку (його ви можете використовувати без чарунки, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками).",

  feat_magic_initiate_warlock: "Магія чаклуна",
  feat_magic_initiate_details_warlock:
    "Ви знаєте двоє чарів чаклуна, що не потребують чарунки, і одне заклинання, що вимагає 1 чарунку (його ви можете використовувати без чарунки, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками).",

  feat_magic_initiate_sorcerer: "Магія заклинача",
  feat_magic_initiate_details_sorcerer:
    "Ви знаєте двоє чарів заклинача, що не потребують чарунки, і одне заклинання, що вимагає 1 чарунку (його ви можете використовувати без чарунки, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками).",

  feat_magic_initiate_wizard: "Магія мага",
  feat_magic_initiate_details_wizard:
    "Ви знаєте двоє чарів мага, що не потребують чарунки, і одне заклинання, що вимагає 1 чарунку (його ви можете використовувати без чарунки, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками).",

  feat_magic_initiate_bard: "Магія барда",
  feat_magic_initiate_details_bard:
    "Ви знаєте двоє чарів барда, що не потребують чарунки, і одне заклинання, що вимагає 1 чарунку (його ви можете використовувати без чарунки, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками).",

  spells_0: "заклини",
  spells_1: "чари [1]",

  no_mana_but_once_a_day:
    "Ви зможете використовувати обрані чари без чарунки, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками.",

  use_no_mana: "використання без чарунки",
  one_spell_cleric: "одної чари клірика (один раз на день)",
  one_spell_druid: "одної чари друїда (один раз на день)",
  one_spell_warlock: "одної чари чаклуна (один раз на день)",
  one_spell_sorcerer: "одної чари заклинача (один раз на день)",
  one_spell_wizard: "одної чари мага (один раз на день)",
  one_spell_bard: "одної чари барда (один раз на день)",

  feat_skulker: "Пронира",
  feat_skulker_details: "Ви знаєте, як зливатися із тінями.",

  ability_to_hide: "можливість сховатися",
  if_small_cover: "навіть якщо слабо заслонені",
  no_reveal: "збереження Непомітності",
  if_missed: "при промаху далекобійною атакою",
  on_perception_sight: "на Сприйняття, повʼязану з зором",

  no_mana_but_ritual:
    "Ви зможете використовувати обрані чари без чарунки, але накладати його на мінімально можливому рівні, на 10 хвилин довше і тримаючи в руці свою ритуальну книгу.",

  ritual_book: "ритуальна книга",
  ritual_book_details: "",

  spell_learn_ritual: spells.learn_ritual,
  spell_learn_ritual_details: spells.learn_ritual_details,
  spell_learn_ritual_expanded: spells.learn_ritual_expanded,

  spell_learn_spell: spells.learn_spell,
  spell_learn_spell_details: spells.learn_spell_details,
  spell_learn_spell_expanded: spells.learn_spell_expanded,

  hour_per_lvl: "г / рів",
  gold50_per_lvl: "чорнила та ін. за 50 зм / рів",

  feat_ritual_caster_cleric: "Магія клірика",
  feat_ritual_caster_details_cleric:
    "Ви дізнаєтесь два ритуали клірика. Ви зможете використовувати їх без чарунки, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. Також ви можете вивчати інші знайдені ритуальні чари клірика.",

  feat_ritual_caster_druid: "Магія друїда",
  feat_ritual_caster_details_druid:
    "Ви дізнаєтесь два ритуали друїда. Ви зможете використовувати їх без чарунки, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. Також ви можете вивчати інші знайдені ритуальні чари друїда.",

  feat_ritual_caster_warlock: "Магія чаклуна",
  feat_ritual_caster_details_warlock:
    "Ви дізнаєтесь два ритуали чаклуна. Ви зможете використовувати їх без чарунки, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. Також ви можете вивчати інші знайдені ритуальні чари чаклуна.",

  feat_ritual_caster_sorcerer: "Магія заклинача",
  feat_ritual_caster_details_sorcerer:
    "Ви дізнаєтесь два ритуали заклинача. Ви зможете використовувати їх без чарунки, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. Також ви можете вивчати інші знайдені ритуальні чари заклинача.",

  feat_ritual_caster_wizard: "Магія мага",
  feat_ritual_caster_details_wizard:
    "Ви дізнаєтесь два ритуали мага. Ви зможете використовувати їх без чарунки, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. Також ви можете вивчати інші знайдені ритуальні чари мага.",

  feat_ritual_caster_bard: "Магія барда",
  feat_ritual_caster_details_bard:
    "Ви дізнаєтесь два ритуали барда. Ви зможете використовувати їх без чарунки, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. Також ви можете вивчати інші знайдені ритуальні чари барда.",

  feat_elemental_adept_sound: "Стихійний адепт 🔊 Звуку",
  feat_elemental_adept_sound_details:
    "Ви впевнено користуєтесь чарами певної стихії.",
  of_resistanse_sound: "стійкості до пошкоджень 🔊 Звуком",
  two_min: "2 як мінімальний результат",
  on_damage_dice_of_sound: "на кожному кубі пошкоджень 🔊 Звуком",

  feat_elemental_adept_acid: "Стихійний адепт ⚗️ Кислоти",
  feat_elemental_adept_acid_details:
    "Ви впевнено користуєтесь чарами певної стихії.",
  of_resistanse_acid: "стійкості до пошкоджень ⚗️ Кислотою",
  on_damage_dice_of_acid: "на кожному кубі пошкоджень ⚗️ Кислотой",

  feat_elemental_adept_fire: "Стихійний адепт 🔥 Вогню",
  feat_elemental_adept_fire_details:
    "Ви впевнено користуєтесь чарами певної стихії.",
  of_resistanse_fire: "стійкості до пошкоджень 🔥 Вогнем",
  on_damage_dice_of_fire: "на кожному кубі пошкоджень 🔥 Вогнем",

  feat_elemental_adept_cold: "Стихійний адепт ❄️ Холоду",
  feat_elemental_adept_cold_details:
    "Ви впевнено користуєтесь чарами певної стихії.",
  of_resistanse_cold: "стійкості до пошкоджень ❄️ Холодом",
  on_damage_dice_of_cold: "на кожному кубі пошкоджень ❄️ Холодом",

  feat_elemental_adept_electricity: "Стихійний адепт ⚡ Струму",
  feat_elemental_adept_electricity_details:
    "Ви впевнено користуєтесь чарами певної стихії.",
  of_resistanse_electricity: "стійкості до пошкоджень ⚡ Струмом",
  on_damage_dice_of_electricity: "на кожному кубі пошкоджень ⚡ Струмом",

  double_CON: "2× Статура",
  on_regen_min_2: "як мінімальний результат при кидку Регену (мінімум 2)",

  feat_durable: "Витривалий",
  feat_durable_details: "Ви дуже живучий.",

  feat_sentinel: "Страж",
  feat_sentinel_details:
    "Ви опанували техніку, що дозволяє користуватися всіма прогалинами в обороні супротивника.",

  provocation: "Провокація",
  on_disengage: "при виході з вашої досяжності, навіть при Відході",
  on_ally_attack: "якщо атакують іншого поряд з вами",

  stopka: "Зупинка",
  creature_affected_provoked_attack: "істоти при влучанні провокованої атаки",

  feat_mage_slayer: "Вбивця магів",
  feat_mage_slayer_details:
    "Ви розробили техніки, корисні у рукопашній битві із чаклунами.",

  on_save_spells_near: "на Випробування від заклять, накладених поруч",
  on_concentration_to_attacked_creature:
    "на концентрацію істоти, ураженої вашою атакою",
  on_casting_near: "на творця чарів поруч",

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
  fine_clothes_details:
    "Вишукане вбрання з дорогих матеріалів, яке навіть може бути прикрашене шовковими нитками та дорогоцінним камінням. Одягайте його, коли вам потрібно справити враження на панів, брати участь у дипломатії або залякати бідних людей. Не одягайте його, коли вирушаєте в пригоду — модні тканини надто тонкі для небезпек підземель, а всякі брязкальця можуть привернути увагу неприємних істот!",

  ink: "Чорнило",
  ink_details: "Пляшечка чорнила",

  ink_pen: "Перо",
  ink_pen_details: "Перо для використання чорнила.",

  lamp: "Олійна лампа",
  lamp_details:
    "Випромінює яскраве світло в межах 15 ф і тьмяне світло в межах ще 30 ф. Горить 6 годин від однієї фляги олії.",

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
  disguise_kit_details:
    "Косметика та бутафорія, що дозволяє змінювати вигляд і успішно використовувати Обман / Залякування / Артистичність / Переконливість, а також приховати травми або розпізнати чужий грим.<br/><br/>Ви можете створити обличчя для маскування під час довгого відпочинку. На надягання подоби після його створення потрібна 1 хвилина. Ви можете одночасно мати при собі тільки одну таку подобу, не привертаючи непотрібної уваги, якщо тільки у вас немає Сумки зберігання або іншого подібного способу залишити їх непоміченими. Кожна така подоба важить 1 фунт. В інших випадках потрібно 10 хвилин на створення подоби, яке трохи змінює вашу зовнішність і 30 хвилин, якщо потрібні більші зміни.",

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

  bardic_inspiration_slots: "Натхнення",
  bardic_inspiration_slot: "1× Натхнення",

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
  of_inspiration_slots_on_short_rest:
    "Слотів Натхнення навіть за короткий відпочинок (застосовано)",

  college_valor: classes.college_valor,
  college_valor_details: classes.college_valor_details,

  college_lore: classes.college_lore,
  college_lore_details: classes.college_lore_details,

  on_damage_and_ac: "можна використовувати для пошкодження або броні",

  spell_cutting_word: spells.cutting_word,
  spell_cutting_word_details: spells.cutting_word_details,
  spell_cutting_word_expanded: spells.cutting_word_expanded,

  fighter: classes.fighter,
  fighter_details: classes.fighter_details,

  armor_chainmail: "кольчуга",
  armor_chainmail_details: "Виготовлена із з’єднаних між собою металевих кілець, кольчуга має шар стьобаної тканини під собою, щоб запобігти натиранню та пом’якшити удари. До складу костюма входять рукавиці.",

  on_damage_second_attack: "на пошкодження і від другої атаки в ході",
  plus_2_on_ranged: "+2 на далекобійні атаки (застосовано)",

  spell_second_wind: spells.second_wind,
  spell_second_wind_details: spells.second_wind_details,
  spell_second_wind_expanded: spells.second_wind_expanded,

  second_wind_slots: "Другі дихання",
  second_wind_slot: "1× Друге дихання",

  spell_action_surge: spells.action_surge,
  spell_action_surge_details: spells.action_surge_details,
  spell_action_surge_expanded: spells.action_surge_expanded,

  action_surge_slots: "Сплески дій",
  action_surge_slot: "1× Сплеск дій",

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

  step_background: "світогляд",

  modifier: "модифікатор",

  min_base_strength: "дорівнює мінімум базовій Силі",
  speed_plus_10: "+10 Швидкість",
  if_no_heavy_armor_applied: "якшо не в важких обладунках (застосовано)",

  slot_lvl: "рівень чарунки",

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

  mana_slots_short_rest_lvl_05: "рівень/2 чарунків при короткому відпочинку",
  mana_slots_short_rest_lvl_05_up_to_5:
    "рівень/2 чарунків при короткому відпочинку, не більше [5]",

  component_pouch: "мішечок с компонентами",
  component_pouch_details:
    "Маленький водонепроникний шкіряний поясний гаманець із відділеннями для зберігання матеріальних компонентів та інших спеціальних предметів, необхідних для накладання заклять замість Фокусу, якщо тільки у цих компонентів не вказана вартість (дивіться опис чарів).",

  focus_details:
    "Особливий предмет — сфера, кристал, жезл, особливий посох, коротка дерев'яна паличка або схожий предмет — створений для створення заклять, умовою яких є Фокус.",

  science_book: "наукова книга",
  science_book_details: "",

  sand_pouch: "сумочка з піском",
  sand_pouch_details: "",

  knife: "невеликий ніж",
  knife_details: "",

  spell_book: "книга заклять",
  spell_book_details: "",

  school_of_evocation: classes.school_of_evocation,
  school_of_evocation_details: classes.school_of_evocation_details,

  twice_less: "Вдвічі менше",
  gold_and_time_evocation:
    "золота та часу на вивчення знайдених чарів Втілення",

  save_ally: "Створити безпечні ділянки",
  one_plus_lvl_from_spell_evocation:
    "всередині області своїх чарів Втілення",

  school_of_conjuration: classes.school_of_conjuration,
  school_of_conjuration_details: classes.school_of_conjuration_details,

  gold_and_time_conjuration:
    "золота та часу на вивчення знайдених чарів Зʼявлення",

  spell_small_conjuration: spells.small_conjuration,
  spell_small_conjuration_details: spells.small_conjuration_details,
  spell_small_conjuration_expanded: spells.small_conjuration_expanded,

  school_of_illusion: classes.school_of_illusion,
  school_of_illusion_details: classes.school_of_illusion_details,

  gold_and_time_illusion:
    "золота та часу на вивчення знайдених чарів Ілюзіїї",

  school_of_necromancy: classes.school_of_necromancy,
  school_of_necromancy_details: classes.school_of_necromancy_details,

  gold_and_time_necromancy:
    "золота та часу на вивчення знайдених чарів Некромантії",

  school_of_abjuration: classes.school_of_abjuration,
  school_of_abjuration_details: classes.school_of_abjuration_details,

  gold_and_time_abjuration:
    "золота та часу на вивчення знайдених чарів Перешкоджання",

  spell_magical_protection: spells.magical_protection,
  spell_magical_protection_details: spells.magical_protection_details,
  spell_magical_protection_details_6: spells.magical_protection_details_6,
  spell_magical_protection_expanded: spells.magical_protection_expanded,

  school_of_enchantment: classes.school_of_enchantment,
  school_of_enchantment_details: classes.school_of_enchantment_details,

  gold_and_time_enchantment:
    "золота та часу на вивчення знайдених чарів Чарів",

  school_of_transmutation: classes.school_of_transmutation,
  school_of_transmutation_details: classes.school_of_transmutation_details,

  gold_and_time_transmutation:
    "золота та часу на вивчення знайдених чарів Перетворення",

  school_of_divination: classes.school_of_divination,
  school_of_divination_details: classes.school_of_divination_details,

  gold_and_time_divination:
    "золота та часу на вивчення знайдених чарів Віщування",

  from_spell_kill_necromancy:
    "на 2× рівень чарів, від вбивства чарами. 3× якщо Некромантія",

  magical_protection: "Магічний захист",

  end_of_the_day: "до закінчення тривалого відпочинку",

  looking: "погляд",

  spell_hypnotic_look: spells.hypnotic_look,
  spell_hypnotic_look_details: spells.hypnotic_look_details,
  spell_hypnotic_look_expanded: spells.hypnotic_look_expanded,

  spell_small_alchemy: spells.small_alchemy,
  spell_small_alchemy_details: spells.small_alchemy_details,
  spell_small_alchemy_expanded: spells.small_alchemy_expanded,

  spell_portent: spells.portent,
  spell_portent_details: spells.portent_details,
  spell_portent_details_14: spells.portent_details_14,
  spell_portent_expanded: spells.portent_expanded,

  use_wo_mana: "використання без чарунки",
  two_spells_1_and_2: "одної чари[1] і одної чари[2]",
  two_spells_3:
    "двох заклять[3]. Один раз. Відновлюється після короткого відпочинку",

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
  circle_of_the_land_grassland_details:
    classes.circle_of_the_land_grassland_details,
  circle_of_the_land_mountain_details:
    classes.circle_of_the_land_mountain_details,
  circle_of_the_land_swamp_details: classes.circle_of_the_land_swamp_details,
  circle_of_the_land_underdark_details:
    classes.circle_of_the_land_underdark_details,
  circle_of_the_moon_details: classes.circle_of_the_moon_details,

  spell_wild_shape_heal: spells.wild_shape_heal,
  spell_wild_shape_heal_details: spells.wild_shape_heal_details,
  spell_wild_shape_heal_expanded: spells.wild_shape_heal_expanded,

  on_saving_from_plants: "на Випробування проти магічних рослин",
  no_speed_fee: "Немає штрафу швидкості",
  on_nonmagic_hard_area: "у немагічній важкопрохідній місцевості",
  on_enchantment_from_fey_elemental:
    "проти 😍 Зачарування феями чи елементалями",
  on_fear_from_fey_elemental: "проти 😱 Переляку феями чи елементалями",

  saving_wisdom: "Випробування Мудрості",
  on_any_animal_or_plant_attack:
    "для будь-якого звіра чи рослини, що намагається вас атакувати",

  spell_alter_self_druid: spells.alter_self_druid,
  spell_alter_self_warlock: spells.alter_self_warlock,

  of_nonmagic_damage_immunity_wild_shape:
    "імунітету цілі до немагічних атак та пошкоджень, при Дикій формі",

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
  spell_divine_channel_undead_details_11:
    spells.divine_channel_undead_details_11,
  spell_divine_channel_undead_details_14:
    spells.divine_channel_undead_details_14,
  spell_divine_channel_undead_details_17:
    spells.divine_channel_undead_details_17,
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
  spell_divine_channel_directed_strike_details:
    spells.divine_channel_directed_strike_details,
  spell_divine_channel_directed_strike_expanded:
    spells.divine_channel_directed_strike_expanded,

  spell_divine_channel_war_god_bless: spells.divine_channel_war_god_bless,
  spell_divine_channel_war_god_bless_details:
    spells.divine_channel_war_god_bless_details,
  spell_divine_channel_war_god_bless_expanded:
    spells.divine_channel_war_god_bless_expanded,

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
  two_plus_spell_level: "2 + [рівень] чарів, для [1+] заклять",
  self_two_plus_spell_level:
    "і себе на 2 + [рівень] чарів, для [1+] заклять",

  spell_divine_channel_save_life: spells.divine_channel_save_life,
  spell_divine_channel_save_life_details:
    spells.divine_channel_save_life_details,
  spell_divine_channel_save_life_expanded:
    spells.divine_channel_save_life_expanded,

  always_max_heal: "завжди максимальне зцілення",
  from_spells: "від заклять",

  spell_divine_channel_learn_tool: spells.divine_channel_learn_tool,
  spell_divine_channel_learn_tool_details:
    spells.divine_channel_learn_tool_details,
  spell_divine_channel_learn_tool_expanded:
    spells.divine_channel_learn_tool_expanded,

  spell_divine_channel_read_thoughts: spells.divine_channel_read_thoughts,
  spell_divine_channel_read_thoughts_details:
    spells.divine_channel_read_thoughts_details,
  spell_divine_channel_read_thoughts_expanded:
    spells.divine_channel_read_thoughts_expanded,

  spell_divine_channel_mirror_image: spells.divine_channel_mirror_image,
  spell_divine_channel_mirror_image_details:
    spells.divine_channel_mirror_image_details,
  spell_divine_channel_mirror_image_details_17:
    spells.divine_channel_mirror_image_details_17,
  spell_divine_channel_mirror_image_expanded:
    spells.divine_channel_mirror_image_expanded,

  spell_divine_channel_cloak_of_shadows: spells.divine_channel_cloak_of_shadows,
  spell_divine_channel_cloak_of_shadows_details:
    spells.divine_channel_cloak_of_shadows_details,
  spell_divine_channel_cloak_of_shadows_expanded:
    spells.divine_channel_cloak_of_shadows_expanded,

  spell_divine_channel_charm_alimal_plant:
    spells.divine_channel_charm_alimal_plant,
  spell_divine_channel_charm_alimal_plant_details:
    spells.divine_channel_charm_alimal_plant_details,
  spell_divine_channel_charm_alimal_plant_details_17:
    spells.divine_channel_charm_alimal_plant_details_17,
  spell_divine_channel_charm_alimal_plant_expanded:
    spells.divine_channel_charm_alimal_plant_expanded,

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
  spell_divine_channel_radiance_dawn_details:
    spells.divine_channel_radiance_dawn_details,
  spell_divine_channel_radiance_dawn_expanded:
    spells.divine_channel_radiance_dawn_expanded,

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
  pact_of_the_tome_details:
    "Ваш покровитель дарує вам гримуар, що зветься «Книга тіней».",

  book_of_shadows: "Книга Тіней",
  book_of_shadows_details:
    "Гримуар, який вам дарував ваш покровитель. У ньому записані 3 ваших чарів. Якщо ви втрачаєте книгу, вам потрібно провести ритуал тривалістю 1 годину, щоб отримати нову від свого покровителя. Ви можете провести цей ритуал під час короткого чи тривалого відпочинку. Попередня книга при цьому знищується. Книга перетворюється у попіл при вашій смерті.",

  pact_of_the_blade: "Клинка",
  pact_of_the_blade_details: "Ваш покровитель дарує вам зброю договору.",

  spell_create_weapon: spells.create_weapon,
  spell_create_weapon_details: spells.create_weapon_details,
  spell_create_weapon_expanded: spells.create_weapon_expanded,

  spell_convert_weapon: spells.convert_weapon,
  spell_convert_weapon_details: spells.convert_weapon_details,
  spell_convert_weapon_expanded: spells.convert_weapon_expanded,

  pact_of_the_chain: "Ланцюга",
  pact_of_the_chain_details:
    "Ваш покровитель дарує вам потойбіччого помічника. Ви можете вибрати одну з особливих форм фаміліара: біс, квазит, псевдодракон або спрайт.",

  spell_find_familiar_warlock: spells.find_familiar_warlock,
  spell_find_familiar_warlock_details: spells.find_familiar_warlock_details,
  spell_find_familiar_warlock_expanded: spells.find_familiar_warlock_expanded,

  pact_of_the_talisman: "Талісману",
  pact_of_the_talisman_details:
    "Ваш покровитель дає вам талісман, який може допомогти вам пройти перевірку здібності.",

  talisman: "Талісман",
  talisman_details:
    "Коли власник провалює перевірку здібності, він може додати до кидка d4, потенційно перетворивши кидок на успіх. Цю перевагу можна використовувати кількість разів, що дорівнює вашому бонусу майстерності, і всі використані використання відновлюються, коли ви закінчуєте тривалий відпочинок. Якщо ви втратите талісман, ви можете провести церемонію тривалістю в годину, щоб отримати заміну від свого покровителя. Цей обряд можна проводити під час короткого чи тривалого відпочинку, і він руйнує попередній амулет. Коли ви вмираєте, талісман перетворюється на попіл.",
  talisman_slots: "Допомога талісмана",
  talisman_slot: "1× Допомога талісмана",

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
  thief_of_five_fates_details:
    "Ви можете один раз створити чари Пристріт, використовуючи чарунку. Ви не можете зробити це повторно, доки не закінчите тривалий відпочинок.",

  //NOTE — зупинився тут

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
  spell_investment_of_the_chain_master_details:
    spells.investment_of_the_chain_master_details,
  spell_investment_of_the_chain_master_expanded:
    spells.investment_of_the_chain_master_expanded,

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

  fiendish_vigor: "Потужність погані",

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

  eldritch_sight: "Погляд чаклуна",

  spell_detect_magic_warlock: spells.detect_magic_warlock,

  misty_visions: "Туманні видіння",

  spell_silent_image_warlock: spells.silent_image_warlock,

  improved_pact_weapon: "Покращена зброя договору",

  arcanum_6: "Арканум [6]",
  arcanum_7: "Арканум [7]",
  arcanum_8: "Арканум [8]",
  arcanum_9: "Арканум [9]",
  arcanum_slots: "Аркануми",
  arcanum_slot_6: "1× Арканум [6]",
  arcanum_slot_7: "1× Арканум [7]",
  arcanum_slot_8: "1× Арканум [8]",
  arcanum_slot_9: "1× Арканум [9]",

  inner_reserve_slots: "Внутрішній резерв",
  inner_reserve_slot: "1× Внутрішній резерв",

  spell_restore_mana_warlock: spells.restore_mana_warlock,
  spell_restore_mana_warlock_details: spells.restore_mana_warlock_details,
  spell_restore_mana_warlock_expanded: spells.restore_mana_warlock_expanded,

  slot_need: "Для відновлення цих слотів потрібно:",
  short_rest: "Короткий відпочинок (від 1 години)",
  long_rest: "Тривалий відпочинок (від 8 годин)",

  short_rest_details:
    "Короткий відпочинок це період довжиною щонайменше 1 годину, під час якого персонаж не робить нічого напруженого крім поглинання їжі, пиття, читання та обробки ран.",

  long_rest_details:
    "Тривалий відпочинок це довгий період тривалістю щонайменше 8 годин, під час якого персонаж як мінімум 6 годин спить, і не більше 2 годин займається легкою діяльністю: читає, розмовляє, їсть та стоїть на варті. Якщо відпочинок переривається напруженою активністю (щонайменше 1 година ходьби, битви, накладення заклинання або інша подібна діяльність), персонажі повинні почати відпочинок спочатку, щоб отримати від нього переваги.<br/><br/>" +
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

  one_choose_every_short_rest:
    "проти одного виду пошкодження (крім магічної та срібної зброї) раз на короткий відпочинок",

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

  monk_weapons:
    "Деякі монастирі використовують особливі види монаської зброї. Наприклад, ви можете використовувати дубинку у вигляді двох дерев'яних брусків, з'єднаних коротким ланцюгом (така зброя називається нунчаками), або серп з більш коротким і прямим лезом (називається камою).",

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

  speed_plus_5: "+5 Швидкість",

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

  chi_slot_2: "2× Чі",

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

  aging_against:
    "проти природного та магічного старіння тіла. Померти від старості все ще можливо",

  plus_4_chi: "+4 слоту Чі",
  on_initiative_throw: "при кидку Ініціативи",

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
  spell_pass_without_trace_monk_expanded:
    spells.pass_without_trace_monk_expanded,

  spell_darkvision_monk: spells.darkvision_monk,
  spell_darkvision_monk_expanded: spells.darkvision_monk_expanded,

  spell_silence_monk: spells.silence_monk,

  spell_silence: spells.silence,
  spell_silence_details: spells.silence_details,
  spell_silence_expanded: spells.silence_expanded,

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

  on_saving_against_your_spells:
    "на Випробування проти ваших заклять з непомітності",

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

  favored_enemy: "ворог",

  aberrations: "аберації",
  beasts: "звірі",
  celestials: "небожителі",
  constructs: "конструкти",
  dragons: "дракони",
  elementals: "єлементалі",
  feys: "фейрі",
  fiends: "погань",
  giants: "велетні",
  monstrosities: "монстри",
  oozes: "слиз",
  plants: "рослини",
  undeads: "невмерлі",
  two_other_races: "дві інші гуманоїдні раси",

  aberrations_details:
    "Абсолютно чужорідні істоти. Багато хто з них має вроджені магічні здібності, проте обумовлені вони їх чужорідним розумом, а не містичними силами світу.",
  beasts_details:
    "Негуманоїдні істоти, що є фауною світу фентезі. Деякі з них мають магічні сили, але більшість нерозумна, не володіє мовами і не має жодного суспільного устрою. Звірі включають все різноманіття тварин, динозаврів і гігантських версій тварин.",
  celestials_details:
    "Істоти з Верхніх Планів. Багато хто з них є слугами божеств, і виконують роль посланців та агентів у світі смертних та інших планах. Небожителі добрі від природи, тому небожитель, що збився зі шляху добра, це неймовірна рідкість. До небожителів відносяться ангели, коатлі та пегаси.",
  constructs_details:
    "Створюються, а не народжуються. Деякі запрограмовані творцем слідувати простому набору інструкцій, інші мають зачатки розуму і здатні до самостійного мислення. Големи — це класичні конструкти. Багато істот родом із зовнішнього плану Механус, такі як модрон, є конструктами, створеними з матерії цього плану волею могутніх істот.",
  dragons_details:
    "Великі рептилійні істоти стародавнього походження і величезної сили. Справжні дракони, у тому числі і добрі металеві дракони, і злі кольорові дракони, дуже розумні і мають вроджену магію. Також до цієї категорії належать істоти, віддалено пов'язані з істинними драконами, менш сильні та не наділені магією, такі як віверні та псевдодракони.",
  elementals_details:
    "Істоти зі стихійних планів. Деякі істоти цього виду є просто живою масою відповідної стихії, у тому числі й істоти, яких називають «елементалями». В інших є біологічні тіла, наповнені стихійною енергією. Раси геніїв, що включають джинів та іфритів, формують найважливіші цивілізації на стихійних планах. До інших стихійних істот можна віднести ейзерів, невидимих мисливців та водних аномалій.",
  feys_details:
    "Магічні істоти, що тісно пов'язані з силами природи. Вони живуть у сутінкових гаях та туманних лісах. У деяких світах вони тісно пов'язані з Країною Фей, яку називають Планом Фей. До фей відносяться дріади, піксі та сатири.",
  fiends_details:
    "Злісні істоти, що мешкають на Нижніх Планах. Деякі з них служить богам, але багато хто в підпорядкуванні у архідияволів і демонічних повелителів. Злі жерці й маги іноді закликають погань у матеріальний світ, щоб ті виконали їхні бажання. Зустріти добру погань практично неможливо. До погані відносяться демони, дияволи, пекельні гончі, ракшаси та юголоти.",
  giants_details:
    "Височать над людьми та подібними до них. Тілом вони схожі на людей, хоча деякі можуть мати потворність або кілька голів. Існує шість різновидів справжніх велетнів: пагорбові, кам'яні, крижані, вогняні, хмарні та штормові. Також до цього виду належать огри та тролі.",
  monstrosities_details:
    "Чудовиська в абсолютному сенсі цього слова. Це страшні потвори, зазвичай з неприродним походженням, і геть-чисто позбавлені милосердя. Деякі — результат магічних експериментів, які пішли не так, як задумано (наприклад, совомеди), інші — породження страшних прокльонів (наприклад, мінотаври чи юань-ти). Будь-яка така істота складно класифікувати, і, певною мірою, це універсальна категорія для істот, які не вписуються в будь-який інший вид.",
  oozes_details:
    "Студенисті істоти, які рідко мають фіксовану форму. Здебільшого, вони живуть у підземеллях чи печерах, харчуючись падаллю чи істотами, які попалися їм на шляху. Чорний слиз і драглисті куби — найвідоміші слизи.",
  plants_details:
    "Рослинні створіння, а не звичайна флора. Більшість з них рухливі, а деякі і м'ясоїдні. Типові рослини — це насипи, що повзають, і тренти. Грибкові істоти, такі як газові спори чи міконіди, також входять до цієї категорії.",
  undeads_details:
    "Колишні живі істоти, які прийняли такий стан чи то через магію некромантії, чи то через безбожне прокляття. До невмерлих відносяться, наприклад, вампіри та зомбі, а також безтільні духи, наприклад, привиди та спектри.",
  two_other_races_details:
    "Гуманоїди – це всі основні народи світу D&D, і цивілізовані та дикі, дуже різноманітні за видами. Вони мають мову і культуру, деякі мають вроджені магічні здібності (хоча більшість гуманоїдів може навчитися накладення заклинань). Вони двоногі. Найбільш поширені гуманоїдні раси доступні гравцеві при створенні персонажа: це гноми, напіврослики, дворфи, люди, напівельфи, ельфи, тифліни, напіворки, драконородні. Майже такі ж численні, але набагато дикіші і жорстокіші, і зліші, це раса ґобліноїдів, орки, гноли, людиноящури і кобольди.",

  wisdom_aberrations_against: "на перевірки Виживання для пошуку аберрацій",
  wisdom_beasts_against: "на перевірки Виживання для пошуку звірів",
  wisdom_celestials_against: "на перевірки Виживання для пошуку небожителів",
  wisdom_constructs_against: "на перевірки Виживання для пошуку конструктів",
  wisdom_dragons_against: "на перевірки Виживання для пошуку драконів",
  wisdom_elementals_against: "на перевірки Виживання для пошуку елементалів",
  wisdom_feys_against: "на перевірки Виживання для пошуку фей",
  wisdom_fiends_against: "на перевірки Виживання для пошуку погані",
  wisdom_giants_against: "на перевірки Виживання для пошуку велетнів",
  wisdom_monstrosities_against: "на перевірки Виживання для пошуку монстрів",
  wisdom_oozes_against: "на перевірки Виживання для пошуку слизу",
  wisdom_plants_against: "на перевірки Виживання для пошуку рослин",
  wisdom_undeads_against: "на перевірки Виживання для пошуку невмерлих",
  wisdom_two_other_races_against:
    "на перевірки Виживання для пошуку рас-ворогів",

  intelligence_aberrations_against:
    "на перевірки Інтелекту, пов'язані з аберраціями",
  intelligence_beasts_against: "на перевірки Інтелекту, пов'язані з звірями",
  intelligence_celestials_against:
    "на перевірки Інтелекту, пов'язані з небожителями",
  intelligence_constructs_against:
    "на перевірки Інтелекту, пов'язані з конструктами",
  intelligence_dragons_against: "на перевірки Інтелекту, пов'язані з драконами",
  intelligence_elementals_against:
    "на перевірки Інтелекту, пов'язані з елементалями",
  intelligence_feys_against: "на перевірки Інтелекту, пов'язані з феями",
  intelligence_fiends_against:
    "на перевірки Інтелекту, пов'язані з поганню",
  intelligence_giants_against: "на перевірки Інтелекту, пов'язані з велетнями",
  intelligence_monstrosities_against:
    "на перевірки Інтелекту, пов'язані з монстрами",
  intelligence_oozes_against: "на перевірки Інтелекту, пов'язані з слизом",
  intelligence_plants_against: "на перевірки Інтелекту, пов'язані з рослинами",
  intelligence_undeads_against:
    "на перевірки Інтелекту, пов'язані з невмерлими",
  intelligence_two_other_races_against:
    "на перевірки Інтелекту, пов'язані з расами-ворогами",

  favored_enemy_details:
    "У вас є значний досвід вивчення, відстеження, полювання і навіть спілкування з певним видом ворогів (аберації, велетні, дракони, звірі, погань, конструкти, монстри, небожителі, невмерлі, рослини, слиз, феї або елементалі. В якості альтернативи ви можете вибрати як обраних ворогів дві гуманоїдні раси — наприклад, гноллів і орків). Ви здійснюєте з перевагою перевірки Виживання для відстеження вибраних ворогів, а також перевірки Інтелекту для згадування інформації про них. Ви також навчаєтесь однією з мов, якою говорить ваш обраний ворог, якщо він взагалі вміє говорити. Ви додатково вибираєте по одному обраному ворогові на 6 та 14 рівнях.",

  lang_deep: langs.deep,
  lang_deep_details: langs.deep_details,

  favor: "фавор",

  ranger: classes.ranger,
  ranger_details: classes.ranger_details,

  hunter: classes.hunter,
  hunter_details: classes.hunter_details,

  beastmaster: classes.beastmaster,
  beastmaster_details: classes.beastmaster_details,

  favored_foe_slots: "обрання противника",
  favored_foe_slot: "1× обрання противника",

  favored_foe: "пошук противника",
  favored_foe_details:
    "Ви здатні визначити заклятого противника прямо в бою. Коли ви потрапляєте атакою по істоті, ви можете закликати сили природи, щоб відмітити істоту і зробити її заклятим противником.",

  natural_explorer: "дослідник природи",
  natural_explorer_details:
    "Ви дуже добре знайомі з одним видом природного середовища і маєте великий досвід подорожей та виживання в регіонах з таким кліматом – тундра, болота, гори, ліси, луки, узбережжя, підзем'я чи пустеля.",

  favored_terrain: "місцевість",

  arctic: "тундра",
  coast: "узбережжя",
  desert: "пустеля",
  forest_terrain: "ліси",
  grassland: "луги",
  mountain_terrain: "гори",
  swamp: "болота",
  underdark: "підземʼя",

  intelligence_wisdom_arctic:
    "на перевірки Інтелекту або Мудрості, пов'язані з тундрою",
  intelligence_wisdom_coast:
    "на перевірки Інтелекту або Мудрості, пов'язані з узбережжям",
  intelligence_wisdom_desert:
    "на перевірки Інтелекту або Мудрості, пов'язані з пустелею",
  intelligence_wisdom_forest:
    "на перевірки Інтелекту або Мудрості, пов'язані з лісом",
  intelligence_wisdom_grassland:
    "на перевірки Інтелекту або Мудрості, пов'язані з лугами",
  intelligence_wisdom_mountain:
    "на перевірки Інтелекту або Мудрості, пов'язані з горами",
  intelligence_wisdom_swamp:
    "на перевірки Інтелекту або Мудрості, пов'язані з болотами",
  intelligence_wisdom_underdark:
    "на перевірки Інтелекту або Мудрості, пов'язані з підземʼям",

  travel_arctic: "переваги у тундрі",
  travel_coast: "переваги на узбережжі",
  travel_desert: "переваги у пустелі",
  travel_forest: "переваги у лісі",
  travel_grassland: "переваги в лугах",
  travel_mountain: "переваги в горах",
  travel_swamp: "переваги в болотах",
  travel_underdark: "переваги в підземʼї",

  terrain_advantages:
    "— Прохідність, пильність, 2× здобич, читання слідів, скритність наодинці",

  deft_explorer: "майстерний дослідник",
  deft_explorer_details:
    "Ви — неперевершений дослідник і виживальник, здатний як самостійно мандрувати дикою місцевістю, так і допомагати з цим іншим.",

  climbing_and_swimming: "лазіння та плавання",

  tireless_slots: "невтомність",
  tireless_slot: "1× невтомність",

  exhaust_rediction: "зниження виснаження",
  in_short_rest: "при короткому відпочинку",

  spell_favored_foe: spells.favored_foe,
  spell_favored_foe_details: spells.favored_foe_details,
  spell_favored_foe_expanded: spells.favored_foe_expanded,

  spell_tireless: spells.tireless,
  spell_tireless_details: spells.tireless_details,
  spell_tireless_expanded: spells.tireless_expanded,

  spell_primeval_awareness: spells.primeval_awareness,
  spell_primeval_awareness_favored: spells.primeval_awareness_favored,
  spell_primeval_awareness_details: spells.primeval_awareness_details,
  spell_primeval_awareness_expanded: spells.primeval_awareness_expanded,

  spell_speak_with_animals_ranger: spells.speak_with_animals_ranger,
  spell_speak_with_animals_ranger_details:
    spells.speak_with_animals_ranger_details,
  spell_speak_with_animals_ranger_expanded:
    spells.speak_with_animals_ranger_expanded,

  spell_beast_sense_ranger: spells.beast_sense_ranger,
  spell_beast_sense_ranger_details: spells.beast_sense_ranger_details,
  spell_beast_sense_ranger_expanded: spells.beast_sense_ranger_expanded,

  spell_commune_with_nature_ranger: spells.commune_with_nature_ranger,
  spell_commune_with_nature_ranger_details:
    spells.commune_with_nature_ranger_details,
  spell_commune_with_nature_ranger_expanded:
    spells.commune_with_nature_ranger_expanded,

  primal_sense: "інстинкт",

  spell_extra_attack: spells.extra_attack,
  spell_extra_attack_details: spells.extra_attack_details,
  spell_extra_attack_expanded: spells.extra_attack_expanded,

  disguise: "маскування",

  disguise_dirt: "сировина",

  disguise_nature_slots: "природна завіса",
  disguise_nature_slot: "1× природна завіса",

  spell_disguise_on_sight: spells.disguise_on_sight,
  spell_disguise_on_sight_details: spells.disguise_on_sight_details,
  spell_disguise_on_sight_expanded: spells.disguise_on_sight_expanded,

  spell_disguise_nature: spells.disguise_nature,
  spell_disguise_nature_details: spells.disguise_nature_details,
  spell_disguise_nature_expanded: spells.disguise_nature_expanded,

  spell_disappearance: spells.disappearance,
  spell_disappearance_details: spells.disappearance_details,
  spell_disappearance_expanded: spells.disappearance_expanded,

  on_attacking_invisible: "на атаки по невидимих істотах",

  of_all_invisible_30: "про всі невидимі істоти у 30ф від вас",

  spell_enemy_killer: spells.enemy_killer,
  spell_enemy_killer_details: spells.enemy_killer_details,
  spell_enemy_killer_expanded: spells.enemy_killer_expanded,

  prey: "здобич",

  spell_giant_killer: spells.giant_killer,
  spell_giant_killer_details: spells.giant_killer_details,
  spell_giant_killer_expanded: spells.giant_killer_expanded,

  on_provoked_attacks: "на провоковані атаки по вас",

  plus_4_armor: "+4 Броні",
  on_next_attacks:
    "при влучанні по вас, проти усіх наступних атак цієї істоти до кінця ходу",

  multiattack: "мультиатака",

  spell_whirlwind_attack: spells.whirlwind_attack,
  spell_whirlwind_attack_details: spells.whirlwind_attack_details,
  spell_whirlwind_attack_expanded: spells.whirlwind_attack_expanded,

  spell_volley: spells.volley,
  spell_volley_details: spells.volley_details,
  spell_volley_expanded: spells.volley_expanded,

  spell_stand_against_the_tide: spells.stand_against_the_tide,
  spell_stand_against_the_tide_details: spells.stand_against_the_tide_details,
  spell_stand_against_the_tide_expanded: spells.stand_against_the_tide_expanded,

  companion: "супутник",

  forever: "назавжди",

  spell_rangers_companion: spells.rangers_companion,
  spell_rangers_companion_details: spells.rangers_companion_details,
  spell_rangers_companion_details_7: spells.rangers_companion_details_7,
  spell_rangers_companion_details_11: spells.rangers_companion_details_11,
  spell_rangers_companion_details_15: spells.rangers_companion_details_15,
  spell_rangers_companion_expanded: spells.rangers_companion_expanded,

  spell_primal_companion: spells.primal_companion,
  spell_primal_companion_details: spells.primal_companion_details,
  spell_primal_companion_details_7: spells.primal_companion_details_7,
  spell_primal_companion_details_11: spells.primal_companion_details_11,
  spell_primal_companion_details_15: spells.primal_companion_details_15,
  spell_primal_companion_expanded: spells.primal_companion_expanded,

  sorcerer: classes.sorcerer,
  sorcerer_details: classes.sorcerer_details,

  sorcerer_dragon_blood: classes.sorcerer_dragon_blood,
  sorcerer_dragon_blood_details: classes.sorcerer_dragon_blood_details,

  sorcerer_wild_magic: classes.sorcerer_wild_magic,
  sorcerer_wild_magic_details: classes.sorcerer_wild_magic_details,

  sorcery_slots: "Чародійства",
  sorcery_slot: "1× Чародійство",
  sorcery_slot_1_plus: "1+ × Чародійство",
  sorcery_slot_2: "2× Чародійство",
  sorcery_slot_2_plus: "2+ × Чародійство",
  sorcery_slot_3: "3× Чародійство",
  sorcery_slot_5: "5× Чародійство",

  spell_sorcery_to_mana: spells.sorcery_to_mana,
  spell_sorcery_to_mana_details: spells.sorcery_to_mana_details,
  spell_sorcery_to_mana_expanded: spells.sorcery_to_mana_expanded,

  spell_mana_to_sorcery: spells.mana_to_sorcery,
  spell_mana_to_sorcery_details: spells.mana_to_sorcery_details,
  spell_mana_to_sorcery_expanded: spells.mana_to_sorcery_expanded,

  metamagic: "метамагія",

  spell: "чари",

  dices: "куби",

  of_damage: "пошкодження",

  spell_metamagic_careful: spells.metamagic_careful,
  spell_metamagic_careful_details: spells.metamagic_careful_details,
  spell_metamagic_careful_expanded: spells.metamagic_careful_expanded,

  spell_metamagic_distant: spells.metamagic_distant,
  spell_metamagic_distant_details: spells.metamagic_distant_details,
  spell_metamagic_distant_expanded: spells.metamagic_distant_expanded,

  spell_metamagic_empowered: spells.metamagic_empowered,
  spell_metamagic_empowered_details: spells.metamagic_empowered_details,
  spell_metamagic_empowered_expanded: spells.metamagic_empowered_expanded,

  spell_metamagic_extended: spells.metamagic_extended,
  spell_metamagic_extended_details: spells.metamagic_extended_details,
  spell_metamagic_extended_expanded: spells.metamagic_extended_expanded,

  spell_metamagic_heightened: spells.metamagic_heightened,
  spell_metamagic_heightened_details: spells.metamagic_heightened_details,
  spell_metamagic_heightened_expanded: spells.metamagic_heightened_expanded,

  spell_metamagic_quickened: spells.metamagic_quickened,
  spell_metamagic_quickened_details: spells.metamagic_quickened_details,
  spell_metamagic_quickened_expanded: spells.metamagic_quickened_expanded,

  spell_metamagic_subtle: spells.metamagic_subtle,
  spell_metamagic_subtle_details: spells.metamagic_subtle_details,
  spell_metamagic_subtle_expanded: spells.metamagic_subtle_expanded,

  spell_metamagic_transmuted: spells.metamagic_transmuted,
  spell_metamagic_transmuted_details: spells.metamagic_transmuted_details,
  spell_metamagic_transmuted_expanded: spells.metamagic_transmuted_expanded,

  spell_metamagic_twinned: spells.metamagic_twinned,
  spell_metamagic_twinned_details: spells.metamagic_twinned_details,
  spell_metamagic_twinned_expanded: spells.metamagic_twinned_expanded,

  spell_metamagic_seeking: spells.metamagic_seeking,
  spell_metamagic_seeking_details: spells.metamagic_seeking_details,
  spell_metamagic_seeking_expanded: spells.metamagic_seeking_expanded,

  spell_magical_direction: spells.magical_direction,
  spell_magical_direction_details: spells.magical_direction_details,
  spell_magical_direction_expanded: spells.magical_direction_expanded,

  to_restore_4_sorcery_points: "на відновлення 4× Чародійства",

  plus_3_armor: "— +3 до Броні (застосовано)",

  dragon_ancestor: "предок",

  to_charisma_dragon: "на перевірки Харизми, повʼязані з драконами",

  spell_elemental_affinity_fire: spells.elemental_affinity_fire,
  spell_elemental_affinity_fire_details: spells.elemental_affinity_fire_details,
  spell_elemental_affinity_fire_expanded:
    spells.elemental_affinity_fire_expanded,

  spell_elemental_affinity_cold: spells.elemental_affinity_cold,
  spell_elemental_affinity_cold_details: spells.elemental_affinity_cold_details,
  spell_elemental_affinity_cold_expanded:
    spells.elemental_affinity_cold_expanded,

  spell_elemental_affinity_electricity: spells.elemental_affinity_electricity,
  spell_elemental_affinity_electricity_details:
    spells.elemental_affinity_electricity_details,
  spell_elemental_affinity_electricity_expanded:
    spells.elemental_affinity_electricity_expanded,

  spell_elemental_affinity_acid: spells.elemental_affinity_acid,
  spell_elemental_affinity_acid_details: spells.elemental_affinity_acid_details,
  spell_elemental_affinity_acid_expanded:
    spells.elemental_affinity_acid_expanded,

  spell_elemental_affinity_poison: spells.elemental_affinity_poison,
  spell_elemental_affinity_poison_details:
    spells.elemental_affinity_poison_details,
  spell_elemental_affinity_poison_expanded:
    spells.elemental_affinity_poison_expanded,

  spell_dragon_resistanse_fire: spells.dragon_resistanse_fire,
  spell_dragon_resistanse_fire_details: spells.dragon_resistanse_fire_details,
  spell_dragon_resistanse_fire_expanded: spells.dragon_resistanse_fire_expanded,

  spell_dragon_resistanse_cold: spells.dragon_resistanse_cold,
  spell_dragon_resistanse_cold_details: spells.dragon_resistanse_cold_details,
  spell_dragon_resistanse_cold_expanded: spells.dragon_resistanse_cold_expanded,

  spell_dragon_resistanse_electricity: spells.dragon_resistanse_electricity,
  spell_dragon_resistanse_electricity_details:
    spells.dragon_resistanse_electricity_details,
  spell_dragon_resistanse_electricity_expanded:
    spells.dragon_resistanse_electricity_expanded,

  spell_dragon_resistanse_acid: spells.dragon_resistanse_acid,
  spell_dragon_resistanse_acid_details: spells.dragon_resistanse_acid_details,
  spell_dragon_resistanse_acid_expanded: spells.dragon_resistanse_acid_expanded,

  spell_dragon_resistanse_poison: spells.dragon_resistanse_poison,
  spell_dragon_resistanse_poison_details:
    spells.dragon_resistanse_poison_details,
  spell_dragon_resistanse_poison_expanded:
    spells.dragon_resistanse_poison_expanded,

  spell_dragon_wings: spells.dragon_wings,
  spell_dragon_wings_details: spells.dragon_wings_details,
  spell_dragon_wings_expanded: spells.dragon_wings_expanded,

  spell_dragon_presence: spells.dragon_presence,
  spell_dragon_presence_details: spells.dragon_presence_details,
  spell_dragon_presence_expanded: spells.dragon_presence_expanded,

  random_magic_effect: "випадковий магічний ефект",
  on_casting_spell_mana_and_used_chaos:
    "При створенні заклять, що потребують чарунки, коли слот Потоків Хаосу використаний | коли випала 1 на влучання.",

  wild_magic_surge_slots: "Потоки Хаосу",
  wild_magic_surge_slot: "1× Потік Хаосу",

  spell_wild_magic_surge: spells.wild_magic_surge,
  spell_wild_magic_surge_details: spells.wild_magic_surge_details,
  spell_wild_magic_surge_expanded: spells.wild_magic_surge_expanded,

  on_random_magic_effect: "на випадковий магічний ефект",

  spell_bend_luck: spells.bend_luck,
  spell_bend_luck_details: spells.bend_luck_details,
  spell_bend_luck_expanded: spells.bend_luck_expanded,

  on_max_dice_result_in_spell:
    "при максимальному значенні одного з кубів пошкодження чарів",

  spell_countercharm: spells.countercharm,
  spell_countercharm_details: spells.countercharm_details,
  spell_countercharm_expanded: spells.countercharm_expanded,

  magic_mistery: "магічні секрети",

  plus_1_insptiration: "+1 Натхнення",
  on_initiative_and_0_inspiration:
    "перед початком бою, якщо слотів Натхнення не залишилося",

  spell_peerless_skill: spells.peerless_skill,
  spell_peerless_skill_details: spells.peerless_skill_details,
  spell_peerless_skill_expanded: spells.peerless_skill_expanded,

  spell_extra_attack_fighter: spells.extra_attack_fighter,
  spell_extra_attack_fighter_details: spells.extra_attack_fighter_details,
  spell_extra_attack_fighter_details_11: spells.extra_attack_fighter_details_11,
  spell_extra_attack_fighter_details_20: spells.extra_attack_fighter_details_20,
  spell_extra_attack_fighter_expanded: spells.extra_attack_fighter_expanded,

  indomity_slots: "Витримка",
  indomity_slot: "1× Витримка",

  spell_indomity: spells.indomity,
  spell_indomity_details: spells.indomity_details,
  spell_indomity_expanded: spells.indomity_expanded,

  plus_1_maneuver: "+1 Маневр",
  on_initiative_and_0_maneuver:
    "перед початком бою, якщо Маневрів не залишилося",

  spell_know_your_enemy: spells.know_your_enemy,
  spell_know_your_enemy_details: spells.know_your_enemy_details,
  spell_know_your_enemy_expanded: spells.know_your_enemy_expanded,

  on_spell_saving_after_hit:
    "на наступне Випробування істоти проти ваших чарів, при влучанні по ній атакою",

  spell_bonus_attack_fighter: spells.bonus_attack_fighter,
  spell_bonus_attack_fighter_details: spells.bonus_attack_fighter_details,
  spell_bonus_attack_fighter_details_18: spells.bonus_attack_fighter_details_18,
  spell_bonus_attack_fighter_expanded: spells.bonus_attack_fighter_expanded,

  spell_bonus_attack: spells.bonus_attack,
  spell_bonus_attack_details: spells.bonus_attack_details,
  spell_bonus_attack_expanded: spells.bonus_attack_expanded,

  spell_arcane_charge: spells.arcane_charge,
  spell_arcane_charge_details: spells.arcane_charge_details,
  spell_arcane_charge_expanded: spells.arcane_charge_expanded,

  proficiency_bonus_half: "+ 0.5× Майстерності",
  on_mastery_str_dex_con_checks:
    "до всіх перевірок Сили, Спритності і Статури, куди Бонус Досвіду ще не додано",

  on_mastery_checks:
    "до всіх перевірок здібностей, куди Бонус Досвіду ще не додано (застосовано)",

  on_dice_18: "ще й при 18",

  spell_survivor: spells.survivor,
  spell_survivor_details: spells.survivor_details,
  spell_survivor_expanded: spells.survivor_expanded,

  spell_aura_of_protection: spells.aura_of_protection,
  spell_aura_of_protection_details: spells.aura_of_protection_details,
  spell_aura_of_protection_expanded: spells.aura_of_protection_expanded,

  spell_aura_of_courage: spells.aura_of_courage,
  spell_aura_of_courage_details: spells.aura_of_courage_details,
  spell_aura_of_courage_expanded: spells.aura_of_courage_expanded,

  spell_paladin_divine_smite_free: spells.paladin_divine_smite_free,
  spell_paladin_divine_smite_free_details:
    spells.paladin_divine_smite_free_details,
  spell_paladin_divine_smite_free_expanded:
    spells.paladin_divine_smite_free_expanded,

  cleansing_touch_slots: "Чисті дотики",
  cleansing_touch_slot: "1× Чистий дотик",

  spell_cleansing_touch: spells.cleansing_touch,
  spell_cleansing_touch_details: spells.cleansing_touch_details,
  spell_cleansing_touch_expanded: spells.cleansing_touch_expanded,

  spell_aura_of_devotion: spells.aura_of_devotion,
  spell_aura_of_devotion_details: spells.aura_of_devotion_details,
  spell_aura_of_devotion_expanded: spells.aura_of_devotion_expanded,

  spell_protection_from_evil_and_good_paladin:
    spells.protection_from_evil_and_good_paladin,
  spell_protection_from_evil_and_good_paladin_details:
    spells.protection_from_evil_and_good_paladin_details,
  spell_protection_from_evil_and_good_paladin_expanded:
    spells.protection_from_evil_and_good_paladin_expanded,

  spell_holy_nimbus: spells.holy_nimbus,
  spell_holy_nimbus_details: spells.holy_nimbus_details,
  spell_holy_nimbus_expanded: spells.holy_nimbus_expanded,

  spell_aura_of_warding: spells.aura_of_warding,
  spell_aura_of_warding_details: spells.aura_of_warding_details,
  spell_aura_of_warding_expanded: spells.aura_of_warding_expanded,

  holy_nimbus_slots: "Святий німб",
  holy_nimbus_slot: "1× Святий німб",

  undying_sentinel_slots: "Витривалість",
  undying_sentinel_slot: "1× Витривалість",

  spell_undying_sentinel: spells.undying_sentinel,
  spell_undying_sentinel_details: spells.undying_sentinel_details,
  spell_undying_sentinel_expanded: spells.undying_sentinel_expanded,

  elder_champion_slots: "Древній чемпіон",
  elder_champion_slot: "1× Древній чемпіон",

  spell_elder_champion: spells.elder_champion,
  spell_elder_champion_details: spells.elder_champion_details,
  spell_elder_champion_expanded: spells.elder_champion_expanded,

  spell_relentless_avenger: spells.relentless_avenger,
  spell_relentless_avenger_details: spells.relentless_avenger_details,
  spell_relentless_avenger_expanded: spells.relentless_avenger_expanded,

  spell_soul_of_vengeance: spells.soul_of_vengeance,
  spell_soul_of_vengeance_details: spells.soul_of_vengeance_details,
  spell_soul_of_vengeance_expanded: spells.soul_of_vengeance_expanded,

  of_flight: "польоту",

  avenging_angel_slots: "Ангел помсти",
  avenging_angel_slot: "1× Ангел помсти",

  spell_avenging_angel: spells.avenging_angel,
  spell_avenging_angel_details: spells.avenging_angel_details,
  spell_avenging_angel_expanded: spells.avenging_angel_expanded,

  spell_athletic_jump: spells.athletic_jump,
  spell_athletic_jump_details: spells.athletic_jump_details,
  spell_athletic_jump_expanded: spells.athletic_jump_expanded,

  berserker: classes.berserker,
  berserker_details: classes.berserker_details,

  practices: "практики",

  spell_form_river: spells.form_river,
  spell_form_river_details: spells.form_river_details,
  spell_form_river_expanded: spells.form_river_expanded,

  choice: "вибір",
  from: "з",

  spell_inspired_attack: spells.inspired_attack,
  spell_inspired_attack_details: spells.inspired_attack_details,
  spell_inspired_attack_expanded: spells.inspired_attack_expanded,

  spell_warding_flare: spells.warding_flare,
  spell_warding_flare_details: spells.warding_flare_details,
  spell_warding_flare_details_6: spells.warding_flare_details_6,
  spell_warding_flare_expanded: spells.warding_flare_expanded,

  circle_of_the_land: classes.circle_of_the_land,
  circle_of_the_land_details: classes.circle_of_the_land_details,

  totem_aspect: classes.totem_aspect,
  totem_aspect_details: classes.totem_aspect_details,

  spell_beast_sense_ritual: spells.beast_sense_ritual,
  spell_beast_sense_ritual_details: spells.beast_sense_ritual_details,
  spell_beast_sense_ritual_expanded: spells.beast_sense_ritual_expanded,

  entropic_ward_slots: "Ентропічний догляд",
  entropic_ward_slot: "1× Ентропічний догляд",

  magical_protection_slots: "Магічний захист",
  magical_protection_slot: "1× Магічний захист",

  tool: "інструмент",

  fan_gift: "подарунок фана",
  fan_gift_details: "любовний лист, пасмо волосся або дрібничка",

  map_urchin: "мапа рідного міста",
  map_urchin_details: "",

  pet_mouse: "ручна миша",
  pet_mouse_details: "",

  clothes: "звичайний одяг",
  clothes_details:
    "Комплект одягу, що призначений для повсякденного носіння. Комплект включає в себе холшовую сорочку, штани, черевики або плетене з лози взуття.",

  // NOTE — передісторіяи

  back_entertainer: "артист",
  back_entertainer_details:
    "Вам подобається виступати на публіці. Ви знаєте, як розважити, зачарувати і навіть надихнути. Ваша поезія може торкатися сердець слухачів, пробуджувати в них горе чи радість, сміх чи гнів. Ваша музика підбадьорює або змушує журитися. Ваші танці / трюки / бої на арені захоплюють, а жарти завжди смішні. Чим би ви не займалися, ваше життя тісно пов'язане з мистецтвом.",
  back_entertainer_expanded:
    "<br/>Успішні артисти можуть заволодіти увагою публіки, тому вони мають яскравий чи наполегливий характер. Вони можуть бути романтичними, і в мистецтві та красі часто звертаються до піднесених ідеалів. Гладіатор — такий же артист як менестрель або циркач, навчений перетворювати бій на мистецтво, від якого тріумфують натовпи. Амплуа гладіатора є яскраві битви, хоча ви можете бути при цьому акробатом чи актором.",

  free_bnb: "Безкоштовний дах та їжа",
  for_daily_performance: "і хороше ставлення сторонніх, за щоденні виступи",

  back_urchin: "безпритульний",
  back_urchin_details:
    "Ви виросли на вулиці в бідності та самоті, позбавлені батьків. Ніхто не доглядав і не дбав про вас, і вам довелося навчитися робити це самому. Вам доводилося постійно боротися за їжу та стежити за іншими неприкаяними душами, здатними обікрасти вас. Ви спали на горищах і в провулках, мокли під дощем і боролися із хворобами, не отримуючи медичної допомоги чи притулку. Ви вижили, незважаючи на всі труднощі, і зробили це завдяки своїй вправності, силі чи швидкості.",
  back_urchin_expanded:
    "<br/>Життя у злиднях залишає свій відбиток на безпритульних. У них, як правило, сильна прихильність до людей, з якими вони ділили тяготи вуличного життя, або вони сповнені бажанням досягти кращої долі, і, можливо, розквитатися з багатіями, яких вони натерпілися." +
    "<br/><br/>Ви починаєте пригоду із сумою грошей, достатньою, щоб скромно, але впевнено прожити десять днів. Як ви одержали ці гроші? Що дозволило вам перейти до нормального життя, подолавши злидні?",

  for_team_in_city: "поза боєм в містах, для вас та супроводжуючих союзників",

  back_noble: "благородний",
  back_noble_details:
    "Ви знаєте, що таке багатство, влада та привілеї. У вас благородний титул, а ваша сім'я володіє землями, збирає податки, і має серйозний політичний вплив.",

  back_noble_expanded:
    "<br/>Ви можете бути зніженим аристократом, не знайомим з роботою і незручностями, колишнім торговцем, який тільки-но отримав титул, або позбавленим спадщини негідником з гіпертрофованим почуттям власного права. Або ж ви можете бути чесним, працьовитим землевласником, який щиро піклується про тих, хто живе і працює на його землі, відчуваючи за них відповідальність. Або ж лицарем — нижчим з благородних, але це все одно маючим шлях у вищий світ." +
    "<br/><br/>Благородні народжуються і зростають у особливому оточенні, та його особистість несе відбиток цього виховання. Благородний титул іде разом із безліччю зобовʼязань — відповідальністю перед сімʼєю, іншими благородними (включаючи короля), народом, довіреним вашій родині, і навіть перед самим титулом. Всі ці інші зобовʼязання можуть використовувати проти вас.", // TODO - decide on expanded
    // "<br/><br/>Придумайте належний титул та визначте, яку владу цей титул дає. Шляхетний титул не існує сам по собі — він повʼязаний з усією вашою родиною, і який би титулом ви не мали, ви передасте його своїм дітям. Вам потрібно не тільки визначити титул, але також описати вашу родину та її вплив на вас. Ваша родина стара і уславлена, чи вона заснована нещодавно? Який вплив вона має, і в якій галузі? Яка репутація вашої родини серед інших місцевих аристократів? Як до вас ставляться люди? Яке місце ви займаєте у своїй сімʼї? Чи є спадкоємцем глави сімейства? Чи перейшов до вас титул? Як ви ставитеся до цієї відповідальності? Чи ви такі далекі від отримання спадщини, що всім байдуже, чим ви там займаєтеся, аби не на шкоду сімʼї? Як голова вашого сімейства ставиться до карʼєри шукача пригод? Ви в милості, чи родичі цураються вас? Чи має ваша сімʼя герб? Чи є у вас обручка з печаткою? Може, ви одягнені у особливі кольори? Чи є тварина, яка вважається символом вашого родоводу чи духовним наставником? Такі деталі допоможуть сформувати образ вашої родини в контексті миру та кампанії.",

  legacy: "спадщина",

  nobelty: "привілейованість",

  acceptance: "прийняття",
  among_nobelty_and_good_treatment:
    "у вищому суспільстві, більшість дверей для вас відчинені",

  servants: "слуги",

  three_servants: "три помічника",
  three_servants_details: "що виконують за вас просту та безпечну роботу",

  back_guild_artisan: "Гільдієць",
  back_guild_artisan_details:
    "Ви — член гільдії ремісників, купців, караванників або крамарів, знавець у якійсь галузі, пов'язаний з іншими майстровими. Ви міцно стоїте на ногах у цьому торговому світі, відокремлені своїм талантом і багатством від кайданів феодального ладу.",
  back_guild_artisan_expanded:
    "<br/>Колись ви вчилися у майстра під опікою гільдії, і ось ви самі стали таким умільцем. Або ви самі ви нічого не майструєте, але заробляєте на життя, купуючи і продаючи твори чужих рук (або сировину, необхідну ремісникам)." +
    "<br/><br/>Ваша гільдія може бути великим торговим синдикатом (або сімейством) з капіталовкладеннями по всьому регіону. Можливо, ви перевозите товари з одного місця в інше, на кораблі, у фургоні чи каравані, або купуєте їх у бродячих торговців і продаєте у своєму маленькому магазинчику. Якоюсь мірою життя мандрівного торговця ближче до пригод, ніж життя ремісника. Замість володіння ремісничим інструментом ви можете опанувати інструменти навігатора." +
    "<br/><br/>Гільдійські ремісники мало чим відрізняються від простолюду, доки вони не відкладають свої інструменти убік і не починають карʼєру шукача пригод. Вони розуміють цінність важкої праці та важливість спільності, але вони так само як інші схильні до гріхів жадібності.",

  from_guildmates: "від товарищів по гільдії",

  help_in_prison: "допомога з виходом з увʼязнення",

  gold_5_month: "зм 5 золотих монет у місяць",

  to_guild_fund: "до фонду гільдії",

  back_sailor: "моряк",
  back_sailor_details:
    "Ви багато років плавали на морському судні. Ви бачили могутні шторми, глибоководних чудовиськ та тих, хто хотів відправити вас на дно. Перше кохання залишилося далеко за горизонтом, і настав час спробувати щось нове.",
  back_sailor_expanded:
    "<br/>Моряки бувають грубими, але на їхніх плечах лежить тягар відповідальності за збереження життя екіпажу, тому на них можна покластися. Життя, проведене на кораблі, формує їхні погляди та найважливіші звички." +
    "<br/><br/>Вирішіть, на якому кораблі ви раніше плавали. Це було торгове, пасажирське, дослідницьке чи піратське судно? Наскільки воно прославилося (у хорошому чи поганому сенсі)? Чи багато ви подорожували? Воно все ще на плаву, потоплено чи втрачено? Ким ви були на борту — боцманом, капітаном, лоцманом, коком чи кимось іншим? Ким були капітан та його перший помічник? Ви розлучилися з екіпажем у добрих стосунках чи посварилися з ними?",

  free_ride: "умовно-безкоштовна поїздка",
  on_water_transport: "морським транспортом, для себе та супутників",

  back_sage: "мудрець",
  back_sage_details:
    "Ви провели багато років, осягаючи таємниці мультивсесвіту. Ви читали рукописи, вивчали сувої, і спілкувалися з найбільшими експертами в темах, що вас цікавлять. Все це зробило вас знавцем у своїй галузі.",
  back_sage_expanded:
    "<br/>Мудрецями стають після тривалих занять, і їх особистість відображає життя у постійному навчанні. Будучи в постійному пошуку мудрості, вони високо цінують знання як для себе, так і в прагненні до ідеалів.",

  of_every_clue: "де знайти інформацію про будь що",

  back_folk_hero: "народний герой",
  back_folk_hero_details:
    "У вас був низький соціальний стан, але долею було обіцяно більше. Жителі вашого рідного села вже вважають вас своїм героєм, але вам призначено битися з тиранами та чудовиськами, що загрожують іншим.",
  back_folk_hero_expanded:
    "<br/>Народний герой — один із простолюдинів, як у хорошому розумінні, так і в поганому. Багато хто з них вважає своє походження позитивною стороною, а не вадою, і їхнє рідне поселення залишається назавжди дуже важливим для них.",

  free_help_and_shelter: "допомога та укриття",
  from_commoners: "з боку простолюдинів",

  back_hermit: "відлюдник",
  back_hermit_details:
    "Ви значну частину свого життя прожили на самотності — або в закритій громаді, як монастир, або взагалі на самоті. Вдалині від галасливого суспільства ви знайшли тишу, спокій, а можливо, і відповіді на важливі питання.",
  back_hermit_expanded:
    "<br/>Тихе та довге усамітнення дало вам доступ до великого одкровення. Точна природа цього одкровення залежить від вашого усамітнення. Це може бути істина про всесвіт, божества, впливові створіння на зовнішніх планах, або силах природи. Це може бути місце, яке ніхто ніколи не бачив. Ви могли знайти щось, що давно було забуте, або знайти реліквію минулого, здатну переписати історію. Це може бути інформація, яка може завдати шкоди тим, хто вигнав вас, і тим самим стала причиною повернення в суспільство." +
    "<br/><br/>Деяким відлюдникам комфортно живеться на самоті, а інші прагнуть повернутися до суспільства. Хоч би як ви ставилися до самотності, таке життя вплинуло на вашу життєву позицію та ідеали. Деякі навіть божеволіють від довгих років далеко від суспільства.",

  of_some_mystery: "якоїсь таємниці",

  back_criminal: "злочинець",
  back_criminal_details:
    "Ви оберталися у злочинних колах, і досі маєте зв'язки із підпільним світом. Ви близько познайомилися з вбивствами, крадійством і жорстокістю, що просочують нижчі верстви суспільства. Ви навчилися виживати, нехтуючи правилами та обмеженнями, яким підкоряються інші.",
  back_criminal_expanded:
    "<br/>Злочинці на перший погляд можуть виглядати лиходіями, і багато хто з них справді злий. Але в деяких є такі риси, за які їх можна пробачити. Навіть серед злодіїв є честь, але злочинці рідко ставляться з повагою до влади та їх представників.",

  connector: "звʼязний",
  with_criminals: "у кримінальних колах",

  back_acolyte: "послідовник",
  back_acolyte_details:
    "Ви провели своє життя або його частину, служачи в храмі, присвяченому якомусь конкретному богу або пантеону богів.",
  back_acolyte_expanded:
    "<br/>Ви посередник між царством небесним і миром живих. Ви робили священні ритуали і приносили жертви для того, щоб молящі могли постати перед лицем богів. Ви не обовʼязково клірик — здійснення священних обрядів не те саме, що напрямок божественної сили." +
    "<br/><br/>Послідовники вивчають історію та догмати своєї віри, і на їхні звички та ідеали впливає їхнє ставлення до храмів, святинь та ієрархій. Їх слабкістю може бути лицемірство чи єретична ідея, або ідеал чи прихильність, зведена до гротеску." +
    "<br/><br/>Виберіть божество, пантеон богів або напівбожественну істоту і продумайте природу вашого релігійного служіння." +
    "<br/><br/>Ви були молодшим служником у храмі, який з дитинства допомагає священикам? Чи ви верховний жрець, який отримав бачення, як можна послужити своєму богові? Можливо, ви є лідером невеликого культу, який не має свого храму, або навіть представником окультних сил, який служив жахливому повелителю, але зрікся його.",

  in_holy_places: "у храмах вашої віри, для себе та супутників",

  back_soldier: "солдат",
  back_soldier_details:
    "З молодості ви проходили тренування, вчилися використовувати зброю та обладунки, вивчали техніку виживання, включаючи те, як залишатися живим на полі бою. Ви могли бути частиною армії країни чи загону найманців, а може, були місцевим ополченцем під час війни.",
  back_soldier_expanded:
    "<br/>Скільки памʼятаєте, у вашому житті завжди була війна. Жахи війни разом із жорсткою дисципліною військової служби залишають сліди усім солдатам, формуючи їх ідеали, створюючи прихильності, і навіть залишаючи ними шрами, як фізичні, і ментальні." +
    "<br/><br/>Визначте, в якій військовій організації ви перебували, до якого звання ви дослужилися і що вам за цей час довелося пережити. Що це було, регулярна армія, міська варта або сільське ополчення? Це могла бути приватна армія найманців дворянина чи самостійний бродячий загін найманців.",

  respect: "повага",
  to_your_war_position: "до вашого військового звання, з усіма наслідками",

  back_outlander: "чужинець",
  back_outlander_details:
    "Дика природа у вашій крові, будь ви кочівником, дослідником, самітником, мисливцем-збирачем або навіть мародером. Навіть у невідомому місці ви знайдете щось, що вам зрозуміло.",
  back_outlander_expanded:
    "<br/>Ви виросли в глушині, далеко від цивілізації та її благ. Ви бачили міграцію стад, чий розмір був більший за ліс, виживали при температурі, яку городянам і не уявити, і насолоджувалися таким усамітненням, що на багато миль навколо ви були єдиною розумною істотою." +
    "<br/><br/>Часто вважаються цивілізованими народами грубими і необтесаними, чужинці не спокушаються життям у місті. Узи племені, клану, сімʼї та належне місце у природі — ось найважливіші уподобання чужинців.",

  able_to_remember: "запамʼятовування",
  of_maps_and_terrains: "мап та місцевості",

  able_to_find: "здатність знайти",
  food_and_water: "їжу та воду в придатній місцевості",

  back_charlatan: "шарлатан",
  back_charlatan_details:
    "Ви добре знаєте людей, розумієте, що ними рухає, і можете розпізнати їх найпотаємніші бажання всього через кілька хвилин після початку розмови. Це корисний талант, і ви цілком готові використати його собі на благо.",
  back_charlatan_expanded:
    "<br/>Ви знаєте, що люди хочуть, і ви даєте їм це, або обіцяєте дати. Почуття здорового глузду має змушувати людей триматися подалі від тих речей, які надто добре звучать, щоб бути правдою. Але здоровий глузд кудись випаровується, коли ви неподалік." +
    "<br/><br/>Пляшечка з рожевою рідиною неодмінно вилікує цей жахливий висип, а ця чудодійна мазь (не більше ніж жменя жиру, змішаного зі срібним пилом) безперечно поверне молодість і енергійність. Всі ці дива, звичайно, звучать неправдоподібно, але ви знаєте, як піднести їх так, щоб вони здавалися вкрай вигідною пропозицією." +
    "<br/><br/>Шарлатани — яскраві персонажі, що ховаються за створеними масками. Вони є відображенням того, що інші хочуть бачити, у що інші вірять і як інші бачать світ. Їхню справжню натуру може мучити совість, постійна недовіра, і їм може загрожувати ворог.",

  second_identity: "підроблена особа",
  with_all_docs: "з документами та знайомствами",

  able_to_falsificate: "здатність підробляти",
  docs_and_letters: "документи та листи",

  back_spy: "шпигун",
  back_spy_details:
    "Незважаючи на те, що ваші здібності не надто відрізняються від здібностей зломщика або контрабандиста, ви навчилися застосовувати їх в іншому ключі: як спеціаліст зі шпигунства.",
  back_spy_expanded:
    "<br/>Цілком можливо, що ви офіційно уповноважений агент корони, або ж ви просто продаєте добуті відомості тому, хто більше заплатить.",

  stamp_ring: "кільце-печатка",
  stamp_ring_details: "",

  scroll_lifeline: "сувій з родоводом",
  scroll_lifeline_details: "",

  tool_playing_dragon_chess: "драконові шахи",

  tool_playing_dice: "гральні кубики",

  tool_playing_dragon_poker: "драконовий покер",

  guild_letter: "гільдійська рекомендація",
  guild_letter_details: "",

  travelers_clothes: "дорожній одяг",
  travelers_clothes_details:
    "Комплект одягу призначений для мандрівок. До нього входить сорочка, шкіряні чоботи, штани, рукавички, плащ із капюшоном.",

  tools_alchemists_supplies: "Інструменти алхіміка",
  tools_alchemists_supplies_details: "",

  tools_blacksmith: "Інструменти коваля",
  tools_blacksmith_details: "",

  tools_brewer: "Інструменти пивовара",
  tools_brewer_details: "",

  tools_potters_tools: "Інструменти гончара",
  tools_potters_tools_details: "",

  tools_carpenters_tools: "Інструменти тесляра",
  tools_carpenters_tools_details: "",

  tools_calligraphers_supplies: "Інструменти каліграфа",
  tools_calligraphers_supplies_details: "",

  tools_cartographers_tools: "Інструменти картографа",
  tools_cartographers_tools_details: "",

  tools_navigators_tools: "Інструменти навігатора",
  tools_navigators_tools_details: "",

  tools_cobblers_tools: "Інструменти чоботаря",
  tools_cobblers_tools_details: "",

  tools_cooks_tools: "Інструменти кухаря",
  tools_cooks_tools_details: "",

  tools_glassblowers_tools: "Інструменти склодува",
  tools_glassblowers_tools_details: "",

  tools_jewelers_tools: "Інструменти ювеліра",
  tools_jewelers_tools_details: "",

  tools_leatherworkers_tools: "Інструменти шкіряника",
  tools_leatherworkers_tools_details: "",

  tools_mason: "Інструменти муляра",
  tools_mason_details: "",

  tools_painters_supplies: "Інструменти художника",
  tools_painters_supplies_details: "",

  tools_tinkers_tools: "Інструменти бляхаря",
  tools_tinkers_tools_details: "",

  tools_weavers_tools: "Інструменти кравця",
  tools_weavers_tools_details: "",

  tools_woodcarvers_tools: "Інструменти різьбяра по дереву",
  tools_woodcarvers_tools_details: "",

  tool_transport_water: "водний транспорт",

  silk_rope: "мотузка 50ф",
  silk_rope_details:
    "зроблена з шовку. Вона має 2 здоровʼя, і її можна порвати Випробуванням Сили складністю 17.",

  talisman_sailor: "талісман",
  talisman_sailor_details: "кроляча лапка або камінь з діркою",

  letter_question: "лист із питанням",
  letter_question_details:
    "лист від мертвого колеги з питанням, на яке ви поки що не можете відповісти",

  tool_transport_ground: "наземний транспорт",

  shovel: "лопата",

  tools_herbalists_tools: "набір травника",
  tools_herbalists_tools_details: "",

  medal: "орден",
  medal_details: "відзнака",

  trophey: "трофей з ворога",
  trophey_details:
    "трофей з убитого ворога (кинджал, зламаний клинок або шматок прапора)",

  staff: "посох",
  staff_details:
    "Особливий посох — створений для проведення таємних заклять. Маги, чаклуни та заклиначі можуть використовувати ці предмети як фокусування для заклинань",

  trophey_animal: "трофей з тварини",
  trophey_animal_details: "трофей з убитої тварини",

  hunting_trap: "капкан",
  hunting_trap_details:
    "Якщо ви Основною дією встановите цю пастку, вона утворює сталеве кільце із зазубреними краями, яка захлопується, коли в її центр настає істота. Капкан прив'язується товстим ланцюгом до нерухомого предмета, такого як дерево або кілочок, убитий у землю. Істота, що наступила в центр, повинна досягти успіху у Випробуванні Спритності зі Складністю 13, інакше вона отримує колоте пошкодження 1d4 і припиняє переміщення. Згодом, доки істота не вивільниться з пастки, її переміщення обмежені довжиною ланцюга (зазвичай 1 метр). Будь-яка істота може здійснити перевірку Сили зі Складністю 13, щоб звільнити себе або іншу істоту, яка знаходиться в межах досяжності. Кожна провалена перевірка завдає спійманій суті колоте пошкодження 1.",

  tool_forgery: "фальсифікації",

  trick_set: "шарлатанський предмет",
  trick_set_details:
    "пристрій для шахрайства на ваш вибір (десять запечатаних пляшок з підфарбованою рідиною, набір шулерських кубиків, колода краплених карт або кільце з печаткою якогось уявного герцога)",

  androginsexual: "Андрогінсексуал",
  androginsexual_details:
    "ваш персонаж має тяжіння до істот з яскраво вираженими чоловічими та жіночими рисами одночасно.",
  pansexual: "Пансексуал",
  pansexual_details:
    "ваш персонаж має тяжіння до істот незалежно від гендера.\n\n",
  polysexual: "Полісексуал",
  polysexual_details: "ваш персонаж має тяжіння до декількох гендерів.\n\n",
  androsexual: "Андросексуал",
  androsexual_details:
    "ваш персонаж має тяжіння до істот з яскраво вираженими чоловічими рисами.",
  bisexual: "Бісексуал",
  bisexual_details: "ваш персонаж має тяжіння до чоловіків та жінок.\n\n",
  ginsexual: "Гіносексуал",
  ginsexual_details:
    "ваш персонаж має тяжіння до істот з яскраво вираженими жіночими рисами.",
  heterosexual: "Гетеросексуал",
  heterosexual_details: "ваш персонаж має тяжіння до протилежного гендеру.\n\n",
  homosexual: "Гомосексуал",
  homosexual_details: "ваш персонаж має тяжіння до свого ж гендеру.\n\n",
  sapiosexual: "Сапіосексуал",
  sapiosexual_details:
    "ваш персонаж має тяжіння до інтелекту, незалежно від гендера.",
  skoliosexual: "Сколіосексуал",
  skoliosexual_details: "ваш персонаж має тяжіння до не-цисгендерів.\n\n",
  asexual: "Асексуал",
  asexual_details: "ваш персонаж не відчуває тяжіння.\n\n",
  autosexual: "Автосексуал",
  autosexual_details: "ваш персонаж має тяжіння тільки до себе.\n\n",
  other_sexual: "Інше",
  other_sexual_details:
    "розкрийте деталі пізніше в Передісторії вашого персонажа.\n\n",

  protection_from_multiattack: "захист від мультиатаки",
  run_from_horde: "Побіг від орди",
  steel_will: "Сталева воля",

  evasiveness: "увертливість",
  primal_knowledge: "Первинна обізнаність",
  true_sense: "Споконвічне чуття",
  exploration: "дослідження",

  two_simple_weapons: "Дві прості зброї",

  shortsword_2: weapons.shortsword + " × 2",

  pact_item: "пакт",

  scholars_pack: "Набір вченого",
  scholars_pack_details: " ",

  diplomats_pack: "Набір дипломата",
  diplomats_pack_details: " ",

  entertainers_pack: "Набір артиста",
  entertainers_pack_details: " ",

  armor_full: "повна",

  spell_horde_breaker: spells.horde_breaker,
  spell_horde_breaker_details: spells.horde_breaker_details,
  spell_horde_breaker_expanded: spells.horde_breaker_expanded,

  spell_colossus_slayer: spells.colossus_slayer,
  spell_colossus_slayer_details: spells.colossus_slayer_details,
  spell_colossus_slayer_expanded: spells.colossus_slayer_expanded,

  red_dragonborn_sorcerer: "червоний дракон",
  brass_dragonborn_sorcerer: "латунний дракон",
  golden_dragonborn_sorcerer: "золотий дракон",
  silver_dragonborn_sorcerer: "срібний дракон",
  white_dragonborn_sorcerer: "білий дракон",
  blue_dragonborn_sorcerer: "синій дракон",
  bronze_dragonborn_sorcerer: "бронзовий дракон",
  copper_dragonborn_sorcerer: "мідний дракон",
  black_dragonborn_sorcerer: "чорний дракон",
  green_dragonborn_sorcerer: "зелений дракон",

  main_feature: "головна риса",

  feature_taler: "оповідач",
  feature_gossip: "пліткар",
  feature_flatterer: "підлесник",
  feature_witty: "дотепник",
  feature_boastful: "хвалько",
  feature_sarcastic: "саркастичний",
  feature_vulgar: "пошляк",
  feature_obscene: "вульгарний",
  feature_toxic: "токсичний",
  feature_coldblooded: "холоднокровний",
  feature_schemer: "махінатор",
  feature_conspirator: "конспіролог",
  feature_fatalist: "фаталіст",
  feature_philosopher: "філософ",
  feature_erudite: "ерудит",
  feature_wise: "мудрий",
  feature_industrious: "працьовитий",
  feature_thoughtful: "задумливий",
  feature_silent: "мовчазний",
  feature_closed: "закритий",
  feature_unsociable: "нелюдимий",
  feature_injured: "травмований",
  feature_anxious: "тривожний",
  feature_incredulous: "недовірливий",
  feature_vindictive: "злопам'ятний",
  feature_vengeful: "мстивий",
  feature_irascible: "запальний",
  feature_harmful: "шкодний",
  feature_cunning: "хитрий",
  feature_approach: "підступний", // підступний
  feature_cruel: "жорстокий",
  feature_pitiless: "безжальний",
  feature_rectilinear: "прямий",
  feature_rude: "грубий",
  feature_high: "зарозумілий",
  feature_haughty: "гордовитий",
  feature_snob: "сноб",
  feature_perfectionist: "перфекціоніст",
  feature_neat: "чистюля",
  feature_polite: "ввічливий",
  feature_peaceful: "миролюбний",
  feature_generous: "щедрий",
  feature_compassionate: "жалісний",
  feature_inquisitive: "допитливий",
  feature_curious: "зацікавлений",
  feature_serene: "безтурботний",
  feature_clumsy: "незграбний",
  feature_careless: "недбалий",
  feature_fickle: "мінливий",
  feature_active: "активний",
  feature_stubborn: "упертий",
  feature_braver: "завзятий", // завзятий
  feature_competitive: "змагальний",
  feature_brave: "хоробрий",
  feature_adventurer: "авантюрист",
  feature_rebel: "бунтар",

  ideals: "ідеал",
  // ІДЕАЛИ

  ideal_justice: "справедливість",
  ideal_equality: "рівність",
  ideal_independence: "незалежність",
  ideal_liberty: "свобода",
  ideal_freedom: "воля",
  ideal_respect: "повага",
  ideal_society: "суспільство",
  ideal_thrive: "процвітання",
  ideal_development: "розвиток",
  ideal_knowledge: "знання",
  ideal_logics: "логіка",
  ideal_truth: "правда",
  ideal_creativity: "творчість",
  ideal_beauty: "краса",
  ideal_nature: "природа",
  ideal_harmony: "лагода",
  ideal_family: "родина",
  ideal_friendship: "дружба",
  ideal_team: "команда",
  ideal_homeland: "батківщина",
  ideal_altruism: "альтруїзм",
  ideal_mercy: "милосердя",
  ideal_destiry: "доля",
  ideal_faith: "віра",
  ideal_traditions: "традиції",
  ideal_order: "порядок",
  ideal_duty: "обовʼязок",
  ideal_honor: "гідність",
  ideal_revenge: "помста",
  ideal_strength: "сила",
  ideal_authority: "авторитет",
  ideal_power: "влада",
  ideal_glory: "слава",
  ideal_career: "кар'єра",
  ideal_melancholy: "вигода",

  commitment: "привʼязаність",
  // ПРИБУТКОВІ

  attachment_tool: "інструмент",
  attachment_talisman: "талісман",
  attachment_thing: "памʼятна річ",
  attachment_pet: "тваринка",
  attachment_vehicle: "транспорт",
  attachment_corner: "майстерня",
  attachment_childhood: "дитинство",
  attachment_school: "школа",
  attachment_offender: "кривдник",
  attachment_loss: "втрата",
  attachment_savior: "рятівник",
  attachment_leader: "лідер",
  attachment_mentor: "наставник",
  attachment_legacy: "спадщина",
  attachment_child: "дитина",
  attachment_family: "родина",
  attachment_home: "будинок",
  attachment_bonds: "зв'язки",
  attachment_friends: "друзі",
  attachment_team: "команда",
  attachment_organization: "організація",
  attachment_homeland: "батьківщина",
  attachment_nature: "природа",
  attachment_love: "кохання",
  attachment_gift: "подарунок",
  attachment_fans: "шанувальники",
  attachment_students: "учні",
  attachment_product: "плід праці",
  attachment_title: "титул",
  attachment_mistery: "загадка",
  attachment_idol: "кумир",
  attachment_artifact: "артефакт",
  attachment_structure: "сакральна споруда",

  secret: "секрет",
  // Секрети
  secret_mistake: "жахлива помилка", // "жахлива помилка",
  secret_setup: "підстава",
  secret_crime: "злочин",
  secret_trait: "зрада",
  secret_owe: "борг",
  secret_shame: "ганьба",
  secret_exile: "вигнання",
  secret_follower: "переслідувач",
  secret_sick: "хвороба",
  secret_pact: "рокова угода",
  secret_target: "замовлення",
  secret_plans: "підступні плани",
  secret_prophesy: "пророцтво",

  weakness: "слабкість",
  // СЛАБОСТІ
  weakness_greed: "жадібність",
  weakness_cleptomany: "клептоманія",
  weakness_pride: "гординя",
  weakness_passion: "азарт",
  weakness_laziness: "лінь",
  weakness_lust: "блуд",
  weakness_audacity: "зухвалість",
  weakness_unreliability: "ненадійність",
  weakness_fobia: "фобія",
  weakness_cowardice: "боягузтво",
  weakness_wrath: "гнів",
  weakness_envy: "заздрість",
  weakness_submissiveness: "покірність",
  weakness_dependance: "залежність",
  weakness_spender: "марнотратство",
  weakness_belief: "довірливість",
  weakness_carelessness: "необачність",
  weakness_recklessness: "нерозсудливість",
  weakness_obsession: "одержимість",
  weakness_uncompromise: "безкомпромісність",
  weakness_poormemory: "забудькуватість",

  pack: "набір",

  speed_plus_15: "+15 Швидкість",

  spell_quick_dash: spells.quick_dash,
  spell_quick_dash_details: spells.quick_dash_details,
  spell_quick_dash_expanded: spells.quick_dash_expanded,

  spell_safe_movement: spells.safe_movement,
  spell_safe_movement_details: spells.safe_movement_details,
  spell_safe_movement_expanded: spells.safe_movement_expanded,

  spell_swap: spells.swap,
  spell_swap_details: spells.swap_details,
  spell_swap_expanded: spells.swap_expanded,

  movement_slots: "Телепорт",
  movement_slot: "1× Телепорт",

  on_concentration_damage: "на порушення концентрації чарів Зʼявлення пошкодженням",

  hp_30: "+30 тимчасового здоровʼя",
  on_conjuration_creatures: "у всіх істот, що створені чарами Зʼявлення",

  spell_transform_illusion: spells.transform_illusion,
  spell_transform_illusion_details: spells.transform_illusion_details,
  spell_transform_illusion_expanded: spells.transform_illusion_expanded,

  spell_self_illusion: spells.self_illusion,
  spell_self_illusion_details: spells.self_illusion_details,
  spell_self_illusion_expanded: spells.self_illusion_expanded,

  self_illusion_slots: "Ілюзорність",
  self_illusion_slot: "1× Ілюзорність",

  spell_illusory_reality: spells.illusory_reality,
  spell_illusory_reality_details: spells.illusory_reality_details,
  spell_illusory_reality_expanded: spells.illusory_reality_expanded,

  on_necrotic_damage: "до 💀 Некротичного пошкодження",

  on_hp_reduction: "проти зменшення максимального здоровʼя",

  spell_control_undead: spells.control_undead,
  spell_control_undead_details: spells.control_undead_details,
  spell_control_undead_expanded: spells.control_undead_expanded,

  on_check_abjuration: "до перевірки здібності при створенні чарів Перешкоджання",

  on_saving_spells: "на Випробування від заклять",

  on_damage_spells: "до пошкодження від заклять",

  instinct_charm_slots: "Інстинкт",
  instinct_charm_slot: "1× Інстинкт (при провалі)",

  spell_instinct_charm: spells.instinct_charm,
  spell_instinct_charm_details: spells.instinct_charm_details,
  spell_instinct_charm_expanded: spells.instinct_charm_expanded,

  spell_powerful_charm: spells.powerful_charm,
  spell_powerful_charm_details: spells.powerful_charm_details,
  spell_powerful_charm_expanded: spells.powerful_charm_expanded,

  spell_false_memories: spells.false_memories,
  spell_false_memories_details: spells.false_memories_details,
  spell_false_memories_expanded: spells.false_memories_expanded,

  spell_erase_memories: spells.erase_memories,
  spell_erase_memories_details: spells.erase_memories_details,
  spell_erase_memories_expanded: spells.erase_memories_expanded,

  if_no_heavy_armor_on_rage: "якшо не в важких обладунках та при Люті",

  spell_transmutation_stone: spells.transmutation_stone,
  spell_transmutation_stone_details: spells.transmutation_stone_details,
  spell_transmutation_stone_expanded: spells.transmutation_stone_expanded,

  spell_big_transformation: spells.big_transformation,
  spell_big_transformation_details: spells.big_transformation_details,
  spell_big_transformation_expanded: spells.big_transformation_expanded,

  younging: "змолодження",

  spell_return_youth: spells.return_youth,
  spell_return_youth_details: spells.return_youth_details,
  spell_return_youth_expanded: spells.return_youth_expanded,

  spell_panacea: spells.panacea,
  spell_panacea_details: spells.panacea_details,
  spell_panacea_expanded: spells.panacea_expanded, 
  
  genius_slots: "Геній",
  genius_slot: "1× Геній",

  spell_divination_expert: spells.divination_expert,
  spell_divination_expert_details: spells.divination_expert_details,
  spell_divination_expert_expanded: spells.divination_expert_expanded, 

  spell_third_eye: spells.third_eye,
  spell_third_eye_details: spells.third_eye_details,
  spell_third_eye_expanded: spells.third_eye_expanded, 

  third_eye_slots: "Третє око",
  third_eye_slot: "1× Третє око",

  // ------------------------------------------------------------------

  principal_altruistic: "Законно добрий", 
  principal_altruistic_details: 
  "Альтруїстичний ідеаліст. "+
  "Вірить, що інші заслуговують на те, щоб до них добре ставилися. "+
  "Вірить, що йому відомий ідеал, якого всім, включаючи його, треба прагнути. ",

  principal_neutral: "Законно нейтральний", 
  principal_neutral_details: 
  "Ідеаліст. "+
  "Дотримується принципу «ти мені - я тобі». "+
  "Вірить, що йому відомий ідеал, якого всім, включаючи його, треба прагнути. ",

  principal_egoistic: "Законно злий", 
  principal_egoistic_details: 
  "єгоистичньій ідеаліст. "+
  "Вважає, що оточуючі нічим не кращі за нього самого. "+
  "Вірить, що йому відомий ідеал, якого всім, включаючи його, треба прагнути. ",

  // ------------------------------------------------------------------
  
  fluid_altruistic: "Нейтрально добрий",
  fluid_altruistic_details: 
  "Альтруїст. "+
  "Вірить, що інші заслуговують на те, щоб до них добре ставилися. "+
  "Не надто цікавиться ідеалізацією будь-чого. ",
  
  fluid_neutral: "Нейтральний",
  fluid_neutral_details: 
  "Оппортуніст. "+
  "Дотримується принципу «ти мені - я тобі». "+
  "Не надто цікавиться ідеалізацією будь-чого. ",
  
  fluid_egoistic: "Нейтрально злий",
  fluid_egoistic_details: 
  "єгоїст. "+
  "Вважає, що оточуючі нічим не кращі за нього самого. "+
  "Не надто цікавиться ідеалізацією будь-чого. ",

  // ------------------------------------------------------------------
  
  unprincipal_altruistic: "Хаотично добрий",
  unprincipal_altruistic_details: 
  "Альтруїстичний цинік. "+
  "Вірить, що інші заслуговують на те, щоб до них добре ставилися. "+
  "Вважає ідеали не більш ніж порожнім звуком та намаганням пустити пил у вічі. ",
  
  unprincipal_neutral: "Хаотично нейтральний",
  unprincipal_neutral_details: 
  "Цинік. "+
  "Дотримується принципу «ти мені - я тобі». "+
  "Вважає ідеали не більш ніж порожнім звуком та намаганням пустити пил у вічі. ",
  
  unprincipal_egoistic: "Хаотично злий",
  unprincipal_egoistic_details: 
  "єгоїстичий цинік. "+
  "Вважає, що оточуючі нічим не кращі за нього самого. "+
  "Вважає ідеали не більш ніж порожнім звуком та намаганням пустити пил у вічі. ",

  // ------------------------------------------------------------------

  beast_speech: "Тваринна мова",
  
  luck: "вдача",
  luck_slots: "вдача",
  luck_slot: "1× Вдача",

  spell_rogue_luck: spells.rogue_luck,
  spell_rogue_luck_details: spells.rogue_luck_details,
  spell_rogue_luck_expanded: spells.rogue_luck_expanded, 

  download_charsheet: "скачати аркуш персонажа",

  on_size_jupms:"для стрибків у довжину і висоту",

  feat_savage_attacker:"Дикий нападник",
  feat_savage_attacker_details:"Ви завдаєте більше пошкодження ближньою зброєю.",

  feat_brawler:"Забіяка",
  feat_brawler_details:"Ви звикли до мордобою з використанням підручних предметів.",

  no_fee:"Немає штрафу",

  damage_increase: "Збільшення пошкодження",
  of_unarmed_strike: "від беззбройного удару (застосовано)",

  perception_passive: "пасивне сприйняття",
  insight_passive: "пасивна інутіція",
  investigation_passive: "пасивне розслідування",

  feat_resilient: "Стійкий",
  feat_resilient_details: "Ви сфокусувались на одній з ваших здібностей. Її базове значення збільшується на 1, і ви отримуєте +майстерність до Випробування цієї здібності.",

  feat_magic_initiate: "Посвячений у магію",
  feat_magic_initiate_details: "Ви знаєте двоє чарів вибраного класа, що не потребують чарунки, і одне заклинання, що коштує 1 чарунку (його ви можете використовувати без чарунки, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками).",

  spell_cleric: "магія клірика",
  spell_druid: "магія друїда",
  spell_warlock: "магія чаклуна",
  spell_sorcerer: "магія заклинача",
  spell_wizard: "магія мага",
  spell_bard: "магія барда",

  spell_cleric1: "1× магія клірика",
  spell_druid1: "1× магія друїда",
  spell_warlock1: "1× магія чаклуна",
  spell_sorcerer1: "1× магія заклинача",
  spell_wizard1: "1× магія мага",
  spell_bard1: "1× магія барда",

  feat_skilled: "Обдарований",
  feat_skilled_details: "Ви отримуєте володіння будь-якою комбінацією із трьох навичок або інструментів на ваш вибір.",

  feat_ritual_caster: "Ритуальний чаклун",
  feat_ritual_caster_details:
    "Ви дізнаєтесь два ритуали вибраного класа. Ви зможете використовувати їх без чарунки, але накладати його на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. Також ви можете вивчати інші знайдені ритуальні чари вибраного класа.",

    spell_shield_block: spells.shield_block,
  spell_shield_block_details: spells.shield_block_details,
  spell_shield_block_expanded: spells.shield_block_expanded,

  feat: "Риса",

  hellish_rebuke_tiefling_slots: "пекельна помста",
  hellish_rebuke_tiefling_slot: "1× Пекельна помста",

  darkness_tiefling_slots: "темрява",
  darkness_tiefling_slot: "1× Темрява",

  enlargement_self_slots: "Збільшення",
  enlargement_self_slot: "1× Збільшення",

  invisibility_self_slots: "невидимість",
  invisibility_self_slot: "1× Невидимість",

  magic_class: "клас магії",
  
  condition_strength_13plus: "Умова: Базова Сила = 13+.",
  condition_dexterity_13plus: "Умова: Базова Спритність = 13+.",
  condition_intelligence_or_wisdom_13plus: "Умова: Базовий Інтелект або Мудрість = 13+.",
  condition_charisma_13plus: "Умова: Базова Харизма = 13+.",
  condition_proficiency_armor_medium: "Умова: Володіння середніми обладунками.",
  condition_proficiency_armor_heavy: "Умова: Володіння важкими обладунками.",
  condition_spellcasting: "Умова: Здатність накладати чари.",
  
  spell_aura_of_vitality: spells.aura_of_vitality,
  spell_aura_of_vitality_details: spells.aura_of_vitality_details,
  spell_aura_of_vitality_expanded: spells.aura_of_vitality_expanded,

  spell_aura_of_life: spells.aura_of_life,
  spell_aura_of_life_details: spells.aura_of_life_details,
  spell_aura_of_life_expanded: spells.aura_of_life_expanded,

  vision_true: "істинний зір",
  material_mushroom_cream_25_gold: "мазь з грибного порошка за 25 зм",

  spell_true_seeing: spells.true_seeing,
  spell_true_seeing_details: spells.true_seeing_details,
  spell_true_seeing_expanded: spells.true_seeing_expanded,

  material_mini_platinum_sword_250_gold: "мініатюрний платиновий меч за 250 зм",

  spell_mordenkainens_sword: spells.mordenkainens_sword,
  spell_mordenkainens_sword_details: spells.mordenkainens_sword_details,
  spell_mordenkainens_sword_expanded: spells.mordenkainens_sword_expanded,

  spell_glibness: spells.glibness,
  spell_glibness_details: spells.glibness_details,
  spell_glibness_expanded: spells.glibness_expanded,

  spell_power_word_kill: spells.power_word_kill,
  spell_power_word_kill_details: spells.power_word_kill_details,
  spell_power_word_kill_expanded: spells.power_word_kill_expanded,

  hint_over_limit: "Цей атрибут вже застосований/максимізований раніше,\nі не буде доданий знову.",

  lucky_slots: "везіння",
  lucky_slot: "1× везіння",

  spell_luck_feat: spells.luck_feat,
  spell_luck_feat_details: spells.luck_feat_details,
  spell_luck_feat_expanded: spells.luck_feat_expanded,

  player: "гравець",
  playing_dragon_chess: "Драконові шахи",
  playing_dragon_poker: "Драконовий покер",
  playing_dice: "Гральні куби",

  iron_pot: "Залізний горщик",
  iron_pot_details: "Місткість: 1 галон (3,75 л)",

  condition_spell_eldritch_blast: "Умова: Чари Містичний заряд",

  spell_extra_attack_warlock: spells.extra_attack_warlock,
  spell_extra_attack_warlock_details: spells.extra_attack_warlock_details,
  spell_extra_attack_warlock_expanded: spells.extra_attack_warlock_expanded,

  thirsting_blade: "Спраглий клинок",

  sign_of_ill_omen: "Мітка лихого передвістя",

  bestow_curse_slots: "прокльон",
  bestow_curse_slot: "1× прокльон",

  spell_dissapear: spells.dissapear,
  spell_dissapear_details: spells.dissapear_details,
  spell_dissapear_expanded: spells.dissapear_expanded,

  mire_the_mind: "Трясовина розуму",

  slow_slots: "уповільнення",
  slow_slot: "1× уповільнення",

  one_with_shadows: "Єдиний з тінню",
  bewitching_whispers: "Заворожуючий шепіт",
  sculptor_of_flesh: "Скульптор плоті",
  dreadful_word: "Жахаюче слово",
  ascendant_step: "Крок вгору",
  whispers_of_the_grave: "Шепіт могили",
  overworldly_leap: "Потойбічне стрибання",
  minions_of_chaos: "Підлеглі Хаоса",
  lifedrinker: "Випивач життя",

  spell_lifedrinker: spells.lifedrinker,
  spell_lifedrinker_details: spells.lifedrinker_details,
  spell_lifedrinker_expanded: spells.lifedrinker_expanded,

  witch_sight: "Відьомський зір",
  illusion_shifters_30f: "істинний вигляд ілюзій та перекиднів у 30ф від вас",

  visions_of_distant_realms:"Видіння далеких королівств",
  master_of_myriad_forms: "Майстер незліченних виглядів",
  chains_of_carceri: "Ланцюги Карцері",

  polymorph_slots: "Поліморф",
  polymorph_slot: "1× Поліморф",

  material_giacint_1000gold: "гіацинт за 1000+ зм",
  material_silver_bar_100gold: "брусок срібла з орнаментом за 100+ зм",

  spell_astral_projection: spells.astral_projection,
  spell_astral_projection_details: spells.astral_projection_details,
  spell_astral_projection_expanded: spells.astral_projection_expanded,

  chi_slot_8: "8× Чі",

  spell_astral_projection_monk: spells.astral_projection_monk,
  spell_astral_projection_monk_details: spells.astral_projection_monk_details,
  spell_astral_projection_monk_expanded: spells.astral_projection_monk_expanded,

  spell_fly: spells.fly,
  spell_fly_details: spells.fly_details,
  spell_fly_expanded: spells.fly_expanded,

  spell_fly_monk: spells.fly_monk,
  spell_fly_monk_details: spells.fly_monk_details,
  spell_fly_monk_expanded: spells.fly_monk_expanded,

  spell_fireball: spells.fireball,
  spell_fireball_details: spells.fireball_details,
  spell_fireball_expanded: spells.fireball_expanded,

  spell_fireball_monk: spells.fireball_monk,
  spell_fireball_details_5: spells.fireball_details_5,
  spell_fireball_details_9: spells.fireball_details_9,
  spell_fireball_details_13: spells.fireball_details_13,
  spell_fireball_details_17: spells.fireball_details_17,
  spell_fireball_monk_expanded: spells.fireball_monk_expanded,

  spell_gaseous_form: spells.gaseous_form,
  spell_gaseous_form_details: spells.gaseous_form_details,
  spell_gaseous_form_expanded: spells.gaseous_form_expanded,

  spell_gaseous_form_monk: spells.gaseous_form_monk,
  spell_gaseous_form_monk_details: spells.gaseous_form_monk_details,
  spell_gaseous_form_monk_expanded: spells.gaseous_form_monk_expanded,

  chi_slot_6: "6× Чі",
  chi_slot_5: "5× Чі",

  spell_cone_of_cold: spells.cone_of_cold,
  spell_cone_of_cold_details: spells.cone_of_cold_details,
  spell_cone_of_cold_expanded: spells.cone_of_cold_expanded,

  spell_cone_of_cold_monk: spells.cone_of_cold_monk,
  spell_cone_of_cold_monk_details: spells.cone_of_cold_monk_details,
  spell_cone_of_cold_monk_details_5: spells.cone_of_cold_monk_details_5,
  spell_cone_of_cold_monk_details_9: spells.cone_of_cold_monk_details_9,
  spell_cone_of_cold_monk_details_13: spells.cone_of_cold_monk_details_13,
  spell_cone_of_cold_monk_details_17: spells.cone_of_cold_monk_details_17,
  spell_cone_of_cold_monk_expanded: spells.cone_of_cold_monk_expanded,

  spell_wall_of_stone: spells.wall_of_stone,
  spell_wall_of_stone_monk: spells.wall_of_stone_monk,
  spell_wall_of_stone_details: spells.wall_of_stone_details,
  spell_wall_of_stone_expanded: spells.wall_of_stone_expanded,

  material_diamont_dust_100gold: "діамантовий пил за 100+ зм (витрачається)",

  spell_stoneskin: spells.stoneskin,
  spell_stoneskin_details: spells.stoneskin_details,
  spell_stoneskin_expanded: spells.stoneskin_expanded,

  spell_stoneskin_monk: spells.stoneskin_monk,
  spell_stoneskin_monk_details: spells.stoneskin_monk_details,
  spell_stoneskin_monk_expanded: spells.stoneskin_monk_expanded,

  spell_wall_of_fire: spells.wall_of_fire,
  spell_wall_of_fire_details: spells.wall_of_fire_details,
  spell_wall_of_fire_expanded: spells.wall_of_fire_expanded,

  spell_wall_of_fire_monk: spells.wall_of_fire_monk,
  spell_wall_of_fire_details_5: spells.wall_of_fire_details_5,
  spell_wall_of_fire_details_9: spells.wall_of_fire_details_9,
  spell_wall_of_fire_details_13: spells.wall_of_fire_details_13,
  spell_wall_of_fire_details_17: spells.wall_of_fire_details_17,
  spell_wall_of_fire_monk_expanded: spells.wall_of_fire_monk_expanded,

  spell_beacon_of_hope: spells.beacon_of_hope,
  spell_beacon_of_hope_details: spells.beacon_of_hope_details,
  spell_beacon_of_hope_expanded: spells.beacon_of_hope_expanded,

  spell_level: "рівень заклять",

  spell_dispel_magic: spells.dispel_magic,
  spell_dispel_magic_details: spells.dispel_magic_details,
  spell_dispel_magic_expanded: spells.dispel_magic_expanded,

  spell_freedom_of_movement: spells.freedom_of_movement,
  spell_freedom_of_movement_details: spells.freedom_of_movement_details,
  spell_freedom_of_movement_expanded: spells.freedom_of_movement_expanded,

  spell_guardian_of_faith: spells.guardian_of_faith,
  spell_guardian_of_faith_details: spells.guardian_of_faith_details,
  spell_guardian_of_faith_expanded: spells.guardian_of_faith_expanded,

  spell_flame_strike: spells.flame_strike,
  spell_flame_strike_details: spells.flame_strike_details,
  spell_flame_strike_expanded: spells.flame_strike_expanded,

  spell_commune: spells.commune,
  spell_commune_details: spells.commune_details,
  spell_commune_expanded: spells.commune_expanded,

  spell_protection_from_energy: spells.protection_from_energy,
  spell_protection_from_energy_details: spells.protection_from_energy_details,
  spell_protection_from_energy_expanded: spells.protection_from_energy_expanded,

  spell_plant_growth: spells.plant_growth,
  spell_plant_growth_details: spells.plant_growth_details,
  spell_plant_growth_expanded: spells.plant_growth_expanded,

  spell_ice_storm: spells.ice_storm,
  spell_ice_storm_details: spells.ice_storm_details,
  spell_ice_storm_expanded: spells.ice_storm_expanded,

  spell_tree_stride: spells.tree_stride,
  spell_tree_stride_details: spells.tree_stride_details,
  spell_tree_stride_expanded: spells.tree_stride_expanded,

  spell_haste: spells.haste,
  spell_haste_details: spells.haste_details,
  spell_haste_expanded: spells.haste_expanded,

  magic_initiate_expanded: "* Ви можете використовувати ці чари тільки без чарунки, але накладати його на мінімально можливому рівні, і один раз між тривалими відпочинками",

  spell_longstrider: spells.longstrider,
  spell_longstrider_details: spells.longstrider_details,
  spell_longstrider_expanded: spells.longstrider_expanded,

  spell_tashas_hideous_laughter: spells.tashas_hideous_laughter,
  spell_tashas_hideous_laughter_details: spells.tashas_hideous_laughter_details,
  spell_tashas_hideous_laughter_expanded: spells.tashas_hideous_laughter_expanded,

  ritual_caster_expanded: "* Ви можете використовувати ці чари тільки без чарунки, але накладати його на мінімально можливому рівні, на 10 хвилин довше і тримаючи в руці свою ритуальну книгу. (застосовано)",

  spell_banishment: spells.banishment,
  spell_banishment_details: spells.banishment_details,
  spell_banishment_expanded: spells.banishment_expanded,

  spell_crown_of_madness: spells.crown_of_madness,
  spell_crown_of_madness_details: spells.crown_of_madness_details,
  spell_crown_of_madness_expanded: spells.crown_of_madness_expanded,

  spell_dimension_door: spells.dimension_door,
  spell_dimension_door_details: spells.dimension_door_details,
  spell_dimension_door_expanded: spells.dimension_door_expanded,

  true_sense_details: "Крім звичайного використання, ви можете застосувати ці заклинання без чарунки 1 раз між тривалими відпочинками.",

  plus_10_min: "+10 хв",

  spells_left: "виберіть ще",
  spell_duplicated: "є повторення",
  spell_selected: "✅ Обрано",
  action_plus10min: '[Без чарунки +10 хв] Основна дія',
  ritual_plus10min: '[Без чарунки +10 хв] Ритуал',

  spell_scrying: spells.scrying,
  spell_scrying_details: spells.scrying_details,
  spell_scrying_expanded: spells.scrying_expanded,

  material_focus_1000gold:"Фокус за 1000+ зм",

  spell_hold_monster: spells.hold_monster,
  spell_hold_monster_details: spells.hold_monster_details,
  spell_hold_monster_expanded: spells.hold_monster_expanded,

  spell_hold_monster_warlock: spells.hold_monster_warlock,
  spell_hold_monster_warlock_details: spells.hold_monster_warlock_details,
  spell_hold_monster_warlock_expanded: spells.hold_monster_warlock_expanded,

  spell_sleet_storm: spells.sleet_storm,
  spell_sleet_storm_details: spells.sleet_storm_details,
  spell_sleet_storm_expanded: spells.sleet_storm_expanded,

  spell_call_lightning: spells.call_lightning,
  spell_call_lightning_details: spells.call_lightning_details,
  spell_call_lightning_expanded: spells.call_lightning_expanded,

  spell_control_water: spells.control_water,
  spell_control_water_details: spells.control_water_details,
  spell_control_water_expanded: spells.control_water_expanded,

  spell_insect_plague: spells.insect_plague,
  spell_insect_plague_details: spells.insect_plague_details,
  spell_insect_plague_expanded: spells.insect_plague_expanded,

  spell_destructive_wave: spells.destructive_wave,
  spell_destructive_wave_details: spells.destructive_wave_details,
  spell_destructive_wave_expanded: spells.destructive_wave_expanded,

  spell_spirit_guardians: spells.spirit_guardians,
  spell_spirit_guardians_details: spells.spirit_guardians_details,
  spell_spirit_guardians_expanded: spells.spirit_guardians_expanded,

  spell_crusaders_mantle: spells.crusaders_mantle,
  spell_crusaders_mantle_details: spells.crusaders_mantle_details,
  spell_crusaders_mantle_expanded: spells.crusaders_mantle_expanded,

  material_diamond_300gold: "Діаманти за зм 300+ (витрачається)",

  spell_revivify: spells.revivify,
  spell_revivify_details: spells.revivify_details,
  spell_revivify_expanded: spells.revivify_expanded,

  spell_death_ward: spells.death_ward,
  spell_death_ward_details: spells.death_ward_details,
  spell_death_ward_expanded: spells.death_ward_expanded,

  spell_mass_cure_wounds: spells.mass_cure_wounds,
  spell_mass_cure_wounds_details: spells.mass_cure_wounds_details,
  spell_mass_cure_wounds_expanded: spells.mass_cure_wounds_expanded,

  material_diamond_500gold: "Діаманти за зм 500+ (витрачається)",

  fee: "штраф",

  spell_raise_dead: spells.raise_dead,
  spell_raise_dead_details: spells.raise_dead_details,
  spell_raise_dead_expanded: spells.raise_dead_expanded,

  spell_raise_dead_wizard: spells.raise_dead_wizard,
  spell_raise_dead_wizard_details: spells.raise_dead_wizard_details,
  spell_raise_dead_wizard_expanded: spells.raise_dead_wizard_expanded,

  material_diamont_dust_25gold: "діамантовий пил за зм 25+",

  spell_nondetection: spells.nondetection,
  spell_nondetection_details: spells.nondetection_details,
  spell_nondetection_expanded: spells.nondetection_expanded,

  spell_speak_with_dead: spells.speak_with_dead,
  spell_speak_with_dead_warlock: spells.speak_with_dead_warlock,
  spell_speak_with_dead_details: spells.speak_with_dead_details,
  spell_speak_with_dead_expanded: spells.speak_with_dead_expanded,

  spell_arcane_eye: spells.arcane_eye,
  spell_arcane_eye_warlock: spells.arcane_eye_warlock,
  spell_arcane_eye_details: spells.arcane_eye_details,
  spell_arcane_eye_expanded: spells.arcane_eye_expanded,

  spell_confusion: spells.confusion,
  spell_confusion_details: spells.confusion_details,
  spell_confusion_expanded: spells.confusion_expanded,

  material_smell_250gold:"пахощі за зм 250+ (витрачається)",
  material_ivory_50gold:"4 пластинки із слонової кістки за 200+",

  spell_legend_lore: spells.legend_lore,
  spell_legend_lore_details: spells.legend_lore_details,
  spell_legend_lore_expanded: spells.legend_lore_expanded,

  spell_blink: spells.blink,
  spell_blink_details: spells.blink_details,
  spell_blink_expanded: spells.blink_expanded,

  spell_polymorph: spells.polymorph,
  spell_polymorph_details: spells.polymorph_details,
  spell_polymorph_expanded: spells.polymorph_expanded,

  sculptor_of_flesh_slots:"скульптор плоті",
  sculptor_of_flesh_slot: "1× скульптор плоті",
  
  spell_polymorph_warlock: spells.polymorph_warlock,
  spell_polymorph_warlock_details: spells.polymorph_warlock_details,
  spell_polymorph_warlock_expanded: spells.polymorph_warlock_expanded,

  spell_confusion_warlock: spells.confusion_warlock,
  spell_confusion_warlock_details: spells.confusion_warlock_details,
  spell_confusion_warlock_expanded: spells.confusion_warlock_expanded,

  spell_polymorph_wizard: spells.polymorph_wizard,
  spell_polymorph_wizard_details: spells.polymorph_wizard_details,
  spell_polymorph_wizard_expanded: spells.polymorph_wizard_expanded,

  vax:"віск",
  vax_details: "",

  event_oldness: "давнина,",

  spell_modify_memory: spells.modify_memory,
  spell_modify_memory_details: spells.modify_memory_details,
  spell_modify_memory_expanded: spells.modify_memory_expanded,

  spell_dominate_person: spells.dominate_person,
  spell_dominate_person_details: spells.dominate_person_details,
  spell_dominate_person_expanded: spells.dominate_person_expanded,

  spell_wind_wall: spells.wind_wall,
  spell_wind_wall_details: spells.wind_wall_details,
  spell_wind_wall_expanded: spells.wind_wall_expanded,

  spell_dominate_beast: spells.dominate_beast,
  spell_dominate_beast_details: spells.dominate_beast_details,
  spell_dominate_beast_expanded: spells.dominate_beast_expanded,

  pull:"притягування",

  spell_grasping_vine: spells.grasping_vine,
  spell_grasping_vine_details: spells.grasping_vine_details,
  spell_grasping_vine_expanded: spells.grasping_vine_expanded,

  spell_daylight: spells.daylight,
  spell_daylight_details: spells.daylight_details,
  spell_daylight_expanded: spells.daylight_expanded,

  spell_slow: spells.slow,
  spell_slow_details: spells.slow_details,
  spell_slow_expanded: spells.slow_expanded,

  spell_slow_warlock: spells.slow_warlock,
  spell_slow_warlock_details: spells.slow_warlock_details,
  spell_slow_warlock_expanded: spells.slow_warlock_expanded,

  spell_jump_warlock: spells.jump_warlock,
  spell_jump_warlock_details: spells.jump_warlock_details,
  spell_jump_warlock_expanded: spells.jump_warlock_expanded,

  spell_levitate_warlock: spells.levitate_warlock,
  spell_levitate_warlock_details: spells.levitate_warlock_details,
  spell_levitate_warlock_expanded: spells.levitate_warlock_expanded,

  spell_stinking_cloud: spells.stinking_cloud,
  spell_stinking_cloud_details: spells.stinking_cloud_details,
  spell_stinking_cloud_expanded: spells.stinking_cloud_expanded,

  spell_animate_dead: spells.animate_dead,
  spell_animate_dead_wizard: spells.animate_dead_wizard,
  spell_animate_dead_details: spells.animate_dead_details,
  spell_animate_dead_expanded: spells.animate_dead_expanded,

  health_bonus: "Бонусне здоровʼя",
  lvl_to_animated_undead: "у розмірі вашого рівня, для сворених вами невмерлих",
  to_damage_to_animated_undead: "на пошкодження зброєю, для сворених вами невмерлих",

  name_placeholder: "Вигадайте імʼя",

  spell_speak_with_plants: spells.speak_with_plants,
  spell_speak_with_plants_details: spells.speak_with_plants_details,
  spell_speak_with_plants_expanded: spells.speak_with_plants_expanded,

  spell_speak_with_plants_ranger: spells.speak_with_plants_ranger,
  spell_speak_with_plants_ranger_details: spells.speak_with_plants_ranger_details,
  spell_speak_with_plants_ranger_expanded: spells.speak_with_plants_ranger_expanded,

  spell_locate_creature: spells.locate_creature,
  spell_locate_creature_details: spells.locate_creature_details,
  spell_locate_creature_expanded: spells.locate_creature_expanded,

  spell_locate_creature_ranger: spells.locate_creature_ranger,
  spell_locate_creature_ranger_details: spells.locate_creature_ranger_details,
  spell_locate_creature_ranger_expanded: spells.locate_creature_ranger_expanded,

  spell_water_walk: spells.water_walk,
  spell_water_walk_details: spells.water_walk_details,
  spell_water_walk_expanded: spells.water_walk_expanded,

  spell_lightning_bolt: spells.lightning_bolt,
  spell_lightning_bolt_details: spells.lightning_bolt_details,
  spell_lightning_bolt_expanded: spells.lightning_bolt_expanded,

  spell_meld_into_stone: spells.meld_into_stone,
  spell_meld_into_stone_details: spells.meld_into_stone_details,
  spell_meld_into_stone_expanded: spells.meld_into_stone_expanded,

  spell_stone_shape: spells.stone_shape,
  spell_stone_shape_details: spells.stone_shape_details,
  spell_stone_shape_expanded: spells.stone_shape_expanded,

  spell_passwall: spells.passwall,
  spell_passwall_details: spells.passwall_details,
  spell_passwall_expanded: spells.passwall_expanded,

  material_incense_25gold: "пахожі та підношення за 25+ зм (витрачається)",

  spell_dream: spells.dream,
  spell_dream_details: spells.dream_details,
  spell_dream_expanded: spells.dream_expanded,

  spell_divination: spells.divination,
  spell_divination_details: spells.divination_details,
  spell_divination_expanded: spells.divination_expanded,

  spell_greater_invisibility: spells.greater_invisibility,
  spell_greater_invisibility_details: spells.greater_invisibility_details,
  spell_greater_invisibility_expanded: spells.greater_invisibility_expanded,

  spell_create_food_and_water: spells.create_food_and_water,
  spell_create_food_and_water_details: spells.create_food_and_water_details,
  spell_create_food_and_water_expanded: spells.create_food_and_water_expanded,

  spell_hallucinatory_terrain: spells.hallucinatory_terrain,
  spell_hallucinatory_terrain_details: spells.hallucinatory_terrain_details,
  spell_hallucinatory_terrain_expanded: spells.hallucinatory_terrain_expanded,

  spell_blight: spells.blight,
  spell_blight_details: spells.blight_details,
  spell_blight_expanded: spells.blight_expanded,

  spell_water_breathing: spells.water_breathing,
  spell_water_breathing_details: spells.water_breathing_details,
  spell_water_breathing_expanded: spells.water_breathing_expanded,

  spell_conjure_elemental: spells.conjure_elemental,
  spell_conjure_elemental_details: spells.conjure_elemental_details,
  spell_conjure_elemental_expanded: spells.conjure_elemental_expanded,

  spell_conjure_elemental_warlock: spells.conjure_elemental_warlock,
  spell_conjure_elemental_warlock_details: spells.conjure_elemental_warlock_details,
  spell_conjure_elemental_warlock_expanded: spells.conjure_elemental_warlock_expanded,

  spell_cloudkill: spells.cloudkill,
  spell_cloudkill_details: spells.cloudkill_details,
  spell_cloudkill_expanded: spells.cloudkill_expanded,

  spell_seeming: spells.seeming,
  spell_seeming_details: spells.seeming_details,
  spell_seeming_expanded: spells.seeming_expanded,

  spell_fire_shield: spells.fire_shield,
  spell_fire_shield_details: spells.fire_shield_details,
  spell_fire_shield_expanded: spells.fire_shield_expanded,

  material_incense_1000gold: "трави, масла і пахощі за 1000+ зм (витрачається)",

  spell_hallow: spells.hallow,
  spell_hallow_details: spells.hallow_details,
  spell_hallow_expanded: spells.hallow_expanded,

  material_focus_100gold:"Фокус за 100+ зм",

  spell_clairvoyance: spells.clairvoyance,
  spell_clairvoyance_details: spells.clairvoyance_details,
  spell_clairvoyance_expanded: spells.clairvoyance_expanded,

  spell_sending: spells.sending,
  spell_sending_details: spells.sending_details,
  spell_sending_expanded: spells.sending_expanded,

  spell_evards_black_tentacles: spells.evards_black_tentacles,
  spell_evards_black_tentacles_details: spells.evards_black_tentacles_details,
  spell_evards_black_tentacles_expanded: spells.evards_black_tentacles_expanded,

  spell_telekinesis: spells.telekinesis,
  spell_telekinesis_details: spells.telekinesis_details,
  spell_telekinesis_expanded: spells.telekinesis_expanded,

  spell_bestow_curse: spells.bestow_curse,
  spell_bestow_curse_details: spells.bestow_curse_details,
  spell_bestow_curse_expanded: spells.bestow_curse_expanded,

  spell_bestow_curse_warlock: spells.bestow_curse_warlock,
  spell_bestow_curse_warlock_details: spells.bestow_curse_warlock_details,
  spell_bestow_curse_warlock_expanded: spells.bestow_curse_warlock_expanded,

  spell_compulsion: spells.compulsion,
  spell_compulsion_details: spells.compulsion_details,
  spell_compulsion_expanded: spells.compulsion_expanded,

  spell_compulsion_warlock: spells.compulsion_warlock,
  spell_compulsion_warlock_details: spells.compulsion_warlock_details,
  spell_compulsion_warlock_expanded: spells.compulsion_warlock_expanded,

  spell_help_of_talisman_warlock: spells.help_of_talisman_warlock,
  spell_help_of_talisman_warlock_details: spells.help_of_talisman_warlock_details,
  spell_help_of_talisman_warlock_expanded: spells.help_of_talisman_warlock_expanded,

  spell_create_talisman_warlock: spells.create_talisman_warlock,
  spell_create_talisman_warlock_details: spells.create_talisman_warlock_details,
  spell_create_talisman_warlock_expanded: spells.create_talisman_warlock_expanded,

  condition_pact_of_the_chain: "Умова: Пакт Ланцюга",
  condition_pact_of_the_tome: "Умова: Пакт Гримуара",
  condition_pact_of_the_blade: "Умова: Пакт Клинка",

  support_project: 'Підтримай проект 🙏',
  copy_link_character: "Скопіювати посилання на персонажа",
  download_pdf: "Скачати аркуш",
  coming_soon: "скоро",

  responsive_top: "Нашому сайту потрібно трохи більше простору для найкращого досвіду, окрема мобільна версія ще у розробці.",
  responsive_bottom: 'вже працює з ПК або ноутбука. Мобільна версія сайту ще у розробці 🐣',

  abilities_passive: "постійні еффекти",

  max: "max",

  spell_conjure_animals: spells.conjure_animals,
  spell_conjure_animals_details: spells.conjure_animals_details,
  spell_conjure_animals_expanded: spells.conjure_animals_expanded,

  spell_conjure_barrage: spells.conjure_barrage,
  spell_conjure_barrage_details: spells.conjure_barrage_details,
  spell_conjure_barrage_expanded: spells.conjure_barrage_expanded,

  spell_hipnotic_pattern: spells.hipnotic_pattern,
  spell_hipnotic_pattern_details: spells.hipnotic_pattern_details,
  spell_hipnotic_pattern_expanded: spells.hipnotic_pattern_expanded,

  spell_hunger_of_hadar: spells.hunger_of_hadar,
  spell_hunger_of_hadar_details: spells.hunger_of_hadar_details,
  spell_hunger_of_hadar_expanded: spells.hunger_of_hadar_expanded,

  gender_phisiological: "Гендер фіз",
  armors_proficiency: "Володіння обладунками",
  weapons_proficiency: "Володіння зброєю",
  tools_proficiency: "Володіння інструментами",
  languages_proficiency: "Володіння мовами",
  print_mastry: "БМ",
  saving_throws: "Вмирання",
  fatigue: "Втома",

  spell_counterspell: spells.counterspell,
  spell_counterspell_details: spells.counterspell_details,
  spell_counterspell_expanded: spells.counterspell_expanded,

  halfsphere:"купол",

  spell_leomunds_tiny_hut: spells.leomunds_tiny_hut,
  spell_leomunds_tiny_hut_details: spells.leomunds_tiny_hut_details,
  spell_leomunds_tiny_hut_expanded: spells.leomunds_tiny_hut_expanded,

  material_holy_water_100gold: "свята вода та порошок срібла із залізом за 100+ зм (витрачається)",

  spell_magic_circle: spells.magic_circle,
  spell_magic_circle_details: spells.magic_circle_details,
  spell_magic_circle_expanded: spells.magic_circle_expanded,

  spell_mass_healing_word: spells.mass_healing_word,
  spell_mass_healing_word_details: spells.mass_healing_word_details,
  spell_mass_healing_word_expanded: spells.mass_healing_word_expanded,

  spell_lightning_arrow: spells.lightning_arrow,
  spell_lightning_arrow_details: spells.lightning_arrow_details,
  spell_lightning_arrow_expanded: spells.lightning_arrow_expanded,

  spell_major_image: spells.major_image,
  spell_major_image_details: spells.major_image_details,
  spell_major_image_expanded: spells.major_image_expanded,

  spell_blinding_smite: spells.blinding_smite,
  spell_blinding_smite_details: spells.blinding_smite_details,
  spell_blinding_smite_expanded: spells.blinding_smite_expanded,

  material_incense_200gold:"пахощі та потовчений діамант за 200+ зм (витрачається)",

  spell_glyph_of_warding: spells.glyph_of_warding,
  spell_glyph_of_warding_details: spells.glyph_of_warding_details,
  spell_glyph_of_warding_expanded: spells.glyph_of_warding_expanded,

  spell_phantom_steed: spells.phantom_steed,
  spell_phantom_steed_details: spells.phantom_steed_details,
  spell_phantom_steed_expanded: spells.phantom_steed_expanded,

  spell_vampiric_touch: spells.vampiric_touch,
  spell_vampiric_touch_details: spells.vampiric_touch_details,
  spell_vampiric_touch_expanded: spells.vampiric_touch_expanded,

  spell_feign_death: spells.feign_death,
  spell_feign_death_details: spells.feign_death_details,
  spell_feign_death_expanded: spells.feign_death_expanded,

  spell_remove_curse: spells.remove_curse,
  spell_remove_curse_details: spells.remove_curse_details,
  spell_remove_curse_expanded: spells.remove_curse_expanded,

  spell_elemental_weapon: spells.elemental_weapon,
  spell_elemental_weapon_details: spells.elemental_weapon_details,
  spell_elemental_weapon_details_5: spells.elemental_weapon_details_5,
  spell_elemental_weapon_details_7: spells.elemental_weapon_details_7,
  spell_elemental_weapon_expanded: spells.elemental_weapon_expanded,

  spell_fear: spells.fear,
  spell_fear_details: spells.fear_details,
  spell_fear_expanded: spells.fear_expanded,

  spell_tongues: spells.tongues,
  spell_tongues_details: spells.tongues_details,
  spell_tongues_expanded: spells.tongues_expanded,

  none_action: "—",

  spell_difficulty: "складність заклять",

  free_action: "вільна дія",
  action_short_phrase: "коротка фраза або жест",
  action_with_backpack: "дістати з рюкзака предмет або зброю для Основної дії",
  actions_with_door: "Відкрити або закрити двері",
  action_button_click: "Натиснути на кнопку",
  action_other: "інша дрібна дія",

  action_weapon_attack: "атака зброєю",
  actions_jump: "ривок",
  actions_departure: "відхід",
  actions_evasion: "ухилення",
  action_ambush: "засідка",
  action_prepare: "підготувати дію",
  action_use_item: "використати предмет",
  action_search: "пошук | перевірка",

  no_cost_action: "Безкоштовні дії",
  provoked_attackn: "Провокована атака",
  action_prepared: "Здійснення підготованої дії",

  print_coin_platinum: "Платинових",
  print_coin_gold: "Золотих",
  print_coin_silver: "Срібних",
  print_coin_copper: "Мідних",

  print_aim_range: "Дальн.",
  print_aim_need: "Влч",
  print_damage: "Пошкодж.",

  print_perception_passive: "п.сприйняття",
  print_spell_complex: "скл. заклять",
  print_notes: "нотатки",

  print_characters: "Особи",
  print_events: "Події",
  print_places: "Місця",

  print_biography: "Біографія",

  link_description: "Налаштування персонажа збережені на пристрої, на якому він був створений.",

  spell_empowered_evocation: spells.empowered_evocation,
  spell_empowered_evocation_details: spells.empowered_evocation_details,
  spell_empowered_evocation_expanded: spells.empowered_evocation_expanded,

  start_over: "Почати заново",

  print_biography_details: 'Біографія дозволить краще зрозуміти свого персонажа та його мотивацію, а також допомагає імпровізувати в ході гри та створювати більш реалістичний світ. <br/><br/>Придумайте деталі про дитинство, родину персонажа, його досвід та навички, складнощі та виклики, переживання та травми, успіхи та поразки, цілі та мету — все, що може впливати на поведінку персонажа. Не бійтеся додавати незвичайні деталі, що можуть робити персонажа більш цікавим та “живим”.',

  someone: "Безіменний",

  load_progress: "Завантаження ...",

  feat_custom_stalker:"💎 Сталкер",
  feat_custom_stalker_details:"Ви — експерт у вистеженні здобичі. Під час полювання ви почуваєтеся впевненіше, ніж удома, і ваша здобич рідко услизає від вас.",

  on_survival_stalker: "на перевірки Виживання для вистеження істоти, побаченої вами за останню добу",

  spell_attribute_intelligence_saving: "Складність Випробування для цього закляття залежить від модифікатора Інтелекту.",
  spell_attribute_intelligence_aim: "Влучність цього закляття залежить від модифікатора Інтелекту.",

  faerie_fire_0_slots: "Вогники фей",
  faerie_fire_0_slot: "1× Вогники фей",

  accelerate_development: "Прискорити розробку",

  //LOBBY

  lobby_button: "Більше про D&D",

  lobby_menu_1: "Що таке Dungeons & Dragons",
  lobby_menu_2: "Приклади партій",
  lobby_menu_3: "Вибрати гру або Майстра",
  lobby_menu_4: "Як проходить гра",

  lobby_welcome_title: "Що таке<br/>Dungeons & Dragons",
  
  lobby_what_is_it_details: 'Це <span class="buff">розмовна</span> гра, де гравці перевтілюються у свого унікального персонажа, і разом долають виклики магічного світу, створеного Майстром гри — оповідачем, ведучим та помічником для гравців.',
  
  lobby_what_is_it_details_2: '<span class="buff">Варіанти дій обмежені лише фантазією</span>, а вдалість спроби вирішують кубики, які іноді просить кинути Майстер.',

  how_to_start: 'Як почати',

  how_to_start_1_title: 'Знайди гру або Майстра',
  how_to_start_1_details: 'Офлайн або онлайн, у клубі або вдома. Зазвичай грає 3-4 гравця на 3-4 години.',

  how_to_start_2_title: 'Створи персонажа',
  how_to_start_2_details: 'dndme.club допоможе створити персонажа без читання правил за 3 простих кроки.',

  how_to_start_3_title: 'Приходь на гру',
  how_to_start_3_details: 'Роздрукуй аркуш персонажа<br/>та вчасно приходь з ним<br/>на заплановану гру.',

  how_to_find: '02. Де знайти свою першу гру або майстра',

  // --- clubs

  club_did_name: "Дід Лихозор",
  club_did_details: "Київський клуб з Майстрами, офлайн та онлайн іграми.",

  club_huhy_name: "Хухи.space",
  club_huhy_details: "Київський клуб з Майстрами та офлайн іграми.",

  club_eneri_name: "ЕНЕРІ",
  club_eneri_details: "Майданчик з офлайн та онлайн іграми від різних Майстрів<br/>у різних містах України.",

  club_miar_name: "Miar",
  club_miar_details: "Майданчик з офлайн та онлайн іграми від різних Майстрів<br/>у різних містах України.",

  club_inrium_name: "ІНРІУМ",
  club_inrium_details: "Ініціатива Настільно-Рольових Ігор Українською Мовою.",

  club_rumble_dice_name: "Гримлячі кістки",
  club_rumble_dice_details: "Затишний Телеграм канал та чат з дотепними мемами, корисними файлами та анонсами ігор.",

  club_dndlviv_name: "D&D Lviv+",
  club_dndlviv_details: "Майданчик з офлайн та онлайн іграми від різних Майстрів<br/>у різних містах України.",

  club_mr_name: "Майстерня Рольовика",
  club_mr_details: "Львівський клуб де постійно відбуваються онлайн та оффлайн ігри.",

  club_cats_and_dice_name: "Cats&Dice",
  club_cats_and_dice_details: "Наймиліший Телеграм чатик, де діляться фото своїх тваринок!<br/>Ну і анонсами ігор ))",

  // ---

  city: "Місто",  
  format: "Формат",
  kyiv: "Київ",
  lviv: "Львів",
  offline: "Оффлайн",
  online: "Онлайн",
  telegram: "Telegram",

  andrii_pavlov: masters.andrii_pavlov,
  andrii_pavlov_details: masters.andrii_pavlov_details,
  andrii_pavlov_contact: masters.andrii_pavlov_contact,

  oleksandr_frankivsky: masters.oleksandr_frankivsky,
  oleksandr_frankivsky_details: masters.oleksandr_frankivsky_details,
  oleksandr_frankivsky_contact: masters.oleksandr_frankivsky_contact,

  sanech: masters.sanech,
  sanech_details: masters.sanech_details,
  sanech_contact: masters.sanech_contact,

  lobby_master_button: "Я теж Майстер, додайте мою анкету",

  how_it_goes: 'Як проходить гра',

  how_it_goes_1: 'Майстер описує оточення та ситуацію.',
  how_it_goes_2: 'Гравці, взаємодіючи між собою (або ні) кажуть що вони хочуть зробити/сказати їх персонажі.',
  how_it_goes_3: 'Майстер загадково усміхається, просить кинути конкретні кубики, та на основі результату кидка описує наслідки, з яких виходить нова ситуація для реакції гравців.',
  how_it_goes_4: 'Сюжети, типові або авторські, розділяються на Ваншот, Модуль та Кампейн. Але це родзілення умовне, бо вдалий ваншот легко може перетворитися на Модуль, або навіть на Кампейн.',

  lobby_game_type_1_name: 'One-shot',
  lobby_game_type_1_details: 'Коротка історія на 1-2 гри. Найкраще підходить для першої спроби. Як ось наприклад онлайн-партія <a target="_blank" href="https://youtu.be/UWDPz2vrUn0">Велике&nbsp;Пограбування, від&nbsp;idearoll</a>',
  lobby_game_type_2_name: 'Module',
  lobby_game_type_2_details: 'Середня історія, яку можна грати протягом кількох сеансів, зазвичай 3-5 ігор. Наприклад <a target="_blank" href="https://youtu.be/7CjvWO05rA0?t=507">Подвійна&nbsp;Гра, від&nbsp;Dice&Bones</a>.',
  lobby_game_type_3_name: 'Campaign',
  lobby_game_type_3_details: 'Довготривала історія, яка може тривати кілька місяців або навіть років. Ось як це робить команда <a target="_blank" href="https://www.youtube.com/@diceandbonesdnd">Dice&Bones</a> у своїй кампанії <a target="_blank" href="https://www.youtube.com/watch?v=Dl4kA4w0rU0&list=PLO1kG5YTufOacRM7eAfovXMwk_SU1OWNT">“Отруєна Спадщина”</a>.',

  lobby_conclustion: 'Dungeons & Dragons здатна сподобатися кожному',

  lobby_conclustion_details: 'Це доводить її невщухаюча всесвітня популярність протягом вже 50+ років, не зважаючи на складність створення персонажа. Але ці складнощі у минулому —  <span class="buff">dndme.club</span> допомагає створити персонажа без читання правил за 3 простих кроки. Спробуй і ти!',

  lobby_CTA: "Створи персонажа",
  lobby_footer: 'По всім питанням пишіть Дімі <a target="_blank" href="https://t.me/dimalagoda">t.me/dimalagoda</a>',
  lobby_support_project: "Підтримай проект",

  details: "деталі",
  char_details: "деталі персонажа",

  spell_aura_of_purity: spells.aura_of_purity,
  spell_aura_of_purity_details: spells.aura_of_purity_details,
  spell_aura_of_purity_expanded: spells.aura_of_purity_expanded,

  photo: "світлина",
  standard: "стандарт",
  your_image: "Cвоє зображення",
  your_image_details: "Підготуйте зображення вашого персонажа або створіть за допомогою сервісів нижче, і загрузіть його сюди з вашого пристрою.",
  edit_photo: "Редагувати на Heroforge ↗",
  choose_photo: "Підібрати на Pinterest ↗",
  
  enter_url: "або URL:",
  url_photo_error:"Посилання повинно вести на зображення",

  spell_mordenkainens_faithful_hound: spells.mordenkainens_faithful_hound,
  spell_mordenkainens_faithful_hound_details: spells.mordenkainens_faithful_hound_details,
  spell_mordenkainens_faithful_hound_expanded: spells.mordenkainens_faithful_hound_expanded,

  spell_phantasmal_killer: spells.phantasmal_killer,
  spell_phantasmal_killer_details: spells.phantasmal_killer_details,
  spell_phantasmal_killer_expanded: spells.phantasmal_killer_expanded,

  spell_conjure_woodland_beings: spells.conjure_woodland_beings,
  spell_conjure_woodland_beings_details: spells.conjure_woodland_beings_details,
  spell_conjure_woodland_beings_expanded: spells.conjure_woodland_beings_expanded,

  spell_conjure_minor_elementals: spells.conjure_minor_elementals,
  spell_conjure_minor_elementals_details: spells.conjure_minor_elementals_details,
  spell_conjure_minor_elementals_expanded: spells.conjure_minor_elementals_expanded,

  spell_giant_insect: spells.giant_insect,
  spell_giant_insect_details: spells.giant_insect_details,
  spell_giant_insect_expanded: spells.giant_insect_expanded,

  spell_fabricate: spells.fabricate,
  spell_fabricate_details: spells.fabricate_details,
  spell_fabricate_expanded: spells.fabricate_expanded,

  spell_mordenkainens_private_sanctum: spells.mordenkainens_private_sanctum,
  spell_mordenkainens_private_sanctum_details: spells.mordenkainens_private_sanctum_details,
  spell_mordenkainens_private_sanctum_expanded: spells.mordenkainens_private_sanctum_expanded,

  spell_leomunds_secret_chest: spells.leomunds_secret_chest,
  spell_leomunds_secret_chest_details: spells.leomunds_secret_chest_details,
  spell_leomunds_secret_chest_expanded: spells.leomunds_secret_chest_expanded,

  material_chest_5050:"коштовна скриня за 5000+ зм, Її зменшена копія за 50+ зм",

  spell_staggering_smite: spells.staggering_smite,
  spell_staggering_smite_details: spells.staggering_smite_details,
  spell_staggering_smite_expanded: spells.staggering_smite_expanded,

  spell_otilukes_resilient_sphere: spells.otilukes_resilient_sphere,
  spell_otilukes_resilient_sphere_details: spells.otilukes_resilient_sphere_details,
  spell_otilukes_resilient_sphere_expanded: spells.otilukes_resilient_sphere_expanded,

  spell_swift_quiver: spells.swift_quiver,
  spell_swift_quiver_details: spells.swift_quiver_details,
  spell_swift_quiver_expanded: spells.swift_quiver_expanded,

  your_option: "Свій варіант",
  bow_shortsword_2: "Лук та два меча",
  bow_two_simple_weapons: "Лук та дві прості зброї",

  slot_count: "кількість слотів",

  spell_animate_objects: spells.animate_objects,
  spell_animate_objects_details: spells.animate_objects_details,
  spell_animate_objects_expanded: spells.animate_objects_expanded,

  spell_antilife_shell: spells.antilife_shell,
  spell_antilife_shell_details: spells.antilife_shell_details,
  spell_antilife_shell_expanded: spells.antilife_shell_expanded,

  spell_awaken: spells.awaken,
  spell_awaken_details: spells.awaken_details,
  spell_awaken_expanded: spells.awaken_expanded,

  material_agat_1000gold: "агат за 1000+ зм (витрачається)",

  spell_banishing_smite: spells.banishing_smite,
  spell_banishing_smite_details: spells.banishing_smite_details,
  spell_banishing_smite_expanded: spells.banishing_smite_expanded,

  spell_bigbys_hand: spells.bigbys_hand,
  spell_bigbys_hand_details: spells.bigbys_hand_details,
  spell_bigbys_hand_expanded: spells.bigbys_hand_expanded,

  spell_circle_of_power: spells.circle_of_power,
  spell_circle_of_power_details: spells.circle_of_power_details,
  spell_circle_of_power_expanded: spells.circle_of_power_expanded,

  spell_conjure_volley: spells.conjure_volley,
  spell_conjure_volley_details: spells.conjure_volley_details,
  spell_conjure_volley_expanded: spells.conjure_volley_expanded,

  spell_contact_other_plane: spells.contact_other_plane,
  spell_contact_other_plane_details: spells.contact_other_plane_details,
  spell_contact_other_plane_expanded: spells.contact_other_plane_expanded,

  spell_contagion: spells.contagion,
  spell_contagion_details: spells.contagion_details,
  spell_contagion_expanded: spells.contagion_expanded,

  spell_creation: spells.creation,
  spell_creation_details: spells.creation_details,
  spell_creation_expanded: spells.creation_expanded,

  spell_dispell_evil_and_good: spells.dispell_evil_and_good,
  spell_dispell_evil_and_good_details: spells.dispell_evil_and_good_details,
  spell_dispell_evil_and_good_expanded: spells.dispell_evil_and_good_expanded,

  spell_geas: spells.geas,
  spell_geas_details: spells.geas_details,
  spell_geas_expanded: spells.geas_expanded,

  spell_greater_restoration: spells.greater_restoration,
  spell_greater_restoration_details: spells.greater_restoration_details,
  spell_greater_restoration_expanded: spells.greater_restoration_expanded,

  spell_mislead: spells.mislead,
  spell_mislead_details: spells.mislead_details,
  spell_mislead_expanded: spells.mislead_expanded,

  material_jewel_1000gold: "дорогоцінний камінь за 1000+ зм (витрачається)",

  spell_planar_binding: spells.planar_binding,
  spell_planar_binding_details: spells.planar_binding_details,
  spell_planar_binding_expanded: spells.planar_binding_expanded,

  material_oil_1000gold: "мазь за 1000+ зм (витрачається)",

  spell_reincarnate: spells.reincarnate,
  spell_reincarnate_details: spells.reincarnate_details,
  spell_reincarnate_expanded: spells.reincarnate_expanded,

  spell_telepatic_bond: spells.telepatic_bond,
  spell_telepatic_bond_details: spells.telepatic_bond_details,
  spell_telepatic_bond_expanded: spells.telepatic_bond_expanded,

  material_chalk_50gold: "рідкісна крейда та чорнило з дорогоцінним камінням за 50+ зм (витрачається)",

  spell_teleportation_circle: spells.teleportation_circle,
  spell_teleportation_circle_details: spells.teleportation_circle_details,
  spell_teleportation_circle_expanded: spells.teleportation_circle_expanded,

  spell_wall_of_force: spells.wall_of_force,
  spell_wall_of_force_details: spells.wall_of_force_details,
  spell_wall_of_force_expanded: spells.wall_of_force_expanded,

  blank_print: "аркуш",
  
  blank_standard_details:"Основна частина в цьому варіанті розбита на секціі А5, і якшо аркуш розрізати навпіл, то з секцій виходить більш компактна і зручна стопка. Перша секція присвясена типажу персонажа, соціальній частині гри. Ну і рятівні кидки від смерті. Друга секція: Характеристики, Здібності, Навички — всі цифрові показники персонажа в одному місці. А також особливості — пассивні вміння персонажа. Третя секція — як і в олдскул аркуші, має панель всіх активних вмінь, заклять та можливостей у бою, у групах по тривалості — Основна дія, бонусна дія і тд. Також спорядження, гаманець, зброя, а також усі можливі заряди винесені в окремий блок з більшим вільним місцем. В усьому іншому варіанти Стандарт і Олдскул співпадають.",

  oldschool: "Олдскул",
  blank_oldschool_details:"Бланк наближений до канонічного аркуша персонажа",

  support_project_link: "50% донатів відправляємо до “Повернись Живим”. send.monobank.ua/jar/F8Yfa61mr",

  variant: "альтернативний",
  variant_details: races.variant,

  human_simple: "базовий",
  human_simple_details: races.human_simple,

  feats: "риси",

  spellbook: "Книга Чарів",
  spellbook_details: "Тут зібрані всі чари, які може підготувати ваш персонаж на цьому рівні.",
  change_spells: "— можливість змінювати Підготовані чари після тривалого відпочинку",
  spellbook_setting_details: "Всі закляття з цього списку будуть доступні персонажу у вигляді Книги Чарів, але використовувати можна обмежену кількість Підготованих чарів з цієї книги. Набір Підготованих чарів можна змінювати після кожного тривалого відпочинку.\n\n",

  lobby_menu_char: "Твій персонаж",
  noname: "Безіменний",
  edit: "Редагувати",

  prepared_spells: "Підготовані чари",
  prepared_spells_details: "Це чари, які персонаж може використовувати у цю ігрову добу.",
  prepared_spells_footnote: "Раз на добу цей список можна змінювати, обираючи інші чари з Книги Чарів персонажа, у кількості не більше вказаної вище.",

  available_spells: "Доступно чарів",
  all_spell: "Усього чарів",

  //New main page
  lobby_try_to_play:'Спробуй зіграти у<br/><span class="buff">Dungeons & Dargons</span><br/> без читання правил!', 
  create_character: "Створи свого героя",
  create_character_details: "<br />Щоб почати грати в D&D, достатньо придумати свого персонажа, а решту влаштує ваш Майстер.<br /><br />Найкращий підхід для першого разу — вибирати просто за покликом серця, бо тут немає неправильних рішень.",
  select_master: "Вибери гру або Майстра",
  select_master_details: "<br />Ігри бувають оффлайн або онлайн, у клубі або вдома. Зазвичай грає 3-4 гравця на декілька годин.<br /><br />Якщо у тебе ще немає Майстра або запланованої гри, ми зібрали найкращі джерела для їх пошуку.",

  party_example:"Кількість сюжетів у D&D безмежна — від безтурботних до жахаючих",
  party_example_details:"Бо вигадуванням сюжетів займаються безліч Майстрів з різних куточків світу, і у кожний з них можна зіграти.<br/><br/>За довжиною сюжети діляться на Ваншот, Модуль та Кампейн. Але це родзілення умовне, бо вдалий Ваншот легко може перетворитися на Модуль, або навіть на Кампейн.",

  join_us:"Приєднуйся до нашої групи<br/>у Telegram!",
  join_us_details:"Ділимся там прогресом по dndme.club, приймаємо пропозиції<br/>і зауваження, а також разом придумуємо ще більше імен для генератора!",

  game_process: "Процес гри складається з трьох інтуїтивно зрозумілих кроків:",

  lobby_game_step_1: "Ситуація",
  lobby_game_step_1_details: "Майстер описує оточення та ситуацію, в якій опинилися персонажі на основі минулих рішень, і питає гравців, що вони у звʼязку з цим хочуть зробити.",
  lobby_game_step_2: "Рішення",
  lobby_game_step_2_details: 'Гравці, взаємодіючи між собою (або ні), кажуть Майстру, що хочуть зробити/сказати їх персонажі.<br/><br/><span class="buff">У більшості ігор цей крок обмежений варіантами, які розробники гри заклали у гру. У Dungeons & Dragons можна спробувати будь які рішення, і таким чином створюється абсолютно нова історія.</span>',
  lobby_game_step_3: "Кубик і наслідки",
  lobby_game_step_3_details: "Майстер просить гравця кинути кубик, щоб перевірити навичку персонажа, яка знадобиться для виконання задумки гравця, та оголошує (або ні) складність кидка.<br/><br/>На основі результату кидка гравця, Майстер описує вдалість спроби та її наслідки, з яких виходить нова ситуація для реакції гравців, тобто знову відбувається крок 01.",
};
