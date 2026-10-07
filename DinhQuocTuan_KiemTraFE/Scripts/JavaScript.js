// số lượng và giá của 3 mặt hàng (vị trí 0, 1, 2)
var soLuong = [1, 2, 3];
var giaMotCai = [44.99, 98.00, 23.99];

// định dạng tiền: 196 -> "$196.00"
function dinhDangTien(so) {
    return "$" + so.toFixed(2);
}

// bấm nút + hoặc - : vitri là mặt hàng thứ mấy, tang là +1 hoặc -1
function doiSoLuong(vitri, tang) {
    var moi = soLuong[vitri] + tang;

    // số lượng không được nhỏ hơn 1
    if (moi < 1) {
        return;
    }
    soLuong[vitri] = moi;
    capNhat();
}

// cập nhật lại giá từng mặt hàng, tổng số lượng và tổng tiền
function capNhat() {
    var tongSL = 0;
    var tongTien = 0;

    for (var i = 0; i < soLuong.length; i++) {
        // giá của một mặt hàng = số lượng * giá một cái
        var giaMatHang = soLuong[i] * giaMotCai[i];

        document.getElementById("sl" + i).innerText = soLuong[i];
        document.getElementById("gia" + i).innerText = dinhDangTien(giaMatHang);

        tongSL = tongSL + soLuong[i];
        tongTien = tongTien + giaMatHang;
    }

    // hiển thị tổng số lượng cạnh biểu tượng giỏ hàng
    document.getElementById("tongsl").innerText = tongSL;
    document.getElementById("tongsl2").innerText = tongSL;
    document.getElementById("tongsl3").innerText = tongSL;
    document.getElementById("tongtien").innerText = dinhDangTien(tongTien);
    document.getElementById("tongtien2").innerText = dinhDangTien(tongTien);
}

// chạy một lần khi mở trang
capNhat();