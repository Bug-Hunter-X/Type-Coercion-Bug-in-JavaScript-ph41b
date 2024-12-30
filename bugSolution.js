function myFunction(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return "Error: Invalid input types";
  }
}

console.log(myFunction(5, 5)); // Output: 10
console.log(myFunction(5, "5")); // Output: Error: Invalid input types