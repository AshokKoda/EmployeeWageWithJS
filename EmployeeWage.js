console.log("---------------------Employee Attendence------------------------");
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is absent");
} else {
    console.log("Employee is present");
}

console.log("---------------------Calculate Employee Wage------------------------");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage:" + empWage);

console.log("---------------------Get Employee Working hours------------------------");
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let empCheck1 = Math.floor(Math.random() * 10) % 3;
let empHrs1 = getWorkingHours(empCheck1);
let empWage1 = empHrs1 * WAGE_PER_HOUR;
console.log(" Emp Hour:" + empHrs1 + " Emp Wage: " + empWage1);

console.log("---------------------Monthly wage------------------------");
let totalEmpHrs = 0;
 for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
     let empCheck = Math.floor(Math.random() * 10) % 3;
     totalEmpHrs += getWorkingHours(empCheck);
 }
 let empWage2 = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Hours:" + totalEmpHrs + " Employee Wage:" + empWage2);

