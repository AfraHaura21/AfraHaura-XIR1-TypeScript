/**
 * An online learning platform allows students to register for programming courses.
 * Every registration stores information about both the student and the selected course.
 * Student information includes student ID, full name, and grade level.
 * Course information includes the course ID, course title, instructor name,
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 *
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 *
 * display the registration data using console.log.
 */

type Registration = {
  studentID: number;
  fullname: string;
  gradeLevel: string;
  courseID: number;
  courseTitle: string;
  instructorName: string;
  totalLearningHours: number;
  registrationDate: string;
  isPaymentCompleted: boolean;
};

const registration1: Registration = {
  studentID: 54321,
  fullname: "Afra Haura A.R",
  gradeLevel: "11th Grade",
  courseID: 222,
  instructorName: "Pak Yoyok",
  courseTitle: "JavaScript",
  totalLearningHours: 4,
  registrationDate: "2027-21-09",
  isPaymentCompleted: true,
};

const registration2: Registration = {
  studentID: 54221,
  fullname: "Afra Hau",
  gradeLevel: "12th Grade",
  courseID: 123,
  instructorName: "Pak Dewa",
  courseTitle: "OOP",
  totalLearningHours: 6,
  registrationDate: "2027-12-01",
  isPaymentCompleted: false,
};
const registration3: Registration = {
  studentID: 541212,
  fullname: "Afra Rahma",
  gradeLevel: "12th Grade",
  courseID: 154,
  instructorName: "Bu Dewi",
  courseTitle: "OOP",
  totalLearningHours: 6,
  registrationDate: "2027-12-01",
  isPaymentCompleted: false,
};

console.log("Data Registration");
console.log({ registration1, registration2, registration3 });
