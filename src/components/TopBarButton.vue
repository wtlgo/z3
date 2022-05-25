<style scoped>
.button {
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;

    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.17);

    user-select: none;

    display: flex;
    align-items: center;
    align-self: flex-end;
    gap: 10px;
}

.icon {
    font-size: 15pt;
}

.body {
    font-size: 12pt;
    font-weight: 500;

    text-transform: capitalize;
}

.button-active {
    background-color: #325de9;
    color: white;
}

.button-inactive {
    background-color: white;
    color: #325de9;
    opacity: 80%;
}

.button-inactive:hover {
    opacity: 100%;
}
</style>

<template>
    <div class="button" :class="buttonClass" @mousedown="onClick">
        <span v-if="props.icon" class="icon" :class="icon" />
        <span class="body" v-if="$slots.default">
            <slot />
        </span>
    </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, computed } from "vue";

const props = defineProps<{ active?: boolean; icon?: string }>();

const emit = defineEmits(["click"]);

const onClick = () => emit("click");

const buttonClass = computed(() =>
    props.active ?? false ? "button-active" : "button-inactive"
);
const icon = computed(() => `icon-${props.icon}`);
</script>
