import { createStore } from 'vuex'

import attributesStore from './attributes';
import genderStore from './gender';

const store = createStore({
  modules: {
    attributes: attributesStore,
    gender: genderStore,
  },
});

export default store
