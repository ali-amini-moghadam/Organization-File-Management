<template>
  <button class="btn btn-primary w-50 disabled" data-bs-target="#AddFolderModal">
    <img
      src="../assets/images/add-folder.svg"
      alt="add-folder"
      width="32"
      height="32"
    />
    ایجاد فولدر
  </button>
  <div
    class="modal fade"
    id="AddFolderModal"
    tabindex="-1"
    aria-labelledby="AddFolderModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header justify-content-center">
          <button
            type="button"
            class="btn-close m-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <h5 class="modal-title text-center fw-bold">ایجاد فولدر</h5>
        </div>
        <!-- Form for creating folder  -->
        <div class="modal-body px-4"></div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-sm btn-success flex-grow-1 mx-4">
            <img
              src="../assets/images/upload.svg"
              alt="upload-img"
              width="32"
              height="32"
            />
            ایجاد فولدر
          </button>
          <button
            type="button"
            class="btn btn-sm btn-danger flex-grow-1 mx-4"
            data-bs-dismiss="modal"
          >
            <img
              src="../assets/images/cancel.svg"
              alt="upload-img"
              width="32"
              height="32"
            />
            لغو عملیات
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateFolder",
};
</script>

<style scoped></style>
