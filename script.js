const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g; // globally match any single +,- or space character
  return str.replace(regex, '');
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i; // match any e between any digit
  return str.match(regex);
}

function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
  const HTMLString = `${document.createElement(label)}`;
}
