function nhapThongTinSinhVien() {
    let soLuongSinhVien = prompt('Nhập số lượng sinh viên:');
    let mangSinhVien = [];
    for (let i = 1; i <= soLuongSinhVien; i++) {
        let sinhVien = {};
        sinhVien.id = prompt(`Nhập ID của sinh viên ${i}:`);
        sinhVien.name = prompt(`Nhập tên của sinh viên ${i}:`);
        mangSinhVien.push(sinhVien);
    }
    return mangSinhVien;
}
let danhSachSinhVien = nhapThongTinSinhVien();
console.log('Danh sách sinh viên:');
console.log(danhSachSinhVien);