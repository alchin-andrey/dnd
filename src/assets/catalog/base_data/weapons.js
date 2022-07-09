import weaponry from "./weaponry.js";

export default {

    sword: {
        name: "sword",
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
        details: "sword_details",
        type: weaponry.long_swords,
      },
}