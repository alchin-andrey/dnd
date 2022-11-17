import { createStore } from 'vuex';

import dic from './modules/dicMod';


// import genderStore from './gender';
import gender from './modules/genderMod';
import race from './modules/raceMod';
import color from './modules/colorMod';
import lang from './modules/langMod';
import race_page from './modules/pageRace';

import pages from './pages/pages';

import MY from './modules/MyMod';


const store = createStore({
  modules: {
    // gender: genderStore,
    gender,
    race,
    color,
    lang,

    
    pages,
    // pages
    race_page,
    MY,
    dic,
  },
});

export default store;
