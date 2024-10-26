function calculateBudget() {
    // Get input values
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);

    // Calculate projected budget amounts
    const amountToday = expenses - income;
    const amountNextWeek = amountToday * 4;  // Example calculation
    const amountNextMonth = amountToday * 4; // Assuming 4 weeks in a month

    // Update display with calculations
    document.getElementById("amount-today").textContent = `$${amountToday.toFixed(2)}`;
    document.getElementById("amount-next-week").textContent = `$${amountNextWeek.toFixed(2)}`;
    document.getElementById("amount-next-month").textContent = `$${amountNextMonth.toFixed(2)}`;
}
