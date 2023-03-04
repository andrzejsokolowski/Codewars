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
    console.log(`our current loop number is ${i}, and our min max values are: ${min} min and ${max} max`);
  }
  returned = returned + (max - min);
  return returned;
}
