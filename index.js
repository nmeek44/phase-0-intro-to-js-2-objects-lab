const employee = {
    name: 'Tim',
    streetAddress: '101 Street'
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee};

    newEmployee[key]= value;

    return newEmployee;
};
const employeeJim = updateEmployeeWithKeyAndValue (employee, 'name', 'Jim');

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
};
const employeeLisa = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Lisa');

function deleteFromEmployeeByKey(employee, key) {
    delete employee.key;

    const newEmployee = {employee};

    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    
    return employee;
};