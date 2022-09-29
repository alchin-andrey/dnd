import { createStore } from 'vuex';


// import genderStore from './gender';
import gender from './modules/genderMod';
import race from './modules/raceMod';
import color from './modules/colorMod';
import lang from './modules/langMod';


const store = createStore({
  modules: {
    // gender: genderStore,
    gender,
    race,
    color,
    lang,

  },
});

export default store;
