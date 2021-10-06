<template>
    <div id="app">
        <site-header v-on:changePageEvent="changePageContent($event)" />
        <transition name="slide">
            <component v-bind:is="pageContent" />
        </transition>
        <site-footer />
    </div>
</template>

<script lang="ts">
import Contact from "./components/Contact.vue";
import Home from "./components/Home.vue";
import Projects from "./components/Projects.vue";
import SiteFooter from "./components/Footer.vue";
import SiteHeader from "./components/Header.vue";
import {pageContent} from './types';

export default {
    name: "App",
    components: { SiteFooter, SiteHeader, Home, Contact, Projects },
    methods: {
        changePageContent: function (newPage: pageContent) {
            this.pageContent = newPage;
        },
    },
    data: function () {
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

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    color: #111;
}

.slide-enter {
    transform: translate(100vw, 0);
}

.slide-enter-active {
    transition: 0.5s;
}
</style>
