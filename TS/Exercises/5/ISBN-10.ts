//link to exercise: https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/typescript
export function validISBN10(isbn: string): boolean {
  let multiplicationResult = 0;
  let finalBoolean: boolean;
  const lastLetter = isbn.at(-1);
  const length = isbn.length;
  if (length != 10) {
    return false;
  }
  for (let i = 1; i < length; i++) {
    const letter = isbn[i - 1];
    if (isNaN(Number(letter))) {
      finalBoolean = false;
    }
    multiplicationResult += Number(letter) * i;
  }
  if (lastLetter === 'X') {
    multiplicationResult += 10 * length;
  } else {
    multiplicationResult += Number(lastLetter) * length;
  }

  multiplicationResult % 11 === 0 ? (finalBoolean = true) : (finalBoolean = false);

  return finalBoolean;
}

console.log(validISBN10('1293')); //true
