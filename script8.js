// homework 8

// Дерево из прошлого ДЗ нужно сделать сворачивающимся/разворачивающимся + предусмотреть выделение цветом активной лишки

let developer = {
    name: 'Developers',
    id: 2,
    dept_units: [],
};
let devLead = {
    name: 'Lead Developers',
    id: 1,
    dept_units: [developer]
};
let devDeptHead = {
    name: 'Development Management',
    id: 0,
    dept_units: [devLead],
};
let qaTester = {
    name: 'Testers',
    id: 5,
    dept_units: [],
};
let qaLead = {
    name: 'Lead QA',
    id: 4,
    dept_units: [qaTester],
};
let qaDeptHead = {
    name: 'Quality Assurance Management',
    id: 3,
    dept_units: [qaLead],
};

let employers = [{
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
        name: 'SienaTest',
        dept_unit_id: 5,
        tel: '123-123-3',
    }
];

let arrayThead = [{
        name: 'ID',
        id: 'id'
    },
    {
        name: 'Name',
        id: 'name'
    },
    {
        name: 'Telephone',
        id: 'tel'
    }
];

let departments = [devDeptHead, qaDeptHead];
let target;

let div = document.body.appendChild(document.createElement('div'));
let ul = div.appendChild(document.createElement('ul'));

ul.addEventListener('click', fillTable);
ul.addEventListener('click', showAndHideList);

let table = div.appendChild(document.createElement('table'));
let thead = table.appendChild(document.createElement('thead'));
let tbody = table.appendChild(document.createElement('tbody'));

createList(departments, ul);

createTableHead(arrayThead);

function createList(arr, parentHTML) {
    arr.forEach(function(dept) {
        li = parentHTML.appendChild(document.createElement('li'));
        li.className = 'arrow-right';
        let span = li.appendChild(document.createElement('span'));
        span.setAttribute('data-dept-units', dept.id);
        span.innerHTML = dept.name;
        if (dept.dept_units.length) {
            let parent = li.appendChild(document.createElement('ul'));
            parent.hidden = true;
            createList(dept.dept_units, parent);
        } else {
            li.classList.remove("arrow-right");
        }
    });
};

function createTableHead(array) {
    array.forEach(function(obj) {
        let th = thead.appendChild(document.createElement('th'));
        th.innerHTML = obj.name;
    });
};

function showAndHideList() {
    if (target.tagName === 'SPAN') {
        if (target.parentElement.className === 'arrow-right' && target.parentElement.querySelector('ul')) {
            target.parentElement.className = 'arrow-down';
            target.parentElement.querySelector('ul').hidden = false;
        } else {
            if (target.parentElement.querySelector('ul')) {
                target.parentElement.className = 'arrow-right';
                target.parentElement.querySelector('ul').hidden = true;
            };
        };
    } else return;
};

function fillTable() {
    if (tbody.firstElementChild === null) {
        employers.forEach(function(employer) {
            target = event.target;
            target.style.color = "orange";
            if (target.tagName === 'SPAN') {
                if (employer.dept_unit_id === +target.dataset.deptUnits) {
                    let tr = tbody.appendChild(document.createElement('tr'));
                    arrayThead.forEach(function(obj) {
                        let td = tr.appendChild(document.createElement('td'));
                        td.innerText = employer[obj.id];
                    });
                }
            };
        });
    } else {
        target.style.color = "black";
        cleanTable();
    }
};

function cleanTable() {
    table.removeChild(tbody);
    tbody = table.appendChild(document.createElement('tbody'));
    fillTable();
};