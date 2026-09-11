/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
  {
    id: 1,
    question: "What is TypeScript?",
    correctAnswer: "A",
    category: "TypeScript",
  },
  {
    id: 2,
    question: "Which method transforms an array?",
    correctAnswer: "B",
    category: "Array",
  },
  {
    id: 3,
    question: "Which method filters an array?",
    correctAnswer: "C",
    category: "Array",
  },
  {
    id: 4,
    question: "What does reduce() do?",
    correctAnswer: "D",
    category: "Array",
  },
];

const submissions = [
  {
    student: "Andi",
    answers: [
      { questionId: 1, answer: "A" },
      { questionId: 2, answer: "B" },
      { questionId: 3, answer: "C" },
      { questionId: 4, answer: "D" },
    ],
  },
  {
    student: "Budi",
    answers: [
      { questionId: 1, answer: "B" },
      { questionId: 2, answer: "B" },
      { questionId: 3, answer: "A" },
      { questionId: 4, answer: "D" },
    ],
  },
  {
    student: "Citra",
    answers: [
      { questionId: 1, answer: "A" },
      { questionId: 2, answer: "C" },
      { questionId: 3, answer: "C" },
      { questionId: 4, answer: "B" },
    ],
  },
];

// Calculate each student's score
const studentScores = submissions.map((submission) => {
  const correct = submission.answers.filter((answer) => {
    const question = questions.find(
      (question) => question.id === answer.questionId,
    );
    return question?.correctAnswer === answer.answer;
  }).length;
  const score = correct * 25;
  return {
    student: submission.student,
    score: score,
  };
});
console.log("1. Student Scores:", studentScores);

// Determine each student's correct and wrong answers
const answerResults = submissions.map((submission) => {
  const correct = submission.answers.filter((answer) => {
    const question = questions.find(
      (question) => question.id === answer.questionId,
    );
    return question?.correctAnswer === answer.answer;
  }).length;
  const wrong = submission.answers.length - correct;
  return {
    student: submission.student,
    correct: correct,
    wrong: wrong,
  };
});
console.log("2. Correct and Wrong Answers:", answerResults);

// Calculate the average score for each category
const maxTsScore = questions.filter(q => q.category === "TypeScript").length * 25 * submissions.length;
const maxArrayScore = questions.filter(q => q.category === "Array").length * 25 * submissions.length;
let totalTsScore = 0;
let totalArrayScore = 0;

submissions.forEach((sub) => {
    sub.answers.forEach((ans) => {
        const q = questions.find((quest) => quest.id === ans.questionId);
        if (q && ans.answer === q.correctAnswer) {
            if (q.category === "TypeScript") totalTsScore += 25;
            if (q.category === "Array") totalArrayScore += 25;
        }
    });
});

// Rata-rata dalam skala nilai 0 - 100
const categoryAverage = {
    TypeScript: Number(((totalTsScore / maxTsScore) * 100).toFixed(2)),
    Array: Number(((totalArrayScore / maxArrayScore) * 100).toFixed(2))
};
console.log("3. Average Score per Category:", categoryAverage);

// Generate final exam analytics
const scores = studentScores.map((student) => student.score);
const totalStudents = scores.length;
const averageScore =
  scores.reduce((total, score) => total + score, 0) / totalStudents;
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const passedStudents = scores.filter((score) => score >= 75).length;
const failedStudents = scores.filter((score) => score < 75).length;
const passRate = (passedStudents / totalStudents) * 100;
const finalAnalytics = {
  totalStudents: totalStudents,
  averageScore: Number(averageScore.toFixed(2)),
  highestScore: highestScore,
  lowestScore: lowestScore,
  passedStudents: passedStudents,
  failedStudents: failedStudents,
  passRate: Number(passRate.toFixed(2)),
};
console.log("4. Final Exam Analytics:", finalAnalytics);
