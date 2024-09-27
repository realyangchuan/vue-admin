<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <KeepAlive>
      <component :is="Component" :key="route.fullPath" />
    </KeepAlive>
  </RouterView>
</template>

<style>
:root {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
