export const min = (list: number[]): number => {
  let currentMin = list[0];
  list.forEach((element) => {
    element < currentMin ? (currentMin = element) : element;
  });

  return currentMin;
};

export const max = (list: number[]): number => {
  let currentMax = list[0];
  list.forEach((element) => {
    element > currentMax ? (currentMax = element) : element;
  });

  return currentMax;
};
