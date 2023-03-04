export function josephusSurvivor(n: number, k: number): number[] | undefined {
  let people: number[] = [];
  function populatePeople() {
    for (let i = 1; i < n + 1; i++) {
      people.push(i);
    }
  }
  populatePeople();

  //setup done, now calculation
  let lst: number[] = [0];
  let i: number = (k - 1) % people.length;
  while (people.length) {
    lst.push(people[i]);
    people.splice(i, 1);
    i = (i + k - 1) % people.length;
  }
  return lst;
}

console.log(josephusSurvivor(7, 3)); //should be 4
