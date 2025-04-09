function choiDoanSo() { var soNgauNhien = Math.floor(Math.random() * 10) + 1;
var soNguoiDoan; do { soNguoiDoan = prompt("Hãy đoán một số từ 1 đến 10:");
soNguoiDoan = parseInt(soNguoiDoan); if (isNaN(soNguoiDoan) || soNguoiDoan < 1
|| soNguoiDoan > 10) { alert("Vui lòng nhập số nguyên từ 1 đến 10."); } else if
(soNguoiDoan !== soNgauNhien) { alert("Sai rồi! Hãy thử lại."); } } while
(soNguoiDoan !== soNgauNhien); alert(" Chính xác! Bạn đã đoán đúng số: " +
soNgauNhien); }
