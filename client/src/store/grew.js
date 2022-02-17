import axios from 'axios';

const _defaultMessage = 'Search for the grew!';

export const _nameLower = (grewName) => {
  return grewName.toLowerCase();
};

export const _fetchGrewInfo = (payload) => {
  const { grewName, team, id } = payload;
  const name = grewName && _nameLower(grewName);
  const url = id
    ? `http://localhost:4000/grew-person/?id=${id}`
    : `http://localhost:4000/searching/?name=${name}&team=${team}`;

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export default {
  namespaced: true,

  state: () => ({
    grews: [],
    message: _defaultMessage,
    loading: false,
    searchedGrew: {},
  }),

  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    resetGrews(state) {
      state.grews = [];
      state.message = _defaultMessage;
      state.loading = false;
    },
  },

  actions: {
    async searchGrew({ state, commit }, payload) {
      if (state.loading) return;
      commit('updateState', {
        message: '',
        loading: true,
      });

      try {
        const res = await _fetchGrewInfo({
          ...payload,
        });
        commit('updateState', {
          grews: [...res.data],
        });
      } catch (message) {
        commit('updateState', {
          grews: [],
          message,
        });
      } finally {
        commit('updateState', {
          loading: false,
        });
      }
    },

    async searchGrewId({ state, commit }, payload) {
      if (state.loading) return;
      commit('updateState', {
        searchedGrew: {},
        loading: true,
      });
      try {
        const res = await _fetchGrewInfo({
          ...payload,
        });
        commit('updateState', {
          searchedGrew: res.data,
        });
      } catch (err) {
        commit('updateState', {
          searchedGrew: {},
        });
      } finally {
        commit('updateState', {
          loading: false,
        });
      }
    },
  },
};
