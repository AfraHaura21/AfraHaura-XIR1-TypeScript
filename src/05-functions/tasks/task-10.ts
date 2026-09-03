/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 *
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 *
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 *
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 *
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

interface Enrollment {
  student: string;
  course: string;
  completed: boolean;
  score: number;
  duration: number;
}

interface CourseStat {
  studentCount: number;
  averageScore: number;
}

const enrollments: Enrollment[] = [
  {
    student: "Alya",
    course: "TypeScript",
    completed: true,
    score: 91,
    duration: 38,
  },
  {
    student: "Budi",
    course: "TypeScript",
    completed: false,
    score: 45,
    duration: 12,
  },
  {
    student: "Citra",
    course: "Database",
    completed: true,
    score: 87,
    duration: 42,
  },
  {
    student: "Dimas",
    course: "Backend",
    completed: true,
    score: 96,
    duration: 40,
  },
  {
    student: "Eka",
    course: "Database",
    completed: false,
    score: 60,
    duration: 18,
  },
  {
    student: "Fajar",
    course: "Backend",
    completed: true,
    score: 82,
    duration: 35,
  },
  {
    student: "Gita",
    course: "TypeScript",
    completed: true,
    score: 88,
    duration: 36,
  },
  {
    student: "Hana",
    course: "Backend",
    completed: false,
    score: 70,
    duration: 20,
  },
];

function getTotalEnrollments(data: Enrollment[]): number {
  return data.length;
}

function getCompletedCount(data: Enrollment[]): number {
  return data.filter((e) => e.completed).length;
}

function getIncompleteCount(total: number, completed: number): number {
  return total - completed;
}

function getCompletionPercentage(completed: number, total: number): number {
  if (total === 0) return 0;
  return Number(((completed / total) * 100).toFixed(2));
}

function getHighestScore(data: Enrollment[]): number {
  if (data.length === 0) return 0;
  return Math.max(...data.map((e) => e.score));
}

function getLowestScore(data: Enrollment[]): number {
  if (data.length === 0) return 0;
  return Math.min(...data.map((e) => e.score));
}

function getAverageScore(data: Enrollment[]): number {
  if (data.length === 0) return 0;
  const totalScore = data.reduce((sum, e) => sum + e.score, 0);
  return Number((totalScore / data.length).toFixed(2));
}

function getPassedCount(data: Enrollment[]): number {
  return data.filter((e) => e.score >= 75).length;
}

function getTotalLearningHours(data: Enrollment[]): number {
  return data.reduce((total, e) => total + e.duration, 0);
}

function getAverageLearningDuration(
  totalHours: number,
  totalEnrollments: number,
): number {
  if (totalEnrollments === 0) return 0;
  return Number((totalHours / totalEnrollments).toFixed(2));
}

function getCourseGroupedStatistics(
  data: Enrollment[],
): Record<string, CourseStat> {
  const grouped = data.reduce<
    Record<string, { count: number; totalScore: number }>
  >((acc, e) => {
    if (!acc[e.course]) {
      acc[e.course] = { count: 0, totalScore: 0 };
    }
    acc[e.course].count += 1;
    acc[e.course].totalScore += e.score;
    return acc;
  }, {});

  const result: Record<string, CourseStat> = {};
  for (const course in grouped) {
    result[course] = {
      studentCount: grouped[course].count,
      averageScore: Number(
        (grouped[course].totalScore / grouped[course].count).toFixed(2),
      ),
    };
  }
  return result;
}

function printCourseStatistics(courseStats: Record<string, CourseStat>): void {
  console.log("\n[ COURSE STATISTICS ]");
  for (const [courseName, stat] of Object.entries(courseStats)) {
    console.log(`  * Course: ${courseName}`);
    console.log(`    - Students Enrolled : ${stat.studentCount}`);
    console.log(`    - Average Score     : ${stat.averageScore}`);
  }
}

function generateAcademyDashboard(data: Enrollment[]): void {
  const totalEnrollments = getTotalEnrollments(data);
  const completedCount = getCompletedCount(data);
  const incompleteCount = getIncompleteCount(totalEnrollments, completedCount);
  const completionRate = getCompletionPercentage(
    completedCount,
    totalEnrollments,
  );
  const highest = getHighestScore(data);
  const lowest = getLowestScore(data);
  const averageScore = getAverageScore(data);
  const passedStudents = getPassedCount(data);
  const totalHours = getTotalLearningHours(data);
  const averageDuration = getAverageLearningDuration(
    totalHours,
    totalEnrollments,
  );
  const courseStats = getCourseGroupedStatistics(data);

  console.log("ONLINE LEARNING ACADEMY DASHBOARD");
  console.log("COMPLETION STATISTICS");
  console.log(`Total Enrollments   : ${totalEnrollments}`);
  console.log(`Completed Courses   : ${completedCount}`);
  console.log(`Incomplete Courses  : ${incompleteCount}`);
  console.log(`Completion Rate     : ${completionRate}%`);

  console.log("ACADEMIC STATISTICS");
  console.log(`Highest Score       : ${highest}`);
  console.log(`Lowest Score        : ${lowest}`);
  console.log(`Average Class Score : ${averageScore}`);
  console.log(`Passed Students (>=75): ${passedStudents}`);

  console.log("LEARNING STATISTICS ]");
  console.log(`Total Learning Hours: ${totalHours} hours`);
  console.log(`Avg. Study Duration : ${averageDuration} hours/student`);

  printCourseStatistics(courseStats);
}

generateAcademyDashboard(enrollments);
