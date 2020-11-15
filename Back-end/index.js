const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req, res)=> {
    res.send("Agora foi em")
})

const rotas = require('./rotas')
app.use('/api', rotas)

app.use(express.static(__dirname + '../back-end/front'))


const port = 3001

app.listen(port, () => {
    console.log("Server rodando em http://localhost:",port)

})