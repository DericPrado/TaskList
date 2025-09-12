import express from 'express'
import { Dependencies } from './Dependencies';



const PORT: number = 4000;
const HOSTNAME: string = 'http://localhost';
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vindo !')
});

app.use(express.json());
app.use("/", Dependencies.TaskRoutes.GetRoutes());

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
});