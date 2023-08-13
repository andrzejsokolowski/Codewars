console.time('Execution time');
export const makeNegative = (num: number): number => {
  return num < 0 ? num : num * -1;
};
console.timeEnd('Execution time');

console.log(makeNegative(5));
