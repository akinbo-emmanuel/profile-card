// JavaScript to display current day of the week and UTC time in milliseconds
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
const currentUTCTimeMillis = currentDate.getTime(); // Get time in milliseconds

const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

currentDayElement.textContent = `Current Day: ${currentDayOfWeek}`;
currentUTCTimeElement.textContent = `Current UTC Time (Milliseconds): ${currentUTCTimeMillis}`;