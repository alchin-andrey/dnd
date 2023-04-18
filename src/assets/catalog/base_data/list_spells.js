const spell_name = [
  // Мана {0-9} - группировать. Номер єлемента равно стоимость маньі
  {
    name: null,
    details: null,
    expanded: null, // полное описание

    type: null,
    /*
          abjuration: "ограждение",
          conjuration: "вьізов",
          divination: "прорицание",
          enchantment: "чарьі",
          evocation: "воплощение",
          illusion: "иллюзия",
          necromancy: "некромантия",
          transmutation: "преобразование",
    */

    cast_time: null,
    // Время наложения ("reacion" | "bonus_action" | "action" | "ritual").
    cast_duration: null,
    // Длительность наложения
    cast_duration_units: null,
    // Единицьі измерения ("sec" | "round" | "min" | "hour")

    aim_target: null,
    // Цель ("self" | "creature" | "object" | "point")
    aim_type: null,
    // тип атаки ("near" | "in_distance")
    // если in_distance - показать строку дальность

    parts: [null],
    // Компонентьі
    // "verbal" | "somatic" | "touch" | "focus" | "[material]"

    spell_time: null,
    // Время заклинания ( null | "instant" | "concentration" | "till_dissipate")
    // Если concentration - добавить up_to
    spell_duration: null,
    // Длительность заклинания
    spell_duration_units: null,
    // Единицьі измерения ("sec" | "round" | "min" | "hour")

    aim_need: false,
    // нужен ли бросок на попадание
    // если true - показьівать строку aim_bonus - "меткость" - входной параметр (мод характеристики + мастерство)

    aim_range: null,
    // Дальность (ф)
    aim_aoe: null,
    // Тип области ("point" | "line" | "cone" | "cube" | "cilinder" | "sphere")
    aim_aoe_size: null,
    // Размер области (ф)

    impact_type: null,
    // Тип воздействия ( null | "damage" | "heal")
    // Если null - не показьівать строки уронов
    impact_damage_type: null,
    // Тип урона
    /*
      bonus_w
      poison_w:"🧪 Ядом",
      fire_w:"🔥 Огнем",
      cold_w:"❄️ Холодом",
      electricity_w:"⚡️ єлектричеством",
      acid_w:"⚗️ Кислотой",
      thunder_w: "🔊 Звуком",
      radiant_w: "✨ Светом",
      force_w: "🌈 Cиловьім полем",

      piercing_w: "🗡 колющий",
      slashing_w: "🪓 рубящий",
      bludgeoning_w: "🔨 дробящий",

      necrotic_w: "💀 Некротический",
      psychic_w: "🧠 Психический",
    */

    impact_size_foo: null,
    impact_size_str: null,
    impact_size_num: null,
    impact_size_dic: null,
    // рассчет урона

    impact_size_pls: null,

    saving_need: false,
    // нужен ли cпасбросок
    // если true - строка Испьітание цели - Сложность входной = 8 + мод характеристики + мастерство + особьіе мод?
    saving_attribute: null,
    // Характеристика ( null - бай дефолт из класса | характеристика)
    impact_size_saved: null,
    // урон если спас пройден — "0", "÷2"
  },
  {
    //1
    //любое из полей
  },
];

export default {

  // NOTE - Race abilities

  hellish_rebuke_tiefling: [
    {
      //0      
      h: {ua: 832, ru: 862},
      link: "hellish_rebuke_tiefling",
      name: "spell_hellish_rebuke_tiefling",
      details: "spell_hellish_rebuke_tiefling_details",
      expanded: "spell_hellish_rebuke_tiefling_expanded",

      type: "evocation",
      slot_type: "hellish_rebuke_tiefling_slot",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 60,
      aim_aoe: "point",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",
      impact_size_saved: "÷2",

      spell_attribute: "charisma",
    },
  ],

  fire_breath_cone: [
    {      
      h: {ua: 758, ru: 758},
      link: "fire_breath_cone",
      name: "spell_fire_breath_cone",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Level_6_11_16",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",

      spell_attribute: "constitution",
    },
  ],

  fire_breath_line: [
    {      
      h: {ua: 758, ru: 758},
      link: "fire_breath_line",
      name: "spell_fire_breath_line",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "line",
      aim_aoe_size: 30,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Level_6_11_16", //1lvl + 0, 6lvl + 1, 11lvl + 2, 16lvl + 3
      impact_size_str: null,
      impact_size_num: 2, //1 + 0, 6 + 1, 11 + 2, 16 + 3
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",

      spell_attribute: "constitution",
    },
  ],

  cold_breath_cone: [
    {      
      h: {ua: 758, ru: 758},
      link: "cold_breath_cone",
      name: "spell_cold_breath",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "cold_w",

      impact_size_foo: "Num_Level_6_11_16",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",

      spell_attribute: "constitution",
    },
  ],

  electricity_breath_line: [
    {      
      h: {ua: 758, ru: 758},
      link: "electricity_breath_line",
      name: "spell_electricity_breath",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "line",
      aim_aoe_size: 30,

      impact_type: "damage",
      impact_damage_type: "electricity_w",

      impact_size_foo: "Num_Level_6_11_16",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",

      spell_attribute: "constitution",
    },
  ],

  acid_breath_line: [
    {      
      h: {ua: 758, ru: 758},
      link: "acid_breath_line",
      name: "spell_acid_breath",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "line",
      aim_aoe_size: 30,

      impact_type: "damage",
      impact_damage_type: "acid_w",

      impact_size_foo: "Num_Level_6_11_16",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",

      spell_attribute: "constitution",
    },
  ],

  poison_breath_cone: [
    {      
      h: {ua: 758, ru: 758},
      link: "poison_breath_cone",
      name: "spell_poison_breath",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "poison_w",

      impact_size_foo: "Num_Level_6_11_16", //done
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",

      spell_attribute: "constitution",
    },
  ],

  darkness_tiefling: [
    {      
      h: {ua: 838, ru: 868},
      link: "darkness_tiefling",
      name: "spell_darkness_tiefling",
      details: "spell_darkness_tiefling_details",
      expanded: "spell_darkness_tiefling_expanded",

      type: "evocation",
      slot_type: "darkness_tiefling_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 60,
      aim_aoe: "sphere",
      aim_aoe_size: 30,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  enlargement_self: [
    {      
      h: {ua: 764, ru: 764},
      link: "enlargement_self",
      name: "spell_enlargement_self",
      details: "spell_enlargement_self_details",
      expanded: "spell_enlargement_self_expanded", // полное описание

      type: "transmutation",
      slot_type: "enlargement_self_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  invisibility_self: [
    {      
      h: {ua: 646, ru: 646},
      link: "invisibility_self",
      name: "spell_invisibility_self",
      details: "spell_invisibility_self_details",
      expanded: "spell_invisibility_self_expanded", // полное описание

      type: "illusion",
      slot_type: "invisibility_self_slot",
      classes: [],

      cast_time: "action",
      // Время наложения ("reacion" | "bonus_action" | "action" | "ritual"). Ритуал может бьіть входньім параметром (+10 мин)
      cast_duration: null,
      // Длительность наложения
      cast_duration_units: null,
      // Единицьі измерения ("sec" | "round" | "min" | "hour")

      aim_target: "self",
      // Цель ("self" | "creature" | "object" | "point")
      aim_type: null,
      // тип атаки ("near" | "touch" | "in_distance")
      // если in_distance - показать строку дальность

      parts: ["somatic", "verbal"],
      // Компонентьі
      // "verbal" | "somatic" | "focus" | "[material]"

      spell_time: "concentration",
      // Время заклинания ( null | "instant" | "concentration" | "till_dissipate")
      // Если concentration - добавить up_to
      spell_duration: 1,
      // Длительность заклинания
      spell_duration_units: "hour",
      // Единицьі измерения ("sec" | "round" | "min" | "hour")

      aim_need: false,
      // нужен ли бросок на попадание
      // если true - показьівать строку "меткость" - входной параметр

      aim_range: null,
      // Дальность (ф)
      aim_aoe: null,
      // Тип области ("point" | "line" | "cone" | "cube" | "cilinder" | "sphere")
      aim_aoe_size: null,
      // Размер области

      impact_type: null,
      // Тип воздействия ( null | "damage" | "heal")
      // Если null - не показьівать строку урона
      impact_damage_type: null,
      // Тип урона
      /*
        bonus_w
        poison_w:"🧪 Ядом",
        fire_w:"🔥 Огнем",
        cold_w:"❄️ Холодом",
        electricity_w:"⚡️ єлектричеством",
        acid_w:"⚗️ Кислотой",
        thunder_w: "🔊 Звуком",
        radiant_w: "✨ Светом",
        force_w: "🌈 Cиловьім полем",

        piercing_w: "🗡 колющий",
        slashing_w: "🪓 рубящий",
        bludgeoning_w: "🔨 дробящий",

        necrotic_w: "💀 Некротический",
        psychic_w: "🧠 Психический",
      */

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      // рассчет урона

      impact_size_pls: null,

      saving_need: false,
      // нужен ли cпасбросок
      // если true - строка Испьітание цели - Сложность входной = 8 + Характеристика + мастерство + особьіе мод?
      saving_attribute: null,
      // Характеристика ( null - бай дефолт из класса | характеристика)
      impact_size_saved: null,
      // рассчет урона если спас пройден
    },
  ],

  toy: [
    {      
      h: {ua: 676, ru: 676},
      link: "toy",
      name: "spell_toy",
      details: "spell_toy_details",
      expanded: "spell_toy_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "object",
      aim_type: "near",

      parts: ["material_10gold"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  lighter: [
    {      
      h: {ua: 676, ru: 706},
      link: "lighter",
      name: "spell_lighter",
      details: "spell_lighter_details",
      expanded: "spell_lighter_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "object",
      aim_type: "near",

      parts: ["material_10gold"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  music_box: [
    {      
      h: {ua: 646, ru: 646},
      link: "music_box",
      name: "spell_music_box",
      details: "spell_music_box_details",
      expanded: "spell_music_box_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "object",
      aim_type: "near",

      parts: ["material_10gold"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  faerie_fire_0: [
    {      
      h: {ua: 848, ru: 878},
      link: "faerie_fire_0",
      name: "spell_faerie_fire_0",
      details: "spell_faerie_fire_0_details",
      expanded: "spell_faerie_fire_0_expanded", // полное описание

      type: "evocation",
      slot_type: "faerie_fire_0_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 60,
      aim_aoe: "cube",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,

      spell_attribute: "charisma",
    },
  ],

  minor_illusion_gnome: [
    {      
      h: {ua: 848, ru: 848},
      link: "minor_illusion_gnome",
      name: "spell_minor_illusion_gnome",
      details: "spell_minor_illusion_details",
      expanded: "spell_minor_illusion_expanded", // полное описание

      type: "illusion",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["focus", "somatic"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 30,
      aim_aoe: "cube",
      aim_aoe_size: 5,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      // рассчет урона

      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "investigation",
      impact_size_saved: null,

      spell_attribute: "intelligence",
    },
  ],

  // NOTE - Class abilitites

  rage: [
    {      
      h: {ua: 794, ru: 764},
      link: "rage",
      name: "spell_rage",
      details: "spell_rage_details",
      expanded: "spell_rage_expanded", // полное описание

      //level: 15,
      //expanded: "spell_rage_expanded_15",

      type: "ability",
      slot_type: "rage_slot",
      classes: [],

      cast_time: "bonus_action",
      // Время наложения ("reacion" | "bonus_action" | "action" | "ritual"). Ритуал может бьіть входньім параметром (+10 мин)
      cast_duration: null,
      // Длительность наложения
      cast_duration_units: null,
      // Единицьі измерения ("sec" | "round" | "min" | "hour")

      aim_target: "self",
      // Цель ("self" | "creature" | "object" | "point")
      aim_type: null,
      // тип атаки ("near" | "touch" | "in_distance")
      // если in_distance - показать строку дальность

      parts: ["none"],
      // Компонентьі
      // "verbal" | "somatic" | "focus" | "[material]" | "none"

      spell_time: null,
      // Время заклинания ( null | "instant" | "concentration" | "till_dissipate")
      // Если concentration - добавить "up_to"
      spell_duration: 1,
      // Длительность заклинания
      spell_duration_units: "min",
      // Единицьі измерения ("sec" | "round" | "min" | "hour")

      aim_need: false,
      // нужен ли бросок на попадание
      // если true - показьівать строку aim_bonus - "меткость" - входной параметр (мод характеристики + мастерство)

      aim_range: null,
      // Дальность (ф)
      aim_aoe: null,
      // Тип области ("point" | "line" | "cone" | "cube" | "cilinder" | "sphere")
      aim_aoe_size: null,
      // Размер области (ф)

      impact_type: "damage",
      // Тип воздействия ( null | "damage" | "heal")
      // Если null - не показьівать строки уронов
      impact_damage_type: "bonus_w",
      // Тип урона
      /*
        bonus_w
        poison_w:"🧪 Ядом",
        fire_w:"🔥 Огнем",
        cold_w:"❄️ Холодом",
        electricity_w:"⚡️ єлектричеством",
        acid_w:"⚗️ Кислотой",
        thunder_w: "🔊 Звуком",
        radiant_w: "✨ Светом",
        force_w: "🌈 Cиловьім полем",

        piercing_w: "🗡 колющий",
        slashing_w: "🪓 рубящий",
        bludgeoning_w: "🔨 дробящий",

        necrotic_w: "💀 Некротический",
        psychic_w: "🧠 Психический",
      */
      // impact_size_foo: "Num_Barbarian_Rage_Bonus", //done
      impact_size_foo: "Num_Level_9_16", //done
      impact_size_str: null,
      impact_size_num: 2,
      // impact_size_num: null, //this.$root.step2_classes.barbarian_rage_bonus[this.$root.MY.level],
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      // нужен ли cпасбросок
      // если true - строка Испьітание цели - Сложность входной = 8 + мод характеристики + мастерство + особьіе мод?
      saving_attribute: null,
      // Характеристика ( null - бай дефолт из класса | характеристика)
      impact_size_saved: null,
      // рассчет урона если спас пройден
    },
  ],

  reckless_attack: [
    {      
      h: {ua: 676, ru: 676},
      link: "reckless_attack",
      name: "spell_reckless_attack",
      details: "spell_reckless_attack_details",
      expanded: "spell_reckless_attack_expanded", // полное описание

      type: "ability",
      classes: [],

      cast_time: "none",
      // Время наложения ("reacion" | "bonus_action" | "action" | "ritual"). Ритуал может бьіть входньім параметром (+10 мин)
      cast_duration: null,
      // Длительность наложения
      cast_duration_units: null,
      // Единицьі измерения ("sec" | "round" | "min" | "hour")

      aim_target: "self",
      // Цель ("self" | "creature" | "object" | "point")
      aim_type: null,
      // тип атаки ("near" | "touch" | "in_distance")
      // если in_distance - показать строку дальность

      parts: ["none"],
      // Компонентьі
      // "verbal" | "somatic" | "focus" | "[material]"

      spell_time: null,
      // Время заклинания ( null | "instant" | "concentration" | "till_dissipate")
      // Если concentration - добавить up_to
      spell_duration: 1,
      // Длительность заклинания
      spell_duration_units: "round",
      // Единицьі измерения ("sec" | "round" | "min" | "hour")

      aim_need: false,
      // нужен ли бросок на попадание
      // если true - показьівать строку aim_bonus - "меткость" - входной параметр (мод характеристики + мастерство)

      aim_range: null,
      // Дальность (ф)
      aim_aoe: null,
      // Тип области ("point" | "line" | "cone" | "cube" | "cilinder" | "sphere")
      aim_aoe_size: null,
      // Размер области (ф)

      impact_type: null,
      // Тип воздействия ( null | "damage" | "heal")
      // Если null - не показьівать строки уронов
      impact_damage_type: null,
      // Тип урона
      /*
        bonus_w
        poison_w:"🧪 Ядом",
        fire_w:"🔥 Огнем",
        cold_w:"❄️ Холодом",
        electricity_w:"⚡️ єлектричеством",
        acid_w:"⚗️ Кислотой",
        thunder_w: "🔊 Звуком",
        radiant_w: "✨ Светом",
        force_w: "🌈 Cиловьім полем",

        piercing_w: "🗡 колющий",
        slashing_w: "🪓 рубящий",
        bludgeoning_w: "🔨 дробящий",

        necrotic_w: "💀 Некротический",
        psychic_w: "🧠 Психический",
      */

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      // рассчет урона

      impact_size_pls: null,

      saving_need: false,
      // нужен ли cпасбросок
      // если true - строка Испьітание цели - Сложность входной = 8 + мод характеристики + мастерство + особьіе мод?
      saving_attribute: null,
      // Характеристика ( null - бай дефолт из класса | характеристика)
      impact_size_saved: null,
      // рассчет урона если спас пройден
    },
  ],

  frenzy: [
    {      
      h: {ua: 616, ru: 616},
      link: "frenzy",
      name: "spell_frenzy",
      details: "spell_frenzy_details",
      expanded: "spell_frenzy_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      parts: ["none"],
      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  intimidating_presence: [
    {      
      h: {ua: 744, ru: 744},
      link: "intimidating_presence",
      name: "spell_intimidating_presence",
      details: "spell_intimidating_presence_details",
      expanded: "spell_intimidating_presence_expanded",

      type: "ability",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      parts: ["none"],
      spell_time: null,
      spell_duration: 2,
      spell_duration_units: "rounda",

      aim_need: false,
      aim_range: 30,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      //Если оно может видеть или сльішать вас, оно должно совершить успешньій спасбросок Мудрости (Сл равна 8 + ваш бонус мастерства + ваш модификатор Харизмьі)
      impact_size_saved: null,
    },
  ],

  retaliation: [
    {      
      h: {ua: 616, ru: 616},
      link: "retaliation",
      name: "spell_retaliation",
      details: "spell_retaliation_details",
      expanded: "spell_retaliation_expanded",

      type: "ability",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      parts: ["none"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      //Если оно может видеть или сльішать вас, оно должно совершить успешньій спасбросок Мудрости (Сл равна 8 + ваш бонус мастерства + ваш модификатор Харизмьі)
      impact_size_saved: null,
    },
  ],

  beast_sense_ritual: [
    {      
      h: {ua: 616, ru: 586},
      link: "beast_sense_ritual",
      name: "spell_beast_sense_ritual",
      details: "spell_beast_sense_ritual_details",
      expanded: "spell_beast_sense_ritual_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "creature",
      aim_type: "near",
      parts: ["touch"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  speak_with_animals_ritual: [
    {      
      h: {ua: 646, ru: 586},
      link: "speak_with_animals_ritual",
      name: "spell_speak_with_animals_ritual",
      details: "spell_speak_with_animals_ritual_details",
      expanded: "spell_speak_with_animals_ritual_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  commune_with_nature_ritual: [
    {      
      h: {ua: 646, ru: 586},
      link: "commune_with_nature_ritual",
      name: "spell_commune_with_nature_ritual",
      details: "spell_commune_with_nature_ritual_details",
      expanded: "spell_commune_with_nature_ritual_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  wolf_knock: [
    {      
      h: {ua: 646, ru: 646},
      link: "wolf_knock",
      name: "spell_wolf_knock",
      details: "spell_wolf_knock_details",
      expanded: "spell_wolf_knock_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      parts: ["touch"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  elk_knock: [
    {      
      h: {ua: 774, ru: 774},
      link: "elk_knock",
      name: "spell_elk_knock",
      details: "spell_elk_knock_details",
      expanded: "spell_elk_knock_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      parts: ["touch"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: "damage",
      impact_damage_type: "bludgeoning_w",

      impact_size_foo: "Pls_STR", //need update
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 12,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: "0",
    },
  ],

  tiger_strike: [
    {      
      h: {ua: 646, ru: 646},
      link: "tiger_strike",
      name: "spell_tiger_strike",
      details: "spell_tiger_strike_details",
      expanded: "spell_tiger_strike_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      parts: ["touch"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  sneaky_attack: [
    {      
      h: {ua: 734, ru: 734},
      link: "sneaky_attack",
      name: "spell_sneaky_attack",
      details: "spell_sneaky_attack_details",
      expanded: "spell_sneaky_attack_expanded",

      type: "ability",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      parts: ["none"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_Plus_Level_2", //done
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  cunning_action: [
    {      
      h: {ua: 586, ru: 586},
      link: "cunning_action",
      name: "spell_cunning_action",
      details: "spell_cunning_action_details",
      expanded: "spell_cunning_action_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      parts: ["none"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  steady_aim: [
    {      
      h: {ua: 616, ru: 616},
      link: "steady_aim",
      name: "spell_steady_aim",
      details: "spell_steady_aim_details",
      expanded: "spell_steady_aim_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      parts: ["none"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  uncanny_dodge: [
    {      
      h: {ua: 616, ru: 616},
      link: "uncanny_dodge",
      name: "spell_uncanny_dodge",
      details: "spell_uncanny_dodge_details",
      expanded: "spell_uncanny_dodge_expanded",

      type: "ability",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      parts: ["none"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  fast_hands: [
    {      
      h: {ua: 586, ru: 586},
      link: "fast_hands",
      name: "spell_fast_hands",
      details: "spell_fast_hands_details",
      expanded: "spell_fast_hands_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      parts: ["none"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  fake_identity: [
    {      
      h: {ua: 616, ru: 616},
      link: "fake_identity",
      name: "spell_fake_identity",
      details: "spell_fake_identity_details",
      expanded: "spell_fake_identity_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 7,
      cast_duration_units: "days",

      aim_target: "self",
      aim_type: null,
      parts: ["gold_25"],
      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  fake_presence: [
    {      
      h: {ua: 616, ru: 616},
      link: "fake_presence",
      name: "spell_fake_presence",
      details: "spell_fake_presence_details",
      expanded: "spell_fake_presence_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 3,
      cast_duration_units: "hour",

      aim_target: "self",
      aim_type: null,
      parts: ["creature"],
      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_sense: [
    {
      //0      
      h: {ua: 764, ru: 764},
      link: "divine_sense",
      name: "spell_divine_sense",
      details: "spell_divine_sense_details",
      expanded: "spell_divine_sense_expanded",

      type: "ability",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["divine_sense_slot"],

      spell_time: null,
      spell_duration: 2,
      spell_duration_units: "rounda",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  lay_on_hands: [
    {
      //0      
      h: {ua: 704, ru: 704},
      link: "lay_on_hands",
      name: "spell_lay_on_hands",
      details: "spell_lay_on_hands_details",
      expanded: "spell_lay_on_hands_expanded",

      type: "ability",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: "stock",

      impact_size_foo: "Num_LevelX", //done
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  side_pary: [
    {
      //0      
      h: {ua: 646, ru: 616},
      link: "side_pary",
      name: "spell_side_pary",
      details: "spell_side_pary_details",
      expanded: "spell_side_pary_expanded",

      type: "ability",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["shield"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_mana: [
    {
      //0      
      h: {ua: 674, ru: 674},
      link: "divine_channel_mana",
      name: "spell_divine_channel_mana",
      details: "spell_divine_channel_mana_details",
      expanded: "spell_divine_channel_mana_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "slot_lvl",
      impact_damage_type: null,

      impact_size_foo: "Num_Mastery_05",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_devotion_1: [
    {
      //0      
      h: {ua: 674, ru: 704},
      link: "divine_channel_devotion_1",
      name: "spell_divine_channel_devotion_1",
      details: "spell_divine_channel_devotion_1_details",
      expanded: "spell_divine_channel_devotion_1_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "weapons",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "aim_bonus",
      impact_damage_type: null,

      impact_size_foo: "Pls_CHA", 
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_devotion_2: [
    {
      //0      
      h: {ua: 1014, ru: 1014},
      link: "divine_channel_devotion_2",
      name: "spell_divine_channel_devotion_2",
      details: "spell_divine_channel_devotion_2_details",
      expanded: "spell_divine_channel_devotion_2_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  divine_channel_antients_1: [
    {
      //0      
      h: {ua: 744, ru: 744},
      link: "divine_channel_antients_1",
      name: "spell_divine_channel_antients_1",
      details: "spell_divine_channel_antients_1_details",
      expanded: "spell_divine_channel_antients_1_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    },
  ],

  divine_channel_antients_2: [
    {
      //0      
      h: {ua: 1044, ru: 1044},
      link: "divine_channel_antients_2",
      name: "spell_divine_channel_antients_2",
      details: "spell_divine_channel_antients_2_details",
      expanded: "spell_divine_channel_antients_2_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  divine_channel_vengence_1: [
    {
      //0      
      h: {ua: 804, ru: 804},
      link: "divine_channel_vengence_1",
      name: "spell_divine_channel_vengence_1",
      details: "spell_divine_channel_vengence_1_details",
      expanded: "spell_divine_channel_vengence_1_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  divine_channel_vengence_2: [
    {
      //0      
      h: {ua: 704, ru: 704},
      link: "divine_channel_vengence_2",
      name: "spell_divine_channel_vengence_2",
      details: "spell_divine_channel_vengence_2_details",
      expanded: "spell_divine_channel_vengence_2_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  maneuver_evasive_footwork: [
    {      
      h: {ua: 674, ru: 674},
      link: "maneuver_evasive_footwork",
      name: "spell_maneuver_evasive_footwork",
      details: "spell_maneuver_evasive_footwork_details",
      expanded: "spell_maneuver_evasive_footwork_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: "bonus_w_fem",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_lunging_attack: [
    {      
      h: {ua: 734, ru: 734},
      link: "maneuver_lunging_attack",
      name: "spell_maneuver_lunging_attack",
      details: "spell_maneuver_lunging_attack_details",
      expanded: "spell_maneuver_lunging_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_maneuvering_attack: [
    {      
      h: {ua: 764, ru: 764},
      link: "maneuver_maneuvering_attack",
      name: "spell_maneuver_maneuvering_attack",
      details: "spell_maneuver_maneuvering_attack_details",
      expanded: "spell_maneuver_maneuvering_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_menacing_attack: [
    {      
      h: {ua: 774, ru: 774},
      link: "maneuver_menacing_attack",
      name: "spell_maneuver_menacing_attack",
      details: "spell_maneuver_menacing_attack_details",
      expanded: "spell_maneuver_menacing_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  maneuver_feinting_attack: [
    {      
      h: {ua: 734, ru: 734},
      link: "maneuver_feinting_attack",
      name: "spell_maneuver_feinting_attack",
      details: "spell_maneuver_feinting_attack_details",
      expanded: "spell_maneuver_feinting_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_disarming_attack: [
    {      
      h: {ua: 774, ru: 774},
      link: "maneuver_disarming_attack",
      name: "spell_maneuver_disarming_attack",
      details: "spell_maneuver_disarming_attack_details",
      expanded: "spell_maneuver_disarming_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    }
  ],

  maneuver_trip_attack: [
    {      
      h: {ua: 744, ru: 744},
      link: "maneuver_trip_attack",
      name: "spell_maneuver_trip_attack",
      details: "spell_maneuver_trip_attack_details",
      expanded: "spell_maneuver_trip_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    }
  ],

  maneuver_riposte: [
    {      
      h: {ua: 734, ru: 734},
      link: "maneuver_riposte",
      name: "spell_maneuver_riposte",
      details: "spell_maneuver_riposte_details",
      expanded: "spell_maneuver_riposte_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_distracting_strike: [
    {      
      h: {ua: 734, ru: 764},
      link: "maneuver_distracting_strike",
      name: "spell_maneuver_distracting_strike",
      details: "spell_maneuver_distracting_strike_details",
      expanded: "spell_maneuver_distracting_strike_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_parry: [
    {      
      h: {ua: 704, ru: 674},
      link: "maneuver_parry",
      name: "spell_maneuver_parry",
      details: "spell_maneuver_parry_details",
      expanded: "spell_maneuver_parry_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "reduction_w",

      impact_size_foo: "Pls_DEX",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_goading_attack: [
    {      
      h: {ua: 774, ru: 774},
      link: "maneuver_goading_attack",
      name: "spell_maneuver_goading_attack",
      details: "spell_maneuver_goading_attack_details",
      expanded: "spell_maneuver_goading_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 2,
      spell_duration_units: "rounda",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  maneuver_rally: [
    {      
      h: {ua: 674, ru: 674},
      link: "maneuver_rally",
      name: "spell_maneuver_rally",
      details: "spell_maneuver_rally_details",
      expanded: "spell_maneuver_rally_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: "Pls_CHA",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_pushing_attack: [
    {      
      h: {ua: 774, ru: 774},
      link: "maneuver_pushing_attack",
      name: "spell_maneuver_pushing_attack",
      details: "spell_maneuver_pushing_attack_details",
      expanded: "spell_maneuver_pushing_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    }
  ],

  maneuver_precision_attack: [
    {      
      h: {ua: 674, ru: 674},
      link: "maneuver_precision_attack",
      name: "spell_maneuver_precision_attack",
      details: "spell_maneuver_precision_attack_details",
      expanded: "spell_maneuver_precision_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "aim_bonus",
      impact_damage_type: "bonus_w_fem",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_commanders_strike: [
    {      
      h: {ua: 764, ru: 734},
      link: "maneuver_commanders_strike",
      name: "spell_maneuver_commanders_strike",
      details: "spell_maneuver_commanders_strike_details",
      expanded: "spell_maneuver_commanders_strike_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_sweeping_attack: [
    {      
      h: {ua: 704, ru: 734},
      link: "maneuver_sweeping_attack",
      name: "spell_maneuver_sweeping_attack",
      details: "spell_maneuver_sweeping_attack_details",
      expanded: "spell_maneuver_sweeping_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  inspiration: [
    {      
      h: {ua: 748, ru: 748},
      link: "inspiration",
      name: "spell_inspiration",
      details: "spell_inspiration_details",
      expanded: "spell_inspiration_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 30,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: "Num_Lvl_Plus_CHA",
      impact_size_str: 6,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  grapple: [
    {      
      h: {ua: 646, ru: 646},
      link: "grapple",
      name: "spell_grapple",
      details: "spell_grapple_details",
      expanded: "spell_grapple_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  healer_tooling: [
    {      
      h: {ua: 704, ru: 734},
      link: "healer_tooling",
      name: "spell_healer_tooling",
      details: "spell_healer_tooling_details",
      expanded: "spell_healer_tooling_expanded",

      type: "ability",
      slot_type: "healers_tool_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["healers_tool"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 6,
      impact_size_pls: 4,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  extra_strike: [
    {      
      h: {ua: 646, ru: 616},
      link: "extra_strike",
      name: "spell_extra_strike",
      details: "spell_extra_strike_details",
      expanded: "spell_extra_strike_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  heavy_strike: [
    {      
      h: {ua: 764, ru: 764},
      link: "heavy_strike",
      name: "spell_heavy_strike",
      details: "spell_heavy_strike_details",
      expanded: "spell_heavy_strike_expanded",

      type: "ability",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  polearm_strike: [
    {      
      h: {ua: 792, ru: 792},
      link: "polearm_strike",
      name: "spell_polearm_strike",
      details: "spell_polearm_strike_details",
      expanded: "spell_polearm_strike_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: 10,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bludgeoning_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  shield_push: [
    {      
      h: {ua: 674, ru: 674},
      link: "shield_push",
      name: "spell_shield_push",
      details: "spell_shield_push_details",
      expanded: "spell_shield_push_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "push",
      impact_damage_type: null,

      impact_size_foo: "Feet",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  shield_block: [
    {      
      h: {ua: 616, ru: 616},
      link: "shield_block",
      name: "spell_shield_block",
      details: "spell_shield_block_details",
      expanded: "spell_shield_block_expanded",

      type: "ability",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  heavy_shot: [
    {      
      h: {ua: 764, ru: 764},
      link: "heavy_shot",
      name: "spell_heavy_shot",
      details: "spell_heavy_shot_details",
      expanded: "spell_heavy_shot_expanded",

      type: "ability",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  charge_attack: [
    {      
      h: {ua: 704, ru: 704},
      link: "charge_attack",
      name: "spell_charge_attack",
      details: "spell_charge_attack_details",
      expanded: "spell_charge_attack_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  charge_push: [
    {      
      h: {ua: 674, ru: 674},
      link: "charge_push",
      name: "spell_charge_push",
      details: "spell_charge_push_details",
      expanded: "spell_charge_push_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "push",
      impact_damage_type: null,

      impact_size_foo: "Feet",
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  learn_ritual: [
    {      
      h: {ua: 646, ru: 646},
      link: "learn_ritual",
      name: "spell_learn_ritual",
      details: "spell_learn_ritual_details",
      expanded: "spell_learn_ritual_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 2,
      cast_duration_units: "hour_per_lvl",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["gold50_per_lvl"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  crossbow_shot: [
    {      
      h: {ua: 616, ru: 646},
      link: "crossbow_shot",
      name: "spell_crossbow_shot",
      details: "spell_crossbow_shot_details",
      expanded: "spell_crossbow_shot_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  create_crypt: [
    {      
      h: {ua: 626, ru: 626},
      link: "create_crypt",
      name: "spell_create_crypt",
      details: "spell_create_crypt_details",
      expanded: "spell_create_crypt_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    }
  ],

  bardic_inspiration: [
    {      
      h: {ua: 838, ru: 838},
      link: "bardic_inspiration",
      name: "spell_bardic_inspiration",
      details: "spell_bardic_inspiration_details",
      expanded: "spell_bardic_inspiration_expanded",

      type: "ability",
      slot_type: "bardic_inspiration_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: "Dic_16_58_1010_1512_Lvl",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null, //6
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  song_of_rest: [
    {      
      h: {ua: 748, ru: 748},
      link: "song_of_rest",
      name: "spell_song_of_rest",
      details: "spell_song_of_rest_details",
      expanded: "spell_song_of_rest_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: "heal",
      impact_damage_type: "bonus_o_w",

      impact_size_foo: "Dic_16_98_1310_1712_Lvl",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null, //6
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  cutting_word: [
    {      
      h: {ua: 748, ru: 748},
      link: "cutting_word",
      name: "spell_cutting_word",
      details: "spell_cutting_word_details",
      expanded: "spell_cutting_word_expanded",

      type: "ability",
      slot_type: "bardic_inspiration_slot",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "reduction_w",
      impact_damage_type: null,

      impact_size_foo: "Dic_16_58_1010_1512_Lvl",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null, //6
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  second_wind: [
    {      
      h: {ua: 674, ru: 674},
      link: "second_wind",
      name: "spell_second_wind",
      details: "spell_second_wind_details",
      expanded: "spell_second_wind_expanded",

      type: "ability",
      slot_type: "second_wind_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Pls_Lvl",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  action_surge: [
    {      
      h: {ua: 586, ru: 616},
      link: "action_surge",
      name: "spell_action_surge",
      details: "spell_action_surge_details",
      expanded: "spell_action_surge_expanded",

      type: "ability",
      slot_type: "action_surge_slot",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  weapon_bond: [
    {      
      h: {ua: 616, ru: 646},
      link: "weapon_bond",
      name: "spell_weapon_bond",
      details: "spell_weapon_bond_details",
      expanded: "spell_weapon_bond_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  call_bonbed_weapon: [
    {      
      h: {ua: 586, ru: 586},
      link: "call_bonbed_weapon",
      name: "spell_call_bonbed_weapon",
      details: "spell_call_bonbed_weapon_details",
      expanded: "spell_call_bonbed_weapon_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  druid_message: [
    {
      //0      
      h: {ua: 616, ru: 616},
      link: "druid_message",
      name: "spell_druid_message",
      details: "spell_druid_message_details",
      expanded: "spell_druid_message_expanded",

      type: "ability",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  prepare_shield: [
    {
      //0      
      h: {ua: 674, ru: 674},
      link: "prepare_shield",
      name: "spell_prepare_shield",
      details: "spell_prepare_shield_details",
      expanded: "spell_prepare_shield_expanded",

      type: "ability",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "armor_shield",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: 2,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  wild_shape: [
    {
      //0      
      h: {ua: 586, ru: 586},
      link: "wild_shape",
      name: "spell_wild_shape",
      details: "spell_wild_shape_details",
      expanded: "spell_wild_shape_expanded",

      type: "ability",
      slot_type: "wild_shape_slot",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_2_4_8_Lvl__Dur_05_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  wild_shape_combat: [
    {
      //0      
      h: {ua: 586, ru: 586},
      link: "wild_shape_combat",
      name: "spell_wild_shape_combat",
      details: "spell_wild_shape_combat_details",
      expanded: "spell_wild_shape_combat_expanded",

      type: "ability",
      classes: ["druid"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_2_4_8_9_10_12_15_18_Lvl__Dur_05_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  wild_shape_heal: [
    {},
    {
      //1      
      h: {ua: 674, ru: 704},
      link: "wild_shape_heal",
      name: "spell_wild_shape_heal",
      details: "spell_wild_shape_heal_details",
      expanded: "spell_wild_shape_heal_expanded",

      type: "ability",
      classes: ["druid"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["spell_wild_shape_combat"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},{},{},{},{},{},{},{}
  ],

  find_familiar_druid: [
    {      
      h: {ua: 944, ru: 974},
      link: "find_familiar_druid",
      name: "spell_find_familiar_druid",
      details: "spell_find_familiar_druid_details",
      expanded: "spell_find_familiar_druid_expanded",

      type: "ability",
      slot_type: "wild_shape_slot",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Dur_05_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  alter_self_druid: [
    {      
      h: {ua: 796, ru: 766},
      link: "alter_self_druid",
      name: "spell_alter_self_druid",
      details: "spell_alter_self_details",
      expanded: "spell_alter_self_expanded",

      type: "ability",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  alter_self_warlock: [
    {      
      h: {ua: 796, ru: 766},
      link: "alter_self_warlock",
      name: "spell_alter_self_warlock",
      details: "spell_alter_self_details",
      expanded: "spell_alter_self_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_undead: [
    {
      //0      
      h: {ua: 1014, ru: 1014},
      link: "divine_channel_undead",
      name: "spell_divine_channel_undead",
      details: "spell_divine_channel_undead_details",
      expanded: "spell_divine_channel_undead_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_5_8_11_14_17_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  divine_intervention: [
    {
      //0      
      h: {ua: 646, ru: 646},
      link: "divine_intervention",
      name: "spell_divine_intervention",
      details: "spell_divine_intervention_details",
      expanded: "spell_divine_intervention_expanded",

      type: "ability",
      slot_type: "divine_intervention_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["verbal"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_20_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  thunder_wrath: [
    {
      //0      
      h: {ua: 774, ru: 774},
      link: "thunder_wrath",
      name: "spell_thunder_wrath",
      details: "spell_thunder_wrath_details",
      expanded: "spell_thunder_wrath_expanded",

      type: "ability",
      slot_type: "thunder_wrath_slot",
      classes: ["cleric"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "electricity_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
  ],

  thunder_strike: [
    {
      //0      
      h: {ua: 704, ru: 704},
      link: "thunder_strike",
      name: "spell_thunder_strike",
      details: "spell_thunder_strike_details",
      expanded: "spell_thunder_strike_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "push",
      impact_damage_type: null,

      impact_size_foo: "Feet",
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  inspired_attack: [
    {      
      h: {ua: 586, ru: 586},
      link: "inspired_attack",
      name: "spell_inspired_attack",
      details: "spell_inspired_attack_details",
      expanded: "spell_inspired_attack_expanded",

      type: "ability",
      slot_type: "inspired_attack_slot",
      classes: ["cleric"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  cleric_extra_damage: [
    {      
      h: {ua: 674, ru: 704},
      link: "cleric_extra_damage",
      name: "spell_cleric_extra_damage",
      details: "spell_cleric_extra_damage_details",
      expanded: "spell_cleric_extra_damage_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_WIS",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  cleric_see_past: [
    {      
      h: {ua: 704, ru: 734},
      link: "cleric_see_past",
      name: "spell_cleric_see_past",
      details: "spell_cleric_see_past_details",
      expanded: "spell_cleric_see_past_expanded",

      type: "ability",
      slot_type: "cleric_see_past_slot",
      classes: ["cleric"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "concentration",
      spell_duration: null,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 50,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Dur_Wisdom_Total",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  tricker_bless: [
    {      
      h: {ua: 586, ru: 616},
      link: "tricker_bless",
      name: "spell_tricker_bless",
      details: "spell_tricker_bless_details",
      expanded: "spell_tricker_bless_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  dampen_elements: [
    {      
      h: {ua: 734, ru: 734},
      link: "dampen_elements",
      name: "spell_dampen_elements",
      details: "spell_dampen_elements_details",
      expanded: "spell_dampen_elements_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  warding_flare: [
    {      
      h: {ua: 674, ru: 674},
      link: "warding_flare",
      name: "spell_warding_flare",
      details: "spell_warding_flare_details",
      expanded: "spell_warding_flare_expanded",

      type: "ability",
      slot_type: "warding_flare_slot",
      classes: ["cleric"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_6_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  crown_of_light: [
    {      
      h: {ua: 764, ru: 734},
      link: "crown_of_light",
      name: "spell_crown_of_light",
      details: "spell_crown_of_light_details",
      expanded: "spell_crown_of_light_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 60,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  mage_hand_rogue: [
    {
      //0
      
      h: {ua: 884, ru: 914},
      link: "mage_hand_rogue",
      name: "spell_mage_hand_rogue",
      details: "spell_mage_hand_rogue_details",
      expanded: "spell_mage_hand_rogue_expanded",

      type: "ability",
      classes: ["rogue"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 30,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_13_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  steal_spell: [
    {      
      h: {ua: 686, ru: 686},
      link: "steal_spell",
      name: "spell_steal_spell",
      details: "spell_steal_spell_details",
      expanded: "spell_steal_spell_expanded",

      type: "ability",
      slot_type: "spell_steal_slot",
      classes: ["rogue"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "base_with",
      impact_size_saved: null,
    },
  ],

  favored_foe: [
    {      
      h: {ua: 704, ru: 704},
      link: "favored_foe",
      name: "spell_favored_foe",
      details: "spell_favored_foe_details",
      expanded: "spell_favored_foe_expanded",

      type: "ability",
      slot_type: "favored_foe_slot",
      classes: ["ranger"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Dic_14_66_148_Lvl",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  tireless: [
    {      
      h: {ua: 674, ru: 674},
      link: "tireless",
      name: "spell_tireless",
      details: "spell_tireless_details",
      expanded: "spell_tireless_expanded",

      type: "ability",
      slot_type: "tireless_slot",
      classes: ["ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: "temporary",

      impact_size_foo: "Pls_WIS_Min1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  primeval_awareness: [
    {},
    {      
      h: {ua: 734, ru: 734},
      link: "primeval_awareness",
      name: "spell_primeval_awareness",
      details: "spell_primeval_awareness_details",
      expanded: "spell_primeval_awareness_expanded",

      type: "ability",
      classes: ["ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 5280,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Dur_Plus_1",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},{},{},{}
  ],

  primeval_awareness_favored: [
    {},
    {      
      h: {ua: 734, ru: 734},
      link: "primeval_awareness_favored",
      name: "spell_primeval_awareness_favored",
      details: "spell_primeval_awareness_details",
      expanded: "spell_primeval_awareness_expanded",

      type: "ability",
      classes: ["ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 5280*6,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Dur_Plus_1",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},{},{},{}
  ],

  speak_with_animals_ranger: [
    {},
    {      
      h: {ua: 676, ru: 706},
      link: "speak_with_animals_ranger",
      name: "spell_speak_with_animals_ranger",
      details: "spell_speak_with_animals_ranger_details",
      expanded: "spell_speak_with_animals_ranger_expanded",

      type: "ability",
      classes: ["ranger"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "self",
      aim_type: null,
      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  beast_sense_ranger: [
    {},
    {},
    {      
      h: {ua: 646, ru: 676},
      link: "beast_sense_ranger",
      name: "spell_beast_sense_ranger",
      details: "spell_beast_sense_ranger_details",
      expanded: "spell_beast_sense_ranger_expanded",

      type: "ability",
      classes: ["ranger"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "creature",
      aim_type: "near",
      parts: ["touch"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  speak_with_plants_ranger: [
    {},
    {},
    {},
    {      
      h: {ua: 838, ru: 868},
      link: "speak_with_plants_ranger",
      name: "spell_speak_with_plants_ranger",
      details: "spell_speak_with_plants_ranger_details",
      expanded: "spell_speak_with_plants_ranger_expanded",

      type: "ability",
      classes: ["ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 10,

      parts: ["somatic","verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  locate_creature_ranger: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 794, ru: 794},
      link: "locate_creature_ranger",
      name: "spell_locate_creature_ranger",
      details: "spell_locate_creature_ranger_details",
      expanded: "spell_locate_creature_ranger_expanded",

      type: "ability",
      classes: ["ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 1000,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  commune_with_nature_ranger: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 706, ru: 736},
      link: "commune_with_nature_ranger",
      name: "spell_commune_with_nature_ranger",
      details: "spell_commune_with_nature_ranger_details",
      expanded: "spell_commune_with_nature_ranger_expanded",

      type: "ability",
      classes: ["ranger"],

      cast_time: "ritual_plus10min",
      cast_duration: 1,
      cast_duration_units: "min",
      as_ritual: true,

      aim_target: "self",
      aim_type: null,
      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  extra_attack: [
    {      
      h: {ua: 586, ru: 586},
      link: "extra_attack",
      name: "spell_extra_attack",
      details: "spell_extra_attack_details",
      expanded: "spell_extra_attack_expanded",

      type: "ability",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  extra_attack_fighter: [
    {      
      h: {ua: 586, ru: 586},
      link: "extra_attack_fighter",
      name: "spell_extra_attack_fighter",
      details: "spell_extra_attack_fighter_details",
      expanded: "spell_extra_attack_fighter_expanded",

      type: "ability",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_11_20_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  extra_attack_warlock: [
    {      
      h: {ua: 616, ru: 616},
      link: "extra_attack_warlock",
      name: "spell_extra_attack_warlock",
      details: "spell_extra_attack_warlock_details",
      expanded: "spell_extra_attack_warlock_expanded",

      type: "ability",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  bonus_attack: [
    {      
      h: {ua: 616, ru: 616},
      link: "bonus_attack",
      name: "spell_bonus_attack",
      details: "spell_bonus_attack_details",
      expanded: "spell_bonus_attack_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  bonus_attack_fighter: [
    {      
      h: {ua: 616, ru: 616},
      link: "bonus_attack_fighter",
      name: "spell_bonus_attack_fighter",
      details: "spell_bonus_attack_fighter_details",
      expanded: "spell_bonus_attack_fighter_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_18_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  disguise_on_sight: [
    {      
      h: {ua: 704, ru: 704},
      link: "disguise_on_sight",
      name: "spell_disguise_on_sight",
      details: "spell_disguise_on_sight_details",
      expanded: "spell_disguise_on_sight_expanded",

      type: "ability",
      classes: ["ranger"],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["disguise_dirt"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "stealth",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: 10,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  disguise_nature: [
    {      
      h: {ua: 586, ru: 586},
      link: "disguise_nature",
      name: "spell_disguise_nature",
      details: "spell_disguise_nature_details",
      expanded: "spell_disguise_nature_expanded",

      type: "ability",
      slot_type: "disguise_nature_slot",
      classes: ["ranger"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  disappearance: [
    {      
      h: {ua: 586, ru: 586},
      link: "disappearance",
      name: "spell_disappearance",
      details: "spell_disappearance_details",
      expanded: "spell_disappearance_expanded",

      type: "ability",
      classes: ["ranger"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  enemy_killer: [
    {      
      h: {ua: 704, ru: 704},
      link: "enemy_killer",
      name: "spell_enemy_killer",
      details: "spell_enemy_killer_details",
      expanded: "spell_enemy_killer_expanded",

      type: "ability",
      classes: ["ranger"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_WIS",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  horde_breaker: [
    {      
      h: {ua: 616, ru: 616},
      link: "horde_breaker",
      name: "spell_horde_breaker",
      details: "spell_horde_breaker_details",
      expanded: "spell_horde_breaker_expanded",

      type: "ability",
      classes: ["ranger"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  giant_killer: [
    {      
      h: {ua: 616, ru: 616},
      link: "giant_killer",
      name: "spell_giant_killer",
      details: "spell_giant_killer_details",
      expanded: "spell_giant_killer_expanded",

      type: "ability",
      classes: ["ranger"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  colossus_slayer: [
    {      
      h: {ua: 734, ru: 674},
      link: "colossus_slayer",
      name: "spell_colossus_slayer",
      details: "spell_colossus_slayer_details",
      expanded: "spell_colossus_slayer_expanded",

      type: "ability",
      classes: ["ranger"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  whirlwind_attack: [
    {      
      h: {ua: 674, ru: 674},
      link: "whirlwind_attack",
      name: "spell_whirlwind_attack",
      details: "spell_whirlwind_attack_details",
      expanded: "spell_whirlwind_attack_expanded",

      type: "ability",
      classes: ["ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 15,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  volley: [
    {      
      h: {ua: 674, ru: 674},
      link: "volley",
      name: "spell_volley",
      details: "spell_volley_details",
      expanded: "spell_volley_expanded",

      type: "ability",
      classes: ["ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  stand_against_the_tide: [
    {      
      h: {ua: 616, ru: 616},
      link: "stand_against_the_tide",
      name: "spell_stand_against_the_tide",
      details: "spell_stand_against_the_tide_details",
      expanded: "spell_stand_against_the_tide_expanded",

      type: "ability",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      parts: ["none"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  rangers_companion: [
    {      
      h: {ua: 1064, ru: 1154},
      link: "rangers_companion",
      name: "spell_rangers_companion",
      details: "spell_rangers_companion_details",
      expanded: "spell_rangers_companion_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 8,
      cast_duration_units: "hour",

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "forever",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: "Pls_Mastery__Det_7_11_15_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  primal_companion: [
    {      
      h: {ua: 796, ru: 856},
      link: "primal_companion",
      name: "spell_primal_companion",
      details: "spell_primal_companion_details",
      expanded: "spell_primal_companion_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_7_11_15_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  // ==

  divine_channel_wrath: [
    {
      //0      
      h: {ua: 646, ru: 646},
      link: "divine_channel_wrath",
      name: "spell_divine_channel_wrath",
      details: "spell_divine_channel_wrath_details",
      expanded: "spell_divine_channel_wrath_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_directed_strike: [
    {
      //0      
      h: {ua: 674, ru: 674},
      link: "divine_channel_directed_strike",
      name: "spell_divine_channel_directed_strike",
      details: "spell_divine_channel_directed_strike_details",
      expanded: "spell_divine_channel_directed_strike_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "aim_bonus",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: 10,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_war_god_bless: [
    {
      //0      
      h: {ua: 704, ru: 704},
      link: "divine_channel_war_god_bless",
      name: "spell_divine_channel_war_god_bless",
      details: "spell_divine_channel_war_god_bless_details",
      expanded: "spell_divine_channel_war_god_bless_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "aim_bonus",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: 10,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_save_life: [
    {
      //0      
      h: {ua: 718, ru: 748},
      link: "divine_channel_save_life",
      name: "spell_divine_channel_save_life",
      details: "spell_divine_channel_save_life_details",
      expanded: "spell_divine_channel_save_life_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: "sum_w",

      impact_size_foo: "Num_LevelX",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_learn_tool: [
    {      
      h: {ua: 704, ru: 704},
      link: "divine_channel_learn_tool",
      name: "spell_divine_channel_learn_tool",
      details: "spell_divine_channel_learn_tool_details",
      expanded: "spell_divine_channel_learn_tool_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: "Pls_Mastery",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  divine_channel_read_thoughts: [
    {      
      h: {ua: 714, ru: 714},
      link: "divine_channel_read_thoughts",
      name: "spell_divine_channel_read_thoughts",
      details: "spell_divine_channel_read_thoughts_details",
      expanded: "spell_divine_channel_read_thoughts_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  divine_channel_mirror_image: [
    {      
      h: {ua: 824, ru: 884},
      link: "divine_channel_mirror_image",
      name: "spell_divine_channel_mirror_image",
      details: "spell_divine_channel_mirror_image_details",
      expanded: "spell_divine_channel_mirror_image_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["none"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_17_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  divine_channel_cloak_of_shadows: [
    {      
      h: {ua: 586, ru: 586},
      link: "divine_channel_cloak_of_shadows",
      name: "spell_divine_channel_cloak_of_shadows",
      details: "spell_divine_channel_cloak_of_shadows_details",
      expanded: "spell_divine_channel_cloak_of_shadows_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  divine_channel_charm_alimal_plant: [
    {      
      h: {ua: 744, ru: 744},
      link: "divine_channel_charm_alimal_plant",
      name: "spell_divine_channel_charm_alimal_plant",
      details: "spell_divine_channel_charm_alimal_plant_details",
      expanded: "spell_divine_channel_charm_alimal_plant_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["focus", "verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_17_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  divine_channel_radiance_dawn: [
    {      
      h: {ua: 818, ru: 818},
      link: "divine_channel_radiance_dawn",
      name: "spell_divine_channel_radiance_dawn",
      details: "spell_divine_channel_radiance_dawn_details",
      expanded: "spell_divine_channel_radiance_dawn_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["focus"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Pls_Lvl",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    }
  ],

  // --

  divine_strike_sound: [
    {
      //0      
      h: {ua: 704, ru: 704},
      link: "divine_strike_sound",
      name: "spell_divine_strike_sound",
      details: "spell_divine_strike_details",
      expanded: "spell_divine_strike_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "thunder_w",

      impact_size_foo: "Num_Lvl14_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_strike_weapon: [
    {
      //1      
      h: {ua: 704, ru: 704},
      link: "divine_strike_weapon",
      name: "spell_divine_strike_weapon",
      details: "spell_divine_strike_details",
      expanded: "spell_divine_strike_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_Lvl14_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  divine_strike_radiant: [
    {
      //1      
      h: {ua: 704, ru: 704},
      link: "divine_strike_radiant",
      name: "spell_divine_strike_radiant",
      details: "spell_divine_strike_details",
      expanded: "spell_divine_strike_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Num_Lvl14_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  divine_strike_poison: [
    {
      //1      
      h: {ua: 704, ru: 704},
      link: "divine_strike_poison",
      name: "spell_divine_strike_poison",
      details: "spell_divine_strike_details",
      expanded: "spell_divine_strike_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "poison_w",

      impact_size_foo: "Num_Lvl14_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  divine_strike_nature: [
    {
      //1      
      h: {ua: 734, ru: 734},
      link: "divine_strike_nature",
      name: "spell_divine_strike_nature",
      details: "spell_divine_strike_nature_details",
      expanded: "spell_divine_strike_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: null,

      impact_size_foo: "Num_Lvl14_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  // ------

  fey_presence: [
    {      
      h: {ua: 744, ru: 744},
      link: "fey_presence",
      name: "spell_fey_presence",
      details: "spell_fey_presence_details",
      expanded: "spell_fey_presence_expanded",

      type: "ability",
      slot_type: "fey_presence_slot",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 10,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  create_weapon: [
    {      
      h: {ua: 616, ru: 616},
      link: "create_weapon",
      name: "spell_create_weapon",
      details: "spell_create_weapon_details",
      expanded: "spell_create_weapon_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  convert_weapon: [
    {      
      h: {ua: 616, ru: 616},
      link: "convert_weapon",
      name: "spell_convert_weapon",
      details: "spell_convert_weapon_details",
      expanded: "spell_convert_weapon_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  find_familiar_warlock: [
    {
      //0      
      h: {ua: 1034, ru: 1064},
      link: "find_familiar_warlock",
      name: "spell_find_familiar_warlock",
      details: "spell_find_familiar_warlock_details",
      expanded: "spell_find_familiar_warlock_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["material_familiar_10gold", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  gaze_of_two_minds: [
    {
      //0      
      h: {ua: 586, ru: 586},
      link: "gaze_of_two_minds",
      name: "spell_gaze_of_two_minds",
      details: "spell_gaze_of_two_minds_details",
      expanded: "spell_gaze_of_two_minds_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: null,
      spell_duration: 2,
      spell_duration_units: "rounda",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  investment_of_the_chain_master: [
    {
      //0      
      h: {ua: 736, ru: 766},
      link: "investment_of_the_chain_master",
      name: "spell_investment_of_the_chain_master",
      details: "spell_investment_of_the_chain_master_details",
      expanded: "spell_investment_of_the_chain_master_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "familiar",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "always",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  mage_armor_shadow: [
    {
      //0      
      h: {ua: 704, ru: 704},
      link: "mage_armor_shadow",
      name: "spell_mage_armor_shadow",
      details: "spell_mage_armor_details",
      expanded: "spell_mage_armor_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: 3,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  speak_with_animals_warlock: [
    {      
      h: {ua: 646, ru: 646},
      link: "speak_with_animals_warlock",
      name: "spell_speak_with_animals_warlock",
      details: "spell_speak_with_animals_details",
      expanded: "spell_speak_with_animals_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  eldritch_blast_slow: [
    {
      //0      
      h: {ua: 704, ru: 704},
      link: "eldritch_blast_slow",
      name: "spell_eldritch_blast_slow",
      details: "spell_eldritch_blast_slow_details",
      expanded: "spell_eldritch_blast_slow_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "slowing",
      impact_damage_type: null,

      impact_size_foo: "Feet",
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  disguise_self_warlock: [
    {
      //0      
      h: {ua: 626, ru: 656},
      link: "disguise_self_warlock",
      name: "spell_disguise_self_warlock",
      details: "spell_disguise_self_details",
      expanded: "spell_disguise_self_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    },
  ],

  eldritch_blast_distant: [
    {
      //0      
      h: {ua: 674, ru: 704},
      link: "eldritch_blast_distant",
      name: "spell_eldritch_blast_distant",
      details: "spell_eldritch_blast_distant_details",
      expanded: "spell_eldritch_blast_distant_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 300,

      parts: ["none"],

      spell_time: "always",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  false_life_warlock: [
    {
      //1      
      h: {ua: 674, ru: 704},
      link: "false_life_warlock",
      name: "spell_false_life_warlock",
      details: "spell_false_life_details",
      expanded: "spell_false_life_warlock_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: null, 
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: 4,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  eldritch_blast_damage: [
    {
      //0      
      h: {ua: 704, ru: 704},
      link: "eldritch_blast_damage",
      name: "spell_eldritch_blast_damage",
      details: "spell_eldritch_blast_damage_details",
      expanded: "spell_eldritch_blast_damage_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_CHA",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  eldritch_blast_push: [
    {
      //0      
      h: {ua: 674, ru: 674},
      link: "eldritch_blast_push",
      name: "spell_eldritch_blast_push",
      details: "spell_eldritch_blast_push_details",
      expanded: "spell_eldritch_blast_push_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "push",
      impact_damage_type: null,

      impact_size_foo: "Feet",
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  rebuke_of_the_talisman: [
    {
      //0      
      h: {ua: 778, ru: 748},
      link: "rebuke_of_the_talisman",
      name: "spell_rebuke_of_the_talisman",
      details: "spell_rebuke_of_the_talisman_details",
      expanded: "spell_rebuke_of_the_talisman_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "psychic_w",

      impact_size_foo: "Num_Mastery",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  detect_magic_warlock: [
    {
      //0      
      h: {ua: 704, ru: 704},
      link: "detect_magic_warlock",
      name: "spell_detect_magic_warlock",
      details: "spell_detect_magic_details",
      expanded: "spell_detect_magic_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  silent_image_warlock: [
    {
      //1      
      h: {ua: 818, ru: 818},
      link: "silent_image_warlock",
      name: "spell_silent_image_warlock",
      details: "spell_silent_image_details",
      expanded: "spell_silent_image_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: null,
      aim_range: 60,
      aim_aoe: "cube",
      aim_aoe_size: 15,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    },
  ],

  restore_mana_warlock: [
    {
      //1      
      h: {ua: 586, ru: 586},
      link: "restore_mana_warlock",
      name: "spell_restore_mana_warlock",
      details: "spell_restore_mana_warlock_details",
      expanded: "spell_restore_mana_warlock_expanded",

      type: "ability",
      slot_type: "inner_reserve_slot",
      classes: ["warlock"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: null,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  misty_escape: [
    {      
      h: {ua: 734, ru: 734},
      link: "misty_escape",
      name: "spell_misty_escape",
      details: "spell_misty_escape_details",
      expanded: "spell_misty_escape_expanded",

      type: "ability",
      slot_type: "misty_escape_slot",
      classes: ["warlock"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 60,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  beguiling_defenses: [
    {      
      h: {ua: 626, ru: 626},
      link: "beguiling_defenses",
      name: "spell_beguiling_defenses",
      details: "spell_beguiling_defenses_details",
      expanded: "spell_beguiling_defenses_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  dark_delirium: [
    {      
      h: {ua: 714, ru: 744},
      link: "dark_delirium",
      name: "spell_dark_delirium",
      details: "spell_dark_delirium_details",
      expanded: "spell_dark_delirium_expanded",

      type: "ability",
      slot_type: "dark_delirium_slot",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 60,

      parts: ["none"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  dark_ones_blessing: [
    {      
      h: {ua: 674, ru: 674},
      link: "dark_ones_blessing",
      name: "spell_dark_ones_blessing",
      details: "spell_dark_ones_blessing_details",
      expanded: "spell_dark_ones_blessing_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: "temporary",

      impact_size_foo: "Num_CHA_Plus_Lvl_Min1",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  dark_ones_own_luck: [
    {      
      h: {ua: 704, ru: 704},
      link: "dark_ones_own_luck",
      name: "spell_dark_ones_own_luck",
      details: "spell_dark_ones_own_luck_details",
      expanded: "spell_dark_ones_own_luck_expanded",

      type: "ability",
      slot_type: "dark_ones_own_luck_slot",
      classes: ["warlock"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  hurl_through_hell: [
    {      
      h: {ua: 704, ru: 704},
      link: "hurl_through_hell",
      name: "spell_hurl_through_hell",
      details: "spell_hurl_through_hell_details",
      expanded: "spell_hurl_through_hell_expanded",

      type: "ability",
      slot_type: "hurl_through_hell_slot",
      classes: ["warlock"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "psychic_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  entropic_ward: [
    {      
      h: {ua: 646, ru: 616},
      link: "entropic_ward",
      name: "spell_entropic_ward",
      details: "spell_entropic_ward_details",
      expanded: "spell_entropic_ward_expanded",

      type: "ability",
      slot_type: "entropic_ward_slot",
      classes: ["warlock"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  create_thrall: [
    {      
      h: {ua: 616, ru: 586},
      link: "create_thrall",
      name: "spell_create_thrall",
      details: "spell_create_thrall_details",
      expanded: "spell_create_thrall_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  unarmed_strike_bonus: [
    {      
      h: {ua: 616, ru: 616},
      link: "unarmed_strike_bonus",
      name: "spell_unarmed_strike_bonus",
      details: "spell_unarmed_strike_bonus_details",
      expanded: "spell_unarmed_strike_bonus_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  step_of_the_wind: [
    {      
      h: {ua: 616, ru: 616},
      link: "step_of_the_wind",
      name: "spell_step_of_the_wind",
      details: "spell_step_of_the_wind_details",
      expanded: "spell_step_of_the_wind_expanded",

      type: "ability",
      slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  patient_defense: [
    {      
      h: {ua: 616, ru: 616},
      link: "patient_defense",
      name: "spell_patient_defense",
      details: "spell_patient_defense_details",
      expanded: "spell_patient_defense_expanded",

      type: "ability",
      slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  flurry_of_blows: [
    {      
      h: {ua: 616, ru: 616},
      link: "flurry_of_blows",
      name: "spell_flurry_of_blows",
      details: "spell_flurry_of_blows_details",
      expanded: "spell_flurry_of_blows_expanded",

      type: "ability",
      slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  dedicated_weapon: [
    {      
      h: {ua: 586, ru: 616},
      link: "dedicated_weapon",
      name: "spell_dedicated_weapon",
      details: "spell_dedicated_weapon_details",
      expanded: "spell_dedicated_weapon_expanded",

      type: "ability",
      //slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "short_rest",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  deflect_missiles: [
    {      
      h: {ua: 822, ru: 792},
      link: "deflect_missiles",
      name: "spell_deflect_missiles",
      details: "spell_deflect_missiles_details",
      expanded: "spell_deflect_missiles_expanded",

      type: "ability",
      //slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: 60,

      parts: ["touch"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "reduction_w",

      impact_size_foo: "Pls_DEX_Plus_Lvl",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  weapon_strike_bonus: [
    {      
      h: {ua: 616, ru: 616},
      link: "weapon_strike_bonus",
      name: "spell_weapon_strike_bonus",
      details: "spell_weapon_strike_bonus_details",
      expanded: "spell_weapon_strike_bonus_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  slow_fall: [
    {      
      h: {ua: 674, ru: 674},
      link: "slow_fall",
      name: "spell_slow_fall",
      details: "spell_slow_fall_details",
      expanded: "spell_slow_fall_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "reduction_w",

      impact_size_foo: "Num_LevelX",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  quickened_healing: [
    {      
      h: {ua: 674, ru: 674},
      link: "quickened_healing",
      name: "spell_quickened_healing",
      details: "spell_quickened_healing_details",
      expanded: "spell_quickened_healing_expanded",

      type: "ability",
      slot_type: "chi_slot_2",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Dic_14_56_118_1710_Lvl__Pls_Mastery",
      // MonkMartial 4,4,4,4,6, 6,6,6,6,6, 8,8,8,8,8, 8,10,10,10,10
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  extra_strike_monk: [
    {      
      h: {ua: 586, ru: 586},
      link: "extra_strike_monk",
      name: "spell_extra_strike_monk",
      details: "spell_extra_strike_monk_details",
      expanded: "spell_extra_strike_monk_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  stunning_strike: [
    {      
      h: {ua: 626, ru: 626},
      link: "stunning_strike",
      name: "spell_stunning_strike",
      details: "spell_stunning_strike_details",
      expanded: "spell_stunning_strike_expanded",

      type: "ability",
      slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    }
  ],

  diamond_soul: [
    {      
      h: {ua: 586, ru: 586},
      link: "diamond_soul",
      name: "spell_diamond_soul",
      details: "spell_diamond_soul_details",
      expanded: "spell_diamond_soul_expanded",

      type: "ability",
      slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  focused_aim: [
    {      
      h: {ua: 704, ru: 704},
      link: "focused_aim",
      name: "spell_focused_aim",
      details: "spell_focused_aim_details",
      expanded: "spell_focused_aim_expanded",

      type: "ability",
      slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "aim_bonus",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: 2,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  stillness_of_mind: [
    {      
      h: {ua: 586, ru: 586},
      link: "stillness_of_mind",
      name: "spell_stillness_of_mind",
      details: "spell_stillness_of_mind_details",
      expanded: "spell_stillness_of_mind_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  empty_body: [
    {      
      h: {ua: 646, ru: 646},
      link: "empty_body",
      name: "spell_empty_body",
      details: "spell_empty_body_details",
      expanded: "spell_empty_body_expanded",

      type: "ability",
      slot_type: "chi_slot_4",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  open_hand_tech_knock: [
    {      
      h: {ua: 686, ru: 686},
      link: "open_hand_tech_knock",
      name: "spell_open_hand_tech_knock",
      details: "spell_open_hand_tech_knock_details",
      expanded: "spell_open_hand_tech_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration:null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    }
  ],

  open_hand_tech_push: [
    {      
      h: {ua: 774, ru: 774},
      link: "open_hand_tech_push",
      name: "spell_open_hand_tech_push",
      details: "spell_open_hand_tech_push_details",
      expanded: "spell_open_hand_tech_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration:null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "push",
      impact_damage_type: null,

      impact_size_foo: "Feet",
      impact_size_str: null,
      impact_size_num: 15,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    }
  ],

  open_hand_tech_confuse: [
    {      
      h: {ua: 646, ru: 646},
      link: "open_hand_tech_confuse",
      name: "spell_open_hand_tech_confuse",
      details: "spell_open_hand_tech_confuse_details",
      expanded: "spell_open_hand_tech_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration:1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  wholeness_of_body: [
    {      
      h: {ua: 674, ru: 674},
      link: "wholeness_of_body",
      name: "spell_wholeness_of_body",
      details: "spell_wholeness_of_body_details",
      expanded: "spell_wholeness_of_body_expanded",

      type: "ability",
      slot_type: "wholeness_body_slot",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration:null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Num_LevelX",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  sanctuary_monk: [
    {
      //1      
      h: {ua: 656, ru: 656},
      link: "sanctuary_monk",
      name: "spell_sanctuary_monk",
      details: "spell_sanctuary_monk_details",
      expanded: "spell_sanctuary_monk_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "long_rest",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "day",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  quivering_palm: [
    {      
      h: {ua: 744, ru: 774},
      link: "quivering_palm",
      name: "spell_quivering_palm",
      details: "spell_quivering_palm_details",
      expanded: "spell_quivering_palm_expanded",

      type: "ability",
      slot_type: "chi_slot_3",
      classes: ["monk"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "day",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "necrotic_w",

      impact_size_foo: "Dur_Lvl",
      impact_size_str: null,
      impact_size_num: 5280,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "10d10",
    },
  ],

  pass_without_trace_monk: [
    {      
      h: {ua: 748, ru: 748},
      link: "pass_without_trace_monk",
      name: "spell_pass_without_trace_monk",
      details: "spell_pass_without_trace_details",
      expanded: "spell_pass_without_trace_monk_expanded",

      type: "ability",
      slot_type: "chi_slot_2",
      classes: ["druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: "stealth",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: 10,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  darkvision_monk: [
    {
      //2      
      h: {ua: 616, ru: 616},
      link: "darkvision_monk",
      name: "spell_darkvision_monk",
      details: "spell_darkvision_details",
      expanded: "spell_darkvision_monk_expanded",

      type: "ability",
      slot_type: "chi_slot_2",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  silence_monk: [
    {      
      h: {ua: 718, ru: 718},
      link: "silence_monk",
      name: "spell_silence_monk",
      details: "spell_silence_details",
      expanded: "spell_silence_expanded",

      type: "ability",
      slot_type: "chi_slot_2",
      classes: ["monk"],

      cast_time: "action_plus10min",
      cast_duration: null,
      cast_duration_units: null,
      as_ritual: true,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 40,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  darkness_monk: [
    {      
      h: {ua: 838, ru: 838},
      link: "darkness_monk",
      name: "spell_darkness_monk",
      details: "spell_darkness_details",
      expanded: "spell_darkness_expanded",

      type: "ability",
      slot_type: "chi_slot_2",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 60,
      aim_aoe: "sphere",
      aim_aoe_size: 30,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  shadow_step: [
    {      
      h: {ua: 734, ru: 734},
      link: "shadow_step",
      name: "spell_shadow_step",
      details: "spell_shadow_step_details",
      expanded: "spell_shadow_step_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 60,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  cloak_of_shadows_monk: [
    {      
      h: {ua: 646, ru: 646},
      link: "cloak_of_shadows_monk",
      name: "spell_cloak_of_shadows_monk",
      details: "spell_cloak_of_shadows_monk_details",
      expanded: "spell_cloak_of_shadows_monk_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  opportunist: [
    {      
      h: {ua: 616, ru: 616},
      link: "opportunist",
      name: "spell_opportunist",
      details: "spell_opportunist_details",
      expanded: "spell_opportunist_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  water_whip: [
    {      
      h: {ua: 788, ru: 788},
      link: "water_whip",
      name: "spell_water_whip",
      details: "spell_water_whip_details",
      expanded: "spell_water_whip_expanded",

      type: "ability",
      slot_type: "chi_slot_2",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["somatic"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bludgeoning_w",

      impact_size_foo: "Det_5_9_13_17_Lvl",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  shatter_monk: [
    {      
      h: {ua: 802, ru: 802},
      link: "shatter_monk",
      name: "spell_shatter_monk",
      details: "spell_shatter_monk_details",
      expanded: "spell_shatter_monk_expanded",

      type: "ability",
      slot_type: "chi_slot_3",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: "damage",
      impact_damage_type: "thunder_w",

      impact_size_foo: "Det_5_9_13_17_Lvl",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
  ],

  fire_snake_teeth: [
    {      
      h: {ua: 778, ru: 778},
      link: "fire_snake_teeth",
      name: "spell_fire_snake_teeth",
      details: "spell_fire_snake_teeth_details",
      expanded: "spell_fire_snake_teeth_expanded",

      type: "ability",
      slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 15,

      parts: ["somatic"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Det_5_9_13_17_Lvl",
      impact_size_str: null,
      impact_size_num: 0,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  ashing_strike: [
    {      
      h: {ua: 788, ru: 788},
      link: "ashing_strike",
      name: "spell_ashing_strike",
      details: "spell_ashing_strike_details",
      expanded: "spell_ashing_strike_expanded",

      type: "ability",
      slot_type: "chi_slot_2",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Det_5_9_13_17_Lvl",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  four_thunder_fist: [
    {      
      h: {ua: 818, ru: 818},
      link: "four_thunder_fist",
      name: "spell_four_thunder_fist",
      details: "spell_four_thunder_fist_details",
      expanded: "spell_four_thunder_fist_expanded",

      type: "ability",
      slot_type: "chi_slot_2",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "thunder_w",

      impact_size_foo: "Det_5_9_13_17_Lvl",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
  ],

  gust_of_wind_monk: [
    {      
      h: {ua: 848, ru: 818},
      link: "gust_of_wind_monk",
      name: "spell_gust_of_wind_monk",
      details: "spell_gust_of_wind_monk_details",
      expanded: "spell_gust_of_wind_monk_expanded",

      type: "ability",
      slot_type: "chi_slot_2",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "line",
      aim_aoe_size: 60,

      impact_type: "push",
      impact_damage_type: null,

      impact_size_foo: "Feet",
      impact_size_str: null,
      impact_size_num: 15,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    },
  ],

  air_fist: [
    {      
      h: {ua: 788, ru: 788},
      link: "air_fist",
      name: "spell_air_fist",
      details: "spell_air_fist_details",
      expanded: "spell_air_fist_expanded",

      type: "ability",
      slot_type: "chi_slot_2",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["somatic"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bludgeoning_w",

      impact_size_foo: "Det_5_9_13_17_Lvl",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: "÷2",
    },
  ],

  hold_person_monk: [
    {      
      h: {ua: 788, ru: 758},
      link: "hold_person_monk",
      name: "spell_hold_person_monk",
      details: "spell_hold_person_monk_details",
      expanded: "spell_hold_person_monk_expanded",

      type: "ability",
      slot_type: "chi_slot_3",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_disttance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Det_5_9_13_17_Lvl",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  element_bond: [
    {      
      h: {ua: 944, ru: 944},
      link: "element_bond",
      name: "spell_element_bond",
      details: "spell_element_bond_details",
      expanded: "spell_element_bond_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["somatic"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  form_river: [
    {      
      h: {ua: 748, ru: 748},
      link: "form_river",
      name: "spell_form_river",
      details: "spell_form_river_details",
      expanded: "spell_form_river_expanded",

      type: "ability",
      slot_type: "chi_slot_1",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 30,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  sorcery_to_mana: [
    {      
      h: {ua: 736, ru: 736},
      link: "sorcery_to_mana",
      name: "spell_sorcery_to_mana",
      details: "spell_sorcery_to_mana_details",
      expanded: "spell_sorcery_to_mana_expanded",

      type: "ability",
      slot_type: "sorcery_slot_2_plus",
      classes: ["sorcerer"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  mana_to_sorcery: [
    {},
    {      
      h: {ua: 674, ru: 674},
      link: "mana_to_sorcery",
      name: "spell_mana_to_sorcery",
      details: "spell_mana_to_sorcery_details",
      expanded: "spell_mana_to_sorcery_expanded",

      type: "ability",
      classes: ["sorcerer"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "sorcery_slots",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},{},{},{}
  ],

  metamagic_careful: [
    {      
      h: {ua: 704, ru: 704},
      link: "metamagic_careful",
      name: "spell_metamagic_careful",
      details: "spell_metamagic_careful_details",
      expanded: "spell_metamagic_careful_expanded",

      type: "ability",
      slot_type: "sorcery_slot",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_CHA_Min1",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  metamagic_distant: [
    {      
      h: {ua: 674, ru: 674},
      link: "metamagic_distant",
      name: "spell_metamagic_distant",
      details: "spell_metamagic_distant_details",
      expanded: "spell_metamagic_distant_expanded",

      type: "ability",
      slot_type: "sorcery_slot",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: 2,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  metamagic_empowered: [
    {      
      h: {ua: 704, ru: 704},
      link: "metamagic_empowered",
      name: "spell_metamagic_empowered",
      details: "spell_metamagic_empowered_details",
      expanded: "spell_metamagic_empowered_expanded",

      type: "ability",
      slot_type: "sorcery_slot",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "dices",
      impact_damage_type: "of_damage",

      impact_size_foo: "Num_CHA_Min1",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  metamagic_extended: [
    {      
      h: {ua: 586, ru: 586},
      link: "metamagic_extended",
      name: "spell_metamagic_extended",
      details: "spell_metamagic_extended_details",
      expanded: "spell_metamagic_extended_expanded",

      type: "ability",
      slot_type: "sorcery_slot",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "up_to",
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  metamagic_heightened: [
    {      
      h: {ua: 616, ru: 616},
      link: "metamagic_heightened",
      name: "spell_metamagic_heightened",
      details: "spell_metamagic_heightened_details",
      expanded: "spell_metamagic_heightened_expanded",

      type: "ability",
      slot_type: "sorcery_slot_3",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  metamagic_quickened: [
    {      
      h: {ua: 586, ru: 586},
      link: "metamagic_quickened",
      name: "spell_metamagic_quickened",
      details: "spell_metamagic_quickened_details",
      expanded: "spell_metamagic_quickened_expanded",

      type: "ability",
      slot_type: "sorcery_slot_2",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  metamagic_subtle: [
    {      
      h: {ua: 586, ru: 616},
      link: "metamagic_subtle",
      name: "spell_metamagic_subtle",
      details: "spell_metamagic_subtle_details",
      expanded: "spell_metamagic_subtle_expanded",

      type: "ability",
      slot_type: "sorcery_slot",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  metamagic_transmuted: [
    {      
      h: {ua: 586, ru: 586},
      link: "metamagic_transmuted",
      name: "spell_metamagic_transmuted",
      details: "spell_metamagic_transmuted_details",
      expanded: "spell_metamagic_transmuted_expanded",

      type: "ability",
      slot_type: "sorcery_slot",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  metamagic_twinned: [
    {      
      h: {ua: 646, ru: 646},
      link: "metamagic_twinned",
      name: "spell_metamagic_twinned",
      details: "spell_metamagic_twinned_details",
      expanded: "spell_metamagic_twinned_expanded",

      type: "ability",
      slot_type: "sorcery_slot_1_plus",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  metamagic_seeking: [
    {      
      h: {ua: 616, ru: 646},
      link: "metamagic_seeking",
      name: "spell_metamagic_seeking",
      details: "spell_metamagic_seeking_details",
      expanded: "spell_metamagic_seeking_expanded",

      type: "ability",
      slot_type: "sorcery_slot_2",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  magical_direction: [
    {      
      h: {ua: 586, ru: 586},
      link: "magical_direction",
      name: "spell_magical_direction",
      details: "spell_magical_direction_details",
      expanded: "spell_magical_direction_expanded",

      type: "ability",
      slot_type: "sorcery_slot",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  elemental_affinity_fire: [
    {      
      h: {ua: 704, ru: 674},
      link: "elemental_affinity_fire",
      name: "spell_elemental_affinity_fire",
      details: "spell_elemental_affinity_fire_details",
      expanded: "spell_elemental_affinity_fire_expanded",

      type: "ability",
      classes: ["sorcerer"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_CHA",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  elemental_affinity_cold: [
    {      
      h: {ua: 704, ru: 704},
      link: "elemental_affinity_cold",
      name: "spell_elemental_affinity_cold",
      details: "spell_elemental_affinity_cold_details",
      expanded: "spell_elemental_affinity_cold_expanded",

      type: "ability",
      classes: ["sorcerer"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_CHA",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  elemental_affinity_electricity: [
    {      
      h: {ua: 704, ru: 674},
      link: "elemental_affinity_electricity",
      name: "spell_elemental_affinity_electricity",
      details: "spell_elemental_affinity_electricity_details",
      expanded: "spell_elemental_affinity_electricity_expanded",

      type: "ability",
      classes: ["sorcerer"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_CHA",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  elemental_affinity_acid: [
    {      
      h: {ua: 704, ru: 674},
      link: "elemental_affinity_acid",
      name: "spell_elemental_affinity_acid",
      details: "spell_elemental_affinity_acid_details",
      expanded: "spell_elemental_affinity_acid_expanded",

      type: "ability",
      classes: ["sorcerer"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_CHA",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  elemental_affinity_poison: [
    {      
      h: {ua: 704, ru: 674},
      link: "elemental_affinity_poison",
      name: "spell_elemental_affinity_poison",
      details: "spell_elemental_affinity_poison_details",
      expanded: "spell_elemental_affinity_poison_expanded",

      type: "ability",
      classes: ["sorcerer"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "spell",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_CHA",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  dragon_resistanse_fire: [
    {      
      h: {ua: 586, ru: 586},
      link: "dragon_resistanse_fire",
      name: "spell_dragon_resistanse_fire",
      details: "spell_dragon_resistanse_fire_details",
      expanded: "spell_dragon_resistanse_fire_expanded",

      type: "ability",
      slot_type: "sorcery_slot",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  dragon_resistanse_cold: [
    {      
      h: {ua: 616, ru: 586},
      link: "dragon_resistanse_cold",
      name: "spell_dragon_resistanse_cold",
      details: "spell_dragon_resistanse_cold_details",
      expanded: "spell_dragon_resistanse_cold_expanded",

      type: "ability",
      slot_type: "sorcery_slot",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  dragon_resistanse_electricity: [
    {      
      h: {ua: 616, ru: 616},
      link: "dragon_resistanse_electricity",
      name: "spell_dragon_resistanse_electricity",
      details: "spell_dragon_resistanse_electricity_details",
      expanded: "spell_dragon_resistanse_electricity_expanded",

      type: "ability",
      slot_type: "sorcery_slot",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  dragon_resistanse_acid: [
    {      
      h: {ua: 616, ru: 586},
      link: "dragon_resistanse_acid",
      name: "spell_dragon_resistanse_acid",
      details: "spell_dragon_resistanse_acid_details",
      expanded: "spell_dragon_resistanse_acid_expanded",

      type: "ability",
      slot_type: "sorcery_slot",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  dragon_resistanse_poison: [
    {      
      h: {ua: 616, ru: 586},
      link: "dragon_resistanse_poison",
      name: "spell_dragon_resistanse_poison",
      details: "spell_dragon_resistanse_poison_details",
      expanded: "spell_dragon_resistanse_poison_expanded",

      type: "ability",
      slot_type: "sorcery_slot",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  dragon_wings: [
    {      
      h: {ua: 616, ru: 616},
      link: "dragon_wings",
      name: "spell_dragon_wings",
      details: "spell_dragon_wings_details",
      expanded: "spell_dragon_wings_expanded",

      type: "ability",
      classes: ["sorcerer"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  dragon_presence: [
    {      
      h: {ua: 744, ru: 744},
      link: "dragon_presence",
      name: "spell_dragon_presence",
      details: "spell_dragon_presence_details",
      expanded: "spell_dragon_presence_expanded",

      type: "ability",
      slot_type: "sorcery_slot_5",
      classes: ["sorcerer"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 60,

      parts: ["none"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  wild_magic_surge: [
    {      
      h: {ua: 646, ru: 646},
      link: "wild_magic_surge",
      name: "spell_wild_magic_surge",
      details: "spell_wild_magic_surge_details",
      expanded: "spell_wild_magic_surge_expanded",

      type: "ability",
      slot_type: "wild_magic_surge_slot",
      classes: ["sorcerer"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  bend_luck: [
    {      
      h: {ua: 674, ru: 704},
      link: "bend_luck",
      name: "spell_bend_luck",
      details: "spell_bend_luck_details",
      expanded: "spell_bend_luck_expanded",

      type: "ability",
      slot_type: "sorcery_slot_2",
      classes: ["sorcerer"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  countercharm: [
    {      
      h: {ua: 734, ru: 704},
      link: "countercharm",
      name: "spell_countercharm",
      details: "spell_countercharm_details",
      expanded: "spell_countercharm_expanded",

      type: "ability",
      classes: ["bard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["verbal"],

      spell_time: null,
      spell_duration: 2,
      spell_duration_units: "rounda",

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  peerless_skill: [
    {      
      h: {ua: 616, ru: 616},
      link: "peerless_skill",
      name: "spell_peerless_skill",
      details: "spell_peerless_skill_details",
      expanded: "spell_peerless_skill_expanded",

      type: "ability",
      slot_type: "bardic_inspiration_slot",
      classes: ["bard"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  indomity: [
    {      
      h: {ua: 586, ru: 586},
      link: "indomity",
      name: "spell_indomity",
      details: "spell_indomity_details",
      expanded: "spell_indomity_expanded",

      type: "ability",
      slot_type: "indomity_slot",
      classes: ["fighter"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  know_your_enemy: [
    {      
      h: {ua: 616, ru: 586},
      link: "know_your_enemy",
      name: "spell_know_your_enemy",
      details: "spell_know_your_enemy_details",
      expanded: "spell_know_your_enemy_expanded",

      type: "ability",
      classes: ["fighter"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  arcane_charge: [
    {      
      h: {ua: 704, ru: 704},
      link: "arcane_charge",
      name: "spell_arcane_charge",
      details: "spell_arcane_charge_details",
      expanded: "spell_arcane_charge_expanded",

      type: "ability",
      classes: ["fighter"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  athletic_jump: [
    {      
      h: {ua: 674, ru: 674},
      link: "athletic_jump",
      name: "spell_athletic_jump",
      details: "spell_athletic_jump_details",
      expanded: "spell_athletic_jump_expanded",

      type: "ability",
      classes: ["fighter"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: "Num_STR__Feet",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  survivor: [
    {      
      h: {ua: 674, ru: 674},
      link: "survivor",
      name: "spell_survivor",
      details: "spell_survivor_details",
      expanded: "spell_survivor_expanded",

      type: "ability",
      classes: ["fighter"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Pls_CON",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  aura_of_protection: [
    {      
      h: {ua: 748, ru: 748},
      link: "aura_of_protection",
      name: "spell_aura_of_protection",
      details: "spell_aura_of_protection_details",
      expanded: "spell_aura_of_protection_expanded",

      type: "ability",
      classes: ["paladin"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "always",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: "Num_CHA_Min1__Ran_18_30f",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  aura_of_courage: [
    {      
      h: {ua: 704, ru: 704},
      link: "aura_of_courage",
      name: "spell_aura_of_courage",
      details: "spell_aura_of_courage_details",
      expanded: "spell_aura_of_courage_expanded",

      type: "ability",
      classes: ["paladin"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "always",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Ran_18_30f",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  cleansing_touch: [
    {      
      h: {ua: 586, ru: 616},
      link: "cleansing_touch",
      name: "spell_cleansing_touch",
      details: "spell_cleansing_touch_details",
      expanded: "spell_cleansing_touch_expanded",

      type: "ability",
      slot_type: "cleansing_touch_slot",
      classes: ["paladin"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  aura_of_devotion: [
    {      
      h: {ua: 704, ru: 704},
      link: "aura_of_devotion",
      name: "spell_aura_of_devotion",
      details: "spell_aura_of_devotion_details",
      expanded: "spell_aura_of_devotion_expanded",

      type: "ability",
      classes: ["paladin"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "always",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Ran_18_30f",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  protection_from_evil_and_good_paladin: [
    {
      //0      
      h: {ua: 676, ru: 676},
      link: "protection_from_evil_and_good_paladin",
      name: "spell_protection_from_evil_and_good_paladin",
      details: "spell_protection_from_evil_and_good_paladin_details",
      expanded: "spell_protection_from_evil_and_good_paladin_expanded",

      type: "abjuration",
      classes: ["paladin"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "always",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  holy_nimbus: [
    {      
      h: {ua: 808, ru: 778},
      link: "holy_nimbus",
      name: "spell_holy_nimbus",
      details: "spell_holy_nimbus_details",
      expanded: "spell_holy_nimbus_expanded",

      type: "ability",
      slot_type: "holy_nimbus_slot",
      classes: ["paladin"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  aura_of_warding: [
    {      
      h: {ua: 704, ru: 704},
      link: "aura_of_warding",
      name: "spell_aura_of_warding",
      details: "spell_aura_of_warding_details",
      expanded: "spell_aura_of_warding_expanded",

      type: "ability",
      classes: ["paladin"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "always",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Ran_18_30f",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  undying_sentinel: [
    {      
      h: {ua: 616, ru: 616},
      link: "undying_sentinel",
      name: "spell_undying_sentinel",
      details: "spell_undying_sentinel_details",
      expanded: "spell_undying_sentinel_expanded",

      type: "ability",
      slot_type: "undying_sentinel_slot",
      classes: ["paladin"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  elder_champion: [
    {      
      h: {ua: 868, ru: 868},
      link: "elder_champion",
      name: "spell_elder_champion",
      details: "spell_elder_champion_details",
      expanded: "spell_elder_champion_expanded",

      type: "ability",
      slot_type: "elder_champion_slot",
      classes: ["paladin"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 10,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: 10,
      impact_size_num: 10,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  relentless_avenger: [
    {      
      h: {ua: 616, ru: 616},
      link: "relentless_avenger",
      name: "spell_relentless_avenger",
      details: "spell_relentless_avenger_details",
      expanded: "spell_relentless_avenger_expanded",

      type: "ability",
      classes: ["paladin"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  soul_of_vengeance: [
    {      
      h: {ua: 616, ru: 616},
      link: "soul_of_vengeance",
      name: "spell_soul_of_vengeance",
      details: "spell_soul_of_vengeance_details",
      expanded: "spell_soul_of_vengeance_expanded",

      type: "ability",
      classes: ["paladin"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  avenging_angel: [
    {      
      h: {ua: 788, ru: 788},
      link: "avenging_angel",
      name: "spell_avenging_angel",
      details: "spell_avenging_angel_details",
      expanded: "spell_avenging_angel_expanded",

      type: "ability",
      slot_type: "avenging_angel_slot",
      classes: ["paladin"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe:  null,
      aim_aoe_size: null,

      impact_type: "speed",
      impact_damage_type: "of_flight",

      impact_size_foo: "Feet",
      impact_size_str: null,
      impact_size_num: 60,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  paladin_divine_smite: [
    {
      //0
    },
    {
      //1      
      h: {ua: 764, ru: 734},
      link: "paladin_divine_smite",
      name: "spell_paladin_divine_smite",
      details: "spell_paladin_divine_smite_details",
      expanded: "spell_paladin_divine_smite_expanded",

      type: "ability",
      classes: ["paladin"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  paladin_divine_smite_free: [
    {      
      h: {ua: 704, ru: 704},
      link: "paladin_divine_smite_free",
      name: "spell_paladin_divine_smite_free",
      details: "spell_paladin_divine_smite_free_details",
      expanded: "spell_paladin_divine_smite_free_expanded",

      type: "ability",
      classes: ["paladin"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  learn_spell: [
    {      
      h: {ua: 616, ru: 646},
      link: "learn_spell",
      name: "spell_learn_spell",
      details: "spell_learn_spell_details",
      expanded: "spell_learn_spell_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "ritual",
      cast_duration: 2,
      cast_duration_units: "hour_per_lvl",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["gold50_per_lvl"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  small_conjuration: [
    {      
      h: {ua: 764, ru: 764},
      link: "small_conjuration",
      name: "spell_small_conjuration",
      details: "spell_small_conjuration_details",
      expanded: "spell_small_conjuration_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  magical_protection: [
    {      
      h: {ua: 704, ru: 764},
      link: "magical_protection",
      name: "spell_magical_protection",
      details: "spell_magical_protection_details",
      expanded: "spell_magical_protection_expanded",

      type: "ability",
      slot_type: "magical_protection_slot",
      classes: ["wizard"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "end_of_the_day",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: "Num_2xLvl_plus_INT__Det_6_Lvl__Ran_6_30f",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  hypnotic_look: [
    {      
      h: {ua: 744, ru: 744},
      link: "hypnotic_look",
      name: "spell_hypnotic_look",
      details: "spell_hypnotic_look_details",
      expanded: "spell_hypnotic_look_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: 5,

      parts: ["verbal","looking"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  small_alchemy: [
    {      
      h: {ua: 704, ru: 704},
      link: "small_alchemy",
      name: "spell_small_alchemy",
      details: "spell_small_alchemy_details",
      expanded: "spell_small_alchemy_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 1,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  portent: [
    {      
      h: {ua: 646, ru: 676},
      link: "portent",
      name: "spell_portent",
      details: "spell_portent_details",
      expanded: "spell_portent_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "end_of_the_day",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_14_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  overload: [
    {      
      h: {ua: 796, ru: 796},
      link: "overload",
      name: "spell_overload",
      details: "spell_overload_details",
      expanded: "spell_overload_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  quick_dash: [
    {      
      h: {ua: 616, ru: 646},
      link: "quick_dash",
      name: "spell_quick_dash",
      details: "spell_quick_dash_details",
      expanded: "spell_quick_dash_expanded",

      type: "ability",
      classes: ["barbarian"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  safe_movement: [
    {      
      h: {ua: 734, ru: 674},
      link: "safe_movement",
      name: "spell_safe_movement",
      details: "spell_safe_movement_details",
      expanded: "spell_safe_movement_expanded",

      type: "ability",
      slot_type: "movement_slot",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  swap: [
    {      
      h: {ua: 734, ru: 704},
      link: "swap",
      name: "spell_swap",
      details: "spell_swap_details",
      expanded: "spell_swap_expanded",

      type: "ability",
      slot_type: "movement_slot",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  transform_illusion: [
    {      
      h: {ua: 586, ru: 586},
      link: "transform_illusion",
      name: "spell_transform_illusion",
      details: "spell_transform_illusion_details",
      expanded: "spell_transform_illusion_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  self_illusion: [
    {      
      h: {ua: 586, ru: 586},
      link: "self_illusion",
      name: "spell_self_illusion",
      details: "spell_self_illusion_details",
      expanded: "spell_self_illusion_expanded",

      type: "ability",
      slot_type: "self_illusion_slot",
      classes: ["wizard"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  illusory_reality: [
    {      
      h: {ua: 616, ru: 616},
      link: "illusory_reality",
      name: "spell_illusory_reality",
      details: "spell_illusory_reality_details",
      expanded: "spell_illusory_reality_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  control_undead: [
    {      
      h: {ua: 744, ru: 744},
      link: "control_undead",
      name: "spell_control_undead",
      details: "spell_control_undead_details",
      expanded: "spell_control_undead_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["none"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",
      impact_size_saved: null,
    }
  ],

  instinct_charm: [
    {      
      h: {ua: 714, ru: 744},
      link: "instinct_charm",
      name: "spell_instinct_charm",
      details: "spell_instinct_charm_details",
      expanded: "spell_instinct_charm_expanded",

      type: "ability",
      slot_type: "instinct_charm_slot",
      classes: ["wizard"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  powerful_charm: [
    {      
      h: {ua: 616, ru: 616},
      link: "powerful_charm",
      name: "spell_powerful_charm",
      details: "spell_powerful_charm_details",
      expanded: "spell_powerful_charm_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  false_memories: [
    {      
      h: {ua: 646, ru: 646},
      link: "false_memories",
      name: "spell_false_memories",
      details: "spell_false_memories_details",
      expanded: "spell_false_memories_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  erase_memories: [
    {      
      h: {ua: 774, ru: 774},
      link: "erase_memories",
      name: "spell_erase_memories",
      details: "spell_erase_memories_details",
      expanded: "spell_erase_memories_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "time",
      impact_damage_type: "hours",

      impact_size_foo: "Num_CHA_Min0_Plus1",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    }
  ],

  transmutation_stone: [
    {      
      h: {ua: 914, ru: 914},
      link: "transmutation_stone",
      name: "spell_transmutation_stone",
      details: "spell_transmutation_stone_details",
      expanded: "spell_transmutation_stone_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "ritual",
      cast_duration: 8,
      cast_duration_units: "hour",

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: "Num_Mastery",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  big_transformation: [
    {      
      h: {ua: 704, ru: 734},
      link: "big_transformation",
      name: "spell_big_transformation",
      details: "spell_big_transformation_details",
      expanded: "spell_big_transformation_expanded",

      type: "ability",
      slot_type: "genius_slot",
      classes: ["wizard"],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["spell_transmutation_stone","touch"],

      spell_time: "always",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 5,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  return_youth: [
    {      
      h: {ua: 704, ru: 734},
      link: "return_youth",
      name: "spell_return_youth",
      details: "spell_return_youth_details",
      expanded: "spell_return_youth_expanded",

      type: "ability",
      slot_type: "genius_slot",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["spell_transmutation_stone","touch"],

      spell_time: "always",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "younging",
      impact_damage_type: "years",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  panacea: [
    {      
      h: {ua: 586, ru: 586},
      link: "panacea",
      name: "spell_panacea",
      details: "spell_panacea_details",
      expanded: "spell_panacea_expanded",

      type: "ability",
      slot_type: "genius_slot",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["spell_transmutation_stone"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  divination_expert: [
    {      
      h: {ua: 616, ru: 646},
      link: "divination_expert",
      name: "spell_divination_expert",
      details: "spell_divination_expert_details",
      expanded: "spell_divination_expert_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  third_eye: [
    {      
      h: {ua: 766, ru: 796},
      link: "third_eye",
      name: "spell_third_eye",
      details: "spell_third_eye_details",
      expanded: "spell_third_eye_expanded",

      type: "ability",
      slot_type: "third_eye_slot",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "day",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  bane_warlock: [
    {
      //0
    },
    {
      //1      
      h: {ua: 818, ru: 818},
      link: "bane_warlock",
      name: "spell_bane_warlock",
      details: "spell_bane_warlock_details",
      expanded: "spell_bane_warlock_expanded",

      type: "enchantment",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
  ],

  rogue_luck: [
    {      
      h: {ua: 616, ru: 616},
      link: "rogue_luck",
      name: "spell_rogue_luck",
      details: "spell_rogue_luck_details",
      expanded: "spell_rogue_luck_expanded",

      type: "ability",
      slot_type: "luck_slot",
      classes: ["rogue"],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  luck_feat: [
    {      
      h: {ua: 616, ru: 616},
      link: "luck_feat",
      name: "spell_luck_feat",
      details: "spell_luck_feat_details",
      expanded: "spell_luck_feat_expanded",

      type: "ability",
      slot_type: "lucky_slot",
      classes: [],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  dissapear: [
    {      
      h: {ua: 646, ru: 646},
      link: "dissapear",
      name: "spell_dissapear",
      details: "spell_dissapear_details",
      expanded: "spell_dissapear_expanded",

      type: "ability",
      slot_type: "dissapear_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  lifedrinker: [
    {      
      h: {ua: 704, ru: 704},
      link: "lifedrinker",
      name: "spell_lifedrinker",
      details: "spell_lifedrinker_details",
      expanded: "spell_lifedrinker_expanded",

      type: "ability",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "necrotic_w",

      impact_size_foo: "Num_CHA_Min1",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  astral_projection_monk: [
    {      
      h: {ua: 884, ru: 884},
      link: "astral_projection_monk",
      name: "spell_astral_projection_monk",
      details: "spell_astral_projection_monk_details",
      expanded: "spell_astral_projection_monk_expanded",

      type: "ability",
      slot_type: "chi_slot_8",
      classes: ["monk"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["somatic","verbal"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  fly_monk: [
    {      
      h: {ua: 586, ru: 586},
      link: "fly_monk",
      name: "spell_fly_monk",
      details: "spell_fly_monk_details",
      expanded: "spell_fly_monk_expanded",

      type: "ability",
      slot_type: "chi_slot_4",
      classes: ["monk"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      parts: ["none"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  fireball_monk: [
    {      
      h: {ua: 832, ru: 832},
      link: "fireball_monk",
      name: "spell_fireball_monk",
      details: "spell_fireball_details",
      expanded: "spell_fireball_monk_expanded",

      type: "ability",
      slot_type: "chi_slot_4",
      classes: ["monk",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 150,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 40,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Det_5_9_13_17_Lvl",
      impact_size_str: null,
      impact_size_num: 8,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  gaseous_form_monk: [
    {      
      h: {ua: 826, ru: 886},
      link: "gaseous_form_monk",
      name: "spell_gaseous_form_monk",
      details: "spell_gaseous_form_monk_details",
      expanded: "spell_gaseous_form_monk_expanded",

      type: "ability",
      slot_type: "chi_slot_4",
      classes: ["monk",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  cone_of_cold_monk: [
    {      
      h: {ua: 758, ru: 758},
      link: "cone_of_cold_monk",
      name: "spell_cone_of_cold_monk",
      details: "spell_cone_of_cold_monk_details",
      expanded: "spell_cone_of_cold_monk_expanded",

      type: "ability",
      slot_type: "chi_slot_6",
      classes: ["monk",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["somatic"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cone",
      aim_aoe_size: 60,

      impact_type: "damage",
      impact_damage_type: "cold_w",

      impact_size_foo: "Det_5_9_13_17_Lvl",
      impact_size_str: null,
      impact_size_num: 8,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
  ],

  wall_of_stone_monk: [
    {      
      h: {ua: 878, ru: 938},
      link: "wall_of_stone_monk",
      name: "spell_wall_of_stone_monk",
      details: "spell_wall_of_stone_details",
      expanded: "spell_wall_of_stone_expanded",

      type: "ability",
      slot_type: "chi_slot_6",
      classes: ["monk",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["none"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "line",
      aim_aoe_size: 100,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
  ],

  stoneskin_monk: [
    {      
      h: {ua: 616, ru: 616},
      link: "stoneskin_monk",
      name: "spell_stoneskin_monk",
      details: "spell_stoneskin_monk_details",
      expanded: "spell_stoneskin_monk_expanded",

      type: "ability",
      slot_type: "chi_slot_5",
      classes: ["monk",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  wall_of_fire_monk: [
    {      
      h: {ua: 862, ru: 862},
      link: "wall_of_fire_monk",
      name: "spell_wall_of_fire_monk",
      details: "spell_wall_of_fire_details",
      expanded: "spell_wall_of_fire_monk_expanded",

      type: "ability",
      slot_type: "chi_slot_5",
      classes: ["monk",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["none"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "line",
      aim_aoe_size: 60,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Det_5_9_13_17_Lvl",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  hold_monster_warlock: [
    {      
      h: {ua: 774, ru: 744},
      link: "hold_monster_warlock",
      name: "spell_hold_monster_warlock",
      details: "spell_hold_monster_warlock_details",
      expanded: "spell_hold_monster_warlock_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  raise_dead_wizard: [
    {      
      h: {ua: 854, ru: 884},
      link: "raise_dead_wizard",
      name: "spell_raise_dead_wizard",
      details: "spell_raise_dead_wizard_details",
      expanded: "spell_raise_dead_wizard_expanded",

      type: "ability",
      slot_type: "genius_slot",
      classes: ["wizard",],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch","somatic","verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "fee",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 4,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  speak_with_dead_warlock: [
    {      
      h: {ua: 674, ru: 6674},
      link: "speak_with_dead_warlock",
      name: "spell_speak_with_dead_warlock",
      details: "spell_speak_with_dead_details",
      expanded: "spell_speak_with_dead_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["focus","somatic","verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  arcane_eye_warlock: [
    {      
      h: {ua: 822, ru: 822},
      link: "arcane_eye_warlock",
      name: "spell_arcane_eye_warlock",
      details: "spell_arcane_eye_details",
      expanded: "spell_arcane_eye_expanded",

      type: "ability",
      classes: ["wizard",      "sorcerer","ranger","druid","cleric","paladin","bard","warlock",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 30,

      impact_type: "speed",
      impact_damage_type: null,

      impact_size_foo: "Feet",
      impact_size_str: null,
      impact_size_num: 30,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  polymorph_warlock: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 1194, ru: 1224},
      link: "polymorph_warlock",
      name: "spell_polymorph_warlock",
      details: "spell_polymorph_warlock_details",
      expanded: "spell_polymorph_warlock_expanded",

      type: "ability",
      classes: ["druid","bard","sorcerer","wizard",       "ranger","warlock","paladin","cleric",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  confusion_warlock: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 788, ru: 818},
      link: "confusion_warlock",
      name: "spell_confusion_warlock",
      details: "spell_confusion_warlock_details",
      expanded: "spell_confusion_warlock_expanded",

      type: "ability",
      classes: ["druid","bard","wizard","sorcerer",      "cleric","warlock","paladin","ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "aim_aoe",
      impact_damage_type: "sphere",

      impact_size_foo: "Feet__Num_Plus_10",
      impact_size_str: null,
      impact_size_num: 20,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
  ],

  polymorph_wizard: [
    {      
      h: {ua: 976, ru: 1006},
      link: "polymorph_wizard",
      name: "spell_polymorph_wizard",
      details: "spell_polymorph_wizard_details",
      expanded: "spell_polymorph_wizard_expanded",

      type: "ability",
      slot_type: "polymorph_slot",
      classes: ["wizard",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  jump_warlock: [
    {
      //1      
      h: {ua: 586, ru: 586},
      link: "jump_warlock",
      name: "spell_jump_warlock",
      details: "spell_jump_warlock_details",
      expanded: "spell_jump_warlock_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  levitate_warlock: [
    {
      //2      
      h: {ua: 616, ru: 616},
      link: "levitate_warlock",
      name: "spell_levitate_warlock",
      details: "spell_levitate_warlock_details",
      expanded: "spell_levitate_warlock_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  slow_warlock: [
    {},
    {},
    {},
    {      
      h: {ua: 1072, ru: 1072},
      link: "slow_warlock",
      name: "spell_slow_warlock",
      details: "spell_slow_warlock_details",
      expanded: "spell_slow_warlock_expanded",

      type: "ability",
      classes: ["warlock",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 40,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 6,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  animate_dead_wizard: [
    {},
    {},
    {},
    {      
      h: {ua: 778, ru: 748},
      link: "animate_dead_wizard",
      name: "spell_animate_dead_wizard",
      details: "spell_animate_dead_details",
      expanded: "spell_animate_dead_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["focus","somatic","verbal"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_2",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  conjure_elemental_warlock: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 882, ru: 912},
      link: "conjure_elemental_warlock",
      name: "spell_conjure_elemental_warlock",
      details: "spell_conjure_elemental_warlock_details",
      expanded: "spell_conjure_elemental_warlock_expanded",

      type: "ability",
      classes: ["warlock",],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 10,

      impact_type: "dangerness",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
  ],

  bestow_curse_warlock: [
    {},
    {},
    {},
    {      
      h: {ua: 836, ru: 866},
      link: "bestow_curse_warlock",
      name: "spell_bestow_curse_warlock",
      details: "spell_bestow_curse_warlock_details",
      expanded: "spell_bestow_curse_warlock_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch","somatic","verbal"],

      spell_time: null,
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Dur_10_8_8_24_Nul__Sti_Con_Nul_Nul_Til__Sdu_Min_Hour_Hour_Nul",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
  ],

  compulsion_warlock: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 744, ru: 744},
      link: "compulsion_warlock",
      name: "spell_compulsion_warlock",
      details: "spell_compulsion_warlock_details",
      expanded: "spell_compulsion_warlock_expanded",

      type: "ability",
      classes: ["warlock",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  help_of_talisman_warlock: [
    {      
      h: {ua: 674, ru: 674},
      link: "help_of_talisman_warlock",
      name: "spell_help_of_talisman_warlock",
      details: "spell_help_of_talisman_warlock_details",
      expanded: "spell_help_of_talisman_warlock_expanded",

      type: "ability",
      slot_type: "talisman_slot",
      classes: ["warlock",],

      cast_time: "none_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  create_talisman_warlock: [
    {      
      h: {ua: 616, ru: 616},
      link: "create_talisman_warlock",
      name: "spell_create_talisman_warlock",
      details: "spell_create_talisman_warlock_details",
      expanded: "spell_create_talisman_warlock_expanded",

      type: "ability",
      classes: ["warlock",],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  empowered_evocation: [
    {      
      h: {ua: 674, ru: 674},
      link: "empowered_evocation",
      name: "spell_empowered_evocation",
      details: "spell_empowered_evocation_details",
      expanded: "spell_empowered_evocation_expanded",

      type: "ability",
      classes: ["wizard",],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "none",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "always",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_INT",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  // NOTE - Spells [0]

  // All spells / 0 ----------------------------------------------------------

  acid_splash: [
    {
      //0
      
      h: {ua: 832, ru: 832},
      link: "acid_splash",
      name: "spell_acid_splash",
      details: "spell_acid_splash_details",
      expanded: "spell_acid_splash_expanded",

      type: "evocation",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 60,
      aim_aoe: "point",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "acid_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  blade_ward: [
    {
      //0      
      h: {ua: 616, ru: 616},
      link: "blade_ward",
      name: "spell_blade_ward",
      details: "spell_blade_ward_details",
      expanded: "spell_blade_ward_expanded",

      type: "abjuration",
      classes: ["warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  chill_touch: [
    {
      //0
      
      h: {ua: 882, ru: 882},
      link: "chill_touch",
      name: "spell_chill_touch",
      details: "spell_chill_touch_details",
      expanded: "spell_chill_touch_expanded",

      type: "evocation",
      classes: ["sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: true,
      aim_range: 120,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "necrotic_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  dancing_lights: [
    {      
      h: {ua: 838, ru: 838},
      link: "dancing_lights",
      name: "spell_dancing_lights",
      details: "spell_dancing_lights_details",
      expanded: "spell_dancing_lights_expanded", // полное описание

      type: "evocation",
      classes: ["artificer", "bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_range: 120,
      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  druidcraft: [
    {
      //0      
      h: {ua: 838, ru: 838},
      link: "druidcraft",
      name: "spell_druidcraft",
      details: "spell_druidcraft_details",
      expanded: "spell_druidcraft_expanded",

      type: "transmutation",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,
      aim_range: 30,
      aim_aoe: "cube",
      aim_aoe_size: 5,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  eldritch_blast: [
    {
      //0
      
      h: {ua: 792, ru: 792},
      link: "eldritch_blast",
      name: "spell_eldritch_blast",
      details: "spell_eldritch_blast_details",
      expanded: "spell_eldritch_blast_expanded",

      type: "evocation",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,
      aim_range: 120,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "force_w",

      impact_size_foo: "Str_X_Level_5_11_17", //1lvl = 1×, 5lvl = 2×, 11lvl = 3×, 17lvl = 4×
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  fire_bolt: [
    {
      //0
      
      h: {ua: 792, ru: 792},
      link: "fire_bolt",
      name: "spell_fire_bolt",
      details: "spell_fire_bolt_details",
      expanded: "spell_fire_bolt_expanded",

      type: "evocation",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,
      aim_range: 120,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  friends: [
    {
      //0
      
      h: {ua: 646, ru: 676},
      link: "friends",
      name: "spell_friends",
      details: "spell_friends_details",
      expanded: "spell_friends_expanded",

      type: "enchantment",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,

      parts: ["focus", "somatic"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  guidance: [
    {
      //0      
      h: {ua: 704, ru: 704},
      link: "guidance",
      name: "spell_guidance",
      details: "spell_guidance_details",
      expanded: "spell_guidance_expanded",

      type: "divination",
      classes: ["artificer", "cleric", "druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",

      parts: ["touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "dice_throw",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  light: [
    {
      //0
      
      h: {ua: 744, ru: 744},
      link: "light",
      name: "spell_light",
      details: "spell_light_details",
      expanded: "spell_light_expanded",

      type: "evocation",
      classes: ["artificer", "bard", "cleric", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",

      parts: ["focus", "touch", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_range: null,
      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
  ],

  mage_hand: [
    {
      //0
      
      h: {ua: 704, ru: 704},
      link: "mage_hand",
      name: "spell_mage_hand",
      details: "spell_mage_hand_details",
      expanded: "spell_mage_hand_expanded",

      type: "conjuration",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 30,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  mending: [
    {
      //0      
      h: {ua: 616, ru: 616},
      link: "mending",
      name: "spell_mending",
      details: "spell_mending_details",
      expanded: "spell_mending_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "cleric", "druid", "sorcerer", "wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "near",

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  message: [
    {
      //0      
      h: {ua: 734, ru: 734},
      link: "message",
      name: "spell_message",
      details: "spell_message_details",
      expanded: "spell_message_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,
      aim_range: 120,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  poison_spray: [
    {
      //0
      
      h: {ua: 758, ru: 758},
      link: "poison_spray",
      name: "spell_poison_spray",
      details: "spell_poison_spray_details",
      expanded: "spell_poison_spray_expanded",

      type: "conjuration",
      classes: ["artificer", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 10,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "poison_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 12,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "0",
    },
  ],

  prestidigitation: [
    {
      //0      
      h: {ua: 916, ru: 916},
      link: "prestidigitation",
      name: "spell_prestidigitation",
      details: "spell_prestidigitation_details",
      expanded: "spell_prestidigitation_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["somatic", "verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  produce_flame: [
    {
      //0      
      h: {ua: 792, ru: 792},
      link: "produce_flame",
      name: "spell_produce_flame",
      details: "spell_produce_flame_details",
      expanded: "spell_produce_flame_expanded",

      type: "conjuration",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "up_to",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: true,
      aim_range: 30,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  resistance: [
    {
      //0      
      h: {ua: 704, ru: 704},
      link: "resistance",
      name: "spell_resistance",
      details: "spell_resistance_details",
      expanded: "spell_resistance_expanded",

      type: "abjuration",
      classes: ["artificer", "cleric", "druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "dice_throw",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  ray_of_frost: [
    {
      //0
      
      h: {ua: 792, ru: 792},
      link: "ray_of_frost",
      name: "spell_ray_of_frost",
      details: "spell_ray_of_frost_details",
      expanded: "spell_ray_of_frost_expanded",

      type: "evocation",
      classes: ["artificer", "druid", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,
      aim_range: 60,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "cold_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  sacred_flame: [
    {
      //0
      
      h: {ua: 788, ru: 788},
      link: "sacred_flame",
      name: "spell_sacred_flame",
      details: "spell_sacred_flame_details",
      expanded: "spell_sacred_flame_expanded",

      type: "evocation",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 60,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "0",
    },
  ],

  shillelagh: [
    {
      //0      
      h: {ua: 734, ru: 734},
      link: "shillelagh",
      name: "spell_shillelagh",
      details: "spell_shillelagh_details",
      expanded: "spell_shillelagh_expanded",

      type: "transmutation",
      classes: ["druid"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "material_shillelagh",
      aim_type: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "new_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  shocking_grasp: [
    {
      //0
      
      h: {ua: 808, ru: 808},
      link: "shocking_grasp",
      name: "spell_shocking_grasp",
      details: "spell_shocking_grasp_details",
      expanded: "spell_shocking_grasp_expanded",

      type: "evocation",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",

      parts: ["touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "electricity_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  minor_illusion: [
    {      
      h: {ua: 848, ru: 848},
      link: "minor_illusion",
      name: "spell_minor_illusion",
      details: "spell_minor_illusion_details",
      expanded: "spell_minor_illusion_expanded", // полное описание

      type: "illusion",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["focus", "somatic"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 30,
      aim_aoe: "cube",
      aim_aoe_size: 5,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      // рассчет урона

      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "investigation",
      impact_size_saved: null,
    },
  ],

  spare_the_dying: [
    {
      //0      
      h: {ua: 586, ru: 586},
      link: "spare_the_dying",
      name: "spell_spare_the_dying",
      details: "spell_spare_the_dying_details",
      expanded: "spell_spare_the_dying_expanded",

      type: "necromancy",
      classes: ["artificer", "cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",

      parts: ["touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  thaumaturgy: [
    {
      //0      
      h: {ua: 958, ru: 928},
      link: "thaumaturgy",
      name: "spell_thaumaturgy",
      details: "spell_thaumaturgy_details",
      expanded: "spell_thaumaturgy_expanded",

      type: "transmutation",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 30,
      aim_aoe: "sphere",
      aim_aoe_size: 5,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  true_strike: [
    {
      //0      
      h: {ua: 704, ru: 734},
      link: "true_strike",
      name: "spell_true_strike",
      details: "spell_true_strike_details",
      expanded: "spell_true_strike_expanded",

      type: "divination",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,
      aim_range: 30,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  vicious_mockery: [
    {
      //0
      
      h: {ua: 818, ru: 818},
      link: "vicious_mockery",
      name: "spell_vicious_mockery",
      details: "spell_vicious_mockery_details",
      expanded: "spell_vicious_mockery_expanded",

      type: "enchantment",
      classes: ["bard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,
      aim_range: 60,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "psychic_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: "0",
    },
  ],

  thorn_whip: [
    {
      //0      
      h: {ua: 822, ru: 822},
      link: "thorn_whip",
      name: "spell_thorn_whip",
      details: "spell_thorn_whip_details",
      expanded: "spell_thorn_whip_expanded",

      type: "transmutation",
      classes: ["artificer", "druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,
      aim_range: 30,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "piercing_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  // NOTE - Spells [1]

  // All spells / 1 -----------------------------------------------------------

  hellish_rebuke: [
    {
      //0
    },
    {
      //1      
      h: {ua: 876, ru: 876},
      link: "hellish_rebuke",
      name: "spell_hellish_rebuke",
      details: "spell_hellish_rebuke_details",
      expanded: "spell_hellish_rebuke_expanded",

      type: "evocation",
      classes: ["warlock"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,
      aim_range: 60,
      aim_aoe: "point",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "slashing_w",

      impact_size_foo: "Num_Plus_1", //spell{1} = num, spell{2} = num+1, spell{3} = num+2 ...
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
    {
      //2
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 3,
      // impact_size_dic: 10,
    },
    {
      //3
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 4,
      // impact_size_dic: 10,
    },
    {
      //4
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 5,
      // impact_size_dic: 10,
    },
    {
      //5
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 6,
      // impact_size_dic: 10,
    },
    {
      //6
      // name: "spell_hellish_rebuke",
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 7,
      // impact_size_dic: 10,
    },
    {
      //7
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 8,
      // impact_size_dic: 10,
    },
    {
      //8
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 9,
      // impact_size_dic: 10,
    },
    {
      //9
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 10,
      // impact_size_dic: 10,
    },
  ],

  silent_image: [
    {
      //0
    },
    {
      //1      
      h: {ua: 818, ru: 818},
      link: "silent_image",
      name: "spell_silent_image",
      details: "spell_silent_image_details",
      expanded: "spell_silent_image_expanded",

      type: "illusion",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: null,
      aim_range: 60,
      aim_aoe: "cube",
      aim_aoe_size: 15,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    },
  ],

  bless: [
    {
      //0
    },
    {
      //1      
      h: {ua: 748, ru: 748},
      link: "bless",
      name: "spell_bless",
      details: "spell_bless_details",
      expanded: "spell_bless_expanded",

      type: "enchantment",
      classes: ["cleric", "paladin"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_range: 30,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "dice_throw",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Str_X_Plus_1", //spell{1} = 3×, spell{2} = 4×, spell{3} = 5× ...
      impact_size_str: 3,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  divine_favor: [
    {
      //0
    },
    {
      //1      
      h: {ua: 674, ru: 674},
      link: "divine_favor",
      name: "spell_divine_favor",
      details: "spell_divine_favor_details",
      expanded: "spell_divine_favor_expanded",

      type: "evocation",
      classes: ["paladin"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_range: null,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  witch_bolt: [
    {
      //0
    },
    {
      //1      
      h: {ua: 822, ru: 822},
      link: "witch_bolt",
      name: "spell_witch_bolt",
      details: "spell_witch_bolt_details",
      expanded: "spell_witch_bolt_expanded",

      type: "evocation",
      classes: ["sorcerer", "warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "electricity_w",

      impact_size_foo: "Num_Plus_1", //spell{1} = num, spell{2} = num+1, spell{3} = num+2 ...
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 12,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  thunderwave: [
    {
      //0
    },
    {
      //1      
      h: {ua: 818, ru: 818},
      link: "thunderwave",
      name: "spell_thunderwave",
      details: "spell_thunderwave_details",
      expanded: "spell_thunderwave_expanded",

      type: "evocation",
      classes: ["bard", "druid", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "thunder_w",

      impact_size_foo: "Num_Plus_1", //spell{1} = num, spell{2} = num+1, spell{3} = num+2 ...
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  magic_missile: [
    {
      //0
    },
    {
      //1      
      h: {ua: 718, ru: 718},
      link: "magic_missile",
      name: "spell_magic_missile",
      details: "spell_magic_missile_details",
      expanded: "spell_magic_missile_expanded",

      type: "evocation",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "force_w",

      impact_size_foo: "Str_X_Plus_1", //spell{1} = 3× 1d4+1 , spell{2} = 4× 1d4+1, spell{3} = 5× 1d4+1
      impact_size_str: 3,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: 1,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  compelled_duel: [
    {
      //0
    },
    {
      //1      
      h: {ua: 774, ru: 804},
      link: "compelled_duel",
      name: "spell_compelled_duel",
      details: "spell_compelled_duel_details",
      expanded: "spell_compelled_duel_expanded",

      type: "enchantment",
      classes: ["paladin"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  heroism: [
    {
      //0
    },
    {
      //1      
      h: {ua: 704, ru: 704},
      link: "heroism",
      name: "spell_heroism",
      details: "spell_heroism_details",
      expanded: "spell_heroism_expanded",

      type: "enchantment",
      classes: ["bard", "paladin"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: "Str_X_Plus_1__Num_MOD",
      //Cущество в начале каждого своего хода получает временньіе хитьі, равньіе модификатору вашей базовой характеристики.
      //Если вьі накладьіваете єто заклинание, используя ячейку 2 уровня или вьіше, вьі можете сделать целью одно дополнительное существо за каждьій уровень ячейки вьіше первого.
      impact_size_str: 1,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  wrathful_smite: [
    {
      //0
    },
    {
      //1      
      h: {ua: 774, ru: 744},
      link: "wrathful_smite",
      name: "spell_wrathful_smite",
      details: "spell_wrathful_smite_details",
      expanded: "spell_wrathful_smite_expanded",

      type: "evocation",
      classes: ["paladin"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "psychic_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  hail_of_thorns: [
    {
      //0
    },
    {
      //1      
      h: {ua: 818, ru: 818},
      link: "hail_of_thorns",
      name: "spell_hail_of_thorns",
      details: "spell_hail_of_thorns_details",
      expanded: "spell_hail_of_thorns_expanded",

      type: "conjuration",
      classes: ["ranger"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 10,

      impact_type: "damage",
      impact_damage_type: "piercing_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
  ],

  thunderous_smite: [
    {
      //0
    },
    {
      //1      
      h: {ua: 804, ru: 804},
      link: "thunderous_smite",
      name: "spell_thunderous_smite",
      details: "spell_thunderous_smite_details",
      expanded: "spell_thunderous_smite_expanded",

      type: "evocation",
      classes: ["paladin"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "thunder_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    },
  ],

  dissonant_whispers: [
    {
      //0
    },
    {
      //1      
      h: {ua: 788, ru: 818},
      link: "dissonant_whispers",
      name: "spell_dissonant_whispers",
      details: "spell_dissonant_whispers_details",
      expanded: "spell_dissonant_whispers_expanded",

      type: "enchantment",
      classes: ["bard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "psychic_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  armor_of_agathys: [
    {
      //0
    },
    {
      //1      
      h: {ua: 734, ru: 764},
      link: "armor_of_agathys",
      name: "spell_armor_of_agathys",
      details: "spell_armor_of_agathys_details",
      expanded: "spell_armor_of_agathys_expanded",

      type: "abjuration",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: "Pls_Plus_5", 
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: 5,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  mage_armor: [
    {
      //0
    },
    {
      //1      
      h: {ua: 704, ru: 704},
      link: "mage_armor",
      name: "spell_mage_armor",
      details: "spell_mage_armor_details",
      expanded: "spell_mage_armor_expanded",

      type: "abjuration",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: 3,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  animal_friendship: [
    {
      //0
    },
    {
      //1      
      h: {ua: 758, ru: 758},
      link: "animal_friendship",
      name: "spell_animal_friendship",
      details: "spell_animal_friendship_details",
      expanded: "spell_animal_friendship_expanded",

      type: "enchantment",
      classes: ["bard", "druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  tashas_hideous_laughter: [
    {
      //0
    },
    {
      //1      
      h: {ua: 744, ru: 744},
      link: "tashas_hideous_laughter",
      name: "spell_tashas_hideous_laughter",
      details: "spell_tashas_hideous_laughter_details",
      expanded: "spell_tashas_hideous_laughter_expanded",

      type: "enchantment",
      classes: ["bard", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  protection_from_evil_and_good: [
    {
      //0
    },
    {
      //1      
      h: {ua: 676, ru: 676},
      link: "protection_from_evil_and_good",
      name: "spell_protection_from_evil_and_good",
      details: "spell_protection_from_evil_and_good_details",
      expanded: "spell_protection_from_evil_and_good_expanded",

      type: "abjuration",
      classes: ["druid", "cleric", "paladin", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  healing_word: [
    {
      //0
    },
    {
      //1      
      h: {ua: 718, ru: 718},
      link: "healing_word",
      name: "spell_healing_word",
      details: "spell_healing_word_details",
      expanded: "spell_healing_word_expanded",

      type: "evocation",
      classes: ["bard", "cleric", "druid"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1__Pls_MOD",
      //Example: 
        //base_stat = strenth
        //num = base_stat_mod = strength.mod = 3
        //spell{1} = 1d4+3 ⬜️⬜️⬜️ ⬜️🔳🔳🔳
        //spell{2} = 2d4+3 ⬜️⬜️⬜️ ⬜️⬜️🔳🔳🔳🔳🔳🔳
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  cure_wounds: [
    {
      //0
    },
    {
      //1      
      h: {ua: 674, ru: 704},
      link: "cure_wounds",
      name: "spell_cure_wounds",
      details: "spell_cure_wounds_details",
      expanded: "spell_cure_wounds_expanded",

      type: "evocation",
      classes: ["artificer", "bard", "cleric", "druid", "paladin", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1__Pls_MOD",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  ray_of_sickness: [
    {
      //0
    },
    {
      //1      
      h: {ua: 862, ru: 832},
      link: "ray_of_sickness",
      name: "spell_ray_of_sickness",
      details: "spell_ray_of_sickness_details",
      expanded: "spell_ray_of_sickness_expanded",

      type: "necromancy",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "poison_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  disguise_self: [
    {
      //0
    },
    {
      //1      
      h: {ua: 626, ru: 656},
      link: "disguise_self",
      name: "spell_disguise_self",
      details: "spell_disguise_self_details",
      expanded: "spell_disguise_self_expanded",

      type: "illusion",
      classes: ["artificer", "bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    },
  ],

  hunters_mark: [
    {
      //0
    },
    {
      //1      
      h: {ua: 778, ru: 778},
      link: "hunters_mark",
      name: "spell_hunters_mark",
      details: "spell_hunters_mark_details",
      expanded: "spell_hunters_mark_expanded",

      type: "divination",
      classes: ["ranger"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {
      spell_duration: 8,
    },
    {},
    {
      spell_duration: 24,
    },
  ],

  inflict_wounds: [
    {
      //0
    },
    {
      //1      
      h: {ua: 718, ru: 718},
      link: "inflict_wounds",
      name: "spell_inflict_wounds",
      details: "spell_inflict_wounds_details",
      expanded: "spell_inflict_wounds_expanded",

      type: "necromancy",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "necrotic_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  guiding_bolt: [
    {
      //0
    },
    {
      //1      
      h: {ua: 792, ru: 792},
      link: "guiding_bolt",
      name: "spell_guiding_bolt",
      details: "spell_guiding_bolt_details",
      expanded: "spell_guiding_bolt_expanded",

      type: "evocation",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 4,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  illusory_script: [
    {
      //0
    },
    {
      //1      
      h: {ua: 616, ru: 616},
      link: "illusory_script",
      name: "spell_illusory_script",
      details: "spell_illusory_script_details",
      expanded: "spell_illusory_script_expanded",

      type: "illusion",
      classes: ["bard", "warlock", "wizard"],

      cast_time: "ritual_plus10min",
      cast_duration: 1,
      cast_duration_units: "min",
      as_ritual: true,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["material_ink_10gold", "somatic"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "day",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  unseen_servant: [
    {
      //0
    },
    {
      //1      
      h: {ua: 794, ru: 824},
      link: "unseen_servant",
      name: "spell_unseen_servant",
      details: "spell_unseen_servant_details",
      expanded: "spell_unseen_servant_expanded",

      type: "conjuration",
      classes: ["bard", "warlock", "wizard"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  detect_poison_and_disease: [
    {
      //0
    },
    {
      //1      
      h: {ua: 704, ru: 704},
      link: "detect_poison_and_disease",
      name: "spell_detect_poison_and_disease",
      details: "spell_detect_poison_and_disease_details",
      expanded: "spell_detect_poison_and_disease_expanded",

      type: "divination",
      classes: ["cleric", "druid", "paladin", "ranger"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  detect_evil_and_good: [
    {
      //0
    },
    {
      //1      
      h: {ua: 734, ru: 734},
      link: "detect_evil_and_good",
      name: "spell_detect_evil_and_good",
      details: "spell_detect_evil_and_good_details",
      expanded: "spell_detect_evil_and_good_expanded",

      type: "divination",
      classes: ["cleric", "paladin"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  detect_magic: [
    {
      //0
    },
    {
      //1      
      h: {ua: 704, ru: 704},
      link: "detect_magic",
      name: "spell_detect_magic",
      details: "spell_detect_magic_details",
      expanded: "spell_detect_magic_expanded",

      type: "divination",
      classes: ["bard", "warlock", "wizard"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  burning_hands: [
    {
      //0
    },
    {
      //1      
      h: {ua: 788, ru: 788},
      link: "burning_hands",
      name: "spell_burning_hands",
      details: "spell_burning_hands_details",
      expanded: "spell_burning_hands_expanded",

      type: "evocation",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  faerie_fire: [
    {},
    {      
      h: {ua: 848, ru: 878},
      link: "faerie_fire",
      name: "spell_faerie_fire",
      details: "spell_faerie_fire_0_details",
      expanded: "spell_faerie_fire_0_expanded", // полное описание

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 60,
      aim_aoe: "cube",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
      // рассчет урона если спас пройден
    },
  ],

  identify: [
    {
      //0
    },
    {
      //1      
      h: {ua: 646, ru: 646},
      link: "identify",
      name: "spell_identify",
      details: "spell_identify_details",
      expanded: "spell_identify_expanded",

      type: "divination",
      classes: ["artificer", "bard", "wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["material_pearl_100gold", "focus", "touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  entangle: [
    {
      //0
    },
    {
      //1      
      h: {ua: 788, ru: 788},
      link: "entangle",
      name: "spell_entangle",
      details: "spell_entangle_details",
      expanded: "spell_entangle_expanded",

      type: "conjuration",
      classes: ["druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "square",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    },
  ],

  ensnaring_strike: [
    {
      //0
    },
    {
      //1      
      h: {ua: 804, ru: 804},
      link: "ensnaring_strike",
      name: "spell_ensnaring_strike",
      details: "spell_ensnaring_strike_details",
      expanded: "spell_ensnaring_strike_expanded",

      type: "conjuration",
      classes: ["ranger"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "piercing_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  charm_person: [
    {
      //0
    },
    {
      //1      
      h: {ua: 758, ru: 758},
      link: "charm_person",
      name: "spell_charm_person",
      details: "spell_charm_person_details",
      expanded: "spell_charm_person_expanded",

      type: "enchantment",
      classes: ["bard", "druid", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  purify_food_and_drink: [
    {
      //0
    },
    {
      //1      
      h: {ua: 748, ru: 748},
      link: "purify_food_and_drink",
      name: "spell_purify_food_and_drink",
      details: "spell_purify_food_and_drink_details",
      expanded: "spell_purify_food_and_drink_expanded",

      type: "transmutation",
      classes: ["artificer", "cleric", "druid", "paladin"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 10,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  feather_fall: [
    {
      //0
    },
    {
      //1      
      h: {ua: 704, ru: 704},
      link: "feather_fall",
      name: "spell_feather_fall",
      details: "spell_feather_fall_details",
      expanded: "spell_feather_fall_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "sorcerer", "wizard"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  searing_smite: [
    {
      //0
    },
    {
      //1      
      h: {ua: 774, ru: 774},
      link: "searing_smite",
      name: "spell_searing_smite",
      details: "spell_searing_smite_details",
      expanded: "spell_searing_smite_expanded",

      type: "evocation",
      classes: ["paladin", "ranger"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  find_familiar: [
    {
      //0
    },
    {
      //1      
      h: {ua: 1004, ru: 1034},
      link: "find_familiar",
      name: "spell_find_familiar",
      details: "spell_find_familiar_details",
      expanded: "spell_find_familiar_expanded",

      type: "conjuration",
      classes: ["wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["material_familiar_10gold", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  comprehend_languages: [
    {
      //0
    },
    {
      //1      
      h: {ua: 616, ru: 616},
      link: "comprehend_languages",
      name: "spell_comprehend_languages",
      details: "spell_comprehend_languages_details",
      expanded: "spell_comprehend_languages_expanded",

      type: "divination",
      classes: ["bard", "sorcerer", "wwarlock", "wizard"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  bane: [
    {
      //0
    },
    {
      //1      
      h: {ua: 788, ru: 788},
      link: "bane",
      name: "spell_bane",
      details: "spell_bane_details",
      expanded: "spell_bane_expanded",

      type: "enchantment",
      classes: ["bard", "cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  expeditious_retreat: [
    {
      //0
    },
    {
      //1      
      h: {ua: 616, ru: 616},
      link: "expeditious_retreat",
      name: "spell_expeditious_retreat",
      details: "spell_expeditious_retreat_details",
      expanded: "spell_expeditious_retreat_expanded",

      type: "transmutation",
      classes: ["artificer", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  command: [
    {
      //0
    },
    {
      //1      
      h: {ua: 818, ru: 848},
      link: "command",
      name: "spell_command",
      details: "spell_command_details",
      expanded: "spell_command_expanded",

      type: "enchantment",
      classes: ["bard", "cleric", "paladin"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  jump: [
    {
      //0
    },
    {
      //1      
      h: {ua: 586, ru: 586},
      link: "jump",
      name: "spell_jump",
      details: "spell_jump_details",
      expanded: "spell_jump_expanded",

      type: "transmutation",
      classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  false_life: [
    {
      //0
    },
    {
      //1      
      h: {ua: 674, ru: 704},
      link: "false_life",
      name: "spell_false_life",
      details: "spell_false_life_details",
      expanded: "spell_false_life_expanded",

      type: "necromancy",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: "Pls_Plus_5", 
      //return to: impact_size_pls
        //Exapmle: pls = 4
        //spell{1}: 1d4+4 ⬜️⬜️⬜️⬜️ ⬜️🔳🔳🔳
        //spell{2}: 1d4+9 ⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️ ⬜️🔳🔳🔳
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: 4,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  speak_with_animals: [
    {},
    {      
      h: {ua: 646, ru: 646},
      link: "speak_with_animals",
      name: "spell_speak_with_animals",
      details: "spell_speak_with_animals_details",
      expanded: "spell_speak_with_animals_expanded",

      type: "divination",
      classes: ["bard", "druid", "ranger"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "self",
      aim_type: null,
      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  arms_of_hadar: [
    {
      //0
    },
    {
      //1      
      h: {ua: 818, ru: 818},
      link: "arms_of_hadar",
      name: "spell_arms_of_hadar",
      details: "spell_arms_of_hadar_details",
      expanded: "spell_arms_of_hadar_expanded",

      type: "conjuration",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: "damage",
      impact_damage_type: "necrotic_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  color_spray: [
    {
      //0
    },
    {
      //1      
      h: {ua: 718, ru: 748},
      link: "color_spray",
      name: "spell_color_spray",
      details: "spell_color_spray_details",
      expanded: "spell_color_spray_expanded",

      type: "illusion",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "hp_bonus",
      impact_damage_type: "sum_w",

      impact_size_foo: "Num_Plus_2",
      impact_size_str: null,
      impact_size_num: 6,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  hex: [
    {
      //0
    },
    {
      //1      
      h: {ua: 808, ru: 748},
      link: "hex",
      name: "spell_hex",
      details: "spell_hex_details",
      expanded: "spell_hex_expanded",

      type: "enchantment",
      classes: ["warlock"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "necrotic_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {
      spell_duration: 8,
    },
    {},
    {
      spell_duration: 24,
    },
  ],

  alarm: [
    {
      //0
    },
    {
      //1      
      h: {ua: 778, ru: 778},
      link: "alarm",
      name: "spell_alarm",
      details: "spell_alarm_details",
      expanded: "spell_alarm_expanded",

      type: "abjuration",
      classes: ["artificer", "wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  grease: [
    {
      //0
    },
    {
      //1      
      h: {ua: 788, ru: 788},
      link: "grease",
      name: "spell_grease",
      details: "spell_grease_details",
      expanded: "spell_grease_expanded",

      type: "conjuration",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "square",
      aim_aoe_size: 10,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
  ],

  longstrider: [
    {
      //0
    },
    {
      //1      
      h: {ua: 674, ru: 674},
      link: "longstrider",
      name: "spell_longstrider",
      details: "spell_longstrider_details",
      expanded: "spell_longstrider_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "druid", "ranger", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  create_or_destroy_water: [
    {
      //0
    },
    {
      //1      
      h: {ua: 762, ru: 762},
      link: "create_or_destroy_water",
      name: "spell_create_or_destroy_water",
      details: "spell_create_or_destroy_water_details",
      expanded: "spell_create_or_destroy_water_expanded",

      type: "transmutation",
      classes: ["cleric", "druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 30,

      impact_type: "liters_number",
      impact_damage_type: null,

      impact_size_foo: "Str_Plus_40",
      impact_size_str: 40,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {
      aim_aoe_size: 35,
    },
    {
      aim_aoe_size: 40,
    },
    {
      aim_aoe_size: 45,
    },
    {
      aim_aoe_size: 50,
    },
    {
      aim_aoe_size: 55,
    },
    {
      aim_aoe_size: 60,
    },
    {
      aim_aoe_size: 65,
    },
    {
      aim_aoe_size: 70,
    },
  ],

  tensers_floating_disk: [
    {
      //0
    },
    {
      //1      
      h: {ua: 778, ru: 778},
      link: "tensers_floating_disk",
      name: "spell_tensers_floating_disk",
      details: "spell_tensers_floating_disk_details",
      expanded: "spell_tensers_floating_disk_expanded",

      type: "conjuration",
      classes: ["wizard"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "cilinder",
      aim_aoe_size: 3,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  fog_cloud: [
    {
      //0
    },
    {
      //1      
      h: {ua: 748, ru: 748},
      link: "fog_cloud",
      name: "spell_fog_cloud",
      details: "spell_fog_cloud_details",
      expanded: "spell_fog_cloud_expanded",

      type: "conjuration",
      classes: ["druid", "ranger", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 40,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {
      aim_aoe_size: 80,
    },
    {
      aim_aoe_size: 120,
    },
    {
      aim_aoe_size: 160,
    },
    {
      aim_aoe_size: 200,
    },
    {
      aim_aoe_size: 240,
    },
    {
      aim_aoe_size: 280,
    },
    {
      aim_aoe_size: 320,
    },
    {
      aim_aoe_size: 360,
    },
  ],

  sanctuary: [
    {
      //0
    },
    {
      //1      
      h: {ua: 744, ru: 744},
      link: "sanctuary",
      name: "spell_sanctuary",
      details: "spell_sanctuary_details",
      expanded: "spell_sanctuary_expanded",

      type: "abjuration",
      classes: ["artificer", "cleric"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  sleep: [
    {
      //0
    },
    {
      //1      
      h: {ua: 762, ru: 762},
      link: "sleep",
      name: "spell_sleep",
      details: "spell_sleep_details",
      expanded: "spell_sleep_expanded",

      type: "enchantment",
      classes: ["bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 40,

      impact_type: "hp_bonus",
      impact_damage_type: "sum_w",

      impact_size_foo: "Num_Plus_2",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  chromatic_orb: [
    {
      //0
    },
    {
      //1      
      h: {ua: 762, ru: 762},
      link: "chromatic_orb",
      name: "spell_chromatic_orb",
      details: "spell_chromatic_orb_details",
      expanded: "spell_chromatic_orb_expanded",

      type: "evocation",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["material_diamond_50gold", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  goodberry: [
    {
      //0
    },
    {
      //1      
      h: {ua: 704, ru: 704},
      link: "goodberry",
      name: "spell_goodberry",
      details: "spell_goodberry_details",
      expanded: "spell_goodberry_expanded",

      type: "transmutation",
      classes: ["druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: 10,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  shield: [
    {
      //0
    },
    {
      //1      
      h: {ua: 674, ru: 704},
      link: "shield",
      name: "spell_shield",
      details: "spell_shield_details",
      expanded: "spell_shield_expanded",

      type: "abjuration",
      classes: ["sorcerer", "wizard"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: 5,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  shield_of_faith: [
    {
      //0
    },
    {
      //1      
      h: {ua: 718, ru: 748},
      link: "shield_of_faith",
      name: "spell_shield_of_faith",
      details: "spell_shield_of_faith_details",
      expanded: "spell_shield_of_faith_expanded",

      type: "abjuration",
      classes: ["cleric", "paladin"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: 2,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],
  
  // NOTE - Spells [2]

  // All spells / 2 -----------------------------------------------------------

  pass_without_trace: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 748, ru: 748},
      link: "pass_without_trace",
      name: "spell_pass_without_trace",
      details: "spell_pass_without_trace_details",
      expanded: "spell_pass_without_trace_expanded",

      type: "abjuration",
      classes: ["druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: "stealth",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: 10,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  spiritual_weapon: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 748, ru: 778},
      link: "spiritual_weapon",
      name: "spell_spiritual_weapon",
      details: "spell_spiritual_weapon_details",
      expanded: "spell_spiritual_weapon_expanded",

      type: "evocation",
      classes: ["cleric"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "force_w",

      impact_size_foo: "Num_Plus_1__Pls_MOD",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  continual_flame: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 646, ru: 646},
      link: "continual_flame",
      name: "spell_continual_flame",
      details: "spell_continual_flame_details",
      expanded: "spell_continual_flame_expanded",

      type: "evocation",
      classes: ["artificer", "cleric", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["material_flave_ruby_50gold", "touch", "somatic", "verbal"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  see_invisibility: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 616, ru: 616},
      link: "see_invisibility",
      name: "spell_see_invisibility",
      details: "spell_see_invisibility_details",
      expanded: "spell_see_invisibility_expanded",

      type: "divination",
      classes: ["artificer", "bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  suggestion: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 744, ru: 774},
      link: "suggestion",
      name: "spell_suggestion",
      details: "spell_suggestion_details",
      expanded: "spell_suggestion_expanded",

      type: "enchantment",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "verbal"],

      spell_time: "concentration",
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  magic_mouth: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 838, ru: 838},
      link: "magic_mouth",
      name: "spell_magic_mouth",
      details: "spell_magic_mouth_details",
      expanded: "spell_magic_mouth_expanded",

      type: "illusion",
      classes: ["bard", "wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["material_magic_mouth_50gold", "somatic", "verbal"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  arcane_lock: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 764, ru: 794},
      link: "arcane_lock",
      name: "spell_arcane_lock",
      details: "spell_arcane_lock_details",
      expanded: "spell_arcane_lock_expanded",

      type: "abjuration",
      classes: ["artificer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["material_golden_dust_25gold", "touch", "somatic", "verbal"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 5,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  phantasmal_force: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 892, ru: 862},
      link: "phantasmal_force",
      name: "spell_phantasmal_force",
      details: "spell_phantasmal_force_details",
      expanded: "spell_phantasmal_force_expanded",

      type: "illusion",
      classes: ["bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 10,

      impact_type: "damage",
      impact_damage_type: "psychic_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    },
  ],

  augury: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 676, ru: 676},
      link: "augury",
      name: "spell_augury",
      details: "spell_augury_details",
      expanded: "spell_augury_expanded",

      type: "divination",
      classes: ["cleric"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["material_augury_25gold", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  blindness_deafness: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 788, ru: 788},
      link: "blindness_deafness",
      name: "spell_blindness_deafness",
      details: "spell_blindness_deafness_details",
      expanded: "spell_blindness_deafness_expanded",

      type: "necromancy",
      classes: ["bard", "cleric", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  flame_blade: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 778, ru: 718},
      link: "flame_blade",
      name: "spell_flame_blade",
      details: "spell_flame_blade_details",
      expanded: "spell_flame_blade_expanded",

      type: "evocation",
      classes: ["druid"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Plus_05",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  shatter: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 802, ru: 802},
      link: "shatter",
      name: "spell_shatter",
      details: "spell_shatter_details",
      expanded: "spell_shatter_expanded",

      type: "evocation",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: "damage",
      impact_damage_type: "thunder_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  barkskin: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 674, ru: 674},
      link: "barkskin",
      name: "spell_barkskin",
      details: "spell_barkskin_details",
      expanded: "spell_barkskin_expanded",

      type: "transmutation",
      classes: ["druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 16,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  beast_sense: [
    {},
    {},
    {      
      h: {ua: 616, ru: 616},
      link: "beast_sense",
      name: "spell_beast_sense",
      details: "spell_beast_sense_details",
      expanded: "spell_beast_sense_expanded",

      type: "divination",
      classes: [],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "creature",
      aim_type: "near",
      parts: ["touch"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  cordon_of_arrows: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 832, ru: 832},
      link: "cordon_of_arrows",
      name: "spell_cordon_of_arrows",
      details: "spell_cordon_of_arrows_details",
      expanded: "spell_cordon_of_arrows_expanded",

      type: "transmutation",
      classes: ["ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: 5,

      parts: ["bullets", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: "damage",
      impact_damage_type: "piercing_w",

      impact_size_foo: "Str_X_Plus_2",
      //Если вьі накладьіваете єто заклинание, используя ячейку 3 уровня или вьіше, количество боеприпасов увеличивается на два за каждьій уровень ячейки вьіше второго.
      impact_size_str: 3,
      impact_size_num: 1,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "0",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  protection_from_poison: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 616, ru: 616},
      link: "protection_from_poison",
      name: "spell_protection_from_poison",
      details: "spell_protection_from_poison_details",
      expanded: "spell_protection_from_poison_expanded",

      type: "abjuration",
      classes: ["artificer", "druid", "cleric", "paladin", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  branding_smite: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 734, ru: 734},
      link: "branding_smite",
      name: "spell_branding_smite",
      details: "spell_branding_smite_details",
      expanded: "spell_branding_smite_expanded",

      type: "evocation",
      classes: ["paladin"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  crown_of_madness: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 804, ru: 804},
      link: "crown_of_madness",
      name: "spell_crown_of_madness",
      details: "spell_crown_of_madness_details",
      expanded: "spell_crown_of_madness_expanded",

      type: "enchantment",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  levitate: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 804, ru: 774},
      link: "levitate",
      name: "spell_levitate",
      details: "spell_levitate_details",
      expanded: "spell_levitate_expanded",

      type: "transmutation",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
  ],

  moonbeam: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 862, ru: 862},
      link: "moonbeam",
      name: "spell_moonbeam",
      details: "spell_moonbeam_details",
      expanded: "spell_moonbeam_expanded",

      type: "evocation",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cilinder",
      aim_aoe_size: 10,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  ray_of_enfeeblement: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 818, ru: 818},
      link: "ray_of_enfeeblement",
      name: "spell_ray_of_enfeeblement",
      details: "spell_ray_of_enfeeblement_details",
      expanded: "spell_ray_of_enfeeblement_expanded",

      type: "necromancy",
      classes: ["warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
  ],

  magic_weapon: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 704, ru: 704},
      link: "magic_weapon",
      name: "spell_magic_weapon",
      details: "spell_magic_weapon_details",
      expanded: "spell_magic_weapon_expanded",

      type: "transmutation",
      classes: ["artificer", "paladin", "ranger", "sorcerer", "wizard"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_Plus_05",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
  ],

  lesser_restoration: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 616, ru: 586},
      link: "lesser_restoration",
      name: "spell_lesser_restoration",
      details: "spell_lesser_restoration_details",
      expanded: "spell_lesser_restoration_expanded",

      type: "abjuration",
      classes: ["artificer", "bard", "cleric", "druid", "paladin", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  melfs_acid_arrow: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 822, ru: 822},
      link: "melfs_acid_arrow",
      name: "spell_melfs_acid_arrow",
      details: "spell_melfs_acid_arrow_details",
      expanded: "spell_melfs_acid_arrow_expanded",

      type: "evocation",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "acid_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 4,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  prayer_of_healing: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 718, ru: 718},
      link: "prayer_of_healing",
      name: "spell_prayer_of_healing",
      details: "spell_prayer_of_healing_details",
      expanded: "spell_prayer_of_healing_expanded",

      type: "evocation",
      classes: ["cleric"],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,
      /*
        bonus_w
        poison_w:"🧪 Ядом",
        fire_w:"🔥 Огнем",
        cold_w:"❄️ Холодом",
        electricity_w:"⚡️ єлектричеством",
        acid_w:"⚗️ Кислотой",
        thunder_w: "🔊 Звуком",
        radiant_w: "✨ Светом",
        force_w: "🌈 Cиловьім полем",

        piercing_w: "🗡 колющий",
        slashing_w: "🪓 рубящий",
        bludgeoning_w: "🔨 дробящий",

        necrotic_w: "💀 Некротический",
        psychic_w: "🧠 Психический",
      */

      impact_size_foo: "Num_Plus_1__Pls_MOD",
      // Каждое из шести существ на ваш вьібор, видимьіх в пределах дистанции, восстанавливает количество хитов, равное 2d8 + модификатор вашей базовой характеристики.
      // На более вьісоких уровнях: Если вьі накладьіваете єто заклинание, используя ячейку 3 уровня или вьіше, лечение увеличивается на 1d8 за каждьій уровень ячейки вьіше второго.
      impact_size_str: 6,
      impact_size_num: 2,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  invisibility: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 734, ru: 734},
      link: "invisibility",
      name: "spell_invisibility",
      details: "spell_invisibility_details",
      expanded: "spell_invisibility_expanded",

      type: "illusion",
      classes: ["artificer", "bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  gentle_repose: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 586, ru: 586},
      link: "gentle_repose",
      name: "spell_gentle_repose",
      details: "spell_gentle_repose_details",
      expanded: "spell_gentle_repose_expanded",

      type: "necromancy",
      classes: ["cleric", "wizard"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "day",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  nystuls_magic_aura: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 616, ru: 616},
      link: "nystuls_magic_aura",
      name: "spell_nystuls_magic_aura",
      details: "spell_nystuls_magic_aura_details",
      expanded: "spell_nystuls_magic_aura_expanded",

      type: "illusion",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  cloud_of_daggers: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 822, ru: 822},
      link: "cloud_of_daggers",
      name: "spell_cloud_of_daggers",
      details: "spell_cloud_of_daggers_details",
      expanded: "spell_cloud_of_daggers_expanded",

      type: "conjuration",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "slashing_w",

      impact_size_foo: "Num_Plus_2",
      impact_size_str: null,
      impact_size_num: 4,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  zone_of_truth: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 788, ru: 788},
      link: "zone_of_truth",
      name: "spell_zone_of_truth",
      details: "spell_zone_of_truth_details",
      expanded: "spell_zone_of_truth_expanded",

      type: "enchantment",
      classes: ["bard", "cleric", "paladin"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 30,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",
      impact_size_saved: null,
    },
  ],

  detect_thoughts: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 804, ru: 804},
      link: "detect_thoughts",
      name: "spell_detect_thoughts",
      details: "spell_detect_thoughts_details",
      expanded: "spell_detect_thoughts_expanded",

      type: "divination",
      classes: ["bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  knock: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 748, ru: 748},
      link: "knock",
      name: "spell_knock",
      details: "spell_knock_details",
      expanded: "spell_knock_expanded",

      type: "transmutation",
      classes: ["bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 300,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  mirror_image: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 586, ru: 586},
      link: "mirror_image",
      name: "spell_mirror_image",
      details: "spell_mirror_image_details",
      expanded: "spell_mirror_image_expanded",

      type: "illusion",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  warding_bond: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 764, ru: 734},
      link: "warding_bond",
      name: "spell_warding_bond",
      details: "spell_warding_bond_details",
      expanded: "spell_warding_bond_expanded",

      type: "abjuration",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["material_warding_bond_50gold", "touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: 1,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  scorching_ray: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 762, ru: 762},
      link: "scorching_ray",
      name: "spell_scorching_ray",
      details: "spell_scorching_ray_details",
      expanded: "spell_scorching_ray_expanded",

      type: "evocation",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Str_X_Plus_1",
      //Вьі создаете три огненньіх луча и направляете их на целей, находящихся в пределах дистанции.
      //Вьі создаете один дополнительньій луч за каждьій уровень ячейки вьіше второго.
      impact_size_str: 3,
      impact_size_num: 2,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  spider_climb: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 616, ru: 616},
      link: "spider_climb",
      name: "spell_spider_climb",
      details: "spell_spider_climb_details",
      expanded: "spell_spider_climb_expanded",

      type: "transmutation",
      classes: ["artificer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  web: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 818, ru: 818},
      link: "web",
      name: "spell_web",
      details: "spell_web_details",
      expanded: "spell_web_expanded",

      type: "conjuration",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
  ],

  aid: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 748, ru: 748},
      link: "aid",
      name: "spell_aid",
      details: "spell_aid_details",
      expanded: "spell_aid_expanded",

      type: "abjuration",
      classes: ["artificer", "bard", "cleric", "paladin", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_5",
      impact_size_str: 3,
      impact_size_num: 5,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  locate_animals_or_plants: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 704, ru: 704},
      link: "locate_animals_or_plants",
      name: "spell_locate_animals_or_plants",
      details: "spell_locate_animals_or_plants_details",
      expanded: "spell_locate_animals_or_plants_expanded",

      type: "divination",
      classes: ["bard", "druid", "ranger"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "self",
      aim_type: null,
      aim_range: 5 * 5280,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  find_traps: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 704, ru: 704},
      link: "find_traps",
      name: "spell_find_traps",
      details: "spell_find_traps_details",
      expanded: "spell_find_traps_expanded",

      type: "divination",
      classes: ["cleric", "druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  locate_object: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 704, ru: 704},
      link: "locate_object",
      name: "spell_locate_object",
      details: "spell_locate_object_details",
      expanded: "spell_locate_object_expanded",

      type: "divination",
      classes: ["bard", "cleric", "druid", "paladin", "ranger", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 1000,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  find_steed: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 914, ru: 914},
      link: "find_steed",
      name: "spell_find_steed",
      details: "spell_find_steed_details",
      expanded: "spell_find_steed_expanded",

      type: "conjuration",
      classes: ["paladin"],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  gust_of_wind: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 848, ru: 818},
      link: "gust_of_wind",
      name: "spell_gust_of_wind",
      details: "spell_gust_of_wind_details",
      expanded: "spell_gust_of_wind_expanded",

      type: "evocation",
      classes: ["druid", "ranger", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "line",
      aim_aoe_size: 60,

      impact_type: "push",
      impact_damage_type: null,

      impact_size_foo: "Feet",
      impact_size_str: null,
      impact_size_num: 15,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    },
  ],

  animal_messenger: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 824, ru: 824},
      link: "animal_messenger",
      name: "spell_animal_messenger",
      details: "spell_animal_messenger_details",
      expanded: "spell_animal_messenger_expanded",

      type: "enchantment",
      classes: ["bard", "druid", "ranger"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "day",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {
      spell_duration: 3,
    },
    {
      spell_duration: 5,
    },
    {
      spell_duration: 7,
    },
    {
      spell_duration: 9,
    },
    {
      spell_duration: 11,
    },
    {
      spell_duration: 13,
    },
    {
      spell_duration: 15,
    },
  ],

  flaming_sphere: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 832, ru: 832},
      link: "flaming_sphere",
      name: "spell_flaming_sphere",
      details: "spell_flaming_sphere_details",
      expanded: "spell_flaming_sphere_expanded",

      type: "conjuration",
      classes: ["druid", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  blur: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 586, ru: 586},
      link: "blur",
      name: "spell_blur",
      details: "spell_blur_details",
      expanded: "spell_blur_expanded",

      type: "illusion",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  heat_metal: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 818, ru: 848},
      link: "heat_metal",
      name: "spell_heat_metal",
      details: "spell_heat_metal_details",
      expanded: "spell_heat_metal_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  enthrall: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 774, ru: 774},
      link: "enthrall",
      name: "spell_enthrall",
      details: "spell_enthrall_details",
      expanded: "spell_enthrall_expanded",

      type: "enchantment",
      classes: ["bard", "warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  alter_self: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 796, ru: 766},
      link: "alter_self",
      name: "spell_alter_self",
      details: "spell_alter_self_details",
      expanded: "spell_alter_self_expanded",

      type: "transmutation",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  darkvision: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 616, ru: 616},
      link: "darkvision",
      name: "spell_darkvision",
      details: "spell_darkvision_details",
      expanded: "spell_darkvision_expanded",

      type: "transmutation",
      classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  silence: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 718, ru: 718},
      link: "silence",
      name: "spell_silence",
      details: "spell_silence_details",
      expanded: "spell_silence_expanded",

      type: "illusion",
      classes: ["bard", "cleric", "ranger"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",
      as_ritual: true,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 40,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  rope_trick: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 676, ru: 706},
      link: "rope_trick",
      name: "spell_rope_trick",
      details: "spell_rope_trick_details",
      expanded: "spell_rope_trick_expanded",

      type: "transmutation",
      classes: ["artificer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  misty_step: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 674, ru: 704},
      link: "misty_step",
      name: "spell_misty_step",
      details: "spell_misty_step_details",
      expanded: "spell_misty_step_expanded",

      type: "conjuration",
      classes: ["sorcerer", "warlock", "wizard"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  darkness: [
    {},
    {},
    {      
      h: {ua: 838, ru: 838},
      link: "darkness",
      name: "spell_darkness",
      details: "spell_darkness_details",
      expanded: "spell_darkness_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 60,
      aim_aoe: "sphere",
      aim_aoe_size: 30,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  enlarge: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 938, ru: 938},
      link: "enlarge",
      name: "spell_enlarge",
      details: "spell_enlarge_details",
      expanded: "spell_enlarge_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "druid", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
  ],

  hold_person: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 788, ru: 758},
      link: "hold_person",
      name: "spell_hold_person",
      details: "spell_hold_person_details",
      expanded: "spell_hold_person_expanded",

      type: "enchantment",
      classes: ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_disttance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  enhance_ability: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 854, ru: 794},
      link: "enhance_ability",
      name: "spell_enhance_ability",
      details: "spell_enhance_ability_details",
      expanded: "spell_enhance_ability_expanded",

      type: "transmutation",
      classes: [
        "artificer",
        "bard",
        "cleric",
        "druid",
        "ranger",
        "sorcerer",
        "wizard",
      ],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  calm_emotions: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 788, ru: 758},
      link: "calm_emotions",
      name: "spell_calm_emotions",
      details: "spell_calm_emotions_details",
      expanded: "spell_calm_emotions_expanded",

      type: "enchantment",
      classes: ["bard", "cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",
      impact_size_saved: null,
    },
  ],

  spike_growth: [
    {
      //0
    },
    {
      //1
    },
    {
      //2      
      h: {ua: 852, ru: 852},
      link: "spike_growth",
      name: "spell_spike_growth",
      details: "spell_spike_growth_details",
      expanded: "spell_spike_growth_expanded",

      type: "transmutation",
      classes: ["druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 150,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cilinder",
      aim_aoe_size: 40,

      impact_type: "damage",
      impact_damage_type: "piercing_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  // NOTE - Spells [3]

  aura_of_vitality: [
    {},
    {},
    {},
    {      
      h: {ua: 748, ru: 778},
      link: "aura_of_vitality",
      name: "spell_aura_of_vitality",
      details: "spell_aura_of_vitality_details",
      expanded: "spell_aura_of_vitality_expanded",

      type: "evocation",
      classes: ["druid","cleric","paladin",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  animate_dead: [
    {},
    {},
    {},
    {      
      h: {ua: 778, ru: 748},
      link: "animate_dead",
      name: "spell_animate_dead",
      details: "spell_animate_dead_details",
      expanded: "spell_animate_dead_expanded",

      type: "necromancy",
      classes: ["wizard","cleric",],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["focus","somatic","verbal"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_2",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  beacon_of_hope: [
    {},
    {},
    {},
    {      
      h: {ua: 794, ru: 764},
      link: "beacon_of_hope",
      name: "spell_beacon_of_hope",
      details: "spell_beacon_of_hope_details",
      expanded: "spell_beacon_of_hope_expanded",

      type: "abjuration",
      classes: ["cleric",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  bestow_curse: [
    {},
    {},
    {},
    {      
      h: {ua: 836, ru: 866},
      link: "bestow_curse",
      name: "spell_bestow_curse",
      details: "spell_bestow_curse_details",
      expanded: "spell_bestow_curse_expanded",

      type: "transmutation",
      classes: ["wizard","bard","cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch","somatic","verbal"],

      spell_time: null,
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Dur_10_8_8_24_Nul__Sti_Con_Nul_Nul_Til__Sdu_Min_Hour_Hour_Nul",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  blink: [
    {},
    {},
    {},
    {      
      h: {ua: 764, ru: 794},
      link: "blink",
      name: "spell_blink",
      details: "spell_blink_details",
      expanded: "spell_blink_expanded",

      type: "transmutation",
      classes: ["wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 10,

      parts: ["somatic","verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  blinding_smite: [
    {},
    {},
    {},
    {      
      h: {ua: 774, ru: 774},
      link: "blinding_smite",
      name: "spell_blinding_smite",
      details: "spell_blinding_smite_details",
      expanded: "spell_blinding_smite_expanded",

      type: "evocation",
      classes: ["paladin",],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
  ],

  call_lightning: [
    {},
    {},
    {},
    {      
      h: {ua: 892, ru: 892},
      link: "call_lightning",
      name: "spell_call_lightning",
      details: "spell_call_lightning_details",
      expanded: "spell_call_lightning_expanded",

      type: "conjuration",
      classes: ["druid",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cilinder",
      aim_aoe_size: 120,

      impact_type: "damage",
      impact_damage_type: "electricity_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: 100,
      impact_size_num: 3,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  clairvoyance: [
    {},
    {},
    {},
    {      
      h: {ua: 704, ru: 704},
      link: "clairvoyance",
      name: "spell_clairvoyance",
      details: "spell_clairvoyance_details",
      expanded: "spell_clairvoyance_expanded",

      type: "divination",
      classes: ["bard","wizard","cleric","sorcerer",],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 5280,

      parts: ["material_focus_100gold", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  conjure_animals: [
    {},
    {},
    {},
    {      
      h: {ua: 748, ru: 748},
      link: "conjure_animals",
      name: "spell_conjure_animals",
      details: "spell_conjure_animals_details",
      expanded: "spell_conjure_animals_expanded",

      type: "conjuration",
      classes: ["druid","ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "dangerness",
      impact_damage_type: "sum_w",

      impact_size_foo: "Num_Plus_05_x2",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  conjure_barrage: [
    {},
    {},
    {},
    {      
      h: {ua: 788, ru: 788},
      link: "conjure_barrage",
      name: "spell_conjure_barrage",
      details: "spell_conjure_barrage_details",
      expanded: "spell_conjure_barrage_expanded",

      type: "conjuration",
      classes: ["ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cone",
      aim_aoe_size: 60,

      impact_type: "damage",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  counterspell: [
    {},
    {},
    {},
    {      
      h: {ua: 778, ru: 778},
      link: "counterspell",
      name: "spell_counterspell",
      details: "spell_counterspell_details",
      expanded: "spell_counterspell_expanded",

      type: "abjuration",
      classes: ["wizard","warlock","sorcerer"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "level",
      impact_damage_type: "spell",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  create_food_and_water: [
    {},
    {},
    {},
    {      
      h: {ua: 778, ru: 778},
      link: "create_food_and_water",
      name: "spell_create_food_and_water",
      details: "spell_create_food_and_water_details",
      expanded: "spell_create_food_and_water_expanded",

      type: "conjuration",
      classes: ["cleric","paladin"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["somatic","verbal"],

      spell_time: "up_to",
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 15,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  crusaders_mantle: [
    {},
    {},
    {},
    {      
      h: {ua: 748, ru: 748},
      link: "crusaders_mantle",
      name: "spell_crusaders_mantle",
      details: "spell_crusaders_mantle_details",
      expanded: "spell_crusaders_mantle_expanded",

      type: "evocation",
      classes: ["paladin",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  daylight: [
    {},
    {},
    {},
    {      
      h: {ua: 748, ru: 748},
      link: "daylight",
      name: "spell_daylight",
      details: "spell_daylight_details",
      expanded: "spell_daylight_expanded",

      type: "evocation",
      classes: ["druid","cleric","paladin","sorcerer","ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic","verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 120,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  dispel_magic: [
    {},
    {},
    {},
    {      
      h: {ua: 778, ru: 778},
      link: "dispel_magic",
      name: "spell_dispel_magic",
      details: "spell_dispel_magic_details",
      expanded: "spell_dispel_magic_expanded",

      type: "abjuration",
      classes: ["cleric","druid","paladin","bard","wizard","warlock","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic","verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "spell_level",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  elemental_weapon: [
    {},
    {},
    {},
    {      
      h: {ua: 764, ru: 764},
      link: "elemental_weapon",
      name: "spell_elemental_weapon",
      details: "spell_elemental_weapon_details",
      expanded: "spell_elemental_weapon_expanded",

      type: "transmutation",
      classes: ["druid","paladin","ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_Plus_05__Det_5_7_Mana",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
  ],

  fear: [
    {},
    {},
    {},
    {      
      h: {ua: 704, ru: 734},
      link: "fear",
      name: "spell_fear",
      details: "spell_fear_details",
      expanded: "spell_fear_expanded",

      type: "illusion",
      classes: ["bard","wizard","warlock","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: "cone",
      aim_aoe_size: 30,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  feign_death: [
    {},
    {},
    {},
    {      
      h: {ua: 706, ru: 706},
      link: "feign_death",
      name: "spell_feign_death",
      details: "spell_feign_death_details",
      expanded: "spell_feign_death_expanded",

      type: "necromancy",
      classes: ["wizard","bard","druid","cleric",],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus","touch","somatic","verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  fireball: [
    {},
    {},
    {},
    {      
      h: {ua: 832, ru: 832},
      link: "fireball",
      name: "spell_fireball",
      details: "spell_fireball_details",
      expanded: "spell_fireball_expanded",

      type: "evocation",
      classes: ["wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 150,

      parts: ["focus","somatic","verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 40,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 8,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  fly: [
    {},
    {},
    {},
    {      
      h: {ua: 674, ru: 674},
      link: "fly",
      name: "spell_fly",
      details: "spell_fly_details",
      expanded: "spell_fly_expanded",

      type: "transmutation",
      classes: ["wizard","warlock","ranger","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus","touch","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  gaseous_form: [
    {},
    {},
    {},
    {      
      h: {ua: 826, ru: 886},
      link: "gaseous_form",
      name: "spell_gaseous_form",
      details: "spell_gaseous_form_details",
      expanded: "spell_gaseous_form_expanded",

      type: "transmutation",
      classes: ["wizard","warlock","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus","touch","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  glyph_of_warding: [
    {},
    {},
    {},
    {      
      h: {ua: 968, ru: 938},
      link: "glyph_of_warding",
      name: "spell_glyph_of_warding",
      details: "spell_glyph_of_warding_details",
      expanded: "spell_glyph_of_warding_expanded",

      type: "abjuration",
      classes: ["wizard","cleric","bard",],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["material_incense_200gold","touch","somatic","verbal"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: "square",
      aim_aoe_size: 10,

      impact_type: "damage",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  haste: [
    {},
    {},
    {},
    {      
      h: {ua: 914, ru: 914},
      link: "haste",
      name: "spell_haste",
      details: "spell_haste_details",
      expanded: "spell_haste_expanded",

      type: "transmutation",
      classes: ["wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  hipnotic_pattern: [
    {},
    {},
    {},
    {      
      h: {ua: 788, ru: 788},
      link: "hipnotic_pattern",
      name: "spell_hipnotic_pattern",
      details: "spell_hipnotic_pattern_details",
      expanded: "spell_hipnotic_pattern_expanded",

      type: "illusion",
      classes: ["wizard","sorcerer","bard","warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 30,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  hunger_of_hadar: [
    {},
    {},
    {},
    {      
      h: {ua: 1026, ru: 996},
      link: "hunger_of_hadar",
      name: "spell_hunger_of_hadar",
      details: "spell_hunger_of_hadar_details",
      expanded: "spell_hunger_of_hadar_expanded",

      type: "conjuration",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 150,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 40,

      impact_type: "damage",
      impact_damage_type: "cold_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 6,
      impact_size_pls: null,

      second_impact_type: "damage",
      second_impact_damage_type: "acid_w",

      second_impact_size_foo: null,
      second_impact_size_str: null,
      second_impact_size_num: 2,
      second_impact_size_dic: 6,
      second_impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
  ],

  leomunds_tiny_hut: [
    {},
    {},
    {},
    {      
      h: {ua: 838, ru: 838},
      link: "leomunds_tiny_hut",
      name: "spell_leomunds_tiny_hut",
      details: "spell_leomunds_tiny_hut_details",
      expanded: "spell_leomunds_tiny_hut_expanded",

      type: "evocation",
      classes: ["wizard","bard",],

      cast_time: "ritual_plus10min",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus","somatic","verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: "halfsphere",
      aim_aoe_size: 20,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  lightning_arrow: [
    {},
    {},
    {},
    {      
      h: {ua: 938, ru: 908},
      link: "lightning_arrow",
      name: "spell_lightning_arrow",
      details: "spell_lightning_arrow_details",
      expanded: "spell_lightning_arrow_expanded",

      type: "transmutaion",
      classes: ["ranger",],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: "damage",
      impact_damage_type: "electricity_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 4,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  lightning_bolt: [
    {},
    {},
    {},
    {      
      h: {ua: 788, ru: 788},
      link: "lightning_bolt",
      name: "spell_lightning_bolt",
      details: "spell_lightning_bolt_details",
      expanded: "spell_lightning_bolt_expanded",

      type: "evocation",
      classes: ["wizard","sorcerer","druid",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: 0,

      parts: ["focus","somatic","verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "line",
      aim_aoe_size: 100,

      impact_type: "damage",
      impact_damage_type: "electricity_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 8,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  magic_circle: [
    {},
    {},
    {},
    {      
      h: {ua: 998, ru: 1028},
      link: "magic_circle",
      name: "spell_magic_circle",
      details: "spell_magic_circle_details",
      expanded: "spell_magic_circle_expanded",

      type: "abjuration",
      classes: ["wizard","cleric","warlock","paladin",],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["material_holy_water_100gold","somatic","verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: "cilinder",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Dur_Plus_1",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  mass_healing_word: [
    {},
    {},
    {},
    {      
      h: {ua: 718, ru: 718},
      link: "mass_healing_word",
      name: "spell_mass_healing_word",
      details: "spell_mass_healing_word_details",
      expanded: "spell_mass_healing_word_expanded",

      type: "evocation",
      classes: ["bard","cleric",],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: "sphere",
      aim_aoe_size: 120,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1__Pls_MOD",
      impact_size_str: 6,
      impact_size_num: 1,
      impact_size_dic: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  meld_into_stone: [
    {},
    {},
    {},
    {      
      h: {ua: 676, ru: 676},
      link: "meld_into_stone",
      name: "spell_meld_into_stone",
      details: "spell_meld_into_stone_details",
      expanded: "spell_meld_into_stone_expanded",

      type: "transmutation",
      classes: ["druid","cleric","ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["touch","somatic","verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  major_image: [
    {},
    {},
    {},
    {      
      h: {ua: 838, ru: 838},
      link: "major_image",
      name: "spell_major_image",
      details: "spell_major_image_details",
      expanded: "spell_major_image_expanded",

      type: "illusion",
      classes: ["bard","warlock","wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["focus","somatic","verbal"],

      spell_time: null,
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Sti_6Til__Dur_6Nul__Sdu_6Nul",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  nondetection: [
    {},
    {},
    {},
    {      
      h: {ua: 616, ru: 646},
      link: "nondetection",
      name: "spell_nondetection",
      details: "spell_nondetection_details",
      expanded: "spell_nondetection_expanded",

      type: "abjuration",
      classes: ["bard","ranger","wizard",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["material_diamont_dust_25gold","touch","somatic","verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  phantom_steed: [
    {},
    {},
    {},
    {      
      h: {ua: 734, ru: 734},
      link: "phantom_steed",
      name: "spell_phantom_steed",
      details: "spell_phantom_steed_details",
      expanded: "spell_phantom_steed_expanded",

      type: "illusion",
      classes: ["wizard",],

      cast_time: "ritual_plus10min",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["somatic","verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  plant_growth: [
    {},
    {},
    {},
    {      
      h: {ua: 912, ru: 972},
      link: "plant_growth",
      name: "spell_plant_growth",
      details: "spell_plant_growth_details",
      expanded: "spell_plant_growth_expanded",

      type: "transmutation",
      classes: ["bard","druid","ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 150,

      parts: ["somatic","verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: "sphere",
      aim_aoe_size: 200,

      impact_type: "slowing",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: 4,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  protection_from_energy: [
    {},
    {},
    {},
    {      
      h: {ua: 646, ru: 646},
      link: "protection_from_energy",
      name: "spell_protection_from_energy",
      details: "spell_protection_from_energy_details",
      expanded: "spell_protection_from_energy_expanded",

      type: "abjuration",
      classes: ["wizard","sorcerer","druid","cleric","ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  remove_curse: [
    {},
    {},
    {},
    {      
      h: {ua: 586, ru: 616},
      link: "remove_curse",
      name: "spell_remove_curse",
      details: "spell_remove_curse_details",
      expanded: "spell_remove_curse_expanded",

      type: "abjuration",
      classes: ["wizard","paladin","warlock","cleric",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch","somatic","verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  revivify: [
    {},
    {},
    {},
    {      
      h: {ua: 676, ru: 706},
      link: "revivify",
      name: "spell_revivify",
      details: "spell_revivify_details",
      expanded: "spell_revivify_expanded",

      type: "necromancy",
      classes: ["druid","cleric","paladin","ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["material_diamond_300gold","touch","somatic","verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  sending: [
    {},
    {},
    {},
    {      
      h: {ua: 646, ru: 646},
      link: "sending",
      name: "spell_sending",
      details: "spell_sending_details",
      expanded: "spell_sending_expanded",

      type: "evocation",
      classes: ["bard","wizard","cleric",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["focus","somatic","verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  sleet_storm: [
    {},
    {},
    {},
    {      
      h: {ua: 848, ru: 878},
      link: "sleet_storm",
      name: "spell_sleet_storm",
      details: "spell_sleet_storm_details",
      expanded: "spell_sleet_storm_expanded",

      type: "conjuration",
      classes: ["wizard","sorcerer","druid",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 150,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cilinder",
      aim_aoe_size: 80,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
  ],

  slow: [
    {},
    {},
    {},
    {      
      h: {ua: 1072, ru: 1072},
      link: "slow",
      name: "spell_slow",
      details: "spell_slow_details",
      expanded: "spell_slow_expanded",

      type: "transmutation",
      classes: ["wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 40,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 6,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  speak_with_dead: [
    {},
    {},
    {},
    {      
      h: {ua: 674, ru: 674},
      link: "speak_with_dead",
      name: "spell_speak_with_dead",
      details: "spell_speak_with_dead_details",
      expanded: "spell_speak_with_dead_expanded",

      type: "necromancy",
      classes: ["bard","wizard","cleric",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["focus","somatic","verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  speak_with_plants: [
    {},
    {},
    {},
    {      
      h: {ua: 778, ru: 808},
      link: "speak_with_plants",
      name: "spell_speak_with_plants",
      details: "spell_speak_with_plants_details",
      expanded: "spell_speak_with_plants_expanded",

      type: "transmutation",
      classes: ["druid","bard","ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 10,

      parts: ["somatic","verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  spirit_guardians: [
    {},
    {},
    {},
    {      
      h: {ua: 848, ru: 818},
      link: "spirit_guardians",
      name: "spell_spirit_guardians",
      details: "spell_spirit_guardians_details",
      expanded: "spell_spirit_guardians_expanded",

      type: "conjuration",
      classes: ["paladin",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 30,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  stinking_cloud: [
    {},
    {},
    {},
    {      
      h: {ua: 818, ru: 788},
      link: "stinking_cloud",
      name: "spell_stinking_cloud",
      details: "spell_stinking_cloud_details",
      expanded: "spell_stinking_cloud_expanded",

      type: "conjuration",
      classes: ["bard","wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 40,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
  ],

  tongues: [
    {},
    {},
    {},
    {      
      h: {ua: 646, ru: 646},
      link: "tongues",
      name: "spell_tongues",
      details: "spell_tongues_details",
      expanded: "spell_tongues_expanded",

      type: "divination",
      classes: ["wizard","warlock","cleric","sorcerer","bard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus","touch","verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  vampiric_touch: [
    {},
    {},
    {},
    {      
      h: {ua: 822, ru: 822},
      link: "vampiric_touch",
      name: "spell_vampiric_touch",
      details: "spell_vampiric_touch_details",
      expanded: "spell_vampiric_touch_expanded",

      type: "necromancy",
      classes: ["warlock","wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 5,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "necrotic_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  water_breathing: [
    {},
    {},
    {},
    {      
      h: {ua: 748, ru: 748},
      link: "water_breathing",
      name: "spell_water_breathing",
      details: "spell_water_breathing_details",
      expanded: "spell_water_breathing_expanded",

      type: "transmutation",
      classes: ["wizard","sorcerer","druid","ranger"],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus","somatic","verbal"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  water_walk: [
    {},
    {},
    {},
    {      
      h: {ua: 778, ru: 778},
      link: "water_walk",
      name: "spell_water_walk",
      details: "spell_water_walk_details",
      expanded: "spell_water_walk_expanded",

      type: "transmutation",
      classes: ["wizard","sorcerer",],

      cast_time: "action_plus10min",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic","verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  wind_wall: [
    {},
    {},
    {},
    {      
      h: {ua: 922, ru: 892},
      link: "wind_wall",
      name: "spell_wind_wall",
      details: "spell_wind_wall_details",
      expanded: "spell_wind_wall_expanded",

      type: "evocation",
      classes: ["druid","ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "line",
      aim_aoe_size: 50,

      impact_type: "damage",
      impact_damage_type: "bludgeoning_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: "÷2",
    },
  ],

  // NOTE - Spells [4]

  arcane_eye: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 822, ru: 822},
      link: "arcane_eye",
      name: "spell_arcane_eye",
      details: "spell_arcane_eye_details",
      expanded: "spell_arcane_eye_expanded",

      type: "divination",
      classes: ["wizard",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 30,

      impact_type: "speed",
      impact_damage_type: null,

      impact_size_foo: "Feet",
      impact_size_str: null,
      impact_size_num: 30,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  aura_of_life: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 764, ru: 794},
      link: "aura_of_life",
      name: "spell_aura_of_life",
      details: "spell_aura_of_life_details",
      expanded: "spell_aura_of_life_expanded",

      type: "abjuration",
      classes: ["cleric","paladin",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  banishment: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 848, ru: 848},
      link: "banishment",
      name: "spell_banishment",
      details: "spell_banishment_details",
      expanded: "spell_banishment_expanded",

      type: "abjuration",
      classes: ["wizard","cleric","warlock","paladin","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
  ],

  blight: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 848, ru: 788},
      link: "blight",
      name: "spell_blight",
      details: "spell_blight_details",
      expanded: "spell_blight_expanded",

      type: "necromancy",
      classes: ["wizard","druid","warlock","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["somatic","verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "necrotic_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 8,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
  ],

  compulsion: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 744, ru: 744},
      link: "compulsion",
      name: "spell_compulsion",
      details: "spell_compulsion_details",
      expanded: "spell_compulsion_expanded",

      type: "enchantment",
      classes: ["bard",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  confusion: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 758, ru: 788},
      link: "confusion",
      name: "spell_confusion",
      details: "spell_confusion_details",
      expanded: "spell_confusion_expanded",

      type: "enchantment",
      classes: ["druid","bard","wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "aim_aoe",
      impact_damage_type: "sphere",

      impact_size_foo: "Feet__Num_Plus_10",
      impact_size_str: null,
      impact_size_num: 20,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
  ],

  control_water: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 952, ru: 1012},
      link: "control_water",
      name: "spell_control_water",
      details: "spell_control_water_details",
      expanded: "spell_control_water_expanded",

      type: "transmutation",
      classes: ["wizard","cleric","druid",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 300,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 100,

      impact_type: "damage",
      impact_damage_type: "bludgeoning_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: "÷2",
    },
  ],

  death_ward: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 616, ru: 616},
      link: "death_ward",
      name: "spell_death_ward",
      details: "spell_death_ward_details",
      expanded: "spell_death_ward_expanded",

      type: "abjuration",
      classes: ["cleric","paladin",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch","somatic","verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  dimension_door: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 868, ru: 868},
      link: "dimension_door",
      name: "spell_dimension_door",
      details: "spell_dimension_door_details",
      expanded: "spell_dimension_door_expanded",

      type: "conjuration",
      classes: ["bard","wizard","warlock","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 500,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "force_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 4,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divination: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 794, ru: 824},
      link: "divination",
      name: "spell_divination",
      details: "spell_divination_details",
      expanded: "spell_divination_expanded",

      type: "divination",
      classes: ["cleric","wizard","druid",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["material_incense_25gold","somatic","verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  dominate_beast: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 714, ru: 714},
      link: "dominate_beast",
      name: "spell_dominate_beast",
      details: "spell_dominate_beast_details",
      expanded: "spell_dominate_beast_expanded",

      type: "enchantment",
      classes: ["druid","ranger","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Dur_10_60_480",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  evards_black_tentacles: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 832, ru: 832},
      link: "evards_black_tentacles",
      name: "spell_evards_black_tentacles",
      details: "spell_evards_black_tentacles_details",
      expanded: "spell_evards_black_tentacles_expanded",

      type: "conjuration",
      classes: ["wizard",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: "square",
      aim_aoe_size: 20,

      impact_type: "damage",
      impact_damage_type: "bludgeoning_w",

      impact_size_foo: null,
      impact_size_str: 10,
      impact_size_num: 3,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  fire_shield: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 808, ru: 808},
      link: "fire_shield",
      name: "spell_fire_shield",
      details: "spell_fire_shield_details",
      expanded: "spell_fire_shield_expanded",

      type: "evocation",
      classes: ["sorcerer","wizard","druid",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus","somatic","verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  freedom_of_movement: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 766, ru: 796},
      link: "freedom_of_movement",
      name: "spell_freedom_of_movement",
      details: "spell_freedom_of_movement_details",
      expanded: "spell_freedom_of_movement_expanded",

      type: "abjuration",
      classes: ["druid","cleric","bard","ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus","touch","somatic","verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  grasping_vine: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 818, ru: 818},
      link: "grasping_vine",
      name: "spell_grasping_vine",
      details: "spell_grasping_vine_details",
      expanded: "spell_grasping_vine_expanded",

      type: "conjuration",
      classes: ["druid","ranger",],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "pull",
      impact_damage_type: null,

      impact_size_foo: "Feet",
      impact_size_str: 10,
      impact_size_num: 20,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
  ],

  greater_invisibility: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 586, ru: 586},
      link: "greater_invisibility",
      name: "spell_greater_invisibility",
      details: "spell_greater_invisibility_details",
      expanded: "spell_greater_invisibility_expanded",

      type: "illusion",
      classes: ["bard","wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],
  
  guardian_of_faith: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 862, ru: 862},
      link: "guardian_of_faith",
      name: "spell_guardian_of_faith",
      details: "spell_guardian_of_faith_details",
      expanded: "spell_guardian_of_faith_expanded",

      type: "conjuration",
      classes: ["cleric",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 20,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  hallucinatory_terrain: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 808, ru: 808},
      link: "hallucinatory_terrain",
      name: "spell_hallucinatory_terrain",
      details: "spell_hallucinatory_terrain_details",
      expanded: "spell_hallucinatory_terrain_expanded",

      type: "illustion",
      classes: ["wizard","bard","druid","warlock"],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 300,

      parts: ["focus","somatic","verbal"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 150,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  ice_storm: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 906, ru: 906},
      link: "ice_storm",
      name: "spell_ice_storm",
      details: "spell_ice_storm_details",
      expanded: "spell_ice_storm_expanded",

      type: "evocation",
      classes: ["wizard","druid","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 300,

      parts: ["focus","somatic","verbal"],

      spell_time: null,
      spell_duration: 2,
      spell_duration_units: "round",

      aim_need: false,
      aim_aoe: "cilinder",
      aim_aoe_size: 40,

      impact_type: "damage",
      impact_damage_type: "bludgeoning_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dic: 8,
      impact_size_pls: null,

      second_impact_type: "damage",
      second_impact_damage_type: "cold_w",

      second_impact_size_foo: null,
      second_impact_size_str: null,
      second_impact_size_num: 4,
      second_impact_size_dic: 6,
      second_impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  locate_creature: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 734, ru: 734},
      link: "locate_creature",
      name: "spell_locate_creature",
      details: "spell_locate_creature_details",
      expanded: "spell_locate_creature_expanded",

      type: "divination",
      classes: ["bard","druid","wizard","cleric","paladin","ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 1000,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  polymorph: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 1134, ru: 1164},
      link: "polymorph",
      name: "spell_polymorph",
      details: "spell_polymorph_details",
      expanded: "spell_polymorph_expanded",

      type: "transmutation",
      classes: ["druid","bard","sorcerer","wizard",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  stone_shape: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 704, ru: 704},
      link: "stone_shape",
      name: "spell_stone_shape",
      details: "spell_stone_shape_details",
      expanded: "spell_stone_shape_expanded",

      type: "transmutation",
      classes: ["wizard","cleric","druid",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["focus","touch","somatic","verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 5,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  stoneskin: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 646, ru: 646},
      link: "stoneskin",
      name: "spell_stoneskin",
      details: "spell_stoneskin_details",
      expanded: "spell_stoneskin_expanded",

      type: "abjuration",
      classes: ["druid","wizard","sorcerer","ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["material_diamont_dust_100gold","touch","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  wall_of_fire: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 862, ru: 862},
      link: "wall_of_fire",
      name: "spell_wall_of_fire",
      details: "spell_wall_of_fire_details",
      expanded: "spell_wall_of_fire_expanded",

      type: "evocation",
      classes: ["druid","wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["focus","somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "line",
      aim_aoe_size: 60,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
  ],

  // NOTE - Spells [5]

  cloudkill: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 892, ru: 862},
      link: "cloudkill",
      name: "spell_cloudkill",
      details: "spell_cloudkill_details",
      expanded: "spell_cloudkill_expanded",

      type: "conjuration",
      classes: ["wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 40,

      impact_type: "damage",
      impact_damage_type: "poison_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
  ],

  commune: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 736, ru: 736},
      link: "commune",
      name: "spell_commune",
      details: "spell_commune_details",
      expanded: "spell_commune_expanded",

      type: "divination",
      classes: ["cleric",],

      cast_time: "ritual_plus10min",
      cast_duration: 1,
      cast_duration_units: "min",
      as_ritual: true,

      aim_target: "self",
      aim_type: null,
      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  commune_with_nature: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 646, ru: 676},
      link: "commune_with_nature",
      name: "spell_commune_with_nature",
      details: "spell_commune_with_nature_details",
      expanded: "spell_commune_with_nature_expanded",

      type: "divination",
      classes: ["druid","ranger",],

      cast_time: "ritual_plus10min",
      cast_duration: 1,
      cast_duration_units: "min",
      as_ritual: true,

      aim_target: "self",
      aim_type: null,
      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  cone_of_cold: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 758, ru: 758},
      link: "cone_of_cold",
      name: "spell_cone_of_cold",
      details: "spell_cone_of_cold_details",
      expanded: "spell_cone_of_cold_expanded",

      type: "evocation",
      classes: ["druid","wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["focus","somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cone",
      aim_aoe_size: 60,

      impact_type: "damage",
      impact_damage_type: "cold_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 8,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
  ],

  conjure_elemental: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 882, ru: 912},
      link: "conjure_elemental",
      name: "spell_conjure_elemental",
      details: "spell_conjure_elemental_details",
      expanded: "spell_conjure_elemental_expanded",

      type: "conjuration",
      classes: ["wizard","druid",],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 10,

      impact_type: "dangerness",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
  ],

  destructive_wave: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 892, ru: 862},
      link: "destructive_wave",
      name: "spell_destructive_wave",
      details: "spell_destructive_wave_details",
      expanded: "spell_destructive_wave_expanded",

      type: "evocation",
      classes: ["paladin",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: "damage",
      impact_damage_type: "thunder_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dic: 6,
      impact_size_pls: null,

      second_impact_type: "damage",
      second_impact_damage_type: "radiant_w",

      second_impact_size_foo: null,
      second_impact_size_str: null,
      second_impact_size_num: 5,
      second_impact_size_dic: 6,
      second_impact_size_pls: null,


      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
  ],

  dominate_person: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 714, ru: 714},
      link: "dominate_person",
      name: "spell_dominate_person",
      details: "spell_dominate_person_details",
      expanded: "spell_dominate_person_expanded",

      type: "enchantment",
      classes: ["bard","wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Dur_10_60_480",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  dream: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 804, ru: 774},
      link: "dream",
      name: "spell_dream",
      details: "spell_dream_details",
      expanded: "spell_dream_expanded",

      type: "illusion",
      classes: ["bard","wizard","warlock",],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["focus","somatic","verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "psychic_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  flame_strike: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 876, ru: 876},
      link: "flame_strike",
      name: "spell_flame_strike",
      details: "spell_flame_strike_details",
      expanded: "spell_flame_strike_expanded",

      type: "evocation",
      classes: ["cleric",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus","somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cilinder",
      aim_aoe_size: 20,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 4,
      impact_size_dic: 6,
      impact_size_pls: null,

      second_impact_type: "damage",
      second_impact_damage_type: "radiant_w",

      second_impact_size_foo: null,
      second_impact_size_str: null,
      second_impact_size_num: 4,
      second_impact_size_dic: 6,
      second_impact_size_pls: null,


      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
  ],

  hallow: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 1314, ru: 1314},
      link: "hallow",
      name: "spell_hallow",
      details: "spell_hallow_details",
      expanded: "spell_hallow_expanded",

      type: "evocation",
      classes: ["cleric",],

      cast_time: "ritual",
      cast_duration: 24,
      cast_duration_units: "hour",

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["material_incense_1000gold","touch","somatic", "verbal"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 120,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",
      impact_size_saved: null,
    },
  ],

  hold_monster: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 758, ru: 788},
      link: "hold_monster",
      name: "spell_hold_monster",
      details: "spell_hold_monster_details",
      expanded: "spell_hold_monster_expanded",

      type: "enchantment",
      classes: ["bard","wizard","warlock","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
  ],

  insect_plague: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 862, ru: 862},
      link: "insect_plague",
      name: "spell_insect_plague",
      details: "spell_insect_plague_details",
      expanded: "spell_insect_plague_expanded",

      type: "transmutation",
      classes: ["wizard","cleric","druid",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 300,

      parts: ["focus","somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 40,

      impact_type: "damage",
      impact_damage_type: "piercing_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 4,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
  ],

  legend_lore: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 676, ru: 676},
      link: "legend_lore",
      name: "spell_legend_lore",
      details: "spell_legend_lore_details",
      expanded: "spell_legend_lore_expanded",

      type: "divination",
      classes: ["bard","wizard","cleric",],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["material_smell_250gold","material_ivory_50gold","somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  mass_cure_wounds: [
    {},
    {},
    {},
    {},
    {      
      h: {ua: 762, ru: 792},
      link: "mass_cure_wounds",
      name: "spell_mass_cure_wounds",
      details: "spell_mass_cure_wounds_details",
      expanded: "spell_mass_cure_wounds_expanded",

      type: "evocation",
      classes: ["bard","druid","cleric",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic","verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1__Pls_MOD",
      impact_size_str: 6,
      impact_size_num: 3,
      impact_size_dic: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
  ],

  modify_memory: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 788, ru: 818},
      link: "modify_memory",
      name: "spell_modify_memory",
      details: "spell_modify_memory_details",
      expanded: "spell_modify_memory_expanded",

      type: "enchantment",
      classes: ["bard","wizard",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "event_oldness",
      impact_damage_type: "days",

      impact_size_foo: "Num_7_30_365_5280",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
  ],

  passwall: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 808, ru: 778},
      link: "passwall",
      name: "spell_passwall",
      details: "spell_passwall_details",
      expanded: "spell_passwall_expanded",

      type: "transmutation",
      classes: ["wizard",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus","somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "line",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  seeming: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 714, ru: 744},
      link: "seeming",
      name: "spell_seeming",
      details: "spell_seeming_details",
      expanded: "spell_seeming_expanded",

      type: "illusion",
      classes: ["bard","wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,
      as_ritual: true,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",
      impact_size_saved: null,
    },
  ],

  raise_dead: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 884, ru: 944},
      link: "raise_dead",
      name: "spell_raise_dead",
      details: "spell_raise_dead_details",
      expanded: "spell_raise_dead_expanded",

      type: "necromancy",
      classes: ["bard","cleric","paladin",],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["material_diamond_500gold","touch","somatic","verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "fee",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 4,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  scrying: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 926, ru: 956},
      link: "scrying",
      name: "spell_scrying",
      details: "spell_scrying_details",
      expanded: "spell_scrying_expanded",

      type: "divination",
      classes: ["bard","wizard","druid","cleric","warlock",],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["material_focus_1000gold", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  telekinesis: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 748, ru: 748},
      link: "telekinesis",
      name: "spell_telekinesis",
      details: "spell_telekinesis_details",
      expanded: "spell_telekinesis_expanded",

      type: "transmutation",
      classes: ["sorcerer","wizard",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic","verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "weight",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1000,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  tree_stride: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 764, ru: 794},
      link: "tree_stride",
      name: "spell_tree_stride",
      details: "spell_tree_stride_details",
      expanded: "spell_tree_stride_expanded",

      type: "conjuration",
      classes: ["druid","ranger",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 1000,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  wall_of_stone: [
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 878, ru: 938},
      link: "wall_of_stone",
      name: "spell_wall_of_stone",
      details: "spell_wall_of_stone_details",
      expanded: "spell_wall_of_stone_expanded",

      type: "evocation",
      classes: ["druid","wizard","sorcerer",],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["focus","somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "line",
      aim_aoe_size: 100,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
  ],

  // NOTE - Spells [6]

  true_seeing: [
    {},
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 734, ru: 734},
      link: "true_seeing",
      name: "spell_true_seeing",
      details: "spell_true_seeing_details",
      expanded: "spell_true_seeing_expanded",

      type: "divination",
      classes: ["bard","wizard","cleric","warlock","sorcerer"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["material_mushroom_cream_25_gold", "touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "vision_true",
      impact_damage_type: null,

      impact_size_foo: "Feet",
      impact_size_str: null,
      impact_size_num: 120,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  // NOTE - Spells [7]

  mordenkainens_sword: [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 778, ru: 778},
      link: "mordenkainens_sword",
      name: "spell_mordenkainens_sword",
      details: "spell_mordenkainens_sword_details",
      expanded: "spell_mordenkainens_sword_expanded",

      type: "evocation",
      classes: ["bard","wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["material_mini_platinum_sword_250_gold", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "force_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dic: 10,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  // NOTE - Spells [8]

  glibness: [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 616, ru: 616},
      link: "glibness",
      name: "spell_glibness",
      details: "spell_glibness_details",
      expanded: "spell_glibness_expanded",

      type: "transmutation",
      classes: ["bard","warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  // NOTE - Spells [9]

  power_word_kill: [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 674, ru: 674},
      link: "power_word_kill",
      name: "spell_power_word_kill",
      details: "spell_power_word_kill_details",
      expanded: "spell_power_word_kill_expanded",

      type: "enchantment",
      classes: ["bard","warlock","wizard","sorcerer"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  astral_projection: [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {      
      h: {ua: 988, ru: 988},
      link: "astral_projection",
      name: "spell_astral_projection",
      details: "spell_astral_projection_details",
      expanded: "spell_astral_projection_expanded",

      type: "necromancy",
      classes: ["cleric","warlock","wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["material_giacint_1000gold","material_silver_bar_100gold","somatic","verbal"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 9,
      impact_size_dic: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],
};
