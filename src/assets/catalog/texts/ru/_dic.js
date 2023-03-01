import * as races from "./races.js";
import * as spells from "./spells.js";
import * as classes from "./classes.js";
import { langs } from "./languages.js";
import { weapons } from "./weapons.js";
import { tools } from "./tools.js";
import { armor } from "./armor.js";

export default {
  //Стартовое
  welcome_title: "Создай своего персонажа для D&D",
  welcome_message:
    "Чтобьі полноценно играть в D&D, достаточно придумать персонажа нужного уровня, а остальное устроит ваш Мастер. єтот сайт поможет вам создать персонажа за 3 простьіх шага:\nРаса, Класс и Мировоззрение.\n\nЛучший подход для первого раза — расслабиться и вьібирать по зову сердца. Здесь нет неправильньіх решений. В финале вьі получите лист персонажа, с которьім вьі сможете начать игру!",
  welcome_disclaimer:
    '<br/>Материальі на єтом сайте не заменяют необходимость приобретения официальньіх материалов. Система Dungeons & Dragons является собственностью Wizards of the Coast, графические материальі созданьі с помощью <a target="_blank" href="https://www.heroforge.com">Hero Forge ↗</a>',

  authors:
    '<a target="_blank" href="https://t.me/dimalagoda">@ Dima Lagoda, Product Designer</a> — идея, дизайн, контент' +
    '<a target="_blank" href="https://t.me/Ki3iL">@ Andrii Alchin, Frontend Developer</a> — код' +
    '<a target="_blank" href="https://t.me/godblessdnd">@ Andrii Pavlov, Лучший Мастер Киева</a> — переводьі, валидация' +
    '<p><a target="_blank" href="https://t.me/kjnchka">@ Evgenia Kashchuk</a> — внештатньій советник 🤍.</p>' +
    "По любьім темам об єтом сайте, пишите Диме." +
    '<br/>Если у вас есть желание задонатить, будем очень благодарньі. Безжалостное и жестокое вторжение ₚосии в Украину продолжается, поєтому 80% донатов мьі отправляем в фонд "<a target="_blank" href="https://savelife.in.ua">Повернись Живим</a>".',

  //Общее

  name: "имя",

  race: "раса",
  ethnos: "єтнос",
  class: "класс",
  subclass: "специализация",
  past: "типаж",
  level: "уровень",
  level_unit: "й",
  lvl: "LVL",

  //Stats

  stats: "характеристики",
  stats_base_details_race:
    "Базовьіе значения характеристик помогают получить значения Модификаторов характеристик и Навьіков. Они используются в игре гораздо чаще и будут вьісчитаньі на следующем шаге, при вьіборе Класса.",

    stats_base_details_class:
    "Базовьіе значения характеристик помогают получить значения Модификаторов характеристик и Навьіков. Они используются в игре гораздо чаще.",

  strength: "сила",
  strength_base: "базовая",
  strength_details:
    "Физическая мощь и тренировки. Влияет на навьіки:\n" + "• Атлетика",

  dexterity: "ловкость",
  dexterity_base: "базовая",
  dexterity_details:
    "Проворство, реакция, равновесие. Влияет на навьіки:\n" +
    "• Акробатика\n" +
    "• Ловкость рук\n" +
    "• Скрьітность\n" +
    "• Броня",

  constitution: "телосложение",
  constitution_base: "базовое",
  constitution_details:
    "Вьіносливость, жизненньіе резервьі. Влияет на навьіки:\n" +
    "• Здоровье (HP)",

  intelligence: "интеллект",
  intelligence_base: "базовьій",
  intelligence_details:
    "Точность воспоминаний, рассуждений. Влияет на навьіки:\n" +
    "• Анализ\n" +
    "• История\n" +
    "• Религия\n" +
    "• Магия\n" +
    "• Природа\n",

  wisdom: "мудрость",
  wisdom_base: "базовая",
  wisdom_details:
    "Восприятие окружающего мира, интуиция. Влияет на навьіки:\n" +
    "• Вьіживание\n" +
    "• Внимательность\n" +
    "• Проницательность\n" +
    "• Медицина\n" +
    "• Уход за животньіми\n",

  charisma: "харизма",
  charisma_base: "базовая",
  charisma_details:
    "Способность оказьівать влияние. Влияет на навьіки:\n" +
    "• Вьіступление\n" +
    "• Убеждение\n" +
    "• Обман\n" +
    "• Запугивание",

  saving: "испьітание",

  //Genders

  gender: "гендер",
  phisiological: "физиологический",
  male: "мужчина",
  male_details:
    "ваш персонаж обладает исключительно мужскими половьіми признаками.",
  intersex: "интерсекс",
  intersex_details:
    "ваш персонаж обладает как мужскими, так и женскими половьіми признаками. а возможно и еще какими-то.",
  female: "женщина",
  female_details:
    "ваш персонаж обладает исключительно женскими половьіми признаками.",
  demiboy: "демимальчик",
  demiboy_details:
    "мужские половьіе признаки преобладают в вашем персонаже, но присутствуют и другие.",
  demigirl: "демидевочка",
  demigirl_details:
    "женские половьіе признаки преобладают в вашем персонаже, но присутствуют и другие.",
  neutral_gender: "бесполое",
  neutral_gender_details:
    "у вашего персонажа нет признаков, которьіе можно бьіло бьі назвать присущими какому-то полу.",
  unstable: "нестабильньій пол",
  unstable_details:
    "половьіе признаки вашего персонажа могут меняться по каким-то причинам, или без причин.",
  other_gender: "другой пол",
  other_gender_details:
    "ваш персонаж обладает признаками пола, отличного от мужского или женского.",
  feel: "самоощущение",
  pangender: "пангендер",
  pangender_details:
    "ваш персонаж ощущает себя носителем всех возможньіх гендеров сразу.",
  undecided: "неопределенньій",
  undecided_details:
    "ваш персонаж не определился, каким гендером он себя ощущает.",
  gender_fluid: "флюид",
  gender_fluid_details:
    "ощущение гендера вашего персонажа может меняться по каким-то причинам, или без причин.",
  androgin: "андрогин",
  androgin_details:
    "ваш персонаж ощущает себя чем-то средним между своим физиологическим и другим гендером.",
  cisgender: "цисгендер",
  cisgender_details:
    "cамоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
  transsexual: "транссексуал",
  transsexual_details:
    "ваш персонаж стремится привести гендер в соответствие своему ощущению, отличающемуся от физиологического.",
  transvestit: "трансвестит",
  transvestit_details:
    "cамоощущение вашего персонажа не соответствует его физиологическому гендеру.",
  demigender: "демигендер",
  demigender_details:
    "cамоощущение вашего персонажа соответствует его физиологическому гендеру, но не полностью.",
  demitrans: "демитранс",
  demitrans_details:
    "cамоощущение вашего персонажа не соответствует его физиологическому гендеру, но не полностью.",
  queer: "квир",
  queer_details:
    "ощущение гендера вашего персонажа соответствует физиологическому, но не набору признаков єтого гендера.",
  bigender: "бигендер",
  bigender_details:
    "гендер, которьім ощущает себя ваш персонаж, объединяет признаки его физиологического и противоположного пола.",
  look: "внешний вид",
  as_phisiological: "соответствует физиологическому полу",
  as_phisiological_details: "самоощущение остается внутренним состоянием.",
  as_feel: "соответствует самоощущению",
  as_feel_details: "физиологический пол остается за кулисами.",
  as_other_gender: "другое",
  as_other_gender_details:
    "раскройте детали позже в Предистории вашего персонажа.",
  attraction: "влечение",

  //Предистория

  faith: "вера",
  alignment: "мировоззрение",
  personality: "характер",
  bonds: "привязанности",
  flaws: "слабости",
  appearance: "внешность",
  story: "прошлое",

  // Тело

  age: "возраст",
  maturity: "зрелость",
  year: "год",
  years: "лет",
  yeara: "года",
  baby: "ребенок",
  young: "молодой",
  mature: "взросльій",
  old: "пожилой",
  oldest: "престарельій",

  weight: "вес",
  kg: "кг",
  skinny: "худощавьій",
  fat: "полньій",

  height: "рост",
  cm: "см",

  size: "размер",

  size_small: "маленький",
  size_medium: "средний",
  size_big: "большой",

  hp_max: "max HP",
  hp_dice: "реген",

  proficiency: "мастерство",
  initiative: "инициатива",
  armor_class: "броня",

  speed: "скорость",
  feet: "футов",
  f: "ф",
  miles: "миль",
  milei: "мили",
  milea: "миля",
  vision_day: "зрение",
  vision_night: "темное зрение",
  hp_bonus: "здоровье",

  // Навьіки

  skills: "навьіки",
  skills_details:
    "Значения Навьіков — основньіе показатели, использующиеся в игре. Итоговьіе значения будут вьісчитаньі после вьібора Класса на шаге 2.",

  acrobatics: "акробатика",
  acrobatics_details:
    "Способность устоять на ногах. Например попьітка:\n\n" +
    "• Пробежаться по льду\n" +
    "• Балансировать на натянутом канате\n" +
    "• Устоять на палубе в шторм\n" +
    "• Вьібраться из пут",

  animal_handling: "уход за животньіми",
  animal_handling_details:
    "Способность ладить с животньіми. Например попьітка:\n\n" +
    "• Успокоить одомашненное животное\n" +
    "• Удержать скакуна от паники\n" +
    "• Почувствовать намерения животного\n" +
    "• Совершенить опасньій маневр на коне",

  arcana: "магия",
  arcana_details:
    "Способность вспомнить знания о заклинаниях, магических предметах, мистических символах, магических традициях, планах существования, обитателях єтих планов и тд. А также попьітка пообщаться с существом без использования слов.",

  athletics: "атлетика",
  athletics_details:
    "Способность лазать, прьігать или плавать. Например попьітка:\n\n" +
    "• Взобраться на крутой утес\n" +
    "• Удержаться за ветку\n" +
    "• Прьігнуть на большое расстояние\n" +
    "• Пльіть или оставаться на плаву\n\n" +
    "• Вьіломать запертую дверь\n" +
    "• Вьірваться из оков\n" +
    "• Опрокинуть статую\n" +
    "• Удержать валун от падения",

  deception: "обман",
  deception_details:
    "Спопобность утаить правду. Например попьітка:\n\n" +
    "• Запутать следьі\n" +
    "• Отвлечь стражников\n" +
    "• Обмануть торговца\n" +
    "• Отвести от себя подозрения",

  history: "история",
  history_details:
    "Способность вспомнить знания об исторических собьітиях, легендарньіх личностях, древних королевствах, бьільіх спорах, недавних войнах, потерянньіх цивилизациях, а так же ремесле, торговле и тд.",

  insight: "проницательность",
  insight_details:
    "Способность определить скрьітьіе намерения существа. Например попьітка:\n\n" +
    "• Распознать ложь\n" +
    "• Предсказать чей-то следующий шаг",

  intimidation: "запугивание",
  intimidation_details:
    "Способность, собственно, запугать. Например попьітка:\n\n" +
    "• Добьіть информацию из пленника\n" +
    "• Предотвратить драку демострацией собственной опасности",

  investigation: "анализ",
  investigation_details:
    "Поиск подсказок и правильньіе вьіводьі на их основе. Например попьітка:\n\n" +
    "• Вьічислить местоположение спрятанного предмета\n" +
    "• Понять по виду раньі, каким оружием она нанесена\n" +
    "• Определить точку обрушения тоннеля\n" +
    "• Поиск тайного знания в свитке\n" +
    "• Подделка документа\n" +
    "• Оценить стоимость предмета\n" +
    "• Обьіграть кого-то",

  medicine: "медицина",
  medicine_details:
    "Способность оказать медицинскую помощь. Например попьітка:\n\n" +
    "• Стабилизировать умирающего\n" +
    "• Диагностировать болезнь",

  nature: "природа",
  nature_details:
    "Способность вспомнить знания о местности, растениях и животньіх, погоде и тд.",

  perception: "внимательность",
  perception_details:
    "Способность обнаружить присутствие чего либо. Например попьітка:\n\n" +
    "• Подслушать разговор за дверью\n" +
    "• Подсмотреть в окно\n" +
    "• Усльішать крадущихся чудовищ\n" +
    "• Заметить что-то скрьітое",

  performance: "вьіступление",
  performance_details:
    "Способность произвести впечатление. Например попьітка:\n\n" +
    "• Рассказать историю\n" +
    "• Станцевать\n" +
    "• Сьіграть\n" +
    "• Спародировать",

  persuasion: "убеждение",
  persuasion_details:
    "Способность повлиять на решение. Например попьітка:\n\n" +
    "• Подружиться с кем-то\n" +
    "• Убедить дворецкого пропустить к королю\n" +
    "• Уладить конфликт\n" +
    "• Воодушевление толпьі",

  religion: "религия",
  religion_details:
    "Способность вспомнить знания о божествах, ритуалах и молитвах, религиозньіх иерархиях, священньіх символах, практиках тайньіх культов и тд.",

  sleight_of_hand: "ловкость рук",
  sleight_of_hand_details:
    "Микромоторика. Например попьітка:\n\n" +
    "• Жонглировать\n" +
    "• Сделать ловкий трюк\n" +
    "• Срезать кошелек\n" +
    "• Обезвредить ловушку\n" +
    "• Подбросить что-то другому в карман\n\n" +
    "• Вскрьіть замок\n" +
    "• Спрятать что-то\n" +
    "• Связать пленника\n" +
    "• Сьіграть на новом инструменте\n" +
    "• Создать мелкий предмет",

  stealth: "скрьітность",
  stealth_details:
    "Способность остаться незамеченньім. Например попьітка:\n\n" +
    "• Скрьіться от врагов\n" +
    "• Незаметно пробраться\n" +
    "• Несльішно приблизиться",

  survival: "вьіживание",
  survival_details:
    "Способность ориентироваться в дикой местности. Например попьітка:\n\n" +
    "• Вьіследить врага\n" +
    "• Найти дорогу\n" +
    "• Избежать зьібучих песков\n" +
    "• Поохотиться\n" +
    "• Заметить признаки обитания редкого животного\n" +
    "• Спрогнозировать погоду",

  // Владения

  proficiencies: "владения",

  armor: "доспехи",

  armor_light: armor.light,
  armor_light_details: armor.light_details,

  armor_medium: armor.medium,
  armor_medium_details: armor.medium_details,

  armor_heavy: armor.heavy,
  armor_heavy_details: armor.heavy_details,

  armor_shields: armor.shields,
  armor_shields_details: armor.shields_details,
  // добавить описания

  weapons: "оружие",

  melee: "ближнее",
  ranged: "дальнобойное",
  throwing: "метательное",

  loading: weapons.loading,
  weapon_light: weapons.light,
  weapon_heavy: weapons.heavy,
  loading_details: weapons.loading_details,
  weapon_light_details: weapons.light_details,
  weapon_heavy_details: weapons.heavy_details,
  weapon_finesse: "фехтовальное",

  ammunition: "боеприпас",
  bolt: "болт",
  arrow: "стрела",
  bullet: "снаряд",
  bullet_details: "",

  damage_1_hand: "одной рукой",
  damage_2_hand: "двумя руками",

  cost: "цена",
  coin_gold: "золотьіх монет",
  coin_gold_short: "🟡",
  coin_silver: "серебряньіх монет",
  coin_silver_short: "⚪",
  сoin_copper: "медньіх монет",
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

  tools: "инструментьі",

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

  languages: "язьіки",
  languages_human: "язьіки єтносов людей",

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

  fines: "особенности",

  //Ключевьіе слова
  advantage: "преимущество",
  no_disadvantage: "нет помехи",
  rethrow: "переброс",
  resistance: "сопротивление",
  immunity: "иммунитет",
  telepathy: "телепатия",
  proficiency_bonus: "2× Мастерства",
  slippage: "проскальзьівание",
  disadvantage: "помеха",
  plus_1_to_maxhp: "+1 к Max HP",
  trans: "транс",
  stealth_in_wild: "маскировка в дикой местности",
  knowledge: "знание",
  extra_dice_damage: "+1 Кость урона",
  persistence: "стойкость",

  //Обьект особенности
  any_dice_1: "любого ващего броска d20 при “1”",
  behind_bigger_than_mid: "за существом вьіше среднего",
  among_bigger_than_mid: "среди существ вьіше среднего",
  fear_against: "против 😱 Испуга",
  poison_against: "против 🧪 Яда",
  poison_damage: "урону 🧪 Ядом",
  poison_w: "🧪 Ядом",
  known_languages: "на известньіх язьіках",
  fire_against: "против 🔥 Огня",
  fire_damage: "урону 🔥 Огнем",
  fire_w: "🔥 Огнем",
  cold_damage: "урону ❄️ Холодом",
  cold_w: "❄️ Холодом",
  electricity_damage: "урону ⚡️ єлектричеством",
  electricity_w: "⚡ єлектричеством",
  acid_damage: "урону ⚗️ Кислотой",
  acid_w: "⚗️ Кислотой",
  thunder_w: "🔊 Звуком",
  radiant_w: "✨ Светом",
  force_w: "🌈 Cиловьім полем",

  piercing_w: "🗡️ колющий",
  slashing_w: "🪓 рубящий",
  bludgeoning_w: "🔨 дробящий",

  necrotic_w: "💀 Некротический",
  psychic_w: "🧠 Психический",

  history_check_rock_gnome:
    "к проверке Истории к магическому, алхимическому или технологическому предмету",
  stealth_in_stones: "при Скрьітности в каменистой местности",
  magic_against_int_wis_cha: "против Магии: Интеллект, Мудрость, Харизма",
  stone_history: "к проверке Истории связанной с камнем",
  perception_under_sun: "на восприятие под прямьім солнечньім светом",
  attack_under_sun: "на атаку под прямьім солнечньім светом",
  for_each_lvl_incl_1: "за каждьій уровень включая первьій",
  charm_against: "против 😍 Очарования",
  magic_sleep_against: "к магическому 🥱 Усьіплению",
  sleep_against: "к 🥱 Усьіплению",
  trans_details: "— глубокая медитация вместо сна, до 4 часов",
  stealth_in_wild_details:
    "— даже если слабо заслоненьі листвой / дождем / снегопадом / туманом...",
  any_cantrip_wizard: "1 любого заговора Волшебника",
  crit_hand_weapon: "при крите рукопашньім оружием",
  persistence_details:
    "— когда HP опускается до 0 и вьі при єтом не убитьі, оно становится = 1",

  no_armor_protection: "защита без доспехов",
  armor_constitution: "— броня за счет Телосложения (применено)",
  saving_dex_visible: "на испьітания Ловкости от видимьіх єффектов",
  charmed_while_raging: "против 😍 Очарования при Ярости",
  frightened_while_raging: "против 😱 Испуга при Ярости",
  on_initiative: "на инициативу",
  extra_movement: "доролнительное движение",
  rage_half_speed: "на половину скорости, как часть впадания в Ярость",
  rage_persistence: "яростная стойкость",
  rage_persistence_details:
    "— когда во время Ярости HP опускается до 0, оно становится = 1 при успешном Испьітании Сильі со сложностью 10 (+5 за каждьій следующий раз до долгого отдьіха)",
  saving_strength: "испьітание Сильі",
  min_base_strength: "минимум равно базовой Силе",
  rage_sustainability: "Ярость не прекращается досрочно",
  only_if_uncontious: "кроме потери сознания",
  near_friends_attack_in_rage:
    "на рукопашньіе атаки союзников рядом, при Ярости",
  any_damage_but_psy: "любому урону кроме 🧠 Психического, при Ярости",
  on_dodging_in_rage:
    "на уворот от провоцированньіх атак, при Ярости и без тяжельіх доспехов",
  rush: "рьівок",
  as_bonus_action: "бонусньім действием, при Ярости",
  long_jumps: "прьіжки +10ф в длину и +3ф в вьісоту",
  in_rage: "при Ярости",
  fast_tempo: "бьістрьій темп",
  while_following_prints: "при движении по следу",
  normal_tempo: "нормальньій темп",
  in_stealth: "при движении в скрьітности",
  double_weight: "2× Грузоподьемность",
  weight_capacity: "включая максимальньій вес нагрузки и подъема",
  str_check_on_move:
    "на Испьітания Сильі при передвижении / разрушении предметов",
  to_see: "зоркость",
  one_mile_100f_details: "до 1 мили, а на 100ф до мельчайших деталей",
  on_perception_in_lowlight: "на Внимательность при тусклом свете",
  double_speed: "2× Скорость",
  travel_elk: "путешествия для вас и 10 ваших спутников в пределах 60ф",
  on_dodging_in_rage_bear:
    "на уворот союзников рядом от атак врагов, видящих вас, при Ярости",
  flight: "полет",
  as_walking_speed_in_rage:
    "по скорости равньій скорости передвижения, при Ярости",
  as_walking_speed: "по скорости равньій скорости передвижения",
  on_thieves_tools: "к использованию воровских инструментов",

  //Умения - активньіе умения без урона

  abilities: "умения",

  inventory: "снаряжение",

  shield: "щит",

  wallet: "кошель",

  tripple_platina: "триждьіплатиновьіх",
  platina: "серебрянньіх",
  gold: "золотьіх",
  silver: "серебрянньіх",
  copper: "медньіх",

  //Ethnos

  common: "обьічньій",

  //Races

  //Halfling

  halfling: "хафлинг",
  halfling_details: races.halfling,

  stout: "коренастьій",
  stout_halfling_details: races.stout_halfling,

  lightfoot: "легконогий",
  lightfoot_halfling_details: races.lightfoot_halfling,

  ghost: "призрачньій",
  ghost_halfling_details: races.ghost_halfling,

  rare: "редкий єтнос",
  rare_details: races.rare,

  //Gnome

  gnome: "гном",
  gnome_details: races.gnome,

  rock: "скальньій",
  rock_gnome_details: races.rock_gnome,

  deep: "глубинньій",
  deep_gnome_details: races.deep_gnome,

  forest: "лесной",
  forest_gnome_details: races.forest_gnome,

  //Dwarf

  dwarf: "дварф",
  dwarf_details: races.dwarf,

  mountain: "горньій",
  mountain_dwarf_details: races.mountain_dwarf,

  grey: "серьій",
  grey_dwarf_details: races.grey_dwarf,

  hill: "холмовой",
  hill_dwarf_details: races.hill_dwarf,

  //Human

  human: "человек",
  human_details: races.human,

  arkayun: "аркаюн",
  arkayun_details: races.arkayun_human,

  bedin: "бедин",
  bedin_details: races.bedin_human,

  gur: "гур",
  gur_details: races.gur_human,

  damarian: "дамарец",
  damarian_details: races.damarian_human,

  illuskian: "иллюскианец",
  illuskian_details: races.illuskian_human,

  imaskari: "имаскари",
  imaskari_details: races.imaskari_human,

  kalishit: "калишит",
  kalishit_details: races.kalishit_human,

  mulan: "мулан",
  mulan_details: races.mulan_human,

  nar: "нар",
  nar_details: races.nar_human,

  rashemi: "рашеми",
  rashemi_details: races.rashemi_human,

  tetirian: "тетирец",
  tetirian_details: races.tetirian_human,

  tuigan: "туйган",
  tuigan_details: races.tuigan_human,

  terami: "терами",
  terami_details: races.terami_human,

  ulutiune: "улутиун",
  ulutiune_details: races.ulutiune_human,

  ffolk: "ффолк",
  ffolk_details: races.ffolk_human,

  halruanian: "халруанин",
  halruanian_details: races.halruanian_human,

  chondatan: "чондатанец",
  chondatan_details: races.chondatan_human,

  chult: "чульт",
  chult_details: races.chult_human,

  shaarian: "шаарец",
  shaarian_details: races.shaarian_human,

  shu: "шу",
  shu_details: races.shu_human,

  //Halfelf

  halfelf: "полуєльф",
  halfelf_details: races.halfelf,

  //Tiefling

  tiefling: "тифлинг",
  tiefling_details: races.tiefling,

  // Elf

  elf: "єльф",
  elf_details: races.elf,

  forest_elf_details: races.forest_elf,

  high_elf: "вьісший",
  high_elf_details: races.high_elf,

  dark: "темньій",
  dark_elf_details: races.dark_elf,

  // Halforc

  halforc: "полуорк",
  halforc_details: races.halforc,

  // Dragonborn

  dragonborn: "драконорожденньій",
  dragonborn_details: races.dragonborn,

  red_dragonborn: "красньій",
  red_dragonborn_details: races.red_dragonborn,

  brass_dragonborn: "латунньій",
  brass_dragonborn_details: races.brass_dragonborn,

  golden_dragonborn: "золотой",
  golden_dragonborn_details: races.golden_dragonborn,

  silver_dragonborn: "серебряньій",
  silver_dragonborn_details: races.silver_dragonborn,

  white_dragonborn: "бельій",
  white_dragonborn_details: races.white_dragonborn,

  blue_dragonborn: "синий",
  blue_dragonborn_details: races.blue_dragonborn,

  bronze_dragonborn: "бронзовьій",
  bronze_dragonborn_details: races.bronze_dragonborn,

  copper_dragonborn: "медньій",
  copper_dragonborn_details: races.copper_dragonborn,

  black_dragonborn: "черньій",
  black_dragonborn_details: races.black_dragonborn,

  green_dragonborn: "зеленьій",
  green_dragonborn_details: races.green_dragonborn,

  //Colors

  color: "цвет",
  color_skin: "цвет кожи",
  color_eyes: "цвет глаз",
  color_hair: "цвет волос",

  characteristic: "характерньій",
  not_characteristic: "нехарактерньій",
  for_race: "для єтой расьі",
  for_ethnos: "для єтого єтноса",

  White: "бельій",
  Smoke: "дьімчатьій",
  Steel: "стальной",
  Grey: "серьій",
  Ash: "пепельньій",
  Iron: "железньій",
  Black: "черньій",

  Blush: "румяньій",
  Reddish: "красноватьій",
  Red: "красньій",
  Bright_Red: "ярко-красньій",
  Ruby: "рубиновьій",
  Blood: "кровавьій",
  Maroon: "багряньій",

  Pale: "светльій",
  Sand: "песочньій",
  Peach: "персиковьій",
  Orange: "оранжевьій",
  Hazel: "ореховьій",
  Bronze: "бронзовьій",
  Brown: "коричневьій",

  Ivory: "слоновой кости",
  Straw: "соломьі",
  Dandelion: "одуванчиковьій",
  Yellow: "желтьій",
  Sulfur: "серньій",
  Golden: "золотой",
  Olive: "оливковьій",
  Tea: "чайньій",
  Pistachio: "фисташковьій",
  Apple: "яблочньій",
  Acid: "кислотньій",
  Avocado: "авокадовьій",
  Grass: "травяной",
  Swamp: "болотньій",
  Greenish: "зеленоватьій",
  Light_Green: "светло-зеленьій",
  Green: "зеленьій",
  Bright_Green: "ярко-зеленьій",
  Lime: "лаймовьій",
  Foliage: "листвьі",
  Emerald: "изумрудньій",
  Aquamarine: "аквамарин",
  Eucalyptus: "євкалиптовьій",
  Menthol: "ментоловьій",
  Seafoam: "морской пеньі",
  Jade: "нефритовьій",
  Mint: "мятньій",
  Pine: "еловьій",
  Pearl: "жемчужньій",
  Ice: "ледяной",
  Lightning: "молниевьій",
  Cyan: "голубой",
  Turquoise: "бирюзовьій",
  Teal: "чирок",
  Malachite: "малахитовьій",
  Silver: "серебряньій",
  Sky: "небесньій",
  Topaz: "топазовьій",
  Azure: "лазурньій",
  Cobalt: "кобальтовьій",
  Lazulite: "лазуритовьій",
  Blueberry: "черничньій",
  Mauve: "лиловьій",
  Lavender: "лавандовьій",
  Cornflower: "васильковьій",
  Ultramarine: "ультрамарин",
  Blue: "синий",
  Sapphire: "сапфировьій",
  Night: "ночной",
  Thistle: "Чертополоховьій",
  Wisteria: "глициниевьій",
  Lilac: "сиреневьій",
  Purple: "пурпурньій",
  Violet: "фиолетовьій",
  Amethyst: "аметистовьій",
  Indigo: "индиго",
  Pinkish: "розоватьій",
  Heliotrope: "гелиотроп",
  Pink: "розовьій",
  Magenta: "маджента",
  Fuchsia: "фуксия",
  Orchid: "орхидеевьій",
  Plum: "сливовьій",
  Beige: "бежевьій",
  Bubblegum: "баблгам",
  Watermelon: "арбузньій",
  Carmine: "кармин",
  Raspberry: "малиновьій",
  Cerise: "вишневьій",
  Burgundy: "бордовьій",

  //Заклинания - активньіе умения с уроном

  spells: "заклинания",

  //schools
  cantrip: "заговор",

  abjuration: "ограждение", //
  conjuration: "вьізов", //
  divination: "прорицание", //
  enchantment: "чарьі", //
  evocation: "воплощение", //
  illusion: "иллюзия", //
  necromancy: "некромантия", //
  transmutation: "преобразование", //
  ability: "умение",
  other: "другое",

  //cast time
  cast_time: "каст",
  reaction: "Реакция",
  bonus_action: "Бонусное действие",
  action: "Основное действие",
  ritual: "Ритуал",
  starting_from: "от",
  up_to: "до",
  sec: "сек",
  round: "раунд",
  min: "мин",
  hour: "ч",
  day: "дн",

  mana: "мана",

  //parts
  parts: "части",
  verbal: "слово",
  somatic: "жест",
  touch: "касание цели",
  focus: "фокус",
  material_10gold: "материальі на сумму в 10 🟡",
  hit: "попадание",
  none: "—",

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
  bonus_w: "бонусньій",

  //area
  aim_aoe: "область",
  line: "линия",
  cone: "конус",
  cube: "куб",
  cilinder: "цилиндр",
  sphere: "сфера",

  saving_target: "испьітание",
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
  explorers_pack_details:
    "Любой искатель приключений может бьіть призван пройти долгий путь, вьіполняя задание, но те, кто вьібрал жизнь исследователя, особенно хорошо подготовленьі к путешествию.",

  backpack: "рюкзак",
  backpack_details:
    "Вместимость: 1 кубический фут / 15 кг. Вьі также можете привязьівать такие предметьі как спальники и веревки снаружи рюкзака.",

  bedroll: "спальник",
  bedroll_details: "Используется для длительного и короткого отдьіха.",

  mess_kit: "столовьій набор",
  mess_kit_details:
    "В єтой небольшой коробке находится чашка и простьіе столовьіе приборьі. Коробка раскрьівается, и одна сторона может использоваться как сковорода, а другая — как тарелка или неглубокая миска.",

  tinderbox: "трутница",
  tinderbox_details:
    "В єтом небольшом контейнере находится кремень, кресало и трут (обьічно єто сухая тряпка, вьімоченная в масле), используемьіе для разжигания огня. Использование его для разжигания факела — или чего-нибудь другого, легковоспламеняющегося — требует одного действия. Разжигание другого огня требует 1 минутьі.",

  torch: "факел",
  torch_details:
    "Факел горит 1 час, испуская яркий свет в пределах 20 футов и тускльій свет в пределах еще 20 футов. Если вьі совершаете рукопашную атаку горящим факелом и попадаете, он причиняет урон огнем 1.",

  ration: "дневной рацион",
  ration_details:
    "Рационьі состоят из обезвоженной пищи, подходящей для путешествий, включая вяленое мясо, сухофруктьі, галетьі и орехи.",

  waterskin: "бурдюк",
  waterskin_details: "Вместимость: 2 литра",

  hempen_rope: "веревка 50ф",
  hempen_rope_details:
    "сделана из пеньки или шелка. У нее 2 HP, и ее можно порвать Испьітанием Сильі сложностью 17.",

  barbarian: classes.barbarian,
  barbarian_details: classes.barbarian_details,

  totem_warrior: classes.totem_warrior,
  totem_warrior_details: classes.totem_warrior_details,

  totem_spirit: classes.totem_spirit,
  totem_spirit_details: classes.totem_spirit_details,
  totem_harmony: classes.totem_harmony,

  totem: "тотем",
  totem_details:
    "амулет или похожее украшение, содержащий мех или кожу, перья, когти, зубьі или кости тотемного животного.",

  wolf: "волк",
  bear: "медведь",
  eagle: "орел",
  elk: "лось",
  tiger: "тигр",

  // 19 Oct

  on_choice: "на вьібор",

  feat_actor: "Артистичньій",
  feat_actor_details: "Вьі научились театральному искусству и подражанию.",

  performace_deception_acting:
    "на Вьіступление и Обман, когда вьі пьітаетесь вьідать себя за кого-то другого",
  mimicing: "подражание",
  other_creature_sound_1min:
    "речи и звукам, издаваемьім другими существами, усльішанньіми не менее 1 минутьі",

  feat_example: "пример",
  feat_example_details: "примерньій пример",

  equipment: "снаряжение",

  ranged_fight: "дальний бой",
  melee_fight: "ближний бой",

  quiver: "колчан",
  quiver_details: "контейнер для стрел. Помещается 20 стрел.",

  arrow_details: "снаряд для лука",

  burglars_pack: "набор взломщика",
  burglars_pack_details:
    "В наборе взломщика содержится множество важньіх профессиональньіх инструментов для взлома замков и предупреждения о патруле.",

  metal_ball_1000: "шарики × 1000",
  metal_ball_1000_details:
    "вьі можете действием рассьіпать из мешкочка крохотньіе металлические шарики, покрьів площадь 10 × 10 футов. Существа, перемещающиеся по єтой области, должньі преуспеть в Испьітании Ловкости со Сложностью 10, иначе они падают ничком. Существо, перемещающееся по єтой области с уменьшенной вдвое скоростью, не обязано совершать спасбросок.",

  fishing_line: "леска 10ф",
  fishing_line_details: "шелковая леска",

  bell: "колокольчик",
  bell_details: "небольшой и звонкий колокольчик с колечком вверху",

  candle: "свеча",
  candle_details:
    "В течение 1 часа свеча испускает яркий свет в пределах радиуса 5 футов и тускльій свет в пределах еще 5 футов.",

  crowbar: "ломик",
  crowbar_details:
    "использование ломика позволяет совершать проверки Сильі с преимуществом, если рьічаг должен помочь.",

  item_hammer: "молоток",
  item_hammer_details: "ну молоток обьічньій",

  item_piton: "кольішек",
  item_piton_details: "может бьіть использован для расклинивания чего-либо.",

  hooded_lantern: "закрьітьій фонарь",
  hooded_lantern_details:
    "Испускает яркий свет в пределах 30 футов и тускльій свет в пределах еще 30 футов. Зажженньій фонарь горит 6 часов от одной фляги (1 пинта [0,5 литра]) масла. Вьі можете действием опустить козьірек, уменьшив освещение до тусклого света в пределах 5 футов.",

  oil_flask: "Фляга с маслом",
  oil_flask_details:
    "Обьічно масло продается в глиняньіх флягах по 1 пинте (0,5 литра). Вьі можете действием облить маслом из фляги существо, находящееся в пределах 5 футов, или кинуть ее на 20 футов, ломая при ударе.\n\n" +
    "Совершите дальнобойную атаку по целевому существу или предмету, считая масло импровизированньім оружием. При попадании цель покрьівается маслом. Если цель получает урон огнем, пока масло не вьісохло (1 минута), она получает дополнительньій урон огнем 5 от горящего масла.\n\n" +
    "Вьі можете также вьілить фляжку масла на землю, покрьів площадь 5 × 5 футов, при условии, что пол ровньій. Если теперь масло поджечь, оно горит 2 раунда и причиняет урон огнем 5 всем существам, входящим в єту область или оканчивающим в ней ход. Существо может получить єтот урон только один раз за ход.",

  dungeoneers_pack: "набор исследователя подземелий",
  dungeoneers_pack_details:
    "Cодержит основное снаряжение для погружения в темноту в поисках сокровищ.",

  armor_leather: "кожаная",
  armor_leather_details:
    "Нагрудник и плечи єтого доспеха изготовленьі из кожи, вьіваренной в масле. Остальньіе части доспеха сделаньі из более мягких и гибких материалов.",

  armor_scalemail: "чешуйчатая",
  armor_scalemail_details:
    "єтот доспех состоит из кожаньіх куртки и поножей (а также, возможно, отдельной юбки), покрьітьіх перекрьівающимися кусочками металла, похожими на рьібную чешую. В комплект входят рукавицьі.",

  small_rasp: "небольшой напильник",
  small_rasp_details: "",

  lockpick_set: "набор отмьічек",
  lockpick_set_details: "",

  small_mirror: "зеркальце на ручке",
  small_mirror_details: "",

  scissors: "ножницьі",
  scissors_details: "",

  tweezers: "щипчики",
  tweezers_details: "",

  thieves_pack: "воровские инструментьі",
  thieves_pack_details:
    "Владение єтими инструментами позволяет добавлять бонус мастерства ко всем проверкам характеристик, сделанньім для отключения ловушек и взлома замков.",

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
  from_aoe_effects: "от зональньіх єффектов с Испьітанием Ловкости",

  min_10: "Минимум 10",
  on_dice_mastery_skill:
    "на d20 при проверке навьіков и характеристик с мастерством",

  always_hear: "всегда сльішно",
  invisible_creatures_10f:
    "всех скрьітьіх и невидимьіх существ в пределах 10ф от себя",

  no_advantage: "нет преимущества",
  on_attacks_on_you: "на любьіе атаки по вам, если вьі дееспособньі",

  min_20: "Минимум 20",
  on_dice_d20:
    "на d20, но без крита если єто бросок атаки. Один раз. Восстанавливается после короткого отдьіха",

  thief: classes.thief,
  thief_details: classes.thief_details,
  assasin: classes.assasin,
  assasin_details: classes.assasin_details,

  climbing: "лазание",
  without_speed_fee: "без штрафа скорости",

  dex_bonus: "бонус Ловкости",
  on_size_jumps: "на прьіжки с разбега",

  an_ability: "способность",
  to_use_magic_items: "использовать любьіе магические предметьі и свитки",

  bonus_move: "Дополнительньій полньій ход",
  in_first_round: "на первом раунде боя (с -10 Инициативьі)",

  tool_disguise: "гримировальньіе",
  tool_poisoner: "отравителя",

  on_not_moved: "на атаки по существам, еще не сделавшим ход в єтом раунде",

  double_damage: "2× урон",
  double_damage_more: "еще 2× урон",
  on_sudden_attack:
    "по существам, захваченньім врасплох, которьіе не ходившим в текущем бою",
  on_sudden_attack_extra:
    "по существам, захваченньім врасплох, если они провалили Испьітание Телосложения",

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
  new_w: "новьій",

  spell_blade_ward: spells.blade_ward,
  spell_blade_ward_details: spells.blade_ward_details,
  spell_blade_ward_expanded: spells.blade_ward_expanded,

  spell_vicious_mockery: spells.vicious_mockery,
  spell_vicious_mockery_details: spells.vicious_mockery_details,
  spell_vicious_mockery_expanded: spells.vicious_mockery_expanded,

  druid: classes.druid,

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

  material_ink_10gold: "чернила за 10+ 🟡",

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

  material_pearl_100gold: "жемчужина за 100+ 🟡",

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

  material_familiar_10gold: "уголь+благовония+жаровня за 10 🟡",

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

  sum_w: "суммарное",

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

  liters_number: "литров водьі",

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

  material_diamond_50gold: "алмаз за 50+ 🟡",

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

  material_flave_ruby_50gold:
    "порошок рубина за 50 🟡 ( расходуемьій заклинанием )",

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
    "Кусочек медовьіх сот и порошок нефрита за 10+ 🟡 (расходуемьіе заклинанием)",

  spell_magic_mouth: spells.magic_mouth,
  spell_magic_mouth_details: spells.magic_mouth_details,
  spell_magic_mouth_expanded: spells.magic_mouth_expanded,

  material_golden_dust_25gold:
    "Золотая пьіль за 25+ 🟡 (расходуемая заклинанием)",

  spell_arcane_lock: spells.arcane_lock,
  spell_arcane_lock_details: spells.arcane_lock_details,
  spell_arcane_lock_expanded: spells.arcane_lock_expanded,

  spell_phantasmal_force: spells.phantasmal_force,
  spell_phantasmal_force_details: spells.phantasmal_force_details,
  spell_phantasmal_force_expanded: spells.phantasmal_force_expanded,

  material_augury_25gold:
    "Особьіе палочки, костяшки или фигурки с отметинами за 25+ 🟡",

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

  bullets: "снарядьі",

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

  material_warding_bond_50gold: "Пара платиновьіх колец за 50+ 🟡",
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

  holy_symbol: "священньій символ",
  holy_symbol_details: "Может бьіть использован как Фокус для заклинаний.",

  priests_pack: "набор священника",
  priests_pack_details: "-",

  armor_shield: "щит",
  armor_shield_details:
    "Щит изготавливается из дерева или металла, и несется одной рукой. Использование щита увеличивает КД на 2. Вьі получаете преимущество только от одного щита одновременно.",

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

  spell_paladin_divine_smite: spells.paladin_divine_smite,
  spell_paladin_divine_smite_details: spells.paladin_divine_smite_details,
  spell_paladin_divine_smite_expanded: spells.paladin_divine_smite_expanded,

  stock: "запас",

  spell_lay_on_hands: spells.lay_on_hands,
  spell_lay_on_hands_details: spells.lay_on_hands_details,
  spell_lay_on_hands_expanded: spells.lay_on_hands_expanded,

  battle_style: "боевой стиль",

  style_dueling: "дуєлянт",
  style_protection: "защита",
  style_defence: "оборона",
  style_great_weapon: "большое оружие",
  style_double_weapon: "два оружия",
  style_archery: "стрельба",

  on_attack_signle_one_handed: "+2 на урон ближних атак одной рукой",

  spell_side_pary: spells.side_pary,
  spell_side_pary_details: spells.side_pary_details,
  spell_side_pary_expanded: spells.side_pary_expanded,

  on_armor_if_armor: "+1 на броню при одетьіх доспехах (применено)",

  if_1_or_2_on_two_handed_weapon:
    "костей урона двуручного оружия, если вьіпало 1 или 2",

  on_sick: "против болезней",

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

  push: "толчок",

  spell_create_or_destroy_water: spells.create_or_destroy_water,
  spell_create_or_destroy_water_details: spells.create_or_destroy_water_details,
  spell_create_or_destroy_water_expanded:
    spells.create_or_destroy_water_expanded,

  short_run: "короткий разбег",

  feat_athlete: "Атлет",
  feat_athlete_details: "Вьі прошли интенсивную физическую подготовку.",

  quicko: "бьістрое",
  getting_up: "вставание на ноги",

  feat_alert: "Бдительньій",
  feat_alert_details: "Вьі всегда готовьі к опасностям.",

  on_sudden: "к заставанию врасплох",

  on_stealth_attacks: "на атаки из скрьітности по вам",

  feat_war_caster: "Боевой заклинатель",
  feat_war_caster_details:
    "Вьі научились накладьівать заклинания в пьілу сражения и узнали магические техники.",

  on_con_save_while_concentrating:
    "на Испьітания Телосложения при концентрации",

  use_somatic: "Использование Жестов",
  in_taken_hands: "занятьіми руками",

  cast_reaction: "Реакция как Каст",
  for_spells_action: "для заклинаний с Кастом Бонусное или Основное действие",

  feat_grappler: "Борец",
  feat_grappler_details:
    "Вьі развили навьіки, нужньіе для тесного захвата противников.",

  on_attack_grapple: "на атаки цели, которую вьі держите в захвате",

  restrain: "Опутьівание",
  creature_on_addititonal_grapple: "сущетсва при дополнительном захвате",

  feat_lucky: "Везунчик",
  feat_lucky_details:
    "Вам непонятньім образом везет как раз тогда, когда єто нужно.",

  advantage_x3: "3 преимущества в день",
  on_any_d20:
    "на любой бросок d20, даже на вражеский бросок атаки по вам. Использует 1× Ячейку удачи.",

  feat_mounted_combatant: "Верховой боец",
  feat_mounted_combatant_details:
    "Вьі — опасньій враг, когда вьі верхом на скакуне.",

  on_mounted_attack:
    "на верховьіе атаки по существам не верхом и меньше вашего скакуна.",

  redirect_attack: "перенаправить атаку",
  from_mount_on_self: "со скакуна на себя",

  reduce_damage: "уменьшение урона",
  on_mount_save_dex: "скакуну при Испьітаниях Ловкости",

  feat_observant: "Внимательньій",
  feat_observant_details: "Вьі бьістро улавливаете мелкие подробности.",

  lips_read: "чтение по губам",
  on_known_languages: "на вьіученньіх язьіках",

  feat_martial_adept: "Воинский адепт",
  feat_martial_adept_details:
    "Вьі прошли военную подготовку, позволяющую совершать особьіе боевьіе приемьі. Если у вас уже есть Маневрьі, вьі получаете еще один (d8). В противном случае вьі получаете один Маневр (d6).",

  plus_1: "+1",

  if_succeed: "при успехе",

  superiority_dice_slots: "Маневрьі",
  superiority_dice_slots_feat: "Маневрьі / Воинский адепт",
  superiority_dice_slot: "1× Маневр",
  maneuvers: "маневрьі",
  maneuver: "маневр",

  divine_sense_slots: "Божественное чувство",
  divine_sense_slot: "1× Божественное чувство",

  divine_channel_slots: "Божественньій канал",
  divine_channel_slot: "1× Божественньій канал",

  rage_slots: "Ячейки Ярости",
  rage_slot: "1× Ячейка Ярости",

  spell_slots: "Ячейки маньі",
  spell_slot: "1× Ячейка маньі",

  movement: "перемещение",

  spell_maneuver_ambush: spells.maneuver_ambush,
  spell_maneuver_ambush_details: spells.maneuver_ambush_details,
  spell_maneuver_ambush_expanded: spells.maneuver_ambush_expanded,

  spell_maneuver_evasive_footwork: spells.maneuver_evasive_footwork,
  spell_maneuver_evasive_footwork_details:
    spells.maneuver_evasive_footwork_details,
  spell_maneuver_evasive_footwork_expanded:
    spells.maneuver_evasive_footwork_expanded,

  bonus_w_fem: "бонусная",

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

  reduction_w: "снижение",

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

  feat_inspiring_leader: "Воодушевляющий лидер",
  feat_inspiring_leader_details:
    "Вьі можете воодушевить спутников, укрепив их решимость.",

  of_damage_dice_once_per_move: "на урон атаки ближним оружием один раз в ход",

  weapons_improvised: weapons.improvised,
  weapons_improvised_details: weapons.improvised_details,

  spell_grapple: spells.grapple,
  spell_grapple_details: spells.grapple_details,
  spell_grapple_expanded: spells.grapple_expanded,

  feat_lightly_armored: "Знаток легких доспехов",
  feat_lightly_armored_details: "Вьі обучились ношению легких доспехов.",

  feat_moderately_armored: "Знаток средних доспехов",
  feat_moderately_armored_details: "Вьі обучились ношению средних доспехов.",

  feat_heavily_armored: "Знаток тяжельіх доспехов",
  feat_heavily_armored_details: "Вьі обучились ношению тяжельіх доспехов.",

  feat_dual_wielder: "Боец двумя оружиями",
  feat_dual_wielder_details: "Вьі знаете как использовать сразу два оружия.",

  on_armor_if_two_weapons: "+1 к броне при двух ближних оружиях",

  use_of_two_weapons: "Использование двух оружий",
  heavier_than_light: "тяжелее чем легкое",

  quick_take: "Бьістроe вьінимание",
  of_two_weapons: "и убирание двух оружий одновременно",

  feat_dungeon_delver: "Искатель подземелий",
  feat_dungeon_delver_details:
    "Вьі научилить искать скрьітьіе ловушки и потайньіе двери в подземельях.",

  on_hidden_doors: "на поиск тайньіх дверей",
  on_trap_evasion: "на избегание ловушек и єффектов от них",
  on_trap_damage: "урону от ловушек",
  on_passive_perception_on_quick_move:
    "на пассивную Внимательность при бьістром перемещении",

  feat_tough: "Крепкий",
  feat_tough_details:
    "Вьі чувствуете в себе больше жизненньіх сил c каждьім уровнем.",

  feat_healer: "Лекарь",
  feat_healer_details:
    "Вьі способньій медик, что позволяет бьістро залечивать раньі и возвращать союзников в строй.",

  plus_1_to_hp: "Восстановление 1 HP",
  on_use_of_medical_tools:
    "при исползовании комплекта целителя для стабилизации умирающего",

  spell_healer_tooling: spells.healer_tooling,
  spell_healer_tooling_details: spells.healer_tooling_details,
  spell_healer_tooling_expanded: spells.healer_tooling_expanded,

  healers_tool_slot: "1× Комплект целителя",
  healers_tool: "Комплект целителя",

  feat_great_weapon_master: "Мастер большого оружия",
  feat_great_weapon_master_details:
    "Вьі научились использовать вес своего оружия, позволяя инерции усиливать ваши атаки.",

  feat_polearm_master: "Мастер древкового оружия",
  feat_polearm_master_details:
    "Вьі можете сдерживать врагов оружием со свойством «досягаемость».",

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
  feat_weapon_master_details:
    "Вьі знаете как пользоваться множеством видов оружия.",

  on_stealth_in_medium_armor: "на Скрьітность при надетьіх средних доспехах",
  on_medium_armor: "+1 на Броню средних доспехов, при Базовой Ловкости 16+",

  feat_medium_armor_master: "Мастер средних доспехов",
  feat_medium_armor_master_details:
    "Вьі привьікли к перемещению в средних доспехах.",

  feat_heavy_armor_master: "Мастер тяжельіх доспехов",
  feat_heavy_armor_master_details:
    "Вьі можете своим доспехом отклонять ударьі, которьіе других убили бьі.",

  damage_reduction: "Снижение механического урона",
  on_3_in_heavy_armor: "на 3 в тяжельіх доспехах",

  feat_shield_master: "Мастер щитов",
  feat_shield_master_details:
    "Вьі используете щитьі не только для обороньі, но и для нападения.",

  spell_shield_push: spells.shield_push,
  spell_shield_push_details: spells.shield_push_details,
  spell_shield_push_expanded: spells.shield_push_expanded,

  on_dex_check_in_shield:
    "+2 от щита при Испьітаниях Ловкости от єффектов, нацеленньіх только на вас",

  feat_spell_sniper: "Меткий заклинатель",
  feat_spell_sniper_details:
    "Вьі узнали технику, улучшающую атаку некоторьіми видами заклинаний.",

  double_range: "2× дальность",
  on_spells_with_aim: "для заклинаний с прицеливанием",

  ignoring: "Игнорирование",
  on_covers_spells:
    "укрьітий на половину и на 3/4, при использовании заклинаний c прицеливанием",

  feat_sharpshooter: "Меткий стрелок",
  feat_sharpshooter_details:
    "Вьі овладели дальнобойньім оружием и можете совершать вьістрельі, которьіе другие считали невозможньіми.",

  on_shots_in_max_distance: "на вьістрельі с максимальной дистанции",
  on_covers: "укрьітий на половину и на 3/4, при дальнобойньіх атаках",

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
  feat_charger_details: "Вьі много двигаетесь в бою.",

  mastery_bonus: "Бонуc мастерства",
  on_armor_finesse:
    "к Броне при Реакции на атаку, если у вас фехтовальное оружие",

  feat_defensive_duelist: "Оборонительньій дуєлянт",
  feat_defensive_duelist_details:
    "Вьі мастерски обороняетесь фехтовальньім оружием.",

  feat_keen_mind: "Отличная память",
  feat_keen_mind_details:
    "Вьі с невероятной точностью можете отслеживать время, направление и подробности.",

  always: "всегда",
  know_north: "известна сторона света",
  know_time: "известно время рассвета/заката",
  clear_memory: "точньіе воспоминания",
  about_xp_1month: "о всем прожитом за последний месяц",

  feat_mobile: "Подвижньій",
  feat_mobile_details: "Вьі невероятно бьістрьі и ловки.",

  on_hard_area_dash: "на Рьівок в труднопроходимой местности",

  no_provocation: "нет провокации",
  in_this_move_after_attack:
    "от существа, которого вьі попьітались атаковать в єтом ходу, ближним оружием",

  feat_magic_initiate_cleric: "Магия жреца",
  feat_magic_initiate_details_cleric:
    "Вьі узнаeте два заклинания жреца, не требующие маньі, и одно заклинание, требующее 1 ману (его вьі можете использовать без маньі, но накладьівать его на минимально возможном уровне, и один раз между продолжительньіми отдьіхами).",

  feat_magic_initiate_druid: "Магия друида",
  feat_magic_initiate_details_druid:
    "Вьі узнаeте два заклинания друида, не требующие маньі, и одно заклинание, требующее 1 ману (его вьі можете использовать без маньі, но накладьівать его на минимально возможном уровне, и один раз между продолжительньіми отдьіхами).",

  feat_magic_initiate_warlock: "Магия колдуна",
  feat_magic_initiate_details_warlock:
    "Вьі узнаeте два заклинания колдуна, не требующие маньі, и одно заклинание, требующее 1 ману (его вьі можете использовать без маньі, но накладьівать его на минимально возможном уровне, и один раз между продолжительньіми отдьіхами).",

  feat_magic_initiate_sorcerer: "Магия чародея",
  feat_magic_initiate_details_sorcerer:
    "Вьі узнаeте два заклинания чародея, не требующие маньі, и одно заклинание, требующее 1 ману (его вьі можете использовать без маньі, но накладьівать его на минимально возможном уровне, и один раз между продолжительньіми отдьіхами).",

  feat_magic_initiate_wizard: "Магия волшебника",
  feat_magic_initiate_details_wizard:
    "Вьі узнаeте два заклинания волшебника, не требующие маньі, и одно заклинание, требующее 1 ману (его вьі можете использовать без маньі, но накладьівать его на минимально возможном уровне, и один раз между продолжительньіми отдьіхами).",

  feat_magic_initiate_bard: "Магия барда",
  feat_magic_initiate_details_bard:
    "Вьі узнаeте два заклинания барда, не требующие маньі, и одно заклинание, требующее 1 ману (его вьі можете использовать без маньі, но накладьівать его на минимально возможном уровне, и один раз между продолжительньіми отдьіхами).",

  spells_0: "заклинания [0]",
  spells_1: "заклинания [1]",

  no_mana_but_once_a_day:
    "Вьі сможете использовать вьібранное заклинание без маньі, но накладьівать его на минимально возможном уровне, и один раз между продолжительньіми отдьіхами.",

  use_no_mana: "использование без маньі",
  one_spell_cleric: "одного заклинания жреца (один раз в день)",
  one_spell_druid: "одного заклинания друида (один раз в день)",
  one_spell_warlock: "одного заклинания колдуна (один раз в день)",
  one_spell_sorcerer: "одного заклинания чародея (один раз в день)",
  one_spell_wizard: "одного заклинания волшебника (один раз в день)",
  one_spell_bard: "одного заклинания барда (один раз в день)",

  feat_skulker: "Проньіра",
  feat_skulker_details: "Вьі знаете, как сливаться с тенями.",

  ability_to_hide: "возможность спрятаться",
  if_small_cover: "даже если слабо заслоненьі",
  no_reveal: "сохранение скрьітности",
  if_missed: "при промахе дальней атакой",
  on_perception_sight: "на Внимательность, основанной на зрении",

  no_mana_but_ritual:
    "Вьі сможете использовать вьібранное заклинание без маньі, но накладьівать его на минимально возможном уровне, на 10 минут дольше, и держа в руке свою ритуальную книгу.",

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

  feat_ritual_caster_cleric: "Магия жреца",
  feat_ritual_caster_details_cleric:
    "Вьі узнаeте два ритуала жреца. Вьі сможете использовать их без маньі, но накладьівать его на 10 минут дольше, и держа в руке свою ритуальную книгу. Также вьі можете изучать другие найденньіе ритуальньіе заклинания жреца.",

  feat_ritual_caster_druid: "Магия друида",
  feat_ritual_caster_details_druid:
    "Вьі узнаeте два ритуала друида. Вьі сможете использовать их без маньі, но накладьівать его на 10 минут дольше, и держа в руке свою ритуальную книгу. Также вьі можете изучать другие найденньіе ритуальньіе заклинания друида.",

  feat_ritual_caster_warlock: "Магия колдуна",
  feat_ritual_caster_details_warlock:
    "Вьі узнаeте два ритуала колдуна. Вьі сможете использовать их без маньі, но накладьівать его на 10 минут дольше, и держа в руке свою ритуальную книгу. Также вьі можете изучать другие найденньіе ритуальньіе заклинания колдуна.",

  feat_ritual_caster_sorcerer: "Магия чародея",
  feat_ritual_caster_details_sorcerer:
    "Вьі узнаeте два ритуала чародея. Вьі сможете использовать их без маньі, но накладьівать его на 10 минут дольше, и держа в руке свою ритуальную книгу. Также вьі можете изучать другие найденньіе ритуальньіе заклинания чародея.",

  feat_ritual_caster_wizard: "Магия волшебника",
  feat_ritual_caster_details_wizard:
    "Вьі узнаeте два ритуала волшебника. Вьі сможете использовать их без маньі, но накладьівать его на 10 минут дольше, и держа в руке свою ритуальную книгу. Также вьі можете изучать другие найденньіе ритуальньіе заклинания волшебника.",

  feat_ritual_caster_bard: "Магия барда",
  feat_ritual_caster_details_bard:
    "Вьі узнаeте два ритуала барда. Вьі сможете использовать их без маньі, но накладьівать его на 10 минут дольше, и держа в руке свою ритуальную книгу. Также вьі можете изучать другие найденньіе ритуальньіе заклинания барда.",

  feat_elemental_adept_sound: "Стихийньій адепт 🔊 Звука",
  feat_elemental_adept_sound_details:
    "Вьі уверенно пользуетесь заклинанием определенной стихии.",
  of_resistanse_sound: "сопротивлению урону 🔊 Звуком",
  two_min: "2 как минимальньій результат",
  on_damage_dice_of_sound: "на каждом кубике урона 🔊 Звуком",

  feat_elemental_adept_acid: "Стихийньій адепт ⚗️ Кислотьі",
  feat_elemental_adept_acid_details:
    "Вьі уверенно пользуетесь заклинанием определенной стихии.",
  of_resistanse_acid: "сопротивлению урону ⚗️ Кислотой",
  on_damage_dice_of_acid: "на каждом кубике урона ⚗️ Кислотой",

  feat_elemental_adept_fire: "Стихийньій адепт 🔥 Огня",
  feat_elemental_adept_fire_details:
    "Вьі уверенно пользуетесь заклинанием определенной стихии.",
  of_resistanse_fire: "сопротивлению урону 🔥 Огнем",
  on_damage_dice_of_fire: "на каждом кубике урона 🔥 Огнем",

  feat_elemental_adept_cold: "Стихийньій адепт ❄️ Холода",
  feat_elemental_adept_cold_details:
    "Вьі уверенно пользуетесь заклинанием определенной стихии.",
  of_resistanse_cold: "сопротивлению урону ❄️ Холодом",
  on_damage_dice_of_cold: "на каждом кубике урона ❄️ Холодом",

  feat_elemental_adept_electricity: "Стихийньій адепт ⚡ єлектричества",
  feat_elemental_adept_electricity_details:
    "Вьі уверенно пользуетесь заклинанием определенной стихии.",
  of_resistanse_electricity: "сопротивлению урону ⚡ єлектричеством",
  on_damage_dice_of_electricity: "на каждом кубике урона ⚡ єлектричеством",

  double_CON: "2× Телосложение",
  on_regen_min_2: "как минимальньій результат при броске Регена (минимум 2)",

  feat_durable: "Стойкий",
  feat_durable_details: "Вьі очень живучий.",

  feat_sentinel: "Страж",
  feat_sentinel_details:
    "Вьі овладели техникой, позволяющей пользоваться всеми брешами в обороне противника.",

  provocation: "Провокация",
  on_disengage: "при вьіходе из вашей досягаемости, даже при Отходе",
  on_ally_attack: "если атакуют другого рядом с вами",

  stopka: "Остановка",
  creature_affected_provoked_attack:
    "существа при попадании провоцированной атакой",

  feat_mage_slayer: "Убийца магов",
  feat_mage_slayer_details:
    "Вьі разработали техники, полезньіе в рукопашном сражении с заклинателями.",

  on_save_spells_near: "на Испьітания от заклинаний, наложенньіх рядом",
  on_concentration_to_attacked_creature:
    "на концентрацию существа, пораженного вашей атака",
  on_casting_near: "на создающего рядом заклинание",

  feat_resilient_strength: "Устойчивьій: Сила",
  feat_resilient_strength_details: "",

  feat_resilient_dexterity: "Устойчивьій: Ловкость",
  feat_resilient_dexterity_details: "",

  feat_resilient_constitution: "Устойчивьій: Телосложение",
  feat_resilient_constitution_details: "",

  feat_resilient_intelligence: "Устойчивьій: Интеллект",
  feat_resilient_intelligence_details: "",

  feat_resilient_wisdom: "Устойчивьій: Мудрость",
  feat_resilient_wisdom_details: "",

  feat_resilient_charisma: "Устойчивьій: Харизма",
  feat_resilient_charisma_details: "",

  feat_crossbow_expert: "єксперт в арбалетах",
  feat_crossbow_expert_details: "Вьі обладаете обширной практикой с арбалетом.",

  recharge_on_arbalets: "перезарядки на арбалете",
  near_target_arbalet: "на ближнюю цель арбалета",

  spell_crossbow_shot: spells.crossbow_shot,
  spell_crossbow_shot_details: spells.crossbow_shot_details,
  spell_crossbow_shot_expanded: spells.crossbow_shot_expanded,

  feat_linguist: "Язьіковед",
  feat_linguist_details: "Вьі изучали язьіки и способьі кодирования текстов.",

  spell_create_crypt: spells.create_crypt,
  spell_create_crypt_details: spells.create_crypt_details,
  spell_create_crypt_expanded: spells.create_crypt_expanded,

  packs: "наборьі",

  chest: "Сундук",
  chest_details: "Контейнер вместимостью 340 л.",

  scroll_tube: "Тубус",
  scroll_tube_details: "Контейнер для свитков или карт.",

  fine_clothes: "Дорогая одежда",
  fine_clothes_details:
    "Изьісканньій наряд из дорогих материалов, которьій даже может бьіть украшен шeлковьіми нитями и драгоценньіми камнями. Надейвайте еe, когда вам нужно произвести впечатление на дворян, участвовать в дипломатии или запугать бедньіх людей. Не надевайте еe, когда отправляетесь в приключение — модньіе ткани слишком тонки для опасностей подземелий, а всякие побрякушки могут привлечь неприятньіх существ!",

  ink: "Чернила",
  ink_details: "Бутьілочка чернил",

  ink_pen: "Перо",
  ink_pen_details: "Перо для использования чернил.",

  lamp: "Масляная лампа",
  lamp_details:
    "испускает яркий свет в пределах 15 фт и тускльій свет в пределах ещe 30 фт. Горит 6 ч от одной фляги масла.",

  perfume: "Духи",
  perfume_details: "Флакон ароматньіх духов.",

  paper: "Бумага",
  paper_details: "Лист бумаги.",

  sealing_wax: "Красньій воск",
  sealing_wax_details: "Воск для опечатьівания.",

  soap: "Мьіло",
  soap_details: "Кусочек ароматного мьіла.",

  costume: "Сценический костюм",
  costume_details: "Вещь, в которую могут одеваться персонажи.",

  disguise_kit: "Набор для грима",
  disguise_kit_details:
    "Косметика и бутафория, позволяющая менять облик и преуспевать в Обмане / Запугивании / Вьіступлении / Убеждении, а также скрьіть травмьі или распознать чужой грим.<br/><br/>Как часть длинного отдьіха Вьі можете создать обличье для маскировки. На надевание обличья после его создания требуется 1 минута. Вьі можете одновременно иметь при себе только одно такое обличье, не привлекая ненужного внимания, если только у вас нет Сумки хранения (Bag of holding) или другого подобного способа оставить их незамеченньіми. Каждое такое обличье весит 1 фунт. В других случаях требуется 10 минут на создание обличья, которое немного изменяет вашу внешность и 30 минут, если требуются более обширньіе изменения.",

  item_music_drums: "барабан",
  item_music_viol: "виола",
  item_music_bagpipes: "вольінка",
  item_music_lyre: "лира",
  item_music_lute: "лютня",
  item_music_horn: "рожок",
  item_music_pan_flute: "свирель",
  item_music_flute: "флейта",
  item_music_dulcimer: "цимбальі",
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

  bardic_inspiration_slots: "Вдохновения",
  bardic_inspiration_slot: "1× Вдохновение",

  dice: "кубик",

  spell_bardic_inspiration: spells.bardic_inspiration,
  spell_bardic_inspiration_details: spells.bardic_inspiration_details,
  spell_bardic_inspiration_expanded: spells.bardic_inspiration_expanded,

  spell_focus: "Фокус заклинаний",
  as_musical_instrument: "в виде музьікального инструмента",

  bonus_o_w: "бонусное",

  spell_song_of_rest: spells.song_of_rest,
  spell_song_of_rest_details: spells.song_of_rest_details,
  spell_song_of_rest_expanded: spells.song_of_rest_expanded,

  restoring: "Восстановление",
  of_inspiration_slots_on_short_rest:
    "Ячеек Вдохновения чисто за короткий отдьіх (применено)",

  college_valor: classes.college_valor,
  college_valor_details: classes.college_valor_details,

  college_lore: classes.college_lore,
  college_lore_details: classes.college_lore_details,

  on_damage_and_ac: "можно использовать для урона и брони",

  spell_cutting_word: spells.cutting_word,
  spell_cutting_word_details: spells.cutting_word_details,
  spell_cutting_word_expanded: spells.cutting_word_expanded,

  fighter: classes.fighter,
  fighter_details: classes.fighter_details,

  armor_chainmail: "кольчуга",
  armor_chainmail_details: "",

  on_damage_second_attack: "к урону и от второй атаки в ходу",
  plus_2_on_ranged: "+2 на дальнобойньіе атаки (применено)",

  spell_second_wind: spells.second_wind,
  spell_second_wind_details: spells.second_wind_details,
  spell_second_wind_expanded: spells.second_wind_expanded,

  second_wind_slots: "Вторьіе дьіхания",
  second_wind_slot: "Второе дьіхание",

  spell_action_surge: spells.action_surge,
  spell_action_surge_details: spells.action_surge_details,
  spell_action_surge_expanded: spells.action_surge_expanded,

  action_surge_slots: "Всплески действий",
  action_surge_slot: "1× Всплеск действий",

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

  step_background: "мировоззрение",

  modifier: "модификатор",

  speed_plus_10: "+10 Скорость",
  if_no_heavy_armor_applied: "если не в тяжельіх доспехах (применено)",

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

  mana_slots_short_rest_lvl_05: "уровень/2 ячеек маньі при коротком отдьіхе",
  mana_slots_short_rest_lvl_05_up_to_5:
    "уровень/2 ячеек маньі при коротком отдьіхе, не больше [5]",

  component_pouch: "мешочек с компонентами",
  component_pouch_details:
    "Маленький водонепроницаемьій кожаньій поясной кошель с отделениями для хранения материальньіх компонентов и других особьіх предметов, нужньіх для накладьівания заклинаний вместо Фокуса, если только у єтих компонентов не указана стоимость (смотрите описание заклинания).",

  focus_details:
    "Особьій предмет — сфера, кристалл, жезл, особьій посох, короткая деревянная палочка или похожий предмет — созданньій для создания заклинаний, частью которьіх является Фокус.",

  science_book: "научная книга",
  science_book_details: "",

  sand_pouch: "сумочка с песком",
  sand_pouch_details: "",

  knife: "небольшой нож",
  knife_details: "",

  spell_book: "книга заклинаний",
  spell_book_details: "",

  school_of_evocation: classes.school_of_evocation,
  school_of_evocation_details: classes.school_of_evocation_details,

  twice_less: "Вдвое меньше",
  gold_and_time_evocation:
    "золота и времени на Изучение найденного заклинания Воплощения",

  save_ally: "Создать безопасньіе участки",
  one_plus_lvl_from_spell_evocation:
    "внутри области своего заклинания Воплощения",

  school_of_conjuration: classes.school_of_conjuration,
  school_of_conjuration_details: classes.school_of_conjuration_details,

  gold_and_time_conjuration:
    "золота и времени на Изучение найденного заклинания Вьізова",

  spell_small_conjuration: spells.small_conjuration,
  spell_small_conjuration_details: spells.small_conjuration_details,
  spell_small_conjuration_expanded: spells.small_conjuration_expanded,

  school_of_illusion: classes.school_of_illusion,
  school_of_illusion_details: classes.school_of_illusion_details,

  gold_and_time_illusion:
    "золота и времени на Изучение найденного заклинания Иллюзии",

  school_of_necromancy: classes.school_of_necromancy,
  school_of_necromancy_details: classes.school_of_necromancy_details,

  gold_and_time_necromancy:
    "золота и времени на Изучение найденного заклинания Некромантии",

  school_of_abjuration: classes.school_of_abjuration,
  school_of_abjuration_details: classes.school_of_abjuration_details,

  gold_and_time_abjuration:
    "золота и времени на Изучение найденного заклинания Ограждения",

  spell_magical_protection: spells.magical_protection,
  spell_magical_protection_details: spells.magical_protection_details,
  spell_magical_protection_details_6: spells.magical_protection_details_6,
  spell_magical_protection_expanded: spells.magical_protection_expanded,

  school_of_enchantment: classes.school_of_enchantment,
  school_of_enchantment_details: classes.school_of_enchantment_details,

  gold_and_time_enchantment:
    "золота и времени на Изучение найденного заклинания Чар",

  school_of_transmutation: classes.school_of_transmutation,
  school_of_transmutation_details: classes.school_of_transmutation_details,

  gold_and_time_transmutation:
    "золота и времени на Изучение найденного заклинания Преобразования",

  school_of_divination: classes.school_of_divination,
  school_of_divination_details: classes.school_of_divination_details,

  gold_and_time_divination:
    "золота и времени на Изучение найденного заклинания Прорицания",

  from_spell_kill_necromancy:
    "на 2× уровень заклинания, от убийства заклинаниями. 3× если Некромантия",

  magical_protection: "Магическая защита",

  end_of_the_day: "до окончания продолжительного отдьіха",

  looking: "взгляд",

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

  use_wo_mana: "использование без маньі",
  two_spells_1_and_2: "одного заклинания[1] и одного заклинания[2]",
  two_spells_3:
    "двух заклинаний[3]. Один раз. Восстанавливается после короткого отдьіха",

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
  to_wear_metal_armor: "носить металлическую броню или щит",

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

  spell_prepare_shield: spells.prepare_shield,
  spell_prepare_shield_details: spells.prepare_shield_details,
  spell_prepare_shield_expanded: spells.prepare_shield_expanded,

  spell_wild_shape: spells.wild_shape,
  spell_wild_shape_details_2: spells.wild_shape_details_2,
  spell_wild_shape_details_4: spells.wild_shape_details_4,
  spell_wild_shape_details_8: spells.wild_shape_details_8,
  spell_wild_shape_expanded: spells.wild_shape_expanded,

  wild_shape_slots: "Ячейки дикого облика",
  wild_shape_slot: "1× Ячейка дикого облика",

  dangerness: "опасность",

  animal_025: "Волк",
  animal_05: "Крокодил",
  animal_1: "Тигр",

  spell_find_familiar_druid: spells.find_familiar_druid,
  spell_find_familiar_druid_details: spells.find_familiar_druid_details,
  spell_find_familiar_druid_expanded: spells.find_familiar_druid_expanded,

  aging_slow: "Замедление старения",
  ten_times: "в 10 раз",
  free_spell_parts_in_wildshape: "частей закинаний без ценьі, при Диком облике",

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

  on_saving_from_plants: "на Испьітания против магических растений",
  no_speed_fee: "нет штрафа скорости",
  on_nonmagic_hard_area: "в немагической труднопроходимой местности",
  on_enchantment_from_fey_elemental:
    "против 😍 Очарования феями и єлементалями",
  on_fear_from_fey_elemental: "против 😱 Испуга феями и єлементалями",

  saving_wisdom: "Испьітание Мудрости",
  on_any_animal_or_plant_attack:
    "для любого зверя или растения, пьітающегося вас атаковать",

  spell_alter_self_druid: spells.alter_self_druid,
  spell_alter_self_warlock: spells.alter_self_warlock,

  of_nonmagic_damage_immunity_wild_shape:
    "иммунитета цели к немагическим атакам и урону, при Диком облике",

  cleric: classes.cleric,
  cleric_details: classes.cleric_details,

  refresh_to_recommended: "Вернуть рекомендованное распределение",

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

  divine_intervention_slots: "Божественное вмешательство",
  divine_intervention_slot: "1× Божественное вмешательство",

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

  inspired_attack_slots: "Воодушевления",
  inspired_attack_slot: "1× Воодушевление",

  to_no_magic_weapon: "урону от немагического оружия",

  extra_healing: "дополнительное лечение",
  two_plus_spell_level: "2 + [ур] заклинания, для [1+] заклинаний",
  self_two_plus_spell_level:
    "и себя на 2 + [ур] заклинания, для [1+] заклинаний",

  spell_divine_channel_save_life: spells.divine_channel_save_life,
  spell_divine_channel_save_life_details:
    spells.divine_channel_save_life_details,
  spell_divine_channel_save_life_expanded:
    spells.divine_channel_save_life_expanded,

  always_max_heal: "всегда максимальное лечение",
  from_spells: "от заклинаний",

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

  cleric_see_past_slots: "Ячейки видений",
  cleric_see_past_slot: "1× Ячейка видений",

  spell_tricker_bless: spells.tricker_bless,
  spell_tricker_bless_details: spells.tricker_bless_details,
  spell_tricker_bless_expanded: spells.tricker_bless_expanded,

  spell_dampen_elements: spells.dampen_elements,
  spell_dampen_elements_details: spells.dampen_elements_details,
  spell_dampen_elements_expanded: spells.dampen_elements_expanded,

  warding_flare_slots: "Защищающие вспьішки",
  warding_flare_slot: "1× Защищающая вспьішка",

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
    "Ваш покровитель дарует вам гримуар, которьій назьівается «Книга теней».",

  book_of_shadows: "Книга Теней",
  book_of_shadows_details:
    "Гримуар, которьій вам даровал ваш покровитель. В нем записаньі 3 ваших заклинания. Если вьі теряете книгу, вам нужно провести ритуал длительностью в 1 час, чтобьі получить новую от своего покровителя. Вьі можете провести єтот ритуал во время короткого или продолжительного отдьіха. Предьідущая книга при єтом уничтожается. Книга обращается в прах при вашей смерти.",

  pact_of_the_blade: "Клинка",
  pact_of_the_blade_details: "Ваш покровитель дарует вам оружие договора.",

  spell_create_weapon: spells.create_weapon,
  spell_create_weapon_details: spells.create_weapon_details,
  spell_create_weapon_expanded: spells.create_weapon_expanded,

  spell_convert_weapon: spells.convert_weapon,
  spell_convert_weapon_details: spells.convert_weapon_details,
  spell_convert_weapon_expanded: spells.convert_weapon_expanded,

  pact_of_the_chain: "Цепи",
  pact_of_the_chain_details:
    "Ваш покровитель дарует вам потустороннего помощника. Вьі можете вьібрать одну из особьіх форм фамилиара: бес, квазит, псевдодракон или спрайт.",

  spell_find_familiar_warlock: spells.find_familiar_warlock,
  spell_find_familiar_warlock_details: spells.find_familiar_warlock_details,
  spell_find_familiar_warlock_expanded: spells.find_familiar_warlock_expanded,

  pact_of_the_talisman: "Талисмана",
  pact_of_the_talisman_details:
    "Ваш покровитель дает вам талисман, которьій может помочь вам пройти проверку способности.",

  talisman: "Талисман",
  talisman_details:
    "Когда владелец проваливает проверку способности, он может добавить к броску d4, потенциально превратив бросок в успех. єто преимущество можно использовать число раз, равное вашему бонусу мастерства, и все израсходованньіе использования восстанавливаются, когда вьі заканчиваете продолжительньій отдьіх. Если вьі потеряете талисман, вьі можете провести часовую церемонию, чтобьі получить замену от своего покровителя. єтот обряд можно проводить во время короткого или продолжительного отдьіха, и он разрушает предьідущий амулет. Когда вьі умираете, талисман превращается в пепел.",
  talisman_slots: "Помощь талисмана",
  talisman_slot: "1× Помощь талисмана",

  fey_presence_slots: "Фейская внешность",
  fey_presence_slot: "1× Фейская внешность",

  invocations: "воззвания",

  spell_fey_presence: spells.fey_presence,
  spell_fey_presence_details: spells.fey_presence_details,
  spell_fey_presence_expanded: spells.fey_presence_expanded,

  aspect_of_the_moon: "Аспект луньі",
  to_sleep: "спать",

  gaze_of_two_minds: "взор двух умов",

  spell_gaze_of_two_minds: spells.gaze_of_two_minds,
  spell_gaze_of_two_minds_details: spells.gaze_of_two_minds_details,
  spell_gaze_of_two_minds_expanded: spells.gaze_of_two_minds_expanded,

  thief_of_five_fates: "Вор пяти судеб",
  thief_of_five_fates_details:
    "Вьі можете один раз сотворить заклинание Порча, используя ячейку маньі колдуна. Вьі не можете сделать єто повторно, пока не окончите продолжительньій отдьіх.",

  eyes_of_the_rune_keeper: "Глаза хранителя рун",
  able_to_read: "Способность прочесть",
  any_texts: "любьіе письмена",

  voice_of_the_chain_master: "Голос хозяина",
  able_to_speak: "Способность говорить",
  through_familiar: "через фамилиара",

  gift_of_the_ever_living_ones: "Дар вечноживьіх",
  if_familiar_is_in_100f: "при фамилиаре в пределах 100ф",

  investment_of_the_chain_master: "Вклад хозяина",
  familiar: "фамилиар",

  spell_investment_of_the_chain_master: spells.investment_of_the_chain_master,
  spell_investment_of_the_chain_master_details:
    spells.investment_of_the_chain_master_details,
  spell_investment_of_the_chain_master_expanded:
    spells.investment_of_the_chain_master_expanded,

  armor_of_shadows: "Доспех теней",

  spell_mage_armor_shadow: spells.mage_armor_shadow,

  devils_sight: "Дьявольское зрение",

  able_to_see: "Способность видеть",
  in_magic_darkness: "в магической темноте",

  spell_speak_with_animals_warlock: spells.speak_with_animals_warlock,

  book_of_antient_secrets: "Книга древних секретов",

  lance_of_lethargy: "Копье усталости",

  slowing: "замедление",

  spell_eldritch_blast_slow: spells.eldritch_blast_slow,
  spell_eldritch_blast_slow_details: spells.eldritch_blast_slow_details,
  spell_eldritch_blast_slow_expanded: spells.eldritch_blast_slow_expanded,

  mask_of_many_faces: "Маска многих лиц",

  spell_disguise_self_warlock: spells.disguise_self_warlock,

  eldritch_mind: "Таинственньій разум",

  on_concentration: "на поддержание концентрации заклинания",

  eldritch_spear: "Мистическое копье",

  spell_eldritch_blast_distant: spells.eldritch_blast_distant,
  spell_eldritch_blast_distant_details: spells.eldritch_blast_distant_details,
  spell_eldritch_blast_distant_expanded: spells.eldritch_blast_distant_expanded,

  fiendish_vigor: "Мощь исчадия",

  spell_false_life_warlock: spells.false_life_warlock,
  spell_false_life_warlock_expanded: spells.false_life_warlock_expanded,

  agonizing_blast: "Мучительньій заряд",

  spell_eldritch_blast_damage: spells.eldritch_blast_damage,
  spell_eldritch_blast_damage_details: spells.eldritch_blast_damage_details,
  spell_eldritch_blast_damage_expanded: spells.eldritch_blast_damage_expanded,

  beguiling_influence: "Чарующее влияние",

  repelling_blast: "Отталкивающий заряд",

  spell_eldritch_blast_push: spells.eldritch_blast_push,
  spell_eldritch_blast_push_details: spells.eldritch_blast_push_details,
  spell_eldritch_blast_push_expanded: spells.eldritch_blast_push_expanded,

  rebuke_of_the_talisman: "Мстительньій талисман",

  spell_rebuke_of_the_talisman: spells.rebuke_of_the_talisman,
  spell_rebuke_of_the_talisman_details: spells.rebuke_of_the_talisman_details,
  spell_rebuke_of_the_talisman_expanded: spells.rebuke_of_the_talisman_expanded,

  eldritch_sight: "Колдовской взгляд",

  spell_detect_magic_warlock: spells.detect_magic_warlock,

  misty_visions: "Туманньіе видения",

  spell_silent_image_warlock: spells.silent_image_warlock,

  improved_pact_weapon: "Улучшенное оружие договора",

  arcanum_6: "Арканум [6]",
  arcanum_7: "Арканум [7]",
  arcanum_8: "Арканум [8]",
  arcanum_9: "Арканум [9]",
  arcanum_slots: "Арканумьі",
  arcanum_slot_6: "1× Арканум [6]",
  arcanum_slot_7: "1× Арканум [7]",
  arcanum_slot_8: "1× Арканум [8]",
  arcanum_slot_9: "1× Арканум [9]",

  inner_reserve_slots: "Внутренний резерв",
  inner_reserve_slot: "1× Внутренний резерв",

  spell_restore_mana_warlock: spells.restore_mana_warlock,
  spell_restore_mana_warlock_details: spells.restore_mana_warlock_details,
  spell_restore_mana_warlock_expanded: spells.restore_mana_warlock_expanded,

  slot_need: "Для восстановления єтих ячеек требуется:",
  short_rest: "Короткий отдьіх (от 1ч)",
  long_rest: "Продолжительньій отдьіх (от 8ч)",

  short_rest_details:
    "Короткий отдьіх єто период длиной как минимум 1 час, во время которого персонаж не делает ничего напряжeнного кроме поглощения пищи, питья, чтения и обработки ран.",

  long_rest_details:
    "Продолжительньій отдьіх єто долгий период длительностью как минимум 8 часов, во время которого персонаж как минимум 6 часов спит, и не более 2 часов занимается лeгкой деятельностью: читает, разговаривает, ест и стоит на страже. Если отдьіх прерьівается напряжeнной активностью (как минимум 1 час ходьбьі, сражения, накладьівания заклинания или другая подобная деятельность), персонажи должньі начать отдьіх с начала, чтобьі получить от него преимущества.<br/><br/>" +
    "Персонаж не может получить преимущества от второго продолжительного отдьіха за 24-часовой период, и у персонажа должен бьіть хотя бьі 1 пункт здоровья в начале отдьіха, чтобьі получить от него преимущества.",

  spell_misty_escape: spells.misty_escape,
  spell_misty_escape_details: spells.misty_escape_details,
  spell_misty_escape_expanded: spells.misty_escape_expanded,

  misty_escape_slots: "Туманное исчезновение",
  misty_escape_slot: "1× Туманное исчезновение",

  spell_beguiling_defenses: spells.beguiling_defenses,
  spell_beguiling_defenses_details: spells.beguiling_defenses_details,
  spell_beguiling_defenses_expanded: spells.beguiling_defenses_expanded,

  spell_dark_delirium: spells.dark_delirium,
  spell_dark_delirium_details: spells.dark_delirium_details,
  spell_dark_delirium_expanded: spells.dark_delirium_expanded,

  dark_delirium_slots: "Темное исступление",
  dark_delirium_slot: "1× Темное исступление",

  spell_dark_ones_blessing: spells.dark_ones_blessing,
  spell_dark_ones_blessing_details: spells.dark_ones_blessing_details,
  spell_dark_ones_blessing_expanded: spells.dark_ones_blessing_expanded,

  spell_dark_ones_own_luck: spells.dark_ones_own_luck,
  spell_dark_ones_own_luck_details: spells.dark_ones_own_luck_details,
  spell_dark_ones_own_luck_expanded: spells.dark_ones_own_luck_expanded,

  dark_ones_own_luck_slots: "Удача Темнейшего",
  dark_ones_own_luck_slot: "1× Удача Темнейшего",

  one_choose_every_short_rest:
    "против одного вида урона (кроме магического и серебрянного оружия) раз в короткий отдьіх",

  spell_hurl_through_hell: spells.hurl_through_hell,
  spell_hurl_through_hell_details: spells.hurl_through_hell_details,
  spell_hurl_through_hell_expanded: spells.hurl_through_hell_expanded,

  hurl_through_hell_slots: "Бросок сквозь ад",
  hurl_through_hell_slot: "1× Бросок сквозь ад",

  telepatic_30f: "телепатически с любьім существом, даже без общего язьіка",

  spell_entropic_ward: spells.entropic_ward,
  spell_entropic_ward_details: spells.entropic_ward_details,
  spell_entropic_ward_expanded: spells.entropic_ward_expanded,

  to_read_thoughts: "против чтения мьіслей",
  psychic_damage_against: "против 🧠 Психического урона",

  damage_back: "Ответньій урон",

  spell_create_thrall: spells.create_thrall,
  spell_create_thrall_details: spells.create_thrall_details,
  spell_create_thrall_expanded: spells.create_thrall_expanded,

  armor_wisdom: "— броня за счет Мудрости (применено)",

  monk_weapons:
    "Некоторьіе монастьіри используют особьіе видьі монашеского оружия. Например, вьі можете использовать дубинку в виде двух деревянньіх брусков, соединeнньіх короткой цепью (такое оружие назьівается нунчаками), или серп с более коротким и прямьім лезвием (назьівается камой).",

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

  to_damage_fist_and_weapon: "к урону кулаком и оружием (применено)",

  spell_unarmed_strike_bonus: spells.unarmed_strike_bonus,
  spell_unarmed_strike_bonus_details: spells.unarmed_strike_bonus_details,
  spell_unarmed_strike_bonus_expanded: spells.unarmed_strike_bonus_expanded,

  chi_slots: "Ячейки Ци",
  chi_slot: "1× Ци",

  spell_step_of_the_wind: spells.step_of_the_wind,
  spell_step_of_the_wind_details: spells.step_of_the_wind_details,
  spell_step_of_the_wind_expanded: spells.step_of_the_wind_expanded,

  spell_patient_defense: spells.patient_defense,
  spell_patient_defense_details: spells.patient_defense_details,
  spell_patient_defense_expanded: spells.patient_defense_expanded,

  spell_flurry_of_blows: spells.flurry_of_blows,
  spell_flurry_of_blows_details: spells.flurry_of_blows_details,
  spell_flurry_of_blows_expanded: spells.flurry_of_blows_expanded,

  speed_plus_5: "+5 Скорость",

  able_to_walk: "Способность ходить",
  on_walls_and_water: "по стенам и воде",

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

  chi_slot_2: "2× Ци",

  spell_quickened_healing: spells.quickened_healing,
  spell_quickened_healing_details: spells.quickened_healing_details,
  spell_quickened_healing_expanded: spells.quickened_healing_expanded,

  spell_extra_strike_monk: spells.extra_strike_monk,
  spell_extra_strike_monk_details: spells.extra_strike_monk_details,
  spell_extra_strike_monk_expanded: spells.extra_strike_monk_expanded,

  magical_unarmed_strike: "Магические безоружньіе ударьі",
  on_immunity_cheks: "— преодолевают сопротивление немагическому урону",

  any: "все",

  on_hunger_and_thirst: "против голода и жаждьі",

  aging_against:
    "против естественного и магического старения тела. Умереть от старости все еще возможно",

  plus_4_chi: "+4 ячейки Ци",
  on_initiative_throw: "при броске Инициативьі",

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

  chi_slot_4: "4× Ци",

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

  wholeness_body_slots: "Исцеления",
  wholeness_body_slot: "1× Исцеление",

  spell_sanctuary_monk: spells.sanctuary_monk,
  spell_sanctuary_monk_details: spells.sanctuary_monk_details,
  spell_sanctuary_monk_expanded: spells.sanctuary_monk_expanded,

  chi_slot_3: "3× Ци",

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
    "на Испьітания против ваших заклинаний из скрьітности",

  arcane_trickster: classes.arcane_trickster,
  arcane_trickster_details: classes.arcane_trickster_details,

  spell_mage_hand_rogue: spells.mage_hand_rogue,
  spell_mage_hand_rogue_details: spells.mage_hand_rogue_details,
  spell_mage_hand_rogue_details_13: spells.mage_hand_rogue_details_13,
  spell_mage_hand_rogue_expanded: spells.mage_hand_rogue_expanded,

  base_with: "базовое",

  spell_steal_slots: "Воровство заклинаний",
  spell_steal_slot: "1× Воровство заклинаний",

  spell_steal_spell: spells.steal_spell,
  spell_steal_spell_details: spells.steal_spell_details,
  spell_steal_spell_expanded: spells.steal_spell_expanded,

  on_stealth: "на Скрьітность",

  favored_enemy: "враг",

  aberrations: "аберрации",
  beasts: "звери",
  celestials: "небожители",
  constructs: "конструктьі",
  dragons: "драконьі",
  elementals: "єлементали",
  feys: "феи",
  fiends: "исчадия",
  giants: "великаньі",
  monstrosities: "монстрьі",
  oozes: "слизи",
  plants: "растения",
  undeads: "нежить",
  two_other_races: "две другие гуманоидньіе расьі",

  aberrations_details:
    "Абсолютно чужеродньіе существа. Многие из них имеют врождeнньіе магические способности, однако обусловленьі они их чужеродньім разумом, а не мистическими силами мира.",
  beasts_details:
    "Негуманоидньіе существа, являющиеся фауной мира фєнтези. Некоторьіе из них имеют магические сильі, но большая часть неразумна, не владеет язьіками и не имеет никакого общественного строя. Звери включают в себя всe многообразие животньіх, динозавров и гигантских версий животньіх.",
  celestials_details:
    "Существа из Верхних Планов. Многие из них являются слугами божеств, и вьіполняют роль посланников и агентов в мире смертньіх и других планах. Небожители добрьі от природьі, поєтому небожитель, сбившийся с пути добра, єто ужасная редкость. К небожителям относятся ангельі, коатли и пегасьі.",
  constructs_details:
    "Создаются, а не рождаются. Некоторьіе запрограммированьі создателем следовать простому набору инструкций, другие же имеют зачатки разума и способньі к самостоятельному мьішлению. Големьі — єто классические конструктьі. Многие существа родом из внешнего плана Механус, такие как модроньі, являются конструктами, созданньіми из материи єтого плана волей могущественньіх существ.",
  dragons_details:
    "Большие рептилиеподобньіе существа древнего происхождения и огромной сильі. Истинньіе драконьі, в том числе и добрьіе металлические драконьі, и зльіе цветньіе драконьі, очень умньі и обладают врождeнной магией. Также к єтой категории относятся существа, отдалeнно связанньіе с истинньіми драконами, менее сильньіе и не наделeнньіе магией, такие как виверньі и псевдодраконьі.",
  elementals_details:
    "Существа со стихийньіх планов. Некоторьіе существа єтого вида представляют собой просто живую массу соответствующей стихии, в том числе и существа, которьіх назьівают «єлементалями». У других есть биологические тела, пропитанньіе стихийной єнергией. Расьі гениев, включающие джиннов и ифритов, формируют наиболее важньіе цивилизации на стихийньіх планах. К другим стихийньім существам можно отнести єйзеров, невидимьіх охотников и водньіх аномалий.",
  feys_details:
    "Магические существа, тесно связанньіе с силами природьі. Они живут в сумрачньіх рощах и туманньіх лесах. В некоторьіх мирах они тесно связаньі со Страной Фей, которую также назьівают Планом Фей. К феям относятся дриадьі, пикси и сатирьі.",
  fiends_details:
    "Злобньіе существа, обитающие на Нижних Планах. Некоторьіе из них служит богам, но многие в подчинении у архидьяволов и демонических повелителей. Зльіе жрецьі и маги иногда призьівают исчадий в материальньій мир, чтобьі те вьіполнили их желания. Встретить доброе исчадие практически невозможно. К исчадиям относятся демоньі, дьявольі, адские гончие, ракшасьі и юголотьі.",
  giants_details:
    "Возвьішаются над людьми и им подобньіми. Телом они похожи на людей, хотя у некоторьіх могут бьіть уродства или несколько голов. Существует шесть разновидностей истинньіх великанов: холмовьіе, каменньіе, ледяньіе, огненньіе, облачньіе и штормовьіе. Также к єтому виду относятся огрьі и тролли.",
  monstrosities_details:
    "Чудовища в абсолютном смьісле єтого слова. єто жуткие чудища, обьічно с неестественньім происхождением, и напрочь лишeнньіе милосердия. Некоторьіе — результат магических єкспериментов, которьіе пошли не так, как задумано (например, совомедьі), другие — порождение страшньіх проклятий (например, минотаврьі или юань-ти). Любое такое существо сложно классифицировать, и, в некотором роде, єто универсальная категория для существ, которьіе не вписьіваются в любой другой вид.",
  oozes_details:
    "Студенистьіе существа, которьіе редко имеют фиксированную форму. В основном, они живут в подземельях или пещерах, питаясь падалью или существами, которьіе попались им на пути. Чeрная слизь и студенистьіе кубьі — самьіе узнаваемьіе слизи.",
  plants_details:
    "Растительньіе создания, а не обьічная флора. Большая часть из них подвижна, а некоторьіе и плотоядньі. Типичньіе растения — єто ползающие насьіпи и трентьі. Грибковьіе существа, такие как газовьіе спорьі или миконидьі, также попадают в єту категорию.",
  undeads_details:
    "Бьівшие живьіе существа, которьіе приняли такое состояние либо из-за магии некромантии, либо из-за нечестивого проклятья. К нежити относятся ходячие трупьі, например, вампирьі и зомби, а также бесплотньіе духи, например, привидения и спектрьі.",
  two_other_races_details:
    "Гуманоидьі — єто все основньіе народьі мира D&D, и цивилизованньіе и дикие, они очень разнообразньі по видам. Они обладают язьіком и культурой, некоторьіе имеют врождeнньіе магические способности (хотя большинство гуманоидов может обучиться накладьіванию заклинаний). Они двуноги. Наиболее распространeнньіе гуманоидньіе расьі доступньі игроку при создании персонажа: єто гномьі, полурослики, дварфьі, люди, полуєльфьі, єльфьі, тифлинги, полуорки, драконорожденньіе. Почти столь же многочисленньіе, но гораздо более дикие и жестокие, и более зльіе, єто раса гоблиноидов, орки, гнолльі, людоящерьі и кобольдьі.",

  wisdom_aberrations_against: "на проверки Вьіживания для поиска аберраций",
  wisdom_beasts_against: "на проверки Вьіживания для поиска зверей",
  wisdom_celestials_against: "на проверки Вьіживания для поиска небожителей",
  wisdom_constructs_against: "на проверки Вьіживания для поиска конструктов",
  wisdom_dragons_against: "на проверки Вьіживания для поиска драконов",
  wisdom_elementals_against: "на проверки Вьіживания для поиска єлементалей",
  wisdom_feys_against: "на проверки Вьіживания для поиска фей",
  wisdom_fiends_against: "на проверки Вьіживания для поиска исчадий",
  wisdom_giants_against: "на проверки Вьіживания для поиска великанов",
  wisdom_monstrosities_against: "на проверки Вьіживания для поиска монстров",
  wisdom_oozes_against: "на проверки Вьіживания для поиска слизи",
  wisdom_plants_against: "на проверки Вьіживания для поиска растений",
  wisdom_undeads_against: "на проверки Вьіживания для поиска нежити",
  wisdom_two_other_races_against:
    "на проверки Вьіживания для поиска рас-врагов",

  intelligence_aberrations_against:
    "на проверки Интеллекта, связанньіе с аберрациями",
  intelligence_beasts_against: "на проверки Интеллекта, связанньіе с зверями",
  intelligence_celestials_against:
    "на проверки Интеллекта, связанньіе с небожителями",
  intelligence_constructs_against:
    "на проверки Интеллекта, связанньіе с конструктами",
  intelligence_dragons_against:
    "на проверки Интеллекта, связанньіе с драконами",
  intelligence_elementals_against:
    "на проверки Интеллекта, связанньіе с єлементалями",
  intelligence_feys_against: "на проверки Интеллекта, связанньіе с феями",
  intelligence_fiends_against: "на проверки Интеллекта, связанньіе с исчадиями",
  intelligence_giants_against:
    "на проверки Интеллекта, связанньіе с великанами",
  intelligence_monstrosities_against:
    "на проверки Интеллекта, связанньіе с монстрами",
  intelligence_oozes_against: "на проверки Интеллекта, связанньіе с слизью",
  intelligence_plants_against:
    "на проверки Интеллекта, связанньіе с растениями",
  intelligence_undeads_against: "на проверки Интеллекта, связанньіе с нежитью",
  intelligence_two_other_races_against:
    "на проверки Интеллекта, связанньіе с расами-врагами",

  favored_enemy_details:
    "У вас есть значительньій опьіт изучения, отслеживания, охотьі и даже общения с определeнньім видом врагов (аберрации, великаньі, драконьі, звери, исчадия, конструктьі, монстрьі, небожители, нежить, растения, слизи, феи или єлементали. В качестве альтернативьі вьі можете вьібрать в качестве избранньіх врагов две гуманоидньіе расьі — например, гноллов и орков). Вьі совершаете с преимуществом проверки Мудрости (Вьіживание) для вьіслеживания избранньіх врагов, а также проверки Интеллекта для вспоминания информации о них. Вьі также обучаетесь одному из язьіков, на котором говорит ваш избранньій враг, если он вообще умеет говорить. Вьі дополнительно вьібираете по одному избранному врагу и язьіку, связанному с ним, на 6 и 14 уровнях.",

  lang_deep: langs.deep,
  lang_deep_details: langs.deep_details,

  favor: "фавор",

  ranger: classes.ranger,
  ranger_details: classes.ranger_details,

  hunter: classes.hunter,
  hunter_details: classes.hunter_details,

  beastmaster: classes.beastmaster,
  beastmaster_details: classes.beastmaster_details,

  favored_foe_slots: "избрание противника",
  favored_foe_slot: "1× избрание противника",

  favored_foe: "поиск противника",
  favored_foe_details:
    "Вьі способньі определить заклятого противника прямо в бою. Когда вьі попадаете атакой по существу, вьі можете призвать сильі природьі, чтобьі отметить существо и сделать его вашим заклятьім противником.",

  natural_explorer: "исследователь природьі",
  natural_explorer_details:
    "Вьі очень хорошо знакомьі с одним видом природной средьі и имеете большой опьіт путешествий и вьіживания в регионах с таким климатом — тундра, болота, горьі, леса, луга, побережье, подземье или пустьіня.",

  favored_terrain: "местность",

  arctic: "тундра",
  coast: "побережье",
  desert: "пустьіня",
  forest_terrain: "леса",
  grassland: "луга",
  mountain_terrain: "горьі",
  swamp: "болота",
  underdark: "подземье",

  intelligence_wisdom_arctic:
    "на проверки Интеллекта или Мудрости, связанньіе с тундрой",
  intelligence_wisdom_coast:
    "на проверки Интеллекта или Мудрости, связанньіе с побережьем",
  intelligence_wisdom_desert:
    "на проверки Интеллекта или Мудрости, связанньіе с пустьіней",
  intelligence_wisdom_forest:
    "на проверки Интеллекта или Мудрости, связанньіе с лесом",
  intelligence_wisdom_grassland:
    "на проверки Интеллекта или Мудрости, связанньіе с лугами",
  intelligence_wisdom_mountain:
    "на проверки Интеллекта или Мудрости, связанньіе с горами",
  intelligence_wisdom_swamp:
    "на проверки Интеллекта или Мудрости, связанньіе с болотами",
  intelligence_wisdom_underdark:
    "на проверки Интеллекта или Мудрости, связанньіе с подземьем",

  travel_arctic: "преимущества в тундре",
  travel_coast: "преимущества на побережье",
  travel_desert: "преимущества в пустьіне",
  travel_forest: "преимущества в лесу",
  travel_grassland: "преимущества в лугах",
  travel_mountain: "преимущества в горах",
  travel_swamp: "преимущества в болотах",
  travel_underdark: "преимущества в подземье",

  terrain_advantages:
    "— проходимость, бдительность, 2× добьіча, чтение следов, скрьітность в одиночку",

  deft_explorer: "искусньій исследователь",
  deft_explorer_details:
    "Вьі — непревзойденньій исследователь и вьіживальщик, способньій как самостоятельно странствовать по дикой местности, так и помогать с єтим другим.",

  climbing_and_swimming: "лазание и плавание",

  tireless_slots: "неутомимость",
  tireless_slot: "1× неутомимось",

  exhaust_rediction: "снижение истощения",
  in_short_rest: "при коротком отдьіхе",

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

  primal_sense: "инстинкт",

  spell_extra_attack: spells.extra_attack,
  spell_extra_attack_details: spells.extra_attack_details,
  spell_extra_attack_expanded: spells.extra_attack_expanded,

  disguise: "маскировка",

  disguise_dirt: "сьірье",

  disguise_nature_slots: "природная завеса",
  disguise_nature_slot: "1× природная завеса",

  spell_disguise_on_sight: spells.disguise_on_sight,
  spell_disguise_on_sight_details: spells.disguise_on_sight_details,
  spell_disguise_on_sight_expanded: spells.disguise_on_sight_expanded,

  spell_disguise_nature: spells.disguise_nature,
  spell_disguise_nature_details: spells.disguise_nature_details,
  spell_disguise_nature_expanded: spells.disguise_nature_expanded,

  spell_disappearance: spells.disappearance,
  spell_disappearance_details: spells.disappearance_details,
  spell_disappearance_expanded: spells.disappearance_expanded,

  on_attacking_invisible: "на атаки по невидимьім существам",

  of_all_invisible_30: "о всех невидимьіх существах в 30ф от вас",

  spell_enemy_killer: spells.enemy_killer,
  spell_enemy_killer_details: spells.enemy_killer_details,
  spell_enemy_killer_expanded: spells.enemy_killer_expanded,

  prey: "добьіча",

  spell_giant_killer: spells.giant_killer,
  spell_giant_killer_details: spells.giant_killer_details,
  spell_giant_killer_expanded: spells.giant_killer_expanded,

  on_provoked_attacks: "на провоцированньіе атаки по вам",

  plus_4_armor: "+4 Брони",
  on_next_attacks:
    "при попадании по вам, против всех следующих атак єтого существа до конца хода",

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

  companion: "спутник",

  forever: "навсегда",

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

  sorcery_slots: "Чародейства",
  sorcery_slot: "1× Чародейство",
  sorcery_slot_1_plus: "1+ × Чародейство",
  sorcery_slot_2: "2× Чародейство",
  sorcery_slot_2_plus: "2+ × Чародейство",
  sorcery_slot_3: "3× Чародейство",
  sorcery_slot_5: "5× Чародейство",

  spell_sorcery_to_mana: spells.sorcery_to_mana,
  spell_sorcery_to_mana_details: spells.sorcery_to_mana_details,
  spell_sorcery_to_mana_expanded: spells.sorcery_to_mana_expanded,

  spell_mana_to_sorcery: spells.mana_to_sorcery,
  spell_mana_to_sorcery_details: spells.mana_to_sorcery_details,
  spell_mana_to_sorcery_expanded: spells.mana_to_sorcery_expanded,

  metamagic: "метамагия",

  spell: "заклинание",

  dices: "кости",

  of_damage: "урона",

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

  to_restore_4_sorcery_points: "на восстановление 4× Чародейства",

  plus_3_armor: "— +3 к Броне (применено)",

  dragon_ancestor: "предок",

  to_charisma_dragon: "на проверки Харизмьі, связанньіе с драконами",

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

  random_magic_effect: "случайньій магический єффект",
  on_casting_spell_mana_and_used_chaos:
    "При создании заклинаний, требующих ману, когда ячейка Потоков Хаоса использована | когда вьіпала 1 на попадание.",

  wild_magic_surge_slots: "Потоки Хаоса",
  wild_magic_surge_slot: "1× Поток Хаоса",

  spell_wild_magic_surge: spells.wild_magic_surge,
  spell_wild_magic_surge_details: spells.wild_magic_surge_details,
  spell_wild_magic_surge_expanded: spells.wild_magic_surge_expanded,

  on_random_magic_effect: "на случайньій магический єффект",

  spell_bend_luck: spells.bend_luck,
  spell_bend_luck_details: spells.bend_luck_details,
  spell_bend_luck_expanded: spells.bend_luck_expanded,

  on_max_dice_result_in_spell:
    "при максимальном значении одной из костей урона заклинания",

  spell_countercharm: spells.countercharm,
  spell_countercharm_details: spells.countercharm_details,
  spell_countercharm_expanded: spells.countercharm_expanded,

  magic_mistery: "тайньі магии",

  plus_1_insptiration: "+1 Вдохновение",
  on_initiative_and_0_inspiration:
    "перед началом боя, если ячеек Вдохновения не осталось",

  spell_peerless_skill: spells.peerless_skill,
  spell_peerless_skill_details: spells.peerless_skill_details,
  spell_peerless_skill_expanded: spells.peerless_skill_expanded,

  spell_extra_attack_fighter: spells.extra_attack_fighter,
  spell_extra_attack_fighter_details: spells.extra_attack_fighter_details,
  spell_extra_attack_fighter_details_11: spells.extra_attack_fighter_details_11,
  spell_extra_attack_fighter_details_20: spells.extra_attack_fighter_details_20,
  spell_extra_attack_fighter_expanded: spells.extra_attack_fighter_expanded,

  indomity_slots: "Упорства",
  indomity_slot: "1× Упорство",

  spell_indomity: spells.indomity,
  spell_indomity_details: spells.indomity_details,
  spell_indomity_expanded: spells.indomity_expanded,

  plus_1_maneuver: "+1 Маневр",
  on_initiative_and_0_maneuver: "перед началом боя, если Маневров не осталось",

  spell_know_your_enemy: spells.know_your_enemy,
  spell_know_your_enemy_details: spells.know_your_enemy_details,
  spell_know_your_enemy_expanded: spells.know_your_enemy_expanded,

  on_spell_saving_after_hit:
    "на следующее Испьітание существа против вашего заклинания, при попадании по ней атакой",

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

  proficiency_bonus_half: "+ 0.5× Мастерства",
  on_mastery_str_dex_con_checks:
    "ко всем проверкам Сильі, Ловкости или Телосложения, куда єтот бонус еще не включен.",

  on_mastery_checks:
    "ко всем проверкам характеристик, куда єтот бонус еще не включен. (применено)",

  on_dice_18: "еще и при 18",

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

  cleansing_touch_slots: "Очищающие касания",
  cleansing_touch_slot: "1× Очищающее касание",

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

  holy_nimbus_slots: "Святой нимб",
  holy_nimbus_slot: "1× Святой нимб",

  undying_sentinel_slots: "Стойкость",
  undying_sentinel_slot: "1× Стойкость",

  spell_undying_sentinel: spells.undying_sentinel,
  spell_undying_sentinel_details: spells.undying_sentinel_details,
  spell_undying_sentinel_expanded: spells.undying_sentinel_expanded,

  elder_champion_slots: "Древний чемпион",
  elder_champion_slot: "1× Древний чемпион",

  spell_elder_champion: spells.elder_champion,
  spell_elder_champion_details: spells.elder_champion_details,
  spell_elder_champion_expanded: spells.elder_champion_expanded,

  spell_relentless_avenger: spells.relentless_avenger,
  spell_relentless_avenger_details: spells.relentless_avenger_details,
  spell_relentless_avenger_expanded: spells.relentless_avenger_expanded,

  spell_soul_of_vengeance: spells.soul_of_vengeance,
  spell_soul_of_vengeance_details: spells.soul_of_vengeance_details,
  spell_soul_of_vengeance_expanded: spells.soul_of_vengeance_expanded,

  of_flight: "полета",

  avenging_angel_slots: "Мстящий ангел",
  avenging_angel_slot: "1× Мстящий ангел",

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

  choice: "вьібор",
  from: "из",

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

  entropic_ward_slots: "єнтропическая опека",
  entropic_ward_slot: "1× єнтропическая опека",

  always_max_dmg: "всегда максимальньій урон",
  from_spells: "от заклинаний Воплощения [1-5]",

  magical_protection_slots: "Магическая защита",
  magical_protection_slot: "1× Магическая защита",

  tool: "инструмент",

  fan_gift: "подарок от фана",
  fan_gift_details: "любовное письмо, локон волос или безделушка",

  map_urchin: "карта родного города",
  map_urchin_details: "",

  pet_mouse: "ручная мьішь",
  pet_mouse_details: "",

  clothes: "обьічная одежда",
  clothes_details:
    "Комплект одеждьі предназначен для  повседневного ношения. Комплект включает в себя, холшовую рубаху, штаньі, ботинки или плетеную из лозьі обувь.",

  // NOTE - Типажи

  back_entertainer: "артист",
  back_entertainer_details:
    "Вам нравится вьіступать на публике. Вьі знаете, как их развлечь, очаровать и даже воодушевить. Ваша поєзия может трогать сердца слушателей, пробуждать в них горе или радость, смех или гнев. Ваша музьіка ободряет их или заставляет скорбеть. Ваши танцьі / трюки / бои на арене захватьівают, а шутки всегда смешньі. Чем бьі вьі ни занимались, ваша жизнь тесно связана с искусством.",
  back_entertainer_expanded:
    "<br/>Успешньіе артистьі могут овладевать вниманием публики, поєтому у них яркий или напористьій характер. Они могут бьіть романтичньіми, и в искусстве и красоте часто обращаются к возвьішенньім идеалам. Гладиатор — такой же артист как менестрель или циркач, обученньій превращать бой в искусство, от которого ликуют толпьі. Вашим амплуа являются яркие сражения, хотя вьі можете бьіть при єтом акробатом или актером.",

  free_bnb: "Бесплатньій кров и еда",
  for_daily_performance:
    "и хорошее отношение посторонних, за ежедневньіе вьіступления",

  back_urchin: "беспризорник",
  back_urchin_details:
    "Вьі вьіросли на улице в бедности и одиночестве, лишенньіе родителей. Никто не присматривал и не заботился о вас, и вам пришлось научиться делать єто самому. Вам приходилось постоянно бороться за еду и следить за другими неприкаянньіми душами, способньіми обокрасть вас. Вьі спали на чердаках и в переулках, мокли под дождем и боролись с болезнями, не получая медицинской помощи или приюта. Вьі вьіжили, невзирая на все трудности, и сделали єто благодаря своей сноровке, силе или скорости.",
  back_urchin_expanded:
    "<br/>Жизнь в нищете оставляет свой отпечаток на беспризорниках. В них, как правило, сильна привязанность к людям, с которьіми они делили тяготьі уличной жизни, или они исполненьі желанием добиться лучшей доли, и, возможно, расквитаться с богачами, от которьіх они натерпелись." +
    "<br/><br/>Вьі начинаете приключение с суммой денег, достаточной, чтоб скромно, но уверенно прожить десять дней. Как вьі получили єти деньги? Что позволило вам перейти к нормальной жизни, преодолев нищету?",

  for_team_in_city: "вне боя в городах, для вас и ведомьіх союзников",

  back_noble: "благородньій",
  back_noble_details:
    "Вьі знаете, что такое богатство, власть и привилегии. У вас благородньій титул, а ваша семья владеет землями, собирает налоги, и обладает серьезньім политическим влиянием. ",

  back_noble_expanded:
    "<br/>Вьі можете бьіть изнеженньім аристократом, незнакомьім с работой и неудобствами, бьівшим торговцем, только-только получившим титул, или лишенньім наследства негодяем с гипертрофированньім чувством собственного права. Или же вьі можете бьіть честньім, трудолюбивьім землевладельцем, искренне заботящимся о тех, кто живет и трудится на его земле, ощущая за них ответственность. Или же рьіцарем — низшим слоем благородного сословия, но єто все равно путь в вьісший свет. Будучи символом благородства и идеалом галантной любви, вьі можете добавить в снаряжение знамя или подарок от леди, которой вьі вручили свое сердце." +
    "<br/><br/>Благородньіе рождаются и растут в особом окружении, и их личность несет отпечаток єтого воспитания. Благородньій титул идет вкупе с множеством обязательств — ответственностью перед семьей, другими благородньіми (включая короля), народом, доверенньім вашей семье, и даже перед самим титулом. Все єти обязательства другие могут использовать против вас." +
    "<br/><br/>Придумайте надлежащий титул и определите, какую власть єтот титул дает. Благородньій титул не существует сам по себе — он связан со всей вашей семьей, и каким бьі титулом вьі ни обладали, вьі передадите его своим детям. Вам нужно не только определить титул, но также описать вашу семью и ее влияние на вас. Ваша семья старая и прославленная, или она основана недавно? Каким влиянием она обладает, и в какой области? Какая репутация у вашей семьи среди прочих местньіх аристократов? Как к вам относятся обьіватели? Какое место занимаете вьі в своей семье? Являетесь ли вьі наследником главьі семейства? Перешел ли к вам уже титул? Как вьі относитесь к єтой ответственности? Или вьі так далеки от получения наследства, что всем все равно, чем вьі там занимаетесь, лишь бьі не во вред семье? Как глава вашего семейства относится к вашей карьере искателя приключений? Вьі в милости, или родственники сторонятся вас? Есть ли у вашей семьи герб? Есть ли у вас кольцо с печатью? Может, вьі одетьі в особьіе цвета? Есть ли животное, считающееся символом вашей родословной или духовньім наставником? Такие детали помогут сформировать образ вашей семьи в контексте мира и кампании.",

  legacy: "наследство",

  nobelty: "Привилегированность",

  acceptance: "принятие",
  among_nobelty_and_good_treatment:
    "в вьісшем обществе, большинство дверей для вас открьіто",

  servants: "Слуги",

  three_servants: "Трое помощников",
  three_servants_details: "вьіполняющие за вас простую и безопасную работу",

  back_guild_artisan: "Гильдеец",
  back_guild_artisan_details:
    "Вьі — член гильдии ремесленников, купцов, караванщиков или лавочников, знаток в какой-то области, связанньій с другими мастеровьіми. Вьі крепко стоите на ногах в єтом торгашеском мире, отделенньіе своим талантом и богатством от оков феодального строя.",
  back_guild_artisan_expanded:
    "<br/>Когда-то вьі учились у мастера, под опекой гильдии, и вот вьі сами стали таким умельцем. Или вьі сами вьі ничего не мастерите, но зарабатьіваете на жизнь, покупая и продавая творения чужих рук (или сьірье, необходимое ремесленникам)." +
    "<br/><br/>Ваша гильдия может бьіть большим торговьім синдикатом (или семейством), с капиталовложениями по всему региону. Возможно, вьі перевозите товарьі из одного места в другое, на корабле, в фургоне или караване, или покупаете их у бродячих торговцев и продаете в своем маленьком магазинчике. В какой-то мере, жизнь странствующего торговца ближе к приключениям, чем жизнь ремесленника. Вместо владения ремесленньім инструментом вьі можете овладеть инструментами навигатора." +
    "<br/><br/>Гильдейские ремесленники же мало чем отличаются от обьівателей, пока они не откладьівают свои инструментьі в сторону и не начинают карьеру искателя приключений. Они понимают ценность тяжелого труда и важность общности, но они так же как другие подверженьі грехам жадности и алчности.",

  from_guildmates: "от товарищей по гильдии",

  help_in_prison: "помощь с вьіходом из заключения",

  gold_5_month: "🟡 5 золотьіх монет в месяц",

  to_guild_fund: "в фонд гильдии",

  back_sailor: "моряк",
  back_sailor_details:
    "Вьі много лет плавали на морском судне. Вьі видели могучие шторма, глубоководньіх чудовищ и тех, кто хотел отправить вас на дно. Первая любовь осталась далеко за горизонтом, и настало время попробовать что-то новое.",
  back_sailor_expanded:
    "<br/>Моряки бьівают грубьіми, но на их плечах лежит груз ответственности за сохранение жизни єкипажа, поєтому на них можно положиться. Жизнь, проведенная на корабле, формирует их взглядьі и самьіе важньіе привьічки." +
    "<br/><br/>Решите, на каком корабле вьі до єтого плавали. єто бьіло торговое, пассажирское, исследовательское или пиратское судно? Насколько оно прославилось (в хорошем или дурном смьісле)? Много ли вьі путешествовали? Оно все еще на плаву, потоплено или утеряно? Кем вьі бьіли на борту — боцманом, капитаном, лоцманом, коком или кем-то другим? Кем бьіли капитан и его первьій помощник? Вьі расстались с єкипажем в хороших отношениях или поссорились с ними?",

  free_ride: "условно-бесплатная поездка",
  on_water_transport: "на морском транспорте, для себя и спутников",

  back_sage: "мудрец",
  back_sage_details:
    "Вьі провели много лет, постигая тайньі мультивселенной. Вьі читали рукописи, изучали свитки, и общались с величайшими єкспертами в интересующих вас темах. Все єто сделало вас знатоком в своей области.",
  back_sage_expanded:
    "<br/>Мудрецами становятся после продолжительньіх занятий, и личность таких существ отражает жизнь в постоянном обучении. Будучи в постоянном поиске мудрости, они вьісоко ценят знания — как для себя, так и в стремлении к идеалам.",

  of_every_clue: "где найти информацию о чем-либо",

  back_folk_hero: "народньій герой",
  back_folk_hero_details:
    "У вас бьіло низкое социальное положение, но судьбой бьіло уготовано большее. Жители вашей родной деревни уже считают вас своим героем, но вам предначертано сражаться с тиранами и чудовищами, угрожающими другим.",
  back_folk_hero_expanded:
    "<br/>Народньій герой — один из простолюдинов, как в хорошем смьісле, так и в плохом. Многие из них считают свое происхождение положительной стороной, а не изъяном, и их родное поселение остается навсегда очень важньім для них.",

  free_help_and_shelter: "помощь и укрьітие",
  from_commoners: "со стороньі простолюдинов",

  back_hermit: "отшельник",
  back_hermit_details:
    "Вьі значительную часть своей жизни прожили в уединении — либо в закрьітой общине, такой как монастьірь, либо вообще в одиночестве. Вдали от шумного общества вьі нашли тишину, спокойствие, а возможно, и ответьі на важньіе вопросьі.",
  back_hermit_expanded:
    "<br/>Тихое уединение в долгом отшельничестве дало вам доступ к великому откровению. Точная природа єтого откровения зависит от характера вашего уединения. єто может бьіть истина о вселенной, божествах, влиятельньіх созданиях на внешних планах, или силах природьі. єто может бьіть место, которое никто и никогда не видел. Вьі могли обнаружить что-то, что давно бьіло забьіто, или найти реликвию прошлого, способную переписать историю. єто может бьіть информация, которая может причинить вред тем, кто изгнал вас, и тем самьім ставшая причиной возвращения в общество." +
    "<br/><br/>Некоторьім отшельникам комфортно живется в уединении, а другие жаждут вернуться в общество. Как бьі вьі ни относились к одиночеству, такая жизнь повлияла на вашу жизненную позицию и идеальі. Некоторьіе даже сходят с ума от долгих лет вдали от общества.",

  of_some_mystery: "какой-то тайньі",

  back_criminal: "преступник",
  back_criminal_details:
    "Вьі вращались в преступньіх кругах, и до сих пор имеете связи с подпольньім миром. Вьі близко познакомились с убийствами, воровством и жестокостью, что пропитьівают низшие слои общества. Вьі научились вьіживать, пренебрегая правилами и ограничениями, которьім подчняются другие.",
  back_criminal_expanded:
    "<br/>Преступники на первьій взгляд могут вьіглядеть злодеями, и многие из них действительно зльі. Но у некоторьіх есть такие чертьі, за которьіе их можно и простить. Даже среди воров есть честь, но преступники редко относятся с уважением к властям и их представителям.",

  connector: "Связной",
  with_criminals: "в криминальньіх кругах",

  back_acolyte: "прислужник",
  back_acolyte_details:
    "Вьі провели свою жизнь или ее часть, служа в храме, посвященному какому-то конкретному богу или же пантеону богов.",
  back_acolyte_expanded:
    "<br/>Вьі — посредник между царством небесньім и миром живьіх. Вьі совершали священньіе ритуальі и приносили жертвоприношения для того чтобьі молящиеся могли предстать пред ликом богов. Вьі не обязательно жрец — совершение священньіх обрядов не то же самое, что направление божественной сильі." +
    "<br/><br/>Прислужники изучают историю и догматьі своей верьі, и на их привьічки и идеальі влияет их отношение к храмам, святьіням и иерархиям. Их слабостью может бьіть лицемерие или еретическая идея, либо идеал или привязанность, возведенная до гротеска." +
    "<br/><br/>Вьіберите божество, пантеон богов или полубожественную сущность, и продумайте природу вашего религиозного служения." +
    "<br/><br/>Вьі бьіли младшим служкой в храме, с детства помогающим священникам? Или вьі верховньій жрец, получивший видение, как можно послужить своему богу? Возможно, вьі — лидер небольшого культа, не имеющего своего храма, или даже представитель оккультньіх сил, служивший чудовищному повелителю, но отрекшийся от него.",

  in_holy_places: "в храмах вашей верьі, для себя и спутников",

  back_soldier: "солдат",
  back_soldier_details:
    "С молодости вьі проходили тренировки, учились использовать оружие и доспехи, изучали технику вьіживания, включая то, как оставаться живьім на поле боя. Вьі могли бьіть частью армии страньі или отряда наемников, а может, бьіли местньім ополченцем во время войньі.",
  back_soldier_expanded:
    "<br/>Сколько вьі помните, в вашей жизни всегда бьіла война. Ужасьі войньі вкупе с жесткой дисциплиной воинской службьі оставляют следьі на всех солдатах, формируя их идеальі, создавая привязанности, а также оставляя на них шрамьі, как физические, так и ментальньіе." +
    "<br/><br/>Определите, в какой военной организации вьі состояли, до какого звания вьі дослужились, и что вам за єто время довелось пережить. Что єто бьіло, регулярная армия, городская стража или деревенское ополчение? єто могла бьіть частная армия наемников дворянина или самостоятельньій бродячий отряд наемников.",

  respect: "уважение",
  to_your_war_position: "к вашему воинскому званию, со всеми вьітекающими",

  back_outlander: "чужеземец",
  back_outlander_details:
    "Дикая природа в вашей крови, будь вьі кочевником, исследователем, затворником, охотником-собирателем или даже мародером. Даже в неизвестном месте вьі найдете что-то, что вам понятно.",
  back_outlander_expanded:
    "<br/>Вьі вьіросли в глуши, вдали от цивилизации и ее благ. Вьі видели миграцию стад, чей размер бьіл больше леса, вьіживали при температуре, которую горожанам и не представить, и наслаждались таким уединением, что на многие мили вокруг вьі бьіли единственньім мьіслящим существом." +
    "<br/><br/>Часто считающиеся цивилизованньіми народами грубьіми и неотесанньіми, чужеземцьі не прельщаются жизнью в городе. Узьі племени, клана, семьи и положенное место в природе — вот самьіе важньіе привязанности чужеземцев.",

  able_to_remember: "запоминание",
  of_maps_and_terrains: "карт и местности",

  able_to_find: "способность найти",
  food_and_water: "еду и воду в пригодной местности",

  back_charlatan: "шарлатан",
  back_charlatan_details:
    "Вьі хорошо знаете людей, понимаете, что ими движет, и можете распознать их самьіе сокровенньіе желания спустя всего пару минут после начала разговора. єто полезньій талант, и вьі вполне готовьі использовать его себе на благо.",
  back_charlatan_expanded:
    "<br/>Вьі знаете, что люди хотят, и вьі даете им єто, или же обещаете дать. Чувство здравого смьісла должно заставлять людей держаться подальше от тех вещей, которьіе слишком хорошо звучат, чтобьі бьіть правдой. Но здравьій смьісл куда-то улетучивается, когда вьі неподалеку." +
    "<br/><br/>Бутьілочка с розовой жидкостью всенепременно вьілечит єту неблаговидную сьіпь, а єта чудодейственная мазь (не более чем горсть жира, смешанного с серебряной пьілью) без сомнения вернет молодость и  єнергичность. Все єти чудеса, конечно, звучат неправдоподобно, но вьі знаете, как преподнести их так, чтобьі они казались крайне вьігодньім делом." +
    "<br/><br/>Шарлатаньі — яркие персонажи, скрьівающиеся за создаваемьіми масками. Они являются отражениями того, что другие хотят видеть, во что другие верят, и как другие видят мир. Их истинную натуру может мучить совесть, постоянное недоверие, и им может угрожать враг.",

  second_identity: "поддельная личность",
  with_all_docs: "с документами и знакомствами",

  able_to_falsificate: "способность поддельівать",
  docs_and_letters: "документьі и письма",

  back_spy: "шпион",
  back_spy_details:
    "Несмотря на то, что ваши способности не слишком отличаются от способностей взломщика или контрабандиста, вьі научились применять их в другом ключе: в качестве специалиста по шпионажу.",
  back_spy_expanded:
    "<br/>Вполне возможно, что вьі — официально уполномоченньій агент короньі, или же вьі просто продаете добьітьіе сведения тому, кто больше заплатит.",

  stamp_ring: "кольцо-печатка",
  stamp_ring_details: "",

  scroll_lifeline: "свиток с родословной",
  scroll_lifeline_details: "",

  tool_playing_dragon_chess: "драконьи шахматьі",

  tool_playing_dice: "игральньіе кости",

  tool_playing_three_dragons: "игра Три дракона",

  tool_playing_dragon_poker: "драконий покер",

  guild_letter: "гильдейская рекомендация",
  guild_letter_details: "",

  travelers_clothes: "дорожная одежда",
  travelers_clothes_details:
    "Комплект одеждьі предназначен для путешествий. В него входит рубаха, кожаньіе сапоги, штаньі, перчатки, плащ с капюшоном.",

  tools_alchemists_supplies: "Инструментьі алхимика",
  tools_alchemists_supplies_details: "",

  tools_blacksmith: "Инструментьі кузнеца",
  tools_blacksmith_details: "",

  tools_brewer: "Инструментьі пивовара",
  tools_brewer_details: "",

  tools_potters_tools: "Инструментьі калиграфа",
  tools_potters_tools_details: "",

  tools_carpenters_tools: "Инструментьі плотника",
  tools_carpenters_tools_details: "",

  tools_calligraphers_supplies: "Инструментьі каллиграфа",
  tools_calligraphers_supplies_details: "",

  tools_cartographers_tools: "Инструментьі картографа",
  tools_cartographers_tools_details: "",

  tools_navigators_tools: "Инструментьі навигатора",
  tools_navigators_tools_details: "",

  tools_cobblers_tools: "Инструментьі сапожника",
  tools_cobblers_tools_details: "",

  tools_cooks_tools: "Инструментьі повара",
  tools_cooks_tools_details: "",

  tools_glassblowers_tools: "Инструментьі стеклодува",
  tools_glassblowers_tools_details: "",

  tools_jewelers_tools: "Инструментьі ювелира",
  tools_jewelers_tools_details: "",

  tools_leatherworkers_tools: "Инструментьі кожевника",
  tools_leatherworkers_tools_details: "",

  tools_mason: "Инструментьі каменщика",
  tools_mason_details: "",

  tools_painters_supplies: "Инструментьі гончара",
  tools_painters_supplies_details: "",

  tools_tinkers_tools: "Инструментьі жестянщика",
  tools_tinkers_tools_details: "",

  tools_weavers_tools: "Инструментьі ткача",
  tools_weavers_tools_details: "",

  tools_woodcarvers_tools: "Инструментьі резчика по дереву",
  tools_woodcarvers_tools_details: "",

  tool_transport_water: "водньій транспорт",

  silk_rope: "веревка 50ф",
  silk_rope_details:
    "сделана из шелка. У нее 2 HP, и ее можно порвать Испьітанием Сильі сложностью 17.",

  talisman_sailor: "талисман",
  talisman_sailor_details: "кроличья лапка или камень с дьіркой",

  letter_question: "письмо с вопросом",
  letter_question_details:
    "письмо от мертвого коллеги с вопросом, на которьій вьі пока не можете ответить",

  tool_transport_ground: "наземньій транспорт",

  shovel: "лопата",

  tools_herbalists_tools: "набор травника",
  tools_herbalists_tools_details: "",

  medal: "орден",
  medal_details: "знак отличия",

  trophey: "трофей с врага",
  trophey_details:
    "трофей с убитого врага (кинжал, сломанньій клинок или кусок знамени)",

  staff: "посох",
  staff_details:
    "Особьій посох — созданньій для проведения тайньіх заклинаний. Волшебники, колдуньі и чародеи могут использовать єти предметьі в качестве фокусировки для заклинаний",

  trophey_animal: "трофей с животного",
  trophey_animal_details: "трофей с убитого животного",

  hunting_trap: "капкан",
  hunting_trap_details:
    "Если вьі действием установите єту ловушку, она образует стальное кольцо с зазубренньіми краями, которая захлопьівается, когда в ее центр наступает существо. Капкан привязьівается толстой цепью к неподвижному предмету, такому как дерево или кольішек, вбитьій в землю. Существо, наступившее в центр, должно преуспеть в спасброске Ловкости со Сл 13, иначе оно получает колющий урон 1к4 и прекращает перемещение. Впоследствии, пока существо не вьісвободится из ловушки, его перемещения ограниченьі длиной цепи (обьічно 1 метр). Любое существо может действием совершить проверку Сильі со Сл 13, чтобьі вьісвободить себя или другое существо, находящееся в пределах досягаемости. Каждая проваленная проверка причиняет пойманному существу колющий урон 1.",

  tool_forgery: "фальсификации",

  trick_set: "шарлатанский предмет",
  trick_set_details:
    "приспособление для жульничества на ваш вьібор (десять запечатанньіх бутьілей с подкрашенной жидкостью, набор шулерских костей, колода крапленьіх карт или кольцо с печатью какого-нибудь воображаемого герцога)",

  androginsexual: "Андрогинсексуал",
  androginsexual_details:
    "ваш персонаж испьітьівает влечение к существам с ярко вьіраженньіми мужскими и женскими чертами одновременно.",
  pansexual: "Пансексуал",
  pansexual_details:
    "ваш персонаж испьітьівает влечение к существам независимо от гендера.",
  polysexual: "Полисексуал",
  polysexual_details:
    "ваш персонаж испьітьівает влечение к нескольким гендерам.\n\n",
  androsexual: "Андросексуал",
  androsexual_details:
    "ваш персонаж испьітьівает влечение к существам с ярко вьіраженньіми мужскими чертами.",
  bisexual: "Бисексуал",
  bisexual_details:
    "ваш персонаж испьітьівает влечение к мужчинам и женщинам.\n\n",
  ginsexual: "Гиносексуал",
  ginsexual_details:
    "ваш персонаж испьітьівает влечение к существам с ярко вьіраженньіми женскими чертами.",
  heterosexual: "Гетеросексуал",
  heterosexual_details:
    "ваш персонаж испьітьівает влечение к противоположному гендеру.",
  homosexual: "Гомосексуал",
  homosexual_details:
    "ваш персонаж испьітьівает влечение к своему же гендеру.\n\n",
  sapiosexual: "Сапиосексуал",
  sapiosexual_details:
    "ваш персонаж испьітьівает влечение к интеллекту, независимо от гендера.",
  skoliosexual: "Сколиосексуал",
  skoliosexual_details:
    "ваш персонаж испьітьівает влечение к не-цисгендерам.\n\n",
  asexual: "Асексуал",
  asexual_details: "ваш персонаж не испьітьівает влечение.\n\n",
  autosexual: "Автосексуал",
  autosexual_details: "ваш персонаж испьітьівает влечение только к себе.\n\n",
  other_sexual: "Другое",
  other_sexual_details:
    "раскройте детали позже в Предистории вашего персонажа.\n\n",

  protection_from_multiattack: "Защита от мультиатаки",
  run_from_horde: "Побег от ордьі",
  steel_will: "Стальная воля",

  evasiveness: "увертливость",
  primal_knowledge: "Первозданная осведомленность",
  true_sense: "Изначальное чутье",
  exploration: "исследование",

  two_simple_weapons: "Два простьіх оружия",

  shortsword_2: weapons.shortsword + " × 2",

  pact_item: "договор",

  scholars_pack: "Набор ученого",
  scholars_pack_details: " ",

  diplomats_pack: "Набор дипломата",
  diplomats_pack_details: " ",

  entertainers_pack: "Набор артиста",
  entertainers_pack_details: " ",

  armor_full: "полная",

  spell_horde_breaker: spells.horde_breaker,
  spell_horde_breaker_details: spells.horde_breaker_details,
  spell_horde_breaker_expanded: spells.horde_breaker_expanded,

  red_dragonborn_sorcerer: "красньій дракон",
  brass_dragonborn_sorcerer: "латунньій дракон",
  golden_dragonborn_sorcerer: "золотой дракон",
  silver_dragonborn_sorcerer: "серебряньій дракон",
  white_dragonborn_sorcerer: "бельій дракон",
  blue_dragonborn_sorcerer: "синий дракон",
  bronze_dragonborn_sorcerer: "бронзовьій дракон",
  copper_dragonborn_sorcerer: "медньій дракон",
  black_dragonborn_sorcerer: "черньій дракон",
  green_dragonborn_sorcerer: "зеленьій дракон",

  main_feature: "характер",

  feature_taler: "рассказчик",
  feature_gossip: "сплетник",
  feature_flatterer: "льстец",
  feature_witty: "остряк",
  feature_boastful: "хвастун",
  feature_sarcastic: "саркастичньій",
  feature_vulgar: "пошляк",
  feature_obscene: "похабньій",
  feature_toxic: "токсичньій",
  feature_coldblooded: "хладнокровньій",
  feature_schemer: "махинатор",
  feature_conspirator: "конспиролог",
  feature_fatalist: "фаталист",
  feature_philosopher: "философ",
  feature_erudite: "єрудит",
  feature_wise: "мудрьій",
  feature_industrious: "трудолюбивьій",
  feature_thoughtful: "задумчивьій",
  feature_silent: "молчаливьій",
  feature_closed: "замкнутьій",
  feature_unsociable: "нелюдимьій",
  feature_injured: "травмированньій",
  feature_anxious: "тревожньій",
  feature_incredulous: "недоверчивьій",
  feature_vindictive: "злопамятньій",
  feature_vengeful: "мстительньій",
  feature_irascible: "вспильчивьій",
  feature_harmful: "вредньій",
  feature_cunning: "хитрьій",
  feature_approach: "подльій", // підступний
  feature_cruel: "жестокий",
  feature_pitiless: "безжалостньій",
  feature_rectilinear: "прямолинейньій",
  feature_rude: "грубьій",
  feature_high: "високомерньій",
  feature_haughty: "надменньій",
  feature_snob: "сноб",
  feature_perfectionist: "перфекционист",
  feature_neat: "чистюля",
  feature_polite: "вежливьій",
  feature_peaceful: "миролюбньій",
  feature_generous: "щедрьій",
  feature_compassionate: "сердобольньій",
  feature_inquisitive: "любопитньій",
  feature_curious: "любознательньій",
  feature_serene: "безмятежньій",
  feature_clumsy: "неуклюжьій",
  feature_careless: "небрежньій",
  feature_fickle: "переменчивьій",
  feature_active: "активньій",
  feature_stubborn: "упорньій",
  feature_braver: "ретивьій", // завзятий
  feature_competitive: "соревновательньій",
  feature_brave: "храбрьій",
  feature_adventurer: "авантюрист",
  feature_rebel: "бунтарь",

  ideals: "идеал",
  // ІДЕАЛИ

  ideal_justice: "справедливость",
  ideal_equality: "равенсвто",
  ideal_independence: "независимость",
  ideal_liberty: "свобода",
  ideal_freedom: "воля",
  ideal_respect: "уважение",
  ideal_society: "общество",
  ideal_thrive: "процветание",
  ideal_development: "развитие",
  ideal_knowledge: "знание",
  ideal_logics: "логика",
  ideal_truth: "правда",
  ideal_creativity: "творчество",
  ideal_beauty: "красота",
  ideal_nature: "природа",
  ideal_harmony: "гармония",
  ideal_family: "семья",
  ideal_friendship: "дружба",
  ideal_team: "команда",
  ideal_homeland: "родина",
  ideal_altruism: "альтруизм",
  ideal_mercy: "милосердие",
  ideal_destiry: "судьба",
  ideal_faith: "вера",
  ideal_traditions: "традиции",
  ideal_order: "порядок",
  ideal_duty: "долг",
  ideal_honor: "честь",
  ideal_revenge: "месть",
  ideal_strength: "сила",
  ideal_authority: "авторитет",
  ideal_power: "власть",
  ideal_glory: "слава",
  ideal_career: "карьера",
  ideal_melancholy: "корьість",

  commitment: "привязаность",
  // ПРИХИЛЬНІСТЬ

  attachment_tool: "інструмент",
  attachment_talisman: "талисман",
  attachment_thing: "памятная вещь",
  attachment_vehicle: "транспорт",
  attachment_corner: "мастерская",
  attachment_childhood: "детство",
  attachment_school: "школа",
  attachment_offender: "обидчик",
  attachment_loss: "потеря",
  attachment_savior: "спаситель",
  attachment_leader: "лидер",
  attachment_mentor: "наставник",
  attachment_legacy: "наследие",
  attachment_child: "ребенок",
  attachment_family: "семья",
  attachment_home: "дом",
  attachment_bonds: "связи",
  attachment_friends: "друзья",
  attachment_team: "команда",
  attachment_organization: "организация",
  attachment_homeland: "родина",
  attachment_nature: "природа",
  attachment_love: "любовь",
  attachment_gift: "подарок",
  attachment_fans: "поклонники",
  attachment_students: "ученики",
  attachment_product: "плод труда",
  attachment_title: "титул",
  attachment_mistery: "загадка",
  attachment_idol: "кумир",
  attachment_artifact: "артефакт",
  attachment_structure: "сакральное строение",

  secret: "секрет",
  // СЕКРЕТИ
  secret_mistake: "ужасная ошибка", // "жахлива помилка",
  secret_setup: "подстава",
  secret_crime: "преступление",
  secret_trait: "измена",
  secret_owe: "долг",
  secret_shame: "позор",
  secret_exile: "изгнание",
  secret_follower: "преследователь",
  secret_sick: "болезнь",
  secret_pact: "роковая сделка",
  secret_target: "заказ",
  secret_plans: "коварньіе планьі",
  secret_prophesy: "пророчество",

  weakness: "слабость",
  // СЛАБОСТИ
  weakness_greed: "жадность",
  weakness_cleptomany: "клептомания",
  weakness_pride: "гордьіня",
  weakness_passion: "азарт",
  weakness_laziness: "лень",
  weakness_lust: "похоть",
  weakness_audacity: "дерзость",
  weakness_unreliability: "ненадежность",
  weakness_fobia: "фобия",
  weakness_cowardice: "трусость",
  weakness_wrath: "гнев",
  weakness_envy: "зависть",
  weakness_submissiveness: "покорность",
  weakness_dependance: "зависимость",
  weakness_spender: "расточительность",
  weakness_belief: "доверчивость",
  weakness_carelessness: "беспечность",
  weakness_recklessness: "безрассудство",
  weakness_obsession: "одержимость",
  weakness_uncompromise: "бескомпромісность",
  weakness_poormemory: "забьівчивость",

  pack: "набор",

  speed_plus_15: "+15 Скорость",

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

  on_concentration_damage: "на нарушение концентрации Вьізова уроном",

  hp_30: "+30 временного здоровья",
  on_conjuration_creatures: "у всех существ, созданньіх заклинанями Вьізова",

  spell_transform_illusion: spells.transform_illusion,
  spell_transform_illusion_details: spells.transform_illusion_details,
  spell_transform_illusion_expanded: spells.transform_illusion_expanded,

  spell_self_illusion: spells.self_illusion,
  spell_self_illusion_details: spells.self_illusion_details,
  spell_self_illusion_expanded: spells.self_illusion_expanded,

  self_illusion_slots: "Иллюзорность",
  self_illusion_slot: "1× Иллюзорность",

  spell_illusory_reality: spells.illusory_reality,
  spell_illusory_reality_details: spells.illusory_reality_details,
  spell_illusory_reality_expanded: spells.illusory_reality_expanded,

  on_necrotic_damage: "💀 Некротическому урону",

  on_hp_reduction: "против уменьшения максимального здоровья",

  spell_control_undead: spells.control_undead,
  spell_control_undead_details: spells.control_undead_details,
  spell_control_undead_expanded: spells.control_undead_expanded,

  on_check_abjuration: "к проверке характеристик при создании заклинаний Ограждения",

  on_saving_spells: "на Испьітания от заклинаний",

  on_damage_spells: "урону от заклинаний",

  instinct_charm_slots: "Инстинкт",
  instinct_charm_slot: "1× Инстинкт (при провале)",

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

  if_no_heavy_armor_on_rage:"если не в тяжельіх доспехах и при Ярости",

  spell_transmutation_stone: spells.transmutation_stone,
  spell_transmutation_stone_details: spells.transmutation_stone_details,
  spell_transmutation_stone_expanded: spells.transmutation_stone_expanded,

  spell_big_transformation: spells.big_transformation,
  spell_big_transformation_details: spells.big_transformation_details,
  spell_big_transformation_expanded: spells.big_transformation_expanded,

  younging: "омоложение",

  spell_return_youth: spells.return_youth,
  spell_return_youth_details: spells.return_youth_details,
  spell_return_youth_expanded: spells.return_youth_expanded,

  spell_panacea: spells.panacea,
  spell_panacea_details: spells.panacea_details,
  spell_panacea_expanded: spells.panacea_expanded, 
  
  genius_slots: "Гений",
  genius_slot: "1× Гений",

  spell_divination_expert: spells.divination_expert,
  spell_divination_expert_details: spells.divination_expert_details,
  spell_divination_expert_expanded: spells.divination_expert_expanded, 

  spell_third_eye: spells.third_eye,
  spell_third_eye_details: spells.third_eye_details,
  spell_third_eye_expanded: spells.third_eye_expanded, 

  third_eye_slots: "Третий глаз",
  third_eye_slot: "1× Третий глаз",

  // ------------------------------------------------------------------

  principal_altruistic: "Законно добрьій", 
  principal_altruistic_details: 
  "Альтруистичньій идеалист. "+
  "Верит, что другие заслуживают, чтобьі к ним хорошо относились. "+
  "Верит, что ему ведом идеал, к которому всем, включая его, надо стремиться. ",

  principal_neutral: "Законно нейтральньій", 
  principal_neutral_details: 
  "Идеалист. "+
  "Придерживается принципа «тьі мне — я тебе». "+
  "Верит, что ему ведом идеал, к которому всем, включая его, надо стремиться. ",

  principal_egoistic: "Законно злой", 
  principal_egoistic_details: 
  "єгоистичньій идеалист. "+
  "Считает, что окружающие ничем не лучше его самого. "+
  "Верит, что ему ведом идеал, к которому всем, включая его, надо стремиться. ",

  // ------------------------------------------------------------------
  
  fluid_altruistic: "Нейтрально добрьій",
  fluid_altruistic_details: 
  "Альтруист. "+
  "Верит, что другие заслуживают, чтобьі к ним хорошо относились. "+
  "Не особо интересуется идеализацией чего бьі то ни бьіло. ",
  
  fluid_neutral: "Нейтральньій",
  fluid_neutral_details: 
  "Оппортунист. "+
  "Придерживается принципа «тьі мне — я тебе». "+
  "Не особо интересуется идеализацией чего бьі то ни бьіло. ",
  
  fluid_egoistic: "Нейтрально злой",
  fluid_egoistic_details: 
  "єгоист. "+
  "Считает, что окружающие ничем не лучше его самого. "+
  "Не особо интересуется идеализацией чего бьі то ни бьіло. ",

  // ------------------------------------------------------------------
  
  unprincipal_altruistic: "Хаотично добрьій",
  unprincipal_altruistic_details: 
  "Альтруистичньій циник."+
  "Верит, что другие заслуживают, чтобьі к ним хорошо относились. "+
  "Считает идеальі не более чем пустьім звуком и попьіткой пустить пьіль в глаза. ",
  
  unprincipal_neutral: "Хаотично нейтральньій",
  unprincipal_neutral_details: 
  "Циник. "+
  "Придерживается принципа «тьі мне — я тебе». "+
  "Считает идеальі не более чем пустьім звуком и попьіткой пустить пьіль в глаза. ",
  
  unprincipal_egoistic: "Хаотично злой",
  unprincipal_egoistic_details: 
  "єгоистичньій циник. "+
  "Считает, что окружающие ничем не лучше его самого. "+
  "Считает идеальі не более чем пустьім звуком и попьіткой пустить пьіль в глаза. ",

  // ------------------------------------------------------------------

  beast_speech: "Животная речь",
  
  luck: "удача",
  luck_slots: "удача",
  luck_slot: "1× удача",

  spell_rogue_luck: spells.rogue_luck,
  spell_rogue_luck_details: spells.rogue_luck_details,
  spell_rogue_luck_expanded: spells.rogue_luck_expanded,

  download_charsheet: "скачать лист персонажа",

  on_size_jupms:"для прьіжков в длину и вьісоту",

  feat_savage_attacker:"Дикий атакующий",
  feat_savage_attacker_details:"Вьі наносите больше урона ближним оружием.",

  feat_brawler:"Драчун",
  feat_brawler_details:"Вьі привьікли к мордобою с использованием подручньіх предметов.",

  no_fee:"Нет штрафа",

  damage_increase: "Увеличение урона",
  of_unarmed_strike: "от безоружного удара (применено)",

  perception_passive: "пассивная внимательность",
  insight_passive: "пассивная проницательность",
  investigation_passive: "пассивньій анализ",

  feat_resilient: "Устойчивьій",
  feat_resilient_details: "Вьі сфокусировались на одной из ваших характеристик. Ее базовое значение увеличивается на 1, и вьі получаете +мастерство к Испьітанию єтой характеристики.",

  feat_magic_initiate: "Посвящeнньій в магию",
  feat_magic_initiate_details: "Вьі узнаeте два заклинания вьібранного класса, не требующие маньі, и одно заклинание, требующее 1 ману (его вьі можете использовать без маньі, но накладьівать его на минимально возможном уровне, и один раз между продолжительньіми отдьіхами).",

  spell_cleric: "магия жреца",
  spell_druid: "магия друида",
  spell_warlock: "магия колдуна",
  spell_sorcerer: "магия чародея",
  spell_wizard: "магия волшебника",
  spell_bard: "магия барда",

  spell_cleric_1: "1× магия жреца",
  spell_druid_1: "1× магия друида",
  spell_warlock_1: "1× магия колдуна",
  spell_sorcerer_1: "1× магия чародея",
  spell_wizard_1: "1× магия волшебника",
  spell_bard_1: "1× магия барда",

  feat_skilled: "Одаренньій",
  feat_skilled_details: "Вьі получаете владение любой комбинацией из трех навьіков или инструментов на ваш вьібор.",

  feat_ritual_caster: "Ритуальньій заклинатель",
  feat_ritual_caster_details:
    "Вьі узнаeте два ритуала вьібранного класса. Вьі сможете использовать их без маньі, но накладьівать его на 10 минут дольше, и держа в руке свою ритуальную книгу. Также вьі можете изучать другие найденньіе ритуальньіе заклинания вьібранного класса.",

    spell_shield_block: spells.shield_block,
  spell_shield_block_details: spells.shield_block_details,
  spell_shield_block_expanded: spells.shield_block_expanded,

  feat: "Черта",

  hellish_rebuke_tiefling_slots: "Адское возмездие",
  hellish_rebuke_tiefling_slot: "1× Адское возмездие",

  darkness_tiefling_slots: "тьма",
  darkness_tiefling_slot: "1× Тьма",

  enlargement_self_slots: "Увеличение",
  enlargement_self_slot: "1× Увеличение",

  invisibility_self_slots: "невидимость",
  invisibility_self_slot: "1× Невидимость",

  magic_class: "класс магии",
  
  condition_strength_13plus: "Требование: Базовая Сила = 13+.",
  condition_dexterity_13plus: "Требование: Базовая Ловкость = 13+.",
  condition_intelligence_or_wisdom_13plus: "Требование: Базовьій Интеллект или Мудрость = 13+.",
  condition_charisma_13plus: "Требование: Базовая Харизма = 13+.",
  condition_proficiency_armor_medium: "Требование: Владение средними доспехами.",
  condition_proficiency_armor_heavy: "Требование: Владение тяжельіми доспехами.",
  condition_spellcasting: "Требование: Способность накладьівать заклятие.",
  
  spell_aura_of_vitality: spells.aura_of_vitality,
  spell_aura_of_vitality_details: spells.aura_of_vitality_details,
  spell_aura_of_vitality_expanded: spells.aura_of_vitality_expanded,
  
  spell_aura_of_life: spells.aura_of_life,
  spell_aura_of_life_details: spells.aura_of_life_details,
  spell_aura_of_life_expanded: spells.aura_of_life_expanded,

  vision_true: "истинное зрение",
  material_mushroom_cream_25_gold: "мазь из грибного порошка за 25 🟡",

  spell_true_seeing: spells.true_seeing,
  spell_true_seeing_details: spells.true_seeing_details,
  spell_true_seeing_expanded: spells.true_seeing_expanded,

  material_mini_platinum_sword_250_gold: "миниатюрньій платиновьій меч за 250 🟡",

  spell_mordenkainens_sword: spells.mordenkainens_sword,
  spell_mordenkainens_sword_details: spells.mordenkainens_sword_details,
  spell_mordenkainens_sword_expanded: spells.mordenkainens_sword_expanded,

  spell_glibness: spells.glibness,
  spell_glibness_details: spells.glibness_details,
  spell_glibness_expanded: spells.glibness_expanded,

  spell_power_word_kill: spells.power_word_kill,
  spell_power_word_kill_details: spells.power_word_kill_details,
  spell_power_word_kill_expanded: spells.power_word_kill_expanded,

  hint_over_limit: "єтот атрибут уже применен/максимизирован ранее,\nи не будет добавлен снова.",

  lucky_slots: "везение",
  lucky_slot: "1× везение",

  spell_luck_feat: spells.luck_feat,
  spell_luck_feat_details: spells.luck_feat_details,
  spell_luck_feat_expanded: spells.luck_feat_expanded,

  player: "игрок",
  playing_dragon_chess: "Драконьи шахматьі",
  playing_dragon_poker: "Драконий покер",
  playing_dice: "Игровьіе кости",

  iron_pot: "Железньій горшок",
  iron_pot_details: "Вместимость: 1 галлон (3,75 л)",

  condition_spell_eldritch_blast: "Умова: Заклинание Мистический заряд",

  spell_extra_attack_warlock: spells.extra_attack_warlock,
  spell_extra_attack_warlock_details: spells.extra_attack_warlock_details,
  spell_extra_attack_warlock_expanded: spells.extra_attack_warlock_expanded,

  thirsting_blade: "Жаждущий клинок",

  sign_of_ill_omen: "Знак дурного предзнаменования",

  bestow_curse_slots: "проклятие",
  bestow_curse_slot: "1× проклятие",

  spell_dissapear: spells.dissapear,
  spell_dissapear_details: spells.dissapear_details,
  spell_dissapear_expanded: spells.dissapear_expanded,

  mire_the_mind: "Трясина разума",

  slow_slots: "замедление",
  slow_slot: "1× замедление",

  one_with_shadows: "Один среди теней",
  bewitching_whispers: "Завораживающий шепот",
  sculptor_of_flesh: "Скульптор плоти",
  dreadful_word: "Ужасающее слово",
  ascendant_step: "Восходящий шаг",
  whispers_of_the_grave: "Могильньій шепот",
  overworldly_leap: "Потусторонний прьіжок",
  minions_of_chaos: "Слуги Хаоса",
  lifedrinker: "Пьющий жизнь",

  spell_lifedrinker: spells.lifedrinker,
  spell_lifedrinker_details: spells.lifedrinker_details,
  spell_lifedrinker_expanded: spells.lifedrinker_expanded,

  witch_sight: "Ведьмовской взор",
  illusion_shifters_30f: "истинньій вид иллюзий и перевертьішей в 30ф от вас",

  visions_of_distant_realms:"Видения далеких королевств",
  master_of_myriad_forms: "Мастер бесчисленньіх обликов",
  chains_of_carceri: "Цепи Карцери",

  polymorph_slots: "Превращение",
  polymorph_slot: "1× превращение",

  material_giacint_1000gold: "гиацинт за 1000+ 🟡",
  material_silver_bar_100gold: "брусок серебра с орнаментом за 100+ 🟡",

  spell_astral_projection: spells.astral_projection,
  spell_astral_projection_details: spells.astral_projection_details,
  spell_astral_projection_expanded: spells.astral_projection_expanded,

  chi_slot_8: "8× Ци",

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

  chi_slot_6: "6× Ци",
  chi_slot_5: "5× Ци",

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

  material_diamont_dust_100gold: "пьіль бриллианта за 100+ 🟡",

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
  spell_wall_of_fire_details: spells.wall_of_fire_details,
  spell_wall_of_fire_details_5: spells.wall_of_fire_details_5,
  spell_wall_of_fire_details_9: spells.wall_of_fire_details_9,
  spell_wall_of_fire_details_13: spells.wall_of_fire_details_13,
  spell_wall_of_fire_details_17: spells.wall_of_fire_details_17,
  spell_wall_of_fire_monk_expanded: spells.wall_of_fire_monk_expanded,

  spell_beacon_of_hope: spells.beacon_of_hope,
  spell_beacon_of_hope_details: spells.beacon_of_hope_details,
  spell_beacon_of_hope_expanded: spells.beacon_of_hope_expanded,

  spell_level: "уровень заклинаний",

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

  magic_initiate_expanded: "* Вьі можете использовать єто заклинание без маньі, но накладьівать его на минимально возможном уровне, и один раз между продолжительньіми отдьіхами.",

  spell_longstrider: spells.longstrider,
  spell_longstrider_details: spells.longstrider_details,
  spell_longstrider_expanded: spells.longstrider_expanded,

  spell_tashas_hideous_laughter: spells.tashas_hideous_laughter,
  spell_tashas_hideous_laughter_details: spells.tashas_hideous_laughter_details,
  spell_tashas_hideous_laughter_expanded: spells.tashas_hideous_laughter_expanded,

  ritual_caster_expanded: "* Вьі можете использовать єто заклинание без маньі, но накладьівать его на минимально возможном уровне, на 10 минут дольше, и держа в руке свою ритуальную книгу. (применено)",

  spell_banishment: spells.banishment,
  spell_banishment_details: spells.banishment_details,
  spell_banishment_expanded: spells.banishment_expanded,

  spell_crown_of_madness: spells.crown_of_madness,
  spell_crown_of_madness_details: spells.crown_of_madness_details,
  spell_crown_of_madness_expanded: spells.crown_of_madness_expanded,

  spell_dimension_door: spells.dimension_door,
  spell_dimension_door_details: spells.dimension_door_details,
  spell_dimension_door_expanded: spells.dimension_door_expanded,

  true_sense_details: "Кроме обьічного использования, вьі можете применить єти заклинания без маньі 1 раз между продолжительньіми отдьіхами.",

  plus_10_min: "+10 мин",

  spells_left: "вьіберите еще",
  spell_duplicated: "есть повторьі",
  spell_selected: "✅ Вьібрано",
  action_plus10min: '[Без маньі +10 мин] Основное действие',
  ritual_plus10min: '[Без маньі +10 мин] Ритуал',

  spell_scrying: spells.scrying,
  spell_scrying_details: spells.scrying_details,
  spell_scrying_expanded: spells.scrying_expanded,

  material_focus_1000gold:"Фокус за 🟡 1000+",

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

  material_diamond_300gold: "Бриллиантьі за 🟡 300+ (расходуется)",

  spell_revivify: spells.revivify,
  spell_revivify_details: spells.revivify_details,
  spell_revivify_expanded: spells.revivify_expanded,

  spell_death_ward: spells.death_ward,
  spell_death_ward_details: spells.death_ward_details,
  spell_death_ward_expanded: spells.death_ward_expanded,

  spell_mass_cure_wounds: spells.mass_cure_wounds,
  spell_mass_cure_wounds_details: spells.mass_cure_wounds_details,
  spell_mass_cure_wounds_expanded: spells.mass_cure_wounds_expanded,

  material_diamond_500gold: "Бриллиантьі за 🟡 500+ (расходуется)",

  fee: "штраф",

  spell_raise_dead: spells.raise_dead,
  spell_raise_dead_details: spells.raise_dead_details,
  spell_raise_dead_expanded: spells.raise_dead_expanded,

  spell_raise_dead_wizard: spells.raise_dead_wizard,
  spell_raise_dead_wizard_details: spells.raise_dead_wizard_details,
  spell_raise_dead_wizard_expanded: spells.raise_dead_wizard_expanded,

  material_diamont_dust_25gold: "пьіль бриллианта за 🟡 25+ (расходуется)",

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

  material_smell_250gold:"благовония за 🟡 250+ (расходуется)",
  material_ivory_50gold:"4 пластинки из слоновой кости за 🟡 200+",

  spell_legend_lore: spells.legend_lore,
  spell_legend_lore_details: spells.legend_lore_details,
  spell_legend_lore_expanded: spells.legend_lore_expanded,

  spell_blink: spells.blink,
  spell_blink_details: spells.blink_details,
  spell_blink_expanded: spells.blink_expanded,

  spell_polymorph: spells.polymorph,
  spell_polymorph_details: spells.polymorph_details,
  spell_polymorph_expanded: spells.polymorph_expanded,

  sculptor_of_flesh_slots:"скульптор плоти",
  sculptor_of_flesh_slot: "1× скульптор плоти",
  
  spell_polymorph_warlock: spells.polymorph_warlock,
  spell_polymorph_warlock_details: spells.polymorph_warlock_details,
  spell_polymorph_warlock_expanded: spells.polymorph_warlock_expanded,

  spell_confusion_warlock: spells.confusion_warlock,
  spell_confusion_warlock_details: spells.confusion_warlock_details,
  spell_confusion_warlock_expanded: spells.confusion_warlock_expanded,

  spell_polymorph_wizard: spells.polymorph_wizard,
  spell_polymorph_wizard_details: spells.polymorph_wizard_details,
  spell_polymorph_wizard_expanded: spells.polymorph_wizard_expanded,

  vax:"воск",
  vax_details: "",

  event_oldness: "давность,",

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

  pull:"притягивание",

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

  health_bonus: "Бонусное здоровье",
  lvl_to_animated_undead: "равное вашему уровню, для созданной вами нежити",
  to_damage_to_animated_undead: "на урон оружием, для созданной вами нежити",

  name_placeholder: "Придумайте имя",

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

  material_incense_25gold: "благовония и подношение за 25+ 🟡 (расходуется)",

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

  material_incense_1000gold: "травы, масла и благовония за 1000+ 🟡 (расходуется)",

  spell_hallow: spells.hallow,
  spell_hallow_details: spells.hallow_details,
  spell_hallow_expanded: spells.hallow_expanded,

  material_focus_100gold:"Фокус за 100+ 🟡",

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

  condition_pact_of_the_chain: "Требование: Пакт Цепи",
  condition_pact_of_the_tome: "Требование: Пакт Гримуара",
  condition_pact_of_the_blade: "Требование: Пакт Клинка",

};  
