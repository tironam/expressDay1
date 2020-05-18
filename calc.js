const http = require('http')

const server = http.createServer((req, res) => {
    // splits the url up into different pieces and this will show you how to pick the pieces
    console.log(req.url.split('/'))
    const pieces = req.url.split('/')
    // Don't gorget to parse a and b as integers or they'll be strings you can't add together
    const op = pieces[1]
    const a = parseInt(pieces[2])
    const b = parseInt(pieces[3])

    // You have to use temperate literals because it can't pass a number, only a string
    switch (op) {
        case 'add':
            res.end(`${a + b}`)
            break
        case 'subtract':
            res.end (`${a - b}`)
            break
        case 'multiply':
            res.end(`${a * b}`)
            break
        case 'divide':
            res.end(`${a / b}`)
            break
    }
})

server.listen(3000, () => {
    console.log('Droid is READY')
})