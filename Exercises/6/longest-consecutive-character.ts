export function longestRepetition(text: string): [string, number] {
  let L: number = 0;
  let currentLetterCount: number = 0;
  let winningLetter: string = '';
  let max = 0;
  for (let i = 0; i < text.length; i++) {
    currentLetterCount++;
    const currentLetter = text[i];
    if (currentLetter != text[i - 1]) {
      currentLetterCount = 1;
    }
    if (currentLetterCount > max) {
      max = currentLetterCount;
      winningLetter = currentLetter;
      L = currentLetterCount;
    }
  }
  return [winningLetter, L];
}
