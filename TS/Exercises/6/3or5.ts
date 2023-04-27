export class Challenge {
  static solution(number: number) {
    if (number < 0) {
      return 0;
    }
    let finalArray: number[] = [];

    for (let index = 0; index < number; index++) {
      if (index % 3 == 0) {
        finalArray.push(index);
      }
      if (index % 5 == 0) {
        finalArray.push(index);
      }
    }
    let uniqueArray = [...new Set(finalArray)];
    let total = 0;
    for (let i = 0; i < uniqueArray.length; i++) {
      const element = uniqueArray[i];
      total = total + element;
    }
    return total;
  }
}
