// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { remote } = require("electron");
const { Menu, MenuItem } = remote;

const menu = new Menu();

menu.append(new MenuItem({
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
})