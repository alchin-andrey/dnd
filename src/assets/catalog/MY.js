import color from "@/assets/catalog/base_data/_colors.js";
// import races from "@/assets/catalog/base_data/step1_races.js";
import races from "@/assets/catalog/base_data/step1_races.js";
import classes from "@/assets/catalog/base_data/step2_classes";

const race_def = Object.values(races)[0];
const ethnos_def = Object.values(race_def.race_settings.ethnos)[0];
const class_def = Object.values(classes)[0];

export default {
	//Key selections
	name: null,
	race: race_def,
  race_name: race_def.name,
	ethnos: ethnos_def,
  ethnos_name: ethnos_def.name,
	class: class_def,
	subclass: null,
	backstory: null,
	level: 1,

	//Character
	alignment: null,
	gender: {
		phisiological: "male",
		feel: "cisgender",
		look: "as_phisiological",
		attraction: null,
	},
	faith: null,

	personality: null,
	ideals: null,
	bonds: null,
	flaws: null,
	appearance: null,
	story: null,

	//Race secondary adjustments
	age: null,
	weight: null,
	height: null,
  
	color_selected: {
		skin: null,
		eyes: null,
		hair: null,
	},

	//Calculated
	maturity: null,
	size: null,

	HP_max: null,
	HP_dice: null,

	mastery: null,

	qualities: {
		speed: null,
		// vision_day:null,
		vision_night: null,
		//initiative: null,
		//armor_class: null,
	},

	stats: {
		strength: {
			base: 0,
			bonus: 0,
			total: 0,
			mod: 0,
			save: 0,
		},

		dexterity: {
			base: 0,
			bonus: 0,
			total: 0,
			mod: 0,
			save: 0,
		},

		constitution: {
			base: 0,
			bonus: 0,
			total: 0,
			mod: 0,
			save: 0,
		},

		intelligence: {
			base: 0,
			bonus: 0,
			total: 0,
			mod: 0,
			save: 0,
		},

		wisdom: {
			base: 0,
			bonus: 0,
			total: 0,
			mod: 0,
			save: 0,
		},

		charisma: {
			base: 0,
			bonus: 0,
			total: 0,
			mod: 0,
			save: 0,
		},
	},

	skills: {
		athletics: { bonus: 0, mod: "strength" },

		acrobatics: { bonus: 0, mod: "dexterity" },

		sleight_of_hand: { bonus: 0, mod: "dexterity" },

		stealth: { bonus: 0, mod: "dexterity" },

		investigation: { bonus: 0, mod: "intelligence" },

		history: { bonus: 0, mod: "intelligence" },

		religion: { bonus: 0, mod: "intelligence" },

		arcana: { bonus: 0, mod: "intelligence" },

		nature: { bonus: 0, mod: "intelligence" },

		survival: { bonus: 0, mod: "wisdom" },

		perception: { bonus: 0, mod: "wisdom" },

		insight: { bonus: 0, mod: "wisdom" },

		medicine: { bonus: 0, mod: "wisdom" },

		animal_hanging: { bonus: 0, mod: "wisdom" },

		performance: { bonus: 0, mod: "charisma" },

		persuasion: { bonus: 0, mod: "charisma" },

		deception: { bonus: 0, mod: "charisma" },

		intimidation: { bonus: 0, mod: "charisma" },
	},

	//Владения - с чем умеешь обращаться
	proficiencies: {
		languages: null,
		weapons: null,
		armor: null,
		tools: null,
	},

  // proficiencies: {
	// 	armor: null,
	// 	weapons: null,
	// 	tools: null,
	// 	languages: null,
	// },

	//доп вьіборьі, как у полуєльфа. дальше у класса будет похожее, так что можно тут ожидать массивьі
custom_selected_race_page: {
  stats: [],
  skills: [],
  languages: [],
  spells: [],
},

	//Особенности - пассивньіе умения
	fines: null,

	//Заклинания - активньіе умения
	spells: null,

	inventory: null,

	armor: null,
	shield: null,

	//Оружие - предметы с уроном
	weapons: null,

	wallet: {
		gold: 0,
		silver: 0,
		copper: 0,
	},

	//Conditions
	if_no_heavy_armor: null,
};
