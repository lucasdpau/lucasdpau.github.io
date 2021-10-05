<template>
    <section id="Home">
        <section>
            My name is Lucas Pau, and I'm a self-taught developer and health
            care worker based in Toronto, Canada. Always willing to learn more
            and take on a challenge.
        </section>
        <section>
            Blog stuff here
        </section>
        <section>
            <skill-icons header="Languages" v-bind:skills="languages" />
            <skill-icons header="Technologies" v-bind:skills="skills" />
        </section>
    </section>
</template>

<script lang="ts">
import SkillIcons from "./Skills.vue";
import { LANGUAGES, SKILLS } from "../content";

export default {
    name: "Home",
    components: { SkillIcons },
    methods: {},
    data: function () {
        return {
            languages: LANGUAGES,
            skills: SKILLS,
        };
    },
};
</script>

<style scoped>
</style>