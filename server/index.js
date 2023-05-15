/*  1 - Desenvolver uma API em Noje.js do zero? ✅
    2- Instalação de pacotes: ✅
        - Express: para criar um servidor HTTP.
        - Body-parser: para interpretar o corpo das requisições recebidas pelo servidor.

    3- Integrar com a aplicação em Angular. ✅
*/

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000

// Configuração do CORS
app.use(cors({ origin: 'http://localhost:4200' }))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/api/resposta', (req, res) => {
	const resposta = req.body.resposta
	if (resposta.toLowerCase() === 'sim') {
		res.status(200).json('Sucesso')
	} else {
		res.status(400).send('Erro')
	}
})

app.listen(PORT, () => {
	console.log(`API running on port ${PORT}`)
})

// JSON: curl -X POST -H "Content-Type: application/json" -d '{"resposta":"sim"}' http://localhost:3000/api/resposta
