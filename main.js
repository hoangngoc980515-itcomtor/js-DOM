// Bài 1
const btnTL = document.getElementById("btnTL");
btnTL.onclick = function(){
    let soNgayLam = document.getElementById("soNgayLam").value * 1;
    const luongNgay = 100000

    let pay = 0;
    pay = soNgayLam * luongNgay;

    const thongBao1 = document.getElementById("thongBao1");
    // Format tiền theo kiểu Việt Nam: 2300000 -> 2.300.000 ₫
    const payFormat = pay.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
    thongBao1.innerHTML = `Tiền lương của bạn là: ${payFormat}`
}

// Bài 2
const btnTB = document.getElementById("btnTB");
btnTB.onclick = function(){
    let so1 = document.getElementById("so1").value * 1;
    let so2 = document.getElementById("so2").value * 1;
    let so3 = document.getElementById("so3").value * 1;
    let so4 = document.getElementById("so4").value * 1;
    let so5 = document.getElementById("so5").value * 1;

    let trungBinh = 0;
    trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;

    const thongBao2 = document.getElementById("thongBao2");
    thongBao2.innerHTML = `Giá trị trung bình là: ${trungBinh}`
}


// Bài 3
const btnQD = document.getElementById("btnQD");
btnQD.onclick = function(){
    let soTienUSD = document.getElementById("soTienUSD").value * 1;
    const giaUSD = 23500

    let tienVND = 0;
    tienVND = soTienUSD * giaUSD;

    const thongBao3 = document.getElementById("thongBao3");
    // Format tiền theo kiểu Việt Nam: 47000 -> 47.000 ₫
    const tienVNDFormat = tienVND.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
    thongBao3.innerHTML = `Số tiền sau quy đổi là: ${tienVNDFormat}`
}


// Bài 4
const btnHCN = document.getElementById("btnHCN");
btnHCN.onclick = function(){
    let chieuDai = document.getElementById("chieuDai").value * 1;
    let chieuRong = document.getElementById("chieuRong").value * 1;

    let dienTich = 0;
    dienTich = chieuDai * chieuRong;

    let chuVi = 0;
    chuVi = (chieuDai + chieuRong) * 2;

    const thongBao4 = document.getElementById("thongBao4");
    // <br> để xuống dòng, cho diện tích và chu vi nằm 2 dòng riêng
    thongBao4.innerHTML = `Diện tích là: ${dienTich} <br> Chu vi là: ${chuVi}`
}


// Bài 5
const btnTong = document.getElementById("btnTong");
btnTong.onclick = function(){
    let so2ChuSo = document.getElementById("so2ChuSo").value * 1;

    // Lấy số hàng đơn vị: chia 10 lấy phần dư. VD: 12 % 10 = 2
    let soHangDV = so2ChuSo % 10;
    // Lấy số hàng chục: chia 10 rồi làm tròn xuống. VD: 12 / 10 = 1.2 -> 1
    let soHangChuc = Math.floor(so2ChuSo / 10);

    let tong = 0;
    tong = soHangChuc + soHangDV;

    const thongBao5 = document.getElementById("thongBao5");
    thongBao5.innerHTML = `Tổng là: ${soHangChuc} + ${soHangDV} = ${tong}`
}
