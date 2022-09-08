import { createStore } from "vuex";
import { AlertStore, TAlertState } from "./alerts";
import { LayoutStore, TLayoutState } from "./layouts";

export type TAppState = {
  alert: TAlertState;
  layout: TLayoutState;
};

const AppStore = createStore({
  modules: { alert: AlertStore, layout: LayoutStore },
});

export default AppStore;
