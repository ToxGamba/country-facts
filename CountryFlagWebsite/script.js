const facts = {
    usa: "The United States of America has 50 states and its flag is called 'Stars and Stripes'.",
    canada: "Canada's flag features a red maple leaf and was adopted in 1965."
    // Add more countries here, e.g., 'france': "Fact about France"
};

function showFact(country) {
    const factText = document.getElementById('fact-text');
    factText.textContent = facts[country] || "No fact available for this country.";
}
