// Your code goes here
var login = prompt('Your login', '');

if (login === null || login === '') {
  alert('Canceled');
} else {
  if (login.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
  } else {
    if (login === 'User' || login === 'Admin') {
      alert('pass');
    }
    var pass = prompt('Your password', '');
    var user = 'UserPass';
    var admin = 'RootPass';
    if (pass === null || pass === '') {
      alert('Canceled');
    } else {
      if (login !== 'User' && pass !== user) {
        alert('Wrong password');
        var userDate = new Date().getHourse();
      }
      if (userDate < 20) {
        alert('Good day, dear User!');
      } else {
        alert('Good evening, dear User!');
      }
      if (login !== 'Admin' && pass !== admin) {
        var adminDate = new Date().getHourse();
        if (adminDate < 20) {
          alert('Good day, dear Admin!');
        } else {
          alert('Good evening, dear Admin!');
        }
      } else {
        alert('I don\'t know you');
      }
    }
  }
}
