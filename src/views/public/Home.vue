<template>
  <div>
    <div class="flex justify-center pt-20">
      <div class="link1 mr-4 lg:mr-32 whitespace-nowrap">
        <router-link to="/about">
          <span>who i am</span>
        </router-link>
      </div>
      <div class="link2 mr-4 lg:mr-32 whitespace-nowrap">
        <router-link to="/code">
          <span>my tools</span>
        </router-link>
      </div>
      <div class="link3 mr-4 lg:mr-32 whitespace-nowrap">
        <router-link to="/other">
          <span>what i do</span>
        </router-link>
      </div>
    </div>
    <div id="title" class="text-center">
      <span>here begins your journey through my mind</span>
    </div>
    <div class="description pt-32">feel free to explore</div>
    <div class="description pt-8">
      you never know what you might find<span class="dot1">.</span
      ><span class="dot2">.</span><span class="dot3">.</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  transition: 2s ease;
}
#title {
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  padding-top: 7%;

  @media (max-width: 900px) {
    font-size: 4vw;
    letter-spacing: 5px;
    padding-top: 30%;
  }
  span {
    background: -webkit-linear-gradient(var(--primary), var(--dark));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.description {
  font-weight: 200;
  font-size: 40px;
  letter-spacing: 5px;
  display: flex;
  justify-content: center;
  color: var(--dark);

  @media (max-width: 900px) {
    font-size: 4vw;
    font-weight: 300;
    letter-spacing: 3px;
  }
}

.dot1 {
  animation: drop 140s 4.2s linear infinite;
  -webkit-font-smoothing: antialiased;
}
.dot2 {
  animation: drop 120s 3.7s linear infinite;
  -webkit-font-smoothing: antialiased;
}
.dot3 {
  animation: drop 100s 3.5s linear infinite;
  -webkit-font-smoothing: antialiased;
}

.link1 {
  margin-left: 25%;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 2px;
  color: var(--dark);
  text-decoration: overline 1px;
  opacity: 0;

  animation: appear 3s 2s forwards;
  -webkit-font-smoothing: antialiased;

  :hover {
    cursor: crosshair;
  }

  @media (max-width:900px) {
    font-size: 3vw;
  }
}
.link2 {
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 2px;
  color: var(--dark);
  text-decoration: overline 1px;
  opacity: 0;

  animation: appear 3s 3s forwards;
  -webkit-font-smoothing: antialiased;

  :hover {
    cursor: crosshair;
  }

  @media (max-width:900px) {
    font-size: 3vw;
  }
}
.link3 {
  margin-right: 25%;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 2px;
  color: var(--dark);
  text-decoration: overline 1px;
  opacity: 0;

  animation: appear 3s 4s forwards;
  -webkit-font-smoothing: antialiased;

  :hover {
    cursor: crosshair;
  }

  @media (max-width:900px) {
    font-size: 3vw;
  }
}
@keyframes drop {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(1000px);
  }
}

@keyframes appear {
  to {
    opacity: 1;
  }
}
</style>
