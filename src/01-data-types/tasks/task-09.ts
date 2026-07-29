/**
 * A programming bootcamp stores information about every participant who registers for the Backend Development class. 
 * Since many students register for the same course, the system stores the participant data as a collection instead of creating separate variables.
 * Today, three students registered for the course.
| Student ID | Name           | Age | Has Paid |
| ---------- | -------------- | --- | -------- |
| ST001      | Ahmad Fauzi    | 16  | Yes      |
| ST002      | Siti Nurhaliza | 17  | No       |
| ST003      | Budi Santoso   | 16  | Yes      |


 * Task:
 * 1. Define a proper type for the participant information.
 * 2. Store the participant data in a single collection.
 * 3. Display the participant data using console.log.
 */

type participant = {
  StudentID: string;
  NameFull: string;
  Age: number;
  HasPaid: string;
};

const BackendClass: participant[] = [
  {
    StudentID: "ST001",
    NameFull: "Ahmad Fauzi",
    Age: 16,
    HasPaid: "Yes",
  },
  {
    StudentID: "ST002",
    NameFull: "Siti Nurhaliza",
    Age: 17,
    HasPaid: "No",
  },
  {
    StudentID: "ST003",
    NameFull: "Budi Santoso",
    Age: 16,
    HasPaid: "Yes",
  },
];
console.log(BackendClass);
