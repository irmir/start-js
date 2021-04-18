// homework 3

// задача проста — написать функции:
// 1) принимает массив оценок первым аргументом, возвращает среднее арифметическое 
// 2) принимает массив студентов первым аргументом, проверяет условия и выставляет isReadyForArmy
//  — дополнительно использовать метод some или every, чтобы понимать, что у студента нет оценок 2 и ниже
// 3) принимает массив студентов  первым аргументом, возвращает студентов, которые пойдут в армию
// 4) принимает 2 аргумента — массив и строка. Пробегается по массиву и возвращает массив тех значений объекта, которые указаны вторым аргументом. Использовать функцию так, чтобы она вернула имена студентов
// 5) вывести имена из 5 в консоль
// 6) написать функцию, которая будет принимать массив студентов первым аргументом. На выходе получается отчёт об оценках. Типа список оценок на группу
// {
//  1: 2
//  2: 1
//  5: 0
// }
// (for не использовать нигде)

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
	grades: [5,3,2,4,2],
	course: 4,
	gender: 'male'
};
let stud6 = {
	firstName: 'Olia',
	lasName: 'Olegovna',
	age: 25,
	grades: [5,3,3,4,3],
	course: 5,
	gender: 'female'
};

let array = [stud1, stud2, stud3, stud4, stud5, stud6];
let sum;
let averageGrade; 
let soldiers = [];
let studentWithKey = [];
let summary = [];
let firstName;

// 1) принимает массив оценок первым аргументом, возвращает среднее арифметическое 
function calcAverageGrade(arrayGrades){ 
  sum = 0;
  arrayGrades.forEach(function(item) {
  sum = item + sum;
  averageGrade = sum / arrayGrades.length;
  });
  return averageGrade;
};

// 2) принимает массив студентов первым аргументом, проверяет условия и выставляет isReadyForArmy
function readyToServe(arrayStudent) {
	arrayStudent.forEach(function(student) {
		calcAverageGrade(student.grades);
		let studentHasLowGrades = student.grades.some(function(grade) {
			return grade < 3;
		})
		if (studentHasLowGrades || averageGrade < 3) {
		student.isReadyForArmy = true;
		} else {
			student.isReadyForArmy = false;
		}return;  
	});
	return;
};
readyToServe (array); 
// console.log (array);

// 3) принимает массив студентов  первым аргументом, возвращает студентов, которые пойдут в армию
function getStudentForArmy(arrayStudent) {
	soldiers = arrayStudent.filter (function(student) {
		return student.isReadyForArmy === true;
	});
	return;
};
getStudentForArmy (array);
console.log (soldiers);

// 4) принимает 2 аргумента — массив и строка. Пробегается по массиву и возвращает массив тех значений 
// объекта, которые указаны вторым аргументом. Использовать функцию так, чтобы она вернула имена 
// студентов
function getStudentWithKey(arrayStudent, key) {
	studentWithKey = arrayStudent.map(function(student){
	 	return student[key]; 
	 }); 
};
getStudentWithKey(array, 'firstName');
console.log (studentWithKey);

// 5) вывести имена из 3 в консоль
 array.forEach(function(student){
 	if (student.isReadyForArmy === true) {
 		return console.log(student.firstName);	
 	}
 })

// 6) написать функцию, которая будет принимать массив студентов первым аргументом. 
//    На выходе получается отчёт об оценках. Типа список оценок на группу
function getReportGrades (arrayStudent) {
	summary = arrayStudent.reduce(function(acc, student){
	student.grades.forEach(function(grade) {
		if (acc[grade] === undefined) {
			acc[grade] = 0;
		}
		acc[grade]++;
	});
	return acc;
},{});
	return;
}
getReportGrades(array);
console.log (summary);








