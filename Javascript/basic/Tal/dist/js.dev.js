"use strict";

//primitive variabels
var city = 'Kedumim'; //it is an old declaration, similar to let

var name = "Tal"; //string

var email = "Yaron";
var phoneNumber = 49; //number;

name = 23; //number

name = true;
name = false; //booleans

name = null; // nothing, undefined in memory

name = undefined; //there is a location in memory, but no value was asign

var student = {
  name: "tal",
  surename: 'Yaron'
}; //obj {key:value, key:value, key:value}

console.log(student.name);
console.log(student['name']);
console.log(student.surename);
console.log(student['surename']); //object variables
//object

var animal = {
  name: "אוגר",
  size: "קטן",
  src: "https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_380,w_500/543439",
  color: "לבן",
  weight: "150g"
};
var image = document.getElementById('animalPic');
var title = document.getElementById('title');
console.dir(image);
image.src = animal.src;
title.innerText = "My beloved animal is ".concat(animal.name); //array

var arr = ['Gilad', 'Ira', 'Olga', 12, true]; //[elm, elm, elm]

console.log(arr);
console.log(arr[0]);
console.log(arr[4]);
arr[4] = false;
arr[5] = 1;
console.log(arr);
console.log(arr[4]);
arr.push(''); //date

var today = new Date();
var days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
var todayInNumbers = today.getDay();
console.log('todayInNumbers', todayInNumbers);
console.log("\u05D4\u05D9\u05D5\u05DD \u05D9\u05D5\u05DD ".concat(days[todayInNumbers]));