console.log("javascript")
var valuesToBeCalculated = []
var listOfSymbols = ["+", "-", "*"]


const addValues = (value) => {
  valuesToBeCalculated.push(value)
  const findSymbol = listOfSymbols.find(symbol =>
    symbol == valuesToBeCalculated[valuesToBeCalculated.length - 2])
  const findSymbolInLastPosition = listOfSymbols.find(symbol => symbol == value)
  if (findSymbolInLastPosition && findSymbol) {
    valuesToBeCalculated.splice(valuesToBeCalculated.length - 1, 1);
  }
  updateDisplay(valuesToBeCalculated.join(""))
}

const updateDisplay = (item) => {
  const output = document.getElementById('output');
  output.innerHTML = item
}

const calculateValues = () => {
  const stringValues = valuesToBeCalculated.join("");
  const total = eval(stringValues)
  updateDisplay(total)
  valuesToBeCalculated = []
}