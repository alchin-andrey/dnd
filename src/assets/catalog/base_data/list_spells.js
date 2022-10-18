
export default {
  spell_name: [
    // Мана {0-9} - группировать. Номер єлемента равно стоимость маньі
    {
      name: null,
      details: null,
      expanded: null, // полное описание

      type: null,
      /*
            abjuration: "ограждение",
            conjuration: "вызов",
            divination: "прорицание",
            enchantment: "чары",
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
        electricity_w:"⚡️ Электричеством",
        acid_w:"⚗️ Кислотой",
        thunder_w: "🔊 Звуком",
        radiant_w: "✨ Светом",
        force_w: "🌈 Cиловым полем",

        piercing_w: "🗡 колющий",
        slashing_w: "🪓 рубящий",
        bludgeoning_w: "🔨 дробящий",

        necrotic_w: "💀 Некротический",
        psychic_w: "🧠 Психический",
      */

      impact_size_foo: null,
      impact_size_num: null,
      impact_size_dice: null,
      // рассчет урона

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
      spell_duration_units: null,

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
      impact_size_saved: "÷2",
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
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 30,
      aim_aoe: "sphere",
      aim_aoe_size: 5,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_num: null,
      impact_size_dice: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
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
      spell_duration_units: null,

      aim_need: false,
      aim_range: 60,
      aim_aoe: "point",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "slashing_w",

      impact_size_foo: null,
      impact_size_num: 2,
      impact_size_dice: 10,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
    {
      //2
      impact_size_foo: null,
      impact_size_num: 3,
      impact_size_dice: 10,
    },
    {
      //3
      impact_size_foo: null,
      impact_size_num: 4,
      impact_size_dice: 10,
    },
    {
      //4
      impact_size_foo: null,
      impact_size_num: 5,
      impact_size_dice: 10,
    },
    {
      //5
      impact_size_foo: null,
      impact_size_num: 6,
      impact_size_dice: 10,
    },
    {
      //6
      impact_size_foo: null,
      impact_size_num: 7,
      impact_size_dice: 10,
    },
    {
      //7
      impact_size_foo: null,
      impact_size_num: 8,
      impact_size_dice: 10,
    },
    {
      //8
      impact_size_foo: null,
      impact_size_num: 9,
      impact_size_dice: 10,
    },
    {
      //9
      impact_size_foo: null,
      impact_size_num: 10,
      impact_size_dice: 10,
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
      spell_duration_units: null,

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

      impact_size_saved: "÷2",
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
      spell_duration_units: null,

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
      impact_size_saved: "÷2",
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
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "line",
      aim_aoe_size: 30,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Plus_Level_5", //1lvl + 0, 6lvl + 1, 11lvl + 2, 16lvl + 3
      impact_size_num: 2, //1 + 0, 6 + 1, 11 + 2, 16 + 3
      impact_size_dice: 6,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  cold_breath_cone: [
    {
      name: "spell_cold_breath",
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
      spell_duration_units: null,

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
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
  ],

  electricity_breath_line: [
    {
      name: "spell_electricity_breath",
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
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "line",
      aim_aoe_size: 30,

      impact_type: "damage",
      impact_damage_type: "electricity_w",

      impact_size_foo: "Plus_Level_5",
      impact_size_num: 2,
      impact_size_dice: 6,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  acid_breath_line: [
    {
      name: "spell_acid_breath",
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
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "line",
      aim_aoe_size: 30,

      impact_type: "damage",
      impact_damage_type: "acid_w",

      impact_size_foo: "Plus_Level_5",
      impact_size_num: 2,
      impact_size_dice: 6,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  poison_breath_cone: [
    {
      name: "spell_poison_breath",
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
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "poison_w",

      impact_size_foo: "Plus_Level_5",
      impact_size_num: 2,
      impact_size_dice: 6,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
  ],

  darkness_tiefling: [
    {
      name: "spell_darkness",
      details: "spell_darkness_tiefling_details",
      expanded: "spell_darkness_tiefling_expanded",

      type: "evocation",

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["verbal", "somatic"],

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
      impact_size_num: null,
      impact_size_dice: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  enlargement: [
    {
      name: "spell_enlargement",
      details: "spell_enlargement_details",
      expanded: "spell_enlargement_expanded", // полное описание

      type: "transmutation",

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,

      parts: ["verbal", "somatic", "focus"],

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
      impact_size_num: 1,
      impact_size_dice: 4,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  invisibility_self: [
    {
      name: "spell_invisibility_self",
      details: "spell_invisibility_self_details",
      expanded: "spell_invisibility_self_expanded", // полное описание

      type: "illusion",

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

      parts: ["verbal","somatic"],
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
        electricity_w:"⚡️ Электричеством",
        acid_w:"⚗️ Кислотой",
        thunder_w: "🔊 Звуком",
        radiant_w: "✨ Светом",
        force_w: "🌈 Cиловым полем",

        piercing_w: "🗡 колющий",
        slashing_w: "🪓 рубящий",
        bludgeoning_w: "🔨 дробящий",

        necrotic_w: "💀 Некротический",
        psychic_w: "🧠 Психический",
      */

      impact_size_foo: null,
      impact_size_num: null,
      impact_size_dice: null,
      // рассчет урона

      saving_need: false,
      // нужен ли cпасбросок
      // если true - строка Испьітание цели - Сложность входной = 8 + Характеристика + мастерство + особьіе мод?
      saving_attribute: null,
      // Характеристика ( null - бай дефолт из класса | характеристика)
      impact_size_saved: null,
      // рассчет урона если спас пройден
    },
  ],

  toy: [{
    name: "spell_toy",
    details: "spell_toy_details",
    expanded: "spell_toy_expanded",

    type: "ability",

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
    impact_size_num: null,
    impact_size_dice: null,

    saving_need: false,
    saving_attribute: null,
    impact_size_saved: null,
  },],

  lighter: [{
    name: "spell_lighter",
    details: "spell_lighter_details",
    expanded: "spell_lighter_expanded",

    type: "ability",

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
    impact_size_num: null,
    impact_size_dice: null,

    saving_need: false,
    saving_attribute: null,
    impact_size_saved: null,
  },],

  music_box: [{
    name: "spell_music_box",
    details: "spell_music_box_details",
    expanded: "spell_music_box_expanded",

    type: "ability",

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
    impact_size_num: null,
    impact_size_dice: null,

    saving_need: false,
    saving_attribute: null,
    impact_size_saved: null,
  },],

  small_illusion: [
    {
      name: "spell_small_illusion",
      details: "spell_small_illusion_details",
      expanded: "spell_small_illusion_expanded", // полное описание

      type: "illusion",

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic","focus"],

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
      impact_size_num: null,
      impact_size_dice: null,
      // рассчет урона

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    },
  ],

  dancing_lights: [
    {
    name: "spell_dancing_lights",
    details: "spell_dancing_lights_details",
    expanded: "spell_dancing_lights_expanded", // полное описание

      type: "evocation",

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["verbal","somatic","focus"],

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
      impact_size_num: null,
      impact_size_dice: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  faerie_fire: [
    {
      name: "spell_faerie_fire",
      details: "spell_faerie_fire_details",
      expanded: "spell_faerie_fire_expanded", // полное описание

      type: "evocation",

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
      aim_aoe_size: 40,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_num: null,
      impact_size_dice: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
      // рассчет урона если спас пройден
    },
  ],

  rage: [
    {
      name: "spell_rage",
      details: "spell_rage_details",
      expanded: "spell_rage_expanded", // полное описание

      //level: 15,
      //expanded: "spell_rage_expanded_15",

      type: "ability",
      /*
            abjuration: "ограждение",
            conjuration: "вызов",
            divination: "прорицание",
            enchantment: "чары",
            evocation: "воплощение",
            illusion: "иллюзия",
            necromancy: "некромантия",
            transmutation: "преобразование",
      */

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
        electricity_w:"⚡️ Электричеством",
        acid_w:"⚗️ Кислотой",
        thunder_w: "🔊 Звуком",
        radiant_w: "✨ Светом",
        force_w: "🌈 Cиловым полем",

        piercing_w: "🗡 колющий",
        slashing_w: "🪓 рубящий",
        bludgeoning_w: "🔨 дробящий",

        necrotic_w: "💀 Некротический",
        psychic_w: "🧠 Психический",
      */

      impact_size_foo: "barbarian_rage_bonus", // Добавить функцию
      impact_size_num: null,//classes.barbarian_rage_bonus[MY.level], добавить параметр
      impact_size_dice: null,
      // рассчет урона

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
      name: "spell_reckless_attack",
      details: "spell_reckless_attack_details",
      expanded: "spell_reckless_attack_expanded", // полное описание

      type: "ability",
      /*
            abjuration: "ограждение",
            conjuration: "вызов",
            divination: "прорицание",
            enchantment: "чары",
            evocation: "воплощение",
            illusion: "иллюзия",
            necromancy: "некромантия",
            transmutation: "преобразование",
      */

      cast_time: "instant",
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
        electricity_w:"⚡️ Электричеством",
        acid_w:"⚗️ Кислотой",
        thunder_w: "🔊 Звуком",
        radiant_w: "✨ Светом",
        force_w: "🌈 Cиловым полем",

        piercing_w: "🗡 колющий",
        slashing_w: "🪓 рубящий",
        bludgeoning_w: "🔨 дробящий",

        necrotic_w: "💀 Некротический",
        psychic_w: "🧠 Психический",
      */

      impact_size_foo: null,
      impact_size_num: null,
      impact_size_dice: null,
      // рассчет урона

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
      name: "spell_frenzy",
      details: "spell_frenzy_details",
      expanded: "spell_frenzy_expanded", 

      type: "ability",

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
      impact_size_num: null,
      impact_size_dice: null,
      
      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
      
    }
  ],

  intimidating_presence: [
    {
      name: "spell_intimidating_presence",
      details: "spell_intimidating_presence_details",
      expanded: "spell_intimidating_presence_expanded", 

      type: "ability",

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creatue",
      aim_type: "in_distance",
      parts: ["none"],
      spell_time: "till_dissipate",
      spell_duration: 2,
      spell_duration_units: "round",

      aim_need: false,
      aim_range: 30,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,
      
      impact_size_foo: null,
      impact_size_num: null,
      impact_size_dice: null,
      
      saving_need: true,
      saving_attribute: "wisdom", 
      //Если оно может видеть или слышать вас, оно должно совершить успешный спасбросок Мудрости (Сл равна 8 + ваш бонус мастерства + ваш модификатор Харизмы)
      impact_size_saved: null,
    }
  ],

  retaliation: [
    {
      name: "spell_retaliation",
      details: "spell_retaliation_details",
      expanded: "spell_retaliation_expanded", 

      type: "ability",

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creatue",
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
      impact_size_num: null,
      impact_size_dice: null,
      
      saving_need: false,
      saving_attribute: null, 
      //Если оно может видеть или слышать вас, оно должно совершить успешный спасбросок Мудрости (Сл равна 8 + ваш бонус мастерства + ваш модификатор Харизмы)
      impact_size_saved: null,
    }
  ],

  beast_sense: [
    {},
    {},
    {
      name: "spell_beast_sense",
      details: "spell_beast_sense_details",
      expanded: "spell_beast_sense_expanded", 

      type: "divination",

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

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
      impact_size_num: null,
      impact_size_dice: null,
      
      saving_need: false,
      saving_attribute: null, 
      impact_size_saved: null,
    }
  ],

  beast_sense_ritual: [
    {
      name: "spell_beast_sense",
      details: "spell_beast_sense_details",
      expanded: "spell_beast_sense_expanded", 

      type: "ability",

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
      impact_size_num: null,
      impact_size_dice: null,
      
      saving_need: false,
      saving_attribute: null, 
      impact_size_saved: null,
    }
  ],

  speak_with_animals: [
    {},
    {
      name: "spell_speak_with_animals",
      details: "spell_speak_with_animals_details",
      expanded: "spell_speak_with_animals_expanded", 

      type: "divination",

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      parts: ["verbal","somatic"],

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
      impact_size_num: null,
      impact_size_dice: null,
      
      saving_need: false,
      saving_attribute: null, 
      impact_size_saved: null,
    }
  ],

  speak_with_animals_ritual: [
    {
      name: "spell_speak_with_animals",
      details: "spell_speak_with_animals_details",
      expanded: "spell_speak_with_animals_expanded", 

      type: "ability",

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      parts: ["verbal","somatic"],

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
      impact_size_num: null,
      impact_size_dice: null,
      
      saving_need: false,
      saving_attribute: null, 
      impact_size_saved: null,
    }
  ],

  commune_with_nature: [
    {},
    {},
    {},
    {},
    {},
    {
      name: "spell_commune_with_nature",
      details: "spell_commune_with_nature_details",
      expanded: "spell_commune_with_nature_expanded", 

      type: "divination",

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      parts: ["verbal","somatic"],

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
      impact_size_num: null,
      impact_size_dice: null,
      
      saving_need: false,
      saving_attribute: null, 
      impact_size_saved: null,
    }
  ],

  commune_with_nature_ritual: [
    {
      name: "spell_commune_with_nature",
      details: "spell_commune_with_nature_details",
      expanded: "spell_commune_with_nature_expanded", 

      type: "ability",

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      parts: ["verbal","somatic"],

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
      impact_size_num: null,
      impact_size_dice: null,
      
      saving_need: false,
      saving_attribute: null, 
      impact_size_saved: null,
    }
  ],

  wolf_knock: [
    {
      name: "spell_wolf_knock",
      details: "spell_wolf_knock_details",
      expanded: null, 

      type: "ability",

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
      impact_size_num: null,
      impact_size_dice: null,
      
      saving_need: false,
      saving_attribute: null, 
      impact_size_saved: null,
    }
  ],

  elk_knock: [
    {
      name: "spell_elk_knock",
      details: "spell_elk_knock_details",
      expanded: "spell_elk_knock_expanded", 

      type: "ability",

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
      
      impact_size_foo: "Plus_strength_mod",
      impact_size_num: 1,
      impact_size_dice: 12,
      
      saving_need: true,
      saving_attribute: "strength", 
      impact_size_saved: "0",
    }
  ],

  tiger_strike: [
    {
      name: "spell_tiger_strike",
      details: "spell_tiger_strike_details",
      expanded: "spell_tiger_strike_expanded", 

      type: "ability",

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
      impact_size_num: null,
      impact_size_dice: null,
      
      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
      
    }
  ],
};
