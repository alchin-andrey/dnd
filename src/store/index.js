import { createStore } from 'vuex';


// import genderStore from './gender';
import genderMod from './modules/genderMod';
import raceMod from './modules/raceMod';
import colorMod from './modules/colorMod';


const store = createStore({
  modules: {
    // gender: genderStore,
    gender: genderMod,
    race: raceMod,
    color: colorMod,

  },
});

export default store;