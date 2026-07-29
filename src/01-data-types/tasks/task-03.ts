/**
 * SMK Telkom Malang is developing a new Student Information System.
 * Before students can use the system, the administrator must record each student's basic information.
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 *
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 *
 * display the student data using console.log.
 */

type Student = {
  studentID: number;
  fullname: string;
  age: number;
  Active: boolean;
};

const student1: Student = {
  studentID: 542252110,
  fullname: "Afra Hau",
  age: 16,
  Active: true,
};

const student2: Student = {
  studentID: 542253212,
  fullname: "Arissa Ash",
  age: 17,
  Active: true,
};

const student3: Student = {
  studentID: 542251607,
  fullname: "eko agus",
  age: 17,
  Active: false,
};

console.log("Data Student");

console.log("Student 1");
console.log("ID:", student1.studentID);
console.log("Name:", student1.fullname);
console.log("Age:", student1.age);
console.log("Active:", student1.Active);
console.log(" ");
console.log("Student 2");
console.log("ID:", student2.studentID);
console.log("Name:", student2.fullname);
console.log("Age:", student2.age);
console.log("Active:", student2.Active);
console.log(" ");
console.log("Student 3");
console.log("ID:", student3.studentID);
console.log("Name:", student3.fullname);
console.log("Age:", student3.age);
console.log("Active:", student3.Active);

/*console.log("Data Student");
console.log({student1, student2, student3});*/
