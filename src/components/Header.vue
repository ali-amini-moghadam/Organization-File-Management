<template>
  <!--  Header Container -->
  <div class="row shadow-sm bg-white p-3 rounded">
    <!--  Header Title  -->
    <h4 class="title-section col-sm-4 text-center fw-bold">
      <slot></slot>
    </h4>
    <!-- End of Header Title  -->
    <!--  Search bar  -->
    <div class="col-sm-8 align-items-center">
      <div class="input-group">
        <button class="btn btn-primary rounded-end rounded-0">
          <img
            src="../assets/images/search.svg"
            width="35"
            height="35"
            alt="search"
          />
        </button>
        <input
          type="text"
          class="form-control rounded-start rounded-0"
          placeholder="جستجو نمایید ..."
        />
      </div>
    </div>
    <!-- End of Search bar  -->
  </div>
  <!-- End of Header Container -->
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
