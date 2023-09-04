//link to exercise: https://www.codewars.com/kata/55983863da40caa2c900004e/train/typescript
export function nextBigger(n: number): number {
  const charArray = Array.from(n.toString());
  const length = charArray.length;

  for (let i = length - 1; i > 0; i--) {
    const nLatest = charArray[i];
    const nBefore = charArray[i - 1];

    if (nLatest && nBefore && nLatest > nBefore) {
      const indexBefore = i - 1;
      let smallestIndexAfter = i;

      for (let j = i + 1; j < length; j++) {
        const curr = charArray[j];
        const smallest = charArray[smallestIndexAfter];
        if (curr && smallest && nBefore && curr > nBefore && curr < smallest) {
          smallestIndexAfter = j;
        }
      }

      const swapA = charArray[indexBefore];
      const swapB = charArray[smallestIndexAfter];

      if (swapA && swapB) {
        [charArray[indexBefore], charArray[smallestIndexAfter]] = [swapB, swapA];
      } else {
        return -1;
      }

      const slicedArray = charArray.slice(indexBefore + 1).sort();
      charArray.splice(indexBefore + 1, length, ...slicedArray);

      return Number(charArray.join(''));
    }
  }

  return -1; // If no bigger number could be formed
}

console.log(nextBigger(890)); // should be 908
