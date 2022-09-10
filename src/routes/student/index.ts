import { RouteRecordRaw } from "vue-router";

import StudentList from "../../pages/dashboard/_student/index.vue";
import NewStudent from "../../pages/dashboard/_student/_newStudent.vue";
import EditStudent from "../../pages/dashboard/_student/_editStudent.vue";

const parent = "/dashboard/student";
export const StudentRoutes: RouteRecordRaw[] = [
  { path: "/", component: StudentList },
  { path: "/new", component: NewStudent },
  { path: "/edit", component: EditStudent },
].map(({ path, ...attr }) => ({ path: `${parent}${path}`, ...attr }));
