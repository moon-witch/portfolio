<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";

//TODO: 
//add code samples
//add auth + login page + supabase intergration + user profile
//bring all locales into locales file and use i18n
//simplify image imports
//redo color scheme of general theme
//rework responsiveness of cards on medium size devices
</script>

<template>
  <div id="app">
    <div
      v-if="$route.path != '/' && $route.path != '/home'"
      class="nav-transition"
    >
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

  @media (max-width: 768px) {
    -webkit-animation: smooth 1s ease-in;
    -moz-animation: smooth 1s ease-in;
    -o-animation: smooth 1s ease-in;
    -ms-animation: smooth 1s ease-in;
    animation: smooth 1s ease-in;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;

  @media (max-width:768px) {
    transition: opacity 0s ease;
  }
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
