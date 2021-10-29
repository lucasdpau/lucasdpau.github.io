<template>
    <canvas ref="3dcanvas" v-bind:style="{height: canvasHeight, width: canvasWidth}"></canvas>
</template>

<script lang="ts">
import * as THREE from "three";
import earthTexture from '@/assets/images/earthmap1k.jpg';

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

      const geometry = new THREE.SphereGeometry(12);
      const texture = new THREE.TextureLoader().load(earthTexture);
      const material = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        wireframe: false,
        map: texture
      });
      this.sphere = new THREE.Mesh(geometry, material);
      this.scene.add(this.sphere);

      const light = new THREE.PointLight(0xffffff, 1);
      light.position.set(30, 40, 60);
      this.scene.add(light);
      this.scene.background = new THREE.Color( 0x111111 );
      this.renderer.setSize(this.canvasWidth, this.canvasHeight);
    },
    animate: function () {
      requestAnimationFrame(this.animate);
      this.sphere.rotation.y += 0.005;
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