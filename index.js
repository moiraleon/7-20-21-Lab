const express = require('express')
const cors = require('cors')
const app = express()
const  ctrl = require('./controller')

app.use(express.json())
app.use(cors())

//getAllHouses
app.get('/api/houses', ctrl.getHouses)

//delete house
app.delete('/api/houses/:id', ctrl.deleteHouse)

//add house
app.post('/api/houses', ctrl.createHouse)

//update house
app.put('/api/houses/:id', ctrl.updateHouse)

app.listen(4004, () => console.log('running on 4004'))
