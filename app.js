function updateProduct(product,price, isIncreasing) {
    const productInput = document.getElementById( product +'-number');
    let productInputText = productInput.value;
    if (isIncreasing) {
        productInputText = parseInt(productInputText) + 1;
    }
    else if (productInputText > 0) {
        productInputText = parseInt(productInputText)-1;
    }
    productInput.value = productInputText;
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productInputText * price;
    //calculate total
    calculateTotal();
}
function getInput(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value)
    return productNumber;
}
function calculateTotal() {
    const mobileTotal = getInput('mobile') * 1219
    const caseTotal = getInput('case') * 59
    const subTotal = mobileTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText=  subTotal;
    document.getElementById('tax-amount').innerText=  tax;
    document.getElementById('total-price').innerText=  totalPrice;
}
 ///case update
document.getElementById('cart-plus').addEventListener('click', function () {
    updateProduct('case',59,true)
})
document.getElementById('cart-minus').addEventListener('click', function () {   
    updateProduct('case',59,false)
})
//mobile update

document.getElementById('mobile-plus').addEventListener('click', function () {
    updateProduct('mobile',1219,true)
})
document.getElementById('mobile-minus').addEventListener('click', function () {
    updateProduct('mobile',1219,false)
})