<template>
  <!-- Triple menu -->
  <div class="context-menu-container position-absolute" v-show="showMenu">
    <ul class="list-group list-group-flush rounded p-0">
      <button class="list-group-item list-group-item-action text-end">
        <img
          src="../assets/images/edit.svg"
          alt="edit-icon"
          width="24"
          height="24"
        />
        <span>ویرایش فایل</span>
      </button>
      <button class="list-group-item list-group-item-action text-end">
        <img
          src="../assets/images/trash_can.svg"
          alt="edit-icon"
          width="24"
          height="24"
        />
        <span>حذف فایل</span>
      </button>
      <button class="list-group-item list-group-item-action text-end">
        <img
          src="../assets/images/share.svg"
          alt="edit-icon"
          width="24"
          height="24"
        />
        <span>اشتراک‌گذاری فایل</span>
      </button>
      <button class="list-group-item list-group-item-action text-end">
        <img
          src="../assets/images/more-info.svg"
          alt="edit-icon"
          width="24"
          height="24"
        />
        <span>جزئیات بیشتر</span>
      </button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TipleDotsMenu",
  props: {
    showMenu: Boolean,
  },
};
</script>

<style scoped>
.context-menu-container {
  width: 180px;
  top: 100%;
  right: 0;
  z-index: 10;
}
.list-group-item img {
  margin-left: 10px;
}
.list-group-item span {
  font-size: 12px;
}
</style>
