import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";
import createPersistedState from "vuex-persistedstate";

interface State {
    username: string;
    email_or_password: string;
    password: string;
    is_logged_in: boolean;

    level: number;
    exp: number;

    dialog_id: number;
    fake_id: number;

    chat_opened: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
    strict: true,

    state() {
        return {
            username: "",
            email_or_password: "",
            password: "",
            is_logged_in: false,

            level: 0,
            exp: 0,

            fake_id: 0,
            dialog_id: 0,

            chat_opened: false,
        };
    },

    mutations: {
        log_in(
            state,
            payload: { username: string; eop: string; password: string }
        ) {
            state.username = payload.username;
            state.email_or_password = payload.eop;
            state.password = payload.password;
            state.is_logged_in = true;
        },

        add_exp(state, exp: number) {
            state.exp = Math.max(0, Math.min(100, exp + state.exp));
        },

        set_level(state, level: number) {
            state.level = level;
            state.exp = 0;
        },

        dia(state, id: number) {
            state.dialog_id = id;
        },

        open_chat(state) {
            state.chat_opened = true;
        },

        close_chat(state) {
            state.chat_opened = false;
        },

        toggle_fake(state) {
            state.fake_id = (state.fake_id + 1) % 2;
        },
    },

    plugins: [createPersistedState()],
});

export default store;

export const useStore = () => baseUseStore(key);
