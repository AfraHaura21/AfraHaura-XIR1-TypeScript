/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];
function printAttendanceReport(attendancesList: any) {
  let totalPresent = 0;
  let totalAbsent = 0;
  let absentNames = [];

  
  for (let i = 0; i < attendancesList.length; i++) {
    let student = attendancesList[i];
   
    if (student.present === true) {
      totalPresent++;
    } else {
      totalAbsent++;
      absentNames.push(student.name); 
    }
  }
  console.log("LAPORAN KEHADIRAN");
  console.log("Total Hadir: " + totalPresent);
  console.log("Total Absen: " + totalAbsent);
  console.log("Nama Siswa Absen: " + absentNames.join(", "));
}

printAttendanceReport(attendances);