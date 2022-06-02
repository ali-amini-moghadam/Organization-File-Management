<template>
  <router-link
    :to="navigationUrl"
    class="menu-item btn w-100 rounded-0 text-end"
  >
    <img class="menu-item-icon ms-3" :src="iconUrl" />
    <span class="text-white">{{ itemTitle }}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    itemTitle: { type: String, required: true },
    iconUrl: { type: String, required: true },
    navigationUrl: { type: String, required: true },
  },
  methods: {},
};
</script>

<style scoped>
.menu-item {
  position: relative;
  height: 60px;
  margin-bottom: 1px;
  background-color: #480ca8;
  font-size: 16px;
}
.menu-item:hover,
.router-link-active {
  background-color: #0d6efd;
}
.router-link-active::before {
  content: "";
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 5px;
  background-color: white;
}
.menu-item-icon {
  width: 35px;
  height: 35px;
}
</style>
