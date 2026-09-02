/**
 * The HR department wants to display bonus notifications for employees.
 * Business Rules
 *  - Performance score ≥ 85 → Bonus Approved
 *  - Otherwise → Bonus Not Approved
 * Employee data:
 * | Employee       | Score |
 * | ---------------| ----- |
 * | John Cena      |    92 |
 * | Undertaker     |    76 |
 * | Rey Mysterio   |    88 |
 *
 * Instead of repeating the decision logic, the HR department wants a reusable function.
 * The function should display the notification directly and does not return any value.
 *
 * Student Tasks:
 * 1. Create a function named showBonusStatus.
 * 2. The function receives:
 *  - employee name
 *  - performance score
 * 3. Display the bonus result inside the function.
 * 4. Call the function for every employee.
 */


function PerformanceStatus(score: number) : any{
  if (score > 90) {
    return "Excellent";
  } else if (score > 80) {
    return "Good";
  } else if (score > 70) {
    return "Needs Improvement";
  }
}

function showBonusStatus(name: string, score: number): void {
  let performanceStatus: string = PerformanceStatus(score);
  let bonus: string = "";
  if (score >= 85) {
    bonus = "Bonus Approved";
  } else {
    bonus = "Bonus Not Approved";
  }

  console.log(`${name}: ${performanceStatus} - ${bonus}`);
}

showBonusStatus("John Cena", 92);
showBonusStatus("UnderTaker", 76);
showBonusStatus("Rey Mysterio", 88);
