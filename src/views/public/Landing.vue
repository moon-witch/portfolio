<script setup lang="ts">
import { Icon } from "@iconify/vue";

// TODO: Make everything fade into particles animation
</script>

<template>
  <div class="main-wrapper">
    <div id="stars-sm"></div>
    <div id="stars-md"></div>
    <div id="stars-lg"></div>
    <div class="text-wrapper">
      <div id="title" class="text-center">
        <span>moonwitch</span>
      </div>
      <div class="links mt-12">
        <div class="text-center mx-12 custom-link">
          <button class="hoverclass">
            <a href="https://github.com/moon-witch" target="_blank">
              <Icon icon="uim:github-alt" height="60"/>
            </a>
          </button>
        </div>
        <div class="text-center mx-12 custom-link">
          <button class="hoverclass">
            <a
              href="https://de.linkedin.com/in/joshua-langenbach-873a19252/en"
              target="_blank"
            >
              <Icon icon="mdi:linkedin" height="60" />
            </a>
          </button>
        </div>
      </div>
      <div id="enter" class="text-center mt-40">
        <button class="hoverclass">
          <router-link to="/home">
            <div class="enter-div">enter page</div>
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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

#stars-sm {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: $shadows-small;
  animation: universe 50s linear infinite;

  &:after {
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
  }
}

#stars-md {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: $shadows-medium;
  animation: universe 100s linear infinite;

  &:after {
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
  }
}

#stars-lg {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: $shadows-big;
  animation: universe 150s linear infinite;

  &:after {
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
  }
}

.main-wrapper {
  transition: 1s ease-in;
}

.text-wrapper {
  margin-top: 40%;

  @media (min-width: 1000px) {
    margin-top: 15%;
  }
}

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

#title {
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;

  span {
    background: -webkit-linear-gradient(var(--primary), var(--dark));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

#enter {
  font-weight: 300;
  font-size: 30px;
  color: var(--primary);

  transition: scale 1s ease-in;

  -webkit-animation: breathing 5s ease-out infinite normal;
  animation: breathing 5s ease-out infinite normal;
  -webkit-font-smoothing: antialiased;

  .enter-div {
    transition: 1s ease-in;
  }

  :hover {
    transform: scale(1.15);
    transition: 1s ease-in;
    cursor: crosshair;
  }
}

@keyframes universe {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-1000px);
  }
}

@-webkit-keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.1);
    transform: scale(0.9);
  }
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.1);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
}
</style>
