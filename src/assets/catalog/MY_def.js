
export default {
	//Key selections
	level: 1,
	name: null,
  
  race_name: null,
  ethnos_name_save: {},

  class_name: null,
  backstory_name: null,

	//Save
  _spells_save: {},
  
  _settings_race: {},

  _settings_class: {},
  _settings_class_old: {},

  _settings_alignment: {},

	_settings_custom_name: {},
  
	//Character
	alignment: "fluid_neutral",
	gender: {
		phisiological: "male",
		feel: "cisgender",
		look: "as_phisiological",
		attraction: "heterosexual",
	},

	//Race secondary adjustments
	age: null,
	weight: null,
	height: null,
  
	color_selected: {
		skin: null,
		eyes: null,
		hair: null,
	},

  stats_base_save: {},
	
	custom_photo: null,

	param: {
		user_name: false,
		user_photo: false,
		sett_photo: {
			size_cover: true,
			ratio: 1,
			position: 50,
		}
	}
};
