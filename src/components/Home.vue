<template>
    <section id="Home">
        <section>
            My name is Lucas Pau, and I'm a self-taught developer and health
            care worker based in Toronto, Canada. Always willing to learn more
            and take on a challenge.
        </section>
        <section id="post-preview-container">
            <post-preview-card
                v-for="(post, index) in posts"
                :key="index"
                v-bind:post="post"
            />
        </section>
        <section>
            <skill-icons header="Languages" v-bind:skills="languages" />
            <skill-icons header="Technologies" v-bind:skills="skills" />
        </section>
    </section>
</template>

<script lang="ts">
import SkillIcons from "./Skills.vue";
import PostPreviewCard from "./PostPreviewCard.vue";
import { LANGUAGES, SKILLS } from "../content";
import { IMediumBlogPost, IHomeData } from "../types";

const fetchMediumFeed = async function (): Promise<Array<IMediumBlogPost>> {
    try {
        const res = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40lucasdpau"
        );
        if (res.status === 200) {
            const data = await res.json();
            return data.items.slice(0, 3);
        } else {
            throw res.status;
        }
    } catch (err) {
        return [];
    }
};

export default {
    name: "Home",
    components: {
        SkillIcons,
        PostPreviewCard,
    },
    methods: {},
    data: function (): IHomeData {
        return {
            languages: LANGUAGES,
            skills: SKILLS,
            posts: [],
        };
    },
    created: async function (): Promise<void> {
        this.posts = await fetchMediumFeed();
    },
};
</script>

<style scoped>
#post-preview-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>