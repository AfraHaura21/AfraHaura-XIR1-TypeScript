/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
interface Submission {
    student: string;
    submitted: boolean;
    score: number;
}
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function getTotalStudents(submissionsList: Submission[]): number {
  return submissionsList.length;
}

function getSubmittedCount(submissionsList: Submission[]): number {
  return submissionsList.filter(item => item.submitted === true).length;
}

function getMissingCount(submissionsList: Submission[]): number {
  return submissionsList.filter(item => item.submitted === false).length;
}

function getPassedCount(submissionsList: Submission[]): number {
  return submissionsList.filter(item => item.score >= 75).length;
}

function getRevisionCount(submissionsList: Submission[]): number {
  return submissionsList.filter(item => item.submitted && item.score < 75).length;
}

function getAverageScore(submissionsList: Submission[]): number {
  if (submissionsList.length === 0) return 0;
  const totalScore = submissionsList.reduce((sum, item) => sum + item.score, 0);
  return Number((totalScore / submissionsList.length).toFixed(2));
}

interface ScoreExtremes {
  highest: number;
  lowest: number;
}

function getScoreExtremes(submissionsList: Submission[]): ScoreExtremes {
  if (submissionsList.length === 0) return { highest: 0, lowest: 0 };
  const scores = submissionsList.map(item => item.score);
  return {
    highest: Math.max(...scores),
    lowest: Math.min(...scores)
  };
}

function displayPrincipalReport(submissionsList: Submission[]): void {
  const total = getTotalStudents(submissionsList);
  const submitted = getSubmittedCount(submissionsList);
  const missing = getMissingCount(submissionsList);
  const passed = getPassedCount(submissionsList);
  const revision = getRevisionCount(submissionsList);
  const average = getAverageScore(submissionsList);
  const extremes = getScoreExtremes(submissionsList);

  console.log("=== Laporan Tugas LMS ===");
  console.log(`Total Siswa             : ${total}`);
  console.log(`Tugas Dikumpulkan      : ${submitted}`);
  console.log(`Tugas Belum Dikumpul    : ${missing}`);
  console.log(`Siswa Lulus             : ${passed}`);
  console.log(`Siswa Perlu Revisi      : ${revision}`);
  console.log(`Rata-rata Nilai         : ${average}`);
  console.log(`Nilai Tertinggi         : ${extremes.highest}`); 
  console.log(`Nilai Terendah          : ${extremes.lowest}`);  
}

displayPrincipalReport(submissions);