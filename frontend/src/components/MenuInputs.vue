<template>
  <input
    v-if="!$store.state.menu.isCreatingRoom"
    v-model="$store.state.nickName"
    type="text"
    class="menuInput"
    :placeholder="$t('Insert name')"
  />
  <input
    v-else
    v-model="$store.state.roomCode"
    type="text"
    class="menuInput"
    :placeholder="$t('Code room')"
  />
</template>
