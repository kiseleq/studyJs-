let num = 266219,
    result = 1;
while (num > 0) {
    result = result * (num % 10);
    num = num / 10;
    num = Math.trunc(num);
}
console.log(result);

result = result ** 3;
console.log (result);

while (result > 0) {

    if ((result < 100) && (result >= 10)) {
        console.log("Вторая цифра: " + (result % 10));
    };

    if (result <= 10){
        console.log("Первая цифра: " + (result % 10))
    } 

    result = Math.trunc(result/10);
}
