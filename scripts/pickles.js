// Make an HTML component for each product
const productHTMLMaker = product => {
    return `
        <section id="product--${product.id}">
            <h1>${product.productName}</h1>
        </section>
    `
}

// Put component on DOM
const addProductToDOM = productHTML => {
    const listEl = document.querySelector("#productList")
    listEl.innerHTML += productHTML
}

for (const product of products) {

    const html = productHTMLMaker(product)
    addProductToDOM(html)


    // Get to each product's ingredients and assign to variable
    const recipeObject = recipes.find(
        recipe => {
            return product.id === recipe.productId
        }
    )

    // Iterate through ingredients
    recipeObject.ingredients.forEach(
        recipeIngredient => {
            const ingredientObject = ingredients.find(
                ing => {
                   return recipeIngredient.ingredientId === ing.id
                }
            )

            // Add ingredients representation to DOM
            const target = document.querySelector(`#product--${product.id}`)
            target.innerHTML +=` <li>${ingredientObject.name}</li> `
        }
    )
}
