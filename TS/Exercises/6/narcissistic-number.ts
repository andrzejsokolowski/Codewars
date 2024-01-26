//https://www.codewars.com/kata/5287e858c6b5a9678200083c
export function narcissistic(value: number): boolean {
  const stringified = value.toString();
  let total = 0;
  const array = stringified.split('').map((v) => Math.pow(Number(v), stringified.length));
  array.forEach((exponential) => {
    total += exponential;
  });
  return total === value;
}
console.log(narcissistic(153));
console.log(narcissistic(1652));
