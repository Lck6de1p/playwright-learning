import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/list",
    name: "list",
    component: () => import("@/views/list/index.vue"),
    meta: {
      sort: 9,
      isRoot: true,
      title: "列表",
    },
  },
];

export default routes;
