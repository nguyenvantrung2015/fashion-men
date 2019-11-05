<template>
  <div class="dialogs">
    <div class="dialog dialog-active">
      <transition name="bounce" appear>
        <div class="dialog-content">
          <div class="close rotate mr-2 mt-1" @click="close">
            <i class="fa fa-times"></i>
          </div>
          <header class="dialog-header" slot="header">
            <h1 class="dialog-title">Đăng nhập</h1>
          </header>
          <div class="dialog-body" slot="body">
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
            </form>
          </div>
          <footer class="dialog-footer" slot="footer">
            <button @click="close" class="btn btn-danger">Đóng</button>
          </footer>
        </div>
      </transition>
    </div>
    <div class="dialog-overlay"></div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      userLogin: {
        name: "",
        password: "",
        remember: false
      }
    };
  },
  methods: {
    close() {
      this.$emit("closeModal", false);
    }
  }
};
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 1s;
}
@keyframes bounce-in {
  0% {
    transform: translateX(-400px);
    opacity: 0;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

.dialog {
  width: 100%;
  position: fixed;
  left: 50%;
  top: 5em;
  transform: translateX(-50%);
  z-index: 2000;
}

.dialog-active {
  visibility: visible;
}

.dialog-active .dialog-content {
  position: relative;
  opacity: 1;
  transform: rotateY(0);
}

.dialog-active ~ .dialog-overlay {
  opacity: 1;
  visibility: visible;
}

.dialog-content {
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(29, 185, 152, 0.1);
  background: rgba(123, 123, 123, 0.9);
}

.dialog-header {
  color: #fff;
}

.dialog-title {
  margin: 0;
  font-size: 2em;
  text-align: center;
  font-weight: 200;
  line-height: 2em;
  background-image: linear-gradient(to right, #252525, #c0c090);
}

.dialog-body {
  background-color: aliceblue;
  padding: 15px;
}

.dialog-footer {
  padding: 1em;
  text-align: right;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(to right, #252525, #c0c090);
}

.dialog-overlay {
  content: "";
  position: fixed;
  visibility: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.6s;
}

form label {
  color: #72121b;
}

input::placeholder {
  color: rgb(75, 75, 75);
}

@media screen and (min-width: 481px) {
  .dialog {
    width: 60%;
  }

  .dialog-body {
    padding: 3em 10em;
    background-color: aliceblue;
  }
}
</style>

