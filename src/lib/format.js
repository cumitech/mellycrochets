import moment from "moment";

function formatNumber(num) {
  return new Intl.NumberFormat("en-GB").format(num);
}

function firstMinuteOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
}

function lastMinuteOfDay(date) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    23,
    59,
    59
  );
}

function formatDate(date) {
  return moment(date).format("DD/MM/YYYY");
}

function formatIsoDate(date) {
  return new Date(date).toISOString();
}

function formatShortDate(date) {
  return moment(date).format("DD/MM");
}

function formatShortDay(date) {
  return moment(date).format("DD");
}

function formatShortMonth(date) {
  return moment(date).format("DD");
}

function formatFullYear(date) {
  return moment(date).format("YYYY");
}

function formatFullMonth(date) {
  return moment(date).format("MMMM");
}

function sevenChar(str) {
  return str.padStart(7, "0");
}

function sixChar(str) {
  return str.padStart(6, "0");
}

function fiveChar(str) {
  return str.padStart(5, "0");
}

function fourChar(str) {
  return str.padStart(4, "0");
}

function threeChar(str) {
  return str.padStart(3, "0");
}

function twoChar(str) {
  return str.padStart(2, "0");
}

function toGender(str) {
  return str === "01" ? "Male" : "Female";
}

function getInitials(name = "") {
  if (!name.trim()) return "";

  const parts = name.trim().split(" ");

  // If it's a full name like "John Doe"
  if (parts.length > 1) {
    return parts
      .map((word) => word[0]?.toUpperCase())
      .join("")
      .slice(0, 2);
  }

  // If it's a username like "johndoe"
  return name.slice(0, 2).toUpperCase();
}

export const format = {
  number: (num) => formatNumber(num),
  date: (date) => formatDate(date),
  isoDate: (date) => formatIsoDate(date),
  shortDate: (date) => formatShortDate(date),
  shortDay: (date) => formatShortDay(date),
  shortMonth: (date) => formatShortMonth(date),
  fullMonth: (date) => formatFullMonth(date),
  fullYear: (date) => formatFullYear(date),
  sevenChar,
  sixChar,
  fiveChar,
  fourChar,
  threeChar,
  twoChar,
  toGender: (str) => toGender(str),
  firstMinuteOfDay: (date) => firstMinuteOfDay(date),
  lastMinuteOfDay: (date) => lastMinuteOfDay(date),
  initials: (name) => getInitials(name),
};
