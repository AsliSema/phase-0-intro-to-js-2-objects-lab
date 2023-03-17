// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "1234 Main Street"
}

function updateEmployeeWithKeyAndValue(object, key, value){
    const newObj = {...object};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value;
    return object
}
function deleteFromEmployeeByKey(object, key){
    const newObj = {...object};
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key];
    return object;
}

updateEmployeeWithKeyAndValue(employee, "streetAddress", "12")
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "15")
deleteFromEmployeeByKey(employee, "name")
destructivelyDeleteFromEmployeeByKey(employee, "name")