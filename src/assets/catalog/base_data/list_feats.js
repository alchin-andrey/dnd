import spells from "./list_spells.js";

export default {

    actor: 
    {
        name: "feat_actor",
        details: "feat_actor_details",

        stats: 
        [
            {
                charisma: 1,
            },
        ],

        fines: 
        [
            {
                type: "plus",
                keyword: "advantage",
                details: "performace_deception_acting",
            },
            {
                type: "plus",
                keyword: "mimicing",
                details: "other_creature_sound_1min",
            },
        ]
    },

    example:
    {
        name: "feat_example",
        details: "feat_example_details",

        stats:
        [
            {
                //Если level отсутствует — применять для всех
                strength: 1,
                dexterity: 1,
                consitution: 1,
                intelligence: 1,
                wisdom: 1,
                charisma: 1,
            },
            {
                level: 4,
                wisdom: 45,
                charisma: 21,
            }
        ],

        qualities: 
        [
            {
                speed: 25,
                speed_bonus: 10,
                initiative: 2,
                armor_class: 2,
                mana1: 4,
                mana2: 3,
                mana3: 2,
                mana4: 1,
                mana5: 1,
                mana6: 1,
                mana7: 1,
                mana8: 1,
                mana9: 1,
                sorcery_points: 5,
                chi_points: 34,
            }
        ],

        fines: 
        [
            {
                type: "plus",
                keyword: "advantage",
                details: "performace_deception_acting",
            },
            {
                level: 19,
                type: "plus",
                keyword: "mimicing",
                details: "other_creature_sound_1min",

                //условие - один из атрибутов MY
                condition: "this.$root.MY.if_no_heavy_armor", //необязательно

                // баф вьіраженньій в цифрах (или оба или ниодного)
                key: "speed_bonus",
                value: "15",
            },
        ],

        spells:
        [
            {
                spell: spells.rage,
            },
            {
                spell: spells.rage,
            },
            {
                level: 1,
                spell: spells.rage,
                charges: 5,
            },
        ]
    }
}