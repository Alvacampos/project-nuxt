import carsData from '@/utils/carsData';
import helpData from '@/utils/helpData';

export const state = () => ({
    loading: true,
    favorite: 0,
    cars: [],
    criticalError: false,
    helpData: {}
});

export const mutations = {
  favorite(state, data) {
    state.favorite = data;
  },
  loadCars(state, data) {
    state.cars = data.map((car) => {
      return car;
    });
  },
  loadHelp(state, data) {
    state.helpData = data;
  },
  loadingSpinner(state) {
    state.loading = false
    
  },
  loadError(state, data) {
    state.criticalError = data;
  }
};

export const actions = {
  async getCarData({ commit }) {
    try {
      commit('loadCars', await carsData);
      commit("loadingSpinner");
    } catch (e) {
      commit('loadError', true);
      commit("loadingSpinner");
      console.log(e);
    }
  },
  async getHelpData({ commit }) {
    try {
      commit('loadHelp', await helpData);
    } catch (e) {
      console.log(e);
    }
  },
  favorite({ commit }, data) {
    commit('favorite', data);
  }
};
