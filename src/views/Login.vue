<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-6">
        <form action="#" class="bg-white">
          <fieldset class="border p-4">
            <legend class="px-3 fw-bold">ورود به حساب کاربری</legend>
            <div class="mb-3">
              <label for="usernameInput" class="form-label">نام کاربری:</label>
              <input
                v-model="usernameValue"
                type="text"
                id="usernameInput"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="passwordInput" class="form-label">رمز عبور:</label>
              <input
                v-model="passwordValue"
                type="password"
                id="passwordInput"
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
      usernameValue: "",
      passwordValue: "",
    };
  },
  methods: {
    checkLogin: function () {
      if (this.usernameValue == "admin" && this.passwordValue == "admin") {
        this.$router.push("/");
        return;
      }
      alert("Username & Password entered is incorrect");
    },
  },
};
</script>

<style scoped></style>
