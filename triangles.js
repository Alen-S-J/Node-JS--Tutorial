var r = require("readline-sync");
var n = r.question("Enter the height of the equilateral triangle:");

for (var i = 0; i < n; i++) {
  // Add spaces before each row to create an equilateral triangle
  for (var k = 0; k < n - i - 1; k++) {
    process.stdout.write(" ");
  }

  // Print stars for each row
  for (var j = 0; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log(); // Move to the next line after each row
}
