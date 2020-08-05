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
    console.log("mutation");
    state.loading = false
    state.cars = data.map((car) => {
      return car;
    });
  },
  loadHelp(state, data) {
    state.helpData = data;
  },
  loadError(state, data) {
    state.criticalError = data;
  }
};

export const actions = {
  async getCarData({ commit }) {
    console.log("ACTION");
    try {
      commit('loadCars', await carsData);
    } catch (e) {
      commit('loadError', true);
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
