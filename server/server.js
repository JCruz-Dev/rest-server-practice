require('./../config/config')

let express = require('express');
let app = express();
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/user', (req, res) => {
    res.json({
        message: 'Nice, you used the GET method.'
    })
})

app.post('/user',(req, res) => {
    let body =  req.body
    res.json({
        user: body
    })
})

app.put('/user', (req, res) => {
    res.json({
        message: 'Nice, you used the PUT method'
    })
})

app.delete('/user', (req, res) => {
    res.json({
        message: 'Nice, you used the DELETE method'
    })
})

app.listen(process.env.PORT, () => {
    console.log(`listening PORT: ${process.env.PORT}`)
})