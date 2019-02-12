function isInteger(num){
  return (num ^ 0) === num;
}
console.log(isFinite(5));
console.log(isInteger(5.1));