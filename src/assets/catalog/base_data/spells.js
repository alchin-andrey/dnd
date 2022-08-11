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

export default {

  thaumaturgy: {
    name: "thaumaturgy",
    details: "thaumaturgy_details",
  },

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
