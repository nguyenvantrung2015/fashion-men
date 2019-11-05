<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand" href="#">
        <img src="../assets/logofashion.jpg" alt class="logofashion" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-5">
          <router-link
            tag="li"
            class="nav-item"
            active-class="bg-info"
            exact
            :to="{ name: 'trangchu'}"
          >
            <a class="nav-link text-white" href="#">Trang chủ</a>
          </router-link>
          <router-link tag="li" class="nav-item" active-class="bg-info" :to="{ name: 'gioithieu'}">
            <a class="nav-link text-white" href="#">Giới thiệu</a>
          </router-link>
          <router-link
            tag="li"
            class="nav-item"
            active-class="bg-info"
            exact
            :to="{ name: 'tintuc'}"
          >
            <a class="nav-link text-white" href="#">Tin tức</a>
          </router-link>
          <router-link tag="li" class="nav-item" active-class="bg-info" :to="{ name: 'khuyenmai'}">
            <a class="nav-link text-white" href="#">Khuyến mại</a>
          </router-link>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Sản phẩm</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <router-link tag="li" class="nav-item" active-class="bg-info" :to="{ name: 'tuyendung'}">
            <a class="nav-link text-white" href="#">Tuyển dụng</a>
          </router-link>
          <router-link
            tag="li"
            class="nav-item"
            active-class="bg-info"
            exact
            :to="{ name: 'lienhe'}"
          >
            <a class="nav-link text-white" href="#">Liên hệ</a>
          </router-link>
          <li class="nav-item hidden-sm">
            <a class="nav-link text-white" href="#">Đăng nhập</a>
          </li>
          <li class="nav-item hidden-sm">
            <a class="nav-link text-white" href="#">Đăng ký</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2 search bg-secondary text-white"
            type="search"
            placeholder="Bạn cần tìm gì?"
          />
          <i class="fa fa-search text-white" aria-hidden="true"></i>
        </form>
      </div>
    </nav>
    <div class="login hidden">
      <router-link tag="a" :to="{name:'dangnhap'}">Đăng nhập</router-link>
      <router-link tag="a" :to="{name:'dangky'}">Đăng ký</router-link>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.header {
  position: relative;
}
.login {
  position: absolute;
  top: 2%;
  right: 1%;
}

.login a {
  padding: 10px;
  text-decoration: none;
  color: rgb(214, 214, 214);
}

.login a:hover {
  color: #9c9c9c;
}

.logofashion {
  width: 75px;
  height: 75px;
  border-radius: 50%;
}

.nav-item:hover {
  cursor: pointer;
}
.nav-item a:hover {
  color: #e9e9e9 !important;
}
.active a {
  color: #6c757d !important;
}

.search {
  border-radius: 25px;
  width: 330px;
  position: relative;
  font-size: 14px;
  outline: none;
}

.search::placeholder {
  color: white;
}

.fa-search {
  position: absolute;
  right: 5%;
}

.nav-link {
  padding: 10px;
}

.hidden {
  display: none;
}


/* dialog modal*/
@media screen and (min-width: 481px) {
  .search {
    width: 370px;
  }
  .hidden-sm {
    display: none;
  }

  .hidden {
    display: block;
  }
}
</style>
