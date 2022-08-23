// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, dialog, globalShortcut, Menu, MenuItem} = require('electron')
const url = require('url');
const path = require('path')
const icon = path.join(__dirname , './icon.png')

let mainWindow

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    
    icon:  icon
  })


  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true 
  }));

  
 mainWindow.on('closed',function() {
  mainWindow = null
 })



 globalShortcut.register('CmdOrCtrl+j', () => {
    console.log(new Date().toISOString());
 });

 globalShortcut.register('Alt+j', () => {
  dialog.showMessageBox({icon: icon, title: 'shortcut teste', message: 'ok'});
});
}

const menu = Menu.buildFromTemplate([
  {
    label: "teste",
    sublabel: 'sublabel',
    submenu: [
      {
        label: 'nivel 2-1',
        submenu: [
          {
            label: 'nivel 3',
            icon: icon,
          }
        ]

      },
      {
        label: 'nivel 2-2',
        click: (MenuItem, BrowserWindow, event) => {
          console.log(event);
          console.log(new Date().toISOString());
        }
      },
      {
        label: 'nivel 2-3',
        accelerator: 'CmdOrCtrl+J',
        registerAccelerator: true
      },
      {
        label: 'nivel 2-4',
        accelerator: 'CmdOrCtrl+K',
        registerAccelerator: true,
        click: () => {
          console.log(new Date().toISOString());
        }
      },
    ]
    
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Desfazer',
        role: 'undo'
      },
      {
        label: 'Refazer',
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        label: 'Cortar',
        role: 'cut'
      },
      {
        label: 'Copiar',
        role: 'copy'
      },
      {
        label: 'Colar',
        role: 'paste'
      },
  
    ]
  },
  {
    label: 'Visualizador',
    submenu: [
      {
        role: 'reload'
      },
      {
        role: 'toggledevtools'
      },
      {
        role: 'resetzoom'
      },
      {
        role: 'zoomin'
      },
      {
        role: 'zoomout'
      },
      {
        role: 'togglefullscreen'
      }
    ]
  },
  {
    label: 'janela',
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      },
    ]
  }
])

Menu.setApplicationMenu(menu);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready',createWindow)



// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
}
})



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

//IPCMAIN

ipcMain.on("dialog-1", (event, args) => {
  dialog.showErrorBox("404","file not found");
})

ipcMain.on("dialog-2", (event, args) => {
  dialog.showMessageBox({
    title:"Titulo",
    message:"Mensagem simples",
    detail: "detalhamento da mensagem",
    icon: icon,
    buttons: ["Ok", "Cancelar", "teste 1","Teste 2"]

  },
    (response, checkboxChecked) => {
      console.log(response);
  });
})

ipcMain.on("dialog-3", (event, args) => {
  dialog.showOpenDialog({
    title: "Procurando arquivo html..",
    buttonLabel: "Arquivo Html",
    message: "mensagem",
    properties:['openFile', 'multiSelections'],
    filters: [
      {
        name: "All",
        extensions: ['*']
      },
      {
        name: "Página da Web",
        extensions: ["htm", "html"]
      }

    ]
  }, (filePaths, bookmarks) => {
    console.log(filePaths, bookmarks)
  })
})

ipcMain.on("dialog-4", (event, args) => {
  dialog.showSaveDialog({
    title: "Salvando arquivo HTML",
    message: "message",
    buttonLabel: "Salvar HTML",
    nameFieldLabel: "Nome Arquivo",
    filters: [
      {
        name: "All",
        extensions: ['*']
      },
      {
        name: "Texto",
        extensions: ["txt"]
      },
      {
        name: "Página da WEB",
        extensions: ["htm", "html"]
      },
    ]
  }, (filename, bookmark) => {
    console.log(file)
  });
})