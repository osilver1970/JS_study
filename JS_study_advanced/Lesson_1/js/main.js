const products = [
    {id: 1, title: 'Laptop', price: 45000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 2000},
    {id: 4, title: 'Gamepad', price: 5000},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}<h3>
                <p>${price}<p>
                <button class="buy-btn">Добавить в корзину</button>
            </div>`;
};

const renderProducts = arr => {
    const productsArr = arr.map((item) => {
        return renderProduct(item.title, item.price);
    });
    let [id_1, id_2, id_3, id_4] = productsArr; 
    document.querySelector('.products').innerHTML = id_1+id_2+id_3+id_4;
};

renderProducts(products);
     

