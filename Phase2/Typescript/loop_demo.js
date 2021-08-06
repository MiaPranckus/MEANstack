var num1 = [10, 20, 30, 40, 50];
console.log(num1);
console.log("using in loop");
for (var i in num1) {
    console.log("index is " + i);
}
console.log("using of loop");
for (var _i = 0, num1_1 = num1; _i < num1_1.length; _i++) {
    var n = num1_1[_i];
    console.log("value of n is " + n);
}
var sum = 0;
console.log("using of loop");
for (var _a = 0, num1_2 = num1; _a < num1_2.length; _a++) {
    var n = num1_2[_a];
    console.log("Value is " + n);
    sum = sum + n;
}
console.log("Sum of number is " + sum);
