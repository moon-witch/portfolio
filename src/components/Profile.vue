<template>
  <div class="pt-16 mb-16 lg:mb-0">
    <!-- <div
          class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"
        >
          <div>
            <p class="font-bold text-gray-700 text-xl">22</p>
            <p class="text-gray-400">Friends</p>
          </div>
          <div>
            <p class="font-bold text-gray-700 text-xl">10</p>
            <p class="text-gray-400">Photos</p>
          </div>
          <div>
            <p class="font-bold text-gray-700 text-xl">89</p>
            <p class="text-gray-400">Comments</p>
          </div>
        </div> -->
    <div class="flex">
      <div
        class="w-52 h-52 bg-indigo-100 mx-auto rounded-full inset-x-0 top-0 flex items-center justify-center text-indigo-500"
      >
        <img src="@/assets/profilepic.jpg" class="rounded-full profilepic"/>
      </div>
    </div>

    <div class="links mt-4">
      <div class="text-center mx-12 custom-link">
        <button class="hoverclass">
          <a href="https://github.com/moon-witch" target="_blank">
            <Icon icon="uim:github-alt" height="40" />
          </a>
        </button>
      </div>
      <div class="text-center mx-12 custom-link">
        <button class="hoverclass">
          <a
            href="https://de.linkedin.com/in/joshua-langenbach-873a19252/en"
            target="_blank"
          >
            <Icon icon="mdi:linkedin" height="40" />
          </a>
        </button>
      </div>
    </div>

    <!-- <div
          class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center"
        >
          <button
            class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            Connect
          </button>
          <button
            class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            Message
          </button>
        </div> -->

    <div class="mt-12 text-center pb-18">
      <h1 class="text-xl md:text-4xl text">
        Joshua Langenbach, <span class="font-light text-alt">28</span>
      </h1>
      <p class="font-light text mt-3">Hamburg, Germany</p>

      <p class="mt-4 text-alt">Software Engineer</p>

      <div class="text-center mt-8 md:mx-24">
        <div class="mb-4 md:ml-11">
          <span class="text text-center font-light mx-4"> Skills </span>
          <span class="text-alt text-center font-light">
            analytical thinking - managing teams - dedication - always improving
          </span>
        </div>
        <div class="md:mr-64">
          <span class="text text-center font-light mx-4"> Languages </span>
          <span class="text-alt text-center font-light">
            JavaScript - TypeScript - Python
          </span>
        </div>
      </div>

      <p class="text text-center font-light lg:px-16 py-8">
        I like to dream - and make dreams become reality.
      </p>
      <hr class="mx-4 lg:mx-60"/>
    </div>

    <div class="flex justify-between mt-4 lg:mx-60">
      <div class="lg:flex md:ml-32 lg:ml-0">
        <span
          class="text-2xl text text-center font-light lg:px-16 pt-4 ml-8 lg:ml-0"
        >
          values
        </span>
        <span class="text text-center font-light lg:px-16">
          <p>responsible use of technology</p>
          <p>freedom of speech</p>
          <p>climate activism</p>
        </span>
      </div>
      <div class="lg:flex md:mr-32 lg:mr-0">
        <span class="text text-center font-light lg:px-16">
          <p>artificial (general) intelligence</p>
          <p>human consciousness</p>
          <p>spirituality</p>
        </span>
        <span
          class="text-2xl text text-center font-light lg:px-16 pt-4 ml-16 lg:ml-0"
        >
          interests
        </span>
      </div>
    </div>
    <div class="flex justify-between mt-24 lg:mx-60">
      <div class="lg:flex md:ml-32 lg:ml-0">
        <span
          class="text-2xl text text-center font-light lg:px-12 pt-4 ml-8 lg:ml-0"
        >
          experience
        </span>
        <span class="text text-center font-light lg:px-16 ml-16 lg:ml-0">
          <p>SPAs - Web Apps - SSR</p>
          <p>APIs - mongoDB</p>
          <p>Test Driven Development</p>
        </span>
      </div>
      <div class="lg:flex mr-8 lg:mr-0 md:mr-44 lg:mr-0">
        <span class="text text-center font-light lg:px-36 mr-16 lg:mr-0">
          <p>inspire others</p>
          <p>be creative</p>
          <p>work together</p>
        </span>
        <span class="text-2xl text text-center font-light lg:px-16 pt-4">
          ethics
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<style scoped lang="scss">
.links {
  display: flex;
  justify-content: center;

  .custom-link {
    color: var(--primary);
  }
}

.hoverclass {
  :hover {
    cursor: crosshair;
  }
}
.text {
  color: var(--primary);
}

.text-alt {
  color: var(--light);
}
</style>
