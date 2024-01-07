// Get the filter form element
const filterForm = document.getElementById("filterForm");

// Get the reset button element
const resetButton = document.querySelector(".reset-button");

// Add a submit event listener to the form
filterForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get selected values from the form
    const city = document.getElementById("location").value;
    const practice = document.getElementById("practice").value;
    const court = document.getElementById("court").value;
    const experience = document.getElementById("experience").value;
    const gender = document.getElementById("gender").value;
    const ratings = document.getElementById("ratings").value;
    const sortBy = document.getElementById("sortBy").value;

    // Perform actions with the selected values (you can customize this part)
    console.log("Selected City:", city);
    console.log("Selected Practice Area:", practice);
    console.log("Selected Court:", court);
    console.log("Selected Experience:", experience);
    console.log("Selected Gender:", gender);
    console.log("Selected Ratings:", ratings);
    console.log("Selected Sort By:", sortBy);

    // You can further customize this code to perform specific actions based on the selected filters
});

// Add a click event listener to the reset button
resetButton.addEventListener("click", function () {
    // Reset all form elements to their default values
    filterForm.reset();
});
