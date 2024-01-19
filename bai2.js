let information = {
    id: '',
    name: '',
    phone: '',
    address: ''
};
console.log('Đối tượng ban đầu:');
console.log(information);
delete information.address;
information.email = '';
console.log('Đối tượng sau khi xóa address và thêm email:');
console.log(information);