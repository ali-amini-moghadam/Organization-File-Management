<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <form action="#" class="bg-white">
          <fieldset class="border p-4">
            <legend class="px-3 fw-bold">ورود به حساب کاربری</legend>
            <div class="mb-3">
              <label for="username" class="form-label">نام کاربری:</label>
              <input
                v-model="usernameInput"
                type="text"
                id="username"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">رمز عبور:</label>
              <input
                v-model="passwordInput"
                type="text"
                id="password"
                class="form-control"
              />
            </div>
            <!--   SUBMIT BUTTON   -->
            <input
              type="submit"
              value="ورود به حساب"
              class="btn btn-success rounded-pill w-100 mt-3"
              @click.prevent="checkLogin"
            />
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: function () {
    return {
      usernameInput: "",
      passwordInput: "",
    };
  },
  methods: {
    checkLogin: function () {
      if (this.usernameInput == "admin" && this.passwordInput == "admin") {
        this.$router.push("/");
        return;
      }
      alert("Username & Password entered is incorrect");
    },
  },
};
</script>

<style scoped></style>
