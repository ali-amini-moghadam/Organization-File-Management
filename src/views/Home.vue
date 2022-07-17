<template>
  <div class="container">
    <div class="row">
      <!--  Right Side -->
      <div class="col-3">
        <!--  Right Side Menu Section  -->
        <RightSideMenu
          @side-menu-item-clicked="changeSectionTitle"
          username="ali_alavi"
          access-level-type="کارمند"
        />
      </div>
      <!-- End of Right Side -->
      <!-- Left Side (vertical stack)-->
      <div class="col-9 vstack mt-3">
        <!-- Header Section -->
        <Header>{{ sectionTitle }}</Header>
        <!-- Router View -->
        <router-view class="mt-3"></router-view>
      </div>
      <!-- End of Left Side(vertical stack)-->
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import RightSideMenu from "../components/RightSideMenu.vue";

export default {
  components: {
    Header,
    RightSideMenu,
  },
  emits: ["sideMenuItemClicked"],
  data: function () {
    return {
      sectionTitle: "",
      username: "",
      accessType: "",
    };
  },
  methods: {
    changeSectionTitle: function (sectionTitle) {
      this.sectionTitle = sectionTitle;
    },
  },
};
</script>

<style scoped></style>
