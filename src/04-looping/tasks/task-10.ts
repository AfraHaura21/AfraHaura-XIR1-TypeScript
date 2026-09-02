/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];
let jumlahMengumpulkan = 0;
let jumlahTidakMengumpulkan = 0;
let jumlahLulus = 0;
let jumlahRemidi = 0;
let totalNilai = 0;

let namaTidakMengumpulkan = [];
let namaHarusRemidi = [];

for (let data of submissions) {
 
  totalNilai = totalNilai + data.score;

  if (data.submitted === true) {
    jumlahMengumpulkan = jumlahMengumpulkan + 1;
  
    if (data.score >= 75) {
      jumlahLulus = jumlahLulus + 1;
    } else {
      jumlahRemidi = jumlahRemidi + 1;
      namaHarusRemidi.push(data.student);
    }

  } else {
   
    jumlahTidakMengumpulkan = jumlahTidakMengumpulkan + 1;
    namaTidakMengumpulkan.push(data.student); 
  }
}
let rataRata = totalNilai / submissions.length;

console.log("RINGKASAN DATA TUGAS");
console.log("Jumlah siswa mengumpulkan: " + jumlahMengumpulkan);
console.log("Jumlah siswa tidak mengumpulkan: " + jumlahTidakMengumpulkan);
console.log("Jumlah siswa lulus: " + jumlahLulus);
console.log("Jumlah siswa harus revisi: " + jumlahRemidi);

console.log("DAFTAR NAMA ");
console.log("Siswa tidak mengumpulkan: " + namaTidakMengumpulkan.join(", "));
console.log("Siswa revisi: " + namaHarusRemidi.join(", "));

console.log("STATISTIK KELAS");
console.log("Rata-rata nilai kelas: " + rataRata);
