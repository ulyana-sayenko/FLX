 function reverseNumber(num) {
   num = num + '';
   var reverse = num.split('').reverse().join('');
  return Math.sign(num)*parseFloat(reverse);
 }
 console.log(reverseNumber(123));
 console.log(reverseNumber(-456));
 console.log(reverseNumber(10000));
