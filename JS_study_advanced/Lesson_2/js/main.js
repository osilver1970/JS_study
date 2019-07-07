class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts()
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Laptop', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
            {id: 5, title: 'Monitor', price: 20000},
            {id: 6, title: 'Table', price: 1500},
            {id: 7, title: 'Supply_Unit', price: 5000},
            {id: 8, title: 'Web_Camera', price: 4500},
        ];
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150'){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

//Класс Корзина
class ShoppingСart {
//     1) Должен быть метод со слушателем событий:
//    1 - для добавления товара по клику по кнопке "Купить".
//    2 - для удаления товара по клику по кнопке "Делит".
//    3 - для раскрытиия списка товаров по клику на корзине.
    
//   2) Должен быть метод для создания списка добавленных товаров. Этот список будет рендериться в область корзины.
    
//    3) Должен быть метод подсчета суммы стоимости товаров в корзине.
    
        calcTotalPrice() {
            let totalPrice = 0;
            for(let cartItem in cartItemList) {
                totalPrice += cartItem.price;
            }
            
            return totalPrice;
        }       
   
        
    }
}

//Класс элемента корзины товаров. Наследуем от ProductItem, так как очень похожи
class CartItem extends ProductItem {
    //Должен принимать единицу товара
    constructor(product, img) {
        super(product, img)
    }
    //Будет иметь унаследованный render(), хотя можно переопределить
}

let list = new ProductsList();
list.render();

