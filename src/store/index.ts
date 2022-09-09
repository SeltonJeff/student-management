import { createStore } from "vuex";
import { AlertStore, TAlertState } from "./alert";
import { LayoutStore, TLayoutState } from "./layouts";
import { StudentStore, TStudentState } from "./student";

export type TAppState = {
  layout: TLayoutState;
  alert: TAlertState;
  student: TStudentState;
};

const AppStore = createStore({
  modules: { layout: LayoutStore, alert: AlertStore, student: StudentStore },
});

export default AppStore;
