const express = require('express')

const app = express()

app.get('/message/:id/:user', (request, response) => {
  const {id, user} = request.params 
  response.send(`
    ID da mensagem: ${id}
    Nome do usuário: ${user}
    `)
})

const PORT = 3333

app.listen(PORT, () => console.log(`Funcionando na porta ${PORT}`))