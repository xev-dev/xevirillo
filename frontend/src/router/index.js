import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "menu",
    component: () => {
      return import("@/views/MenuView.vue");
    },
  },
  {
    path: "/room-list",
    name: "roomList",
    component: () => {
      return import("@/views/RoomList.vue");
    },
  },
  {
    path: "/game-room",
    name: "gameRoom",
    component: () => {
      return import("@/views/GameRoom.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
