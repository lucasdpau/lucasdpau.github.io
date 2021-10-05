<template>
    <section id="Home">
        <section>
            About me:
            I am Lucas and I am a person.
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