<style scoped>
.background-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
}
</style>

<template>
    <video
        class="background-video"
        autoplay
        muted
        playsinline
        loop
        @contextmenu="preventDefaultHandler"
    >
        <source v-for="(source, id) in sources" :key="id" :src="source" />
    </video>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const preventDefaultHandler = (e: Event) => e.preventDefault();

const is_normal = ref(true);
const does_dance = ref(Math.random() < 0.0042);

const sources = computed(() => {
    return does_dance.value
        ? [
              require("@/assets/background_video/dance/z.webm"),
              require("@/assets/background_video/dance/z.mp4"),
          ]
        : is_normal.value
        ? [
              require("@/assets/background_video/z.webm"),
              require("@/assets/background_video/z.mp4"),
          ]
        : [];
});
</script>
