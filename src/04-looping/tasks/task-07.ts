/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentCount = 0;
let absentCount = 0;
const absentNames = ["Alya", "Budi", "Citra", "Dimas", "Eka", "Fajar", "Gita", "Hana"];   '125'
for (let i = 0; i < attendances.length; i++) {
    const student = attendances[i]; 

    if (student.present === true) {
        presentCount++; 
    } else {
        absentCount++; 
        absentNames.push(student.name); 
}

const totalStudents = attendances.length;
const attendancePercentage = (presentCount / totalStudents) * 100;

console.log("LAPORAN ABSENSI KELAS");
console.log("Jumlah siswa hadir      : " + presentCount);
console.log("Jumlah siswa absen      : " + absentCount);
console.log("Daftar nama siswa absen : " + absentNames.join(", "));
console.log("Persentase kehadiran    : " + attendancePercentage.toFixed(2) + "%");
}