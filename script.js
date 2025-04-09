
// console.log(budget);
let expense_storage = [];
let investment_storage = [];
// let i_name = document.getElementById("expense_name");
// let worth = document.getElementById("expense_worth");
// let category = document.getElementById("expense_type");
// let expense_button = document.getElementById("add_exp_button");

function display_budget () {
    let budget = document.getElementById("BudgetInput");
    console.log(typeof(budget.click));

    // if (budget.click == true) {
    //     console.log(Number(budget.value));
    // }

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
    console.log("expenses", expense_storage);
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