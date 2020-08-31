const numbers = [6, 2, 10, 1];
// const numbers = [2, 6, 10, 1];
// const numbers = [2, 6, 1, 10];
// const numbers = [2, 1, 6, 10];



const bubbleSort = (numbers) => {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      console.log(numbers[j])
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j + 1]
        numbers[j + 1] = numbers[j];
        numbers[j] = temp
      }
    }
  }
  return numbers;
}


console.log(bubbleSort(numbers))