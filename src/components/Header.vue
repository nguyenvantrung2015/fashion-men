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
        <ul class="navbar-nav mr-4">
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
          <router-link
            tag="li"
            class="nav-item hidden-sm"
            active-class="bg-info"
            :to="{ name: 'dangky'}"
          >
            <a class="nav-link text-white" href="#">Đăng ký</a>
          </router-link>
          <router-link
            tag="li"
            class="nav-item hidden-sm"
            active-class="bg-info"
            :to="{ name: 'dangnhap'}"
          >
            <a class="nav-link text-white" href="#">Đăng nhập</a>
          </router-link>
        </ul>
        <form class="form-inline my-2 my-lg-0 hidden">
          <input
            class="form-control mr-sm-2 search bg-secondary text-white"
            type="search"
            placeholder="Bạn cần tìm gì?"
            v-model="searchSp"
          />
          <i class="fa fa-search text-white" aria-hidden="true"></i>
          <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
        </form>
        <div class="list-search hidden">
          <ul class="list-group">
            <!-- <li class="list-group-item bg-dark">abv</li> -->
            <li
              class="list-group-item bg-dark"
              v-for="item in itemSearched"
              v-bind:key="item"
            >{{ item }}</li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="login hidden">
      <a href="#" @click="show = true, dialogName='appLogin'">Đăng nhập</a>
      <a href="#" @click="show = true, dialogName='appSignin'">Đăng ký</a>
    </div>
    <component v-if="show" :is="dialogName" @closeModal="show = $event"></component>
    <div class="row hidden-sm">
      <div class="col-12 search-phone">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2 search bg-secondary text-white"
            type="search"
            placeholder="Bạn cần tìm gì?"
            v-model="searchSp"
          />
          <i class="fa fa-search text-white" aria-hidden="true"></i>
          <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
        </form>
      </div>
      <div class="col-12">
        <ul class="list-group">
          <!-- <li class="list-group-item bg-dark">abv</li> -->
          <li
            class="list-group-item bg-dark"
            v-for="item in itemSearched"
            v-bind:key="item"
          >{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Login from "./chidlen/modalLogin";
import Signin from "./chidlen/modalSignin";
export default {
  data: function() {
    return {
      show: false,
      dialogName: "appLogin",
      typeSp: [
        "Vest nam cao cấp",
        "Sơ mi nam dài tay",
        "Áo ba lỗ nam",
        "Quần âu cao cấp",
        "Quần đũi cao cấp",
        "Đồ lót nam cao cấp",
        "Phụ kiện thời trang"
      ],
      searchSp: ""
    };
  },
  computed: {
    itemSearched() {
      if (this.searchSp.length == 0) {
        return [];
      } else {
        return this.typeSp.filter(element => {
          return element.toLowerCase().match(this.searchSp.toLowerCase());
        });
      }
    }
  },
  components: {
    appLogin: Login,
    appSignin: Signin
  }
};
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
  width: 26px;
  height: 26px;
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
  width: 310px;
  position: relative;
  font-size: 14px;
  outline: none;
  margin-left: 25px;
}

.search::placeholder {
  color: white;
}

.fa-search {
  position: absolute;
  right: 16%;
  bottom: 30%;
}

.search-phone {
  padding: 0px;
}

.nav-link {
  padding: 10px;
}

.hidden {
  display: none;
}

.list-search {
  position: absolute;
  top: 67%;
  right: 6%;
  width: 370px;
  z-index: 10;
}

.list-search li:hover {
  cursor: pointer;
  color: orange;
}

.fa-shopping-cart:hover {
  cursor: pointer;
  color: rgb(228, 228, 228);
}
@media screen and (min-width: 481px) {
  .search {
    width: 370px;
    margin-left: 0px;
  }
  .hidden-sm {
    display: none;
  }

  .hidden {
    display: block;
  }

  .logofashion {
    width: 75px;
    height: 75px;
  }

  .fa-search {
    right: 7%;
    bottom: 42%;
  }

  .fa-shopping-cart {
    position: absolute;
  }
}
</style>
