<template>
  <div
    class="topnav borderinset-x-0 top-0"
    :class="`${isExpanded ? 'is-expanded' : ''}`"
  >
    <ul class="menu flex flex-wrap mx-2">
      <li class="flex text-center">
        <button class="menu-toggle" @click="toggleMenu">
          <div class="logo-mobile">
            <img src="@/assets/logo.png" alt="Joshua develops" />
          </div>
        </button>
      </li>
      <li class="flex text-center">
        <a class="w-full py-2 mx-1"
          ><router-link class="button justify-center" to="/dashboard">
            <span class="icons pulse py-0.5">
              <Icon icon="carbon:data-vis-1" />
            </span> </router-link
        ></a>
      </li>
      <li class="flex text-center">
        <a class="w-full py-2 mx-1"
          ><router-link class="button justify-center" to="/settings">
            <span class="icons rotate py-0.5">
              <Icon icon="mingcute:settings-5-line" />
            </span> </router-link
        ></a>
      </li>
      <li class="flex text-center">
        <a class="w-full py-2 mx-1"
          ><div class="button justify-center">
            <span class="icons pulse py-0.5">
              <Icon icon="uiw:logout" />
            </span></div
        ></a>
      </li>
    </ul>
  </div>

  <div class="bottomnav borderinset-x-0 bottom-0 fixed">
    <ul class="menu flex flex-wrap mx-2">
      <li class="flex text-center">
        <a class="w-full py-2 mx-1"
          ><router-link class="button justify-center" to="/">
            <span class="icons pulse py-0.5">
              <Icon icon="nimbus:home" />
            </span> </router-link
        ></a>
      </li>
      <li class="flex text-center">
        <a class="w-full py-2 mx-1"
          ><router-link class="button justify-center" to="/about">
            <span class="icons pulse py-0.5">
              <Icon icon="ooui:moon" />
            </span> </router-link
        ></a>
      </li>
      <li class="flex text-center">
        <a class="w-full py-2 mx-1"
          ><router-link class="button justify-center" to="/code">
            <span class="icons pulse py-0.5">
              <Icon icon="ph:code-simple-light" />
            </span> </router-link
        ></a>
      </li>
      <li class="flex text-center">
        <a class="w-full py-2 mx-1"
          ><router-link class="button justify-center" to="/other">
            <span class="icons pulse py-0.5">
              <Icon icon="fluent:brain-circuit-20-regular" />
            </span> </router-link
        ></a>
      </li>
      <li class="flex text-center">
        <a class="w-full py-2 mx-1"
          ><router-link class="button justify-center" to="/profile">
            <span class="icons pulse py-0.5">
              <Icon icon="ph:user-light" />
            </span> </router-link
        ></a>
      </li>
    </ul>
  </div>

  <div class="sidenav float-left fixed">
    <aside :class="`${isExpanded ? 'is-expanded' : ''}`">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Joshua develops" />
      </div>

      <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="toggleMenu">
          <span class="icons-toggler">
            <Icon icon="ic:round-linear-scale" />
          </span>
        </button>
      </div>

      <h3>Menu</h3>
      <div class="menu pb-16">
        <router-link class="button" to="/">
          <span class="icons"> <Icon icon="nimbus:home" /> </span>
          <span class="text">home</span>
        </router-link>
        <router-link class="button" to="/about">
          <span class="icons"> <Icon icon="ooui:moon" /> </span>
          <span class="text">about</span>
        </router-link>
        <router-link class="button" to="/code">
          <span class="icons"> <Icon icon="ph:code-simple-light" /> </span>
          <span class="text">coding</span>
        </router-link>
        <router-link class="button" to="/other">
          <span class="icons">
            <Icon icon="fluent:brain-circuit-20-regular" />
          </span>
          <span class="text">other</span>
        </router-link>
      </div>
      <h3>account</h3>
      <div class="menu">
        <router-link class="button" to="/profile">
          <span class="icons"> <Icon icon="ph:user-light" /> </span>
          <span class="text">profile</span>
        </router-link>
        <router-link class="button" to="/dashboard">
          <span class="icons"> <Icon icon="carbon:data-vis-1" /> </span>
          <span class="text">dashboard</span>
        </router-link>
      </div>

      <div class="flex"></div>

      <div class="menu">
        <router-link class="button" to="/settings">
          <span class="icons"> <Icon icon="mingcute:settings-5-line" /> </span>
          <span class="text">settings</span>
        </router-link>
        <div class="button">
          <span class="icons"> <Icon icon="uiw:logout" /> </span>
          <span class="text">logout</span>
        </div>
      </div>
    </aside>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
import { Icon } from "@iconify/vue";

const isExpanded: Ref<boolean> | boolean = ref(
  localStorage.getItem("is-expanded") === "true"
);

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;

  localStorage.setItem("is-expanded", "isExpanded.value");
};
</script>

<style lang="scss" scoped>
.topnav {
  width: 4.5rem;
  overflow: hidden;
  float: right;
  position: sticky;
  height: 3rem;
  border-bottom: 1px solid var(--dark);
  border-bottom-left-radius: 30px;

  background-color: var(--dark);
  color: var(--light);

  transition: 0.4s ease-out;

  .flex {
    flex: 1 1 0;
    margin-left: 5px;
    margin-right: 5px;
  }

  .menu {
    /* border-right: 2px dotted var(--primary);
    border-left: 2px dotted var(--primary);
    border-radius: 30px; */
    padding-left: 4px;
    padding-right: 4px;
    .logo-mobile {
      width: 3rem;
      padding-top: 2px;
    }
    .button {
      outline: none;
      display: flex;
      text-decoration: none;

      background-color: var(--dark);

      .icons {
        font-size: 1.5rem;
        opacity: 0;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &.router-link-exact-active {
        text-decoration: none;
        padding-top: 2px;
        border-top: 3px solid var(--dark-alt);
        transition: 0.2s ease-out;

        .icons {
          color: var(--primary);
          -webkit-animation-duration: 0.75s;
          animation-duration: 0.75s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        @-webkit-keyframes rotate {
          0% {
            -webkit-transform: rotate(-180deg);
          }
          50% {
            -webkit-transform: rotate(180deg);
          }
          100% {
            -webkit-transform: rotate(0deg);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(-180deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .rotate {
          -webkit-animation-name: rotate;
          animation-name: rotate;
        }
        @-webkit-keyframes pulse {
          0% {
            -webkit-transform: scale(1);
          }
          50% {
            -webkit-transform: scale(1.3);
          }
          100% {
            -webkit-transform: scale(1);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }

        .pulse {
          -webkit-animation-name: pulse;
          animation-name: pulse;
        }
      }
    }
  }

  &.is-expanded {
    width: 56%;

    @media (max-width: 365px) {
      width: 75%;
    }

    .menu .logo-mobile {
      padding-top: 0px;
    }

    .button .icons {
      opacity: 1;
      transition: 1.5s ease-out;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
}
.bottomnav {
  width: 100%;
  height: 3rem;
  border-color: var(--dark-alt);

  background-color: var(--dark);
  color: var(--light);

  border-top: 0.5px solid var(--primary);

  .flex {
    flex: 1 1 0;
    margin-left: 5px;
    margin-right: 5px;
  }

  .menu {
    padding-left: 4px;
    padding-right: 4px;
    .button {
      outline: none;
      display: flex;
      text-decoration: none;

      background-color: var(--dark);

      .icons {
        font-size: 1.5rem;
        color: var(--light);
        transition: 0.5s ease-out;
        padding-left: 0px;
      }
      &.router-link-exact-active {
        text-decoration: none;
        padding-top: 2px;
        border-top: 3px solid var(--dark-alt);
        transition: 0.2s ease-out;

        .icons {
          color: var(--primary);
          -webkit-animation-duration: 0.75s;
          animation-duration: 0.75s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        @-webkit-keyframes rotate {
          0% {
            -webkit-transform: rotate(-180deg);
          }
          50% {
            -webkit-transform: rotate(180deg);
          }
          100% {
            -webkit-transform: rotate(0deg);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(-180deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .rotate {
          -webkit-animation-name: rotate;
          animation-name: rotate;
        }
        @-webkit-keyframes pulse {
          0% {
            -webkit-transform: scale(1);
          }
          50% {
            -webkit-transform: scale(1.3);
          }
          100% {
            -webkit-transform: scale(1);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }

        .pulse {
          -webkit-animation-name: pulse;
          animation-name: pulse;
        }
      }
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
}
.sidenav {
  @media (max-width: 768px) {
    display: none;
  }
  float: left;

  aside {
    display: flex;
    flex-direction: column;
    width: 3.5rem;
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.4s ease-out;

    .flex {
      flex: 1 1 0;
    }

    .logo {
      transition: 0.7s ease-out;
      width: 3.5rem;
      margin-bottom: 1rem;

      img {
        margin-left: -1rem;
      }
    }

    .menu-toggle-wrap {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;

      position: relative;
      top: 0;
      transition: 0.7s ease-out;

      .menu-toggle {
        transition: 0.7s ease-out;

        .icons-toggler {
          transition: 0.3s ease-out;
          font-size: 1.5rem;
          color: var(--light);
        }

        &:hover {
          .material-symbols-outlined {
            color: var(--primary);
            transition: 0.3s ease-out;
            transform: translateX(0.5rem);
          }
        }
      }
    }

    h3,
    .button .text {
      opacity: 0;
      transition: 0.5s ease-out;
    }

    h3 {
      color: var(--grey);
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }

    .menu {
      margin: 0 -1rem;

      .button {
        display: flex;
        align-items: center;
        text-decoration: none;

        padding: 0.5rem 1rem;
        transition: 0.2s ease-out;

        .icons {
          font-size: 1.5rem;
          color: var(--light);
          transition: 0.5s ease-out;
        }

        .text {
          color: var(--light);
          transition: 0.5s ease-out;
          font-size: 1rem;
        }

        &:hover,
        &.router-link-exact-active {
          background-color: var(--dark-alt);

          .icons,
          .text {
            color: var(--primary);
          }
        }

        &.router-link-exact-active {
          border-right: 5px solid var(--primary);
        }
      }
    }

    &.is-expanded {
      width: var(--sidebar-width);
      box-shadow: 0 0 20px 0 var(--dark);

      .logo {
        width: 100%;
        margin-bottom: 1rem;
      }

      .menu-toggle-wrap {
        top: 0rem;

        .menu-toggle {
          transform: rotate(-180deg);
        }
      }

      h3,
      .button .text {
        opacity: 1;
        transition: 0.8s ease-out;
      }

      .button {
        .icons {
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
