function isBigger(x1, x2) {
  return x1 > x2;
}

function isSmaller(x1, x2) {
  return isBigger(x1, x2);
}
console.log(isSmaller(5, -1));
