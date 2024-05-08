function canCross(stones) {
  const map = new Map();
  for (const stone of stones) map.set(stone, new Set());
  map.get(0).add(0);
  for (let i = 0; i < stones.length; i++) {
    for (const step of map.get(stones[i])) {
      for (let k = step - 1; k <= step + 1; k++) {
        if (k > 0 && map.has(stones[i] + k)) map.get(stones[i] + k).add(k);
      }
    }
  }
  return map.get(stones[stones.length - 1]).size > 0;
}
