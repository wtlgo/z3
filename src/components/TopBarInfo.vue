<style scoped>
.box {
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.17);

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #5b5b5b;

    margin-top: -20px;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    display: flex;
    align-items: center;
    gap: 20px;
}

.profile-pic {
    width: 60px;
    height: 60px;
    border-radius: calc(60px / 2);

    display: flex;
    justify-content: center;
    align-items: center;

    background: #325de9;

    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 12pt;

    user-select: none;
}

.register-block {
    padding-top: 10px;
    padding-bottom: 10px;

    text-align: center;
}

.register-button {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.07em;
    text-decoration: none;

    color: white;
    opacity: 80%;
}

.register-button:hover {
    opacity: 100%;
}

.icon-down {
    color: #5b5b5b;
    font-size: 20pt;
    cursor: pointer;
}

.icon-down:hover {
    color: #325de9;
}

.progress-bar {
    box-shadow: inset 1px 1px 5px 1px rgba(0, 0, 0, 0.1);

    width: 250px;
    height: 15px;

    border-radius: 5px;
}

.progress-bar-fill {
    min-height: 100%;
    width: 0%;
    background-color: #325de9;
    border-radius: 5px;
}

.name-level {
    display: flex;
    justify-content: space-between;

    margin-bottom: 5px;
}
</style>

<template>
    <div>
        <div :class="store.state.level < 3 && 'box'">
            <div :class="store.state.level < 3 && 'profile-pic'">{{ n }}</div>
            <div :class="store.state.level < 3 && 'name-progress'">
                <div :class="store.state.level < 3 && 'name-level'">
                    <span>{{ name }}</span>
                    <span>Ур. {{ store.state.level }}</span>
                </div>
                <div :class="store.state.level < 3 && 'progress-bar'">
                    <div class="progress-bar-fill" :style="progress_style" />
                </div>
            </div>
            <div>
                <span class="icon-down" />
            </div>
        </div>

        <div
            :class="store.state.level < 3 && 'register-block'"
            v-if="!store.state.is_logged_in"
        >
            <a
                :class="store.state.level < 3 && 'register-button'"
                @click.prevent
                href="#"
            >
                Зарегистрироваться / Войти
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useStore } from "@/store";

const store = useStore();

const progress_style = computed(() => ({
    width: `${store.state.exp}%`,
}));

const name = computed(() =>
    store.state.is_logged_in ? store.state.username : "Неопознанный И. О."
);
const n = computed(() =>
    store.state.is_logged_in ? store.state.username[0] : "?"
);
</script>
