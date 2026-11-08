let n = 10;
let count = 0;
let number = 2;

while (count < n) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(number);
        count++;
    }

    number++;
}