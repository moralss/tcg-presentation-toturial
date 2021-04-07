


function solution (digits) {
  var arrayOfDigits = digits.split("");
  var highestNumber = 0;
  var indexFound = 0;
  for (var i = 0; i <= digits.length - 5; i++) {
    if (highestNumber < arrayOfDigits[i]) {
      highestNumber = arrayOfDigits[i]
      indexFound = i
    }
  }

  return digits.slice(indexFound, indexFound + 5)
}



var number = "1234637890";
console.log(solution(number))

// 1234567890
