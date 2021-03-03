/**
 * Bài 3: Quy đổi tiền tệ
 */

document.getElementById("btnExc").onclick = function () {
    var usd = document.getElementById("usd").value;
    var vnd = Number(usd) * 23500;
    document.getElementById("vnd").innerHTML = vnd + " VNĐ";
}

/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 */

document.getElementById("btnArea").onclick = function () {
    var len = Number(document.getElementById("length").value);
    var width = Number(document.getElementById("width").value);
    var area = len * width;
    document.getElementById("area").innerHTML = "Diện tích HCN: " + area;
}

document.getElementById("btnPerimeter").onclick = function () {
    var len = Number(document.getElementById("length").value);
    var width = Number(document.getElementById("width").value);
    var perimeter = (len + width) * 2;
    document.getElementById("perimeter").innerHTML = "Chu vi HCN: " + perimeter;
}

/**
 * Bài 5: Tính tổng của 2 chữ số
 */

document.getElementById("btnSum").onclick = function () {
    var num = Number(document.getElementById("num").value);
    var ten = Math.floor(num / 10);
    var unit = num % 10;
    var sum = ten + unit;
    document.getElementById("sum").innerHTML = sum;
}
