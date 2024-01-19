function doSomethingAsync(callback) {
    callback();
}
  
function myCallback() {
    console.log("Công việc đã hoàn thành!");
}
  
doSomethingAsync(myCallback);

doSomethingAsync(function() {
    console.log("Công việc đã hoàn thành!");
});

function doSomethingAsync(callback) {
    const result = "Dữ liệu từ công việc không đồng bộ";
    
    callback(result);
}
  
function myCallback(data) {
    console.log("Công việc đã hoàn thành, dữ liệu nhận được:", data);
}
doSomethingAsync(myCallback);


//Trong JavaScript, callback functions là một khái niệm quan trọng và phổ biến, đặc biệt là trong ngữ cảnh của asynchronous programming (lập trình không đồng bộ). Callback functions là các hàm được truyền vào một hàm khác như một đối số và được gọi lại (thực thi) sau khi hàm chứa nó hoàn thành công việc.

//Chức năng của Callback Function:
//1.Asynchronous Operations: Callbacks thường được sử dụng để xử lý các hoạt động không đồng bộ như đọc file, tương tác với cơ sở dữ liệu, gọi API, và các tác vụ khác mà có thể mất thời gian để hoàn thành.
//2.Event Handling: Callbacks được sử dụng để xử lý sự kiện, như khi người dùng click vào một nút hoặc nhập liệu vào một ô text.
//3.Generalization of Behavior: Callbacks cho phép bạn truyền một hàm làm tham số cho một hàm khác, tạo điều kiện cho khả năng tái sử dụng và tổ chức code.