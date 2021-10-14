<template>
    <header id="header">
        <div id="header-name">Facedrive Foods</div>
        <div id='header-img-nav'>
            <div id="header-img">
            </div>
            <nav>
                <div v-on:click="handleNav('Home')">Home</div>
                <div v-on:click="handleNav('Projects')">Projects</div>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { pageContent } from "../types";

export default {
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
    font-size: 10rem;
}

#header-img-nav {
    display: flex;
    flex-direction: column;
}
#header-img {
    flex-grow: 1;
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
</style>