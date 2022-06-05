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

        name: "hellish_rebuke",
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
        name: "darkness",
        slot: 2,
        school: "evocation",
        details: "darkness_details",

        components: [
            "verbal",
            "material +"
        ],
    }
}