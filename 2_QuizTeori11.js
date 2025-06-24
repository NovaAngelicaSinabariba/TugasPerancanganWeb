function joinArrayRemoveDuplicate(arrayA, arrayB) {
  const combined = arrayA.concat(arrayB);
  const result = [];

  for (let item of combined) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

// Test cases
console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));
console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));
