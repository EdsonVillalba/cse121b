/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Edson Villalba";
const currentYear = 2024;
const profilePicture = "images/Edson.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
let imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);

/* Step 5 - Array */

// Declare an array variable to hold your favorite foods
let favoriteFoods = ["Pizza", "Ice Cream", "Burger"];

// Modify the HTML element with the id of "food" to display your favorite foods array
foodElement.innerHTML = favoriteFoods.join("<br>");

// Declare and instantiate a variable to hold another single favorite food item
let newFavoriteFood = "Sushi";

// Add the value stored in this new variable to your favorite food array
favoriteFoods.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of "food" using += operator and a <br> (line break character)
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;

// Remove the first element in the favorite food array
favoriteFoods.shift();

// Append the array output showing the modified array, using a line break
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;

// Remove the last element in the favorite food array
favoriteFoods.pop();

// Append the array output with this final modified favorite foods array
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;
