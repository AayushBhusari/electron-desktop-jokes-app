// Import the ipcRenderer module
const { ipcRenderer } = require("electron");

// Select the DOM elements
let jokeDiv = document.querySelector("#joke-div");
let jokeBtn = document.querySelector("#joke-btn");
let closeBtn = document.querySelector("#close-btn");

// Function to fetch and display a new joke
const getNewJoke = async () => {
  jokeDiv.innerHTML = "Loading..."; // Show a loading message
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = await response.json();
    // Display the joke in the jokeDiv
    jokeDiv.innerHTML = `${joke.setup}<br>${joke.punchline}`;
  } catch (error) {
    // Handle errors by showing a message
    console.error("Error fetching joke:", error);
    jokeDiv.innerHTML = "Failed to fetch a joke. Please try again.";
  }
};

// Attach a click event listener to the New Joke button
jokeBtn.addEventListener("click", () => {
  getNewJoke(); // Fetch and display a new joke
});

// Attach a click event listener to the Close button
closeBtn.addEventListener("click", () => {
  // Send a signal to the main process to close the window
  ipcRenderer.send("close-window");
});

// Fetch a joke on page load
getNewJoke();
