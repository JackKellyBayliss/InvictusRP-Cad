const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({ 
  width: 1024,
  height: 768,
  title: "InvictusRP - CAD System | v0.1",
  show: false
 });
 
  splash = new BrowserWindow({width: 340, height: 360, transparent: true, frame: false, alwaysOnTop: true});
  splash.loadURL(`file://${__dirname}/resources/splash.html`);
  mainWindow.loadURL(`file://${__dirname}/resources/browser.html`, { userAgent: "InvictusRP CAD System" });
  console.log('INFO: Main Window started loading');
  mainWindow.setMenu(null);
  console.log('INFO: Main Window finished loading');
  
  mainWindow.once('ready-to-show', () => {
	 setTimeout(function() {
		splash.destroy();
		console.log('INFO: Destroyed Splash Screen');
	
		mainWindow.show();
		console.log('INFO: Main Window show');
	}, 5000);
  });
  
});
