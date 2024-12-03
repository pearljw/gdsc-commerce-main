const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
addToCartBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        handleAddToCart(e)
    })
})

function handleAddToCart(e) {
    // alert(e.target.parentNode.dataset.name)
    // alert(e.target.parentNode.dataset.price)
    const newProductName = document.createElement('p')
    const newProductPrice = document.createElement('p')
    const removeButton = document.createElement('button')
    const newDiv = document.createElement('div')

    newProductName.textContent = e.target.parentNode.dataset.name
    newProductPrice.innerHTML = "&#x020a6;" + e.target.parentNode.dataset.price
    removeButton.textContent = "Remove"

    newDiv.appendChild(newProductName)
    newDiv.appendChild(newProductPrice)
    newDiv.appendChild(removeButton)

    const cartItems = document.querySelector('.cart-items')
    cartItems.appendChild(newDiv)

    
    removeButton.addEventListener("click", function (e) {
    newDiv.remove(e)
}) 
    //Assignment make the remove button work
}