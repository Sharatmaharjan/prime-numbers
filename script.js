function isPrime(num) {
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function generatePrimes(limit) {
    const primes = [];
    let num = 2;
    while (primes.length < limit) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return primes;
}

function findThreePrimeSum() {
    const x = parseInt(document.getElementById("inputNumber").value);
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    if (isNaN(x) || x < 2) {
        outputDiv.innerHTML = "<p style='color:red;'>Please enter a valid number greater than 1.</p>";
        return;
    }

    const primes = generatePrimes(1000);
    let found = false;
    let steps = "";

    for (let i = 0; i < primes.length - 1; i++) {
        const p1 = primes[i];
        const p2 = primes[i + 1];
        const remainder = x - p1 - p2;

        steps += `<p>Trying: ${p1}, ${p2}, remainder: ${remainder} ${isPrime(remainder) ? '(Prime ✅)' : '(Not Prime ❌)'}</p>`;

        if (remainder > 0 && isPrime(remainder)) {
            outputDiv.innerHTML = `
                <p><strong>Result Found:</strong> ${p1}, ${p2}, ${remainder}</p>
                <p>Sum = ${p1 + p2 + remainder}</p>
                <hr>
                <h3>Steps:</h3>
                ${steps}
            `;
            found = true;
            break;
        }
    }

    if (!found) {
        outputDiv.innerHTML = `
            <p style="color:red;">No combination found for ${x}.</p>
            <hr>
            <h3>Steps Tried:</h3>
            ${steps}
        `;
    }
}
