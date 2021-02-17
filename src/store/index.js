import projects from './modules/projects';
import responsibles from './modules/responsibles';
import beneficiaries from './modules/beneficiaries';
import statuses from './modules/statuses';
import priorities from './modules/priorities';
import participants from './modules/participants';

import { createStore } from 'vuex';

export default createStore({
  // state: {
  //   projects: []
  // },
  // getters: {
  //   allProjects(state) {
  //     return state.projects;
  //   }
  // },
  // mutations: {
  //   setProjects(state, projects) {
  //     state.projects = projects;
  //   }
  // },
  // actions: {
  //   setProjects({ commit }){
  //     axios.get('./projects.json')
  //       .then(response => {
  //       commit('setProjects', response.data);
  //       console.log(response);
  //     }).catch(response => console.log(response));
  //   }
  // },
  modules: {
    projects,
    responsibles,
    beneficiaries,
    statuses,
    priorities,
    participants
  }
})