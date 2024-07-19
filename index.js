// Write your solution in this file!
// Create an employee object
let employee = {
    name: "Jane Doe",
    streetAddress: "123 Maple Street"
};

// Output the employee object to verify
console.log(employee);

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Use the spread operator to create a new object with the updated key-value pair
    return {
        ...employee,
        [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Directly assign the new value to the key
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    // Use destructuring to create a new object without the specified key
    const { [key]: _, ...newEmployee } = employee;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the key from the original object
    delete employee[key];
    return employee;
}
