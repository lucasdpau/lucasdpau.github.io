<template>
    <header id="header">
        <nav>
            <div v-on:click="handleNav('Home')">Home</div>
            <div v-on:click="handleNav('Projects')">Projects</div>
            <div v-on:click="handleNav('Contact')">Contact</div>
        </nav>
    </header>
</template>

<script lang="ts">
export default {
    methods: {
        handleNav(newPage: string): void {
            this.$emit("changePageEvent", newPage);
        },
    },
};
</script>

<style scoped>
#header {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 0px;
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