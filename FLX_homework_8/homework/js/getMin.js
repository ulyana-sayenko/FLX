function getMin() {
  var sum = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    var min = arguments[i];
    if (min < sum) {
      sum = min;
    }
  }
  return sum;
}
console.log(getMin(3, 0, -3));
