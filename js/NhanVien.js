
function NhanVien(taiKhoan, ten, email, matKhau, ngayLam, luong, chucVu, gioLam) {

    // Thuộc tính của prototype nhân viên
    this.taiKhoan = taiKhoan;
    this.ten = ten;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luong = luong;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.loaiNhanVien;
    var e = getElement('chucvu')
    var value = e.value;

    // Hàm tính lương
    this.tinhLuong = function() {
        if (value === '3') {
            this.tongLuong = this.luong * 3;
        } else if (value === '2') {
            this.tongLuong = this.luong * 2;
        } else if (value === '1') {
            this.tongLuong = this.luong;
        } else {
            this.tongLuong;
        }
    }

    // Hàm hiện chức vụ
    this.hienChucVu = function() {
        var text = e.options[e.selectedIndex].text;

        if (value === '3') {
            this.chucVu = text
        } else if (value === '2') {
            this.chucVu = text
        } else if (value === '1') {
            this.chucVu = text
        } else {
            this.chucVu = text
        }
    }

    // Hàm hiện loại nhân viên
    this.loaiNhanVien = function() {
        if (this.gioLam >= 192) {
            this.loaiNhanVien = 'Xuất Sắc'; 
        } else if (this.GioLam >= 176) {
            this.loaiNhanVien = 'Giỏi'; 
        } else if (this.GioLam >= 160) {
            this.loaiNhanVien = 'Khá'; 
        } else {
            this.loaiNhanVien = 'Trung Bình'; 
        }
    }
}
