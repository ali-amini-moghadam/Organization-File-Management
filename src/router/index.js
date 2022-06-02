import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "my-files",
          component: () => import("../views/MyFiles.vue"),
        },
        {
          path: "inbox",
          component: () => import("../views/Inbox.vue"),
        },
        {
          path: "admin-panel",
          component: () => import("../views/AdminPanel.vue"),
        },
        {
          path: "my-files/files/:fileId",
          component: () => import("../views/FileDetails.vue"),
        },
      ],
    },
  ],
});

export default router;
