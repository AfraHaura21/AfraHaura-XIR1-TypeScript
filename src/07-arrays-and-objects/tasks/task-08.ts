/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
]
// Calculate each employee's average score format {name, averageScore}
const calculateAverage = employees.map((employee) => {
    const totalScore = employee.projects.reduce((total, project) => total + project.score,0);
    const averageScore = totalScore / employee.projects.length;
    return {
        name: employee.name,
        averageScore: averageScore,
    };
});
console.log("1. Average Score", calculateAverage);

// Find employees whose average score is above 85.
const above85= calculateAverage.filter ((employee) => employee.averageScore > 85);
console.log("2. Employees with average score above 85:", above85);

// Find employees who have at least one project with a score below 80.
const below80 = employees.filter((employee) => employee.projects.some((project) => project.score < 80)).map((employee) => employee.name);
console.log("3. Employees with a project score below 80:", below80);