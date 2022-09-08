import { Module } from "vuex";

export type TAlertState = {};

const initialState: TAlertState = {};

export const AlertStore: Module<TAlertState, any> = {
  state: () => initialState,
  mutations: {},
  actions: {},
};
