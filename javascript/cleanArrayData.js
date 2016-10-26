'use strict'

/*Create a method that will clean data from a data center reporting on it's machines CPU usage.
Currently the data center has an issue where it sometimes reports percentages outside the approriate limits.
The data needs to stay in the same order as it comes in, it just needs to be cleaned.
Implement first by returning a copied array, implement second returning the original array.*/


function cleanArrayData(array) {
  if (!Array.isArray(array)) {
    throw new Error("Please load an array.");
  }
  var cleanedArr = [];
  for (var i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      throw new Error("Error, non-integers being reported.");
    }
    if (array[i] >= 0 && array[i] <= 100) {
      cleanedArr.push(array[i]);
    }
  }
  return cleanedArr;
}


function cleanArrayData2(array) {
  if (!Array.isArray(array)) {
    throw new Error("Please load an array.");
  }
  var write = 0;
  for (var i = 0; i < array.length; i++) {
    if (isNaN(array[i]) || array[i] === null) {
      throw new Error("Error, non-integers being reported.");
    }
    if (array[i] >= 0 && array[i] <= 100) {
      array[write] = array[i];
      write++;
    }
  }
  var numToRemove = array.length - write;
  array.splice(write, numToRemove);
  return array;
}