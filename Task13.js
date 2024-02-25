function addRecipe() {
    const recipeName = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    if (recipeName && ingredients && instructions) {
        const recipeList = document.getElementById('recipes');
        const li = document.createElement('li');
        li.innerHTML = <h3>${recipeName}</h3><p><strong>Ingredients:</strong> ${ingredients}</p><p><strong>Instructions:</strong> ${instructions}</p>;
        recipeList.appendChild(li);

        // Clear the form
        document.getElementById('add-recipe-form').reset();
    } else {
        alert('Please fill in all fields');
    }
}