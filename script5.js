// homework 5 

// ну, с богом
// 1. Допустим у нас есть магазин фруктов -- это объект
// const fruitShop = {
//   revenue: 0,
//   revision: {}, // сюда будем добавлять/отнимать фрукты, которые купили/вернули, типа отчёт о продажах
//   currency: '$', // например доллар, у вас всё что угодно
//   fruits: {
//     fruitName1: fruitCount1,
//     fruitName2: fruitCount2,
//     ...
//     fruitNameN: fruitCountN,
//   },
//   fruitsPrices: {
//     fruitName1: fruitPrice1,
//     fruitName2: fruitPrice2,
//     ...
//     fruitNameN: fruitPriceN,
//   },
//   getRevenue: function () {},
//   updateRevision: function (action, fruitName, count) {
//     /* action -- add или remove */
//   }
//   addToRevenue: function (transactionMoneyCount) {},
//   subsctractFromRevenue: function (redundMoneyCount) {},
//   getFruitPrice: function (fruitName) {},
//   getFruitCount: function (fruitName) {},
//   setFruitCount: function (fruitName, fruitCount) {
//     /* в конце функция возвращает количество фруктов определённого типа*/
//   },
//   buyFruit: function (fruitName, fruitCount) {
//     /* в функции проверяем есть ли у нас нужное количество нужных фруктов (см один из методов объекта), возвращаем фрукт объектом типа {'fruit': 'orange', 'count': 2, 'total': 3}*/
//   },
//   refundFruit: function (fruitName, fruitCount) {
//     /* функция возвращает количество денег за возвращённые фрукты*/
//   }
// }

// const customers = [{
//   id: 0,
//   wantedFruit: 'orange',
//   wantedFruitAmount: 2,
//   fruits: [],
//   money: 20,
// }, 
// {
//   id: 1,
//   refudedFruit: 'banana',
//   refudedFruitAmount: 2,
//   fruits: ['banana', 'banana', 'orange'],
//   money: 0,
// }];

// // стартовая точка, то есть весь код будет выполняться (не инициализироваться) внутри (кроме промежуточных переменных, вроде результатов выполнения функции)
// function init () {
  
// }

// function buyFruitByCustomer(customer) {
  
//     функция смотрит на параметры wantedFruit ИЛИ refudedFruit, если есть, то берёт количество и начинает работать с fruitShop
//     рефандим -- убираем фрукт из fruits пока не закончится refudedFruitAmount, если покупаем -- добавляем фрукт в fruits пока не закончится wantedFruitAmount,
//     естественно вычитаем деньги, прибавляем/отнимаем их в/из revenue, не забываем про revision. Используем только методы объекта fruitShop, нельзя делать так:
//     fruitShop.revenue = 3, используем, например, fruitShop.subsctractFromRevenue(3)
    
//     в конце вызываем getCheck и выводим возвращённый результат в консоль
  
// }

// // Возвращает строку "Ваш заказ: 5 апельсинов. С вас 5$", предполагается, что будет работать со значением, возвращённым из buyFruit, currentCurrency понятно откуда брать
// function getCheck(currentCurrency) {

// }


// 1. Допустим у нас есть магазин фруктов -- это объект
const fruitShop = {
    revenue: 0, //прибыль
    revision: {}, // сюда будем добавлять/отнимать фрукты, которые купили/вернули, типа отчёт о продажах
    currency: '$', // например доллар, у вас всё что угодно
    fruits: {
        apple: 20,
        banana: 20,
        lime: 20,
        orange: 20,
    },
    fruitsPrices: {
        apple: 2,
        banana: 3,
        lime: 3,
        orange: 2.5,
    },
    getRevenue: function() {
    },
    updateRevision: function(action, fruitName, count) {
        if (action === 'add') {
            if (this.revision.sold === undefined) {
                this.revision.sold = setFruit;
                return;
            } else {
                for (key1 in this.revision.sold) {
                    if (key1 === fruitName) {
                        this.revision.sold[key1] = this.revision.sold[key1] + count;
                        return;
                    } else if (this.revision.sold[fruitName] === undefined) {
                        this.revision.sold[fruitName] = count;
                        return;
                    } else {
                        this.revision.sold[fruitName] = this.revision.sold[fruitName] + count;
                        return;
                    }
                }
            }
        }
        if (action === 'remove') {
            if (this.revision.retuned === undefined) {
                this.revision.retuned = setFruit;
                return;
            } else {
                for (key1 in this.revision.retuned) {
                    if (key1 === fruitName) {
                        this.revision.retuned[key1] = this.revision.retuned[key1] + count;
                        return;
                    } else if (this.revision.retuned[fruitName] === undefined) {
                        this.revision.retuned[fruitName] = count;
                        return;
                    } else {
                        this.revision.retuned[fruitName] = this.revision.retuned[fruitName] + count;
                        return;
                    }
                }
            }
        }
    },
    addToRevenue: function(transactionMoneyCount) {
        return this.revenue = this.revenue + transactionMoneyCount;
    },
    subsctractFromRevenue: function(redundMoneyCount) {
        return this.revenue = this.revenue - redundMoneyCount;
    },
    getFruitPrice: function(fruitName) {
        return this.fruitsPrices[fruitName];
    },
    getFruitCount: function(fruitName) {
        return this.fruits[fruitName];
    },
    setFruitCount: function(fruitName, fruitCount) {
        setFruit = {[fruitName]: fruitCount };
        /* в конце функция возвращает количество фруктов определённого типа*/
    },
    buyFruit: function(fruitName, fruitCount) {
        if (this.getFruitCount(fruitName) >= fruitCount) {
            order = { 'fruit': fruitName, 'count': fruitCount, 'total': this.getFruitCount(fruitName) };
            return;
        } else console.log('такого количества фруктов нет в наличии');
        /* в функции проверяем есть ли у нас нужное количество нужных фруктов (см один из методов объекта), 
        возвращаем фрукт объектом типа {'fruit': 'orange', 'count': 2, 'total': 3}*/
    },
    refundFruit: function(fruitName, fruitCount) {
        return moneyReturned = this.getFruitPrice(fruitName) * fruitCount;
        // функция возвращает количество денег за возвращённые фрукты
    }
};

customer1 = {
    id: 0,
    wantedFruit: 'lime',
    wantedFruitAmount: 2,
    fruits: [],
    money: 20,
};
customer2 = {
    id: 0,
    wantedFruit: 'lime',
    wantedFruitAmount: 3,
    fruits: [],
    money: 10,
};
customer3 = {
    id: 0,
    wantedFruit: 'orange',
    wantedFruitAmount: 4,
    fruits: [],
    money: 10,
};
customer4 = {
    id: 0,
    wantedFruit: 'orange',
    wantedFruitAmount: 5,
    fruits: [],
    money: 10,
};
customer5 = {
    id: 1,
    refudedFruit: 'banana',
    refudedFruitAmount: 2,
    fruits: ['banana', 'banana', 'orange'],
    money: 0,
};

let order = {};
const customers = [customer1, customer2, customer3, customer4, customer5];
let add, remove, key1;

// стартовая точка, то есть весь код будет выполняться (не инициализироваться) внутри 
// (кроме промежуточных переменных, вроде результатов выполнения функции)
function init() {
    customers.forEach(function(customer) {
        buyFruitByCustomer(customer);
    });
};

init();

function buyFruitByCustomer(customer) {
    if (customer.wantedFruit) {
        for (i = 1; i <= customer.wantedFruitAmount; i++) {
            customer.fruits.push(customer.wantedFruit);
            for (key in fruitShop.fruits) {
                if (key === customer.wantedFruit) {
                    fruitShop.fruits[key] = fruitShop.fruits[key] - 1;
                }
            }
        }
        fruitShop.buyFruit(customer.wantedFruit, customer.wantedFruitAmount);
        orderPrice = fruitShop.getFruitPrice(customer.wantedFruit) * customer.wantedFruitAmount;
        customer.money = customer.money - orderPrice;
        fruitShop.addToRevenue(orderPrice);
        fruitShop.setFruitCount(customer.wantedFruit, customer.wantedFruitAmount);
        fruitShop.updateRevision('add', customer.wantedFruit, customer.wantedFruitAmount);
        getCheck(orderPrice);
    };
    if (customer.refudedFruit) {
        customer.fruits.forEach(function(item, index) {
            for (i = 1; i <= customer.refudedFruitAmount; i++) {
                if (item === customer.refudedFruit) {
                    customer.fruits.splice(index, 1);
                    for (key in fruitShop.fruits) {
                        if (key === customer.refudedFruit) {
                            fruitShop.fruits[key] = fruitShop.fruits[key] + 1;
                        }
                    }
                };
            };
            fruitShop.refundFruit(customer.refudedFruit, customer.refudedFruitAmount);
            customer.money = customer.money + moneyReturned;
            fruitShop.subsctractFromRevenue(moneyReturned);
            fruitShop.setFruitCount(customer.refudedFruit, customer.refudedFruitAmount);
            fruitShop.updateRevision('remove', customer.refudedFruit, customer.refudedFruitAmount);
        });
    };
};

function getCheck(currentCurrency) {
    console.log(`Ваш заказ: ${order.count}  ${order.fruit}. С вас ${currentCurrency}${fruitShop.currency}`);
};
// console.log (order);
console.log(fruitShop.revision);

/*
  функция смотрит на параметры wantedFruit ИЛИ refudedFruit, если есть, то берёт количество и 
  начинает работать с fruitShop.
  - рефандим -- убираем фрукт из fruits пока не закончится refudedFruitAmount,
  если покупаем -- добавляем фрукт в fruits пока не закончится wantedFruitAmount,
  - естественно вычитаем деньги, прибавляем/отнимаем их в/из revenue, не забываем про revision. 
  
  - Используем только методы объекта fruitShop, нельзя делать так:
  fruitShop.revenue = 3, используем, например, fruitShop.subsctractFromRevenue(3)
  
  в конце вызываем getCheck и выводим возвращённый результат в консоль
*/
// Возвращает строку "Ваш заказ: 5 апельсинов. С вас 5$", предполагается, что будет работать со
// значением, возвращённым из buyFruit, currentCurrency понятно откуда брать