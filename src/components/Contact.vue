<template>
    <section id="contact">
        <div>Contact me</div>
        <div id="contact-item-container">
            <div>LinkedIn</div>
            <div>Github</div>
            <div>E-Mail</div>
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
            contactInfo: CONTACT_INFO
        };
    },
};
</script>

<style scoped>
#contact-item-container {
    display: flex;
}
</style>