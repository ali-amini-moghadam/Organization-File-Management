<template>
  <div class="d-flex flex-row flex-wrap align-items-center">
    <div
      class="d-flex flex-row align-items-center my-3"
      v-for="i in 6"
      :key="`file-history-${i}`"
    >
      <File :name="`File Ver. ${i}`" url="" :show-triple-dot-button="false" />
      <img
        src="@/assets/images/left-arrow.svg"
        class="mx-2"
        alt="left-arrow"
        width="64"
        height="64"
        v-if="i != 6"
      />
    </div>
  </div>
</template>

<script>
import File from "../components/File.vue";

export default {
  name: "FileDetails",
  components: {
    File,
  },
};
</script>

<style scoped></style>
