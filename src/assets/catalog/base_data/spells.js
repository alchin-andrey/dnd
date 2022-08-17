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

// Мана (0-9) - группировать?

name: //название
details: // описание
expanded: // полное описание 
type: // Вьізов Воплощение Иллюзия Некромантия Ограждение Очарование Преобразование Прорицание
classes: // ??

// Время наложения (реакция | бонусное действие | действие | ритуал). Ритуал может бьіть входньім параметром (+10 мин)
// Длительность наложения (минутьі, если ритуал)

// нужен ли бросок на попадание
// тип атаки (ближняя | дальнобойная)
// ? бонус на попадание (меткость) - входной параметр
// Цель (на себя | cущество | обьект | точка в пространстве)
// Дальность (ф)
// Тип области (точка | линия | конус | куб | цилиндр | сфера)
// Размер области (если не точка)

// Время заклинания (мгновенно | концентрация | протяженное)
// Длительность заклинания (минутьі, если концентрация || протяженное)

// Вербальньій компонент (да | нет)
// Соматический (да | нет)
// Материальньій (список) - фокусировка как входной параметр

// Тип воздействия (без воздействия | урон | лечение)
// Тип урона (без урона | дробящий | колющий | рубящий | огонь | холод | электричество | яд | кислота | звук | некротическая энергия | излучение | силовое поле | психическая энергия )
// Характеристика (по классу бай дефолт)
// ? Сложность - входной - 8 + Характеристика + мастерство + особьіе мод? - часть класса?
// Размер воздействия / спас провален - рассчетньій параметр
// Размер воздействия / спас пройден - рассчетньій параметр

*/

export default {

  acid_splash: [
    {//0

      name: "acid_splach",
      details: "acid_splach_details",
      expanded: "acid_splach_expanded",

      type: "evocation",

      cast_time: "action",
      cast_duration: null,

      aim_need: false,
      aim_type: "ranged",
      aim_target: "creature",
      aim_range: 60,
      aim_aoe: "point",
      aim_aoe_size: null,

      spell_time: "instant",
      spell_duration: null,

      component_verbal: true,
      component_somatic: true,
      component_material: false,

      impact_type: "damage",
      impact_damage_type: "acid",

      saving_need: true,
      saving_attribute: "dexterity",

      impact_size_fail_foo: "Plus_Level_6",
      impact_size_fail_num: 1,  
      impact_size_fail_dice: 6,  

      impact_size_success_foo: null,
      impact_size_success_num: null,  
      impact_size_success_dice: null,  
      
    }
  ],

  thaumaturgy: [
    { //0
      name: "thaumaturgy",
      details: "thaumaturgy_details",
    },    
  ],

  hellish_rebuke: {
    name: "hellish_rebuke",
    lines: [
      {
        title: "damage",
        subtitle: "",
        plus: false,
        foo_met: "Just_numb", // return numb
        numb_foo: 3,
        dice: 10,
        suffix: "",
        squares_mana: false,
        squares_mana_plus: false,
      },
    ],
    details: "hellish_rebuke_details",
  },

  fire_breath: {
    name: "fire_breath",
    lines: [
        {
          title: "damage",
          subtitle: "fire_w",
          plus: false,
          foo_met: "Plus_Level_5", // return numb + (level-1)/5 (плюс 1 на 6 и 11 уровне)
          numb_foo: 2,
          dice: 6,
          suffix: "",
          squares_mana: false,
          squares_mana_plus: false,
        },
      ],
    details: "fire_breath_details"
  },

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
    details: "cold_breath_details"
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
    details: "electricity_breath_details"
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
    details: "acid_breath_details"
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
    details: "poison_breath_details"
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
    details: "spell_dancing_lights_details"
  },

  invisibility: {
    name: "spell_invisibility",
    details: "spell_invisibility_details"
  },

  darkness: {
    name: "darkness",
    details: "darkness_details"
  },

  fury : {
    
  },
};
