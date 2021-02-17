import axios from "axios";

const state = {
    projects: []
};

const getters = {
    allProjects(state) {
        return state.projects;
    }
};

const mutations = {
    setProjects(state, projects) {
        state.projects = projects;
    }
};

const actions = {
    async fetchProjects({ commit }){
        const response = await axios.get('http://localhost:8080/projects.json');
        commit('setProjects', response.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}