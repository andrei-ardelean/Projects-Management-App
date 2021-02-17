import axios from "axios";

const state = {
    beneficiaries: []
};

const getters = {
    allBeneficiaries(state) {
        return state.beneficiaries;
    }
};

const mutations = {
    setBeneficiaries(state, beneficiaries) {
        state.beneficiaries = beneficiaries;
    }
};

const actions = {
    async fetchBeneficiaries({ commit }){
        const response = await axios.get('http://localhost:8080/beneficiaries.json');
        commit('setBeneficiaries', response.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}