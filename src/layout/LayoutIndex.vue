<script setup lang="ts">
import LayoutNav from './LayoutNav.vue';
import LayoutSidebar from './LayoutSidebar.vue';
</script>

<template>
  <div>
    <LayoutNav />
    <LayoutSidebar />
    <RouterView />
  </div>
</template>
