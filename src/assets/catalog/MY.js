export let MY = {
    
    //Key selections
    name:null,
    race:null,
    ethnos:null,
    class:null,
    subclass:null,
    past:null,
    level:null,
    base:{
        strength:10,
        dexterity:10,
        constitution:10,
        intelligence:10,    
        wisdom:10,
        charisma:10,
    },

    //Character
    alignment:null,
    gender:{
        phisiological:null,
        feel:null, 
        look:null,   
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
        eyes:null,
        skin:null,
        hair:null,
    },

    //Calculated
    maturity:null,
    size:null,

    HP_max:null,
    HP_dice:null,

    proficiency:null,
    initiative:null,
    armor_class:null,

    speed:null,
    vision_day:null,
    vision_night:null,

    stats:{
        
        strength:
        { total:0, mod:0, save:0 },

        dexterity:
        { total:0, mod:0, save:0 },

        constitution:
        { total:0, mod:0, save:0 },

        intelligence:
        { total:0, mod:0, save:0 },

        wisdom:
        { total:0, mod:0, save:0 },
    
        charisma:
        { total:0, mod:0, save:0 }
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

    custom_skills:null,
    custom_stats:null,
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