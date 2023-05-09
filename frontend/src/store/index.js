import socket from "@/socket";
import Vue from "vue";
import Vuex from "vuex";
import { game } from "./gameModule";
import { menu } from "./menuModule";
import createWebSocketPlugin from "./websocketStorePlugin";

Vue.use(Vuex);

const websocketPlugin = createWebSocketPlugin(socket);

export default new Vuex.Store({
  state: () => ({
    room: "",
    nickName: "",
    roomCode: "",
  }),
  mutations: {
    resetInfo(state) {
      state.nickName = "";
      state.roomCode = "";
    },
  },
  modules: {
    menu: menu,
    game: game,
  },
  plugins: [websocketPlugin],
});
