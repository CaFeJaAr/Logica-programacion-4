function obtenerNumero() {
    let n;
    do {
        n = prompt("Ingrese un número:");
        if (isNaN(n)) {
            alert("Ingresa un número válido.");
        }
    } while (isNaN(n));
    return parseInt(n);
}

function fibonacciConRecursion(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    const serie = fibonacciConRecursion(n - 1);
    serie.push(serie[serie.length - 1] + serie[serie.length - 2]);
    return serie;
}

const numeroUsuario = obtenerNumero();
const serieFibonacci = fibonacciConRecursion(numeroUsuario);

console.log("Serie de Fibonacci:");
console.log(serieFibonacci);
