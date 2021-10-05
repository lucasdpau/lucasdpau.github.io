<template>
    <header id="header">
        <nav>
            <div v-on:click="handleNav('home')">Home</div>
            <!-- <div>Skills</div> -->
            <div v-on:click="handleNav('projects')">Projects</div>
            <div v-on:click="handleNav('contact')">Contact</div>
        </nav>
    </header>
</template>

<script lang="ts">
export default {
    name: "Header",
    methods: {
        handleNav: function (newPage: string) {
            this.$emit("changePageEvent", newPage);
        },
    },
    data: function () {
        return {};
    },
};
</script>

<style scoped>
#header {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #111;
    color: #fff;
}

nav {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

nav div {
    cursor: pointer;
}
</style>