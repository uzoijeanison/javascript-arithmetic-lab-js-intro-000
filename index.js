function add(a,b) {
  return a + b
}
function subtract(a,b) {
  return a - b
}
function multiply(a,b) {
  return a * b
}
function divide(a,b) {
  return a / b
}
function increment(n) {
  return n+=1
}
function decrement(n) {
  return n-=1
}
function makeInt(n,radix) {
  if (radix === 10) {
    return parseInt('n',10)
  }
  return parseInt(n,radix)
}
function preserveDecimal(n) {
  return parseFloat(n)
}
