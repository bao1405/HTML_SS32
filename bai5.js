function Book(author, name) {
    this.author = author;
    this.name = name;
}
let library = [
    new Book('Author A', 'Book 1'),
    new Book('Author B', 'Book 2'),
    new Book('Author C', 'Book 3'),
];
let tenTacGia = prompt('Nhập tên tác giả:');
for (let i = 0; i < library.length; i++) {
    if (library[i].author === tenTacGia) {
        console.log('Thông tin sách tác giả', tenTacGia, ':', library[i]);
    }else{
        console.log('Không tìm thấy sách của tác giả', tenTacGia);
    }
}