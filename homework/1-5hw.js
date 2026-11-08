let n = 36;

console.log("Делители числа " + n + ":");

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
    }
}