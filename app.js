
// const http = require('http')


// http.createServer(function (req, res) {
//     console.log("server started")
//     console.log(req.url)


//     if (req.url === '/add-product') {
//         console.log('in /add-product')
//     }
// }).listen(3000)


const express = require('express')
// comment
const app = express()

// common middleware code for all
app.use('/', (req, res, next) => {
    console.log("common code")
    next()
})

// middle ware 2
app.use('/product', (req, res, next) => {
    console.log("2nd middleware")
})


// middleware
app.use('/', (req, res, next) => {
    console.log("i'm in middleware 1")

    // res.writeHead(200, { 'Content-Type': 'text/html' })
    // res.write('<h1>Yo YO</h1>')
    // res.write('<p>WEB DEV CLUB</p>')
    // return res.end()

    res.send('<h1>Yo YO</h1><p>WEB DEV CLUB</p>')

})




app.listen(3000)
// // middle ware 2
// app.use('/add-product', (req, res, next) => {

//     console.log("MIDDLEWARE2")
// })

// // middleware 3
// app.use('/delete', (req, res, next) => {

//     console.log("MIDDLEWARE33")
// })



// // middle ware
// app.use('/', (req, res, next) => {
//     console.log('Hurray working!')
//     res.send('<h1>You are now looking at the response</h1>')

// })



// function add(a, b) {
//     return a + b
// }

// var add = (a, b) => {
//     return a + b
// }


// console.log(add(1, 5))


