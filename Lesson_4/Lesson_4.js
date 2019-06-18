alert("Задание №1");

var inpNumber = +prompt("Введите число от 0 до 999", 333);
var obj = numToObj(inpNumber);

console.log(obj);

function numToObj(num) {
    if (num > 999 || num < 0) {
        console.log("Введено число больше 999 или меньше 0");
        return null;
    }

    let i = num % 10;
    let d = Math.floor((num % 100) / 10);
    let h = Math.floor(num / 100);
    let o = {
        "единицы": i,
        "десятки": d,
        "сотни": h
    };
    return o;
}

alert("Задание №2");

var question_1 = {
    question: "Какой город является столицей России?",
    _1: "Москва",
    _2: "Саратов",
    _3: "Пермь",
    _4: "Ростов",
    right_answer: "Москва",
    next: null,

    ask: function () {
        let answer;
        let answerNum = +prompt(`${this.question} \n 1: ${this._1} \n 2: ${this._2} \n 3: ${this._3} \n 4: ${this._4} \n Введите правильный ответ:`);
        switch (answerNum) {
            case 1:
                answer = this._1;
                break;
            case 2:
                answer = this._2;
                break;
            case 3:
                answer = this._3;
                break;
            case 4:
                answer = this._4;
                break;
        }
        console.log(answer);
        return answer;
    },

    assessment: function (answer) {
        if (answer == this.right_answer) {
            alert("Правильный ответ!");
            this.next.assessment(this.next.ask());
        } else {
            alert("Ответ неверен! \n Вы проиграли!");
        }
    }
}

var question_2 = {
    question: "Какой океан омывает лишь один континент?",

    _1: "Тихий",
    _2: "Индийский",
    _3: "Атлантический",
    _4: "Южный",
    right_answer: "Южный",
    next: null,

    ask: function () {
        let answer;
        let answerNum = +prompt(`${this.question} \n 1: ${this._1} \n 2: ${this._2} \n 3: ${this._3} \n 4: ${this._4} \n Введите правильный ответ:`);
        switch (answerNum) {
            case 1:
                answer = this._1;
                break;
            case 2:
                answer = this._2;
                break;
            case 3:
                answer = this._3;
                break;
            case 4:
                answer = this._4;
                break;
        }
        console.log(answer);
        return answer;
    },

    assessment: function (answer) {
        if (answer == this.right_answer) {
            alert("Правильный ответ!");
            this.next.assessment(this.next.ask());
        } else {
            alert("Ответ неверен! \n Вы проиграли!");
        }
    }
}

var question_3 = {
    question: "Кто из этих летчиков трижды Герой Советского Союза?",
    _1: "Покрышкин",
    _2: "Кожедуб",
    _3: "Маресьев",
    _4: "Гастелло",
    right_answer: "Кожедуб",
    next: null,

    ask: function () {
        let answer;
        let answerNum = +prompt(`${this.question} \n 1: ${this._1} \n 2: ${this._2} \n 3: ${this._3} \n 4: ${this._4} \n Введите правильный ответ:`);
        switch (answerNum) {
            case 1:
                answer = this._1;
                break;
            case 2:
                answer = this._2;
                break;
            case 3:
                answer = this._3;
                break;
            case 4:
                answer = this._4;
                break;
        }
        console.log(answer);
        return answer;
    },

    assessment: function (answer) {
        if (answer == this.right_answer) {
            alert("Правильный ответ!");
            alert("Приз твой!!!");
        } else {
            alert("Ответ неверен! \n Вы проиграли!");
        }
    }
}

question_1.next = question_2;
question_2.next = question_3;

question_1.assessment(question_1.ask());
