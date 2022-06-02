import { color } from './colors.js'
import { spells } from './spells.js'

export const ethnos = {

    halfling: {

        stout: {

            name: "stout",
            description: "stout_halfling_description",
            img: "image",

            constitution: 1,

            peculiarities: [

                {
                    "type": "advantage",
                    "keyword": "advantage",
                    "details": "poison_against",
                },

                {
                    "type": "resistance",
                    "keyword":"resistance",
                    "details": "poison_damage",
                },

            ]

        },

        lightfoot: {

            "name": "lightfoot",
            "description": "lightfoot_halfling_description",
            "img": "image",

            "charisma": 1,

            "peculiarities": [

                {
                    "type": "plus",
                    "keyword": "stealth",
                    "details": "behind_bigger_then_mid",
                },

            ]

        },

        ghost: {

            "name": "ghost",
            "description": "ghost_halfling_description",
            "img": "image",

            "wisdom": {
                "mod": 1,
            },

            "peculiarities": [

                {
                    "type": "plus",
                    "keyword": "telepathy",
                    "details": "secrecy_size_description",
                },

            ],

            rare: true,

        },
    }
}

export const races = {

    human : {

        color: {
            skin : [
                color[1][0], 
                color[2][0], 
                color[2][1], 
                color[2][2], 
                color[2][3], 
                color[2][4], 
                color[2][5], 
                color[2][6], 
                color[0][6],
                color[3][0],
                color[12][0],
                color[11][0],
                color[10][0],
            ]
        }
    }, // недораюлтан

    halfling: {

        name: "halfling",
        "description": "halfling_description",
        "img": "image",

        "color": {
            "skin": [
                color[1][0], 
                color[2][0], 
                color[2][1], 
                color[2][2], 
                color[2][3], 
                color[2][4], 
                color[2][5], 
                color[2][6], 
                color[0][6],
                color[3][0],
                color[12][0],
                color[11][0],
                color[10][0],
            ],
            "eyes": [
                color[2][4],
                color[2][6],
            ],
            "hair": [
            ],
        },

        "settings": {
            "ethnos": ethnos.halfling,
            "age": {
                "young": 10,
                "mature": 25,
                "old": 100,
                "oldest": 150,
            },
            "height": {
                "from": 90,
                "to": 120,
            },
            "weight": {
                "from": 15,
                "to": 20,
            },

        },

        "dexterity": 2,

        "speed": 25,

        "proficiencies": {
            "languages": [
                "lang_common",
                "lang_halfling"
            ],
        },

        "peculiarities": [

            {
                "type": "advantage",
                "keyword": "advantage",
                "details": "fear_against",
            },

            {
                "type": "plus",
                "keyword": "rethrow",
                "details": "any_dice_1",
            },

            {
                "type": "plus",
                "keyword": "slippage",
                "details": "among_bigger_than_mid",
            },

        ]
    },

    halfelf: {

        custom_skills:2,
        custom_stats:2,
        custom_language:1,

    }, //недоработан, обсудить применение

    tiefling: {
        
        spells: [

            {
                level: 1,
                spell: spells.thaumaturgy,
            },

            {
                level: 3,
                spell: spells.hellish_rebuke,
                gain: 2,
            },

            {
                level: 5,
                spell: spells.darkness,
            }

        ]

    }

}



