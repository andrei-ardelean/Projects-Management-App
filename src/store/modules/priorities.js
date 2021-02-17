import axios from "axios";

const state = {
    priorities: []
};

const getters = {
    allPriorities(state) {
        return state.priorities;
    }
};

const mutations = {
    setPriorities(state, priorities) {
        state.priorities = priorities;
    }
};

const actions = {
    async fetchPriorities({ commit }){
        const response = await axios.get('http://localhost:8080/priorities.json');
        commit('setPriorities', response.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}