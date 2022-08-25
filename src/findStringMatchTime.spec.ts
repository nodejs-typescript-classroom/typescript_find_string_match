import { findStringMatchTime } from "./findStringMatchTime";

describe('testCases', () => {
  it('inputString: "balloonballoonz", matchString: "balloon"', () => {
    expect(findStringMatchTime("balloonballoonz", "balloon")).toEqual(2);
  });
  it('inputString: "olbabanlolnlobllonatoo", matchString: "balloon"', () => {
    expect(findStringMatchTime("olbabanlolnlobllonatoo", "balloon")).toEqual(3);
  });
});