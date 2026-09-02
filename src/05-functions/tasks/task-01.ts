/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */
function calculateFinalGrade (Tugas :number , Midtern :number, final :number): number{ //Membuat fungsi dengan menentukan tipe data input harus angka
    return (Tugas * 0.3) + (Midtern * 0.3) + (final * 0.4); // Menghitung dan mengembalikan (return) nilai akhir
}
let nilaiAlya: number = calculateFinalGrade(85 ,80, 92);
let nilaiBudi: number = calculateFinalGrade(78, 75, 81);
let nilaiCitra: number = calculateFinalGrade(90, 88, 95);

console.log ("Nilai Akhir Alya = "+ nilaiAlya);
console.log ("Nilai Akhit Budi = "+ nilaiBudi);
console.log ("Nilai Akhir Citra = "+ nilaiCitra);