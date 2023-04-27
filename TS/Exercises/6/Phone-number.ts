export function createPhoneNumber(numbers: number[]): string {
  const numberString = numbers.toString().replace(/,/g, '');

  return `(${numberString.slice(0, 3)}) ${numberString.slice(3, 6)}-${numberString.slice(6, 10)}`;
}
