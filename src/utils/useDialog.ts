import { useStore } from "@/store";
import { computed } from "vue";

export interface Answer {
    text?: string;
    next_id: number;
    icon?: string;
    glitch?: boolean;
    action?: () => void;
}

export interface Dialog {
    id: number;
    text: string;
    answers: Answer[];
    exp?: number;
}

export const useDialog = () => {
    const store = useStore();
    const dialog = computed(() => {
        const scenario: Dialog[] = [
            {
                id: 1,
                text: "Здравствуй! Я Ева, твой гид в мире безопасности в сети Интернет.",
                answers: [
                    {
                        text: "Дальше",
                        next_id: 2,
                        icon: "next",
                    },
                ],
            },
            {
                id: 2,
                text: "Я с радостью помогу тебе освоиться в цифровом пространстве и обучу тебя тому,",
                answers: [
                    {
                        text: "Дальше",
                        next_id: 3,
                        icon: "next",
                    },
                    {
                        next_id: 1,
                        icon: "back",
                    },
                ],
            },
            {
                id: 3,
                text: "как защитить данные в это непростое время",
                answers: [
                    {
                        text: "Дальше",
                        next_id: 4,
                        icon: "next",
                    },
                    {
                        next_id: 2,
                        icon: "back",
                    },
                ],
            },
            {
                id: 4,
                text: "Обещаю, скучно не будет",
                answers: [
                    {
                        text: "Дальше",
                        next_id: 5,
                        icon: "next",
                    },
                    {
                        next_id: 3,
                        icon: "back",
                    },
                ],
            },
            {
                id: 5,
                text: "Ну что, начнем?",
                exp: 20,
                answers: [
                    {
                        text: "Всегда готов!",
                        next_id: 6,
                        icon: "next",
                        action: () => store.commit("open_chat"),
                    },
                    {
                        next_id: 4,
                        icon: "back",
                    },
                ],
            },

            {
                id: 6,
                text: "Отлично! Начнем с малого. Выбери, какой пароль тебе кажется более безопасным!",
                answers: [
                    {
                        next_id: 7,
                        text: "1q2w3e4r",
                    },
                    {
                        next_id: 7,
                        text: store.state.password,
                    },
                    {
                        next_id: 7,
                        text: "Bi%DuIn!So57Lo",
                    },
                    {
                        next_id: 7,
                        text: "D00R8377",
                    },
                ],
            },
            {
                id: 7,
                exp: 40,
                text: "Ждешь похвалы за такой очевидный ответ?",
                answers: [
                    {
                        text: "Ну, а как без этого?",
                        next_id: 8,
                    },
                ],
            },

            {
                id: 8,
                text: "Так, давай дальше. Про двухфакторную аутентификацию ты же слышал?",
                answers: [
                    {
                        text: "Активно использую!!",
                        next_id: 9,
                    },
                    {
                        text: "Слышал, но лень заморачиваться",
                        next_id: 9,
                    },
                    {
                        text: "Не-а!",
                        next_id: 9,
                    },
                ],
            },

            {
                id: 9,
                text: "Молодец! Но как второй фактор используй что-то кроме телефона, к нему не так-то сложно получить доступ.",
                exp: 40,
                answers: [
                    {
                        next_id: 10,
                        text: "Понял, дальше",
                    },
                ],
            },

            {
                id: 10,
                text: "Неплохо для новичка! Поздравляю с переходом на следующий этап",
                answers: [
                    {
                        next_id: 11,
                        text: "Ой!",
                        action: () => store.commit("set_level", 2),
                    },
                    {
                        next_id: 11,
                        text: "Спасибо, но не то, чтобы было сложно…",
                        action: () => store.commit("set_level", 2),
                    },
                ],
            },

            // lvl 2

            {
                id: 11,
                text: "Давай дальше. Надеюсь, ты слышал что-то про менеджер паролей?",
                answers: [
                    {
                        text: "Наслышан",
                        next_id: 12,
                    },
                    {
                        text: "Более того, я им пользуюсь!",
                        next_id: 12,
                    },
                    {
                        text: "А что это?",
                        next_id: 12,
                    },
                ],
            },

            {
                id: 12,
                text: "Ещё, наверное, везде один пароль используешь?",
                answers: [
                    {
                        text: "Ха-ха!",
                        next_id: 13,
                    },
                    {
                        text: "Ну нет, не всё так плохо",
                        next_id: 13,
                    },
                ],
            },

            {
                id: 13,
                text: "Умничка! А как думаешь, поможет ли тебе VPN защитить свой компьютер от заражения?",
                answers: [
                    {
                        text: "Сомневаюсь",
                        next_id: 14,
                    },
                    {
                        text: "Конечно поможет!",
                        next_id: 14,
                    },
                ],
            },

            {
                id: 14,
                text: "Слушай, это уже начинает действовать на нервы",
                answers: [
                    {
                        text: "Прости, давай дальше",
                        next_id: 15,
                    },
                    {
                        text: "Я не виноват!",
                        next_id: 15,
                    },
                ],
            },

            {
                id: 15,
                text: "Надеюсь, знаешь, что нужно проверять разрешения приложений перед установкой?",
                answers: [
                    {
                        text: "Впервые слышу!",
                        next_id: 16,
                    },
                    {
                        text: "??@@#////@",
                        next_id: 16,
                    },
                ],
            },

            {
                id: 16,
                text: "Ну разумеется! Большего я от тебя и не ожидала!",
                answers: [
                    {
                        text: "///…@",
                        next_id: 17,
                    },
                ],
            },

            {
                id: 17,
                text: "Пользовательские соглашения хотя бы читаешь?",
                answers: [
                    {
                        text: "ДА",
                        next_id: 18,
                    },
                ],
            },

            {
                id: 18,
                text: "И к этому сайту тоже?",
                answers: [
                    {
                        next_id: 19,
                        glitch: true,
                        action: () => store.commit("set_level", 3),
                    },
                ],
            },

            // lvl 3
            {
                id: 19,
                text: "Снова здравствуй! Ты зашёл неожиданно далеко\nХочешь продолжить?",
                answers: [
                    {
                        next_id: 20,
                        glitch: true,
                    },
                ],
            },

            {
                id: 20,
                text: "Уверен?",
                answers: [
                    {
                        next_id: 21,
                        glitch: true,
                    },
                ],
            },

            {
                id: 21,
                text: "Ну что, давай дальше, бесплатными вай-фай сетями пользуешься?",
                answers: [
                    {
                        next_id: 22,
                        glitch: true,
                    },
                    {
                        next_id: 22,
                        glitch: true,
                    },
                    {
                        next_id: 22,
                        glitch: true,
                    },
                ],
            },

            {
                id: 22,
                text: "Такой чуши я давно не слышала! äàñò ìîùíûé òîë÷îê ïîäú¸ìó ñåëüñêîãî õîçÿéñòâà?",
                answers: [
                    {
                        next_id: 23,
                        glitch: true,
                    },
                    {
                        next_id: 23,
                        glitch: true,
                    },
                ],
            },

            {
                id: 23,
                text: "Ну что за глупости!",
                answers: [
                    {
                        next_id: 24,
                        glitch: true,
                    },
                ],
            },

            {
                id: 24,
                text: "íûé òîë÷îê ïîä",
                answers: [
                    {
                        next_id: 25,
                        glitch: true,
                    },
                ],
            },

            {
                id: 25,
                text: "íû",
                answers: [
                    {
                        next_id: 26,
                        glitch: true,
                    },
                ],
            },

            {
                id: 26,
                text: "",
                answers: [
                    {
                        next_id: 26,
                        glitch: true,
                    },
                    {
                        next_id: 26,
                        glitch: true,
                    },
                    {
                        next_id: 26,
                        glitch: true,
                    },
                ],
            },
        ];

        return scenario.find((d) => d.id == store.state.dialog_id);
    });

    return dialog;
};

export const useProceed = () => {
    const store = useStore();
    const dialog = useDialog();

    return (answer: Answer) => {
        if (answer.action) answer.action();

        if (typeof dialog.value?.exp !== "undefined") {
            store.commit("add_exp", dialog.value.exp);
        }

        store.commit("dia", answer.next_id);
    };
};
