
class Emploees {
    constructor(name, tel, id, deptUnitId) {
        this.name = name;
        this.tel = tel;
        this.id = id;
        this.deptUnitId = deptUnitId;
    }
    work () {
        console.log ( "I work" )
    } 
}

class Developer extends Emploees {
    constructor(name, tel, id, deptUnitId) {
        super(name, tel, id, deptUnitId);
    }
    work (){
        super.work();
        console.log ('a lot!')
    }
    workInATeam() {
        console.log ("I work in a team")
    }
}

class Devlead extends Developer {
    constructor(name, tel, id, deptUnitId) {
        super(name, tel, id, deptUnitId);
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
    constructor(name, tel, id, deptUnitId) {
        super (name, tel, id, deptUnitId);
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
let employee1 = new Developer ('MirraDev', '333-22-11', 3, 2);
console.log (`${employee1.name}, tel:${employee1.tel}, id:${employee1.id}, dept_unit_id:${employee1.deptUnitId}`);
console.log (employee1.work());
console.log (employee1.workInATeam());
let employee2 = new Devlead ('MashaLead', '333-22-11', 1, 1);
console.log (`${employee2.name}, tel:${employee2.tel}, id:${employee2.id}, dept_unit_id:${employee2.deptUnitId}`);
console.log (employee2.work());
console.log (employee2.workInATeam());
console.log (employee2.guide());
let employee3 = new DeveloperHead ('YarikHead', '333 22 11', 0, 0);
console.log (`${employee3.name}, tel:${employee3.tel}, id:${employee3.id}, dept_unit_id:${employee3.deptUnitId}`);
console.log (employee3.work());
console.log (employee3.workInATeam());
console.log (employee3.guide());
console.log (employee3.dismiss());





