const express = require('express')

const app = express()

app.get('/message/:id/:user', (request, response) => {
  const {id, user} = request.params 
  response.send(`
    ID da mensagem: ${id}
    Nome do usuário: ${user}
    `)
})

app.get('/users', (request, response) => {
  const { page, limit} = request.query

  response.send(`Quantidade de páginas: ${page}, 
    O limite destas: ${limit}`)
})

const PORT = 3333

app.listen(PORT, () => console.log(`Funcionando na porta ${PORT}`))