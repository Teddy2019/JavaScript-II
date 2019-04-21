// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
 
  // const firstName = 'Teddy';// Global scop (can be called from any scop )
  // const fullName = function(){ 
  //   const lastName = Zenebe; // Local scop (only called with in the full name function)
  //   return firstName + ' ' + lastName;
  //  }
  



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====

const counter = function(){
  // Return a function that when invoked increments and returns a counter variable.
     let c = 0;
     const count = function(){
        c = c+1;
        return c;
     };
    return count;
};

// Example usage: 
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = function() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let inc = 0;
  let dec = 100;
  const increment = function(){
        inc = inc + 1;
        return inc;
     };
  const dicrement = function(){
        dec = dec - 1;
        return dec;
     };
  return {increments: increment,  decrements: dicrement};
};

const newObj = counterFactory();
const newincrement = newObj.increments;
const newdecrement = newObj.decrements;
console.log(newincrement());// increas by 1  ==> 1 ..
console.log(newdecrement());// dcrease by 1 starts from 100 ==> 99