const calculationButton = document.getElementById("calculate");
calculationButton.addEventListener("click", function () {
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  const totalExpense = software + courses + internet;
  const balance = income - totalExpense;

  const totalExpenseElement = document.getElementById("total-expenses");
  totalExpenseElement.innerText = totalExpense.toFixed(2);

  const totalBalance = document.getElementById("balance");
  totalBalance.innerText = balance.toFixed(2);

  const result = document.getElementById("results");
  result.classList.remove("hidden");
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

// const calculateSavingButton = document.getElementById("calculate-savings");
// calculateSavingButton.addEventListener("click", function () {
//   const income = parseFloat(document.getElementById("income").value);
//   const software = parseFloat(document.getElementById("software").value);
//   const courses = parseFloat(document.getElementById("courses").value);
//   const internet = parseFloat(document.getElementById("internet").value);
//   const savingParentage = parseFloat(document.getElementById("savings").value);

//   const savingAmount = (savingParentage * balance) / 100;

//   const remainingBalance = balance - savingAmount;

//   const savingElement = document.getElementById("savings-amount");
//   savingElement.innerText = savingAmount.toFixed(2);

//   const remainingElement = document.getElementById("remaining-balance");
//   remainingElement.innerText = remainingBalance.toFixed(2);
// });

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
});
