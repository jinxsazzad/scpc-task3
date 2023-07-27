/*
Task 1 : Create a function that takes a string as input and returns the reversed version of the
string without using the built-in reverse() method.
Example Input: "hello world" Example Output: "dlrow olleh"
*/

function reverseString(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  }
  
  // const result = reverseString("hello world");
  // console.log(result);
  
  /*
  Task 2 : Create a function that takes an array of numbers as input and returns the sum of all
  positive numbers in the array.
  Example Input: [2, -5, 10, -3, 7] Example Output: 19
  */
  function sumOfPositiveNum(numbs) {
    let sum = 0;
    for (let num of numbs) {
      if (num > 0) {
        sum += num;
      }
    }
    return sum;
  }
  
  // const result = sumOfPositiveNum([2, -5, 10, -3, 7]);
  // console.log(result);
  
  /* 
  Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
  Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
  */
  
  // function findFrequentElement(array){
  //   
  // }
  // const result = findFrequentElement([])
  // console.log(result);
  /*
  Task 4: Create a function that takes a sorted array of numbers and a target value as input. The
  function should find two numbers in the array that add up to the target value. Return an array
  containing the indices of the two numbers.
  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2:
  3 + 6 = 9)
  */
  function findTwoNumSum(arr, targetNum) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === targetNum) {
        return [left, right];
      } else if (sum < targetNum) {
        left++;
      } else {
        right--;
      }
    }
    return null;
  }
  
  // const result = findTwoNumSum([1, 3, 6, 8, 11, 15], 19)
  // console.log(result);
  /*
  Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and
  an operator (+, -, *, /) as input and return the result of the operation.
  */
  function calculator(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
  
      default:
        return "Please Enter Valid Operator(+,-,*,/)";
    }
  }
  // const result = calculator(5,2,"-")
  // console.log(result);
  /*
  Task 6: Create a program that generates a random password of a specified length. The
  password should include a mix of uppercase letters, lowercase letters, numbers, and special
  characters.
  */
  function generatePassword(length) {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
  // const result = generatePassword(7);
  // console.log(result)
  /*
  Task 7: Implement a function that converts a Roman numeral to an integer. The function should
  take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer
  value.
  */
  function romanNumToInteger(romanNum) {
    const romanNumValue = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let result = 0;
    let previousValue =0;
  
    for(let i = romanNum.length-1; i>=0;i--){
      const currentValue = romanNumValue[romanNum[i]];
      if (currentValue <previousValue) {
        result -= currentValue
      } else {
        result += currentValue
      }
      previousValue = currentValue;
    }
    
    return result;
  }
  // const result = romanNumToInteger("XIX");
  // console.log(result);
  /*
  Task 8: Implement a JavaScript function to find the second smallest element in an array of
  numbers. The function should return the second smallest number.
  */
  function findSecondSmallestElement(arr) {
    if (arr.length < 2) {
      return "Your array is too small";
    }
  
    const sortedArray = arr.slice().sort((a, b) => a - b);
    return sortedArray[1];
  }
  
  // const result = findSecondSmallestElement([5, 10, 8,]);
  // console.log(result);
  