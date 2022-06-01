<template>
  <div class="file-container position-relative text-center">
    <!-- TRIPLE DOT BUTTON -->
    <button
      class="triple-dot-btn rounded-circle border bg-white p-1"
      @click="ShowContextMenu"
      v-if="showTripleDotButton"
    >
      <img
        src="../assets/images/triple-dot.svg"
        alt="triple-dot"
        width="32"
        height="32"
      />
      <!-- FILE CONTEXT MENU -->
      <FileContextMenu :show-menu="showContextMenu" />
    </button>
    <!--  FILE BODY  -->
    <router-link :to="url" class="file-body btn w-100 bg-white shadow-sm">
      <img
        class="mt-2"
        src="../assets/images/file.svg"
        alt="file-icon"
        width="96"
        height="96"
      />
      <!-- FILE NAME  -->
      <h6 class="file-name mt-1 text-wrap">{{ name }}</h6>
    </router-link>
  </div>
</template>

<script>
import FileContextMenu from "./FileContextMenu.vue";

export default {
  name: "File",
  components: {
    FileContextMenu,
  },
  data: function () {
    return {
      showContextMenu: false,
    };
  },
  props: {
    url: String,
    name: String,
    showTripleDotButton: Boolean,
  },
  methods: {
    ShowContextMenu: function () {
      this.showContextMenu = !this.showContextMenu; // toggle effect
    },
  },
};
</script>

<style scoped>
.triple-dot-btn:hover,
.file-body:hover {
  background-color: #f5f5f5 !important;
  transition: background-color 0.3s ease-out;
}
.triple-dot-btn {
  position: absolute;
  top: -10px;
  right: -10px;
}
</style>
