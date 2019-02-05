// Your code goes here
var a = prompt('input amount of money in range 0 to 9999999', '');
var b = prompt('discount - 0 to 99 ', '');

if (a !== null && a > 0 && a < 9999999 && b !== null && b > 0 && b > 99) {
  var discount = a * b / 100;
  var lastPrice = a - discount;

  alert('Prise without discount: ' + parseFloat(a).toFixed(2) + '\n' +
    'Discount: ' + parseFloat(b).toFixed(2) + '\n' +
    'Prise wiht discount: ' + parseFloat(lastPrice).toFixed(2) + '\n' +
    'Saved: ' + parseFloat(discount).toFixed(2));
} else {
  alert('Invalid Input data');
}