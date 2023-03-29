const express = require('express')
const app = express()

let area = 0;
app.post('/calculate', (req, res) => {
    let data = req.query;
    area = 0.5 * (data.base * data.height);
    res.json({
        data: {
            Area: area
        },
        message: {
            "statusCode": 200,
            "statusMessage": 'SUCCESS',
        }
    })
})

app.get('/getArea', (req, res) => {
    res.json({
        data: {
            Area: area
        },
        message: {
            "statusCode": 200,
            "statusMessage": 'SUCCESS',
        }
    })
})

app.listen(3000, (req, res) => {
    console.log('Express API is running at port 3000');
})