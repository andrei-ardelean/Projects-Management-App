import axios from "axios";

const state = {
    responsibles: []
};

const getters = {
    allResponsibles(state) {
        return state.responsibles;
    }
};

const mutations = {
    setResponsibles(state, responsibles) {
        state.responsibles = responsibles;
    }
};

const actions = {
    async fetchResponsibles({ commit }){
        const response = await axios.get('http://localhost:8080/responsibles.json');
        commit('setResponsibles', response.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}