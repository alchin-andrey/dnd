import { createStore } from 'vuex'

import attributesStore from './attributes';
import genderStore from './gender';
import racesStore from './races';

const store = createStore({
  modules: {
    attributes: attributesStore,
    gender: genderStore,
    races: racesStore,
  },
});

export default store
