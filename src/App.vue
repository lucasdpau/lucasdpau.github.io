<template>
    <div id="app">
        <site-header v-on:changePageEvent="changePageContent($event)" />
        <component v-bind:is="pageContent" />
        <site-footer />
    </div>
</template>

<script lang="ts">
import Contact from "./components/Contact.vue";
import Home from "./components/Home.vue";
import Projects from "./components/Projects.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";

export default {
    name: "App",
    components: { SiteFooter, SiteHeader, home: Home, contact: Contact, projects: Projects },
	methods: {
		changePageContent: function(newPage: string) {
			this.pageContent = newPage;
		}
	},
    data: function () {
        return {
            pageContent: "home",
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
</style>
