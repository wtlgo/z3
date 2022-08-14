<style scoped>
.body {
    max-width: 75vw;
    max-height: calc(90vh - 50px - 20px);
}
</style>

<template>
    <dialog-window
        :active="store.state.chat_opened"
        :has_cross="true"
        @close="store.commit('close_chat')"
        @click="store.commit('toggle_fake')"
    >
        <img
            v-if="store.state.fake_id == 0"
            class="body"
            src="@/assets/fake_chat.png"
        />
        <img
            v-if="store.state.fake_id == 1"
            class="body"
            src="@/assets/fake_chat2.png"
        />
    </dialog-window>
</template>

<script setup lang="ts">
import DialogWindow from "./DialogWindow.vue";
import { useStore } from "@/store";

const store = useStore();
</script>
