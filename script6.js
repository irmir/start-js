// homework 6

// Задание вам будет такое
// Есть функция, которая принимает два аргумента, массив и число. Например, [1,5,9] и 10.
// Функция находит первые два числа из массива, которые в сумме дают число, переданное вторым
// аргумента возвращает массив, состоящими из двух чисел — это индексы чисел, которые
// в сумме дают 10 в нашем случае, это [0,2], если не находит — null

function calcSumElements(array, argument) {
    let sum = 0;
    let i = 0;
    let arrayIndex = [];
    array.forEach(function(item, index) {
        let element1 = item;
        let indexNumber1 = index;
        array.forEach(function(item, index) {
            if (index > indexNumber1) {
                sum = element1 + item;
                if (sum === argument) {
                    if (arrayIndex[0] === undefined) {
                        arrayIndex.push(indexNumber1);
                        arrayIndex.push(index);
                        return
                    } else {
                        if (arrayIndex[1] > index) {
                            arrayIndex.length = 0;
                            arrayIndex.push(indexNumber1);
                            arrayIndex.push(index);
                            return;
                        };
                    }
                }
            }
            return;
        })
    });
    console.log(arrayIndex);};


calcSumElements([1, 3, 4, 6, 1], 7);

let a = [1,3,4,6,1];

// function getPairEnch(arr, sum) {
//   let cache = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in cache) {
//       return [i, cache[arr[i]]];
//     }

//     let diff = sum - arr[i];
//     cache[diff] = i;
//   }

//   return null;
// }

// getPairEnch(a, 7);






// Беру первый элемента массива и складываю поочередно с остальными, пока сумма не будет равна arguments.
// Когда нашла пару, добавляю индексы в массив arrayIndex. 
// Затем со всеми остальными подходящими парами, проверяю, если второй элемент существующего массива 
// arrayIndex больше второго элемента получившейся пары, то чищу массив и кладу новую пару.

