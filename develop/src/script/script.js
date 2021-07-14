const date = document.querySelector('#date');
const year = document.querySelector('#year');

const today = new Date()
  .toLocaleDateString()
  .split('.')
  .reverse()
  .join('.')
  .replace(/\./g, '-');

date.value = today;

const thisYear = today.substr(0, 4);

year.innerHTML = thisYear;
