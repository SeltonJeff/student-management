import { createStore } from "vuex";
import { AlertStore, TAlertState } from "./alert";
import { LayoutStore, TLayoutState } from "./layouts";
import { StudentStore, TStudentState } from "./student";
import { UserStore, TUserState } from "./user";

export type TAppState = {
  layout: TLayoutState;
  alert: TAlertState;
  student: TStudentState;
  user: TUserState;
};

const AppStore = createStore({
  modules: {
    layout: LayoutStore,
    alert: AlertStore,
    student: StudentStore,
    user: UserStore,
  },
});

export default AppStore;
