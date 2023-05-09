<template>
  <div v-if="!this.$store.state.menu.isCreatingRoom" class="buttonWrapper">
    <button
      @click="() => this.$store.commit('toggleButtons')"
      class="menuButton blueButton"
      :disabled="$store.state.nickName.length === 0"
    >
      {{ $t("Create room") }}
    </button>

    <button
      class="menuButton redButton"
      :disabled="$store.state.nickName.length === 0"
      @click="() => this.$router.push({ name: 'roomList' })"
    >
      {{ $t("Join room") }}
    </button>
  </div>

  <div v-else class="buttonWrapper">
    <button
      class="menuButton blueButton"
      :disabled="$store.state.roomCode.length === 0"
      @click="() => this.$router.push({ name: 'gameRoom' })"
    >
      {{ $t("Confirm") }}
    </button>

    <button class="menuButton redButton" @click="resetInfoAndToggleMenu">
      {{ $t("Back") }}
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    resetInfoAndToggleMenu: function () {
      this.$store.commit("resetInfo");
      this.$store.commit("toggleButtons");
    },
  },
};
</script>
