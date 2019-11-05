import TrangChu from './components/TrangChu'
import GioiThieu from './components/GioiThieu'
import TinTuc from './components/TinTuc'
import KhuyenMai from './components/KhuyenMai'
import SanPham from './components/SanPham'
import TuyenDung from './components/TuyenDung'
import LienHe from './components/LienHe'
import Header from './components/Header'
import Footer from './components/Footer'
import DangNhap from './components/DangNhap'
import DangKy from './components/DangKy'

export const routes = [
    { path: '/', name: "trangchu", components: {
        default: TrangChu,
        'header': Header,
        'footer': Footer
    } },
    { path: '/gioithieu', name: "gioithieu", components: {
        default: GioiThieu,
        'header': Header,
        'footer': Footer
    } },
    { path: '/tintuc', name: "tintuc", components: {
        default: TinTuc,
        'header': Header,
        'footer': Footer
    } },
    { path: '/khuyenmai', name: "khuyenmai", components: {
        default: KhuyenMai,
        'header': Header,
        'footer': Footer
    } },
    { path: '/sanpham', name: "sanpham", components: {
        default: SanPham,
        'header': Header,
        'footer': Footer
    } },
    { path: '/tuyendung', name: "tuyendung", components: {
        default: TuyenDung,
        'header': Header,
        'footer': Footer
    } },
    { path: '/lienhe', name: "lienhe", components: {
        default: LienHe,
        'header': Header,
        'footer': Footer
    } },
    { path: '/dangnhap', name: "dangnhap", components: {
        default: DangNhap,
        'header': Header,
        'footer': Footer
    } },
    { path: '/dangky', name: "dangky", components: {
        default: DangKy,
        'header': Header,
        'footer': Footer
    } }
]
