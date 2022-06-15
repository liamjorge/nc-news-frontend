const { timeSince, withinLast48Hrs } = require("../../../src/utils/datetime");

beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date("2022-06-15T07:45:00.001Z"));
});

afterAll(() => {
  jest.useRealTimers();
});

describe("timeSince", () => {
  test("returns a string containing number of hours ago", () => {
    const input = "2022-06-15T05:45:00.001Z";
    const expected = "2h ago";
    expect(timeSince(input)).toBe(expected);
  });
  test("returns a string containing number of days ago", () => {
    const input = "2022-06-14T07:45:00.001Z";
    const expected = "1d ago";
    expect(timeSince(input)).toBe(expected);
  });
  test("returns a string containing number of months ago", () => {
    const input = "2022-04-15T07:45:00.001Z";
    const expected = "2mo ago";
    expect(timeSince(input)).toBe(expected);
  });
  test("returns a string containing number of years ago", () => {
    const input = "2021-06-15T07:45:00.001Z";
    const expected = "1yr ago";
    expect(timeSince(input)).toBe(expected);
  });
});

describe("withinLast48Hrs", () => {
  test("returns true for a date within the last 48hrs", () => {
    const input = "2022-06-13T08:00:00.001Z";
    const expected = true;
    expect(withinLast48Hrs(input)).toBe(expected);
  });
  test("returns false for a date more than 48hrs ago", () => {
    const input = "2022-06-13T06:45:00.001Z";
    const expected = false;
    expect(withinLast48Hrs(input)).toBe(expected);
  });
});
