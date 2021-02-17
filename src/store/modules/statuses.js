import axios from "axios";

const state = {
    statuses: []
};

const getters = {
    allStatuses(state) {
        return state.statuses;
    }
};

const mutations = {
    setStatuses(state, statuses) {
        state.statuses = statuses;
    }
};

const actions = {
    async fetchStatuses({ commit }){
        const response = await axios.get('http://localhost:8080/statuses.json');
        commit('setStatuses', response.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}