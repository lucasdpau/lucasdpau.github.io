<template>
    <div>
        <div class="box" v-on:mouseover="mouseOverFxn">mouse enter</div>
        <div class="box" @mouseleave="mouseOverFxn">mouse leave</div>
        <div class="box" @dblclick="doubleClick">double click</div>
        <div class="box" @mousemove="mouseMoving">X: {{ x }} Y: {{ y }}</div>
        <input type="text" v-bind:value="x + y" />
        <input
            type="text"
            @keyup.ctrl.enter="handleName"
            id="nameInput"
            ref="TESTREF"
        />
        <input type="text" v-model="test" />
        <span v-bind:class="{ testClass: name.length > 0 }">
            Hi, my name is : {{ name }}
        </span>
        <button @click="submitTestRef">submit</button>
    </div>
</template>

<script lang="ts">
export default {
    methods: {
        mouseOverFxn(event: MouseEvent) {
            console.log(event);
        },
        doubleClick() {
            console.log("DOUBLES");
        },
        mouseMoving(e: MouseEvent) {
            this.x = e.x;
            this.y = e.y;
        },
        handleName(e: KeyboardEvent) {
            this.name = e.target.value;
        },
        submitTestRef() {
            this.name = this.$refs["TESTREF"].value;
        },
    },
    data: function () {
        return {
            x: 0,
            y: 0,
            name: "",
            test: "",
            title: "HEADER OF APP",
        };
    },
};
</script>

<style>
.box {
    padding: 100px 0;
    width: 400px;
    text-align: center;
    background: coral;
    margin: 20px;
}

.testClass {
    color: red;
}
</style>
