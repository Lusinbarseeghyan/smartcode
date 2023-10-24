import { createStore } from "redux";

export const store = createStore((state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}, {});
