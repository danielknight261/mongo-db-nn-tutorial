const express = require('express')
const { connectToDb, getDb} = require('./db')

//init app and middleware
const app = express()

//db connection
let db

connectToDb(() => {
    if (!err) {
        app.listen(3000, () => {
            console.log('app listening on port 3000')
        })
        db =getDb()
    }
})



//routes handler to /books
app.get('/books', (req, res) => {
    res.json({mssg: "welcome to the api"})
})