const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors({ origin: 'http://localhost:4200' }))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/api/decision', (req, res) => {
	const decision = req.body.decision.toLowerCase()
	if (decision === 'sim') {
		res.status(200).json('Sucesso')
	} else {
		res.status(400).send('Erro')
	}
})

app.listen(PORT, () => {
	console.log(`API running on port ${PORT}`)
})
