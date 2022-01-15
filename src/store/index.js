import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    ouEstLeLapin : '',
    lumieres : {
      salon : false,
      chambre : false,
    }
  },
  mutations: {
    setLumiere(state,piece){
      state.lumieres[piece] = !state.lumieres[piece];
    },
    setOuEstLeLapin(state,piece){
      state.ouEstLeLapin = piece;
    }
  },
  actions: {
  },
  modules: {
  }
})
