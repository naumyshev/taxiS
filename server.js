const http = require('http')

const server =
    http.createServer((rec, res) => {
        console.log('Request')

        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })

        res.end("Hello from Back-end")
    })

server.listen(3000)