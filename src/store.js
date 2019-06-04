import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { loginApi } from './api/user'
import util from "./libs/local";

export default new Vuex.Store({
  state: {
    nickname: "",
  },
  mutations: {},
  actions: {
    async tologin({ commit }, { user, pass }) {
      // actions提交登录
      const res = await loginApi(user, pass)
      // token 存在本地存储
      util.setlocal('token', res.token)
    }
  }
});
