<template>
  <div class="login bg-white text-dark">
    <h5 class="text-center">Đăng nhập</h5>
    <form class="was-validated">
      <div class="form-group">
        <label for="uname">Tài khoản:</label>
        <input
          type="text"
          class="form-control"
          v-model.lazy="userLogin.name"
          placeholder="Enter username"
          name="uname"
          required
        />
      </div>
      <div class="form-group">
        <label for="pwd">Mật khẩu:</label>
        <input
          type="password"
          class="form-control"
          v-model.lazy="userLogin.password"
          placeholder="Enter password"
          name="pswd"
          required
        />
      </div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <input
            class="form-check-input"
            type="checkbox"
            value="true"
            required
            v-model="userLogin.remember"
          /> Remember me
        </label>
      </div>
      <button class="btn btn-primary">Đăng nhập</button>
      <router-link tag="a" class="text-dark link-signin ml-2" :to="{ name: 'dangky'}">Đăng ký</router-link>
    </form>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      userLogin: {
        name: "",
        password: "",
        confirm_password: "",
        phone: "",
        remember: false
      }
    };
  }
};
</script>
<style scoped>
.login {
  padding: 115px 13px;
}
form {
  padding: 30px 7px;
  box-shadow: 2px 4px 4px #8d8d8d;
}

.login h5 {
  background-image: linear-gradient(to right, orange, red, transparent);
  color: white;
  padding: 5px;
}

.link-signin{
  border: 1px solid #dbdbdb;
  display: inline-block;
  padding: 6px 10px;
  box-shadow: 1px 1px 1px #333;
}
</style>
