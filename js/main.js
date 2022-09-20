function getRandomNumber(start, finish) {
  if (start < 0) {
    return 'Данная функция не может принимать отрицательное число в качестве параметра';
  }
  if (finish < 0) {
    return 'Данная функция не может принимать отрицательное число в качестве параметра';
  }
  if (start === finish) {
    return start;
  }
  if (start < finish)
  {
    return Math.random(finish, start);
  }
  return Math.random(start, finish);
}

function checkStringLength(str, maxLength) {
  if (str.length > maxLength) {
    return false;
  }
  return true;
}
