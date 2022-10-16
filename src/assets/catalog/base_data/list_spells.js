
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
      // Время наложения ("reacion" | "bonus_action" | "action" | "ritual"). Ритуал может бьіть входньім параметром (+10 мин)
      cast_duration: null,
      // Длительность наложения
      cast_duration_units: null,
      // Единицьі измерения ("sec" | "round" | "min" | "hour")

      aim_target: null,
      // Цель ("self" | "creature" | "object" | "point")
      aim_type: null,
      // тип атаки ("near" | "touch" | "in_distance")
      // если in_distance - показать строку дальность

      parts: [null],
      // Компонентьі
      // "verbal" | "somatic" | "focus" | "[material]"

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

      impact_size_saved_foo: null,
      impact_size_saved_num: null,
      impact_size_saved_dice: null,
      // рассчет урона если спас пройден
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
      spell_duration_units: "min",

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
      spell_duration_units: null,

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

      impact_size_saved_foo: "Plus_Level_5",
      impact_size_saved_num: 1,
      impact_size_saved_dice: 6,
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

      impact_size_saved_foo: "Plus_Level_5",
      impact_size_saved_num: 1,
      impact_size_saved_dice: 6,
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

      impact_size_saved_foo: "Plus_Level_5",
      impact_size_saved_num: 1,
      impact_size_saved_dice: 6,
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

      impact_size_saved_foo: "Plus_Level_5",
      impact_size_saved_num: 1,
      impact_size_saved_dice: 6,
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

      impact_size_saved_foo: "Plus_Level_5",
      impact_size_saved_num: 1,
      impact_size_saved_dice: 6,
    },
  ],

  darkness_tiefling: [
    {
      name: "spell_darkness",
      details: "spell_darkness_tiefling_details",
      expanded: "spell_darkness_tiefling_details_expanded",

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
      aim_aoe_size: 15,

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

      saving_need: true,
      saving_attribute: "intelligence",

      impact_size_saved_foo: null,
      impact_size_saved_num: null,
      impact_size_saved_dice: null,
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

      impact_size_saved_foo: null,
      impact_size_saved_num: null,
      impact_size_saved_dice: null,
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

    impact_size_saved_foo: null,
    impact_size_saved_num: null,
    impact_size_saved_dice: null,
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

    impact_size_saved_foo: null,
    impact_size_saved_num: null,
    impact_size_saved_dice: null,
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

    impact_size_saved_foo: null,
    impact_size_saved_num: null,
    impact_size_saved_dice: null,
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

      impact_size_saved_foo: null,
      impact_size_saved_num: null,
      impact_size_saved_dice: null,
      // рассчет урона если спас пройден
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

      impact_size_saved_foo: null,
      impact_size_saved_num: null,
      impact_size_saved_dice: null,
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
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_num: null,
      impact_size_dice: null,

      saving_need: true,
      saving_attribute: "dexterity",

      impact_size_saved_foo: null,
      impact_size_saved_num: null,
      impact_size_saved_dice: null,
      // рассчет урона если спас пройден
    },
  ],

  rage: [
    {
      name: "spell_rage",
      details: "spell_rage_details",
      expanded: "spell_rage_expanded", // полное описание

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

      impact_size_foo: "Plus_num", // Добавить функцию
      impact_size_num: null,//classes.barbarian_rage_bonus[MY.level], добавить параметр
      impact_size_dice: null,
      // рассчет урона

      saving_need: false,
      // нужен ли cпасбросок
      // если true - строка Испьітание цели - Сложность входной = 8 + мод характеристики + мастерство + особьіе мод?
      saving_attribute: null,
      // Характеристика ( null - бай дефолт из класса | характеристика)

      impact_size_saved_foo: null,
      impact_size_saved_num: null,
      impact_size_saved_dice: null,
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

      impact_size_saved_foo: null,
      impact_size_saved_num: null,
      impact_size_saved_dice: null,
      // рассчет урона если спас пройден
    },
  ]
};
