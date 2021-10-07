<template>
    <div class="medium-post-card">
        <a v-bind:href="post.link">
            <h3>{{ post.title }}</h3>
            <div class='post-publish-date'>{{ formatDate }}</div>
            <div class='post-content'>{{ formatDescription }}</div>
        </a>
    </div>
</template>

<script lang="ts">
export default {
    name: "PostPreviewCard",
    props: ["post"],
    methods: {},
    data: function () {
        return {};
    },
    computed: {
        formatDescription: function (): string {
            const truncatedText = `${this.post.description.substring(0,256)}...`;
            const regex = /(<([^>]+)>)/gi;
            return truncatedText.replace(regex, "");
        },
        formatDate: function (): string {
            return new Date(this.post.pubDate).toDateString();
        },
    },
};
</script>

<style scoped>
a {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-decoration: none;
    color: black;
}
h3 {
    font-size: 24px;
}

.medium-post-card {
    margin: 20px 0px;
    padding: 20px;
    min-width: 300px;
    width: 30%;
    border: 1px solid lightgray;
    border-radius: 10px;
    text-align: left;
}
.medium-post-card:hover {
    border-color: black;
}

.post-publish-date{
    font-size: 14px;
    color: #333;
}

.post-content{
    font-size: 16px;
}
</style>