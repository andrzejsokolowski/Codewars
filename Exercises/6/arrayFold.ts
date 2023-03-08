import { UnitTests } from '../../CustomAssertLibrary/assertions';
export function foldArray(array: number[], runs: number): number[] {
  for (let index = 0; index < runs; index++) {
    doStuff(array);
  }
  return array;
}
function doStuff(array: number[]) {
  const len = array.length;
  console.log(Math.floor(len / 2) + '  is  Math.floor(len / 2)');
  array.forEach((e, n) => {
    console.log('now N = ' + n);
    console.log('now array[n] = ' + array[n]);

    console.log('--');
    if (n < Math.floor(len / 2)) {
      console.log('modifying...');
      array[n] = array[n] + array[len - n - 1];
    }
    if (n >= Math.floor(len / 2)) {
      console.log('popping...');
      array.pop();
    }

    console.log('modified: ' + array + ' is our array');
    console.log('---------------------');
  });
}
console.log(UnitTests.strictEqual(foldArray([1, 2, 3, 4, 5], 2), [9, 6]));
