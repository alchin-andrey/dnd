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

    acid_breath:{

        name: "acid_breath",
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

    invisibility:{
        slot:2,
        name: "spell_invisibility",
        details: "spell_invisibility_details",
    }
}