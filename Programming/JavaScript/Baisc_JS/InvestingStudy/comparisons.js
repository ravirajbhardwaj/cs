// basic Comparisons is simple in Js

console.log(2 > 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// different data type compare krne pa number conversion hota hai // https://github.com/ravirajbhardwaj/JavaScriptSurgeons

console.log("0" == 0); // 0 phela number mai convert hoga
console.log(false != 1) // false phela number mai convert hoga

console.log("0" === 0) // false because data dype not match

console.log(null > 0) // false // null ka number conversion 0 hota hai
console.log(null < 0) // false
console.log(null >= 0) // true

// always false // undefined ke number conversion hota hai NaN
console.log(undefined > 0); // (NaN > 0) -> false
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);