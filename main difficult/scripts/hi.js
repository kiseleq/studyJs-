'use strict';
const num = 266219,
numArr = num.toString().split(''),
reducer = (prev, next) => prev * next,
result1 = numArr.reduce(reducer),
result2 = result1 ** 3,
firstSecond = result2.toString().slice(0, 2);

console.log(result1);
console.log(result2);
console.log(firstSecond);

