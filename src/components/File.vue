<template>
  <div class="bg-white text-center rounded-3 shadow-sm position-relative p-2">
    <!-- Triple dots or more action of file -->
    <div class="triple-dots rounded-circle border bg-white p-1 shadow-sm">
      <!--   Triple dot image   -->
      <img
        src="../assets/images/triple-dots.svg"
        alt="triple-dots"
        width="32"
        height="32"
      />
    </div>
    <!--  File image  -->
    <img
      class="mt-2"
      src="../assets/images/file.svg"
      alt="file-icon"
      width="96"
      height="96"
    />
    <!-- File name  -->
    <h6 class="file-name mt-1 text-wrap">filename.txt</h6>
  </div>
</template>

<script>
export default {
  name: "File",
};
</script>

<style scoped>
.file-container {
  position: relative;
}
.triple-dots {
  position: absolute;
  top: -10px;
  right: -10px;
}
.triple-dots:hover {
  background-color: #f6f6f6 !important;
}
</style>
