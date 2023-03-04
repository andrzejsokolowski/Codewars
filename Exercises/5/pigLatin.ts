export const pigIt = (input: string): string => {
  const splitByWordArray = input.split(' ');
  let pigArray: string[] = [];
  for (let j = 0; j < splitByWordArray.length; j++) {
    const element = splitByWordArray[j]; //words in array
    for (let i = 0; i < element.length; i++) {
      const element2 = element[i]; //letters in words
    }
  }
  return 'try';
};

console.log(pigIt('Pig latin is cool !')); //'igPay atinlay siay oolcay
console.log(pigIt('This is my string')); //hisTay siay ymay tringsay
