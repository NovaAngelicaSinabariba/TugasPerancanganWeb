function compareString(a, b) {
  let result = "";
  for (let i = 0; i < a.length && i < b.length; i++) {
    if (a[i] === b[i]) {
      result += a[i];
    } else {
      break;
    }
  }
  return result;
}

// Contoh Test Case
console.log(compareString("AKA", "AKASHI"));       // AKA
console.log(compareString("KANGAROO", "KANG"));     // KANG
console.log(compareString("KI", "KIJANG"));         // KI
console.log(compareString("KUPU-KUPU", "KUPU"));    // KUPU
console.log(compareString("ILALANG", "ILA"));       // ILA
