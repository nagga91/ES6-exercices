// use reduce to write the following functions
  
function sum(nums) {
    // TODO: your work goes here

  }
//-----------------------------------------------------------------------  
  function product(nums) {
    // TODO: your work goes here

  }
//-----------------------------------------------------------------------
  // NOTE: the square sum function so that it squares each number passed into it and then sums the results together.
  // For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. 
  function squareSum(nums) {
    // TODO: your work goes here
  }
//-----------------------------------------------------------------------  
 
// returns true if all numbers in the array are odd, false if one of them is even
// example: [1, 2, 3, 11] => false
// [1, 3, 5, 11] => true
function allOdds(nums) {
   // TODO: your work goes here
  };
//-----------------------------------------------------------------------
 
//Turn an array of voter objects into a count of how many people voted 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 function totalVotes(arr) {
    // your code here    
 }
 console.log(totalVotes(voters)); // 7
//-----------------------------------------------------------------------

 
 //Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 function shoppingSpree(arr) {
    // your code here    
 }
 console.log(shoppingSpree(wishlist)); // 227005