<template>
    <section id="home">
        <section id="intro">
            <h1>About me</h1>
            <p>
                My name is Lucas, and I'm a self-taught developer and health
                care professional based in Toronto, Canada. I used to work full
                time as a pharmacy manager, and although the job was stable I
                felt that the development of my professional skills and my
                career had stalled. Personal growth is important to me, so I
                decided to take a risk and switch into a career in software
                development.
            </p>
            <p>
                When I'm not working, you can usually find me enjoying video
                games, growing plants, or taking care of my two cats.
            </p>
        </section>
        <section id="medium-posts">
            <h1>Recent blog posts</h1>
            <div id="posts-unavailable" v-if="fetchAttempted && posts.length < 1">
                Posts Unavailable
            </div>
            <div id="post-preview-container">
                <post-preview-card
                    v-for="(post, index) in posts"
                    :key="index"
                    v-bind:post="post"
                />
            </div>
        </section>
        <section id="skills-sections">
            <skill-icons header="Languages" v-bind:skills="languages" />
            <skill-icons header="Technologies" v-bind:skills="skills" />
        </section>
        <contact />
    </section>
</template>

<script lang="ts">
import SkillIcons from "./Skills.vue";
import PostPreviewCard from "./PostPreviewCard.vue";
import Contact from "./Contact.vue";
import { LANGUAGES, MEDIUM_JSON_FEED, SKILLS } from "../content";
import { IMediumBlogPost, IHomeData } from "../types";

export default {
    name: "Home",
    components: {
        SkillIcons,
        PostPreviewCard,
        Contact,
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

p {
    padding: 1rem 0;
    text-align: start;
}

#home {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

#intro {
    width: 50%;
    padding: 2rem 0;
    margin: 0 auto;
    min-width: 30rem;
    font-size: 1.6rem;
}

#medium-posts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-top: 3rem;
    color: white;
    background-color: black;
}

#posts-unavailable {
    font-size: 3rem;
}

#post-preview-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 1280px;
}

#skills-sections {
    padding: 3rem 0;
}
</style>