export const findStringMatchTime = (input: string, match: string): number => {
  let count: number = 0;
  const matchFreq: Map<string, number> = new Map<string, number>();
  const inputFreq: Map<string, number> = new Map<string, number>();
  const inputLen: number = input.length;
  const matchLen: number = match.length;
  // collect character frequency in match string
  for (let pos = 0; pos < matchLen; pos++ ) {
    let ch: string = match[pos];
    let current: number = 0;
    if (matchFreq.has(ch)) {
      current = matchFreq.get(ch);
    }
    matchFreq.set(ch, current+1);
  }
  // collect character frequency of input string that exists in match string
  for (let pos = 0; pos < inputLen; pos++ ) {
    let ch: string = input[pos];
    if (matchFreq.has(ch)) {
      let current: number = 0;
      if (inputFreq.has(ch)) {
        current = inputFreq.get(ch);
      }
      inputFreq.set(ch, current+1);
    }
  }
  // find all match number for use input string character to form match string
  let stillMatch: boolean = true;
  while (stillMatch) {
    for (const [key, value] of matchFreq) {
      if (inputFreq.get(key) >= value) {
        inputFreq.set(key, inputFreq.get(key) - value);
      } else {
        stillMatch = false;
      }
    }
    if (stillMatch) {
      count++;
    }
  }
  return count;
}