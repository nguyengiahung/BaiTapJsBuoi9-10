
function DanhSachNhanVien() {
    // Tạo mảng nhân viên 
    this.mangNhanVien = [];

    // Thêm NV vào mảng
    this.themNhanVien = function(nv) {
        this.mangNhanVien.push(nv)
    }

    // Tìm Index các phần tử con
    this.findIndexNV = function(tk) {
        var indexFind = -1;
        indexFind = this.mangNhanVien.findIndex(function(nv) {
            return nv.taiKhoan == tk;
        })
        return indexFind;
    }

    // Xóa NV
    this.xoaNV = function(tk) {
        var index = this.findIndexNV(tk);

        if (index != -1) {
            this.mangNhanVien.splice(index, 1);
        }
    }

    // Update NV
    this.capNhatNV = function (nv) {
        //tìm index
        var index = this.findIndexNV(nv.taiKhoan);
        if (index != -1) {
            this.mangNhanVien[index] = nv;
        }
    }
}



