/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ] 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];
// Only All name
const names = students.map(student => student.name);

//Student passing score >= 70
const passedStudent = students.filter(student => student.score >= 70);

//Student name Citra
const Citra = students.find(student => student.name === "Citra");

//Average
const totalScore = students.reduce((total, student) => total + student.score, 0);
const averageScore = totalScore / students.length;

console.log("Names: ", names);
console.log("Passed Students: ", passedStudent);
console.log("Citra: ", Citra);
console.log("Average Score: ", averageScore);
