import color from './colors.js'
import spells from './spells.js'
import gender from './genders.js';
import lang from './languages.js';

export default {

    halfling: {

        name: "halfling",
        details: "halfling_details",

        settings: {
            ethnos: {
                stout: {

                    name: "stout",
                    details: "stout_halfling_details",
        
                    constitution: 1,
        
                    peculiarities: [
        
                        {
                            type: "advantage",
                            keyword: "advantage",
                            details: "poison_against",
                        },
        
                        {
                            type: "resistance",
                            keyword:"resistance",
                            details: "poison_damage",
                        },
        
                    ]
        
                },
        
                lightfoot: {
        
                    name: "lightfoot",
                    details: "lightfoot_halfling_details",
        
                    charisma: 1,
        
                    peculiarities: [
        
                        {
                            type: "plus",
                            keyword: "stealth",
                            details: "behind_bigger_then_mid",
                        },
        
                    ]
        
                },
        
                ghost: {
        
                    name: "ghost",
                    details: "ghost_halfling_details",
                    img: "image",
        
                    wisdom: 1,
        
                    peculiarities: [
        
                        {
                            type: "plus",
                            keyword: "telepathy",
                            details: "secrecy_size_details",
                        },
        
                    ],
        
                    rare: true,
        
                },
            },
            gender: gender,
            color_skin: [
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
            color_eyes: [
                    color[2][4],
                    color[2][6],
                ],
            color_hair: [
                ],

            age: {
                young: 10,
                mature: 25,
                old: 100,
                oldest: 150,
            },

            height: {
                from: 90,
                to: 120,
            },

            weight: {
                from: 15,
                to: 20,
            },
            
            // ТОЛЬКО ДЛЯ ОТЛАДКИ
            custom_skills:2,
            custom_stats:2,
            custom_language:1,

        },

        dexterity: 2,

        speed: 25,

        proficiencies: {
            languages: [
                lang.common,
                lang.halfling
            ],
        },

        peculiarities: [

            {
                type: "advantage",
                keyword: "advantage",
                details: "fear_against",
            },

            {
                type: "plus",
                keyword: "rethrow",
                details: "any_dice_1",
            },

            {
                type: "plus",
                keyword: "slippage",
                details: "among_bigger_than_mid",
            },

        ],

        spells: [ //ТОЛЬКО ДЛЯ ОТЛАДКИ

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

    },

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

    halfelf: {

        settings: {
            custom_skills:2,
            custom_stats:2,
            custom_language:1,
        }

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



