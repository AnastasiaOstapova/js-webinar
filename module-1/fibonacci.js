/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFibonacci;
    /*
     * Your task is to calculate the nth value of the
     * Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * Store the value in the nThFibonacci variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...

    if (n <= 0)
        return 0;
    if (n === 1)
        return 1;

    let fibo = [];
    fibo.push(0)
    fibo.push(1);

    for (let i = 2; i < n + 1; i++) {
        // fibo[i] = fibo[i - 2] + fibo[i - 1];

        fibo[i] = fibonacci(i - 2) + fibonacci(i - 1);
    }
    
    nThFibonacci = fibo[fibo.length - 1];

    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}
module.exports = fibonacci;