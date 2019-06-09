var temperatureC;
while (isNaN(temperatureC)) {
    temperatureC = prompt("Введите температуру в градусах Цельсия", 0);
    if (isNaN(temperatureC)) {
        alert("Вы не ввели число!");
    } else {
        var temperatureF = (9 / 5) * temperatureC + 32;
        alert(`${temperatureC} градусов Цельсия соответствуют ${temperatureF} градусам Фаренгейта`);
        break;
    }
}
