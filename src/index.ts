import express from 'express'


const PORT: number = 4000
const HOSTNAME: string = 'http://localhost'
const app = express()

app.get('/', (req, res) => {
    res.send('Bem-vindo werwerwer!')
})

app.use((req, res) => {
    res.status(404)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})