/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */
function executeAnalysis(scoresArray: number[], callback: (score: number) => void,
): void {
  for (let i = 0; i < scoresArray.length; i++) {
    callback(scoresArray[i]);
  }
}

function checkPassOrFail(score: number): void {
  const status = score >= 70 ? "Pass" : "Fail";
  console.log(`Score ${score} status is: ${status}`);
}

function convertToGradeLetter(score: number): void {
  let grade: string;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else {
    grade = "D";
  }
  console.log(`Grade for score ${score} is ${grade}`);
}

function calculateBonus(score: number): void {
  const bonusScore = score + 5;
  console.log(`Original: ${score} -> After Bonus: ${bonusScore}`);
}

function evaluateExcellence(score: number): void {
  const category = score > 90 ? "Excellent" : "Reguler";
  console.log(`Score ${score} is considered: ${category}`);
}

executeAnalysis(scores, checkPassOrFail);
executeAnalysis(scores, convertToGradeLetter);
executeAnalysis(scores, calculateBonus);
executeAnalysis(scores, evaluateExcellence);