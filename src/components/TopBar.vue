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
    margin-top: -80px;
}
</style>

<template>
    <div class="top-bar">
        <!--  <div class="logo" :style="img_style" /> -->
        <object class="logo" type="image/svg+xml" :data="logo" />

        <div class="break" />

        <top-button class="with-gap" icon="notification" :active="true" />
        <top-button icon="chat">Чат</top-button>
        <top-button icon="help">Помощь</top-button>
        <top-button icon="about">О нас</top-button>

        <spacer />

        <top-info />
    </div>
</template>

<script setup lang="ts">
import TopButton from "@/components/TopBarButton.vue";
import Spacer from "@/components/TopBarSpacer.vue";
import TopInfo from "@/components/TopBarInfo.vue";
import logo from "@/assets/eva_logo.svg";
</script>
