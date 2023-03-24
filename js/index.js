// ITERATION 1

function updateSubtotal(product) {


  let price = product.querySelector('.price span');
  let quantity = product.querySelector('input')

  let finalResult = price.textContent * quantity.value
  product.querySelector('.subtotal span').innerHTML = finalResult


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let priceTotal = 0
  let tagName = document.querySelectorAll('.product')

  for (let i = 0; i < tagName.length; i++) {
    if (tagName[i].querySelector('input')) {
      updateSubtotal(tagName[i]);


      const subValue = tagName[i].querySelector('.subtotal span')
      priceTotal += parseInt(subValue.textContent)
    }
  }

  let finalSum = document.querySelector('#total-value span')

  finalSum.textContent = priceTotal



}

// ITERATION 4

function removeProduct(event) {
  const productRow = event.target.closest('.product');
  productRow.parentNode.removeChild(productRow);
  console.log('Producto eliminado');


}

// ITERATION 5

function createProduct() {

  const inputName = document.querySelector('.create-product input[type="text"]')
  const inputPrice = document.querySelector('.create-product input[type="number"]')

  const name = inputName.value
  const price = parseInt(inputPrice.value)

  const newProduct = document.createElement('tr');
  newProduct.classList.add('product')

  newProduct.innerHTML = `
  <td class="name">
          <span>${name}</span>
        </td>
        <td class="price">$<span>${price.toFixed(2)}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove" onClick="removeProduct">Remove</button>
        </td>
  
  `

  const productTable = document.querySelector('#cart tbody');
  productTable.appendChild(newProduct)


  const removeButton = newProduct.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);


  inputName.value = ''
  inputPrice.value = 0

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.product .btn')

  removeButtons.forEach(eachButton => {
    eachButton.addEventListener('click', removeProduct)
  })

});
