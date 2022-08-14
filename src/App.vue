<template>
    <main-background />
    <volume-button />
    <dialog-bar />

    <top-bar />

    <register-window :active="!store.state.is_logged_in" />
</template>

<script setup lang="ts">
import TopBar from "@/components/TopBar.vue";
import MainBackground from "@/components/MainBackground.vue";
import VolumeButton from "@/components/VolumeButton.vue";
import RegisterWindow from "@/components/RegisterWindow.vue";
import DialogBar from "./components/DialogBar.vue";
import { onMounted } from "vue";
import wait from "@/utils/wait";
import { useStore } from "./store";

const store = useStore();

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
