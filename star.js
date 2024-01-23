var r = require("readline-sync");
var n = r.question("Enter the value of n:");

for (var i = 0; i <= n; i++) {
  var row = "";
  for (var j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row.trim()); // trim() to remove the extra space at the end
}
