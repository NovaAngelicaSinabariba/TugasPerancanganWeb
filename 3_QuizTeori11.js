function removeDuplicates(array) {
  if (array.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[j] !== array[i]) {
      i++;
      array[i] = array[j];
    }
  }

  return i + 1;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // 4 
console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9])); // 6 
console.log(removeDuplicates([2, 2, 2, 11]));         // 2 
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])); // 4 
console.log(removeDuplicates([1, 2, 3, 11, 11]));     // 4

