<template>
    <section id="Home">
        <section id="intro">
            My name is Lucas Pau, and I'm a self-taught developer and health
            care professional based in Toronto, Canada. I used to work full time
            as a pharmacy manager, and although the job was stable I felt that
            the development of my professional skills and my career had stalled.
            Since personal growth is important to me, I decided to take a risk
            and switch into a career in software development.
        </section>
        <section id="medium-posts">
            <h1>Recent blog posts</h1>
            <div id="post-preview-container">
                <div v-if="fetchAttempted && posts.length < 1">
                    Posts Unavailable
                </div>
                <post-preview-card
                    v-for="(post, index) in posts"
                    :key="index"
                    v-bind:post="post"
                />
            </div>
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
import { LANGUAGES, MEDIUM_JSON_FEED, SKILLS } from "../content";
import { IMediumBlogPost, IHomeData } from "../types";

export default {
    name: "Home",
    components: {
        SkillIcons,
        PostPreviewCard,
    },
    methods: {
        fetchMediumFeed: async function (): Promise<Array<IMediumBlogPost>> {
            try {
                const res = await fetch(MEDIUM_JSON_FEED);
                if (res.status === 200) {
                    const data = await res.json();
                    this.fetchAttempted = true;
                    return data.items.slice(0, 3);
                } else {
                    throw res.status;
                }
            } catch (err) {
                this.fetchAttempted = true;
                return [];
            }
        },
    },
    data: function (): IHomeData {
        return {
            languages: LANGUAGES,
            skills: SKILLS,
            fetchAttempted: false,
            posts: [],
        };
    },
    created: async function (): Promise<void> {
        this.posts = await this.fetchMediumFeed();
    },
};
</script>

<style scoped>
h1 {
    font-size: 3rem;
}

#intro {
    font-size: 1.6rem;
}

#medium-posts {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 3rem;
}

#post-preview-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>