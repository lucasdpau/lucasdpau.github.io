<template>
  <section id="projects">
    <div
      class="project-item"
      v-for="(project, index) in projects"
      v-bind:key="index"
    >
      <img v-bind:src="project.imagePath" />
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
      <a v-bind:href="project.link">Github Link</a>
      <a v-if="project.liveLink" v-bind:href="project.liveLink">Live link</a>
    </div>
  </section>
</template>

<script lang="ts">
import { PROJECTS } from "../content";

export default {
  name: "Projects",
  methods: {},
  data: function () {
    return {
      projects: PROJECTS,
    };
  },
};
</script>

<style scoped>
#projects {
  display: flex;
  gap: 5rem;
}
.project-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  width: 40rem;
  border: 1px solid black;
  border-radius: 1rem;
  text-align: start;
}
h2 {
  font-size: 3rem;
}
p {
  font-size: 1.5rem;
}
a {
  font-size: 1.5rem;
}
</style>