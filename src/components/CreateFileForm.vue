<template>
  <!--  Button Trigger Modal   -->
  <button
    class="btn btn-primary w-50"
    data-bs-toggle="modal"
    data-bs-target="#AddFileModal"
  >
    <img
      src="../assets/images/add-file.svg"
      alt="add-file"
      width="32"
      height="32"
    />
    افزودن فایل
  </button>
  <!-- Modal -->
  <div
    class="modal fade text-end"
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
          <h5 class="modal-title text-center fw-bold">افزودن فایل</h5>
        </div>
        <!-- Form for creating file  -->
        <div class="modal-body px-4">
          <!--  File title  -->
          <div class="mb-3">
            <label for="file-title-input" class="form-label"
              >عنوان فایل: *</label
            >
            <input
              type="text"
              class="form-control"
              id="file-title-input"
              placeholder="برای مثال: فایل قرارداد همکاری"
            />
          </div>
          <!--  Description  -->
          <div class="mb-3">
            <label for="description-input" class="form-label">توضیحات:</label>
            <textarea
              class="form-control"
              id="description-input"
              rows="3"
              placeholder="در صورت لازم توضیحاتی در مورد فایل بنویسید ..."
            ></textarea>
          </div>
          <!--  Browse file  -->
          <div class="mb-3">
            <label for="formFile" class="form-label">انتخاب فایل: *</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <!--  Expire date  -->
          <div class="mb-3">
            <label for="expire-file-input" class="form-label"
              >تاریخ انقضاء:</label
            >
            <input
              type="datetime-local"
              id="expire-file-input"
              class="form-control"
            />
          </div>
          <!--  Access levels  -->
          <div class="mb-3">
            <label for="file-access-levels" class="form-label">
              سطح دسترسی: *
            </label>
            <select class="form-select" id="file-access-levels">
              <option selected>یک سطح دسترسی انتخاب کنید</option>
              <option value="1">دسترسی فقط برای خود (شخصی)</option>
              <option value="3">سطوح 2 (معاونان)</option>
              <option value="4">سطوح 3 (کارمندان)</option>
            </select>
          </div>
          <!--  Edit permission  -->
          <!--          <div class="mb-3">-->
          <!--            <label class="form-label me-2" for="edit-permission">-->
          <!--              اعطای مجوز ویرایش سند *-->
          <!--            </label>-->
          <!--            <input-->
          <!--              class="form-check-input float-end"-->
          <!--              type="checkbox"-->
          <!--              id="edit-permission"-->
          <!--            />-->
          <!--          </div>-->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-success flex-grow-1 mx-4">
            <img
              src="../assets/images/upload.svg"
              alt="upload-img"
              width="32"
              height="32"
            />
            بارگذاری فایل
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
  name: "CreateFile",
  mounted: function () {
    // change modal position to end of body tag for preventing corrupted functionality
    let createFileModal = document.getElementById("AddFileModal");
    let bodyElement = document.querySelector("body");
    bodyElement.appendChild(createFileModal);
  },
};
</script>

<style scoped>
.form-label {
  font-weight: bold;
}
.btn-close {
  position: absolute;
  right: 15px;
}
</style>
