// Write a function that returns the product of 2 numbers

/*function product(x, y) {
  for (i=0; i<product.length; i++){
    if (isNaN(product[i])){
      return false;
    };
    total *= number(product[i]);
  };
  return total;
};
console.log(product([3,5])) */

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num %2 === 0){
    return true;
  } else {
    return false;
  };
}
console.log(isEven(2));

// Return the largest of 2 numbers

function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a){
    return b;
  }
}
console.log(maxOfTwoNumbers(2, 7));

// Return the largest of 3 numbers

function maxOfThreeNumbers(a, b, c) {
  if (a>b && a>c){
    return a;
  } else if ( b>a && b>c){
    return b;
  } else if (c>a && c>b){
    return c;
  } else{
    return 0
  };
}

console.log(maxOfThreeNumbers(2, 9, 5));

// Calculate the sum of an array of numbers

/* function sumArray(numbers) {
  for (var i=0; i<sumArray.length; i++){
    sumArray = sumArray[i];
    plus += sumArray;
  }
};
console.log(1,2,3);  */

// Return the largest number of a non-empty array

/*function maxOfArray(numbers) {
  return Math.max(maxOfArray());
}
console.log(maxOfArray([3,28,31,9])); */

// Return the longest string in an array

/*function longestString(strings) {
  var count = strings[0];
  for (let i=0; i<longestString.length; i++){
    return i += longestString.length;
  }
  return count;
}
console.log(longestString(['una', 'string', 'larga'])); */

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (let i=0; i<doesWordExist.length; i++){
    if (wordsArr.includes(word)){
      return true;
    } else{
      return false;
    }
  }
};
console.log(doesWordExist(['Hello','darkness']), 'darkness')

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
