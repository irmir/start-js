// homework 2

// Задание:
// 1. Помните у вас были объекты? Вот нужно их переделать сл. способом:
// есть 10 объектов, каждый из которых олицетворяет 1 студента, 
// у каждого есть параметры: 

// firstName -- String, 
// lastName -- String, 
// age -- Number, 
// grades -- Array[5], 
// course -- Number, 
// gender -- String

// 2. Запихиваем их всех в массив
// 3. У нас будет несколько циклов вот первый из них:
// - цикл пробегает по студентам, у каждого проверяется среднее арифметическое его 5 (!) оценок (можно делать циклом внутри цикла).
// Если среднее меньше 3, а у нас 5тибальная система, то проверяется уловие: если тот подходит по обязательным параметрам для призывника (мы говорим о РБ, не Израиле),
// то присваиваем новый параметр объекту студента -- isReadyForArmy--  и удаляем у него параметр grades и course (удаляем (!), а не обнуляем)
// 4. Далее создаём пустом массив для тех, кто идёт служить.
// 5. Пишем ещё один цикл, в котором мы пробегаемся по тому же массиву студентов, и если у студента isReadyForArmy правдив, то помещаем его в массив, который сделали в пункте 4
// 6. Выводим массив 4 в консоль
// 7. ...
// 8. Вы великолепны!

let stud1 = {
	firstName: 'Igor',
	lasName: 'Igorevich',
	age: 27,
	grades: [5,3,2,4,1],
	course: 4,
	gender: 'male'
};
let stud2 = {
	firstName: 'Ivan',
	lasName: 'Ivanovich',
	age: 26,
	grades: [2,2,2,2,2],
	course: 5,
	gender: 'male'
};
let stud3= {
	firstName: 'Ivan-clon1',
	lasName: 'Ivanovich',
	age: 26,
	grades: [2,2,2,2,2],
	course: 5,
	gender: 'male'
};
let stud4 = {
	firstName: 'Ivan-clon2',
	lasName: 'Ivanovich',
	age: 26,
	grades: [2,2,2,2,2],
	course: 5,
	gender: 'male'
};
let stud5 = {
	firstName: 'Ignat',
	lasName: 'Ignatovich',
	age: 36,
	grades: [5,3,2,4,1],
	course: 4,
	gender: 'male'
};
let stud6 = {
	firstName: 'Olia',
	lasName: 'Olegovna',
	age: 25,
	grades: [5,3,2,4,1],
	course: 5,
	gender: 'female'
};
let array = [stud1, stud2, stud3, stud4, stud5, stud6];
let sum;
let i;
let y;
let soldier = [];
let averageGrade;

for (i = 0; i < array.length; i++) {
	sum = 0;
	for (y = 0; y < array[i].grades.length; y++) {
	sum = sum + array[i].grades[y];
	}
	averageGrade = sum / array[i].grades.length;
	array[i].averageGrade = averageGrade;
	if (averageGrade < 3 && array[i].gender === 'male' && array[i].age <= 27 && array[i].age >=18 ) {
		array[i].isReadyForArmy = true;
		delete array[i].grades;
		delete array[i].course;
		soldier.push (array[i]);
	} else {
		array[i].isReadyForArmy = false;
	}
}
 console.log (soldier);
