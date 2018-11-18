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
  if (up) {
    d = d + 1 * 24 * 60 * 60 * 1000;
  }
  return d / 1000;
};
