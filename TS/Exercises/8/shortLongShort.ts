export function shortLongShort(a: string, b: string) {
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
}

console.log(shortLongShort('45', '1'));
