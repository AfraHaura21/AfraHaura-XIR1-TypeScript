/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
    employeeID: number;
    employeeName: string;
    date: string;
    checkInTime: string;
    checkOutTime: string;
    totalWorking: number;
    isPresent: boolean;
}

const attendance1: Attendance = {
    employeeID: 222,
    employeeName: "shafa irfan",
    date: "2027-21-09",
    checkInTime: "06.13",
    checkOutTime: "14.13",
    totalWorking: 8,
    isPresent: true,

}

const attendance2: Attendance = {
    employeeID: 333,
    employeeName: "Pak yoyok",
    date: "2027-21-09",
    checkInTime: "06.20",
    checkOutTime: "14.30",
    totalWorking: 8.10,
    isPresent: true,

}

const attendance3: Attendance = {
    employeeID: 222,
    employeeName: "shafa irfan",
    date: "2027-21-09",
    checkInTime: "06.05",
    checkOutTime: "14.10",
    totalWorking: 8.05,
    isPresent: true,
} 

console.log("Data Attendance");
console.log({attendance1,attendance2,attendance3});
