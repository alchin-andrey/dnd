export default {

    Barbarian_Rage_Bonus() 
    {
        return this.$root.step2_classes.barbarian_rage_bonus[this.$root.MY.level]; // convert to store
    },

    Plus_strength_mod() 
    {
        let pls = this.$root.MY.stats.strength.mod;

        //return to: impact_size_plus
        //if < 0 then 0

        return pls; // Example: +3 ⬜️⬜️⬜️
    },

    Cha_Mod()
    {

        //return to: impact_size_plus
        //if < 0 then 0

        let pls = this.$root.MY.stats.charisma.mod;
        return pls; //Example: +4 ⬜️⬜️⬜️⬜️
    },

    // Plus_Level_2()
    // {
    //     let num = this.Spell_index.impact_size_num;

    //     return num + (this.$root.MY.level-1)/2;
    //     //Например num = 1.
    //     //на 1 левеле = 1, на 3 левеле = 2, на 5 левеле = 3 и тд.
    // },

    // Levelx()
    // {
    //     let num = this.Spell_index.impact_size_num;

    //     return num * this.$root.MY.level;
    // },

    // Plus_Level_5_11_17()
    // {
    //     let num = this.Spell_index.impact_size_num;
    //     let lvl = this.$root.MY.level;
    //     let kof = 0;

    //     if (lvl < 5) {
    //         kof = 0;
    //     } else if (lvl < 11) {
    //         kof = 1;
    //     } else if (lvl < 17) {
    //         kof = 2;
    //     } else {
    //         kof = 3;
    //     }
    //     return num + kof;
    // },

    X_Level_5_11_17()
    {
        //return to: impact_size_string
        //1lvl = 1×, 5lvl = 2×, 11lvl = 3×, 17lvl = 4×
        //Example: 1× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
    },

    X_plus_1()
    {
        let str = this.Spell_index.impact_size_string;

        return str + this.mana - 1;
        //return to: impact_size_string
        //Exapmle: str = 3
        //spell{1} = 3×, spell{2} = 4×, spell{3} = 5×
        //spell{1}: 3× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
        //spell{2}: 4× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
    },

    X_plus_2()
    {
        let str = this.Spell_index.impact_size_string;

        return str + (this.mana - 1) * 2;
        //return to: impact_size_string
        //Exapmle: str = 3
        //spell{1} = 3×, spell{2} = 5×, spell{3} = 7×
        //spell{1}: 3× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
        //spell{2}: 5× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
    },

    Dmg_plus_1()
    {
        //return to: impact_size_num
        //spell{1} = num, spell{2} = num+1, spell{3} = num+2 ...
        //Example: 
        //spell{1}: 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
        //spell{2}: 2d10 ⬜️⬜️🔳🔳🔳🔳🔳🔳🔳🔳 🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳
    },

    Dmg_plus_2()
    {
        //return to: impact_size_num
        //spell{1} = num, spell{2} = num+2, spell{3} = num+4 ...
        //Example: 
        //spell{1}: 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
        //spell{2}: 3d10 ⬜️⬜️⬜️🔳🔳🔳🔳🔳🔳🔳 🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳 🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳
    },

    Dmg_plus_5()
    {
        let num = this.Spell_index.impact_size_num;

        return num + (this.mana-1)*5;
        //return to: impact_size_num
        //spell{1} = num, spell{2} = num+5, spell{3} = num+10 ...
        //Example: 
        //spell{1}: 1d4 ⬜️🔳🔳🔳
        //spell{2}: 6d4 ⬜️⬜️⬜️⬜️⬜️⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳
    },

    

    Pls_plus_5()
    {
        let pls = this.Spell_index.impact_size_plus;

        return pls + (this.mana - 1) * 5;
        //return to: impact_size_plus
        //Exapmle: pls = 4
        //spell{1}: 1d4+4 ⬜️⬜️⬜️⬜️ ⬜️🔳🔳🔳
        //spell{2}: 1d4+9 ⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️ ⬜️🔳🔳🔳
    },

    X_plus_1_base_stat_mod()
    {
        //use X_plus_1

        //Example: 
        //base_stat = strenth
        //num = base_stat_mod = strength.mod = 3
        //spell{1} = 1× 3 ⬜️⬜️⬜️
        //spell{2} = 2× 3 ⬜️⬜️⬜️
    },

    Dmg_plus_1_base_stat_mod()
    {
        //use Dmg_plus_1

        //Example: 
        //base_stat = strenth
        //num = base_stat_mod = strength.mod = 3
        //spell{1} = 1d4+3 ⬜️⬜️⬜️ ⬜️🔳🔳🔳
        //spell{2} = 2d4+3 ⬜️⬜️⬜️ ⬜️⬜️🔳🔳🔳🔳🔳🔳
    },

    Str_plus_40()
    {
        //не добавлять "×"

        let str = this.Spell_index.impact_size_string;

        return str + (this.mana - 1) * 40;
        //Example: 
        //str = 40
        //spell{1} = 40
        //spell{2} = 80
        //spell{3} = 120

        // + aoe size через скобочки
    },

    Feet()
    {
        //превратить num в футы
    },
}