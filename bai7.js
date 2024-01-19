let users = [];
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidPassword(password) {
    return password.length >= 8;
}
function nhapThongTinUser() {
    let user = {};
    do {
        user.id = prompt('Nhập ID:');
        user.user_name = prompt('Nhập tên người dùng:');
        user.email = prompt('Nhập email:');
        user.password = prompt('Nhập mật khẩu:');
        if (user.user_name.length < 3 || !isValidEmail(user.email) || !isValidPassword(user.password)) {
            console.log('Thông tin không hợp lệ. Vui lòng nhập lại.');
        }
    } while (user.user_name.length < 3 || !isValidEmail(user.email) || !isValidPassword(user.password));
    users.push(user);
}
nhapThongTinUser();
console.log('Danh sách users:');
console.log(users);