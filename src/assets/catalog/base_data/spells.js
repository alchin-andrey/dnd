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
        stat:null,
        complexity:null,
    };
    damage = {
        type:null,
        x:null,
        dice:null,        
    };
    gain = {
        x:null,
        dice:null,
    };

}

export default {

    thaumaturgy: {
        slot: 0,
        name: "thaumaturgy",
        details: "thaumaturgy_details",
        component: [
            "verbal"
        ],
        school: "cantrip",
        tags: [
            "control",
        ],
    },

    hellish_rebuke:{
        slot: 0,
        name: "hellish_rebuke",
        details: "hellish_rebuke_details",
        compomemt: [
            "verbal",
            "somatic",
        ],

        school: "evocation",

        trial:{
            stat: "dexterity",
            complexity: 10,
        },

        damage: {
            x:2,
            dice:10,
        },

        gain: {
            x:1,
            dice:10,
        },
    },

    fire_breath:{

        name: "fire_breath",
        details: "fire_breath_details",

        compomemt: [
            "verbal",
        ],

        school: "evocation",

        trial:{
            stat: "dexterity",
            complexity: 10,
        },

        damage: {
            x:2,
            dice:6,
        },

        gain: {
            x:1,
            dice:6,
        },
    },

    cold_breath:{

        name: "cold_breath",
        details: "cold_breath_details",

        compomemt: [
            "verbal",
        ],

        school: "evocation",

        trial:{
            stat: "constitution",
            complexity: 10,
        },

        damage: {
            x:2,
            dice:6,
        },

        gain: {
            x:1,
            dice:6,
        },
    },

    electricity_breath:{

        name: "electricity_breath",
        details: "electricity_breath_details",

        compomemt: [
            "verbal",
        ],

        school: "evocation",

        trial:{
            stat: "dexterity",
            complexity: 10,
        },

        damage: {
            x:2,
            dice:6,
        },

        gain: {
            x:1,
            dice:6,
        },
    },

    acid_breath:{

        name: "acid_breath",
        details: "acid_breath_details",

        compomemt: [
            "verbal",
        ],

        school: "evocation",

        trial:{
            stat: "dexterity",
            complexity: 10,
        },

        damage: {
            x:2,
            dice:6,
        },

        gain: {
            x:1,
            dice:6,
        },
    },

    poison_breath:{

        name: "poison_breath",
        details: "poison_breath_details",

        compomemt: [
            "verbal",
        ],

        school: "evocation",

        trial:{
            stat: "constitution",
            complexity: 10,
        },

        damage: {
            x:2,
            dice:6,
        },

        gain: {
            x:1,
            dice:6,
        },
    },

    toy:{
        slot: 0,
        name: "spell_toy",
        details: "spell_toy_details",
    },

    lighter:{
        slot: 0,
        name: "spell_lighter",
        details: "spell_lighter_details"
    },

    music_box:{
        slot: 0,
        name: "spell_music_box",
        details: "spell_music_box_details",
    },

    small_illusion:{
        slot:0,
        name: "spell_small_illusion",
        details: "spell_small_illusion_details",
    },

    enlargement:{
        slot:0,
        name: "spell_enlargement",
        details: "spell_enlargement_details",
        damage_additional: {
            x:1,
            dice:4,
        },
    },

    dancing_lights: {
        slot:0,
        name: "spell_dancing_lights",
        details: "spell_dancing_lights_details",
        components: [
            "verbal",
            "somatic",
            "material +"
        ],
    },

    invisibility:{
        slot:2,
        name: "spell_invisibility",
        details: "spell_invisibility_details",
    },

    darkness : {
        slot: 2,
        name: "darkness",
        school: "evocation",
        details: "darkness_details",

        components: [
            "verbal",
            "material +"
        ],
    },

    bird_breath:{

        name: "bird_breath",
        
        lines: [

            {
                title: "some_title", // word from dic
                subtitle: "some_subtitle", // word from dic
                plus: false, 
                base: 34, // number or formula
                multiplicator: 2,
                bonus: 2,
                dice: null, // null or number
                suffix: "foots",
                squares_mana_solid: 2, // number or formula
                squares_mana_outline: 2, // number or formula
                squares_mana_plus: true,
            },
            
            {
                title: "some_title", //word from dic
                subtitle: "some_subtitle", // word from dic 
                plus: true,
                base: 1, // number or formula
                multiplicator: "level",
                bonus: ["mastery",2,"stats.consitution.mod"],     // Formula: Value = base * multiplicator + bonus[0] + ... + bonus[n]
                dice: 12, // null or number
                suffix: "", // word from dic
                squares_mana_solid: 2, // number or formula
                squares_mana_outline: 2, // number or formula
                squares_mana_plus: true,
            }
        ],

        details: "bird_breath_details",

    },
}