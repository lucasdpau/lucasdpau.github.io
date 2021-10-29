<template>
  <header id="header">
    <div id="header-name">Lucas Pau</div>
    <div id="header-img-nav">
      <three-d-canvas 
        :canvasHeight="300"
        :canvasWidth="400"
      />
      <nav>
        <div v-on:click="handleNav('Home')">Home</div>
        <div v-on:click="handleNav('Projects')">Projects</div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { pageContent } from "../types";
import ThreeDCanvas from './Canvas3d.vue';

export default {
  components: { ThreeDCanvas },
  methods: {
    handleNav(newPage: pageContent): void {
      this.$emit("changePageEvent", newPage);
      document.getElementsByTagName(
        "title"
      )[0].textContent = `Lucas | ${newPage}`;
    },
  },

};
</script>

<style scoped>
/* below 768 width, make it fixed to top. */
#header {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 0px;
  background-color: #111;
  color: #fff;
  font-size: 2rem;
}

#header-name {
  flex-grow: 1;
  font-size: 9rem;
}

#header-img-nav {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
#header-img {
  flex-grow: 1;
  height: 50rem;
  width: 50rem;
}

nav {
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  width: 100%;
}

nav div {
  cursor: pointer;
}

@media (max-width: 768px) {
  #header-name {
    padding-top: 4rem;
    font-size: 5rem;
  }
  #header-img-nav {
    flex-grow: 0;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem 0;
    background-color: black;
    z-index: 2;
  }
}
</style>