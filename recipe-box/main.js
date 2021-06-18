const recipes = [];
var selectedRecipe;
var indexOfSelectedRecipe;
var indexOfEditRecipe = null;
var indexOfEditIngredients = null;


const addRecipe = () => {
  const recipeName = document.getElementById("recipeName").value;
  recipes.push({ recipeName: recipeName, ingredients: [] })
  displayRecipes()
}


const displayRecipes = () => {
  const output = document.getElementById("output");
  output.innerHTML = ""
  for (var i in recipes) {
    output.innerHTML += `<li onclick="setAddIngredient(${i})">
     ${recipes[i].recipeName}
      <button onclick="showIngredients(${i})"> show Ingredients </button> </li>`
  }
}


const setAddIngredient = (index) => {
  selectedRecipe = recipes[index];
  indexOfSelectedRecipe = index;
  const recipeForIngredient = document.getElementById("recipeForIngredient")
  recipeForIngredient.innerHTML = selectedRecipe.recipeName
}

const showIngredients = (index) => {
  const ingredientOutput = document.getElementById('ingredientOutput')

  ingredientOutput.innerHTML = ""
  for (var i in recipes[index].ingredients) {
    ingredientOutput.innerHTML += `<li>
     ${recipes[index].ingredients[i]}
    <button onclick="removeIngredient('${index}','${i}')"> delete </button>
       <button onclick="editIngredient('${index}','${i}')"> edit </button>
  </li>
  `
  }


}
const removeIngredient = (indexOfSelectedRecipe, indexOfSelectedIngredients) => {
  recipes[indexOfSelectedRecipe].ingredients.splice(indexOfSelectedIngredients, 1)
  showIngredients(indexOfSelectedIngredients)
}

const editIngredient = (indexOfRecipe, indexOfIngredients) => {
  const ingredientToBeEdited = document.getElementById("ingredientToBeEdited");
  ingredientToBeEdited.value = recipes[indexOfRecipe].ingredients[indexOfIngredients]

  indexOfEditRecipe = indexOfRecipe;
  indexOfEditIngredients = indexOfIngredients;
}

const saveEditIngredient = () => {
  const ingredientToBeEdited = document.getElementById("ingredientToBeEdited");
  recipes[indexOfEditRecipe].ingredients.splice(indexOfEditIngredients, 1)
  recipes[indexOfEditRecipe].ingredients.push(ingredientToBeEdited.value)
  showIngredients(indexOfEditRecipe)
}


const addIngredient = () => {
  const ingredientName = document.getElementById("ingredientName").value;
  recipes[indexOfSelectedRecipe].ingredients.push(ingredientName)
}
