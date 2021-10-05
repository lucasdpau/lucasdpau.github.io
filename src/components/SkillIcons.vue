<template>
    <div class="skills-section">
        <h2>{{ header }}</h2>
        <div class="icon-list">
            <div v-for="(skill, index) in skills" :key="index">
                {{ skill.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "SkillIcons",
    props: ["header", "skills"],
    methods: {},
    data: function () {
        return {};
    },
};
</script>

<style scoped>
.skills-section {
    display: flex;
    flex-direction: column;
}
.icon-list {
    display: flex;
    flex-wrap: wrap;
}
</style>