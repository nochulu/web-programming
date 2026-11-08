let n = 17;
let isPrime = true;

if (n < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(n + " — простое число");
} else {
    console.log(n + " — составное число");
}