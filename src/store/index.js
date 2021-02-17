import projects from './modules/projects';
import responsibles from './modules/responsibles';
import beneficiaries from './modules/beneficiaries';
import statuses from './modules/statuses';
import priorities from './modules/priorities';
import participants from './modules/participants';

import { createStore } from 'vuex';

export default createStore({
  modules: {
    projects,
    responsibles,
    beneficiaries,
    statuses,
    priorities,
    participants
  }
})