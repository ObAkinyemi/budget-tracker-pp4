
// console.log(budget);
expense_storage = [];

function display_budget () {
    let budget = document.getElementById("BudgetInput");
    console.log(typeof(budget.click));

    // if (budget.click == true) {
    //     console.log(Number(budget.value));
    // }

}
function expense (name, worth, category) {
    // let name = document.getElementById("expense_name");
    // let worth = document.getElementById("expense_worth");
    // let category = document.getElementById("expense_type");
    // let expense_button = document.getElementById("add_exp_button");
    console.log(name);
    console.log(worth);
    console.log(category);
    return {name, worth, category};
}

function store_expense () {
    expense_storage.push(expense());
    console.log(expense_storage);
    return expense_storage;
}
function liability () {

}


function expense_liability_information() {
    
}

function total_spent () {

}

function total_invested () {

}

function net_worth () {

}