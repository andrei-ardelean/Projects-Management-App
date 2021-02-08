import axios from "axios";

import { createStore } from 'vuex';

export default createStore({
  state: {
    projects: []
  },
  getters: {
    allProjects(state) {
      return state.projects;
    }
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    }
  },
  actions: {
    setProjects({ commit }){
      axios.get('./projects.json')
        .then(response => {
        commit('setProjects', response.data);
      });
    }
  },
  modules: {}
})

// // e bine dar trebuie pus pe vue 3 & axios wrapper
// export const store = new Vuex.Store({
//   state: {
//     // users: [
//     //     { id: 1, name: 'name1', username: 'username1', email: 'mail1@yahoo.com'},
//     //     { id: 2, name: 'name2', username: 'username2', email: 'mail2@yahoo.com'},
//     //     { id: 3, name: 'name3', username: 'username3', email: 'mail3@yahoo.com'},
//     // ]
//     users: [],
//   },
//   getters: {
//     users: (state) => {
//       return state.users;
//     }, 
//   },
//   mutations: {
//     set_users(state, users) {
//       state.users = users;
//     },
//   },
//   actions: {
//     load_users({ commit }) {
//       axios
//         .get("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.data)
//         .then((users) => {
//           console.log(users);
//           commit("set_users", users);
//         });
//     },
//   },
// });

