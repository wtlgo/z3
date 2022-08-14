<style scoped>
.top-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;

    display: flex;
    flex-shrink: 1;
    flex-wrap: wrap-reverse;
    gap: 20px;
}

.top-bar > .with-gap {
    margin-right: 20px;
}

.break {
    width: 100%;
}

.logo {
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    max-height: 20vh;
    margin-top: -20px;
}
</style>

<template>
    <div :class="store.state.level < 3 && 'top-bar'" style="position: absolute">
        <!--  <div class="logo" :style="img_style" /> -->
        <object class="logo" type="image/svg+xml" :data="logo" />

        <div class="break" />

        <top-button class="with-gap" icon="notification" :active="true" />

        <top-button
            icon="chat"
            @click="store.commit('open_chat')"
            :active="store.state.chat_opened"
        >
            Чат
        </top-button>
        <top-button icon="help">Помощь</top-button>
        <top-button icon="about">О нас</top-button>

        <spacer />

        <top-info />
    </div>

    <chat-window />

    <div v-if="store.state.level >= 3" style="position: absolute; right: 0">
        {{ daaamn }}
    </div>
</template>

<script setup lang="ts">
import TopButton from "@/components/TopBarButton.vue";
import Spacer from "@/components/TopBarSpacer.vue";
import TopInfo from "@/components/TopBarInfo.vue";
import logo from "@/assets/eva_logo.svg";
import ChatWindow from "@/components/ChatWindow.vue";
import { useStore } from "@/store";
import { computed, onMounted, ref } from "vue";
import wait from "@/utils/wait";

const store = useStore();

const damn = computed(() => [
    store.state.username,
    store.state.password,
    store.state.email_or_password,
]);
const id = ref(0);
const daaamn = computed(() => damn.value[id.value % damn.value.length]);

const loop = async () => {
    await wait(25);
    id.value = Math.floor(Math.random() * 3);
    loop();
};

onMounted(loop);
</script>
