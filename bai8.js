function User(id, user_name, email, password) {
    this.id = id;
    this.user_name = user_name;
    this.email = email;
    this.password = password;
}
let users = [];
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidPassword(password) {
    return password.length >= 8;
}
function dangKyTaiKhoan() {
    let user = {};
    do {
        user.id = users.length + 1;
        user.user_name = prompt('Nhập tên người dùng:');
        user.email = prompt('Nhập email:');
        user.password = prompt('Nhập mật khẩu:');

        if (
            user.user_name.trim() === '' ||
            !isValidEmail(user.email) ||
            !isValidPassword(user.password) ||
            users.some(existingUser => existingUser.email === user.email)
        ) {
            console.log('Thông tin không hợp lệ hoặc email đã tồn tại. Vui lòng nhập lại.');
        }
    } while (
        user.user_name.trim() === '' ||
        !isValidEmail(user.email) ||
        !isValidPassword(user.password) ||
        users.some(existingUser => existingUser.email === user.email)
    );
    users.push(user);
    console.log('Đăng ký tài khoản thành công!');
}
function dangNhap() {
    let email = prompt('Nhập email:');
    let password = prompt('Nhập mật khẩu:');
    let foundUser = users.find(user => user.email === email && user.password === password);
    if (foundUser) {
        console.log('Đăng nhập thành công! Thông tin tài khoản:');
        console.log(foundUser);
    } else {
        console.log('Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.');
    }
}
function main() {
    while (true) {
        let choice = prompt('Chọn chức năng: \n1. Đăng ký tài khoản\n2. Đăng nhập\n3. Thoát');

        switch (choice) {
            case '1':
                dangKyTaiKhoan();
                break;
            case '2':
                dangNhap();
                break;
            case '3':
                console.log('Thoát chương trình.');
                return;
            default:
                console.log('Chọn không hợp lệ. Vui lòng chọn lại.');
        }
    }
}

main();