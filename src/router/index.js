import { createRouter, createWebHistory } from "vue-router";
import MyFiles from "../views/MyFiles.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MyFiles,
    },
    {
      path: "/inbox",
      component: () => import("../views/Inbox.vue"),
    },
    {
      path: "/admin-panel",
      component: () => import("../views/AdminPanel.vue"),
    },
  ],
});

export default router;
