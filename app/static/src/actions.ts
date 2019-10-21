const ingRecipeEnum = {
  ADD_RECIPE_ING: 'ADD_RECIPE_ING'
}

function addRecipeIng (ingId: string) {
  return {
    type: ingRecipeEnum.ADD_RECIPE_ING,
    ingId
  }
}