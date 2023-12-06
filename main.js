// Задание 1
// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.

// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния
// со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

function Car(model, manufacturer, year, average, distance){
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.average = average;
    this.distance = distance;

    this.showInf = function(element){
        element.insertAdjacentHTML("beforeend", `Модель: ${this.model}<br />`);
        element.insertAdjacentHTML("beforeend", `Год: ${this.year}<br />`);
        element.insertAdjacentHTML("beforeend", `Производитель: ${this.manufacturer}<br />`);
        element.insertAdjacentHTML("beforeend", `Средняя скорость: ${this.average}<br />`);
    }

    this.TimeForCar = function(element){
        let r = this.distance/average;
        let temp = r;
        do{
            if(temp >= 4){
                temp -= 4;
                r++;
            }
        }while(temp >= 4);

        return r;
    }
}

    let car1 = new Car("Audi", "Manufacturer", 2018, 50, 500);
    let rez = car1.TimeForCar();
    let placeholder1 = document.querySelector("#placeholder1");
    car1.showInf(placeholder1);
    console.log(rez);