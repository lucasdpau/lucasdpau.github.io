<template>
    <canvas ref="3dcanvas" v-bind:style="{height: canvasHeight, width: canvasWidth}"></canvas>
</template>

<script lang="ts">
import * as THREE from "three";

interface IStuff {
    scene: THREE.Scene;
    camera: THREE.Camera;
    renderer: THREE.Renderer;
    sphere: THREE.Mesh;
}

export default {
  props: {
    canvasWidth: Number,
    canvasHeight: Number
  },
  data: function (): IStuff {
    return {
        scene: new THREE.Scene(),
        camera: new THREE.PerspectiveCamera(),
        renderer: new THREE.WebGLRenderer(),
        sphere: new THREE.Mesh(),
    };
  },
  methods: {
    init: function () {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.canvasWidth / this.canvasHeight,
        0.1,
        1000
      );
      this.camera.position.setZ(30);
      this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs['3dcanvas'] as HTMLCanvasElement});

      const geometry = new THREE.SphereGeometry(10);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
      });
      this.sphere = new THREE.Mesh(geometry, material);
      this.scene.add(this.sphere);
      this.renderer.setSize(this.canvasWidth, this.canvasHeight);
    },
    animate: function () {
      requestAnimationFrame(this.animate);
      this.sphere.rotation.y += 1;
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted: function () {
    this.init();
    this.animate();
  },
};
</script>

<style scoped>
</style>