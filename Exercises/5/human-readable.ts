export function humanReadable(seconds: number): string {
  let hours = '00';
  let minutes = '00';
  let seconds2 = '00';

  if (seconds >= 3600) {
    hours = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, '0');
    seconds = seconds % 3600;
  }

  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    seconds = seconds % 60;
  }
  seconds2 = seconds.toString().padStart(2, '0');
  let finalString = `${hours}:${minutes}:${seconds2}`;
  return finalString;
}
