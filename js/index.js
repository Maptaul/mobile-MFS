const calculationButton = document.getElementById("calculate");
calculationButton.addEventListener("click", function () {
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  const totalExpense = software + courses + internet;
  const Balance = income - totalExpense;

  const totalExpenseElement = document.getElementById("total-expenses");
  totalExpenseElement.innerText = totalExpense;

  const totalBalance = document.getElementById("balance");
  totalBalance.innerText = Balance;
});
