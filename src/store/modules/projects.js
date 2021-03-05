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
    },
    addProject(state, project){
        state.projects.push(project);
    },
    updateProject(state, project){
        state.projects.splice(project.id - 1, 1, project);
    }
};

const actions = {
    async fetchProjects({ commit }){
        const response = await axios.get('http://localhost:8080/projects.json');
        commit('setProjects', response.data);
    },
    async addProject({ commit }, project){
        commit('addProject', project);
    },
    async updateProject({ commit }, project){
        commit('updateProject', project);
        // modify json file
        // const fs = require('fs');
        // const data = JSON.stringify(state.projects);
        // fs.writeFile('./projects.json', data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}