<template>
  <h1 class="text-success fw-bold text-capitalize bg-light p-3 text-center">
    صندوق ورودی
  </h1>
</template>

<script>
export default {
  name: "Inbox",
  data: function () {
    return {
      sectionTitle: "صندوق ورودی",
      menuItemOrder: 2,
    };
  },
  emits: ["changeStates"],
  // created() {
  //   this.$emit("changeStates", this.sectionTitle, this.menuItemOrder);
  // },
};
</script>

<style scoped></style>
