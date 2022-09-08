import { Module } from "vuex";

type TCurrent = "default" | "app";
export type TLayoutState = {
  current: TCurrent;
};

const initialState: TLayoutState = {
  current: "default",
};

export const LayoutStore: Module<TLayoutState, any> = {
  state: () => initialState,
  mutations: {
    setLayout(state, payload: TCurrent) {
      state.current = payload;
    },
  },
  actions: {
    setLayout(context, payload: TCurrent) {
      context.commit("setLayout", payload);
    },
  },
};
