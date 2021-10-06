<template>
    <div class="medium-post-card">
        <a v-bind:href="post.link">
            <h3>{{ post.title }}</h3>
            <div>{{ formatDescription }}</div>
            <div>{{ formatDate }}</div>
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
        formatDescription: function() {
            const truncatedText = `${this.post.description.substring(
                0,
                256
            )}...`;
            const regex = /(<([^>]+)>)/gi;
            return truncatedText.replace(regex, "");
        },
        formatDate: function() {
            return new Date(this.post.pubDate).toDateString();
        },
    },
};
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
h3 {
    font-size: 24px;
}

.medium-post-card {
    margin: 20px 0px;
    padding: 10px;
    min-width: 300px;
    width: 30%;
    border: 1px solid lightgray;
    border-radius: 10px;
}
.medium-post-card:hover {
    border-color: black;
}
</style>