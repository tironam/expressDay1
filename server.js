const http = require('http')

const server = http.createServer((req, res) => {
    // This was my code, but you want to use switch cases

    // if (req.url === '/movies') {
    //     res.end(
    //         'Scott Pilgrim, Ghostbusters, Back to the Future, Hot Fuzz, La La Land'
    //         )
    // } else if 
    //     (req.url === '/games') {
    //         res.end('Breath of the Wild, Portal 2, Tony Hawk\'s Pro Skater, Rock Band, Spider-Man')
    //     } else if (req.url === '/songs') {
    //         res.end('Hands Down by Dashboard Confessiona, Jack Sparrow by The Lonely Island, Perfect Situation by Weezer, Sunflower by Post Malone, Grand Theft Autumn by Fall Out Boy')
    //     } else if (req.url === '/foods') {
    //         res.end('Pizza, Burgers, Steak, Breakfast Burritos, Fried Chicken')
    //     }

    switch (rteq.url) {
        case '/movies':
            break
        case '/games':
            break
        case '/songs':
            break
        case '/foods':
            break
    }
})

server.listen(3000, () => {
    console.log('Server is running...')
})