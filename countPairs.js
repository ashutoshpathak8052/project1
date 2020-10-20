function countPairs( n , ar) {
    let socks = {};
    let pairs = 0;
  for (let element of ar) {
    socks[element] = socks[element] + 1 || 1;
      if (socks[element] % 2 === 0) {
        pairs += 1;
      }
    }
  return pairs;
  }

  const n = 17;
  const ar = [ 10, 10, 10, 10, 20, 30 ,30, 30, 30, 30 ,30, 30, 40, 40, 40, 40, 40 ];
  console.clear();
  console.log(`pairsCounted: ${ countPairs( n,ar)}`);