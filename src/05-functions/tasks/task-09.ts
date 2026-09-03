/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 *
 * Student Tasks
 * Design a program using multiple reusable functions.
 *
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
// 1. Definisikan struktur data menggunakan interface
interface Patient {
  id: string;
  name: string;
  age: number;
  department: string;
  admitted: boolean;
  bill: number;
}

const patients: Patient[] = [
  {
    id: "PT001",
    name: "Alya",
    age: 17,
    department: "Pediatrics",
    admitted: true,
    bill: 850000,
  },
  {
    id: "PT002",
    name: "Budi",
    age: 45,
    department: "Cardiology",
    admitted: false,
    bill: 1200000,
  },
  {
    id: "PT003",
    name: "Citra",
    age: 68,
    department: "Cardiology",
    admitted: true,
    bill: 2500000,
  },
  {
    id: "PT004",
    name: "Dimas",
    age: 33,
    department: "Orthopedics",
    admitted: true,
    bill: 640000,
  },
  {
    id: "PT005",
    name: "Eka",
    age: 14,
    department: "Pediatrics",
    admitted: false,
    bill: 350000,
  },
];

function getTotalPatients(patients: Patient[]): number {
  return patients.length;
}

function getAdmittedCount(patients: Patient[]): number {
  return patients.filter((p) => p.admitted).length;
}

function getDischargedCount(patients: Patient[]): number {
  return patients.filter((p) => !p.admitted).length;
}

function getDepartmentCounts(patients: Patient[]): Record<string, number> {
  return patients.reduce<Record<string, number>>((counts, p) => {
    counts[p.department] = (counts[p.department] || 0) + 1;
    return counts;
  }, {});
}

function getTotalRevenue(patients: Patient[]): number {
  return patients.reduce((total, p) => total + p.bill, 0);
}

function getHighestBill(patients: Patient[]): number {
  return Math.max(...patients.map((p) => p.bill));
}

function getLowestBill(patients: Patient[]): number {
  return Math.min(...patients.map((p) => p.bill));
}

function getAverageBill(totalRevenue: number, totalPatients: number): number {
  return totalPatients === 0
    ? 0
    : Number((totalRevenue / totalPatients).toFixed(2));
}

function getAdmittedPatientNames(patients: Patient[]): string[] {
  return patients.filter((p) => p.admitted).map((p) => p.name);
}

function printHospitalReport(patients: Patient[]): void {
  const total: number = getTotalPatients(patients);
  const admitted: number = getAdmittedCount(patients);
  const discharged: number = getDischargedCount(patients);
  const deptCounts: Record<string, number> = getDepartmentCounts(patients);
  const revenue: number = getTotalRevenue(patients);
  const highest: number = getHighestBill(patients);
  const lowest: number = getLowestBill(patients);
  const average: number = getAverageBill(revenue, total);
  const admittedNames: string[] = getAdmittedPatientNames(patients);

  console.log(" HOSPITAL DAILY REPORT ");
  console.log(`Total Patients         : ${total}`);
  console.log(`Admitted Patients      : ${admitted}`);
  console.log(`Discharged Patients    : ${discharged}`);

  console.log("Patients per Department");
  for (const [dept, count] of Object.entries(deptCounts)) {
    console.log(`${dept}: ${count}`);
  }

  console.log("Financial Summary");
  console.log(`Highest Bill         : Rp ${highest}`);
  console.log(`Lowest Bill          : Rp ${lowest}`);
  console.log(`Average Bill         : Rp ${average}`);
  console.log(`Total Revenue        : Rp ${revenue}`);

  console.log("Admitted Patient Names");
  console.log(`${admittedNames.join(", ")}`);
}
printHospitalReport(patients);
