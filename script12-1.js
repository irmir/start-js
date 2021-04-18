// homework 12

// Переделайте ваших сотрудников (это где задание с деревом и таблицей) в классы — 
// у вас будет начальный Employee и несколько других, типа Developer, Tester, 
// которые расширяют (extends) Employee, потом DevLead расширяют Developer и дальше по аналогии. 
// У каждого дочернего класса должны быть новые проперти, например лид может писать код и управлять, 
// глава департамента писать код, управлять и увольнять. Плюс все промиcы переписать на async/await


class Emploees {
    constructor(name, tel, id, dept_unit_id) {
        this.name = name;
        this.tel = tel;
        this.id = id;
        this.dept_unit_id = dept_unit_id;
    }
    work () {
        console.log ( "I work" )
    } 
}

class Developer extends Emploees {
    constructor(name, tel, id, dept_unit_id) {
        super(name, tel, id, dept_unit_id);
    }
    work (){
        super.work();
        console.log ('very well!')
    }
    workInATeam() {
        console.log ("I work in a team")
    }
}

class Devlead extends Developer {
    constructor(name, tel, id, dept_unit_id) {
        super(name, tel, id, dept_unit_id);
    }
    work (){
        super.work();
    }
    workInATeam() {
        super.workInATeam();
        console.log ('and alone.')
    }
    guide() {
        console.log ("I guide");
    }
}

class DeveloperHead extends Devlead {
    constructor(name, tel, id, dept_unit_id) {
        super (name, tel, id, dept_unit_id);
    }
    work (){
        super.work();
    }
    workInATeam() {
        super.workInATeam();
        console.log ('I follow everything..');
    }
    guide() {
        super.guide();
        console.log('and not only..')
    }
    dismiss() {
        console.log ("I dismiss. You're fired!");
    }
}

class Tester extends Emploees {
    constructor(name, tel, id, dept_unit_id) {
        super(name, tel, id, dept_unit_id);
    }
    work (){
        super.work();
        console.log ('very well!')
    }
    workInATeam() {
        console.log ("I work in a team")
    }
}

class Qalead extends Tester {
    constructor(name, tel, id, dept_unit_id) {
        super(name, tel, id, dept_unit_id);
    }
    work (){
        super.work();
    }
    workInATeam() {
        super.workInATeam();
        console.log ('and alone.')
    }
    guide() {
        console.log ("I guide");
    }
}

class QaHead extends Qalead{
    constructor(name, tel, id, dept_unit_id) {
        super (name, tel, id, dept_unit_id);
    }
    work (){
        super.work();
    }
    workInATeam() {
        super.workInATeam();
        console.log ('I follow everything..');
    }
    guide() {
        super.guide();
        console.log('and not only..')
    }
    dismiss() {
        console.log ("I dismiss. You're fired!");
    }
}

let employee1 = new Developer ('MirraDev', '333-22-11', 1, 2);
let employee2 = new Developer ('iraDev', '333-22-11', 2, 2);
let employee3 = new Devlead ('MashaLead', '333-22-11', 3, 1);
let employee4 = new Devlead ('SashaLead', '333-22-11', 4, 1);
let employee5 = new DeveloperHead ('YarikHead', '333 22 11', 5, 0);
let employee6 = new Tester ('SienaTest', '333-22-11', 6, 5);
let employee7 = new Tester ('LenaTest', '333-22-11', 7, 5);
let employee8 = new Qalead ('KoliaLead', '333-22-11', 8, 4);
let employee9 = new Qalead ('OliaLead', '333-22-11', 9, 4);
let employee10 = new QaHead ('DanikHead', '333 22 11', 10, 3);

let employees = [employee1, employee2, employee3, employee4, employee5, employee6, employee7, employee8, employee9, employee10];

showInConsole (employees);

function showInConsole(employee) {
    employee.forEach(function(employee) {
        console.log (`${employee.name}, tel:${employee.tel}, id:${employee.id}, dept_unit_id:${employee.dept_unit_id}`);
        if (employee.work) {
            console.log (employee.work());
        }
        if (employee.workInATeam) {
            console.log (employee.workInATeam());
        }
        if (employee.guide) {
            console.log (employee.guide());
        }
        if (employee.dismiss) {
            console.log (employee.dismiss());
        }
    })
}

class Departments {
    constructor(name, id, dept_units) {
        this.name = name;
        this.id = id;
        this.dept_units = dept_units;
    }
}

let developer = new Departments('Developers', 2, []);
let devLead = new Departments('Lead Developers', 1, [developer]);
let devDeptHead = new Departments('Development Management', 0, [devLead]);
let qaTester = new Departments('Testers', 5, []);
let qaLead = new Departments('Lead QA', 4, [qaTester]);
let qaDeptHead = new Departments('Quality Assurance Management', 3, [qaLead]);

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
let selectedSpan;

let div = document.body.appendChild(document.createElement('div'));
let ul = div.appendChild(document.createElement('ul'));

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

ul.addEventListener('click', function () { 
    let deptId;
    target = event.target;  
    deptId = +target.dataset.deptUnits; 
    if (tbody.firstElementChild) {
        cleanTable();
    }
    getEmployees(deptId)
        .then(setupTable);
});

function getEmployees (id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
        let deptEmployees = [];
        employees.forEach(function(employee) {
            if (target.tagName === 'SPAN') {
                if (employee.dept_unit_id === id) {
                    deptEmployees.push(employee);
                }
            };
        });
        resolve(deptEmployees);
        }, 1000); // эмулируем запрос на сервер
    });
}

function setupTable (employees) {
    employees.forEach(function(employee) {
        let tr = tbody.appendChild(document.createElement('tr'));
        arrayThead.forEach(function(obj) {
                        let td = tr.appendChild(document.createElement('td'));
                        td.innerText = employee[obj.id];
                    });
    });
};

function cleanTable() {
    table.removeChild(tbody);
    tbody = table.appendChild(document.createElement('tbody'));
};

function changeColor(span) {
    if (selectedSpan) {
        selectedSpan.classList.remove('orange');
    }
    selectedSpan = span;
    selectedSpan.classList.add('orange');
}




