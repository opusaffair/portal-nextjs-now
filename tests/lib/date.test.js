/* eslint-env jest */

import {
  timeStampToShortDate,
  dateToUnixTs,
  todayPlusDays
} from "../../lib/date-helpers";

describe("With Date Testing", () => {
  it("Round down timestamp", () => {
    const ts = dateToUnixTs("2018-11-30");
    expect(ts).toBe(1543554000);
  });
  it("Round up timestamp", () => {
    const ts = dateToUnixTs("2018-11-30", true);
    expect(ts).toBe(1543640399);
  });
  it("Invalid date returns null", () => {
    const ts = dateToUnixTs("2018-11-42", true);
    expect(ts).toBe(null);
  });
  it("Convert earliest timestamp to short date in Boston", () => {
    const date = timeStampToShortDate(1543554000);
    expect(date).toBe("2018-11-30");
  });
  it("Convert latest timestamp to short date in Boston", () => {
    const date = timeStampToShortDate(1543640399);
    expect(date).toBe("2018-11-30");
  });
});
