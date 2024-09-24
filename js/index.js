const calculationButton = document.getElementById("calculate");
calculationButton.addEventListener("click", function () {
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  const totalExpense = software + courses + internet;
  const Balance = income - totalExpense;

  const totalExpenseElement = document.getElementById("total-expenses");
  totalExpenseElement.innerText = totalExpense.toFixed(2);

  const totalBalance = document.getElementById("balance");
  totalBalance.innerText = Balance.toFixed(2);

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
