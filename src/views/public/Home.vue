<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div id="stars"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>
  <div id="title">
    <span>moonwitch</span>
  </div>
  <button id="gith">
    <a href="https://github.com/moon-witch" target="_blank">
      <Icon icon="uim:github-alt" height="60" />
    </a>
  </button>
  <button id="lnkd">
    <a
      href="https://de.linkedin.com/in/joshua-langenbach-873a19252/en"
      target="_blank"
    >
      <Icon icon="mdi:linkedin" height="60" />
    </a>
  </button>
</template>

<style lang="scss">
@function multiple-box-shadow($n) {
  $value: "#{random(2000)}px #{random(2000)}px #{var(--primary)}";
  @for $i from 2 through $n {
    $value: "#{$value} , #{random(2000)}px #{random(2000)}px #{var(--primary)}";
  }
  @return unquote($value);
}

$shadows-small: multiple-box-shadow(700);
$shadows-medium: multiple-box-shadow(200);
$shadows-big: multiple-box-shadow(100);

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: $shadows-small;
  animation: animStar 50s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
  }
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: $shadows-medium;
  animation: animStar 100s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $shadows-medium;
  }
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: $shadows-big;
  animation: animStar 150s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
  }
}

#title {
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;

  text-align: center;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;

  margin-top: -60px;
  padding-left: 10px;

  span {
    background: -webkit-linear-gradient(var(--primary), var(--dark));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

#gith {
  position: absolute;
  top: 55%;
  left: 53.5%;

  color: var(--primary);

  @media (max-width: 500px) {
    left: 58%;
  }
}

#lnkd {
  position: absolute;
  top: 55%;
  left: 43%;

  color: var(--primary);

  @media (max-width: 500px) {
    left: 25%;
  }
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}
</style>
