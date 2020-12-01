
var students = [{ name: "smith", mark: 50 }, { name: "moss", mark: 46 }]
var output = document.getElementById("output");
var displayTopStudent = document.getElementById("topstudent");
var displayAverage = document.getElementById("average");


const updateDisplay = () => {
  for (var student of students) {
    output.innerHTML += `<li>${student.name} : ${student.mark}</li>`
  }
}
const calculateAverage = () => {
  var average = getAverage(students);
  displayAverage.innerHTML = average;
  console.log(getAverage(students))
}


const getAverage = (students) => {
  var totalMarks = 0;
  for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].mark
  }

  var currentTotal = totalMarks / (students.length * 100);
  return currentTotal * 100;
}

const saveStudentInfo = () => {
  const name = document.getElementById("name").value;
  const mark = document.getElementById("mark").value;
  var newStudent = { name: name, mark: Number(mark) }
  students.push(newStudent)
  output.innerHTML = ''
  updateDisplay()
}

const getTopStudent = () => {
  var topStudent = getTopStudents(students);
  displayTopStudent.innerHTML = topStudent.name
  console.log(topStudent)

}

const getTopStudents = (students) => {
  var topMark = 0;
  var topStudents = {};
  for (let i = 0; i < students.length; i++) {
    if (students[i].mark > topMark) {
      topMark = students[i].mark;
      topStudents = students[i]
    }
  }
  return topStudents

}

updateDisplay()