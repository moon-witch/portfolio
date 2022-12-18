<template>
  <div class="md:mx-32 lg:mx-36 pb-20 lg:pb-0">
    <h3 class="head text-center py-16">the tools i use</h3>
    <h3 class="text text-center lg:text-left lg:ml-28">languages</h3>
    <div
      class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5"
    >
      <InfoCard
        :image="JSHero"
        :name="JSName"
        :description="JSDescription"
        :additional="JSAdditional"
      />
      <InfoCard
        :image="TSHero"
        :name="TSName"
        :description="TSDescription"
        :additional="TSAdditional"
      />
      <InfoCard
        :image="PyHero"
        :name="PyName"
        :description="PyDescription"
        :additional="PyAdditional"
      />
    </div>
    <h3 class="text text-center lg:text-left lg:ml-28">frameworks</h3>
    <div
      class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-5"
    >
      <InfoCard
        :image="VueHero"
        :name="vueName"
        :description="vueDescription"
        :additional="vueAdditional"
      />
      <InfoCard
        :image="NuxtHero"
        :name="nuxtName"
        :description="nuxtDescription"
        :additional="nuxtAdditional"
      />
      <InfoCard
        :image="TWHero"
        :name="TWName"
        :description="TWDescription"
        :additional="TWAdditional"
      />
      <InfoCard
        :image="BSHero"
        :name="BSName"
        :description="BSDescription"
        :additional="BSAdditional"
      />
      <InfoCard
        :image="MHero"
        :name="MName"
        :description="MDescription"
        :additional="MAdditional"
      />
    </div>
    <h3 class="text text-center lg:text-left lg:ml-28">libraries</h3>
    <div
      class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5"
    >
      <InfoCard
        :image="T3Hero"
        :name="T3Name"
        :description="T3Description"
        :additional="T3Additional"
      />
      <InfoCard
        :image="HUIHero"
        :name="HUIName"
        :description="HUIDescription"
        :additional="HUIAdditional"
      />
        <InfoCard
          :image="CHero"
          :name="CName"
          :description="CDescription"
          :additional="CAdditional"
        />
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";
import JSHero from "@/assets/JShero.png";
import TSHero from "@/assets/TShero.png";
import PyHero from "@/assets/Pyhero.png";
import VueHero from "@/assets/VueJShero.png";
import NuxtHero from "@/assets/Nuxthero.png";
import BSHero from "@/assets/BShero.png";
import TWHero from "@/assets/TWhero.png";
import MHero from "@/assets/Mhero.webp";
import T3Hero from "@/assets/T3hero.jpg";
import HUIHero from "@/assets/HUIhero.jpg";
import CHero from "@/assets/Chero.png";

const JSName = "JavaScript";
const JSDescription =
  "JavaScript is a powerful programming language that can add interactivity to a website.";
const JSAdditional =
  "It's used to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more.";

const TSName = "TypeScript";
const TSDescription =
  "TypeScript is a strongly typed programming language that builds on JavaScript.";
const TSAdditional =
  "It adds additional syntax to JavaScript to support a tighter integration with your editor.";

const PyName = "Python";
const PyDescription =
  "Python is a dynamically-typed high-level, general-purpose programming language that is often used in ML/Deep Learning.";
const PyAdditional = " Its design philosophy emphasizes code readability.";

const vueName = "Vue.js";
const vueDescription =
  "Vue is an approachable, performant and versatile framework for building web user interfaces.";
const vueAdditional = "The portfolio you are on is actually built with Vue!";

const nuxtName = "Nuxt";
const nuxtDescription =
  "Nuxt is a framework built on Vue.js to provide an easy way to create server-side rendered websites.";
const nuxtAdditional = "It simplifies many systems.";

const TWName = "TailwindCSS";
const TWDescription = "Tailwind is a utility-first CSS framework.";
const TWAdditional =
  "It provides the developer with the freedom to design specialized interfaces.";

const BSName = "Bootstrap";
const BSDescription =
  "Bootstrap is a powerful, extensible, and feature-packed frontend toolkit.";
const BSAdditional =
  "Most developers are familiar with Bootstrap and its features.";

const MName = "Mocha.js";
const MDescription =
  "Mocha is a feature-rich JavaScript test framework running node.js.";
const MAdditional =
  "Mocha tests run serially, allowing for flexible and accurate reporting.";

const T3Name = "Three.js";
const T3Description =
  "Three.js is an easy to use, lightweight, cross-browser, general purpose 3D library.";
const T3Additional = "It makes animations a breeze to create.";

const HUIName = "HeadlessUI";
const HUIDescription = "Completely unstyled, fully accessible UI components";
const HUIAdditional = "Designed to integrate beautifully with Tailwind CSS.";

const CName = "Chai";
const CDescription = "Chai is a BDD / TDD assertion library for node.js.";
const CAdditional =
  "It can be delightfully paired with any JavaScript testing framework.";
</script>

<style scoped lang="scss">
.head {
  color: var(--primary);
  font-weight: 300;
  font-size: 30px;
  letter-spacing: 3px;
}
.text {
  color: var(--primary);
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 3px;
}
</style>
