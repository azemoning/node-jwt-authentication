const express = require('express')
const app = express()
const port = process.env.APP_PORT

app.use(express.json())

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})