const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
    '¿Segura?',
    '¿Estas muy segura?',
    'Piensalo bien',
    'Deja de presionar No :(',
    '¿Estas segura de que estas segura?',
    '¿Mira el otro boton',
]

buttonNo.addEventListener('click', () => {
    fontSize = fontSize + 0.5
    buttonYes.style.fontSize = `${fontSize}rem`
 
    const randomIndex = Math.floor(Math.random() * messages.length)
    
    buttonNo. textContent = messages[randomIndex]
})

buttonYes.addEventListener('click', () => {
    document.querySelector('#message').style.display = 'flex'
 })