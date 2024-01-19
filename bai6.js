function Product(id, product_name, price) {
    this.id = id;
    this.product_name = product_name;
    this.price = price;
}

let products = [
    new Product(1, 'Product A', 200000),
    new Product(2, 'Product B', 100000),
    new Product(3, 'Product C', 5000000),
];
function sapXepProductsTangDan(arr) {
    arr.sort(function(a, b) {
        return a.price - b.price;
    });
}
sapXepProductsTangDan(products);
console.log('Danh sách products sau khi sắp xếp tăng dần theo giá:');
console.log(products);