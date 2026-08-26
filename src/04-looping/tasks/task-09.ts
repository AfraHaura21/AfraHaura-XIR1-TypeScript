/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let jumlahA = 0;
let jumlahB = 0;
let jumlahC = 0;
let jumlahD = 0;

let totalNilai = 0;
let nilaiTertinggi = 0;    
let nilaiTerendah = 100;   

for (let siswa of students) {
  
  totalNilai = totalNilai + siswa.score;

  if (siswa.score >= 90) {
    jumlahA = jumlahA + 1;
  } else if (siswa.score >= 80) {
    jumlahB = jumlahB + 1;
  } else if (siswa.score >= 70) {
    jumlahC = jumlahC + 1;
  } else {
    jumlahD = jumlahD + 1;
  }

  if (siswa.score > nilaiTertinggi) {
    nilaiTertinggi = siswa.score;
  }
  if (siswa.score < nilaiTerendah) {
    nilaiTerendah = siswa.score;
  }
}
let rataRata = totalNilai / students.length;

console.log("Jumlah siswa A: " + jumlahA);
console.log("Jumlah siswa B: " + jumlahB);
console.log("Jumlah siswa C: " + jumlahC);
console.log("Jumlah siswa D: " + jumlahD);
console.log("Nilai Tertinggi: " + nilaiTertinggi);
console.log("Nilai Terendah: " + nilaiTerendah);
console.log("Rata-rata Nilai: " + rataRata);