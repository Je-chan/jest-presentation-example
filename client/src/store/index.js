import { createStore } from 'vuex';
import grew from './grew';
import about from './about';
export default createStore({
  modules: {
    grew,
    about,
  },
});
