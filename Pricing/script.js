// Get the select plan button
const selectPlanButton = document.getElementById("select-plan-button");

// Add a click event listener to the button
selectPlanButton.addEventListener("click", function () {
    // Get the selected duration value
    const selectedDuration = document.querySelector('input[name="duration"]:checked').value;

    // Determine the price based on the selected duration
    let price = 0;
    if (selectedDuration === "30") {
        price = 50;
    } else if (selectedDuration === "60") {
        price = 100;
    }

    // Display the selected plan and price
    alert(`You selected a ${selectedDuration}-minute consultation for $${price}.`);
});
