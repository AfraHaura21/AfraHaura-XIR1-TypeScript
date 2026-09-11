/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */
type Student = {
    name: string
    score: number
    attendance: number
}
type PassFailResult = Student & {
    status: "Pass" | "Fail"
}
type AcademicCategory =
    | "Excellent"
    | "Good"
    | "Needs Improvement"
type AcademicResult = Student & {
    category: AcademicCategory
}
type AttendanceResult = Student & {
    attendanceStatus: "Good Attendance" | "Poor Attendance"
}
type Recommendation =
    | "Excellent"
    | "Good"
    | "Improve Attendance"
    | "Improve Academic Performance"
type RecommendationResult = Student & {
    recommendation: Recommendation
}
// Student data
const students: Student[] = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

function getPassFailStatus(
    student: Student
): PassFailResult {
    const status =
        student.score >= 75 &&
        student.attendance >= 90
            ? "Pass"
            : "Fail"

    return {
        ...student,
        status
    }
}

function getAcademicCategory(
    student: Student
): AcademicResult {
    let category: AcademicCategory

    if (student.score >= 90) {
        category = "Excellent"
    } else if (student.score >= 75) {
        category = "Good"
    } else {
        category = "Needs Improvement"
    }
    return {
        ...student, 
        category
    } 
}

function getAttandanceStatus(
    student: Student
): AttendanceResult {
    const attendanceStatus =
        student.attendance >= 90
            ? "Good Attendance"
            : "Poor Attendance"

    return {
        ...student,
        attendanceStatus
    } 
}

function getRecommendation(
    student: Student
): RecommendationResult {
    let recommendation: Recommendation

    if (
        student.score >= 90 &&
        student.attendance >= 90
    ) {
        recommendation = "Excellent"
    } else if (
        student.score >= 75 &&
        student.attendance >= 90
    ) {
        recommendation = "Good"
    } else if (
        student.score >= 75 &&
        student.attendance < 90
    ) {
        recommendation = "Improve Attendance"
    } else {
        recommendation = "Improve Academic Performance"
    }
    return {
        ...student,
        recommendation
    }
}
function processStudents<T>(
    students: Student[],
    callback: (student: Student) => T
): T[] {

    return students.map(callback)
}

const passFailResults = processStudents(
    students,
    getPassFailStatus
)
const academicResults = processStudents(
    students,
    getAcademicCategory
)
const attendanceResults = processStudents(
    students,
    getAttandanceStatus
)
const recommendationResults = processStudents(
    students,
    getRecommendation
)

console.log("== PASS / FAIL STATUS ==")
console.log(passFailResults)
console.log("== ACADEMIC PERFORMANCE ==")
console.log(academicResults)
console.log("== ATTENDANCE STATUS ==")
console.log(attendanceResults)
console.log("== FINAL RECOMMENDATION ==")
console.log(recommendationResults)