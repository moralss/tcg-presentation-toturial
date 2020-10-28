const students = [{ name: "Moral", mark: 80 }, { name: "Sabelo ", mark: 56 }, { name: "Mark", mark: 100 }]

// console.log(students)


// list of names

const getStudentNames = (students) => {
  const names = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name)
  }

  return names;
}

const getAverage = (students) => {
  var totalMarks = 0;
  for (let i = 0; i < students.length; i++) {
    // console.log(students[i].mark)
    totalMarks += students[i].mark
  }

  var currentTotal = totalMarks / (students.length * 100);


  return currentTotal * 100;
}


console.log(getAverage(students))
