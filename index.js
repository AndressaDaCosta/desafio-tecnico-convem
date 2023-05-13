/*  1 - Desenvolver uma API em Noje.js do zero?
    2- Instalação de pacotes: 
        - Express: para criar um servidor HTTP.
        - Body-parser: para interpretar o corpo das requisições recebidas pelo servidor.

    3- Integrar com a aplicação em Angular.
*/

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/api/response', (req, res) => {
	const userResponse = req.body.userResponse.toLowerCase()
	if (userResponse === 'sim') {
		res.status(200).send('Successo')
	} else {
		res.status(400).send('Erro')
	}
})

app.listen(PORT, () => {
	console.log(`API running on port ${PORT}`)
})

// JSON: curl -X POST -H "Content-Type: application/json" -d '{"answer":"sim"}' http://localhost:3000/api/answer
