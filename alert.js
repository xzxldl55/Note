function alertMessage (msg) {
    alert(msg)
}

function consoleMessage (msg, type = 'warn') {
    console[type](msg)
}

export {
    alertMessage, 
    consoleMessage
}
