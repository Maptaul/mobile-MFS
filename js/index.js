function getInputValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

// function showError
function showError(id) {
  document.getElementById(id).classList.remove("hidden");
}

let count = 0;

const calculationButton = document.getElementById("calculate");
calculationButton.addEventListener("click", function () {
  count += 1;
  // const income = parseFloat(document.getElementById("income").value);
  // const software = parseFloat(document.getElementById("software").value);
  // const courses = parseFloat(document.getElementById("courses").value);
  // const internet = parseFloat(document.getElementById("internet").value);

  // get value from function
  const income = getInputValueById("income");
  const software = getInputValueById("software");
  const courses = getInputValueById("courses");
  const internet = getInputValueById("internet");

  if (income <= 0 || isNaN(income)) {
    // document.getElementById("income-error").classList.remove("hidden");
    showError("income-error");
    return;
  }
  if (software <= 0 || isNaN(software)) {
    // document.getElementById("software-error").classList.remove("hidden");
    showError("software-error");
    return;
  }
  if (courses <= 0 || isNaN(courses)) {
    // document.getElementById("courses-error").classList.remove("hidden");
    showError("courses-error");
    return;
  }
  if (internet <= 0 || isNaN(internet)) {
    // document.getElementById("internet-error").classList.remove("hidden");
    showError("internet-error");
    return;
  }

  const totalExpense = software + courses + internet;
  const balance = income - totalExpense;

  if (totalExpense > income) {
    document.getElementById("logic-error").classList.remove("hidden");
    return;
  }

  const totalExpenseElement = document.getElementById("total-expenses");
  totalExpenseElement.innerText = totalExpense.toFixed(2);

  const totalBalance = document.getElementById("balance");
  totalBalance.innerText = balance.toFixed(2);

  const result = document.getElementById("results");
  result.classList.remove("hidden");

  const historyItem = document.createElement("div");
  historyItem.className =
    "bg-white p-3 rounded-md border-l-2 border-indigo-500";

  historyItem.innerHTML = `
    <P>Transaction No: ${count}</P>
    <p class = 'text-xs text-gray-500'>${new Date().toLocaleDateString()}</p>
    <p class = ' text-xs text-gray-500'>Income : $${income.toFixed(2)}</p>
    <p class = ' text-xs text- gray-500'>Expenses : $${totalExpense.toFixed(
      2
    )}</p>
    <p class = ' text-xs text-gray-500'>Income : $${balance.toFixed(2)}</p>

    `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

const calculateSavingButton = document.getElementById("calculate-savings");
calculateSavingButton.addEventListener("click", function () {
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);
  const savingParentage = parseFloat(document.getElementById("savings").value);

  const totalExpense = software + courses + internet;
  const balance = income - totalExpense;

  const savingAmount = (savingParentage * balance) / 100;

  const remainingBalance = balance - savingAmount;

  const savingElement = document.getElementById("savings-amount");
  savingElement.innerText = savingAmount.toFixed(2);

  const remainingElement = document.getElementById("remaining-balance");
  remainingElement.innerText = remainingBalance.toFixed(2);
});

const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyTab.classList.remove("text-gray-600");
  assistantTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  assistantTab.classList.add("text-gray-600");
  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

assistantTab.addEventListener("click", function () {
  assistantTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
});
assistantTab.addEventListener("click", function () {
  assistantTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  document.getElementById("expense-form").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});

document.getElementById("income").addEventListener("input", function () {
  const inputValue = parseFloat(document.getElementById("income").value);
  if (isNaN(inputValue) || inputValue <= 0) {
    document.getElementById("income-error").classList.remove("hidden");
    return;
  }
});
