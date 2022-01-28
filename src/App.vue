<template>
  <div class="app-container">
    <header>
      <navigation></navigation>
    </header>
    <main>
      <router-view class="content-container"></router-view>
    </main>
    <footer>
      <eb-footer></eb-footer>
    </footer>
  </div>
</template>

<script>
import navigation from "./components/header/navigation.vue";
import ebFooter from "./components/footer/ebFooter.vue";
export default {
  name: "App",
  components: { navigation, ebFooter },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oxygen&family=Rubik:wght@500&display=swap");

:root {
  --eb-c1: rgb(0, 35, 78);
  --eb-c2: rgb(42, 120, 255);
  --eb-c3: rgb(204, 204, 204);
  --eb-ac1: rgb(105, 118, 138);
  --eb-ac2: rgb(146, 149, 155);
}

#app {
  font-family: "Oxygen", sans-serif;
}

.app-container {
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
}

header {
  min-height: 10vh;
}

main {
  min-height: 88vh;
}

footer {
  height: 2vh;
  margin-top: auto;
  justify-self: flex-end;
}

.content-container {
  margin: 0 1vw;
  box-shadow: 0px 0px 2px 1px var(--eb-c3);
  padding: 1px 10px;
  border-radius: 5px;
  animation-name: flipIn;
  animation-duration: 0.7s;
  margin-bottom: 1vh;
}

@keyframes flipIn {
  from {
    transform: rotateY(260deg);
  }

  to {
    transform: rotateY(360deg);
  }
}

h1 {
  color: var(--eb-c1);
}
</style>
