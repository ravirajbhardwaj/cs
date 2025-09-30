// How to solve pattern problem
// Ans -> you need two thing one patient and (pen & paper)

// for (let i = 0; i < 5; i++) {
//   console.log(`i : ${i}`);
// }

// This is very simple -> make table

/*
i        output

0        0 : 1
1        i : 1
2        i : 2
3        i : 3
4        i : 4
*/

// Nested loops are loops inside another loop.
// They are often used for grid-based problems, star patterns, or matrix operations.

// Outer loop controls rows (Left से Right ⬅➡)
// Inner loop controls columns (horizontal movement ⬆⬇)

// for (let i = 1; i <= 5; i++) {
//   // outer loop
//   let row = "";
//   for (let j = 1; j <= 5; j++) {
//     // inner loop
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 1; i < 5; i++) {
//   let row = ""
//   for (let j = 1; j < 5; j++) {
//     row += `(${i},${j}) ,`
//   }
//   console.log(row);
// }

// let n = 4

// for (i = 1; i <= n; i++) {
//   let row = ""
//   for (let j = 1; j <= n; j++) {
//     if (i == 1 || i == n || j == 1 || j == n) {
//       row += "*"
//     } else {
//       row += " "
//     }
//   }
//   console.log(row)
// }

// for (let i = 1; i <= 4; i++){
//   row = ""
//   for (let j = 1; j <= 4; j++) {
//     row += i
//   }
//   console.log(row)
// }

// 5 * 8

// for (let x = 1; x <= 5; x++) {
//   let row = ""
//   for (let y = 1; y <= 8; y++) {
//     if (x == 1 || x == 5 || y == 1 || y == 8) {
//       row += "*"
//     } else {
//       row += " "
//     }
//   }
//   console.log(row)
// }

// for (let i = 4; i >= 1; i--) {
//   let row = ""
//   for (let j = 1; j <= i; j++) {
//     row += i
//   }
//   console.log(row)
// }

// shinyDiamondRug(4)

// function shinyDiamondRug(n) {
//   for (let row = 1; row <= n; row++) {
//     let pattern = "";
//     for ( let col = 1; col <= (2 * n) - 1; col++) {
//       pattern = "*"
//     }
//     return pattern
//   }
// }

// let n = 4

// for (let row = 1; row <= n; row++) {
//   let pattern = "";
//   for (i = 1; i <= n - row; i++) {
//     pattern += " "
//   }

//   for ( let col = 1; col <= (2 * row) - 1; col++) {
//     pattern += "*"
//   }
//   // for ( let col = n; col <= (2 * row) - 1; col++) {
//   //   pattern += "*"
//   // }
//   console.log(pattern)
// }

// let n = 4

// for( row = 1; row <= (n + n) - 1; row++) {
//   let pattern = ""
//   // upper
//   for(col = 1; col <= (2 * row - 1); col++) {
//     pattern += "*"
//   }
//   console.log(pattern)

//   for (col = (n + n) - 1; col >= 1; col--) {
//     pattern += "*"
//   }
//   console.log(pattern)
// }

let n = 4;

// for (let row = 1; row <= n; row++) {
//   let upperPatter = ""
//   for (let i = 1; i <= n - row; i++) {
//     upperPatter += " "
//   }
//   for (j = 1; j <= (2 * row) - 1; j++) {
//     upperPatter += "*"
//   }
//   console.log(upperPatter)
// }

// console.log(shinyDiamondRug(4))

// function shinyDiamondRug(n) {
//   let finalPatter = ""
//   // upper part
//   for (let row = 1; row <= n; row++) {
//     let upperPatter = ""
//     for (let i = 1; i <= n - row; i++) {
//       upperPatter += " "
//     }
//     for (j = 1; j <= (2 * row) - 1; j++) {
//       upperPatter += "*"
//     }
//     finalPatter += upperPatter.trimEnd() + '\n';
//   }

//   // lower part
//   for (row = n - 1; row >= 1; row--) {
//     let lowerPatter = ""
//     for(let i = 1; i <= n - row; i++){
//       lowerPatter += " "
//     }
//     for (let j = 1; j <=  (2 * row) - 1; j++) {
//       lowerPatter += "*"
//     }
//     finalPatter += lowerPatter.trimEnd() + '\n';
//   }
//   return finalPatter.trimEnd();
// }

function invertedMountain(n) {
  let pattern = "";
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= n + 1 - row; col++) {
      line += "*";
    }
    pattern += line + "\n";
  }
  return pattern.trimEnd();
}

let result = invertedMountain(4);
console.log(result);
console.log(typeof result);
