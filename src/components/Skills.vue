<template>
    <div class="skills-section">
        <h2>{{ header }}</h2>
        <div class="icon-list">
            <div
                v-for="(skill, index) in skills"
                :key="index"
                class="skill-item"
            >
                <img v-bind:src="skill.imagePath" class="skill-icon" />
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
    justify-content: center;
}

.skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: 100px;
}

.skill-icon {
    height: 70px;
    width: 70px;
    opacity: 0.8;
}

.skill-icon:hover {
    height: 100px;
    width: 100px;
    opacity: 1;
    transition: 0.05s;
}
</style>