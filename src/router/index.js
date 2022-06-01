import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import MyFiles from "../views/MyFiles.vue";
import Inbox from "../views/Inbox.vue";
import AdminPanel from "../views/AdminPanel.vue";
import FileDetails from "../views/FileDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      components: {
        login: Login,
      },
    },
    {
      path: "/dashboard",
      name: "MyFiles",
      component: MyFiles,
    },
    {
      path: "/inbox",
      name: "Inbox",
      component: Inbox,
    },
    {
      path: "/admin-panel",
      name: "AdminPanel",
      component: AdminPanel,
    },
    {
      path: "/files/:fileId",
      name: "FileDetails",
      component: FileDetails,
    },
  ],
});

export default router;
