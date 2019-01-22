// Make an HTML component for each product
const productHTMLMaker = product => {
    return `
        <section>
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
}



