///////////////////////// Tail Recursion //////////////////////

function tailRecursion(n) {
  if (n > 0) {
    console.log(n);
    tailRecursion(n - 1);
  }
}

console.log(`Tail Recursion Output`);
tailRecursion(5);

////////////////////////////////////////////////////////////////

///////////////////////// Head Recursion //////////////////////

function headRecursion(n) {
  if (n > 0) {
    headRecursion(n - 1);
    console.log(n);
  }
}

console.log(`Head Recursion Output`);
headRecursion(5);

////////////////////////////////////////////////////////////////

///////////////////////// Tree Recursion //////////////////////

function treeRecursion(n) {
  /// O(2^n)
  if (n > 0) {
    console.log(n);
    treeRecursion(n - 1);
    treeRecursion(n - 1);
  }
}

console.log(`Tree Recursion Output`);
treeRecursion(3);

////////////////////////////////////////////////////////////////

///////////////////////// Indirect Recursion //////////////////////

function indirectRecursionA(n) {
  if (n > 0) {
    console.log(n);
    indirectRecursionB(n - 1);
  }
}

function indirectRecursionB(n) {
  /// O(2^n)
  if (n > 0) {
    console.log(n);
    indirectRecursionA(parseInt(n / 2));
  }
}

console.log(`Indirect Recursion Output`);
indirectRecursionA(20);

///////////////////////// Head Recursion //////////////////////

function nestedRecursion(n) {
  if (n > 100) return n - 10;
  return nestedRecursion(nestedRecursion(n + 11));
}

console.log(`Nested Recursion Output ---> ${nestedRecursion(95)}`);
