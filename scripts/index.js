// JavaScript to display current day of the week and UTC time
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
const currentUTCTime = currentDate.toUTCString();

const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

currentDayElement.textContent = `Current Day: ${currentDayOfWeek}`;
currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime}`;