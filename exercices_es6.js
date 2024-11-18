//Sum of every positive element
//If the given input is an array of numbers, return the sum of all the positives
// ones. If the array is empty or there aren't any positive numbers, return 0.

//input = [1, -4, 12, 0, -3, 29, -150]==>42
//note: using filter and reduce (2 lines of code :D :D)

const sum_positive_element=(input)=>{

}
//------------------------------------------------------------------------------

//Get name initials
//The given input is a string of multiple words with a single space between each of 
//them. Abbreviate the name and return the name initials.

//input = "George Raymond Richard Martin"==>"GRRM"
//note: using map (one line of code :D :D)

const name_initials=(input)=>{

}

//------------------------------------------------------------------------------

//Age difference from the youngest and oldest
//Find the difference in age between the oldest and youngest family members,
//and return their respective ages and the age difference.
//using map
const input = [
    {
        name: "John",
        age: 13,
      },
      {
        name: "Mark",
        age: 56,
      },
      {
        name: "Rachel",
        age: 45,
      },
      {
        name: "Nate",
        age: 67,
      },
      {
        name: "Jennifer",
        age: 65,
      },
    ];
//result= [13, 67, 54]

//------------------------------------------------------------------------------

//Numeronyms
//Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, 
//l10n means localization. You get the Dev numeronyms by taking the first and the last letter 
//and counting the number of letters in between. Words that have less than 4 letters 
//aren't abbreviated, because that would just be odd. The input is a sentence,
// and you should abbreviate every word that is 4 letters long or longer.
// There won't be any punctuation in the sentence. g2d l2k e6e

const str = "Every developer likes to mix kubernetes and javascript"
//using map==>result="E3y d7r l3s to mix k8s and j8t"

//------------------------------------------------------------------------------

//Count elements in array of arrays
//Count the occurrences of distinct elements in the given 2D array. 
//The given input is an array, the elements of which are arrays of strings.
//The result is an object whose property names are the values from the arrays 
//and their value is the number of their occurrences.
//using reduce
const array = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];

// result={a: 1,b: 1,c: 2,d: 2,f: 2,g: 1,}  

//------------------------------------------------------------------------------

//High performing students
//You are given an array of objects representing a group of students, 
//each with a name and an array of test scores. Your task is to use map, filter, 
//and reduce to calculate the average test score for each student, 
//and then return an array of objects containing only the students who have 
//an average score above 90.

const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "David", scores: [100, 100, 100] }
  ];

 //result =[{ name: 'David', average: 100 }]