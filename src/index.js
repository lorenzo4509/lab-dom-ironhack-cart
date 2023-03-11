// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = quantity.valueAsNumber;

  const subtotal = priceValue * quantityValue;

  const subtotalElement = product.querySelector('.subtotal');


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  
    const allProducts = document.getElementsByClassName('product');
    for (let i = 0; i < allProducts.length; i++) {
      updateSubtotal(allProducts[i]);
    }
  
  

  // ITERATION 3
  //... your code goes here
  let total = 0;
  for (let i = 0; i < allProductRows.length; i++) {
    const productRow = allProductRows[i];
    const subtotal = updateSubtotal(productRow);
    total += subtotal;
  }

  // Update total value on the DOM
  const totalValueElement = document.getElementById('total-value');
  totalValueElement.innerHTML = `$${total.toFixed(2)}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
