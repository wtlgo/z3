<style scoped>
.button {
    font-size: 20pt;
    position: absolute;
    bottom: 20px;
    right: 40px;
    cursor: pointer;
}
</style>

<template>
    <span class="button" :class="icon" @click="toggle" />
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const is_on = ref(false);
const icon = computed(() => (is_on.value ? "icon-sound-on" : "icon-sound-off"));
const toggle = () => (is_on.value = !is_on.value);
</script>
