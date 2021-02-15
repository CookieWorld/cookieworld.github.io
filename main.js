/*                        0 task                            */
let nameUser, nameMemory;
let = container = document.querySelector(".header");
let login = document.createElement("p");
login.classList.add("user")
function welcome() {
    nameUser = document.getElementById("Login").value;
    let welcomeF = "Добро пожаловать, " + nameUser + "!";
    localStorage.setItem("name", nameUser);
    window.alert(welcomeF);
    load();
    return false;
}
function load() {
    nameMemory = localStorage.getItem("name");
    login.innerText = "Имя пользователя: " + nameMemory;
    container.appendChild(login);
}
if (localStorage.getItem("name") != null) load();
/*                        1 task                            */
function square() {
    let height = document.getElementById("height").value;
    let base = document.getElementById("base").value;
    let square = 0.5 * height * base;
    let containerSquare = document.querySelector(".square");
    containerSquare.innerHTML = "";
    let text = document.createElement("p");
    text.innerText = "Площадь треугольника равна: " + square;

    containerSquare.appendChild(text);
}
/*                        2 task                            */
function compareStrings() {
    let containerRes = document.querySelector(".compare");
    containerRes.innerHTML = "";
    let firstString = prompt("Введите первую строку: ");
    let secondString = prompt("Введите вторую строку: ");
    let res = document.createElement("p");
    res.innerText = firstString.length == secondString.length;
    containerRes.appendChild(res);
}
/*                        3 task                            */
let array = [];
let arrayList;
function extrArray() {
    let container = document.querySelector(".extr");
    container.innerHTML = "";
    let arrayRes = document.createElement("p");
    for (let i = 0; i < 5; i++) {
        array[i] = Number(prompt('Введите число: '));
    }
    let list = document.querySelector(".listArray");
    arrayList = document.createElement("p");
    arrayList.innerText = "Ваш массив: " + array[0] + " " + array[1] + " " + array[2] + " " + array[3] + " " + array[4];
    list.appendChild(arrayList);
    let max = 0;
    let min = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 1 + i; j < array.length; j++) {
            if (array[i] != NaN || array[i] != null) {
                if (array[i] <= array[j]) {
                    if (min >= array[i]) min = array[i];
                    if (max <= array[j]) max = array[j];
                } else if (array[i] >= array[j]) {
                    if (min >= array[j]) min = array[j];
                    if (max <= array[i]) max = array[i];
                }
            }
        }
    }
    arrayRes.innerText = "Минимальный элемент массива: " + min + "\nМаксимальный элемент массива: " + max;
    container.appendChild(arrayRes);

}
/*                        4 task                            */
let hour = document.querySelector(".hour");
let min = document.querySelector(".minute");
let sec = document.querySelector(".second");
let prin = document.querySelector(".print");
let start = 0;
let stop = 0;
let boolean = false;
function Timer(time) {
    time: time,
        timesave = time;
    return {
        Start: function () {
            if (boolean == true) {
                start = time - 1;
                boolean = false;
            }
            clearInterval(Timer.interval);
            Timer.interval = setInterval(timer.Update, 1000);
        },
        Stop: function () {
            boolean = true;
            stop = time - 1;
            clearInterval(Timer.interval);
        },
        StartAgain: function () {
            time = timesave;
            timer.Stop();
            clearInterval(Timer.interval);
            timer.Start();
        },
        CheckTime: function () {
            let print = document.createElement('p');
            prin.innerText = "Прошло " + (stop - start) + " секунд";
        },
        Update: function () {
            let seconds = time % 60;
            let minute = Math.floor(time / 60) % 60;
            let hour = Math.floor(time / 3600) % 60;
            if (seconds < 10) {
                sec.innerText = '0' + seconds;
            } else sec.innerText = seconds;
            if (minute < 10) {
                min.innerText = '0' + minute;
            } else min.innerText = minute;
            if (hour < 10) {
                hour.innerText = '0' + hour;
            } else hour.innerText = hour;
            time++;
        },
    };
}
const timer = new Timer(1);
/*                        5 task                            */
class Test {
    constructor(questions, results) {
        this.questions = questions;
        this.results = results;
        this.score = 0;
        this.result = 0;
        this.current = 0;
    }

    Click(index) {
        this.Next();
    }
    Next() {
        this.current++;
        if (this.current >= this.questions.length) {
            this.End();
        }
    }
    End() {
        for (let i = 0; i < this.results.length; i++) {
            if (this.results[i].Check(this.score)) {
                this.result = i;
            }
        }
    }
}

class Question {
    constructor(text, answers) {
        this.text = text;
        this.answers = answers;
    }

    Click(index) {
        return this.answers[index].value;
    }
}

class Answer {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}

class Result {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }

    Check(value) {
        if (this.value <= value) {
            return true;
        }
        else {
            return false;
        }
    }
}

const results =
    [
        new Result("Гуманитарий", 0),
        new Result("Копипастер", 4),
        new Result("Студент", 7),
        new Result("Ботан", 10)
    ];

const questions =
    [
        new Question("Что выведет этот код" + "?" + "<br>let y = 1;<br>let x = y = 2;<br>alert(x);",
            [
                new Answer("1", 0),
                new Answer("2", 1),
                new Answer("x", 2),
                new Answer("Ошибка", 3)
            ]),
        new Question("Что делает оператор === ?",
            [
                new Answer("Проверяет правильность введенных данных", 0),
                new Answer("Сравнивает без приведения типа", 1),
                new Answer("Нет такого оператора", 2)
            ]),
        new Question("Чему равно i в конце кода?<br>for(var i=0; i<10; i++)" + "{" + "<br>console.log(i);" + "}" +
            "<br>// i = ?",
            [
                new Answer("undefined", 0),
                new Answer("9", 2),
                new Answer("10", 1),
                new Answer("Нет такой переменной после цикла", 3)
            ]),
        new Question("Что выведет этот код?<br>" + "alert(" + "1" + "[0] );",
            [
                new Answer("0", 0),
                new Answer("1", 1),
                new Answer("2", 2),
                new Answer("undefined", 3)
            ]),
        new Question("Язык JavaScript является подвидом языка Java — верно?",
            [
                new Answer("Да", 0),
                new Answer("Нет", 1),
                new Answer("Наоборот, Java – подвид JavaScript", 2)
            ]),
        new Question("За сколько дней был разработан LiveScript — первая версия языка JavaScript?",
            [
                new Answer("1", 0),
                new Answer("100", 2),
                new Answer("10", 1),
                new Answer("1000", 3)
            ]),
        new Question("Что выведет alert?<br>alert(str); //" + "?" + "<br>var str = " + "Hello;",
            [
                new Answer("Hello", 0),
                new Answer("undefined", 1),
                new Answer("Ошибка", 2)
            ]),
        new Question("Чему равно a + b + c?<br>let a = 1;" + "<br>let b = { toString() {return '1'} };<br>let c = 1;",
            [
                new Answer("11[object Object]", 0),
                new Answer("2[object Object]", 2),
                new Answer("111", 1),
                new Answer("3", 3)
            ]),
        new Question("Какая арифметическая операция приводит к ошибке в javascript?",
            [
                new Answer("Деление на ноль", 0),
                new Answer("Умножение числа на строку", 2),
                new Answer("Корень из отрицательного числа", 3),
                new Answer("Никакая из вышеперечисленных", 1)
            ]),
        new Question("Есть ли разница между выражениями?<br>!!( a && b )<br>(a && b)",
            [
                new Answer("Да", 1),
                new Answer("Нет", 2),
                new Answer("В первом выражении ошибка, что еще за «!!» ??", 0)
            ])
    ];

const test = new Test(questions, results);
let headElem = document.getElementById("text");
let buttonsElem = document.querySelector(".buttons");
let testContainer = document.querySelector(".test");
Update();

function Update() {
    if (test.current < test.questions.length) {
        headElem.innerHTML = test.questions[test.current].text;
        buttonsElem.innerHTML = "";
        for (let i = 0; i < test.questions[test.current].answers.length; i++) {
            let btn = document.createElement("button");
            btn.className = "button";

            btn.innerHTML = test.questions[test.current].answers[i].text;

            btn.setAttribute("index", test.questions[test.current].answers[i].value);

            buttonsElem.appendChild(btn);
        }

        Init();
    }
    else {
        buttonsElem.innerHTML = "";
        headElem.innerHTML = "";
        textRes = document.createElement("h2");
        textRes.innerText = "Вы - " + test.results[test.result].text + "\nВаш результат " + test.score + " из 10.";
        testContainer.appendChild(textRes);
        printResults();
    }
}
let textRes;
let choosenAnswers = [];
function Init() {

    let btns = document.querySelectorAll(".button");
    console.log(btns);
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
    }

}
function Click(index) {
    if (index == 1) {
        test.score += 1;
        for (let i = 0; i < test.questions[test.current].answers.length; i++) {
            if (test.questions[test.current].answers[i].value == index) choosenAnswers.push(test.questions[test.current].answers[i].text);
        }
        choosenAnswers.push("Верно");
    } else {
        for (let i = 0; i < test.questions[test.current].answers.length; i++) {
            if (test.questions[test.current].answers[i].value == index) choosenAnswers.push(test.questions[test.current].answers[i].text);
        }
        choosenAnswers.push("Неверно");
    }
    console.log(index);
    test.Click(index);
    setTimeout(Update, 500);
}
function printResults() {
    let question = [];
    let correct = [];
    let count = 1;
    let btnAgain = document.createElement("button");
    btnAgain.textContent = "Пройти ещё раз"
    for (let i = 0; i < 10; i++) {
        question[i] = document.createElement("p");
        question[i].innerText = count + ") " + test.questions[i].text;
        count++;
        correct[i] = document.createElement("p");
        correct[i].innerText = choosenAnswers.shift() + " (" + choosenAnswers.shift() + ")";
        testContainer.appendChild(question[i]);
        testContainer.appendChild(correct[i]);
    }
    testContainer.appendChild(btnAgain);
    btnAgain.addEventListener("click", function (e) {
        for (let i = 0; i < 10; i++) {
            testContainer.removeChild(question[i]);
            testContainer.removeChild(correct[i]);
        }
        testContainer.removeChild(textRes);
        testContainer.removeChild(btnAgain);
        test.current = 0;
        test.result = 0;
        test.score = 0;
        Update();
    })
    console.log(correct);
    console.log(question);
}
/*                        6 task                            */
function openImage() {
    let cont = document.createElement('div');
    cont.classList.add("image");
    cont.style.backgroundImage = "url('./sierra.jpg')";
    cont.style.backgroundRepeat = "no-repeat";
    cont.style.backgroundSize = "100% 100vh";
    let date = document.createElement('p');
    date.innerText = new Date();
    let currentUser = document.createElement('p');
    if (nameMemory != null) currentUser.innerText = nameMemory;
    cont.appendChild(date);
    cont.appendChild(currentUser);
    document.body.appendChild(cont);
    cont.onclick = function () {
        cont.style.animationName = "zoom-out";
        cont.style.visibility = 'hidden';
        return false;
    }
}

function openMenu() {
    let container = document.querySelector(".container");
    container.style.display = "none";
    let header = document.querySelector(".header");
    header.style.display = "none";
    let mainContainer = document.querySelector(".main_container");
    mainContainer.style.display = "flex";
    let heading = document.querySelector(".heading");
    heading.style.display = "none";
    let modalHeader = document.querySelector(".modal_header");
    let firstContainer = document.querySelector(".first_container");
    let secondContainer = document.querySelector(".second_container");
    let thirdContainer = document.querySelector(".third_container");
    let fourthContainer = document.querySelector(".fourth_container");
    let fifthContainer = document.querySelector(".fifth_container");
    let sixthContainer = document.querySelector(".sixth_container");
    let sevenContainer = document.querySelector(".seventh_container");
    let layer = document.createElement("div");
    layer.classList.add("menuWin");
    mainContainer.appendChild(modalHeader);
    mainContainer.appendChild(firstContainer);
    mainContainer.appendChild(secondContainer);
    mainContainer.appendChild(thirdContainer);
    mainContainer.appendChild(fourthContainer);
    mainContainer.appendChild(fifthContainer);
    mainContainer.appendChild(sixthContainer);
    mainContainer.appendChild(sevenContainer);
    layer.appendChild(mainContainer);
    document.body.appendChild(layer);
    let button = document.querySelector(".modal_btn-close").addEventListener('click', (e) => {
        e.preventDefault();
        layer.style.display = "none";
        container.style.display = "flex";
        header.style.display = "flex";
        heading.style.display = "flex";
    });
};
const animItems = document.querySelectorAll(".anim_items");
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('anim__active');
            } else {
                animItem.classList.remove('anim__active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}
