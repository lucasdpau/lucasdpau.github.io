<template>
    <header id="header">
        <nav>
            <div>Home</div>
            <div>Skills</div>
            <div>Projects</div>
            <div>Contact</div>
        </nav>
    </header>
</template>

<script lang="ts">
export default {
    name: "Header",
    methods: {},
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
</style>