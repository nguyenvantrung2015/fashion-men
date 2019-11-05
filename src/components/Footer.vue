<template>
  <div class="row footer bg-white text-dark">
    <div class="col-md-3">
      <h5>Về chúng tôi</h5>
      <p>Giao diện bán hàng được thiết kế và duy trì bởi Topweb. Mọi nhu cầu mua giao diện web, thắc mắc, tư vấn,... xin vui lòng liên hệ theo thông tin dưới đây:</p>
      <p>- Phone: 0986989626</p>
      <p>- Email: topweb.com.vn@gmail.com</p>
    </div>
    <div class="col-md-2">
      <h5>Quy định & hướng dẫn</h5>
      <ul class="list-group list-quydinh">
        <li class="list-group-item">
          <a href>Hướng dẫn đặt hàng</a>
        </li>
        <li class="list-group-item">
          <a href>Hình thức thanh toán</a>
        </li>
        <li class="list-group-item">
          <a href>Quy trình thực hiện</a>
        </li>
        <li class="list-group-item">
          <a href>Dịch vụ chuyển SHIP COD</a>
        </li>
      </ul>
      <h5 class="mt-2">Thông tin chung</h5>
      <ul class="list-group list-thongtin">
        <li class="list-group-item">
          <a href>Giới thiệu Công ty</a>
        </li>
        <li class="list-group-item">
          <a href>Năng lực sản xuất</a>
        </li>
        <li class="list-group-item">
          <a href>Thư ngỏ đối tác</a>
        </li>
        <li class="list-group-item">
          <a href>Bán hàng</a>
        </li>
      </ul>
    </div>
    <div class="col-md-3 list-sp">
      <h5>Danh mục sản phẩm</h5>
      <ul class="list-group">
        <li class="list-group-item">Vest nam cao cấp</li>
        <li class="list-group-item">Sơ mi nam dài tay</li>
        <li class="list-group-item">Áo ba lỗ nam</li>
        <li class="list-group-item">Quần âu cao cấp</li>
        <li class="list-group-item">Quần đũi cao cấp</li>
        <li class="list-group-item">Quần âu cao cấp</li>
        <li class="list-group-item">Đồ lót nam cao cấp</li>
        <li class="list-group-item">Phụ kiện thời trang</li>
      </ul>
    </div>
    <div class="col-md-4 sanpham">
      <ul class="list-group">
        <li class="list-group-item">
          <img
            src="https://thoitrang1.haiphongweb.com/wp-content/uploads/2017/08/Ao_so_mi_nam_body_tay_ngan_han_quoc_A1155_2-180x180.jpg"
            alt
          />
          <div>
            <p><a href="#">Phụ kiện thời trang nam cao cấp 23</a></p>
            <p class="text-secondary">450.000VNĐ</p>
          </div>
        </li>
        <li class="list-group-item">
          <img
            src="https://thoitrang1.haiphongweb.com/wp-content/uploads/2017/08/Ao_so_mi_nam_body_tay_ngan_han_quoc_A1155_2-180x180.jpg"
            alt
          />
          <div>
            <p><a href="#">Phụ kiện thời trang nam cao cấp 23</a></p>
            <p class="text-secondary">450.000VNĐ</p>
          </div>
        </li>
        <li class="list-group-item">
          <img
            src="https://thoitrang1.haiphongweb.com/wp-content/uploads/2017/08/Ao_so_mi_nam_body_tay_ngan_han_quoc_A1155_2-180x180.jpg"
            alt
          />
          <div>
            <p><a href="#">Phụ kiện thời trang nam cao cấp 23</a></p>
            <p class="text-secondary">450.000VNĐ</p>
          </div>
        </li>
        <li class="list-group-item">
          <img
            src="https://thoitrang1.haiphongweb.com/wp-content/uploads/2017/08/Ao_so_mi_nam_body_tay_ngan_han_quoc_A1155_2-180x180.jpg"
            alt
          />
          <div>
            <p><a href="#">Phụ kiện thời trang nam cao cấp 23</a></p>
            <p class="text-secondary">450.000VNĐ</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.row {
  margin-left: 0px;
  margin-right: 0px;
}

.footer h5 {
  font-weight: 600;
  font-size: 16px;
}
.list-thongtin .list-group-item,
.list-quydinh .list-group-item {
  padding: 0px;
  border: none;
}

.list-sp li {
  padding: 5px;
  border: none;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 2px;
}

.list-sp li:hover {
  cursor: pointer;
  background-color: orange;
  color: aliceblue;
}

.list-sp {
  border: 1px solid #d8d8d8;
  padding: 10px;
}

.list-thongtin .list-group-item a,
.list-quydinh .list-group-item a,
.sanpham a {
  text-decoration: none;
  color: inherit;
}

.list-thongtin .list-group-item a:hover,
.list-quydinh .list-group-item a:hover,
.sanpham a:hover {
  color: orange;
}

.sanpham img {
  width: 60px;
  height: 60px;
}

.sanpham .list-group-item {
  display: inline-flex;
  border: none;
}

.sanpham .list-group-item div {
  line-height: 7px;
  display: block;
  padding: 10px;
}

.sanpham li {
  border-bottom: 1px solid #d8d8d8 !important;
  margin-bottom: 2px;
  padding-left: 0px;
}
</style>

