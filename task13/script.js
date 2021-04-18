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
    },
    {
        name: 'Salary',
        id: 'salary',
        mark: 'marked'
    }
];

// localStorage.clear();

let target;

let selectedSpan;

let div = document.body.appendChild(document.createElement('div'));
let ul = div.appendChild(document.createElement('ul'));

ul.addEventListener('click', showAndHideList);
document.querySelector('.select-department').addEventListener('click', removeList);

let table = div.appendChild(document.createElement('table'));
let thead = table.appendChild(document.createElement('thead'));
let tbody = table.appendChild(document.createElement('tbody'));

createTableHead(arrayThead);

function createTableHead(array) {
    array.forEach(function(obj) {
        let th = thead.appendChild(document.createElement('th'));
        th.innerHTML = obj.name;
    });
};

async function startSelect() {
    let department = await chooseDepartment();
    createList(department, ul);
};

async function chooseDepartment() {
    let select = document.querySelector('.select-department');
    let indOpt = select.options.selectedIndex;
    let department = eval(select.options[indOpt].value);
    let departments = [];
    departments.push(department);
    return departments;
}

function createList(arr, parentHTML) {
    arr.forEach(function(dept) {
        li = parentHTML.appendChild(document.createElement('li'));
        li.className = 'arrow-right';
        let span = li.appendChild(document.createElement('span'));
        span.setAttribute('data-dept-units', dept.id);
        span.innerHTML = dept.name;
        if (dept.dept_units.length) {
            let parent = li.appendChild(document.createElement('ul'));
            // parent.hidden = true;
            createList(dept.dept_units, parent);
        } else {
            li.classList.remove("arrow-right");
        }
    });
};

ul.addEventListener('click', function() {
    document.querySelector('.select-currency').disabled = false;
    document.querySelector('.main').selected = true;
    let target = event.target;
    let deptId = target.dataset.deptUnits;
    if (tbody.firstElementChild) {
        cleanTable();
    }
    if (!localStorage.getItem(deptId)) {
        let url = `.departments/${deptId}_department.json`;
        init(url, deptId);
    } else {
        let emploees = JSON.parse(localStorage.getItem(deptId));
        setupTable(emploees);
    }
});

async function init(url, id) {
    let response = await getServerResponse(url);
    let emploees = await writeToLocalStorage(response, id);
    setupTable(response);
}

async function getServerResponse(url) {
    try {
        let response = await fetch(url);
        let result = await response.json();
        return result;
    } catch (err) {
        alert('error');
    }
}

function writeToLocalStorage(response, id) {
    let emploees = JSON.stringify(response);
    localStorage.setItem(id, emploees);
}

function setupTable(employees) {
    employees.forEach(function(employee) {
        let tr = tbody.appendChild(document.createElement('tr'));
        arrayThead.forEach(function(obj) {
            let td = tr.appendChild(document.createElement('td'));
            td.innerText = employee[obj.id];
            if (obj.mark) {
                td.className = obj.mark;
            }
        });
    });
};

async function startChangeCurrencySalary(value) {
    if (value === "1") {
        changeCurrencySalary(1);
        return;
    }
    let url = "http://www.nbrb.by/api/exrates/rates" + "/" + value;
    let rates = await getServerResponse(url);
    changeCurrencySalary(rates);
}

function changeCurrencySalary(value) {
    let salaries = [];
    if (value === 1) {
        rate = value;
    } else rate = value.Cur_OfficialRate;

    let deptUnit = target.getAttribute('data-dept-units');
    let emploees = JSON.parse(localStorage.getItem(deptUnit));

    emploees.forEach(function(employee) {
        let salary = employee.salary;
        salaries.push(salary);
    });

    let markedCollection = document.querySelectorAll('.marked');

    for (let i = 0; i < salaries.length; i++) {
        markedCollection.item(i).innerText = Math.round(salaries[i] / rate);
    }
}


function showAndHideList() {
    target = event.target;
    if (target.tagName === 'SPAN') {
        changeColor(target);
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

function cleanTable() {
    table.removeChild(tbody);
    tbody = table.appendChild(document.createElement('tbody'));
};

function removeList() {
    if (document.querySelectorAll) {
        for (let li of document.querySelectorAll('li')) {
            li.remove();
        };
    }
}

function changeColor(span) {
    if (selectedSpan) {
        selectedSpan.classList.remove('orange');
    }
    selectedSpan = span;
    selectedSpan.classList.add('orange');
}