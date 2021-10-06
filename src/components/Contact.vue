<template>
    <section id="contact">
        <div>Contact at</div>
        <div id="contact-item-container">
            <a
                v-bind:href="item.link"
                v-for="(item, index) in contactInfo"
                :key="index"
                class="contact-item"
            >
                <img v-bind:src="item.imagePath" class='item-image' />
                <div>{{ item.label }}</div>
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
#contact-item-container {
    display: flex;
}

.contact-item {
    height: 100px;
    width: 100px;
}

.item-image {
    height: 70px;
    width: 70px;
}
</style>