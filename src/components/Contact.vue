<template>
    <section id="contact">
        <h1>Contact me at</h1>
        <div id="contact-item-container">
            <a
                v-bind:href="item.link"
                v-for="(item, index) in contactInfo"
                :key="index"
                class="contact-item"
            >
                <img v-bind:src="item.imagePath" class="contact-item-image" />
                <div>{{ item.name }}</div>
            </a>
        </div>
    </section>
</template>

<script lang="ts">
import { CONTACT_INFO } from "../content";
export default {
    name: "Contact",
    methods: {},
    data: function () {
        return {
            contactInfo: CONTACT_INFO,
        };
    },
};
</script>

<style scoped>
h1 {
    padding-bottom: 1rem;
    font-size: 2rem;
}
#contact {
    font-size: 1.4rem;
}

#contact-item-container {
    display: flex;
    justify-content: center;
}

.contact-item {
    height: 100px;
    width: 100px;
}

.contact-item-image {
    height: 70px;
    width: 70px;
}

</style>