<template>
  <div class="menuContainer">
    <LanguageSelector></LanguageSelector>

    <ColorsTitle :text="$t('Welcome')"></ColorsTitle>

    <MenuInputs></MenuInputs>

    <MenuButtons></MenuButtons>
  </div>
</template>

<script>
import LanguageSelector from "@/components/LanguageSelector.vue";
import ColorsTitle from "@/components/common/ColorsTitle.vue";
import MenuButtons from "@/components/MenuButtons.vue";
import MenuInputs from "@/components/MenuInputs.vue";
export default {
  components: {
    LanguageSelector,
    ColorsTitle,
    MenuButtons,
    MenuInputs,
  },
};
</script>
