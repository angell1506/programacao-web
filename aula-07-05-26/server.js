const express = require('express')
const app = express()
const port = 3000

//rotas para o acesso às páginas da sua aplicação
app.get('/sobre', (req, res) => {
  res.send('página Sobre!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
