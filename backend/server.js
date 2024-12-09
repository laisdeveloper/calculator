const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend Node.js está rodando corretamente!');
});

app.post('/sum', (req, res) => {
  const { num1, num2 } = req.body;
  res.status(200).json({ result: num1 + num2 });
});

app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));
