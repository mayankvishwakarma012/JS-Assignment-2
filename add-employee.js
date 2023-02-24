import { Employee, addEmployee } from "./employee.js";
const add = document.getElementById('add');
add.onclick = (event) => {
    addEmployee(event);
}