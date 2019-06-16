function numToObj(num) {
    if(num > 999 || num < 0) {
        console.log("Введено число больше 999 или меньше 0");
        return null;
    }

    let i = num % 10;
    let d = Math.floor((num % 100) / 10);
    let h = Math.floor(num / 100);
    let o = {"единицы": i, "десятки": d , "сотни": h};
    return o;
}

var inpNumber = +prompt("Введите число от 0 до 999", 333);
var obj = numToObj(inpNumber);

console.log(obj);