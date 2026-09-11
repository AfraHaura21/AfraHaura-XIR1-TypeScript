/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];
// Ambil nama siswa yang hadir ["Andi", "Citra"]
const presentNames = attendance
    .filter(att => att.status === "present")
    .map(att => {
        const student = students.find(s => s.id === att.studentId);
        return student ? student.name : "";
    });

// Ambil nama siswa yang ["Budi"]
const absentNames = attendance
    .filter(att => att.status === "absent")
    .map(att => {
        const student = students.find(s => s.id === att.studentId);
        return student ? student.name : "";
    });

// Ambil nama siswa yang terlambat ["Deni"]
const lateNames = attendance
    .filter(att => att.status === "late")
    .map(att => {
        const student = students.find(s => s.id === att.studentId);
        return student ? student.name : "";
    });

// Gabungkan data menjadi array berisi { name, status }
const studentStatusList = students.map(student => {
    const att = attendance.find(a => a.studentId === student.id);
    return {
        name: student.name,
        status: att ? att.status : "unknown" // "unknown" jika data absen tidak ditemukan
    };
});


console.log("Siswa yang Hadir  : ", presentNames);
console.log("Siswa yang Tidak Hadir  : ", absentNames);
console.log("Siswa yang Telat  : ", lateNames);
console.log("Daftar Status Siswa:");
console.table(studentStatusList);
