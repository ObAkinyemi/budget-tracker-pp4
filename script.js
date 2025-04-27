// Correctly initialize empty storages
let expense_storage = [];
let investment_storage = [];
let budget = document.getElementById("BudgetInput");
let total_expenses = 0;

// Don't call expense_tot or invest_tot immediately!
// They will be called later, after user adds data.

// ✅ Correct: only attach event listeners after page loads or after defining functions

const expenseButton = document.getElementById("add_exp_button");
expenseButton.addEventListener("click", handleAddExpense); // << corrected
const investmentButton = document.getElementById("add_inv_button");
investmentButton.addEventListener("click", handleAddInvestment); // << added

const budgetButton = document.getElementById("budget_button");
budgetButton.addEventListener("click", handleBudget); // << added

// ================= Functions ====================

function handleBudget() {
    console.log("Budget input value:", budget.value);

    const net = net_Budget(expense_storage, investment_storage);

    console.log("Net budget:", net);

    document.getElementById("budget-disp").innerText = 
      `Current Budget: ${budget.value}\nNet Budget after expenses/investments: ${net}`;
}

function net_Budget(expenses, investments) {
    const sumExpenses = expenses.reduce((total, expense) => total + Number(expense.worth), 0);
    console.log("Total expenses:", sumExpenses);

    const sumInvestments = investments.reduce((total, investment) => total + Number(investment.worth), 0);
    console.log("Total investments:", sumInvestments);

    return budget.value + sumInvestments - sumExpenses;
}

function invest_tot(arr, key) {
    return arr.map(obj => obj[key]);
}

function expense_tot(arr, key) {
    return arr.map(obj => obj[key]);
}

function handleAddExpense() {
    let i_name = document.getElementById("expense_name");
    let i_worth = document.getElementById("expense_worth");
    let i_cat = document.getElementById("expense_type");

    let expense = {
        name: i_name.value,
        worth: i_worth.value,
        cat: i_cat.value
    };

    expense_storage.push(expense);
    console.log("Expenses:", expense_storage);

    // Update the budget display after adding expense
    handleBudget();

    return expense_storage;
}

function handleAddInvestment() {
    let i_name_inv = document.getElementById("investment_name");
    let i_worth_inv = document.getElementById("investment_worth");
    let i_cat_inv = document.getElementById("investment_type");

    let investment = {
        name: i_name_inv.value,
        worth: i_worth_inv.value,
        cat: i_cat_inv.value
    };

    investment_storage.push(investment);
    console.log("Investments:", investment_storage);

    // Update the budget display after adding investment
    handleBudget();

    return investment_storage;
}
