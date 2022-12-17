<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
</script>

<template>
  <div id="app">
    <div v-if="$route.path != '/'">
      <Nav />
    </div>
    <div v-if="$route.path != '/'" class="responsive">
      <RouterView />
    </div>
    <div v-else>
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">

html {
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}

.responsive {
  margin-left: 3.5rem;

  @media (max-width: 768px) {
    margin-left: 0rem;
    margin-bottom: 3rem;
    margin-top: 0rem;
  }
}
</style>
