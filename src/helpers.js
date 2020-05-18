import moment from "moment";

export function europeanDateFormat(date) {
  var dateString = date;
  var dateObj = new Date(dateString);
  var momentObj = moment(dateObj);
  var momentString = momentObj.format("DD MMMM YYYY");
  return momentString;
}
