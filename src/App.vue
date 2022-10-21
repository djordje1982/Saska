<template>
  <div>
    <TheHeader />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap");

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

:link,
:active {
  text-decoration: none;
}

#app {
  font-family: "Roboto Slab", serif;
  width: 100%;
  line-height: 1.7;
  background-color: black;
  overflow: hidden;
}

.route-enter-from {
  opacity: 0;
  /* transform: translateX(-200px); */
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-leave-to {
  opacity: 0;
  /* transform: translateX(200px); */
}

.route-leave-active {
  transition: all 0.85s ease-in;
}
</style>
