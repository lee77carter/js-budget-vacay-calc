// Global variables //
var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");
//console.log(tripInfoButton, dailyBudget);

var tripInfo = function () {
  var totalBudget = Number(prompt("What is your total budget for this trip? "));
  var accommodation = Number(prompt("What are your accommodation costs? "));
  var transportation = Number(prompt("What are your transportation costs? "));
  var numDays = Number(prompt("How many days does your trip last? "));

  calculateDailyBudget(totalBudget, accommodation, transportation, numDays);
};

var calculateDailyBudget = function (totalBudget, accommodation, transportation, numDays) {
  var daily = ((totalBudget - accommodation - transportation) / numDays).toFixed(2);

  dailyBudget.innerText = `You can spend $${daily} a day on food and fun!`;
};

tripInfoButton.addEventListener("click", tripInfo);
