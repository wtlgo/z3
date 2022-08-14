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
        @contextmenu.prevent
        :key="store.state.level"
    >
        <source v-for="(source, id) in sources" :key="id" :src="source" />
    </video>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { computed } from "vue";

const store = useStore();

const sources = computed(() => {
    return store.state.level <= 1
        ? [
              require("@/assets/background_video/z.webm"),
              require("@/assets/background_video/z.mp4"),
          ]
        : store.state.level == 2
        ? [
              require("@/assets/background_video/y.webm"),
              require("@/assets/background_video/y.mp4"),
          ]
        : [
              require("@/assets/background_video/x.webm"),
              require("@/assets/background_video/x.mp4"),
          ];
});
</script>
