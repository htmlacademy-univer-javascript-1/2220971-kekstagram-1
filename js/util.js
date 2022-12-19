function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

let counterIdComm = 0;
function getIdForComments() {
  counterIdComm++;
  return counterIdComm;
}

let counterIdObj = 0;
function getIdForObj() {
  counterIdObj++;
  return counterIdObj;
}

let counterUrl = 0;
function getUrl() {
  counterUrl++;
  return counterUrl;
}

function getValue(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
}

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength('str', 3);

const isEscape = (evt) => evt.key === 'Escape';

export {getRandomPositiveInteger, getIdForComments, getIdForObj, getUrl, getValue, isEscape};
