import { Module } from "vuex";

export type TStudent = {
  ra: string;
  name: string;
  email: string;
  cpf: string;
};

export type TStudentState = {
  list: TStudent[];
  studentToEdit: TStudent;
};

const initialState: TStudentState = {
  list: [],
  studentToEdit: { ra: "", name: "", email: "", cpf: "" },
};

export const StudentStore: Module<TStudentState, any> = {
  state: () => initialState,
  mutations: {
    setStudent(state, payload) {
      state.list = payload;
    },
    setStudentToEdit(state, payload) {
      state.studentToEdit = payload;
    },
  },
  actions: {
    setStudents(context, payload: TStudent[]) {
      context.commit("setStudent", payload);
    },
    setStudentToEdit(context, payload: TStudent) {
      context.commit("setStudentToEdit", payload);
    },
  },
};
