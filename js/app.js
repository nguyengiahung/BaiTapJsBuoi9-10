
// Danh sách NV lưu trữ các Nvien là biến toàn cục
const dsNhanVien = new DanhSachNhanVien();

function getElement(ele) {
    return document.getElementById(ele);
}

// 4. Validation Form

// Mảng để in ra thông báo
mangThongBao = ['Vui lòng nhập tài khoản',
                'Tài khoản phải là kiểu số',

                'Vui lòng nhập họ tên',
                'Họ tên phải là kiểu chữ',

                'Vui lòng nhập email',
                'Trường này phải là email',

                'Vui lòng nhập mật khẩu',
                'Mật khẩu bắt buộc từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)',

                'Vui lòng nhập ngày làm',

                'Vui lòng nhập mức lương',
                'Mức lương yêu cầu nhập phải từ 1 triệu tới 20 triệu',

                'Vui lòng chọn chức vụ',

                'Vui lòng nhập giờ làm',
                'Giờ làm yêu cầu phải từ 80 đến 200 giờ'
            ]

// Kiểm tra để các ô input không bị bỏ trống
function CheckSpace(idField, ElementThongBao, ArrayThongBao) {
    var valueField = getElement(idField).value;
    var Notification = getElement(ElementThongBao)
    var result = false;

    if (valueField === '') {
        Notification.style.display = 'block';
        Notification.innerHTML = ArrayThongBao;
        result = false;
    } else {
        Notification.style.display = 'none';
        result = true;
    }
    return result;
}

// Kiểm tra chức vụ
function CheckPosition(ArrayThongBao) {
    var valueField = getElement('chucvu').value;
    var Notification = getElement('tbChucVu')
    var result = false;

    if (valueField === '0') {
        Notification.style.display = 'block';
        Notification.innerHTML = ArrayThongBao;
        result = false;
    } else {
        Notification.style.display = 'none';
        result = true;
    }
    return result;
}

// Kiểm tra độ dài và regex
function CheckLengthAndRegex(idField, ElementThongBao, ArrayThongBao, regexCondition, min, max) {
    var valueField = getElement(idField).value;
    var Notification = getElement(ElementThongBao);
    var RegexNumbers = regexCondition; 
    var result = false;

    if (valueField.match(RegexNumbers)) {
        if (valueField.length < min || valueField.length > max) {
            Notification.style.display = 'block';
            Notification.innerHTML = `Vui lòng nhập từ ${min} tới ${max} kí tự`;
        } else {
            Notification.style.display = 'none';
            result = true;
        }
    } else {
        Notification.style.display = 'block';
        Notification.innerHTML = ArrayThongBao;
        result = false;
    }
    return result;
}

// Check regex
function CheckRegex(idField, ElementThongBao, ArrayThongBao, regexCondition) {
    var valueField = getElement(idField).value;
    var Notification = getElement(ElementThongBao)
    var Regex = regexCondition;
    var result = false;

    if (valueField.match(Regex)) {
        Notification.style.display = 'none';
        result = true;
    } else {
        Notification.style.display = 'block';
        Notification.innerHTML = ArrayThongBao
        result = false;
    }
    return result;
}

// Check lương
function CheckSalary(idField, ElementThongBao, ArrayThongBao) {
    var valueField = Number(getElement(idField).value).toLocaleString();
    var Notification = getElement(ElementThongBao)
    var result = false;

    if (valueField < 1e+6 || valueField > 20e+6) {
        Notification.style.display = 'block';
        Notification.innerHTML = ArrayThongBao
        result = false;
    } else {
        Notification.style.display = 'none';
        result = true;
    }
    return result;
}

// Check giờ làm
function CheckHourWorking(idField, ElementThongBao, ArrayThongBao) {
    var valueField = Number(getElement(idField).value).toLocaleString();
    var Notification = getElement(ElementThongBao)
    var result = false;

    if (valueField >= 80 && valueField <= 200) {
        Notification.style.display = 'none';
        result = true;
    } else {
        Notification.style.display = 'block';
        Notification.innerHTML = ArrayThongBao
        result = false;
    }
    return result;
}


function TinhTienLuong() {
    var valueField = Number(getElement('luongCB').value).toLocaleString();
    var ChucVu = getElement('chucvu').value;

    if (ChucVu === '3') {
        TienLuong = valueField * 3;
    } else if (ChucVu === '2') {
        TienLuong = valueField * 2;
    } else {
        TienLuong = valueField;
    }
}

function KiemTraHopLe() {
    // Check tài khoản
    var kq = true; 
    var kq1, kq2, kq3, kq4, kq5, kq6, kq7, kq8, kq9, kq10, kq11, kq12

    kq1 = CheckSpace('tknv','tbTKNV', mangThongBao[0]);
    if (kq1) {
        kq2 = CheckLengthAndRegex('tknv','tbTKNV',mangThongBao[1], /^[0-9]+$/, 4, 6)
    }

    kq3 = CheckSpace('name','tbTen', mangThongBao[2]);
    if (kq3) {
        kq4= CheckRegex('name','tbTen', mangThongBao[3], /^[a-zA-Z ]+$/);
    }

    kq5 = CheckSpace('email','tbEmail', mangThongBao[4]);
    if (kq5) {
        kq6= CheckRegex('email','tbEmail', mangThongBao[5], /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    }

    kq7 = CheckSpace('password','tbMatKhau', mangThongBao[6]);   
    if (kq7) {
        kq8= CheckLengthAndRegex('password','tbMatKhau', mangThongBao[7], /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/, 6, 10);
    }

    kq9 = CheckSpace('luongCB','tbLuongCB', mangThongBao[9]);
    if (kq9) {
        kq10= CheckSalary('luongCB','tbLuongCB', mangThongBao[10])
    }

    kq11= CheckPosition(mangThongBao[11])

    kq12 = CheckSpace('gioLam','tbGiolam', mangThongBao[12]);
    if (kq12) {
        kq13= CheckHourWorking('gioLam','tbGiolam', mangThongBao[13])
    }

    if (kq1 && kq2 && kq3 && kq4 && kq5 && kq6 && kq7 && kq8 && kq9 && kq10 && kq11 && kq12 && kq13) {
        kq = true;
    } else {
        kq = false;
    }
    return kq;
}

// Làm mới form
function RenewForm() {
    var mangID = ['tknv', 'name', 'email', 'password', 'datepicker', 'luongCB', 'chucvu', 'gioLam'];

    for ( var i = 0; i < mangID.length; i++) {
        if (mangID[i] === 'chucvu') {
            getElement(mangID[i]).value = '0'; 
        } else {
            getElement(mangID[i]).value = ''; 
        }
    }
}

// Hiển thị Table
function hienThiTable(mang) {

    var content = '';
    mang.map(function(nv) {
        var trELE = `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.ten}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.loaiNhanVien}</td>
                <td>
                    <button onclick="xoaNhanVien('${nv.taiKhoan}')" class="btn btn-danger">Xóa</button>
                    <button onclick="xemChiTiet('${nv.taiKhoan}')" class="btn btn-info">Xem</button>
                </td>
            </tr>
        `;
        content += trELE;
    })
    getElement('tableDanhSach').innerHTML = content;
}

// lưu data vào local storage
function setLocalStorage(mang) {
    
    // setItem dùng để lưu dữ liệu xuống local, localStorage chỉ cho lưu dạng JSON nên phải chuyển mảng sang JSON, sử dụng stringify
    localStorage.setItem("DSNV", JSON.stringify(mang));
}

function getLocalStorage() {
    // Khi không có local storage thì kết quả là null => không thể dùng các hàm của mảng
    if (localStorage.getItem("DSNV") != null) {
        //nếu có localstorage
        //JSON.parse chuyen JSON sang mang
        dsNhanVien.mangNhanVien = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTable(dsNhanVien.mangNhanVien);
    }
}
getLocalStorage();//gọi khi load trang

// Khi click button thêm NV
getElement('btnThemNV').addEventListener('click', function() {
    var ktrahople = KiemTraHopLe();
    if (ktrahople) {

        // Hợp lệ thì lấy hết các value input bỏ vào biến nhanVien, sau đó add vào mảng dsNhanVien
        var taiKhoan = getElement('tknv').value;
        var ten = getElement('name').value;
        var email = getElement('email').value;
        var matKhau = getElement('password').value;
        var ngayLam = getElement('datepicker').value;
        var luong = getElement('luongCB').value;
        var chucVu = getElement('chucvu').value;
        var gioLam = getElement('gioLam').value;

        var nv = new NhanVien(taiKhoan, ten, email, matKhau, ngayLam, Number(luong), chucVu, gioLam);
        
        // Tính toán
        nv.hienChucVu();
        nv.tinhLuong();
        nv.loaiNhanVien();

        // Thêm NV vào mảng
        dsNhanVien.themNhanVien(nv);
        
        hienThiTable(dsNhanVien.mangNhanVien);

        setLocalStorage(dsNhanVien.mangNhanVien);

        RenewForm();
    }
})

// Xóa Nhân Viên
function xoaNhanVien(tk) {
    // console.log(tk);
    dsNhanVien.xoaNV(tk);
    setLocalStorage(dsNhanVien.mangNhanVien);
    getLocalStorage()

}

function xemChiTiet(tk) {
    // console.log(tk);  
    var index = dsNhanVien.findIndexNV(tk);
    if (index != -1) {
        //tìm thấy
        document.getElementById("tknv").value = dsNhanVien.mangNhanVien[index].taiKhoan;
        document.getElementById("tknv").disabled = true;

        getElement("name").value = dsNhanVien.mangNhanVien[index].ten;
        getElement("email").value = dsNhanVien.mangNhanVien[index].email;
        getElement("password").value = dsNhanVien.mangNhanVien[index].matKhau;
        getElement("datepicker").value = dsNhanVien.mangNhanVien[index].ngayLam;
        getElement("luongCB").value = dsNhanVien.mangNhanVien[index].luong;
        getElement("chucvu").value = dsNhanVien.mangNhanVien[index].chucVu;
        getElement("gioLam").value = dsNhanVien.mangNhanVien[index].gioLam;
    }
}


function capNhat() {

    //lấy giá trị từ form
    var taiKhoan = getElement('tknv').value;
    var ten = getElement('name').value;
    var email = getElement('email').value;
    var matKhau = getElement('password').value;
    var ngayLam = getElement('datepicker').value;
    var luong = getElement('luongCB').value;
    var chucVu = getElement('chucvu').value;
    var gioLam = getElement('gioLam').value;

    var nv = new NhanVien(taiKhoan, ten, email, matKhau, ngayLam, Number(luong), chucVu, gioLam);

    nv.hienChucVu();
    nv.tinhLuong();
    nv.loaiNhanVien();

    dsNhanVien.capNhatNV(nv);

    setLocalStorage(dsNhanVien.mangNhanVien);
    getLocalStorage();

}