 class Employee {
     constructor(employeeId, employeeName, employeeAddress, designation) {
         this.employeeId = employeeId;
         this.employeeName = employeeName;
         this.employeeAddress = employeeAddress;
         this.designation = designation;
     }
 }
 let employee = [];
 let data = {};

 function addEmployee(event) {
     event.preventDefault();

     //console.log(" 11111111111");
     let name = document.getElementById("name").value;
     let address = document.getElementById("address").value;
     let empid = document.getElementById("employee-id").value;
     let designation = document.getElementById("designation").value;
     data = new Employee(empid, name, address, designation);

     //alert("Added Employee Details Successfully...");
 }
 employee.push(data);

 console.log(employee);

 function viewEmployee() {
     let table = '<table><tr><th>Name</th><th>Address</th><th>Employee ID</th><th>Designation</th></tr>';

     employee.forEach(function(employee) {
         table += '<tr><td>' + employee.name + '</td><td>' + employee.address + '</td><td>' + employee.empId + '</td><td>' + employee.designation + '</td></tr>';
     });

     table += '</table>';
     return table;

 }



 export { Employee, addEmployee, viewEmployee, employee };