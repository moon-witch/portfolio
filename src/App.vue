<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
</script>

<template>
  <div id="app">
    <div v-if="$route.path != '/' && $route.path != '/home'" class="nav-transition">
      <Nav />
    </div>
    <div>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss">
html {
  min-height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}

.nav-transition {
  opacity: 1;
  -webkit-animation: smooth 3s ease-in;
  -moz-animation: smooth 3s ease-in;
  -o-animation: smooth 3s ease-in;
  -ms-animation: smooth 3s ease-in;
  animation: smooth 3s ease-in;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@-webkit-keyframes smooth {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes smooth {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
