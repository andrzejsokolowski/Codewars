/*Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
Intervals

Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
Overlapping Intervals

Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].*/

import { UnitTests } from '../../CustomAssertLibrary/assertions';
export function sumOfIntervals(intervals: [number, number][]): number {
  let returned = 0;
  intervals.sort((a, b) => a[0] - b[0]); // Sort by the first value in each tuple

  let min = intervals[0][0];
  let max = intervals[0][1];

  for (let i = 0; i < intervals.length; i++) {
    const element = intervals[i];
    if (element[0] > max) {
      returned = returned - (element[0] - max);
      max = element[1];
    } else {
      element[0] < min ? (min = element[0]) : (min = min);
      element[1] > max ? (max = element[1]) : (max = max);
    }
  }
  returned = returned + (max - min);
  return returned;
}
UnitTests.strictEqual(sumOfIntervals([[1, 5]]), 4);
UnitTests.strictEqual(
  sumOfIntervals([
    [1, 5],
    [6, 10],
  ]),
  8
);
UnitTests.strictEqual(
  sumOfIntervals([
    [1, 5],
    [1, 5],
  ]),
  4
);
UnitTests.strictEqual(
  sumOfIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ]),
  7
);
