<template>
  <header>
    <img
      src="../assets/img/PL-Logo-Horizontalni-Svetla-Pozadina.png"
      alt="Pilcevic Logo"
      @click="goHome"
      id="logo"
    />
    <nav class="head-desno">
      <router-link class="linkovi" to="/">Naslovna</router-link>
      <router-link class="linkovi" to="/oblast-rada">Oblast Rada</router-link>
      <router-link class="linkovi" to="/nas-tim">Naš Tim</router-link>
      <router-link class="linkovi" to="/kontakt">Kontakt</router-link>
    </nav>
    <transition name="bMenu" appear="">
      <div class="mobile-menu" v-if="burgerOpened">
        <router-link class="linkovi" to="/" @click="toggleBurger"
          >Naslovna</router-link
        >
        <router-link class="linkovi" to="/oblast-rada" @click="toggleBurger"
          >Oblast Rada</router-link
        >
        <router-link class="linkovi" to="/nas-tim" @click="toggleBurger"
          >Naš Tim</router-link
        >
        <router-link class="linkovi" to="/kontakt" @click="toggleBurger"
          >Kontakt</router-link
        >
      </div>
    </transition>
    <div id="burger-oko" ref="meni" @click="toggleBurger">
      <div class="burger"></div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      burgerOpened: false,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    toggleBurger() {
      this.burgerOpened = !this.burgerOpened;
      this.$refs.meni.classList.toggle("open");
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0f0f0f;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
}

img {
  height: 40px;
  max-width: 250px;
  cursor: pointer;
}

nav {
  min-width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
}

a {
  text-decoration: none;
  color: rgb(187, 180, 150);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.5s ease;
  outline: none;
}

.linkovi::after {
  content: "";
  display: block;
  height: 1px;
  width: 0;
  background-color: rgb(187, 180, 150);
  opacity: 0;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  padding: 0 10px;
}

.linkovi:hover::after {
  width: 100%;
  opacity: 1;
  padding: 0 10px;
}

.router-link-exact-active::after {
  width: 100%;
  opacity: 1;
  padding: 0 10px;
}

#burger-oko {
  display: none;
}

.mobile-menu {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  top: 0;
  left: 0;
  padding: 100px 0 0 0;
}

.bMenu-enter-from,
.bMenu-leave-to {
  opacity: 0;
  left: 100%;
}

.bMenu-enter-active,
.bMenu-leave-active {
  transition: all 0.5s ease;
}

@media screen and (max-width: 1050px) {
  #burger-oko {
    border: 2px solid rgb(187, 180, 150);
    border-radius: 15px;
    position: fixed;
    top: 10px;
    right: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    /* border: 3px solid #fff; */
    z-index: 20;
  }

  .burger {
    width: 30px;
    height: 2px;
    background: rgb(187, 180, 150);
    border-radius: 5px;
    line-height: 1;
    transition: all 0.5s ease-in-out;
  }

  .burger::before,
  .burger::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    background: rgb(187, 180, 150);
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }

  .burger::before {
    transform: translateY(-10px);
  }

  .burger::after {
    transform: translateY(10px);
  }

  /* ANIMATION */
  #burger-oko.open .burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }

  #burger-oko.open .burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }

  #burger-oko.open .burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }

  .head-desno a {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  #logo {
    display: none;
  }
}
</style>
