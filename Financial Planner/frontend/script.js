let incomeEntryCount = 0;
let expenseEntryCount = 0;

function addIncomeEntry() {
    const incomeContainer = document.getElementById('income-container');
    incomeEntryCount++;

    const incomeHTML = `
        <div class="entry" id="income-${incomeEntryCount}">
            <label for="income-name-${incomeEntryCount}">Income Source ${incomeEntryCount}:</label>
            <input type="text" id="income-name-${incomeEntryCount}" placeholder="Source Name" />
            <input type="number" min="0" id="income-amount-${incomeEntryCount}" placeholder="Amount" />
            <select id="income-frequency-${incomeEntryCount}">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="biweekly">Biweekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
            </select>
        </div>`;
    
    incomeContainer.insertAdjacentHTML('beforeend', incomeHTML);
}

function addExpenseEntry() {
    const expenseContainer = document.getElementById('expense-container');
    expenseEntryCount++;

    const expenseHTML = `
        <div class="entry" id="expense-${expenseEntryCount}">
            <label for="expense-name-${expenseEntryCount}">Expense ${expenseEntryCount}:</label>
            <input type="text" id="expense-name-${expenseEntryCount}" placeholder="Expense Name" />
            <input type="number" min="0" id="expense-amount-${expenseEntryCount}" placeholder="Amount" />
            <select id="expense-frequency-${expenseEntryCount}">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="biweekly">Biweekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
            </select>
        </div>`;
    
    expenseContainer.insertAdjacentHTML('beforeend', expenseHTML);
}

function calculateBudget() {
    let totalIncome = 0;
    let totalExpenses = 0;

    for (let i = 1; i <= incomeEntryCount; i++) {
        const amount = parseFloat(document.getElementById(`income-amount-${i}`).value) || 0;
        const frequency = document.getElementById(`income-frequency-${i}`).value;
        totalIncome += calculateAnnualAmount(amount, frequency);
    }

    for (let i = 1; i <= expenseEntryCount; i++) {
        const amount = parseFloat(document.getElementById(`expense-amount-${i}`).value) || 0;
        const frequency = document.getElementById(`expense-frequency-${i}`).value;
        totalExpenses += calculateAnnualAmount(amount, frequency);
    }

    const monthlyIncome = (totalIncome / 12).toFixed(2);
    const monthlyExpenses = (totalExpenses / 12).toFixed(2);
    const surplusOrDeficit = (totalIncome - totalExpenses) / 12;

    /*const resultElement = document.getElementById('surplus-deficit');
    resultElement.textContent = `$${Math.abs(surplusOrDeficit).toFixed(2)} ${surplusOrDeficit >= 0 ? 'Surplus' : 'Deficit'}`;
    resultElement.style.color = surplusOrDeficit >= 0 ? 'green' : 'red';

    document.getElementById('total-income').textContent = `$${monthlyIncome}`;
    document.getElementById('total-expenses').textContent = `$${monthlyExpenses}`;*/

    // Display the plan section
    document.getElementById('plan').style.display = 'block';
    document.getElementById('plan-income').textContent = `$${monthlyIncome}`;
    document.getElementById('plan-expenses').textContent = `$${monthlyExpenses}`;
    
    // Placeholder for payment increments (you can update this later with actual logic)
    document.getElementById('payment-increments').textContent = `To be determined...`;

    // Scroll to the plan section
    document.getElementById('plan').scrollIntoView({ behavior: 'smooth' });
}


function calculateAnnualAmount(amount, frequency) {
    switch (frequency) {
        case 'daily': return amount * 365;
        case 'weekly': return amount * 52;
        case 'biweekly': return amount * 26;
        case 'monthly': return amount * 12;
        case 'yearly': return amount;
        default: return 0;
    }
}
