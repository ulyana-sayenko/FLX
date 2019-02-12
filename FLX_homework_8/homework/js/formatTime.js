function formatTime(time) {
  var day = Math.floor(time / 1440);
  var hour = Math.floor((time - (day * 1440)) / 60);
  var minutes = time - (day * 1440) - (hour * 60);
  return day + ' day(s) ' + hour + ' hour(s) ' + minutes + ' minute(s).';
}
console.log(formatTime(3601));
console.log(formatTime(59));
console.log(formatTime(120));