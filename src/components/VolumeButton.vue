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
import wait from "@/utils/wait";

const is_on = ref(false);
const icon = computed(() => (is_on.value ? "icon-sound-on" : "icon-sound-off"));

const counter = ref(0);
const do_it = ref(false);

const toggle = async () => {
    console.log(counter.value, do_it.value);

    is_on.value = !is_on.value;

    if (do_it.value == true && counter.value >= 5) {
        localStorage.clear();
        document.location.reload(true);
        return;
    }

    do_it.value = true;
    counter.value += 1;

    for (let i = 0; i < 10; ++i) {
        await wait(100);
        if (!do_it.value || counter.value === 0) return;
    }

    do_it.value = false;
    counter.value = 0;
};
</script>
