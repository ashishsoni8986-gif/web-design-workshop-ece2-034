let employees ={
    name:"Alice",
    salary:6000,
    dept:"HR"
};
console.log(employees);
console.log(employees.name);
console.log(employees.salary);
console.log(employees.dept);



let Employees = [];

function AddEmployee() {
    let Emp={
        name:document.getElementryById("name").value,
        id:document.getElementryById("id").value,
        salary:Number(document.getElementryById("salary")).value,
        dept:document.getElementryById("dept").value,

    }

};
{
employees.push(emp);
alert("Employee Added!");
}

function displayEmployees(){
    let output= "" ;

    for(let emp of employees){
        output+= emp.name + " - " + emp.salary +"<br>";
    }
    document.getElementryById("output").innerHTML="output";
}

function filterEmployees(){
    let result=employees.filter(emp=>emp.salary>50000);
    let output= "";

}