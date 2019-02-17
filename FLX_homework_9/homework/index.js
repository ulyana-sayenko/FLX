// Your code goes here
function findTypes() {
  var arr = [];
  for (var i = 0; i < arguments.length; i++) {
    arr.push(typeof arguments[i]);
  }
  return arr;
}
console.log(findTypes(null, 5, 'hello'));


function executeforEach(arr, func) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.push(func(arr[i]));
  }
  return newArray;
}
 executeforEach([1, 2, 3], function (el) {
  console.log(el);
});


function mapArray(arr, func) {
  return executeforEach(arr, func);
}
console.log(mapArray([2, 5, 8], function (el) {
  return el + 3;
}));

function filterArray(arr, func) {
  var filterArray = [];
  executeforEach(arr, function (el) {
    if (func(el)) {
      filterArray.push(el);
    }
  });
  return filterArray;
}
 console.log(filterArray([2, 5, 8], function (el) {
  return el > 3;
}));

var data = [{
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

function getAmountOfAdultPeople(arr) {
  return filterArray(arr,function(el){
    return el.age > 18;
  }).length;
}
console.log(getAmountOfAdultPeople(data));


function getGreenAdultBananaLovers(arr) {
  var filter = filterArray(arr, function (el) {
    return el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green'
  });
  return mapArray(filter,function(el){
    return el.name;
  });
}
console.log(getGreenAdultBananaLovers(data));

function keys(object) {
  var arrkeys = [];
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      arrkeys.push(key);
    }
  }
  return arrkeys;
}
console.log(keys({
  keyOne: 1,
  keyTwo: 2,
  keyThree: 3
}));

function values(object) {
  var arrvalues = [];
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      arrvalues.push(object[key]);
    }
  }
  return arrvalues;
}
console.log(values({
  keyOne: 1,
  keyTwo: 2,
  keyThree: 3
}));

function showFormattedDate(date) {
  var day = date.getDate();
  var month = date.toString().substr(4, 3);
  var year = date.getFullYear();
  return day + ' ' + ' of' + '\t' + month + ' ' + year;

}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

function isEvenYear(date) {
  return date.getFullYear() % 2 === 0;
}
console.log(isEvenYear(new Date('2019-01-27T01:10:00')));

function isEvenMonth(date) {
  return (date.getMonth() + 1) % 2 === 0;
}
console.log(isEvenMonth(new Date('2019-02-27T01:10:00')));