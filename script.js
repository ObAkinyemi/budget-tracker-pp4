
// console.log(budget);
let expense_storage = [];
let investment_storage = [];
let budget = document.getElementById("BudgetInput");
function doc_get_id (id) {
    return document.getElementById(id);
}
let total_expenses = 0;
// let i_name = document.getElementById("expense_name");
// let worth = document.getElementById("expense_worth");
// let category = document.getElementById("expense_type");
// let expense_button = document.getElementById("add_exp_button");

function handleBudget () {

    console.log(budget.value);
    updateBudget();
    
    // if (budget.click == true) {
    //     console.log(Number(budget.value));
    // }

}
function updateBudget () {
    budget_disp_text = document.getElementById("budget-disp").innerText
    // do {
    budget_disp_text = `Current Budget: ${budget.value}`;

    // } while ();

}

function sum_expense_investment (expense_quant, investment_quant) {
    //
}

function handleAddExpense() {
    let i_name = document.getElementById("expense_name");
    let i_worth = document.getElementById("expense_worth");
    let i_cat = document.getElementById("expense_type");
    let expense = {
        name: i_name.value,
        worth: i_worth.value,
        cat: i_cat.value
    }
    expense_storage.push(expense);
    // console.log("expenses", expense_storage);
    console.log(expense_storage);

    for (let i of expense_storage) {
        for (let exp in i.worth){
            total_expenses += 1;
            console.log (total_expenses);
        }
    }
    console.log(`worth: ${expense_storage[0].worth}`);
    console.log(`total expenses ${total_expenses}`);
    return expense_storage;

}

function handleAddInvestment () {
    let i_name_inv = document.getElementById("investment_name");
    let i_worth_inv = document.getElementById("investment_worth");
    let i_cat_inv = document.getElementById("investment_type");
    let investment = {
        name: i_name_inv.value,
        worth: i_worth_inv.value,
        cat: i_cat_inv.value
    }
    investment_storage.push(investment);
    console.log("investments", investment_storage);
    return investment_storage;
}


function expense_liability_information() {
    
}

function total_spent () {

}

function total_invested () {

}

function net_worth () {

}