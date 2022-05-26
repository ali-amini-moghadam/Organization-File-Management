<template>
  <div class="my-files-container position-relative">
    <!-- List of my files -->
    <div class="row gx-5 gy-3">
      <div class="col-sm-6 col-md-3">
        <File />
      </div>
    </div>
    <CreateFileFolderSection />
  </div>
</template>

<script>
import File from "../components/File.vue";
import CreateFileFolderSection from "../components/CreateFileFolderSection.vue";

export default {
  name: "MyFiles",
  components: {
    File,
    CreateFileFolderSection,
  },
  data: function () {
    return {
      sectionTitle: "فایل‌های من",
      menuItemOrder: 1,
    };
  },
  emits: ["changeStates"],
  created() {
    this.$emit("changeStates", this.sectionTitle, this.menuItemOrder);
  },
};
</script>

<style scoped></style>
