import Vue from 'vue'
import Vuex from 'vuex'
import { loginApi, isloginApi } from './api/user'
import util from './libs/local'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nickname: '',
    showloading: true,
  },
  mutations: {
    setnickname(state, payload) {
      state.nickname = payload;
    },
    showloading(state) {
      state.showloading = true;
    },
    hideloading(state) {
      state.showloading = false;
    }
  },
  actions: {
    // 登录的actions
    async tologin({ commit }, { user, pass }) {
      // actions提交登录
      const { token, nickname } = await loginApi(user, pass)
      // token 存在本地存储
      util.setlocal('token', token);
      commit('setnickname', nickname)
    },
    // 验证是否登录的action
    async valilogin({ commit }) {
      const { nickname, token } = await isloginApi();
      commit('setnickname', nickname);
      util.setlocal('token', token)
      return nickname !== undefined;
    }
  },
})

