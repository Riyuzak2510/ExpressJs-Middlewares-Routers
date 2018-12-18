const express = require('express')
const server = express();

const m1 = function(req,res,next) {
    console.log("We are in Middleware1")
    next()
}

const m2 = function(req,res,next) {
    console.log("We are in Middleware2")
    next()
}
const m3 = function(req,res,next) {
    console.log("We are in Middleware3")
    next()
}
/*m1 runs then m2 and then console*/
server.use(m1)

server.use('/a',m2)

server.get('/a',function(req,res,next) {
    res.send('Hello World')
})

server.use(m3)
/*m3 defined after server.get() does not run*/
server.listen(3232)