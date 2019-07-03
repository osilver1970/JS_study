
alert("Задание 1");
   
var a = 1, b = 1, c, d;

alert(`c = ++a: Итог ${c = ++a}. Сначала идет увеличение \"а\" на +1, затем присваивание с = а`);
alert(`d = b++: Итог ${d = b++}. Сначала идет присвоение d = b, затем увеличение b на +1. \n
Проверим: b = ${b}.`);
alert(`Логика следующих выражений та же:\n а++ - это сначала действие с текущим а, только затем увеличение а на 1.\n Пример: var a = 1; \n  alert(100 + 1) * а++; \n при изначальном а = ${a = 1} выдаст ${(100 + 1) * a++}. Только после расчета выражения "а" станет равным ${a}`);

alert("Задание 2");
alert(" Выражения \n var a = 2; \n var x = 1 + (a *= 2); \n alert(x); \n дадут:");
var a = 2;
var x = 1 + (a *= 2);
alert(x);

alert("Задание 3");

var a, b;
do {
    a = +prompt(`Введите числовую переменную "а"`, -5);
    
    if (!a && a != 0) {
        alert("Введите число!");
    }
}
while (!a && a != 0);

do {
    b = +prompt(`Введите числовую переменную "b"`, 8);
    
    if (!b && b != 0) {
        alert("Введите число!");
    }
}
while (!b && b != 0);

if (a >= 0 && b >= 0) {
    alert(`"a" и "b" положительные, выводим их разность: ${a} - ${b} = ${a - b} `);
}

else if (a < 0 && b < 0) {
    alert(`"a" и "b" отрицательные, выводим их произведение: ${a} * ${b} = ${a * b} `);
}

else {
    alert(`"a" и "b" разных знаков, выводим их сумму: ${a} + ${b} = ${a + b} `);
}

alert("Задание 4");
var a;
alert(`Присваиваем переменной "а" произвольное значение в диапазоне [0...15]`);
alert(`Получаем а = ${a = Math.round(Math.random() * 15)}`);
alert(`Выводим числа "Внимание!!!" с учетом задания №1 в консоль: от ${a} до "15"`);

switch(a) {
    case 0:
    console.log(a++);
    case 1:
    console.log(a++);
    case 2:
    console.log(a++);
    case 3:
    console.log(a++);
    case 4:
    console.log(a++);
    case 5:
    console.log(a++);
    case 6:
    console.log(a++);
    case 7:
    console.log(a++);
    case 8:
    console.log(a++);
    case 9:
    console.log(a++);
    case 10:
    console.log(a++);
    case 11:
    console.log(a++);
    case 12:
    console.log(a++);
    case 13:
    console.log(a++);
    case 14:
    console.log(a++);
    case 15:
    console.log(a++);
    default:
    console.log("15 вариантов для switch - слишком много");
}

alert("Задания 5 и 6");

let arg1, arg2, operation;

    do {
        arg1 = +prompt(`Введите аргумент 1`, 10);

        if (!arg1 && arg1 != 0) {
            alert("Введите число!");
        }
    }
    while (!arg1 && arg1 != 0);
    
    do {
        arg2 = +prompt(`Введите аргумент 2`, 46);

        if (!arg2 && arg2 != 0) {
            alert("Введите число!");
        }
    }
    while (!arg2 && arg2 != 0);
    
    do {
        var flag = false;
        operation = prompt("Введите операцию: \n +  сумма \n -  разность \n *   умножение \n /  деление", '/');
        if (arg2 == 0 && operation === '/') {
            alert("На 0 делить нельзя! Выберите другую операцию.");
            flag = true;
        }
        else if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
            mathOperation(arg1, arg2, operation);
        }
        else {
            alert("операция введена неверно. Напишите снова.");
            flag = true;
        }
    }
    
    while(flag); 

function add(a, b) {
    return a + b;
}

function substr(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b != 0) {
        return a / b;
    }
    else {
        return "На 0 делить нельзя! Введи делитель заново.";
    }
}


function mathOperation(a, b, op) {
    switch(op) {
        case '+':
            alert(`сложение ${a} и ${b} равно: ${add(a, b)}`);
            break;
        case '-':
            alert(`вычитание из ${a}  ${b} равно: ${substr(a, b)}`);
            break;
        case '*': 
            alert(`умножение ${a} на ${b} равно: ${mult(a, b)}`);
            break;
        case '/': 
            alert(`деление ${a} на ${b} равно: ${div(a, b)}`);
            break;
        default:
            alert("Операция неверно выбрана. Пока!");
    }
}

alert("Задание 7");

alert(`null == 0 дает ${null == 0}. \n 0 - это число и значение переменной \n null - это отсутствие значения.`);

alert("Задание 8");

var a = +prompt("Введите число", 5);
var b = +prompt("Введите степень как Положительное Целое число, Пожалуйста!", 3);
alert(`${a} в степени ${b} будет ${power(a, b)}`);

function power(val, pow) {
    if (pow == 0) return 1;
    else return val * power(val, --pow);
}



