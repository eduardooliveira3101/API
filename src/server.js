const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.json())
app.use(routes)

app.post('/users', (request, response) => {
  const {name, email, password} = request.body
  response.json({name, email, password})
})

const PORT = 3333
app.listen(PORT, () => console.log(`Funcionando na porta ${PORT}`))