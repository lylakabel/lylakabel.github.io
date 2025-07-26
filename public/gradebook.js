// Stub: Fetch data (mock version)
function fetchGradeData() {
  console.log("Fetching grade data...");
  // Returning sample data to simulate database fetch
  return [
    { name: "Alice", grades: [85, 92, 78] },
    { name: "Bob", grades: [90, 88, 82] }
  ];
}

// Stub: Populate the table with grade data
function populateGradebook(data) {
  console.log("Populating gradebook with data:", data);
  
  const tableBody = document.querySelector("#gradebook tbody");
  data.forEach(student => {
    const row = document.createElement("tr");

    // Name cell
    const nameCell = document.createElement("td");
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    // Grade cells
    student.grades.forEach(grade => {
      const gradeCell = document.createElement("td");
      gradeCell.textContent = grade;
      row.appendChild(gradeCell);
    });

    tableBody.appendChild(row);
  });
}

// Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);

