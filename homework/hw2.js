// задание 2.1
function convertToCamel(str) {
    let parts = str.split("-");

    for (let i = 1; i < parts.length; i++) {
        parts[i] = parts[i].at(0).toUpperCase() + parts[i].slice(1);
    }

    return parts.join("");
}

console.log("2.1:", convertToCamel("background-color"));

// задание 2.2
let numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// создание копий разными способами
let firstCopy = numbers.slice();
let secondCopy = Array.from(numbers);

// первый способ изменения порядка
firstCopy.reverse();

// второй способ изменения порядка
let reversedCopy = [];
for (let i = secondCopy.length - 1; i >= 0; i--) {
    reversedCopy.push(secondCopy[i]);
}

console.log("2.2:");
console.log("Исходный массив:", numbers);
console.log("Первая копия:", firstCopy);
console.log("Вторая копия:", reversedCopy);

// задание 2.3
let translations = {
    "дом": "house",
    "солнце": "sun",
    "вода": "water",
    "книга": "book"
};

function getTranslation(text) {
    let word = text.toLowerCase();

    return translations[word] || "Перевод отсутствует";
}

console.log("2.3:");
console.log(getTranslation("дом"));
console.log(getTranslation("КНИГА"));
console.log(getTranslation("солнце"));

// задание 2.4
let days = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье",

    showToday: function() {
        let current = new Date().getDay();
        current = current === 0 ? 7 : current;

        console.log("Сегодня " + this[current]);
    }
};

console.log("2.4:");
days.showToday();


// задание 2.5
let staff = {
    director: "Александр",
    accountant: "Елена",
    programmer: "Дмитрий"
};

// создание копии объекта
let staffSecond = Object.assign({}, staff);

// изменение имён в копии
staffSecond.director = "Михаил";
staffSecond.accountant = "Ольга";
staffSecond.programmer = "Андрей";

// преобразование объектов в строки
let originalText = 
    "Директор: " + staff.director +
    "\nБухгалтер: " + staff.accountant +
    "\nПрограммист: " + staff.programmer;

let secondText =
    "Директор: " + staffSecond.director +
    "\nБухгалтер: " + staffSecond.accountant +
    "\nПрограммист: " + staffSecond.programmer;

console.log("2.5:");
console.log("Первый персонал:\n" + originalText);
console.log("Второй персонал:\n" + secondText);


// задание 2.6
let universitySubjects = {
    subjects: "Математика, Физика, История, Информатика",

    addSubject: function(subject) {
        let subjectArray = this.subjects.split(", ");

        if (subjectArray.indexOf(subject) === -1) {
            subjectArray.push(subject);
            this.subjects = subjectArray.join(", ");
            console.log("Предмет добавлен");
        } else {
            console.log("Такой предмет уже существует");
        }
    },

    deleteSubject: function(subject) {
        let subjectArray = this.subjects.split(", ");
        let position = subjectArray.indexOf(subject);

        if (position !== -1) {
            subjectArray.splice(position, 1);
            this.subjects = subjectArray.join(", ");
            console.log("Предмет удален");
        } else {
            console.log("Такого предмета нет");
        }
    }
};

console.log("2.6:");

universitySubjects.addSubject("Программирование");
console.log(universitySubjects.subjects);

universitySubjects.addSubject("Физика");
console.log(universitySubjects.subjects);

universitySubjects.deleteSubject("История");
console.log(universitySubjects.subjects);
