<style scoped>
.body {
    min-width: 50vw;

    display: flex;
    flex-direction: column;

    gap: 10px;

    padding-left: 30px;
    padding-right: 30px;
}

.title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: 0.07em;

    color: #cacaca;
}

.data-row {
    display: flex;
    flex-direction: row;

    gap: 18px;
}

.input {
    background-color: white;
    border-radius: 10px;
    border-width: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.19);
    padding: 20px;
    width: 400px;

    flex-shrink: 0;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #325de9;
    outline-color: #325de9;
}

.label {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.07em;

    color: #cacaca;
}

.single-container {
    display: flex;
    justify-content: center;

    margin-top: 20px;
}

.icon-next {
    font-size: 22px;
}

.continue-button {
    display: flex;
    gap: 10px;
    align-items: center;
    align-self: flex-end;

    user-select: none;
    cursor: pointer;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.07em;

    color: #ffffff;

    background: #325de9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    padding: 15px;
}

.continue-button.disabled {
    background: gray;
    cursor: unset;
}

.conditions {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.07em;

    color: #cacaca;
}
</style>

<template>
    <dialog-window :active="active" :has_cross="false">
        <div class="body">
            <span class="title">Регистрация</span>

            <div class="data-row">
                <input
                    v-model="name"
                    class="input"
                    type="text"
                    placeholder="Как к тебе обращаться?"
                />
                <span class="label" v-if="!check_name">
                    От 5 до 16 символов
                </span>
            </div>

            <div class="data-row">
                <input
                    v-model="email_phone"
                    class="input"
                    type="text"
                    placeholder="E-mail / Номер телефона"
                />
                <span class="label" v-if="!check_ep">
                    Введите e-mail или <br />
                    номер телефона
                </span>
            </div>

            <div class="data-row">
                <input
                    v-model="password"
                    class="input"
                    type="password"
                    placeholder="Придумай пароль"
                />
                <span class="label" v-if="!check_password">
                    От 8 до 16 символов
                </span>
            </div>

            <div class="data-row">
                <input
                    v-model="password_again"
                    class="input"
                    type="password"
                    placeholder="Пароль еще раз"
                />
                <span class="label" v-if="!check_password_again">
                    Пароли не совпадают
                </span>
            </div>
        </div>

        <div class="single-container">
            <div
                class="continue-button"
                :class="!check && 'disabled'"
                @click="exit"
            >
                <span class="icon-next" />
                <span>Продолжить</span>
            </div>
        </div>

        <div class="single-container">
            <p class="conditions">
                Нажимая продолжить, вы принимаете условия <br />
                пользовательского соглашения
            </p>
        </div>
    </dialog-window>
</template>

<script setup lang="ts">
import DialogWindow from "./DialogWindow.vue";
import check_email from "@/utils/check-email";
import { computed, ref } from "vue";
import { useStore } from "@/store";

const props = defineProps<{ active?: boolean }>();

const active = computed(() => props.active ?? false);

const name = ref("");
const email_phone = ref("");
const password = ref("");
const password_again = ref("");

const check_name = computed(
    () => 5 <= name.value.trim().length && name.value.trim().length <= 16
);
const check_ep = computed(
    () =>
        email_phone.value.length > 0 &&
        (check_email(email_phone.value) ||
            /^\+?[1-9]{1}[0-9]{3,14}$/.test(email_phone.value))
);
const check_password = computed(
    () =>
        8 <= password.value.trim().length && password.value.trim().length <= 16
);
const check_password_again = computed(
    () => password.value.trim() === password_again.value.trim()
);

const check = computed(
    () =>
        check_name.value &&
        check_ep.value &&
        check_password.value &&
        check_password_again.value
);

const store = useStore();

const exit = () => {
    if (!check.value) return;

    store.commit("log_in", {
        username: name.value.trim(),
        eop: email_phone.value.trim(),
        password: password.value.trim(),
    });
    store.commit("set_level", 1);
    store.commit("dia", 1);
};
</script>
