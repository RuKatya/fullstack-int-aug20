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
console.log(student['surename']);