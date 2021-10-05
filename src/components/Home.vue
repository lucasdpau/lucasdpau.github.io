<template>
    <section id="Home">
        <skill-icons header="Languages" v-bind:skills="languages" />
        <skill-icons
            v-if="false"
            header="Technologies"
            v-bind:skills="skills"
        />
    </section>
</template>

<script lang="ts">
import SkillIcons from "./SkillIcons.vue";
import { LANGUAGES, SKILLS } from "../content";

export default {
    name: "Home",
    components: {SkillIcons},
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