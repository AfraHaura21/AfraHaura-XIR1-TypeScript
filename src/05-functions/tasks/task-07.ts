/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
]

function countActiveStudents(studentList: { name: string; major: string; active: boolean }[]): number {
  let count = 0;
  for (let i = 0; i < studentList.length; i++) { 
    if (studentList[i].active === true) {
      count++;
    }
  }
  return count;
}

function countInactiveStudents(students: { name: string; major: string; active: boolean }[]): number {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].active === false) {
      count++;
    }
  }
  return count;
}

function countStudentsByMajor(
  students: { name: string; major: string; active: boolean }[],
  major: string
): number {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].major === major) {
      count++;
    }
  }
  return count;
}
function printEnrollmentReport(
  students: { name: string; major: string; active: boolean }[]
) {
  console.log("Laporan Data Mahasiswa");
  console.log("Total Mahasiswa          : " + students.length);
  console.log("Mahasiswa Aktif          : " + countActiveStudents(students));
  console.log("Mahasiswa Tidak Aktif    : " + countInactiveStudents(students));
  console.log("Software Engineering     : " + countStudentsByMajor(students, "Software Engineering"));
  console.log("Networking               : " + countStudentsByMajor(students, "Networking"));
  console.log("Multimedia               : " + countStudentsByMajor(students, "Multimedia"));
}

printEnrollmentReport(students);