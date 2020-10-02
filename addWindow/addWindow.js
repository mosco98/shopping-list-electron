const electron = require('electron')
const { ipcRenderer } = electron

const form = document.querySelector('form')

form.addEventListener('submit', submitForm)

function submitForm(e) {
  console.log('Submitted')
  e.preventDefault()
  const item = document.querySelector('#item').value
  ipcRenderer.send('item:add', item)
}
