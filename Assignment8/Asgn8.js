/**
 * Created by SaiKrishna on 3/3/2016.
 */
function EmployeeInfo(FirstName,LastName,Age,Salary,Department){
    var employees = [];
    for(var i = 0; i<5; i++ ) {
        employees.push(FirstName,LastName,Age,Salary,Department);
    }
    Table(employees);
}

function Table(employees){
    var table = document.createElement('table');
    var td = [];
    var id=document.getElementById("TableDiv");
        var tr = document.createElement('tr');
        for(var i = 0; i<5 ; i++) {
            td[i] = document.createElement('td');
            td[i].innerHTML = employees[i];
            td[i].style.width = "100px";
            td[i].style.textAlign = "center";
            td[i].style.height = "50px";
            tr.appendChild(td[i]);
        }
        table.appendChild(tr);
        id.appendChild(table);
        table.setAttribute("border","1");
}

function GenerateEmployees() {
    EmployeeInfo("Sai", "krishna", 23, 100000, "Development");
    EmployeeInfo("Steven", "Gerrard", 34, 200000, "Management");
    EmployeeInfo("Luis", "Suarez", 28, 300000, "Development");
}
 
