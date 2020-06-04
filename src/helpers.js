import moment from "moment";

export function europeanDateFormat(date) {
  var dateString = date;
  var dateObj = new Date(dateString);
  var momentObj = moment(dateObj);
  var momentString = momentObj.format("DD MMMM YYYY");
  return momentString;
}


export function formatBudget(item) {
  return "$ " + item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

export function convertToClassName(item) {
  return item.toLowerCase().replace(/ /g, '-');
}