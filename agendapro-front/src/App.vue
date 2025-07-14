<script setup lang="ts">
import Home from './views/HomeView.vue';
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <main>
    <TheHeader />
    <Home />
    <router-view />
  </main>
</template>
