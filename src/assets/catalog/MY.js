
export default {
	//Key selections
	name: "Байрактар",

  _spells_save: {},
  settings: {},
  _settings_race: {},
  _settings_class_old: {},
  _settings_class: {},
  _settings_alignment: {},
  

  race_name: "gnome",
  ethnos_name_save: {},

  class_name: "rogue",
  backstory_name: "back_urchin",
	level: 1,

	//Character
	alignment: "fluid_neutral",
	gender: {
		phisiological: "male",
		feel: "cisgender",
		look: "as_phisiological",
		attraction: "heterosexual",
	},
	faith: null,

	personality: null,
	bonds: null,
	flaws: null,
	appearance: null,
	story: null,
  main_feature: "",
  ideals: "",

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
		vision_night: null,
	},

	//Владения - с чем умеешь обращаться
	proficiencies: {
		languages: null,
		weapons: null,
		armor: null,
		tools: null,
	},

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

	//Оружие - предметьі с уроном
	weapons: null,

	wallet: {
		gold: 0,
		silver: 0,
		copper: 0,
	},

	//Conditions
	if_no_heavy_armor: null,
};
