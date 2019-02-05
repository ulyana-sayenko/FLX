// Your code goes here
var a = prompt('write a=');
var b = prompt('write b=');
var c = prompt('write c=');
var x1, x2, x, d;
var result = '';

d = b * b - 4 * a * c;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('Invalid Input data');
} else if (d > 0) {
  x1 = (-b + Math.sqrt(d)) / 2 * a;
  x2 = (-b - Math.sqrt(d)) / 2 * a;

  alert("x1=" + x1 + " | x2=" + x2);
} else if (d === 0) {
  x = -b / 2 * a;

  alert("x=" + x);
} else if (d < 0) {
  result = 'no solution';

  alert(result);
}