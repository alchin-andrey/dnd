import { createStore } from 'vuex'

import attributesStore from './attributes';

const store = createStore({
  modules: {
    attributes: attributesStore,
  },
});

export default store
