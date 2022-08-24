// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

window.onload = () => {
    const webview = document.querySelector("#webview")
    const loading = document.querySelector(".loading")

    webview.addEventListener("did-start-loading",() => {
        loading.innerHTML = 'Carregando...'
    })

    webview.addEventListener("did-stop-loading",() => {
        loading.innerHTML = ''
    })

    webview.addEventListener("dom-ready",() => {
        console.log("dom carregado");
    })
}

/* const notifier = require("node-notifier");
const path = require("path");

document.querySelector("#notify").onclick = () => {
    notifier.notify({
        title:"titulo notify",
        message: "mensagem notify",
        icon:path.join(__dirname, "icon.png"),
        wait: true,
        sound: true
    }, (err, response) => {
        console.log(err, response);
    });
    
    notifier.on('click', () => {
        console.log("click")
    });

    notifier.on("timeout",() => {
        console.log("timeout");
    })
} */

//const { remote } = require("electron");
//const { Menu, MenuItem } = remote;

//const menu = new Menu();


/* menu.append(new MenuItem({
    label: 'Item 1',
    type: "checkbox"
}))

menu.append(new MenuItem({ label: 'Item 3' }));

menu.append(new MenuItem({ type: "separator" }));
menu.append(new MenuItem({ 
            label: 'Item 3', 
            submenu: [
                {
                   label: 'tecla do atalho',
                   accelerator: 'Alt+L',
                   registerAccelerator: true,
                   click: () => {
                    console.log("Alt+L");
                   }
                }
            ] 
        }))

window.addEventListener('contextMenu',(e) => {
    e.preventDefault();
    menu.popup(remote.getCurrentWindow());
}) */