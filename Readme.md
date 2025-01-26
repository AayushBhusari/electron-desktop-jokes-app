# Electron Desktop Jokes App

A simple Electron application that displays random jokes from an API and allows you to close the application using a custom button.

---

## Features

- **Dark Theme**: The app features a modern dark theme UI.
- **Random Jokes**: Fetches random jokes using the [Official Joke API](https://official-joke-api.appspot.com/random_joke).
- **Window Controls**: Includes a draggable area for the window and a custom close button.
- **Interactive UI**: Smooth button interactions with hover and active states.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AayushBhusari/electron-desktop-jokes-app.git
   cd electron-joke-app
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. Run the app:
   ```bash
   npm start
   ```

---

## Usage

- Click the **"Get Joke"** button to fetch a random joke.
- Use the **drag area** to move the application window around.
- Click the **"Close"** button to exit the application.

---

## Files Overview

### Key Files:

- **`main.js`**: Handles the creation of the Electron window and app lifecycle.
- **`script.js`**: Contains the logic for fetching jokes and managing the UI.
- **`index.html`**: The main HTML file for the app's UI.
- **`style.css`**: Styles for the app's modern and responsive design.

---

## Development

To make changes to the app:

1. Run the app in development mode:
   ```bash
   npm start
   ```
2. Edit the files in the `src` folder (`index.html`, `script.js`, `style.css`, etc.).
3. Reload the app to see your changes.

---

## Technologies Used

- **Electron**: For building cross-platform desktop applications.
- **HTML/CSS**: For the UI and styling.
- **JavaScript**: For app logic and interaction with the Joke API.

---

## Future Enhancements

- Add a **"Minimize to Tray"** feature.
- Include a favorites system for jokes.
- Local storage for offline joke viewing.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [Official Joke API](https://official-joke-api.appspot.com/) for providing the jokes.
- Inspiration from other Electron-based projects.

---

Happy coding! 🎉
