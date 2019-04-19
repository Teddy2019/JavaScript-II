// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(arrLength) {
  console.log(arrLength)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length -1]);
}

last(items, (lastitem) => {console.log(lastitem)});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x + y;
  return cb(sum);
}

sumNums(2, 3, function(add) {console.log(add)});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const multi = x * y;
  return cb(multi);
}

multiplyNums(2, 9, function (multiply){ console.log(multiply)});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(item)){
      return cb(true);
    }
    else{ return cb(false);}
}

contains('teddy', items, function(answ){console.log(answ)});
contains('Notebook', items, (answ) =>{console.log(answ)});

/* STRETCH PROBLEM */
const testNum = [1, 2, 5, 6, 5, 2, 3, 1, 4]
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const freeArray = [...new Set(array)];
  cb(freeArray)
}

removeDuplicates(testNum, function(newArray){console.log(newArray)});