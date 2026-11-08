let a = 12;
let b = 25;

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

if (gcd(a, b) === 1) {
    console.log("Числа взаимно простые");
} else {
    console.log("Числа не являются взаимно простыми");
}