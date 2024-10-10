// Variables to store total amount and the list of expenses
let totalAmount = 0;
let expenses = [];

// Get references to DOM elements
const form = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const dateInput = document.getElementById('date');
const categoryInput = document.getElementById('category');
const totalAmountDisplay = document.getElementById('total-amount');
const expenseItems = document.getElementById('expense-items');

// Function to update total amount display
function updateTotalAmount() {
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
}

// Function to add expense to the list
function addExpense(e) {
    e.preventDefault();

    // Get input values
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;
    const category = categoryInput.value;

    if (description === '' || amount <= 0 || date === '') {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Add the expense to the list
    const expense = { description, amount, date, category };
    expenses.push(expense);

    // Update the total amount
    totalAmount += amount;

    // Clear form fields
    descriptionInput.value = '';
    amountInput.value = '';
    dateInput.value = '';
    categoryInput.value = 'Food';

    // Update the UI
    renderExpenses();
    updateTotalAmount();
}

// Function to render the list of expenses
function renderExpenses() {
    expenseItems.innerHTML = '';

    expenses.forEach((expense, index) => {
        const expenseItem = document.createElement('li');
        expenseItem.innerHTML = `${expense.description} - $${expense.amount.toFixed(2)} | ${expense.date} | ${expense.category}`;
        expenseItems.appendChild(expenseItem);
    });
}

// Attach event listener to the form
form.addEventListener('submit', addExpense);
