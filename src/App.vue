<template>
    <div id="app">
        <site-header v-on:changePageEvent="changePageContent($event)" />
        <main id='page-content'>
            <transition name="slide">
                <component v-bind:is="pageContent" />
            </transition>
        </main>
        <site-footer />
    </div>
</template>

<script lang="ts">
import Contact from "./components/Contact.vue";
import Home from "./components/Home.vue";
import Projects from "./components/Projects.vue";
import SiteFooter from "./components/Footer.vue";
import SiteHeader from "./components/Header.vue";
import { IAppData, pageContent } from "./types";

export default {
    name: "App",
    components: { SiteFooter, SiteHeader, Home, Contact, Projects },
    methods: {
        changePageContent: function (newPage: pageContent) {
            this.pageContent = newPage;
        },
    },
    data: function (): IAppData {
        return {
            pageContent: "Home",
        };
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    overflow-x: hidden;
    text-align: center;
    color: #111;
}

#page-content {
    min-height: 100vh;
}

.slide-enter {
    transform: translate(100vw, 0);
}

.slide-enter-active {
    transition: 0.5s;
}
</style>
