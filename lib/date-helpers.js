export const todayPlusDays = (d = 0) => {
  var start = Date.now();
  var end = start + d * 60 * 60 * 24 * 1000;
  var date = new Date(end);
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return yyyy + "-" + mm + "-" + dd;
};

export const timeStampToShortDate = ts => {
  //Convert JS timestamp to Unix ts then to JS Date object
  var date = new Date(ts * 1000);
  //Separate set varibles for day, month, year
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  //Include leading zeroes for single-digit months and days
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return yyyy + "-" + mm + "-" + dd;
};

//Convert a date in the format yyyy-mm-dd to a Unixtime stamp
//The 'up' variable determines if the date is rounded up include the full day
//instead of cutting off at midnight
export const dateToUnixTs = (d, up = true) => {
  d = Date.parse(d);
  if (isNaN(d)) return null;
  if (up) {
    d = d + 1 * 24 * 60 * 60 * 1000;
  }
  return d / 1000;
};

export const displayTimeDateRange = (
  startTS,
  endTS,
  tz = "America/New_York"
) => {
  var startDate = new Date(startTS * 1000);
  var endDate = new Date(endTS * 1000);
  var display;
  if (
    startDate.getDate() === endDate.getDate() &&
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear()
  ) {
    display = startDate.toLocaleDateString("en", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: tz
    });
  } else if (
    startDate.getDate() !== endDate.getDate() &&
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear()
  ) {
    //same month and year, different dates
    display = `${startDate.toLocaleDateString("en", {
      month: "long",
      day: "numeric",
      timeZone: tz
    })}-${endDate.toLocaleDateString("en", {
      day: "numeric",
      timeZone: tz
    })}, ${endDate.toLocaleDateString("en", {
      year: "numeric",
      timeZone: tz
    })}`;
  } else if (
    startDate.getMonth() != endDate.getMonth() &&
    startDate.getFullYear() == endDate.getFullYear()
  ) {
    //same year, different months
    display = `${startDate.toLocaleDateString("en", {
      month: "long",
      day: "numeric",
      timeZone: tz
    })}-${endDate.toLocaleDateString("en", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: tz
    })}`;
  } else if (
    startDate.getMonth() != endDate.getMonth() &&
    startDate.getFullYear() != endDate.getFullYear()
  ) {
    //everything different
    display = `${startDate.toLocaleDateString("en", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: tz
    })}-${endDate.toLocaleDateString("en", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: tz
    })}`;
  } else {
    console.log("Check the date helper. No expected matches");
  }
  return display;
};
