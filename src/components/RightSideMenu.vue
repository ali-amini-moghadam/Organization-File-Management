<template>
  <aside class="right-side-menu">
    <!-- User Info -->
    <div class="vstack user-info align-items-center p-3">
      <img
        class="avatar rounded-circle mb-4"
        src="../assets/images/default-avatar.png"
        alt="user-avatar"
      />
      <p class="text-white">
        <span class="fw-bold">نام کاربری :</span>
        {{ username }}@
      </p>
      <p class="text-white">
        <span class="fw-bold">سطح دسترسی :</span>
        {{ accessLevelType }} (سطح 3)
      </p>
    </div>
    <!--  End Of User Info -->
    <!-- Menu Items -->
    <div class="side-menu-items mt-4">
      <SideMenuItem
        icon-url="./src/assets/images/my-files.svg"
        item-title="فایل‌های من"
        navigation-url="/"
        @side-menu-item-clicked="menuItemSelected"
      />
      <SideMenuItem
        icon-url="./src/assets/images/inbox.svg"
        item-title="صندوق ورودی"
        navigation-url="/inbox"
        @side-menu-item-clicked="menuItemSelected"
      />
      <SideMenuItem
        icon-url="./src/assets/images/administrator.svg"
        item-title="مدیریت"
        navigation-url="/admin-panel"
        @side-menu-item-clicked="menuItemSelected"
      />
    </div>
    <!-- End of Menu Items -->
  </aside>
</template>

<script>
import SideMenuItem from "./SideMenuItem.vue";

export default {
  components: {
    SideMenuItem,
  },
  emits: ["sideMenuItemClicked"],
  props: {
    username: { type: String, required: true },
    accessLevelType: { type: String, required: true },
  },
  methods: {
    // when side menu item clicked
    menuItemSelected(e, navigationUrl) {
      let previousActiveMenu = document.querySelector(".menu-item.active");
      previousActiveMenu.classList.remove("active");
      if (e.target.tagName === "BUTTON") {
        e.target.classList.add("active");
      } else if (e.target.parentElement.tagName === "BUTTON") {
        e.target.parentElement.classList.add("active");
      }
      // navigate to the URL
      this.$router.push(navigationUrl);
      // change the header title
    },
  },
};
</script>

<style scoped>
.user-info {
  font-size: 16px;
}
.right-side-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 25%;
  background-color: #03045e;
}
.avatar {
  width: 120px;
  height: 120px;
}
</style>
