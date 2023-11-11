const linearSearchEvaluation = document.getElementsByClassName("linear-btn");
const binarySearchEvaluation = document.getElementsByClassName("binary-btn");
console.log(linearSearchEvaluation[0])
console.log(binarySearchEvaluation[0])
// linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return the index if the target is found
      }
    }
    return -1; // Return -1 if the target is not found
}
// Example usage:
function linearSearchResult(){
  const inputElement = document.getElementById('numbers');
  const targetElement = document.getElementById('target');
  const resultElement = document.getElementById('result');
  const numbersInput = inputElement.value.split(',').map(Number); // Get user input and split into an array
  //console.log(numbersInput); 
  //console.log(targetElement.value); 
  const ans = linearSearch(numbersInput, parseInt(targetElement.value, 10));
  //console.log(ans); // Output: 2 (index of 3 in the array)
  resultElement.innerText = 'Linear Search Result: ' + ans;
}

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return mid; // Return the index if the target is found
      } else if (arr[mid] < target) {
        low = mid + 1; // Discard the left half
      } else {
        high = mid - 1; // Discard the right half
      }
    }
  
  return -1; // Return -1 if the target is not found
}
  
// Example usage:
function binarySearchResult(){
  const inputElement = document.getElementById('numbers');
  const targetElement = document.getElementById('target');
  const resultElement = document.getElementById('result');
  const numbersInput = inputElement.value.split(',').map(Number); // Get user input and split into an array
  const ans = binarySearch(numbersInput, parseInt(targetElement.value, 10));
  //console.log(ans); // Output: 2 (index of 3 in the array)
  resultElement.innerText = 'Binary Search Result: ' + ans;
}
    