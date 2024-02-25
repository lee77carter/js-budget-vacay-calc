// Global variables //
// Selecting elements from the DOM
var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

// Uncomment the line below for debugging purposes
//console.log(tripInfoButton, dailyBudget);

// Function to gather trip information
var tripInfo = function () {
  // Gathering trip details through user prompts
  var totalBudget = Number(prompt("What is your total budget for this trip? "));
  var accommodation = Number(prompt("What are your accommodation costs? "));
  var transportation = Number(prompt("What are your transportation costs? "));
  var numDays = Number(prompt("How many days does your trip last? "));

  // Invoking the 'calculateDailyBudget' function with the gathered information
  calculateDailyBudget(totalBudget, accommodation, transportation, numDays);
};

// Function to calculate and display budget
var calculateDailyBudget = function (totalBudget, accommodation, transportation, numDays) {
  // Calculating the daily budget
  var daily = ((totalBudget - accommodation - transportation) / numDays).toFixed(2);

  // Updating the content of the 'dailyBudget' element to display the calculated daily budget
  dailyBudget.innerText = `You can spend $${daily} a day on food and fun!`;
};

// Event listener for the 'tripInfoButton' to trigger the 'tripInfo' function on button click
tripInfoButton.addEventListener("click", tripInfo);
