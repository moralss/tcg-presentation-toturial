const getFactorial = (value) => {
  if (value == 0) return 1
  return value * getFactorial(value - 1)
}

const reverseString = (str) => {
  if (str === '') return ''
  return reverseString(str.substr(1)) + str[0]
}


const exponential = (e, b) => {
  if (b == 0) return 1
  return e * exponential(e, b - 1)
}

console.log(getFactorial(5))