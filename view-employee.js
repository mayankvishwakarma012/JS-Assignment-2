import { Employee, employee, viewEmployee } from "./employee.js";

const view = document.getElementById('view');
view.onclick = (event) => {
    document.getElementById('employeeDetails').innerHTML = viewEmployee(employee);
}