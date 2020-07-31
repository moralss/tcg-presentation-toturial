const computeExponent = (base, powerOfNumber) => {
  if (powerOfNumber === 0) {
    return 1
  }
  return base * computeExponent(base, powerOfNumber - 1)
}

const recursion = (number) => {
  console.log(number)
  if (number == 0) {
    return
  }
  return recursion(number - 1)
}


console.log(recursion(10))