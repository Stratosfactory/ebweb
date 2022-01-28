<template>
  <div class="nav-container">
    <router-link to="/"><img src="../../assets/EB.svg" /></router-link>
    <router-link to="/"><h2>Eichhorn Baumanagement</h2></router-link>
    <nav class="desktop-nav">
      <router-link to="/leistungen">Leistungen</router-link>
      <router-link to="/profil">Profil</router-link>
      <router-link to="/projekte">Projekte</router-link>
      <router-link to="/kontakt">Kontakt</router-link>
    </nav>
    <div
      id="res-nav"
      @click="toggleMobile(mobileToggled)"
      :class="mobileToggled ? 'open' : ''"
    >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <div class="mobile-menu">
        <router-link to="/" class="linkStandard">Home</router-link>
        <router-link to="/leistungen">Leistungen</router-link>
        <router-link to="/profil">Profil</router-link>
        <router-link to="/projekte">Projekte</router-link>
        <router-link to="/kontakt">Kontakt</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileToggled: false,
    };
  },
  methods: {
    toggleMobile(state) {
      this.mobileToggled = !state;
    },
  },
};
</script>

<style scoped>
.nav-container {
  display: flex;
  align-items: center;
  align-content: flex-end;
  color: rgb(235, 235, 235);
  justify-content: flex-start;
  /* background:  var(--eb-ac1); */

  background: url("../../assets/bau.jpg") var(--eb-ac1);
  background-size: cover;
  background-blend-mode: multiply;
}

img {
  height: 6vh;
  margin: 1vh 1vw;
  margin-right: 2vw;
  margin-left: 3vw;
}

h2 {
  margin-right: 5vw;
  color: rgb(223, 225, 243);
}
a {
  text-decoration: none;
}

.desktop-nav a {
  margin-left: 2vw;
  color: rgb(235, 235, 235);
  font-size: 1.2rem;
}



.desktop-nav a:hover {
  border-bottom: 1px solid white;
}

#res-nav {
  margin: auto 2vw;
  display: none;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 3px;
  background-color: rgb(235, 235, 235);
  margin: 6px 0;
  transition: 0.4s;
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 100px;
  left: 0;
  height: calc(100vh - 100px);
  width: 100%;
}

.open .bar1 {
  -webkit-transform: rotate(-45deg) translate(-6px, 6px);
  transform: rotate(-45deg) translate(-6px, 6px);
}

.open .bar2 {
  opacity: 0;
}

.open .bar3 {
  -webkit-transform: rotate(45deg) translate(-6px, -8px);
  transform: rotate(45deg) translate(-6px, -8px);
}

.open .mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: rgba(73, 86, 105, 0.9);
}

.open .mobile-menu a {
  color:white;
  font-size: 1.8rem;
  margin-top: 2vh;
  border-bottom: 1px solid white;
  width: 70%;
}

@media only screen and (max-width: 700px) {
  .desktop-nav {
    display: none;
  }

  #res-nav {
    display: block;
  }
}
</style>