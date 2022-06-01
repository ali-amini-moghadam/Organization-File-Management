<template>
  <div class="my-files-container">
    <!-- List of my files (FIRST PART) -->
    <div class="my-files-list row gx-5 gy-3 overflow-auto p-3">
      <div v-for="i in 10" class="col-sm-6 col-md-3" :key="`my-file-${i}`">
        <File
          :url="`/files/${i}`"
          name="File Title"
          :show-triple-dot-button="true"
        />
      </div>
    </div>
    <!--  Bottom section (SECOND PART)  -->
    <div class="row file-folder-container bg-white rounded-top p-3 shadow">
      <!--  Add File Modal Section  -->
      <div class="col-sm-6 text-center">
        <CreateFileForm />
      </div>
      <!--  Add Folder Section  -->
      <div class="col-sm-6 text-center">
        <Folder />
      </div>
    </div>
  </div>
</template>

<script>
import File from "../components/File.vue";
import CreateFileForm from "../components/CreateFileForm.vue";
import Folder from "../components/Folder.vue";

export default {
  name: "MyFiles",
  components: {
    File,
    CreateFileForm,
    Folder,
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

<style scoped>
.my-files-list {
  /*max-height: calc(100% - 85px) !important;*/
  max-height: 450px !important;
}
.file-folder-container {
  position: fixed;
  bottom: 0;
  right: 25%;
  left: 0;
  margin: 0;
}
.btn-close {
  position: absolute;
  right: 15px;
}
</style>
