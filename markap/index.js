// 1. Створити сутність "Людина".

// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
// 2. Створити сутність "Автомобіль".

// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника


// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.

function Person(personName, age) {
  this.personName = personName;
  this.age = age;

  this.getInfo = function () {
    console.log(`Person name: ${this.personName} \nPerson age: ${this.age} \n`);
    console.log(`--------------------------------------------------`);
  };
}

const person1 = new Person('Mike', 37);
const person2 = new Person('Tetiana', 25);

function Car(brand, model, year, nubmer) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.nubmer = nubmer;
  this.owner = null;

  this.setOwner = function (owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log('The owner must be at least 18 years old.');
    }
  };

  this.getInfo = function () {
    console.log(`Brand: ${this.brand} \nModel: ${this.model} \nYear: ${this.year} \nNubmer: ${this.nubmer}`);
    if (this.owner) {
      console.log(`Owner: `);
      this.owner.getInfo();
    } else {
      console.log(`No owner assigned!`);
    }
  }
}

const car1 = new Car('Porshe', 'Panamera', 2023, 'AI007KA');
const car2 = new Car('Audi', 'A8 long', 2023, 'AI006KA');

car1.setOwner(person1);
car2.setOwner(person2);

car1.getInfo();
car2.getInfo();




  