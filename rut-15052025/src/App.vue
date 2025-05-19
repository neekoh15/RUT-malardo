<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderAFIP from "@/components/HeaderAFIP.vue";
import FooterAFIP from "@/components/FooterAFIP.vue";
</script>

<template>
  <header>
    <HeaderAFIP></HeaderAFIP>
  </header>

  <RouterView />

  <footer>
    <FooterAFIP></FooterAFIP>
  </footer>
  
</template>

<style>
* {
  font-family: Roboto;
}
</style>
