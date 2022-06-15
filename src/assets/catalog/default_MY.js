import color from "./base_data/colors.js";

export default {
    
    //Key selections
    name:null,
    race: "halfling",
    ethnos: "stout",
    class:null,
    subclass:null,
    past:null,
    level:null,

    //Character
    alignment:null,
    gender:{
        phisiological: "male",
        feel: "cisgender", 
        look: "as_phisiological",
        attraction:null,  
    },
    faith:null,

    personality:null,
    ideals:null,
    bonds:null,
    flaws:null,
    appearance:null,
    story:null,

    //Race secondary adjustments
    age:null,
    weight:null,
    height:null,
    color:{
        skin: null,
        eyes: null,
        hair: null,
    },

    //Calculated
    maturity:null,
    size:null,

    HP_max:null,
    HP_dice:null,

    proficiency:null,
    initiative:null,
    armor_class:null,

    qualities:{
        speed:null,
        // vision_day:null,
        vision_night:null,
    },

    stats:{
        
        strength:
        { base: 0, total:0, mod:0, save:0 },

        dexterity:
        { base: 0, total:0, mod:0, save:0 },

        constitution:
        { base: 0, total:0, mod:0, save:0 },

        intelligence:
        { base: 0, total:0, mod:0, save:0 },

        wisdom:
        { base: 0, total:0, mod:0, save:0 },
    
        charisma:
        { base: 0, total:0, mod:0, save:0 }
    },
    
    skills:{
        
        acrobatics:
        { bonus:0, mod:"dexterity" },

        animal_hanging:
        { bonus:0, mod:"wisdom" },

        arcana:
        { bonus:0, mod:"intelligence" },

        athletics:
        { bonus:0, mod:"strength" },

        deception:
        { bonus:0, mod:"charisma" },

        history:
        { bonus:0, mod:"intelligence" },

        insight:
        { bonus:0, mod:"wisdom" },

        intimidation:
        { bonus:0, mod:"charisma" },

        investigation:
        { bonus:0, mod:"intelligence" },

        medicine:
        { bonus:0, mod:"wisdom" },

        nature:
        { bonus:0, mod:"intelligence" },

        perception:
        { bonus:0, mod:"wisdom" },

        performance:
        { bonus:0, mod:"charisma" },

        persuasion:
        { bonus:0, mod:"charisma" },

        religion:
        { bonus:0, mod:"intelligence" },

        sleight_of_hand:
        { bonus:0, mod:"dexterity" },

        stealth:
        { bonus:0, mod:"dexterity" },

        survival:
        { bonus:0, mod:"wisdom" },

    },

    //Владения - с чем умеешь обращаться
    proficiencies:{
        armor:null,
        weapons:null,
        tools:null,
        languages:null,
    },

    //доп вьіборьі, как у полуєльфа. дальше у класса будет похожее, так что можно тут ожидать массивьі
    custom_stats:null,
    custom_skills:null,
    custom_language:null,

    //Особенности - пассивньіе умения
    peculiarities:null,

    //Умения - активньіе умения без урона
    abilities:null,

    //Заклинания - активньіе умения с уроном
    spells:null,

    inventory:null,

    armor:null,
    shield:null,

    //Оружие - предметы с уроном
    weapons:null,

    wallet:{
        tripple_platina:0,
        platina:0,
        gold:0,
        silver:0,
        copper:0,
    }

}