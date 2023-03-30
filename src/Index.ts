class MobileProduct {
    public id: string;
    public title: string;
    public description: string;
    public price: number;
    public stock: number;

    constructor(id: string, title: string, description: string, price: number, stock: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
}


let covidConfirmedURL = "https://dummyjson.com/products";
let mobileData: MobileProduct[] = [];

fetch(covidConfirmedURL)
    .then(response => response.json())
    .then(data => {
        mobileData = data.products.map(
            product => new MobileProduct(product.id, product.title, product.description, product.price, product.stock));
        this.populateTable(mobileData);
    })
    .catch(error => console.error('API Failed', error));


function populateTable(data: MobileProduct[]) {
    const tableBody = document.getElementById('mobile-table-body');
    if (tableBody) {
        for (const item of data) {
            const row = document.createElement('tr');
            row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.title}</td>
          <td>${item.description}</td>
          <td>${item.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
          <td>${item.stock}</td>
        `;
            tableBody.appendChild(row);
        }
    }
}


