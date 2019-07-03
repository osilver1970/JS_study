//Видимость переменной "var a" oграничивается пределами функции
//Блок if не ограничивает область видимости "var a".
//Следовательно существует свойство window.a для глобального объекта window
//Блок if не сработает, alert выдаст undefined

//if (!("a" in window)) {
//    var a = 1;
//    console.log(a);
//}
//alert(a);


//В переменную b записано выражение функции 'a' (Function Expression).
//Имя функции "а" определено только в пределах самой функции и рекурсия будет работать.
//В глобальном контексте имя "а" не объявлено и будет выдана ошибка.
//Почему в глобальном контесте нет идентификатора "а"?
//var b = function a(x) {
//    x && a(--x);
//};
//alert(a);


//Выводит функцию. Почему не переменную не нашел причин.
//function a(x) {
//    return x * 2;
//}
//var a;
//alert(a);


//При вызове функции третий аргумент переписывается 10-кой. Соответственно 10-ка и выводится
//function b(x, y, a) {
//    arguments[2] = 10;
//    alert(a);
//}
//b(1, 2, 3);

//Будет выведен глобальный объект window, так как null в нестрогом
//режиме замещается глобальным объектом.

var person = {name: 'name', age: 'ghu'};

a.call(null);

function a() {
    alert(this);
}
