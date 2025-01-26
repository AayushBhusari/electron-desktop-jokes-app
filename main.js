// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

let mainWindow; // Declare mainWindow globally for proper access in IPC events

const createWindow = () => {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 500,
    height: 300,
    frame: false, // Removes the default frame for custom window styling
    webPreferences: {
      nodeIntegration: true, // Enable Node.js integration in the renderer process
      contextIsolation: false, // Disable context isolation for simplicity
      devTools: false, // Disable DevTools in production
    },
    icon: path.join(__dirname, "./assets/icons/joke.ico"),
  });

  mainWindow.setSkipTaskbar(true); // Hide the app icon from the taskbar

  // Load the index.html of the app
  mainWindow.loadFile("index.html");

  // Open the DevTools (optional; remove in production)
  // mainWindow.webContents.openDevTools();

  // Handle the window close event explicitly
  mainWindow.on("closed", () => {
    mainWindow = null; // Dereference the window object to avoid memory leaks
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// Listen for 'close-window' IPC event from renderer process
ipcMain.on("close-window", () => {
  if (mainWindow) {
    mainWindow.close(); // Close the window when the event is received
  }
});

// In this file, you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
