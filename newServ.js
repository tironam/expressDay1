const http = require('http')
const { readFile } = require('fs')
const { promisify } = require('util')

const rf = promisify(readFile)

const server = http.createServer((req, res) => {
    // switch (req.url)
    rf('movies.html', 'utf8')
        .then(html => {
            res.end(html)
        })
        .catch(err => console.log(err))
})

server.listen(3000, () => {
    console.log('Server be runnin\', son')
})