<style scoped>
.body {
    position: absolute;
    bottom: 20px;
    left: 80px;
    right: 80px;

    gap: 10px;

    display: flex;
    flex-direction: column;

    align-items: center;
}

.text {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 46px;
    letter-spacing: 0.07em;

    background: rgba(255, 255, 255, 0.8);
    padding: 10px 20px;

    color: #325de9;
}

.buttons {
    display: flex;
    gap: 10px;
}

.button {
    display: flex;

    background: rgba(50, 93, 233, 0.06);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 11px;
    padding: 8px 28px;
    gap: 10px;

    user-select: none;
    cursor: pointer;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.07em;

    color: #ffffff;
}

.glitch-button {
    background-color: #ffffff;
    height: 40px;
    width: 120px;
}
</style>

<template>
    <div class="body" v-if="dialog">
        <div class="text">{{ dialog.text }}</div>
        <div class="buttons">
            <div
                :class="!answer.glitch ? 'button' : 'glitch-button'"
                v-for="(answer, id) in dialog.answers"
                :key="id"
                @click="proceed(answer)"
            >
                <span
                    v-if="answer.icon && !answer.glitch"
                    :class="'icon-' + answer.icon"
                />
                <span v-if="answer.text && !answer.glitch">{{
                    answer.text
                }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDialog, useProceed } from "@/utils/useDialog";

const dialog = useDialog();
const proceed = useProceed();
</script>
