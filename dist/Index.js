var _this = this;
var MobileProduct = /** @class */ (function () {
    function MobileProduct(id, title, description, price, stock) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
    return MobileProduct;
}());
var covidConfirmedURL = "https://dummyjson.com/products";
var mobileData = [];
fetch(covidConfirmedURL)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    mobileData = data.products.map(function (product) { return new MobileProduct(product.id, product.title, product.description, product.price, product.stock); });
    _this.populateTable(mobileData);
})
    .catch(function (error) { return console.error('API Failed', error); });
function populateTable(data) {
    var tableBody = document.getElementById('mobile-table-body');
    if (tableBody) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            var row = document.createElement('tr');
            row.innerHTML = "\n          <td>".concat(item.id, "</td>\n          <td>").concat(item.title, "</td>\n          <td>").concat(item.description, "</td>\n          <td>").concat(item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }), "</td>\n          <td>").concat(item.stock, "</td>\n        ");
            tableBody.appendChild(row);
        }
    }
}
