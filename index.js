const express = require('express')
const app = express()
const port = process.env.APP_PORT

app.use(express.json())

app.use('/auth', require('./routes/authRoute'))

app.use((error, req, res, next) => {
    res.send(error)
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})