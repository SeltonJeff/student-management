import { createStore } from "vuex";
import { AlertStore, TAlertState } from "./alerts";
import { LayoutStore, TLayoutState } from "./layouts";
import { StudentStore, TStudentState } from "./student";

export type TAppState = {
  alert: TAlertState;
  layout: TLayoutState;
  student: TStudentState;
};

const AppStore = createStore({
  modules: { alert: AlertStore, layout: LayoutStore, student: StudentStore },
});

export default AppStore;
