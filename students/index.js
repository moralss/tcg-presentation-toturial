const students = [{ name: "Moral", mark: 80 }, { name: "Sabelo ", mark: 56 }, { name: "Mark", mark: 90 }]

// console.log(students)
// list of names

const getNames = (students) => {
  var names = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name)
  }
  return names
}


const getAverage = (students) => {
  var totalMarks = 0;
  for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].mark
  }

  var currentTotal = totalMarks / (students.length * 100);
  return currentTotal * 100;
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

const getTwoStudents = (students) => {
  var topTwoStudents = []
  topTwoStudents.push(students.sort((a, b) => b.mark - a.mark)[0])
  topTwoStudents.push(students.sort((a, b) => b.mark - a.mark)[1])
  return topTwoStudents

}


const studentWhoGotAboveAverage = (students) => {
  var studentsAboveAverage = [];
  for (let i = 0; i < students.length; i++) {
    if (getAverage(students) < students[i].mark) {
      studentsAboveAverage.push(students[i])
    }
  }

  return studentsAboveAverage
}



console.log(studentWhoGotAboveAverage(students))