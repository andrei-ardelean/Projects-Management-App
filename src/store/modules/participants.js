import axios from "axios";

const state = {
    participants: []
};

const getters = {
    allParticipants(state) {
        return state.participants;
    }
};

const mutations = {
    setParticipants(state, participants) {
        state.participants = participants;
    }
};

const actions = {
    async fetchParticipants({ commit }){
        const response = await axios.get('http://localhost:8080/participants.json');
        commit('setParticipants', response.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}