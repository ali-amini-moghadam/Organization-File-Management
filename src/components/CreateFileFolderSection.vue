<template>
  <div class="row file-folder-container bg-white shadow-sm rounded-top p-3">
    <!--  Add File Modal Section  -->
    <div class="col-sm-6 text-center">
      <!--  Button Trigger Modal   -->
      <button
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#AddFileModal"
      >
        <img
          src="../assets/images/add-file.svg"
          alt="add-file"
          width="32"
          height="32"
        />
        ایجاد سند
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        id="AddFileModal"
        tabindex="-1"
        aria-labelledby="AddFileModalLabel"
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
              <h5 class="modal-title text-center fw-bold">ایجاد سند</h5>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer justify-content-center">
              <button type="button" class="btn btn-success flex-grow-1 mx-4">
                <img
                  src="../assets/images/upload.svg"
                  alt="upload-img"
                  width="32"
                  height="32"
                />
                بارگذاری سند
              </button>
              <button
                type="button"
                class="btn btn-danger flex-grow-1 mx-4"
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
    </div>
    <!--  End Of Add File Modal Section  -->

    <!--  Add Folder Modal Section  -->
    <div class="col-sm-6 text-center">
      <button class="btn btn-success">
        <img
          src="../assets/images/add-folder.svg"
          alt="add-folder"
          width="32"
          height="32"
        />
        ایجاد پوشه
      </button>
    </div>
    <!-- End Of Add Folder Modal Section  -->
  </div>
</template>

<script>
export default {
  name: "CreateFileFolderSection",
};
</script>

<style scoped>
.file-folder-container {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.btn-close {
  position: absolute;
  right: 15px;
}
</style>
