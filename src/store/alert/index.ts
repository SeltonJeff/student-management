import { Module } from "vuex";

type TAlert = {
  type: "success" | "info" | "warning" | "error";
  content: string;
};

export type TAlertState = {
  isVisible: boolean;
  current: TAlert;
};
const initialState: TAlertState = {
  isVisible: false,
  current: {
    type: "success",
    content: "",
  },
};

export const AlertStore: Module<TAlertState, any> = {
  state: () => initialState,
  mutations: {
    setAlertVisible(state, payload) {
      state.isVisible = payload;
    },
    alert(state, payload: TAlert) {
      state.current = payload;
      state.isVisible = true;
    },
  },
  actions: {
    setAlertVisible(context, payload: boolean) {
      context.commit("setAlertVisible", payload);
    },
    alert(context, payload: TAlert) {
      context.commit("alert", payload);
    },
  },
};
