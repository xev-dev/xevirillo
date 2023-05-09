export const menu = {
  state: () => ({
    isCreatingRoom: false,
  }),
  mutations: {
    toggleButtons(state) {
      state.isCreatingRoom = !state.isCreatingRoom;
    },
  },
};
