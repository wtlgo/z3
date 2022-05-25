<style scoped>
#content {
    position: fixed;
    top: 0;
    width: 100%;

    margin-top: 40px;
    margin-left: 85px;
    margin-right: 85px;
}
</style>

<template>
    <main-background />
    <top-bar />
    <volume-button />
    <div id="content"></div>
</template>

<script setup lang="ts">
import TopBar from "@/components/TopBar.vue";
import MainBackground from "@/components/MainBackground.vue";
import VolumeButton from "@/components/VolumeButton.vue";
import { onMounted } from "vue";
import wait from "@/utils/wait";

const loop = async () => {
    await wait(1000);

    document.title = "EVA"
        .split("")
        .map((c) => (Math.random() < 0.5 ? c : "_"))
        .join("");

    loop();
};

onMounted(loop);
</script>
