function greedyThief(items, maxWeight) {
  let result = [];

  const zeroWeightItems = items.filter((item) => item.weight === 0);

  if (zeroWeightItems.length > 0) {
    result = result.concat(zeroWeightItems);
  }
  items = items.filter((item) => item.weight > 0);
  const itemCount = items.length;

  const dp = Array.from({ length: itemCount + 1 }, () => Array(maxWeight + 1).fill(0));

  for (let i = 1; i <= itemCount; i++) {
    for (let w = 1; w <= maxWeight; w++) {
      if (items[i - 1].weight <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - items[i - 1].weight] + items[i - 1].price);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  let w = maxWeight;

  for (let i = itemCount; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      result.push(items[i - 1]);
      w -= items[i - 1].weight;
    }
  }

  return result;
}

console.log(
  greedyThief(
    [
      { weight: 0, price: 1 },
      { weight: 2, price: 6 },
      { weight: 2, price: 3 },
      { weight: 6, price: 5 },
      { weight: 5, price: 4 },
      { weight: 4, price: 6 },
    ],
    10
  )
);
