<template>
  <h1 class="text-success fw-bold text-capitalize bg-light p-3 text-center">
    به پنل ادمین خوش امدید
  </h1>
</template>

<script>
export default {
  name: "AdminPanel",
  data: function () {
    return {
      sectionTitle: "پنل مدیریت",
      menuItemOrder: 3,
    };
  },
  emits: ["changeStates"],
  created() {
    this.$emit("changeStates", this.sectionTitle, this.menuItemOrder);
  },
};
</script>

<style scoped></style>