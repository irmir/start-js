// homework 7

// Короче, ваше задание

// 1) Вам нужно объявить 6+ объектов, кажный из готовых имеет структуру

// {
//     name: 'String',
//     id: 0,
//     dept_units: []
// }

// Нужно сначала задать все объекты, потом будем их наполнять.
// Здесь главная идея -- сделать два-три корневых объекта, вроде DevDeptHead и QADeptHead и каждому в массив dept_units положить 
// минимум одну ссылку на объект чтобы по итогу было что-то вроде -- типа дерева объектов

// let c = {
//     name: 'String',
//     id: 3,
//     dept_units: []
// }

// let b = {
//     name: 'String2',
//     id: 2,
//     dept_units: [c]
// }

// let a = {
//     name: 'String1',
//     id: 1,
//     dept_units: [b]
// }


// 2) Вам нужно объявить массив и положить туда только корневые объекты.

// 3) пробегаемся по массиву с помощью функции, она должна быть рекурсивная
// типа берём один объект строим HTML элемент и передаём его рекурсивно дальше вместе с детьми

// пример

// function recursive (arr, parentHTML) {
//     arr.forEach(function (dept) {
//         // генерируем HTML, вставляем на страницу, и помещаем его в переменную parent, чтобы передать далее по рекурсии
//         // Важное замечание: элемент списка li должен иметь аттрибут data-unit-id и иметь id объекта, чтобы мы могли позже по нажатию
//         // извлечь айдишник и искать по нему в массиве сотрудников, которые работают на данной должности
//         // на каждый элемент вешаем событие, по которому у нас будет происходить поиск потом. К этому потом вернемся далее
//         if (arr.dept_units) {
//             recursive(arr.dept_units, parent)
//         }
//     })
// }

// (!) Если рекурсия не получается, сделайте просто дерево, можете просто его написать прям на странице, а не генерировать с помощью JS
// Вообще лучше сначала напишите его на странице, чтобы понимать как оно будет выглядеть

// 4) Пишем массив с объектами сотрудников вида:
// {
//     id: 0,
//     name: 'String',
//     dept_unit_id: 1,
//     tel: '123-123-3',
// }

// где dept_unit_id -- это айди департамента, в котором сотрудник работает (см пункт 1), на каждой позиции должен работать 
// хотя бы один сотрудник, то есть хотя бы один ITDeptHead, ITDeptLead, ITDeptEmployee и так далее

// 5) пишем в html таблицу с колонками
// id, name, tel

// 5) Пишем функцию, которая будет колбеком в рекурсии 3 по нажатию на элемент списка li
// то есть, на клик срабатывает событие и начинается поиск по массиву из 4, когда находим -- помещаем сотрудников в таблицу 3.
// отмечу, что нужно таблицу очищать перед этим, так как в этом случае не будут наслаиваться сотрудники из разных отделов

// 6) хотелось бы еще попросить сделать так, чтобы при нажатии на элемент дерева -- он становился подсвеченным или выделенным или другого
// цвета, неважно, а при нажатии на другой -- первый ставновился обычным, а уже другой подсвечивался


developer = {
    name: 'Developers',
    id: 2,
    dept_units: [],
};
devLead = {
    name: 'Lead Developers',
    id: 1,
    dept_units: [developer]
};
devDeptHead = {
    name: 'Development Management',
    id: 0,
    dept_units: [devLead],
};
qaTester = {
    name: 'Tecters',
    id: 5,
    dept_units: [],
};
qaLead = {
    name: 'Lead QA',
    id: 4,
    dept_units: [qaTester],
};
qaDeptHead = {
    name: 'Quality Assurance Management',
    id: 3,
    dept_units: [qaLead],
};

employers = [{
        dept_unit_id: 0,
        id: 0,
        name: 'YarikHead',
        tel: '123-123-3',
    },
    {
        id: 1,
        name: 'MashaLead',
        dept_unit_id: 1,
        tel: '123-123-3',
    },
    {
        id: 2,
        name: 'SashaLead',
        dept_unit_id: 1,
        tel: '123-123-3',
    },
    {
        id: 3,
        name: 'IraDev',
        dept_unit_id: 2,
        tel: '123-123-3',
    },
    {
        id: 4,
        name: 'MirraDev',
        dept_unit_id: 2,
        tel: '123-123-3',
    },
    {
        id: 5,
        name: 'DanikHead',
        dept_unit_id: 3,
        tel: '123-123-3',
    },
    {
        id: 6,
        name: 'OliaLead',
        dept_unit_id: 4,
        tel: '123-123-3',
    },
    {
        id: 7,
        name: 'KoliaLead',
        dept_unit_id: 4,
        tel: '123-123-3',
    },
    {
        id: 8,
        name: 'LenaTest',
        dept_unit_id: 5,
        tel: '123-123-3',
    },
    {
        id: 9,
        name: 'SienaTesr',
        dept_unit_id: 5,
        tel: '123-123-3',
    }
];

let array = [devDeptHead, qaDeptHead];
let arrayThead = ['ID', 'Name', 'Telephone'];
let target;

let div = document.body.appendChild(document.createElement('div'));
let ul = div.appendChild(document.createElement('ul'));
ul.addEventListener('click', fillTable);

let table = div.appendChild(document.createElement('table'));
let thead = table.appendChild(document.createElement('thead'));

createList(array, ul);

createTableHead();

function createList(arr, parentHTML) {
    arr.forEach(function(dept) {
        let li = parentHTML.appendChild(document.createElement('li'));
        let span = li.appendChild(document.createElement('span'));
        span.setAttribute('id', dept.id);
        span.innerHTML = dept.name;
        span.style.cssText = `
        cursor: pointer;
        `;
        let parent = li.appendChild(document.createElement('ul'));
        if (dept.dept_units) {
            createList(dept.dept_units, parent);
        };
    });
};

function createTableHead(array) {
    arrayThead.forEach(function(item) {
        let th = thead.appendChild(document.createElement('th'));
        th.innerHTML = [item];
        th.style.cssText = `
        border: 2px solid black;
        padding: 10px 0;
        width: 200px;
        `;
    });
};

function cleanTable() {
    for (i = table.rows.length - 1; i >= 0; i--) {
        let listTR = document.querySelectorAll('tr');
        listTR[i].parentNode.removeChild(listTR[i]);
    };
    fillTable(event);
};

function fillTable(event) {
    if (thead.nextElementSibling === null) {
        employers.forEach(function(employer) {
        target = event.target;
            if (target.tagName === 'SPAN') {
                if (employer.dept_unit_id === +target.id) {
                    let tr = table.appendChild(document.createElement('tr'));
                    target.style.color = "orange";
                    for (let key in employer) {

                        if (key !== "dept_unit_id") {
                            let td = tr.appendChild(document.createElement('td'));
                            td.innerHTML = employer[key];
                            td.style.cssText = `
                            border: 2px solid black;
                            padding: 10px 0;
                            width: 200px;
                            `;
                        };
                    }
                }
            };

        });
    } else {
        target.style.color = "black";
        cleanTable();
    }
};

div.style.cssText = `
    display: flex;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    font-family: sans-serif;
    font-size: 20px;
`;
ul.style.cssText = `
    width: 50%;
`;
table.style.cssText = `
    width: 600px;
    border-collapse: collapse;
    text-align: center;
    margin-top: 15px;
`;