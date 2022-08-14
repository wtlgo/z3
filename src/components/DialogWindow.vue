<style scoped>
.backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(5px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    animation: fadein 0.25s ease-out;
}

@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.dialog {
    position: relative;
    background-color: white;
    color: black;

    border-radius: 10px;

    padding-top: 55px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
}

.close-button {
    color: #cacaca;
    size: 10px;
    cursor: pointer;

    position: absolute;
    top: 20px;
    right: 20px;

    user-select: none;
}

.close-button:hover {
    color: #325de9;
}
</style>

<template>
    <div class="backdrop" v-if="active">
        <div class="dialog">
            <span
                v-if="has_cross"
                class="icon-cross close-button"
                @click="onClose"
            />
            <slot> Dialog </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const emit = defineEmits<{ (event: "close"): void }>();
const props = defineProps<{ active?: boolean; has_cross?: boolean }>();

const active = computed(() => props.active ?? false);
const has_cross = computed(() => props.has_cross ?? true);

const onClose = () => emit("close");
</script>
