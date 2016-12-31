const app = require('electron').app
const dialog = require('electron').dialog

app.on('ready', () => {
    dialog.showErrorBox('An Error Message', 'Demonstrating an error message.')
})