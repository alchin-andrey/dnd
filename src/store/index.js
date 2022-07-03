import { createStore } from 'vuex'

import statssStore from './stats';
import genderStore from './gender';
import racesStore from './races';
import ethnosesStore from './ethnoses';

const store = createStore({
  modules: {
    stats: statssStore,
    gender: genderStore,
    races: racesStore,
    ethnoses: ethnosesStore,
  },
});

export default store
