import { createStore } from 'vuex';

const store = createStore({
  state: {
    items: [],
    operators: [],
    borrowSummary: [],
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    setOperators(state, operators) {
      state.operators = operators;
    },
    setBorrowSummary(state, summary) {
      state.borrowSummary = summary;
    },
  },
  actions: {
    async fetchItems({ commit }) {
      const response = await fetch('/api/items');
      const data = await response.json();
      commit('setItems', data);
    },
    async fetchOperators({ commit }) {
      const response = await fetch('/api/operators');
      const data = await response.json();
      commit('setOperators', data);
    },
    async fetchBorrowSummary({ commit }) {
      const response = await fetch('/api/borrowSummary');
      const data = await response.json();
      commit('setBorrowSummary', data);
    },
  },
  getters: {
    getItems: (state) => state.items,
    getOperators: (state) => state.operators,
    getBorrowSummary: (state) => state.borrowSummary,
  },
});

export default store;