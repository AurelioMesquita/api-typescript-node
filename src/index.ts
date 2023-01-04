const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({ message: 'oieee' })
})



app.listen(3434, () => { console.log('running') })