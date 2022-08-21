class Spell {
  name;
  slot;
  school;
  tags;
  details;

  frequency;
  components;
  time;
  concentration = Boolean;

  range;
  area;
  duration;

  trial = {
    stat: null,
    complexity: null,
  };
  damage = {
    type: null,
    x: null,
    dice: null,
  };
  gain = {
    x: null,
    dice: null,
  };
}

/* 

//Строение заклинания:

// Мана (0-9) - группировать

name: //название
details: // описание
expanded: // полное описание 
type: // Вьізов Воплощение Иллюзия Некромантия Ограждение Очарование Преобразование Прорицание
classes: // - фильтровать сразу?

// Время наложения (реакция | бонусное действие | действие | ритуал). Ритуал может бьіть входньім параметром (+10 мин)
// Длительность наложения (минутьі, если ритуал)

// нужен ли бросок на попадание
// тип атаки (ближняя | дальнобойная)
// ? бонус на попадание (меткость) - входной параметр
// Цель (на себя | cущество | обьект | точка в пространстве)
// Дальность (ф)
// Тип области (точка | линия | конус | куб | цилиндр | сфера)
// Размер области (если не точка)

// Время заклинания (мгновенно | концентрация | протяженное | пока не рассеится)
// Длительность заклинания (минутьі, если концентрация || протяженное)

// Вербальньій компонент (да | нет)
// Соматический (да | нет)
// Материальньій (список) - фокусировка как входной параметр
// Материальньій с ценой (список) - не заменяется фокусировкой

// Тип воздействия (без воздействия | урон | лечение)
// Тип урона (без урона | дробящий | колющий | рубящий | огонь | холод | электричество | яд | кислота | звук | некротическая энергия | излучение | силовое поле | психическая энергия )
// Характеристика (по классу бай дефолт)
// ? Сложность - входной - 8 + Характеристика + мастерство + особьіе мод? - часть класса?
// Размер воздействия / спас провален - рассчетньій параметр
// Размер воздействия / спас пройден - рассчетньій параметр

*/

export default {
  null: [
    {
      name: null,
      details: null,
      expanded: null,

      type: null,

      cast_time: null,
      cast_duration: null,
      cast_duration_units: null,

      aim_target: null,
      aim_type: null,

      parts: [null],

      spell_time: null,
      spell_duration: null,
      cast_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: 5,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_num: null,
      impact_size_dice: null,

      saving_need: true,
      saving_attribute: null,

      impact_size_saved_foo: null,
      impact_size_saved_num: null,
      impact_size_saved_dice: null,
    },
  ],

  acid_splash: [
    {
      //0

      name: "spell_acid_splach",
      details: "spell_acid_splach_details",
      expanded: "spell_acid_splach_expanded",

      type: "evocation",

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      cast_duration_units: null,

      aim_need: false,
      aim_range: 60,
      aim_aoe: "point",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "acid_w",

      impact_size_foo: "Plus_Level_6",
      impact_size_num: 1,
      impact_size_dice: 6,

      saving_need: true,
      saving_attribute: "dexterity",

      impact_size_saved_foo: null,
      impact_size_saved_num: null,
      impact_size_saved_dice: null,
    },
  ],

  thaumaturgy: [
    {
      //0
      name: "spell_thaumaturgy",
      details: "spell_thaumaturgy_details",
      expanded: "spell_thaumaturgy_expanded",

      type: "transmutation",

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      cast_duration_units: "min",

      aim_need: false,
      aim_range: 30,
      aim_aoe: "sphere",
      aim_aoe_size: 30,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_num: null,
      impact_size_dice: null,

      saving_need: false,
      saving_attribute: null,

      impact_size_saved_foo: null,
      impact_size_saved_num: null,
      impact_size_saved_dice: null,
    },
  ],

  hellish_rebuke: [
    {
      //0
    },
    {
      //1
      name: "spell_hellish_rebuke",
      details: "spell_hellish_rebuke_details",
      expanded: "spell_hellish_rebuke_expanded",

      type: "evocation",

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      cast_duration_units: null,

      aim_need: false,
      aim_range: 60,
      aim_aoe: "point",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: null,
      impact_size_num: 2,
      impact_size_dice: 10,

      saving_need: true,
      saving_attribute: "dexterity",

      impact_size_saved_foo: null,
      impact_size_saved_num: 1,
      impact_size_saved_dice: 10,
    },
    {
      //2
      impact_size_foo: null,
      impact_size_num: 3,
      impact_size_dice: 10,

      impact_size_saved_foo: null,
      impact_size_saved_num: 1,
      impact_size_saved_dice: 10,
    },
    {
      //3
      impact_size_foo: null,
      impact_size_num: 4,
      impact_size_dice: 10,

      impact_size_saved_foo: null,
      impact_size_saved_num: 2,
      impact_size_saved_dice: 10,
    },
    {
      //4
      impact_size_foo: null,
      impact_size_num: 5,
      impact_size_dice: 10,

      impact_size_saved_foo: null,
      impact_size_saved_num: 2,
      impact_size_saved_dice: 10,
    },
    {
      //5
      impact_size_foo: null,
      impact_size_num: 6,
      impact_size_dice: 10,

      impact_size_saved_foo: null,
      impact_size_saved_num: 3,
      impact_size_saved_dice: 10,
    },
    {
      //6
      impact_size_foo: null,
      impact_size_num: 7,
      impact_size_dice: 10,

      impact_size_saved_foo: null,
      impact_size_saved_num: 3,
      impact_size_saved_dice: 10,
    },
    {
      //7
      impact_size_foo: null,
      impact_size_num: 8,
      impact_size_dice: 10,

      impact_size_saved_foo: null,
      impact_size_saved_num: 4,
      impact_size_saved_dice: 10,
    },
    {
      //8
      impact_size_foo: null,
      impact_size_num: 9,
      impact_size_dice: 10,

      impact_size_saved_foo: null,
      impact_size_saved_num: 4,
      impact_size_saved_dice: 10,
    },
    {
      //9
      impact_size_foo: null,
      impact_size_num: 10,
      impact_size_dice: 10,

      impact_size_saved_foo: null,
      impact_size_saved_num: 5,
      impact_size_saved_dice: 10,
    },
  ],

  hellish_rebuke_tiefling: [
    {
      //0
      name: "spell_hellish_rebuke",
      details: "spell_hellish_rebuke_tiefling_details",
      expanded: "spell_hellish_rebuke_tiefling_expanded",

      type: "evocation",

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      cast_duration_units: null,

      aim_need: false,
      aim_range: 60,
      aim_aoe: "point",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: null,
      impact_size_num: 3,
      impact_size_dice: 10,

      saving_need: true,
      saving_attribute: "charisma",

      impact_size_saved_foo: null,
      impact_size_saved_num: 1,
      impact_size_saved_dice: 10,
    },
  ],

  fire_breath_cone: [
    {
      name: "spell_fire_breath",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      cast_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Plus_Level_5",
      impact_size_num: 2,
      impact_size_dice: 6,

      saving_need: true,
      saving_attribute: "dexterity",

      impact_size_saved_foo: "Plus_Level_5",
      impact_size_saved_num: 1,
      impact_size_saved_dice: 6,
    },
  ],

  fire_breath_cone: [
    {
      name: "spell_fire_breath",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      cast_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Plus_Level_5",
      impact_size_num: 2,
      impact_size_dice: 6,

      saving_need: true,
      saving_attribute: "dexterity",

      impact_size_saved_foo: "Plus_Level_5",
      impact_size_saved_num: 1,
      impact_size_saved_dice: 6,
    },
  ],

  fire_breath_line: [
    {
      name: "spell_fire_breath",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      cast_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "line",
      aim_aoe_size: 30,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Plus_Level_5",
      impact_size_num: 2,
      impact_size_dice: 6,

      saving_need: true,
      saving_attribute: "dexterity",

      impact_size_saved_foo: "Plus_Level_5",
      impact_size_saved_num: 1,
      impact_size_saved_dice: 6,
    },
  ],

  cold_breath_line: [
    {
      name: "spell_fire_breath",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      cast_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "cold_w",

      impact_size_foo: "Plus_Level_5",
      impact_size_num: 2,
      impact_size_dice: 6,

      saving_need: true,
      saving_attribute: "dexterity",

      impact_size_saved_foo: "Plus_Level_5",
      impact_size_saved_num: 1,
      impact_size_saved_dice: 6,
    },
  ],

  cold_breath: {
    name: "cold_breath",
    lines: [
      {
        title: "damage",
        subtitle: "cold_w",
        plus: false,
        foo_met: "Plus_Level_5", // return numb + (level-1)/5 (плюс 1 на 6 и 11 уровне)
        numb_foo: 2,
        dice: 6,
        suffix: "",
        squares_mana: false,
        squares_mana_plus: false,
      },
    ],
    details: "cold_breath_details",
  },

  electricity_breath: {
    name: "electricity_breath",
    lines: [
      {
        title: "damage",
        subtitle: "electricity_w",
        plus: false,
        foo_met: "Plus_Level_5", // return numb + (level-1)/5 (плюс 1 на 6 и 11 уровне)
        numb_foo: 2,
        dice: 6,
        suffix: "",
        squares_mana: false,
        squares_mana_plus: false,
      },
    ],
    details: "electricity_breath_details",
  },

  acid_breath: {
    name: "acid_breath",
    lines: [
      {
        title: "damage",
        subtitle: "acid_w",
        plus: false,
        foo_met: "Plus_Level_5", // return numb + (level-1)/5 (плюс 1 на 6 и 11 уровне)
        numb_foo: 2,
        dice: 6,
        suffix: "",
        squares_mana: false,
        squares_mana_plus: false,
      },
    ],
    details: "acid_breath_details",
  },

  poison_breath: {
    name: "poison_breath",
    lines: [
      {
        title: "damage",
        subtitle: "poison_w",
        plus: false,
        foo_met: "Plus_Level_5", // return numb + (level-1)/5 (плюс 1 на 6 и 11 уровне)
        numb_foo: 2,
        dice: 6,
        suffix: "",
        squares_mana: false,
        squares_mana_plus: false,
      },
    ],
    details: "poison_breath_details",
  },

  toy: {
    name: "spell_toy",
    details: "spell_toy_details",
  },

  lighter: {
    name: "spell_lighter",
    details: "spell_lighter_details",
  },

  music_box: {
    name: "spell_music_box",
    details: "spell_music_box_details",
  },

  small_illusion: {
    name: "spell_small_illusion",
    details: "spell_small_illusion_details",
  },

  enlargement: {
    name: "spell_enlargement",
    lines: [
      {
        title: "damage",
        subtitle: "additional_m",
        plus: false,
        foo_met: "Just_numb", // return numb
        numb_foo: 1,
        dice: 4,
        suffix: "",
        squares_mana: false,
        squares_mana_plus: false,
      },
    ],
    details: "spell_enlargement_details",
  },

  dancing_lights: {
    name: "spell_dancing_lights",
    details: "spell_dancing_lights_details",
  },

  invisibility: {
    name: "spell_invisibility",
    details: "spell_invisibility_details",
  },

  darkness: {
    name: "darkness",
    details: "darkness_details",
  },

  fury: {},
};
