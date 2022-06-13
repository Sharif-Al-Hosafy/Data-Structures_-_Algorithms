/////////////// sum of n natural numbers //////////////
function sum(n) {
  if (n == 0) return 0
  else return n + sum(n - 1)
}
console.log(`Sum of n natural numbers: ${sum(5)}`)
//////////////////////////////////////////////////////

/////////////// Power optimized  //////////////
function pow(x, n) {
  /// 2^8 === (2*2)^4
  if (n == 0) return 1
  if (n % 2 == 0) return pow(x * x, n / 2)
  else return x * pow(x * x, (n - 1) / 2)
}
console.log(`Optimized Power: ${pow(2, 9)}`)
//////////////////////////////////////////////////////
