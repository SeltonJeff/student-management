import { Module } from "vuex";

export type TUser = {
  name: string;
  email: string;
  cpf: string;
};

export type TUserState = {
  data: TUser;
  access_token: string;
  refresh_token: string;
};

const initialState: TUserState = {
  data: { name: "", email: "", cpf: "" },
  access_token: "",
  refresh_token: "",
};

export const UserStore: Module<TUserState, any> = {
  state: () => initialState,
  mutations: {
    setUser(state, payload: TUserState) {
      state.data = payload.data;
      state.access_token = payload.access_token;
      state.refresh_token = payload.refresh_token;
    },
  },
  actions: {
    setUser(context, payload: TUser) {
      context.commit("setUser", payload);
    },
  },
};
