import { RouteRecordRaw } from "vue-router";

import StudentList from "../../pages/dashboard/_student/index.vue";
import NewStudent from "../../pages/dashboard/_student/newStudent.vue";
import EditStudent from "../../pages/dashboard/_student/editStudent.vue";

const parent = "/dashboard/student";
export const StudentRoutes: RouteRecordRaw[] = [
  { path: "/", component: StudentList },
  { path: "/new", component: NewStudent },
  { path: "/edit", component: EditStudent },
].map(({ path, ...attr }) => ({ path: `${parent}${path}`, ...attr }));
