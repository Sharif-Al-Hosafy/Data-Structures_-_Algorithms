/////////////// sum of n natural numbers //////////////
function sum(n) {
  if (n == 0) return 0;
  else return n + sum(n - 1);
}
console.log(`Sum of n natural numbers: ${sum(5)}`);
//////////////////////////////////////////////////////

/////////////// Power optimized  //////////////
function pow(x, n) {
  /// 2^8 === (2*2)^4
  if (n == 0) return 1;
  if (n % 2 == 0) return pow(x * x, n / 2);
  else return x * pow(x * x, (n - 1) / 2);
}
console.log(`Optimized Power: ${pow(2, 9)}`);
//////////////////////////////////////////////////////

/////////////// Taylor's Series ////////////// e^x = 1 + x/1! + x^2/2! + x^3/3! + ..... n
var pTaylor = 1; // saving power
var fTaylor = 1; // saving factorial
function taylor(x, n) {
  var result = 1;
  if (n == 0) return 1;
  else {
    result = taylor(x, n - 1);
    pTaylor = pTaylor * x;
    fTaylor = fTaylor * n;
    return result + pTaylor / fTaylor;
  }
}
console.log(`Taylor's Series: ${taylor(1, 10)}`);
//////////////////////////////////////////////////////

/////////////// Taylor's Series Optimized O(n)////////////// e^x = 1 + x/1! + x^2/2! + x^3/3! + ..... n
var sum = 1;
function taylorOpt(x, n) {
  if (n == 0) return sum;
  else {
    sum = 1 + (x / n) * sum;
    return taylorOpt(x, n - 1);
  }
}
console.log(`Taylor's Series Optimized: ${taylorOpt(1, 10)}`);
//////////////////////////////////////////////////////

/////////////// Fibonacci Series  aprox O(2^k)//////////////
function fib(n) {
  if (n <= 1) return n;
  else return fib(n - 1) + fib(n - 2);
}
console.log(`fibonacci Series : ${fib(7)}`);
//////////////////////////////////////////////////////

/////////////// Fibonacci Series Optimized O(n) Memoization //////////////
var f = [];
for (var i = 0; i < 6; i++) f[i] = -1;
function fibOpt(n) {
  if (n <= 1) {
    f[n] = n;
    return n;
  } else {
    if (f[n - 1] == -1) f[n - 1] = fibOpt(n - 1);
    if (f[n - 2] == -1) f[n - 2] = fibOpt(n - 2);
    return f[n - 1] + f[n - 2];
  }
}
console.log(`fibonacci Series Optimized: ${fibOpt(6)}`);
//////////////////////////////////////////////////////
