<template>
    <div>
        <span> testVal -> {{ testVal }} </span>
        <span v-on:click="() => (testBool = !testBool)">{{ multiply }}</span>
        <p v-if="testBool">{{ testBool }}</p>
        <ul>
            <li v-for="(item, index) in testArr" :key="index">{{ item }}</li>
            <li v-for="(item, index) in testObjArr" :key="index">
                {{ index }}: {{ item.name }} {{ item.age }}
            </li>
        </ul>
        <template v-for="(item, index) in testObjArr">
            <h3 :key="index * 2">{{ index }}. {{ item.name }}</h3>
            <p :key="index * 2 + 1">{{ item.age }}</p>
        </template>
        <div v-on:click="() => changeTitle('blah')">Change the title!</div>
        <div v-on:click="testEmit">Hide the orange boxes!</div>
    </div>
</template>

<script lang="ts">
export default {
    name: "NewComp",
    props: ["changeTitle"],
    methods: {
        testEmit: function () {
            this.$emit("test-emit");
        },
    },
    data: function () {
        return {
            testVal: 5,
            testBool: false,
            testArr: ["abc", "def", "ghi"],
            testObjArr: [
                { name: "aaa", age: 12 },
                { name: "bbb", age: 99 },
            ],
        };
    },
    computed: {
        multiply: function (): number {
            return this.testVal * 3;
        },
    },
};
</script>